///<reference path="conditionalConverters.ts"/>
/*function trace(...argz: any[]) {
	console.debug.apply(console, argz);
 }*/
const trace = console.debug;

class Parser {

	public debug: boolean     = false;
	public logErrors: boolean = true;

	/**
	 * @param ownerClass main game class. Variables are looked-up in this class.
	 * @param settingsClass global static class used for shoving conf vars around
	 */
	constructor(private ownerClass: any,
				private settingsClass: any) {
	}

	/*
	 Parser Syntax:

	 // Querying simple PC stat nouns:
	 [noun]

	 Conditional statements:
	 // Simple if statement:
	 [if (condition) OUTPUT_IF_TRUE]
	 // If-Else statement
	 [if (condition) OUTPUT_IF_TRUE | OUTPUT_IF_FALSE]
	 // Note - Implicit else indicated by presence of the "|"

	 // Object aspect descriptions
	 [object aspect]
	 // gets the description of aspect "aspect" of object/NPC/PC "object"
	 // Eventually, I want this to be able to use introspection to access class attributes directly
	 // Maybe even manipulate them, though I haven't thought that out much at the moment.

	 // Gender Pronoun Weirdness:
	 // PRONOUNS: The parser uses Elverson/Spivak Pronouns specifically to allow characters to be written with non-specific genders.
	 // http://en.wikipedia.org/wiki/Spivak_pronoun
	 //
	 // Cheat Table:
	 //           | Subject    | Object       | Possessive Adjective | Possessive Pronoun | Reflexive         |
	 // Agendered | ey laughs  | I hugged em  | eir heart warmed     | that is eirs       | ey loves emself   |
	 // Masculine | he laughs  | I hugged him | his heart warmed     | that is his        | he loves himself  |
	 // Feminine  | she laughs | I hugged her | her heart warmed     | that is hers       | she loves herself |



	 [screen (SCREEN_NAME) | screen text]
	 // creates a new screen/page.

	 [button (SCREEN_NAME)| button_text]
	 // Creates a button which jumps to SCREEN_NAME when clicked

	 */


	// this.parserState is used to store the scene-parser state.
	// it is cleared every time recursiveParser is called, and then any scene tags are added
	// as parserState["sceneName"] = "scene content"

	public parserState: Object = {};


	// Does lookup of single argument tags ("[cock]", "[armor]", etc...) in singleArgConverters
	// Supported variables are the options listed in the above
	// singleArgConverters object. If the passed argument is found in the above object,
	// the corresponding anonymous function is called, and it's return-value is returned.
	// If the arg is not present in the singleArgConverters object, an error message is
	// returned.
	// ALWAYS returns a string
	private convertSingleArg(depth: number, arg: string): string {
		let argResult: string     = null;
		const capitalize: boolean = this.isUpperCase(arg.charAt(0));

		let argLower: string;
		argLower = arg.toLowerCase();
		if (argLower in singleArgConverters) {
			//if (this.logErrors) trace("WARNING: Found corresponding anonymous function");
			argResult = singleArgConverters[argLower](this.ownerClass);

			if (this.debug) trace("WARNING: Called, return = ", argResult);

			if (capitalize)
				argResult = this.capitalizeFirstWord(argResult);

			return Parser.wrapeval(depth, argResult);
		} else {

			// ---------------------------------------------------------------------------------
			// TODO: Get rid of this shit.
			// UGLY hack to patch legacy functionality in TiTS
			// This needs to go eventually

			const descriptorArray: string[] = arg.split(".");

			let obj: any = this.getObjectFromString(this.ownerClass, descriptorArray[0]);
			if (obj == null)		// Completely bad tag
			{
				if (this.debug || this.logErrors) trace("WARNING: Unknown subject in " + arg);
				return Parser.errstr("!Unknown subject in \"" + arg + "\"!");
			}
			if (typeof obj["getDescription"] === "function" && arg.indexOf(".") > 0) {
				return obj.getDescription(descriptorArray[1], "");
			}
			// end hack
			// ---------------------------------------------------------------------------------


			if (this.debug) trace("WARNING: Lookup Arg = ", arg);
			obj = this.getObjectFromString(this.ownerClass, arg);
			if (obj != null) {
				if (this.debug) trace("        Found something in owner class, obj =", obj, typeof obj);
				if (obj instanceof Function) {
					if (this.debug) trace("        Found corresponding function in owner class");
					return Parser.wrapeval(depth, obj());
				} else {
					if (this.debug) trace("WARNING: Found corresponding aspect in owner class");
					return Parser.wrapeval(depth, obj); 	// explicit cast probably not needed
				}
			} else {
				if (this.debug || this.logErrors) trace("WARNING: No lookup found for", arg, " search result is: ", obj);
				return Parser.errstr("!Unknown tag \"" + arg + "\"!");
			}
		}

	}


	private convertDoubleArg(depth: number, inputArg: string): string {
		let argResult: string = null;

		let thing: any;

		const argTemp: string[] = inputArg.split(" ");
		if (argTemp.length != 2) {
			if (this.logErrors) trace("WARNING: Not actually a two word tag! " + inputArg);
			return Parser.errstr("!Not actually a two-word tag!\"" + inputArg + "\"!")
		}
		const subject: string      = argTemp[0];
		let aspect: any            = argTemp[1];
		const subjectLower: string = argTemp[0].toLowerCase();
		let aspectLower: any       = argTemp[1].toLowerCase();

		if (this.debug) trace("    convertDoubleArg, subject =", subject, ", aspect =", aspect);

		// Figure out if we need to capitalize the resulting text
		const capitalize: boolean = this.isUpperCase(aspect.charAt(0));


		// Only perform lookup in twoWordNumericTagsLookup if aspect can be cast to a valid number

		if ((subjectLower in twoWordNumericTagsLookup) && !isNaN(+aspect)) {
			aspectLower = +aspectLower;

			if (this.debug) trace("        Found corresponding anonymous function");
			argResult = twoWordNumericTagsLookup[subjectLower](this.ownerClass, aspectLower);
			if (capitalize) argResult = this.capitalizeFirstWord(argResult);
			if (this.debug) trace("        Called two word numeric lookup, return = ", argResult);
			return Parser.wrapeval(depth, argResult);
		}

		// aspect isn't a number. Look for subject in the normal twoWordTagsLookup
		if (subjectLower in twoWordTagsLookup) {
			if (aspectLower in twoWordTagsLookup[subjectLower]) {

				if (this.debug) trace("        Found corresponding anonymous function");
				argResult = twoWordTagsLookup[subjectLower][aspectLower](this.ownerClass);
				if (capitalize)
					argResult = this.capitalizeFirstWord(argResult);
				if (this.debug) trace("        Called two word lookup, return = ", argResult);
				return Parser.wrapeval(depth, argResult);
			}
			else {
				if (this.logErrors) trace("WARNING: Unknown aspect in two-word tag. Arg: " + inputArg + " Aspect: " + aspectLower);
				return Parser.errstr("!Unknown aspect in two-word tag \"" + inputArg + "\"! ASCII Aspect = \"" + aspectLower + "\"");
			}

		}


		if (this.debug) trace("        trying to look-up two-word tag in parent");

		// ---------------------------------------------------------------------------------
		// TODO: Get rid of this shit.
		// UGLY hack to patch legacy functionality in TiTS
		// This needs to go eventually

		const descriptorArray: string[] = subject.split(".");

		thing = this.getObjectFromString(this.ownerClass, descriptorArray[0]);
		if (thing == null)		// Completely bad tag
		{
			if (this.logErrors) trace("WARNING: Unknown subject in " + inputArg);
			return Parser.errstr("!Unknown subject in \"" + inputArg + "\"!");
		}
		if (typeof thing["getDescription"] === "function" && subject.indexOf(".") > 0) {
			if (argTemp.length > 1) {
				return thing.getDescription(descriptorArray[1], aspect);
			}
			else {
				return thing.getDescription(descriptorArray[1], "");
			}
		}
		// end hack
		// ---------------------------------------------------------------------------------

		const aspectLookup: any = this.getObjectFromString(this.ownerClass, aspect);

		if (thing != null) {
			if (this.debug) trace("        Found something in owner class, thing =", thing);
			if (thing instanceof Function) {
				if (this.debug) trace("        Found corresponding function in owner class", this.ownerClass);
				return Parser.wrapeval(depth, thing(aspect));
			} else if (Array.isArray(thing)) {
				const indice: number = +aspectLower;
				if (isNaN(indice)) {
					if (this.logErrors) trace("WARNING: Cannot use non-number as indice to Array. Arg " + inputArg + " Subject: " + subject + " Aspect: " + aspect);
					return Parser.errstr("Cannot use non-number as indice to Array \"" + inputArg + "\"! Subject = \"" + subject + ", Aspect = " + aspect + "\"");
				}
				else return Parser.wrapeval(depth, thing[indice])
			} else if (typeof thing == "object") {
				if (aspectLookup in thing)
					return Parser.wrapeval(depth, thing[aspectLookup]);
				else if (aspect in thing)
					return Parser.wrapeval(depth, thing[aspect]);
				else {
					if (this.logErrors) trace("WARNING: Object does not have aspect as a member. Arg: " + inputArg + " Subject: " + subject + " Aspect:" + aspect + " or " + aspectLookup);
					return Parser.errstr("Object does not have aspect as a member \"" + inputArg + "\"! Subject = \"" + subject + ", Aspect = " + aspect + " or " + aspectLookup + "\"");
				}
			}
			else {
				// This will work, but I don't know why you'd want to
				// the aspect is just ignored
				if (this.debug) trace("        Found corresponding aspect in owner class", this.ownerClass);
				return Parser.wrapeval(depth, "" + thing);
			}
		}


		if (this.debug || this.logErrors) trace("WARNING: No lookup found for", inputArg, " search result is: ", thing);
		return Parser.errstr("!Unknown subject in two-word tag \"" + inputArg + "\"! Subject = \"" + subject + ", Aspect = " + aspect + "\"");
		// return Parser.errstr("!Unknown tag \"" + arg + "\"!");
	}


	// converts a single argument to a conditional to
	// the relevant value, either by simply converting to a number, or
	// through lookup in the above conditionalOptions oject, and then calling the
	// relevant function
	// Realistally, should only return either boolean or numbers.
	private convertConditionalArgumentFromStr(arg: string): any {
		// convert the string contents of a conditional argument into a meaningful variable.
		const argLower: any = arg.toLowerCase();
		let argResult: any  = -1;

		// Note: Case options MUST be ENTIRELY lower case. The comparaison string is converted to
		// lower case before the switch:case section

		// Try to cast to a number. If it fails, go on with the switch/case statement.
		if (!isNaN(+arg)) {
			if (this.debug) trace("WARNING: Converted to float. number = ", +arg);
			return +arg;
		}
		if (argLower in conditionalOptions) {
			if (this.debug) trace("WARNING: Found corresponding anonymous function");
			argResult = conditionalOptions[argLower](this.ownerClass);
			if (this.debug) trace("WARNING: Called, return = ", argResult);
			return argResult;
		}


		let obj: any = this.getObjectFromString(this.ownerClass, arg);

		if (this.debug) trace("WARNING: Looked up ", arg, " in ", this.ownerClass, "Result was:", obj);
		if (obj != null) {
			if (this.debug) trace("WARNING: Found corresponding function for conditional argument lookup.");

			if (obj instanceof Function
			) {
				if (this.debug) trace("WARNING: Found corresponding function in owner class");
				argResult = +obj();
				return argResult;
			}
			else {
				if (this.debug) trace("WARNING: Found corresponding aspect in owner class");
				argResult = +obj;
				return argResult;
			}
		}
		else {
			if (this.debug || this.logErrors) trace("WARNING: No lookups found!");
			return null
		}


		/*if (this.printConditionalEvalDebug || LogErrors) trace("WARNING: Could not convert to number. Evaluated ", arg, " as", argResult);
		 return argResult;*/
	}


// Evaluates the conditional section of an if-statement.
// Does the proper parsing and look-up of any of the special nouns
// which can be present in the conditional
	private evalConditionalStatementStr(textCond: string): boolean {
		// Evaluates a conditional statement:
		// (varArg1 [conditional] varArg2)
		// varArg1 & varArg2 can be either numbers, or any of the
		// strings in the "conditionalOptions" object above.
		// numbers (which are in string format) are converted to a number type
		// prior to comparison.

		// supports multiple comparison operators:
		// "=", "=="  - Both are Equals or equivalent-to operators
		// "<", ">    - Less-Than and Greater-Than
		// "<=", ">=" - Less-than or equal, greater-than or equal
		// "!="       - Not equal

		// proper, nested parsing of statements is a WIP
		// and not supported at this time.


		const isExp: RegExp  = /([\w\.]+)\s?(==|=|!=|<|>|<=|>=)\s?([\w\.]+)/;
		let expressionResult = isExp.exec(textCond);
		if (!expressionResult) {
			const condArg: any = this.convertConditionalArgumentFromStr(textCond);
			if (condArg != null) {
				if (this.debug) trace("WARNING: Conditional \"", textCond, "\" Evalueated to: \"", condArg, "\"");
				return condArg
			}
			else {
				if (this.logErrors) trace("WARNING: Invalid conditional! \"(", textCond, ")\" Conditionals must be in format:");
				if (this.logErrors) trace("WARNING:  \"({statment1} (==|=|!=|<|>|<=|>=) {statement2})\" or \"({valid variable/function name})\". ");
				return false
			}
		}
		if (this.debug) trace("WARNING: Expression = ", textCond, "Expression result = [", expressionResult, "], length of = ", expressionResult.length);

		const condArgStr1: string = expressionResult[1];
		const operator: string    = expressionResult[2];
		const condArgStr2: string = expressionResult[3];

		let retVal: boolean = false;

		const condArg1: any = this.convertConditionalArgumentFromStr(condArgStr1);
		const condArg2: any = this.convertConditionalArgumentFromStr(condArgStr2);

		//Perform check
		if (operator == "=")
			retVal = (condArg1 == condArg2);
		else if (operator == ">")
			retVal = (condArg1 > condArg2);
		else if (operator == "==")
			retVal = (condArg1 == condArg2);
		else if (operator == "<")
			retVal = (condArg1 < condArg2);
		else if (operator == ">=")
			retVal = (condArg1 >= condArg2);
		else if (operator == "<=")
			retVal = (condArg1 <= condArg2);
		else if (operator == "!=")
			retVal = (condArg1 != condArg2);
		else
			retVal = (condArg1 != condArg2);


		if (this.debug) trace("WARNING: Check: " + condArg1 + " " + operator + " " + condArg2 + " result: " + retVal);

		return retVal;
	}

// Splits the result from an if-statement.
// ALWAYS returns an array with two strings.
// if there is no else, the second string is empty.
	private splitConditionalResult(textCtnt: string): [string, string] {
		// Splits the conditional section of an if-statemnt in to two results:
		// [if (condition) OUTPUT_IF_TRUE]
		//                 ^ This Bit   ^
		// [if (condition) OUTPUT_IF_TRUE | OUTPUT_IF_FALSE]
		//                 ^          This Bit            ^
		// If there is no OUTPUT_IF_FALSE, returns an empty string for the second option.
		if (this.debug) trace("WARNING: ------------------4444444444444444444444444444444444444444444444444444444444-----------------------");
		if (this.debug) trace("WARNING: Split Conditional input string: ", textCtnt);
		if (this.debug) trace("WARNING: ------------------4444444444444444444444444444444444444444444444444444444444-----------------------");


		let ret: [string, string] = ["", ""];


		let i: number;

		let sectionStart: number = 0;
		let section: number      = 0;
		let nestLevel: number    = 0;

		for (i = 0; i < textCtnt.length; i += 1) {
			switch (textCtnt.charAt(i)) {
				case "[":    //Statement is nested one level deeper
					nestLevel += 1;
					break;

				case "]":    //exited one level of nesting.
					nestLevel -= 1;
					break;

				case "|":                  // At a conditional split
					if (nestLevel == 0)   // conditional split is only valid in this context if we're not in a nested bracket.
					{
						if (section == 1)  // barf if we hit a second "|" that's not in brackets
						{
							if (this.settingsClass.haltOnErrors) throw new Error("Nested IF statements still a WIP");
							ret = [Parser.errstr("Error! Too many options in if statement!"),
								Parser.errstr("Error! Too many options in if statement!")];
						}
						else {
							ret[section] = textCtnt.substring(sectionStart, i);
							sectionStart = i + 1;
							section += 1
						}
					}
					break;

				default:
					break;
			}

		}
		ret[section] = textCtnt.substring(sectionStart, textCtnt.length);


		if (this.debug) trace("WARNING: ------------------5555555555555555555555555555555555555555555555555555555555-----------------------");
		if (this.debug) trace("WARNING: Outputs: ", ret);
		if (this.debug) trace("WARNING: ------------------5555555555555555555555555555555555555555555555555555555555-----------------------");

		return ret;
	}


// Called to evaluate a if statment string, and return the evaluated result.
// Returns an empty string ("") if the conditional rvaluates to false, and there is no else
// option.
	private parseConditional(textCtnt: string, depth: number): string {
		// NOTE: enclosing brackets are *not* included in the actual textCtnt string passed into this function
		// they're shown in the below examples simply for clarity's sake.
		// And because that's what the if-statements look like in the raw string passed into the parser
		// The brackets are actually removed earlier on by the this.recParser() step.

		// this.parseConditional():
		// Takes the contents of an if statement:
		// [if (condition) OUTPUT_IF_TRUE]
		// [if (condition) OUTPUT_IF_TRUE | OUTPUT_IF_FALSE]
		// splits the contents into an array as such:
		// ["condition", "OUTPUT_IF_TRUE"]
		// ["condition", "OUTPUT_IF_TRUE | OUTPUT_IF_FALSE"]
		// Finally, evalConditionalStatementStr() is called on the "condition", the result
		// of which is used to determine which content-section is returned
		//


		// TODO: (NOT YET) Allows nested condition parenthesis, because I'm masochistic


		// POSSIBLE BUG: A actual statement starting with "if" could be misinterpreted as an if-statement
		// It's unlikely, but I *could* see it happening.
		// I need to do some testing
		// ~~~~Fake-Name


		if (this.debug) trace("WARNING: ------------------2222222222222222222222222222222222222222222222222222222222-----------------------");
		if (this.debug) trace("WARNING: If input string: ", textCtnt);
		if (this.debug) trace("WARNING: ------------------2222222222222222222222222222222222222222222222222222222222-----------------------");


		const ret = ["", "", ""];	// first string is conditional, second string is the output

		let i: number                = 0;
		let parenthesisCount: number = 0;

		//var ifText;
		let conditional: any;
		let output: any;

		const condStart: number = textCtnt.indexOf("(");

		if (condStart != -1)		// If we have any open parenthesis
		{
			for (i = condStart; i < textCtnt.length; i += 1) {
				if (textCtnt.charAt(i) == "(") {
					parenthesisCount += 1;
				}
				else if (textCtnt.charAt(i) == ")") {
					parenthesisCount -= 1;
				}
				if (parenthesisCount == 0)	// We've found the matching closing bracket for the opening bracket at textCtnt[condStart]
				{
					// Pull out the conditional, and then evaluate it.
					conditional = textCtnt.substring(condStart + 1, i);
					conditional = this.evalConditionalStatementStr(conditional);

					// Make sure the contents of the if-statement have been evaluated to a plain-text string before trying to
					// split the base-level if-statement on the "|"
					output = textCtnt.substring(i + 1, textCtnt.length);

					// And now do the actual splitting.
					output = this.splitConditionalResult(output);

					// LOTS of debugging
					if (this.debug) trace("WARNING: prefix = '", ret[0], "' conditional = ", conditional, " content = ", output);
					if (this.debug) trace("WARNING: -0--------------------------------------------------");
					if (this.debug) trace("WARNING: Content Item 1 = ", output[0]);
					if (this.debug) trace("WARNING: -1--------------------------------------------------");
					if (this.debug) trace("WARNING: Item 2 = ", output[1]);
					if (this.debug) trace("WARNING: -2--------------------------------------------------");

					if (conditional) return Parser.wrapgroup(depth, this.recParser(output[0], depth));
					else return Parser.wrapgroup(depth, this.recParser(output[1], depth));

				}
			}
		}
		else {
			if (this.settingsClass.haltOnErrors) throw "Invalid if statement! " + textCtnt;
			return Parser.errstr("Invalid IF Statement " + textCtnt);
		}
		return "";
	}


// ---------------------------------------------------------------------------------------------------------------------------------------
// SCENE PARSING ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------


// attempt to return function "inStr" that is a member of "localThis"
// Properly handles nested classes/objects, e.g. localThis.herp.derp
// is returned by getFuncFromString(localThis, "herp.derp");
// returns the relevant function if it exists, null if it does not.
	private getObjectFromString(localThis: Object, inStr: string): any {
		if (inStr in localThis) {
			if (this.debug) trace("WARNING: item: ", inStr, " in: ", localThis);
			let ret = localThis[inStr];
			if (ret instanceof Function) {
				const _this = this;
				return function () {
					if (_this.debug) trace("            curried call on", localThis, ".", inStr, "with args", arguments);
					return ret.apply(localThis, arguments)
				}
			}
			return ret;
		}

		if (inStr.indexOf('.') > 0) // *should* be > -1, but if the string starts with a dot, it can't be a valid reference to a nested class anyways.
		{
			let localReference: string;
			let itemName: string;
			localReference = inStr.substr(0, inStr.indexOf('.'));
			itemName       = inStr.substr(inStr.indexOf('.') + 1);

			// Debugging, what debugging?
			if (this.debug) trace("WARNING: localReference = ", localReference);
			if (this.debug) trace("WARNING: itemName = ", itemName);
			if (this.debug) trace("WARNING: localThis = \"", localThis, "\"");
			if (this.debug) trace("WARNING: dereferenced = ", localThis[localReference]);

			// If we have the localReference as a member of the localThis, call this function again to further for
			// the item itemName in localThis[localReference]
			// This allows arbitrarily-nested data-structures, by recursing over the . structure in inStr
			if (localReference in localThis) {
				if (this.debug) trace("WARNING: have localReference:", localThis[localReference]);
				return this.getObjectFromString(localThis[localReference], itemName);
			}
			else {
				return null;
			}

		}

		if (this.debug) trace("WARNING: item: ", inStr, " NOT in: ", localThis);

		return null;

	}


	private getSceneSectionToInsert(inputArg: string): string {


		const argTemp = inputArg.split(" ");
		if (argTemp.length != 2) {
			return Parser.errstr("!Not actually a valid insertSection tag:!\"" + inputArg + "\"!");
		}
		const callName: string      = argTemp[0];
		const sceneName: any        = argTemp[1];
		const callNameLower: string = argTemp[0].toLowerCase();

		if (this.debug) trace("WARNING: Doing lookup for sceneSection tag:", callName, " scene name: ", sceneName);

		// this should have been checked before calling.
		if (callNameLower != "insertsection")
			throw new Error("Wat?");


		if (sceneName in this.parserState) {
			if (this.debug) trace("WARNING: Have sceneSection \"" + sceneName + "\". Parsing and setting up menu");

			this.buttonNum = 0;		// Clear the button number, so we start adding buttons from button 0

			// Split up into multiple variables for debugging (it was crashing at one point. Separating the calls let me delineate what was crashing)
			const tmp1: string = this.parserState[sceneName];
			let tmp2: string   = this.recParser(tmp1, 0);			// we have to actually parse the scene now
			//var tmp3:string = Showdown.makeHtml(tmp2)


			return ""; //Fuck Showdown
			//return tmp3;			// and then stick it on the display

			//if (sceneParserDebug) trace("WARNING: Scene contents: \"" + tmp1 + "\" as parsed: \"" + tmp2 + "\"")
		}
		else {
			return "Insert sceneSection called with unknown arg \"" + sceneName + "\". falling back to the debug pane";

		}
	}


	private buttonNum: number;


// TODO: Make failed scene button lookups fail in a debuggable manner!

// Parser button event handler
// This is the event bound to all button events, as well as the function called
// to enter the parser's cached scenes. If you pass recursiveParser a set of scenes including a scene named
// "startup", the parser will not exit normally, and will instead enter the "startup" scene at the completion of parsing the
// input string.
//
// the passed seneName string is preferentially looked-up in the cached scene array, and if there is not a cached scene of name sceneName
// in the cache, it is then looked for as a member of this.ownerClass.
// if the function name is not found in either context, an error *should* be thrown, but at the moment,
// it just returns to the debugPane
//
	public enterParserScene(sceneName: string): string {

		/*
		 if (sceneParserDebug) trace("WARNING: this.parserStateContents:")
		 for (var prop in this.parserState)
		 {
		 if (sceneParserDebug) trace("WARNING: this.parserState."+prop+" = "+this.parserState[prop]);
		 }
		 */
		const ret: string = "";

		if (this.debug) trace("WARNING: Entering parser scene: \"" + sceneName + "\"");
		if (this.debug) trace("WARNING: Do we have the scene name? ", sceneName in this.parserState);
		if (sceneName == "exit") {
			if (this.debug) trace("WARNING: Enter scene called to exit");
			//doNextClear(debugPane);

			// TODO:
			// This needs to change to something else anyways. I need to add the ability to
			// tell the parser where to exit to at some point
			this.ownerClass.debugPane();

		}
		else if (sceneName in this.parserState) {
			if (this.debug) trace("WARNING: Have scene \"" + sceneName + "\". Parsing and setting up menu");
			this.ownerClass.menu();

			this.buttonNum = 0;		// Clear the button number, so we start adding buttons from button 0

			const tmp1: string = this.parserState[sceneName];
			let tmp2: string   = this.recParser(tmp1, 0);		// we have to actually parse the scene now
			//ret             = Showdown.makeHtml(tmp2)


			//this.ownerClass.rawOutputText(ret, true);			// and then stick it on the display

			//if (sceneParserDebug) trace("WARNING: Scene contents: \"" + tmp1 + "\" as parsed: \"" + tmp2 + "\"")
			if (this.debug) trace("WARNING: Scene contents after markdown: \"" + ret + "\"");
		}
		else if (this.getObjectFromString(this.ownerClass, sceneName) != null) {
			if (this.debug) trace("WARNING: Have function \"" + sceneName + "\" in this!. Calling.");
			this.getObjectFromString(this.ownerClass, sceneName)();
		}
		else {
			trace("WARNING: Enter scene called with unknown arg/function \"" + sceneName + "\". falling back to the debug pane");
			this.ownerClass.doNext(this.ownerClass.debugPane);

		}
		return ret

	}

// Parses the contents of a scene tag, shoves the unprocessed text in the scene object (this.parserState)
// under the proper name.
// Scenes tagged as such:
//
// [sceneName | scene contents blaugh]
//
// This gets placed in this.parserState so this.parserState["sceneName"] == "scene contents blaugh"
//
// Note that parsing of the actual scene contents is deferred untill it's actually called for display.
	private parseSceneTag(textCtnt: string): void {
		let sceneName: string;
		let sceneCont: string;

		sceneName = textCtnt.substring(textCtnt.indexOf(' '), textCtnt.indexOf('|'));
		sceneCont = textCtnt.substr(textCtnt.indexOf('|') + 1);

		sceneName = this.stripStr(sceneName);
		if (this.debug) trace("WARNING: Adding scene with name \"" + sceneName + "\"");

		// Cleanup the scene content from spurious leading and trailing space.
		sceneCont = this.trimStr(sceneCont, "\n");
		sceneCont = this.trimStr(sceneCont, "	");


		this.parserState[sceneName] = this.stripStr(sceneCont);

	}

// Evaluates the contents of a button tag, and instantiates the relevant button
// Current syntax:
//
// [button function_name | Button Name]
// where "button" is a constant string, "function_name" is the name of the function pressing the button will call,
// and "Button Name" is the text that will be shown on the button.
// Note that the function name cannot contain spaces (actionscript requires this), and is case-sensitive
// "Button name" can contain arbitrary spaces or characters, excepting "]", "[" and "|"
	private parseButtonTag(textCtnt: string): void {
		// TODO: Allow button positioning!

		const arr = textCtnt.split("|");
		if (arr.length > 2) {
			if (this.settingsClass.haltOnErrors) throw new Error("");
			throw new Error("Too many items in button")
		}

		const buttonName: string = this.stripStr(arr[1]);
		const buttonFunc: string = this.stripStr(arr[0].substring(arr[0].indexOf(' ')));
		//trace("WARNING: adding a button with name\"" + buttonName + "\" and function \"" + buttonFunc + "\"");
		this.ownerClass.addButton(this.buttonNum, buttonName, this.enterParserScene, buttonFunc);
		this.buttonNum += 1;
	}

// pushes the contents of the passed string into the scene list object if it's a scene, or instantiates the named button if it's a button
// command and returns an empty string.
// if the contents are not a button or scene contents, returns the contents.
	private evalForSceneControls(textCtnt: string): string {


		if (this.debug) trace("WARNING: Checking for scene tags.");
		if (textCtnt.toLowerCase().indexOf("screen") == 0) {
			if (this.debug) trace("WARNING: It's a scene");
			this.parseSceneTag(textCtnt);
			return "";
		}
		else if (textCtnt.toLowerCase().indexOf("button") == 0) {
			if (this.debug) trace("WARNING: It's a button add statement");
			this.parseButtonTag(textCtnt);
			return "";
		}
		return textCtnt;
	}


	private isIfStatement(textCtnt: string): boolean {
		return textCtnt.toLowerCase().indexOf("if") == 0;
	}

// Called to determine if the contents of a bracket are a parseable statement or not
// If the contents *are* a parseable, it calls the relevant function to evaluate it
// if not, it simply returns the contents as passed
	private parseNonIfStatement(textCtnt: string, depth: number): string {

		let retStr: string = "";
		if (this.debug) trace("WARNING: Parsing content string: ", textCtnt);


		if (this.debug) trace("WARNING: Not an if statement");
		// Match a single word, with no leading or trailing space
		const singleWordTagRegExp: RegExp = /^[\w\.]+$/;
		const doubleWordTagRegExp: RegExp = /^[\w\.]+\s[\w\.]+$/;

		if (this.debug) trace("WARNING: string length = ", textCtnt.length);

		if (textCtnt.toLowerCase().indexOf("insertsection") == 0) {
			if (this.debug) trace("WARNING: It's a scene section insert tag!");
			retStr = Parser.tostr(this.getSceneSectionToInsert(textCtnt))
		} else if (singleWordTagRegExp.exec(textCtnt)) {
			if (this.debug) trace("WARNING: It's a single word!");
			retStr += this.convertSingleArg(depth, textCtnt);
		} else if (doubleWordTagRegExp.exec(textCtnt)) {
			if (this.debug) trace("WARNING: Two-word tag!");
			retStr += Parser.tostr(this.convertDoubleArg(depth, textCtnt));
		} else {
			if (this.debug) trace("WARNING: Cannot parse content. What?", textCtnt);
			retStr += Parser.errstr("!Unknown multi-word tag \"" + retStr + "\"!");
		}

		return retStr;
	}


// Actual internal parser function.
// textCtnt is the text you want parsed, depth is a number that reflects the current recursion depth
// You pass in the string you want parsed, and the parsed result is returned as a string.
	private recParser(textCtnt: string, depth: number): string {
		let retStr: string = "";
		try {
			if (this.debug) trace("WARNING: Recursion call", depth, "---------------------------------------------+++++++++++++++++++++");
			if (this.debug) trace("WARNING: Parsing contents = ", textCtnt);
			// Depth tracks our recursion depth
			// Basically, we need to handle things differently on the first execution, so we don't mistake single-word print-statements for
			// a tag. Therefore, every call of this.recParser increments depth by 1
			depth += 1;
			if (textCtnt.length == 0) {// Short circuit if we've been passed an empty string
				return "";
			}

			let i: number = 0;

			let bracketCnt: number = 0;

			let lastBracket: number = -1;


			do {
				lastBracket = textCtnt.indexOf("[", lastBracket + 1);
				if (textCtnt.charAt(lastBracket - 1) == "\\") {
					// trace("WARNING: bracket is escaped 1", lastBracket);
				}
				else if (lastBracket != -1) {
					// trace("WARNING: need to parse bracket", lastBracket);
					break;
				}

			} while (lastBracket != -1);


			if (lastBracket != -1)		// If we have any open brackets
			{
				for (i = lastBracket; i < textCtnt.length; i += 1) {
					if (textCtnt.charAt(i) == "[") {
						if (textCtnt.charAt(i - 1) != "\\") {
							//trace("WARNING: bracket is not escaped - 2");
							bracketCnt += 1;
						}
					}
					else if (textCtnt.charAt(i) == "]") {
						if (textCtnt.charAt(i - 1) != "\\") {
							//trace("WARNING: bracket is not escaped - 3");
							bracketCnt -= 1;
						}
					}
					if (bracketCnt == 0)	// We've found the matching closing bracket for the opening bracket at textCtnt[lastBracket]
					{
						let prefixTmp: string, postfixTmp: string;

						// Only prepend the prefix if it actually has content.
						prefixTmp = textCtnt.substring(0, lastBracket);
						if (this.debug) trace("WARNING: prefix content = ", prefixTmp);
						if (prefixTmp) retStr += Parser.wrapgroup(depth - 1, prefixTmp);
						// We know there aren't any brackets in the section before the first opening bracket.
						// therefore, we just add it to the returned string


						let tmpStr: string = textCtnt.substring(lastBracket + 1, i);
						tmpStr             = this.evalForSceneControls(tmpStr);
						// this.evalForSceneControls swallows scene controls, so they won't get parsed further now.
						// therefore, you could *theoretically* have nested scene pages, though I don't know WHY you'd ever want that.

						if (this.isIfStatement(tmpStr)) {
							if (this.debug) trace("WARNING: early eval as if");
							retStr += this.parseConditional(tmpStr, depth);
							if (this.debug) trace("WARNING: ------------------0000000000000000000000000000000000000000000000000000000000000000-----------------------")
							//trace("WARNING: Parsed Ccnditional - ", retStr)
						}
						else if (tmpStr) {

							if (this.debug) trace("WARNING: Parsing bracket contents = ", tmpStr);
							retStr += this.parseNonIfStatement(this.recParser(tmpStr, depth), depth);

						}

						// First parse into the text in the brackets (to resolve any nested brackets)
						// then, eval their contents, in case they're an if-statement or other control-flow thing
						// I haven't implemented yet

						// Only parse the trailing string if it has brackets in it.
						// if not, we need to just return the string as-is.
						// Parsing the trailing string if it doesn't have brackets could lead to it being
						// incorrectly interpreted as a multi-word tag (and shit would asplode and shit)

						postfixTmp = textCtnt.substring(i + 1, textCtnt.length);
						if (postfixTmp.indexOf("[") != -1) {
							if (this.debug) trace("WARNING: Need to parse trailing text", postfixTmp);
							retStr += this.recParser(postfixTmp, depth - 1);	// Parse the trailing text (if any)
							// Note: This leads to LOTS of recursion. Since we basically call this.recParser once per
							// tag, it means that if a body of text has 30 tags, we'll end up recursing at least
							// 29 times before finishing.
							// Making this tail-call reursive, or just parsing it flatly may be a much better option in
							// the future, if this does become an issue.
						}
						else {
							if (this.debug) trace("WARNING: No brackets in trailing text", postfixTmp);
							retStr += Parser.wrapgroup(depth, postfixTmp);
						}

						return retStr;
						// and return the parsed string
					}
				}
			} else {
				// DERP. We should never have brackets around something that ISN'T a tag intended to be parsed. Therefore, we just need
				// to determine what type of parsing should be done do the tag.
				if (this.debug) trace("WARNING: No brackets present in text passed to recParse", textCtnt);
				if (depth > 1) retStr += textCtnt;
				else retStr += Parser.wrapgroup(depth, retStr);
			}
		} catch (e) {
			console.error(e);
			retStr = Parser.errstr("" + e);
		} finally {
			depth--;
		}
		return retStr;
	}


// Main parser function.
// textCtnt is the text you want parsed, depth is a number, which should be 0
// or not passed at all.
// You pass in the string you want parsed, and the parsed result is returned as a string.
	public recursiveParser(contents: string, prettyQuotes: boolean = true): string {
		if (this.debug) trace("WARNING: ------------------ Parser called on string -----------------------");
		// Eventually, when this goes properly class-based, we'll add a period, and have this.parserState.

		// Reset the parser's internal state, since we're parsing a new string:
		// trace("WARNING: Purging scene parser contents")
		this.parserState = {};


		let ret: string;
		// Run through the parser
		contents = contents.replace(/\\\n/g, '').replace(/\\n/g, "\n");
		ret      = this.recParser(contents, 0);
		if (this.debug) trace("WARNING: Parser intermediate contents = ", ret);
		// Currently, not parsing text as markdown by default because it's fucking with the line-endings.

		if (prettyQuotes) {
			// Convert quotes to prettyQuotes
			ret = this.makeQuotesPrettah(ret);
			// Quote conversion has to go before markdown calls
		}

		// cleanup escaped brackets
		ret = ret.replace(/\\\]/g, "]");
		ret = ret.replace(/\\\[/g, "[");

		// And repeated spaces (this has to be done after markdown processing)
		ret = ret.replace(/ +/g, " ");

		/*
		 for (var prop in this.parserState)
		 {
		 trace("WARNING: this.parserState."+prop+" = "+this.parserState[prop]);
		 }
		 */

		// Finally, if we have a parser-based scene. enter the "startup" scene.
		if ("startup" in this.parserState) {
			ret = this.enterParserScene("startup");

			// HORRIBLE HACK
			// since we're initially called via a outputText command, the content of the first page's text will be overwritten
			// when we return. Therefore, in a horrible hack, we return the contents of mainTest.htmlText as the ret value, so
			// the outputText call overwrites the window content with the exact same content.

			// trace("WARNING: Returning: ", ret);
			this.ownerClass.currentText = ret;


		}
		ret = ret.replace(/\n/g, '<br>');
		//trace(ret);
		// trace("WARNING: Maintext content @ recursiveParser = ", mainText.htmlText.length)
		return ret

	}

// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// Make shit look nice

	private makeQuotesPrettah(inStr: string): string {

		inStr = inStr.replace(/(\w)'(\w)/g, "$1\u2019$2")	// Apostrophes
					 .replace(/(^|[\r\n 	\.\!\,\?])"([a-zA-Z<>\.\!\,\?])/g, "$1\u201c$2")	// Opening doubles
					 .replace(/([a-zA-Z<>\.\!\,\?])"([\r\n 	\.\!\,\?]|$)/g, "$1\u201d$2")	// Closing doubles
					 .replace(/--/g, "\u2014");		// em-dashes
		return inStr;
	}


// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// Stupid string utility functions, because actionscript doesn't have them (WTF?)

	public stripStr(str: string): string {
		return this.trimStrBack(this.trimStrFront(str, " "), " ");
	}

	public trimStr(str: string, char: string = " "): string {
		return this.trimStrBack(this.trimStrFront(str, char), char);
	}

	public trimStrFront(str: string, char: string = " "): string {
		char = this.stringToCharacter(char);
		if (str.charAt(0) == char) {
			str = this.trimStrFront(str.substring(1), char);
		}
		return str;
	}

	public trimStrBack(str: string, char: string = " "): string {
		char = this.stringToCharacter(char);
		if (str.charAt(str.length - 1) == char) {
			str = this.trimStrBack(str.substring(0, str.length - 1), char);
		}
		return str;
	}

	public stringToCharacter(str: string): string {
		if (str.length == 1) {
			return str;
		}
		return str.slice(0, 1);
	}


	public isUpperCase(char: string): boolean {
		if (!isNaN(+char)) {
			return false;
		}
		else if (char == char.toUpperCase()) {
			return true;
		}
		return false;
	}

	public capitalizeFirstWord(str: string): string {

		str = str.charAt(0).toUpperCase() + str.slice(1);
		return str;
	}

	public static tostr(s: any): string {
		if (s === null || s === undefined) {
			return Parser.errstr(s);
		} else {
			return "" + s;
		}
	}

	public static errstr(s: any): string {
		return "<span class='bg-danger text-white'>" + s + "</span>";
	}

	public static spanwrap(clazz: string, s: string): string {
		let s0: string, s1: string, s2: string;
		let i = s.indexOf('<');
		if (i >= 0) {
			s0    = s.slice(0, i);
			s1    = s.slice(i);
			let j = s1.lastIndexOf('>');
			if (j > 0) {
				s2 = s1.slice(j + 1);
				s1 = s1.slice(0, j + 1);
			} else {
				s2 = "";
			}
		} else {
			s0 = s;
			s1 = "";
			s2 = "";
		}
		let open  = "<span class='" + clazz + "'>";
		let close = "</span>";
		return (s0.length > 0 ? open + s0 + close : "") + s1 + (s2.length > 0 ? open + s2 + close : "");
	}

	public static wrapeval(depth: number, s: any): string {
		return Parser.spanwrap("bg-eval bg-eval-depth-" + Math.min(10, depth | 0), '' + s);
	}

	public static wrapgroup(depth: number, s: any): string {
		return Parser.spanwrap("bg-group bg-group-depth-" + Math.min(10, depth | 0), '' + s);
	}
}
