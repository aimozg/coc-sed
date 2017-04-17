var __extends = (this && this.__extends) || (function () {
		var extendStatics = Object.setPrototypeOf ||
			({__proto__: []} instanceof Array && function (d, b) {
				d.__proto__ = b;
			}) ||
			function (d, b) {
				for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
			};
		return function (d, b) {
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}

			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
// Possible text arguments in the conditional of a if statement
// First, there is an attempt to cast the argument to a Number. If that fails,
// a dictionary lookup is performed to see if the argument is in the conditionalOptions[]
// object. If that fails, we just fall back to returning 0
var conditionalOptions = {
	"strength": function (thisPtr) {
		return kGAMECLASS.player.str;
	},
	"toughness": function (thisPtr) {
		return kGAMECLASS.player.tou;
	},
	"speed": function (thisPtr) {
		return kGAMECLASS.player.spe;
	},
	"intelligence": function (thisPtr) {
		return kGAMECLASS.player.inte;
	},
	"libido": function (thisPtr) {
		return kGAMECLASS.player.lib;
	},
	"sensitivity": function (thisPtr) {
		return kGAMECLASS.player.sens;
	},
	"corruption": function (thisPtr) {
		return kGAMECLASS.player.cor;
	},
	"fatigue": function (thisPtr) {
		return kGAMECLASS.player.fatigue;
	},
	"hp": function (thisPtr) {
		return kGAMECLASS.player.HP;
	},
	"hunger": function (thisPtr) {
		return kGAMECLASS.player.hunger;
	},
	"minute": function (thisPtr) {
		return kGAMECLASS.model.time.minutes;
	},
	"hour": function (thisPtr) {
		return kGAMECLASS.model.time.hours;
	},
	"days": function (thisPtr) {
		return kGAMECLASS.model.time.days;
	},
	"tallness": function (thisPtr) {
		return kGAMECLASS.player.tallness;
	},
	"hairlength": function (thisPtr) {
		return kGAMECLASS.player.hairLength;
	},
	"femininity": function (thisPtr) {
		return kGAMECLASS.player.femininity;
	},
	"masculinity": function (thisPtr) {
		return 100 - kGAMECLASS.player.femininity;
	},
	"cocks": function (thisPtr) {
		return kGAMECLASS.player.cockTotal();
	},
	"breastrows": function (thisPtr) {
		return kGAMECLASS.player.bRows();
	},
	"biggesttitsize": function (thisPtr) {
		return kGAMECLASS.player.biggestTitSize();
	},
	"vagcapacity": function (thisPtr) {
		return kGAMECLASS.player.vaginalCapacity();
	},
	"analcapacity": function (thisPtr) {
		return kGAMECLASS.player.analCapacity();
	},
	"balls": function (thisPtr) {
		return kGAMECLASS.player.balls;
	},
	"cumquantity": function (thisPtr) {
		return kGAMECLASS.player.cumQ();
	},
	"milkquantity": function (thisPtr) {
		return kGAMECLASS.player.lactationQ();
	},
	"hasvagina": function (thisPtr) {
		return kGAMECLASS.player.hasVagina();
	},
	"istaur": function (thisPtr) {
		return kGAMECLASS.player.isTaur();
	},
	"isnaga": function (thisPtr) {
		return kGAMECLASS.player.isNaga();
	},
	"isgoo": function (thisPtr) {
		return kGAMECLASS.player.isGoo();
	},
	"isbiped": function (thisPtr) {
		return kGAMECLASS.player.isBiped();
	},
	"hasbreasts": function (thisPtr) {
		return (kGAMECLASS.player.biggestTitSize() >= 1);
	},
	"hasballs": function (thisPtr) {
		return (kGAMECLASS.player.balls > 0);
	},
	"hascock": function (thisPtr) {
		return kGAMECLASS.player.hasCock();
	},
	"isherm": function (thisPtr) {
		return (kGAMECLASS.player.gender == 3);
	},
	"cumnormal": function (thisPtr) {
		return (kGAMECLASS.player.cumQ() <= 150);
	},
	"cummedium": function (thisPtr) {
		return (kGAMECLASS.player.cumQ() > 150 && kGAMECLASS.player.cumQ() <= 350);
	},
	"cumhigh": function (thisPtr) {
		return (kGAMECLASS.player.cumQ() > 350 && kGAMECLASS.player.cumQ() <= 1000);
	},
	"cumveryhigh": function (thisPtr) {
		return (kGAMECLASS.player.cumQ() > 1000 && kGAMECLASS.player.cumQ() <= 2500);
	},
	"cumextreme": function (thisPtr) {
		return (kGAMECLASS.player.cumQ() > 2500);
	},
	"issquirter": function (thisPtr) {
		return (kGAMECLASS.player.wetness() >= 4);
	},
	"ispregnant": function (thisPtr) {
		return (kGAMECLASS.player.pregnancyIncubation > 0);
	},
	"isbuttpregnant": function (thisPtr) {
		return (kGAMECLASS.player.buttPregnancyIncubation > 0);
	},
	"hasnipplecunts": function (thisPtr) {
		return kGAMECLASS.player.hasFuckableNipples();
	},
	"canfly": function (thisPtr) {
		return kGAMECLASS.player.canFly();
	},
	"islactating": function (thisPtr) {
		return (kGAMECLASS.player.lactationQ() > 0);
	},
	"true": function (thisPtr) {
		return true;
	},
	"false": function (thisPtr) {
		return false;
	},
	//Prison
	"esteem": function (thisPtr) {
		return kGAMECLASS.player.esteem;
	},
	"obey": function (thisPtr) {
		return kGAMECLASS.player.obey;
	},
	"will": function (thisPtr) {
		return kGAMECLASS.player.will;
	}
};
///<reference path="conditionalConverters.ts"/>
///<reference path="conditionalConverters.ts"/>
///<reference path="conditionalConverters.ts"/>
function trace() {
	var argz = [];
	for (var _i = 0; _i < arguments.length; _i++) {
		argz[_i] = arguments[_i];
	}
	console.debug.apply(console, argz);
}
var Parser = (function () {
	/**
	 * @param ownerClass main game class. Variables are looked-up in this class.
	 * @param settingsClass global static class used for shoving conf vars around
	 */
	function Parser(ownerClass, settingsClass) {
		this.ownerClass = ownerClass;
		this.settingsClass = settingsClass;
		this.sceneParserDebug = false;
		this.mainParserDebug = false;
		this.lookupParserDebug = false;
		this.conditionalDebug = false;
		this.printCcntentDebug = false;
		this.printConditionalEvalDebug = false;
		this.printIntermediateParseStateDebug = false;
		this.logErrors = true;
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
		this.parserState = {};
	}

	// Does lookup of single argument tags ("[cock]", "[armor]", etc...) in singleArgConverters
	// Supported variables are the options listed in the above
	// singleArgConverters object. If the passed argument is found in the above object,
	// the corresponding anonymous function is called, and it's return-value is returned.
	// If the arg is not present in the singleArgConverters object, an error message is
	// returned.
	// ALWAYS returns a string
	Parser.prototype.convertSingleArg = function (arg) {
		var argResult = null;
		var capitalize = this.isUpperCase(arg.charAt(0));
		var argLower;
		argLower = arg.toLowerCase();
		if (argLower in singleArgConverters) {
			//if (this.logErrors) trace("WARNING: Found corresponding anonymous function");
			argResult = singleArgConverters[argLower](this.ownerClass);
			if (this.lookupParserDebug)
				trace("WARNING: Called, return = ", argResult);
			if (capitalize)
				argResult = this.capitalizeFirstWord(argResult);
			return argResult;
		}
		else {
			// ---------------------------------------------------------------------------------
			// TODO: Get rid of this shit.
			// UGLY hack to patch legacy functionality in TiTS
			// This needs to go eventually
			var descriptorArray = arg.split(".");
			var obj = this.getObjectFromString(this.ownerClass, descriptorArray[0]);
			if (obj == null) {
				if (this.lookupParserDebug || this.logErrors)
					trace("WARNING: Unknown subject in " + arg);
				return this.errstr("!Unknown subject in \"" + arg + "\"!");
			}
			if (obj.hasOwnProperty("getDescription") && arg.indexOf(".") > 0) {
				return obj.getDescription(descriptorArray[1], "");
			}
			// end hack
			// ---------------------------------------------------------------------------------
			if (this.lookupParserDebug)
				trace("WARNING: Lookup Arg = ", arg);
			obj = this.getObjectFromString(this.ownerClass, arg);
			if (obj != null) {
				if (obj instanceof Function) {
					if (this.lookupParserDebug)
						trace("WARNING: Found corresponding function in owner class");
					return obj();
				}
				else {
					if (this.lookupParserDebug)
						trace("WARNING: Found corresponding aspect in owner class");
					return "" + obj; // explicit cast probably not needed
				}
			}
			else {
				if (this.lookupParserDebug || this.logErrors)
					trace("WARNING: No lookup found for", arg, " search result is: ", obj);
				return this.errstr("!Unknown tag \"" + arg + "\"!");
			}
		}
	};
	Parser.prototype.convertDoubleArg = function (inputArg) {
		var argResult = null;
		var thing;
		var argTemp = inputArg.split(" ");
		if (argTemp.length != 2) {
			if (this.logErrors)
				trace("WARNING: Not actually a two word tag! " + inputArg);
			return this.errstr("!Not actually a two-word tag!\"" + inputArg + "\"!");
		}
		var subject = argTemp[0];
		var aspect = argTemp[1];
		var subjectLower = argTemp[0].toLowerCase();
		var aspectLower = argTemp[1].toLowerCase();
		if (this.lookupParserDebug)
			trace("WARNING: Doing lookup for subject", subject, " aspect ", aspect);
		// Figure out if we need to capitalize the resulting text
		var capitalize = this.isUpperCase(aspect.charAt(0));
		// Only perform lookup in twoWordNumericTagsLookup if aspect can be cast to a valid number
		if ((subjectLower in twoWordNumericTagsLookup) && !isNaN(+aspect)) {
			aspectLower = +aspectLower;
			if (this.lookupParserDebug)
				trace("WARNING: Found corresponding anonymous function");
			argResult = twoWordNumericTagsLookup[subjectLower](this.ownerClass, aspectLower);
			if (capitalize)
				argResult = this.capitalizeFirstWord(argResult);
			if (this.lookupParserDebug)
				trace("WARNING: Called two word numeric lookup, return = ", argResult);
			return argResult;
		}
		// aspect isn't a number. Look for subject in the normal twoWordTagsLookup
		if (subjectLower in twoWordTagsLookup) {
			if (aspectLower in twoWordTagsLookup[subjectLower]) {
				if (this.lookupParserDebug)
					trace("WARNING: Found corresponding anonymous function");
				argResult = twoWordTagsLookup[subjectLower][aspectLower](this.ownerClass);
				if (capitalize)
					argResult = this.capitalizeFirstWord(argResult);
				if (this.lookupParserDebug)
					trace("WARNING: Called two word lookup, return = ", argResult);
				return argResult;
			}
			else {
				if (this.logErrors)
					trace("WARNING: Unknown aspect in two-word tag. Arg: " + inputArg + " Aspect: " + aspectLower);
				return this.errstr("!Unknown aspect in two-word tag \"" + inputArg + "\"! ASCII Aspect = \"" + aspectLower + "\"");
			}
		}
		if (this.lookupParserDebug)
			trace("WARNING: trying to look-up two-word tag in parent");
		// ---------------------------------------------------------------------------------
		// TODO: Get rid of this shit.
		// UGLY hack to patch legacy functionality in TiTS
		// This needs to go eventually
		var descriptorArray = subject.split(".");
		thing = this.getObjectFromString(this.ownerClass, descriptorArray[0]);
		if (thing == null) {
			if (this.logErrors)
				trace("WARNING: Unknown subject in " + inputArg);
			return this.errstr("!Unknown subject in \"" + inputArg + "\"!");
		}
		if (thing.hasOwnProperty("getDescription") && subject.indexOf(".") > 0) {
			if (argTemp.length > 1) {
				return thing.getDescription(descriptorArray[1], aspect);
			}
			else {
				return thing.getDescription(descriptorArray[1], "");
			}
		}
		// end hack
		// ---------------------------------------------------------------------------------
		var aspectLookup = this.getObjectFromString(this.ownerClass, aspect);
		if (thing != null) {
			if (thing instanceof Function) {
				if (this.lookupParserDebug)
					trace("WARNING: Found corresponding function in owner class");
				return thing(aspect);
			}
			else if (thing instanceof Array) {
				var indice = +aspectLower;
				if (isNaN(indice)) {
					if (this.logErrors)
						trace("WARNING: Cannot use non-number as indice to Array. Arg " + inputArg + " Subject: " + subject + " Aspect: " + aspect);
					return this.errstr("Cannot use non-number as indice to Array \"" + inputArg + "\"! Subject = \"" + subject + ", Aspect = " + aspect + "\"");
				}
				else
					return thing[indice];
			}
			else if (thing instanceof Object) {
				if (thing.hasOwnProperty(aspectLookup))
					return thing[aspectLookup];
				else if (thing.hasOwnProperty(aspect))
					return thing[aspect];
				else {
					if (this.logErrors)
						trace("WARNING: Object does not have aspect as a member. Arg: " + inputArg + " Subject: " + subject + " Aspect:" + aspect + " or " + aspectLookup);
					return this.errstr("Object does not have aspect as a member \"" + inputArg + "\"! Subject = \"" + subject + ", Aspect = " + aspect + " or " + aspectLookup + "\"");
				}
			}
			else {
				// This will work, but I don't know why you'd want to
				// the aspect is just ignored
				if (this.lookupParserDebug)
					trace("WARNING: Found corresponding aspect in owner class");
				return "" + thing;
			}
		}
		if (this.lookupParserDebug || this.logErrors)
			trace("WARNING: No lookup found for", inputArg, " search result is: ", thing);
		return this.errstr("!Unknown subject in two-word tag \"" + inputArg + "\"! Subject = \"" + subject + ", Aspect = " + aspect + "\"");
		// return this.errstr("!Unknown tag \"" + arg + "\"!");
	};
	// converts a single argument to a conditional to
	// the relevant value, either by simply converting to a number, or
	// through lookup in the above conditionalOptions oject, and then calling the
	// relevant function
	// Realistally, should only return either boolean or numbers.
	Parser.prototype.convertConditionalArgumentFromStr = function (arg) {
		// convert the string contents of a conditional argument into a meaningful variable.
		var argLower = arg.toLowerCase();
		var argResult = -1;
		// Note: Case options MUST be ENTIRELY lower case. The comparaison string is converted to
		// lower case before the switch:case section
		// Try to cast to a number. If it fails, go on with the switch/case statement.
		if (!isNaN(+arg)) {
			if (this.printConditionalEvalDebug)
				trace("WARNING: Converted to float. number = ", +arg);
			return +arg;
		}
		if (argLower in conditionalOptions) {
			if (this.printConditionalEvalDebug)
				trace("WARNING: Found corresponding anonymous function");
			argResult = conditionalOptions[argLower](this.ownerClass);
			if (this.printConditionalEvalDebug)
				trace("WARNING: Called, return = ", argResult);
			return argResult;
		}
		var obj = this.getObjectFromString(this.ownerClass, arg);
		if (this.printConditionalEvalDebug)
			trace("WARNING: Looked up ", arg, " in ", this.ownerClass, "Result was:", obj);
		if (obj != null) {
			if (this.printConditionalEvalDebug)
				trace("WARNING: Found corresponding function for conditional argument lookup.");
			if (obj instanceof Function) {
				if (this.printConditionalEvalDebug)
					trace("WARNING: Found corresponding function in owner class");
				argResult = +obj();
				return argResult;
			}
			else {
				if (this.printConditionalEvalDebug)
					trace("WARNING: Found corresponding aspect in owner class");
				argResult = +obj;
				return argResult;
			}
		}
		else {
			if (this.printConditionalEvalDebug || this.logErrors)
				trace("WARNING: No lookups found!");
			return null;
		}
		/*if (this.printConditionalEvalDebug || LogErrors) trace("WARNING: Could not convert to number. Evaluated ", arg, " as", argResult);
		 return argResult;*/
	};
	// Evaluates the conditional section of an if-statement.
	// Does the proper parsing and look-up of any of the special nouns
	// which can be present in the conditional
	Parser.prototype.evalConditionalStatementStr = function (textCond) {
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
		var isExp = /([\w\.]+)\s?(==|=|!=|<|>|<=|>=)\s?([\w\.]+)/;
		var expressionResult = isExp.exec(textCond);
		if (!expressionResult) {
			var condArg = this.convertConditionalArgumentFromStr(textCond);
			if (condArg != null) {
				if (this.printConditionalEvalDebug)
					trace("WARNING: Conditional \"", textCond, "\" Evalueated to: \"", condArg, "\"");
				return condArg;
			}
			else {
				if (this.logErrors)
					trace("WARNING: Invalid conditional! \"(", textCond, ")\" Conditionals must be in format:");
				if (this.logErrors)
					trace("WARNING:  \"({statment1} (==|=|!=|<|>|<=|>=) {statement2})\" or \"({valid variable/function name})\". ");
				return false;
			}
		}
		if (this.printConditionalEvalDebug)
			trace("WARNING: Expression = ", textCond, "Expression result = [", expressionResult, "], length of = ", expressionResult.length);
		var condArgStr1 = expressionResult[1];
		var operator = expressionResult[2];
		var condArgStr2 = expressionResult[3];
		var retVal = false;
		var condArg1 = this.convertConditionalArgumentFromStr(condArgStr1);
		var condArg2 = this.convertConditionalArgumentFromStr(condArgStr2);
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
		if (this.printConditionalEvalDebug)
			trace("WARNING: Check: " + condArg1 + " " + operator + " " + condArg2 + " result: " + retVal);
		return retVal;
	};
	// Splits the result from an if-statement.
	// ALWAYS returns an array with two strings.
	// if there is no else, the second string is empty.
	Parser.prototype.splitConditionalResult = function (textCtnt) {
		// Splits the conditional section of an if-statemnt in to two results:
		// [if (condition) OUTPUT_IF_TRUE]
		//                 ^ This Bit   ^
		// [if (condition) OUTPUT_IF_TRUE | OUTPUT_IF_FALSE]
		//                 ^          This Bit            ^
		// If there is no OUTPUT_IF_FALSE, returns an empty string for the second option.
		if (this.conditionalDebug)
			trace("WARNING: ------------------4444444444444444444444444444444444444444444444444444444444-----------------------");
		if (this.conditionalDebug)
			trace("WARNING: Split Conditional input string: ", textCtnt);
		if (this.conditionalDebug)
			trace("WARNING: ------------------4444444444444444444444444444444444444444444444444444444444-----------------------");
		var ret = ["", ""];
		var i;
		var sectionStart = 0;
		var section = 0;
		var nestLevel = 0;
		for (i = 0; i < textCtnt.length; i += 1) {
			switch (textCtnt.charAt(i)) {
				case "[":
					nestLevel += 1;
					break;
				case "]":
					nestLevel -= 1;
					break;
				case "|":
					if (nestLevel == 0) {
						if (section == 1) {
							if (this.settingsClass.haltOnErrors)
								throw new Error("Nested IF statements still a WIP");
							ret = [this.errstr("Error! Too many options in if statement!"),
								this.errstr("Error! Too many options in if statement!")];
						}
						else {
							ret[section] = textCtnt.substring(sectionStart, i);
							sectionStart = i + 1;
							section += 1;
						}
					}
					break;
				default:
					break;
			}
		}
		ret[section] = textCtnt.substring(sectionStart, textCtnt.length);
		if (this.conditionalDebug)
			trace("WARNING: ------------------5555555555555555555555555555555555555555555555555555555555-----------------------");
		if (this.conditionalDebug)
			trace("WARNING: Outputs: ", ret);
		if (this.conditionalDebug)
			trace("WARNING: ------------------5555555555555555555555555555555555555555555555555555555555-----------------------");
		return ret;
	};
	// Called to evaluate a if statment string, and return the evaluated result.
	// Returns an empty string ("") if the conditional rvaluates to false, and there is no else
	// option.
	Parser.prototype.parseConditional = function (textCtnt, depth) {
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
		if (this.conditionalDebug)
			trace("WARNING: ------------------2222222222222222222222222222222222222222222222222222222222-----------------------");
		if (this.conditionalDebug)
			trace("WARNING: If input string: ", textCtnt);
		if (this.conditionalDebug)
			trace("WARNING: ------------------2222222222222222222222222222222222222222222222222222222222-----------------------");
		var ret = ["", "", ""]; // first string is conditional, second string is the output
		var i = 0;
		var parenthesisCount = 0;
		//var ifText;
		var conditional;
		var output;
		var condStart = textCtnt.indexOf("(");
		if (condStart != -1) {
			for (i = condStart; i < textCtnt.length; i += 1) {
				if (textCtnt.charAt(i) == "(") {
					parenthesisCount += 1;
				}
				else if (textCtnt.charAt(i) == ")") {
					parenthesisCount -= 1;
				}
				if (parenthesisCount == 0) {
					// Pull out the conditional, and then evaluate it.
					conditional = textCtnt.substring(condStart + 1, i);
					conditional = this.evalConditionalStatementStr(conditional);
					// Make sure the contents of the if-statement have been evaluated to a plain-text string before trying to
					// split the base-level if-statement on the "|"
					output = textCtnt.substring(i + 1, textCtnt.length);
					// And now do the actual splitting.
					output = this.splitConditionalResult(output);
					// LOTS of debugging
					if (this.conditionalDebug)
						trace("WARNING: prefix = '", ret[0], "' conditional = ", conditional, " content = ", output);
					if (this.conditionalDebug)
						trace("WARNING: -0--------------------------------------------------");
					if (this.conditionalDebug)
						trace("WARNING: Content Item 1 = ", output[0]);
					if (this.conditionalDebug)
						trace("WARNING: -1--------------------------------------------------");
					if (this.conditionalDebug)
						trace("WARNING: Item 2 = ", output[1]);
					if (this.conditionalDebug)
						trace("WARNING: -2--------------------------------------------------");
					if (conditional)
						return this.recParser(output[0], depth);
					else
						return this.recParser(output[1], depth);
				}
			}
		}
		else {
			if (this.settingsClass.haltOnErrors)
				throw "Invalid if statement! " + textCtnt;
			return this.errstr("Invalid IF Statement " + textCtnt);
		}
		return "";
	};
	// ---------------------------------------------------------------------------------------------------------------------------------------
	// SCENE PARSING ---------------------------------------------------------------------------------------------------------------
	// ---------------------------------------------------------------------------------------------------------------------------------------
	// attempt to return function "inStr" that is a member of "localThis"
	// Properly handles nested classes/objects, e.g. localThis.herp.derp
	// is returned by getFuncFromString(localThis, "herp.derp");
	// returns the relevant function if it exists, null if it does not.
	Parser.prototype.getObjectFromString = function (localThis, inStr) {
		if (inStr in localThis) {
			if (this.lookupParserDebug)
				trace("WARNING: item: ", inStr, " in: ", localThis);
			return localThis[inStr];
		}
		if (inStr.indexOf('.') > 0) {
			var localReference = void 0;
			var itemName = void 0;
			localReference = inStr.substr(0, inStr.indexOf('.'));
			itemName = inStr.substr(inStr.indexOf('.') + 1);
			// Debugging, what debugging?
			if (this.lookupParserDebug)
				trace("WARNING: localReference = ", localReference);
			if (this.lookupParserDebug)
				trace("WARNING: itemName = ", itemName);
			if (this.lookupParserDebug)
				trace("WARNING: localThis = \"", localThis, "\"");
			if (this.lookupParserDebug)
				trace("WARNING: dereferenced = ", localThis[localReference]);
			// If we have the localReference as a member of the localThis, call this function again to further for
			// the item itemName in localThis[localReference]
			// This allows arbitrarily-nested data-structures, by recursing over the . structure in inStr
			if (localReference in localThis) {
				if (this.lookupParserDebug)
					trace("WARNING: have localReference:", localThis[localReference]);
				return this.getObjectFromString(localThis[localReference], itemName);
			}
			else {
				return null;
			}
		}
		if (this.lookupParserDebug)
			trace("WARNING: item: ", inStr, " NOT in: ", localThis);
		return null;
	};
	Parser.prototype.getSceneSectionToInsert = function (inputArg) {
		var argTemp = inputArg.split(" ");
		if (argTemp.length != 2) {
			return this.errstr("!Not actually a valid insertSection tag:!\"" + inputArg + "\"!");
		}
		var callName = argTemp[0];
		var sceneName = argTemp[1];
		var callNameLower = argTemp[0].toLowerCase();
		if (this.sceneParserDebug)
			trace("WARNING: Doing lookup for sceneSection tag:", callName, " scene name: ", sceneName);
		// this should have been checked before calling.
		if (callNameLower != "insertsection")
			throw new Error("Wat?");
		if (sceneName in this.parserState) {
			if (this.sceneParserDebug)
				trace("WARNING: Have sceneSection \"" + sceneName + "\". Parsing and setting up menu");
			this.buttonNum = 0; // Clear the button number, so we start adding buttons from button 0
			// Split up into multiple variables for debugging (it was crashing at one point. Separating the calls let me delineate what was crashing)
			var tmp1 = this.parserState[sceneName];
			var tmp2 = this.recParser(tmp1, 0); // we have to actually parse the scene now
			//var tmp3:string = Showdown.makeHtml(tmp2)
			return ""; //Fuck Showdown
			//return tmp3;			// and then stick it on the display
			//if (sceneParserDebug) trace("WARNING: Scene contents: \"" + tmp1 + "\" as parsed: \"" + tmp2 + "\"")
		}
		else {
			return "Insert sceneSection called with unknown arg \"" + sceneName + "\". falling back to the debug pane";
		}
	};
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
	Parser.prototype.enterParserScene = function (sceneName) {
		/*
		 if (sceneParserDebug) trace("WARNING: this.parserStateContents:")
		 for (var prop in this.parserState)
		 {
		 if (sceneParserDebug) trace("WARNING: this.parserState."+prop+" = "+this.parserState[prop]);
		 }
		 */
		var ret = "";
		if (this.sceneParserDebug)
			trace("WARNING: Entering parser scene: \"" + sceneName + "\"");
		if (this.sceneParserDebug)
			trace("WARNING: Do we have the scene name? ", sceneName in this.parserState);
		if (sceneName == "exit") {
			if (this.sceneParserDebug)
				trace("WARNING: Enter scene called to exit");
			//doNextClear(debugPane);
			// TODO:
			// This needs to change to something else anyways. I need to add the ability to
			// tell the parser where to exit to at some point
			this.ownerClass.debugPane();
		}
		else if (sceneName in this.parserState) {
			if (this.sceneParserDebug)
				trace("WARNING: Have scene \"" + sceneName + "\". Parsing and setting up menu");
			this.ownerClass.menu();
			this.buttonNum = 0; // Clear the button number, so we start adding buttons from button 0
			var tmp1 = this.parserState[sceneName];
			var tmp2 = this.recParser(tmp1, 0); // we have to actually parse the scene now
			//ret             = Showdown.makeHtml(tmp2)
			//this.ownerClass.rawOutputText(ret, true);			// and then stick it on the display
			//if (sceneParserDebug) trace("WARNING: Scene contents: \"" + tmp1 + "\" as parsed: \"" + tmp2 + "\"")
			if (this.sceneParserDebug)
				trace("WARNING: Scene contents after markdown: \"" + ret + "\"");
		}
		else if (this.getObjectFromString(this.ownerClass, sceneName) != null) {
			if (this.sceneParserDebug)
				trace("WARNING: Have function \"" + sceneName + "\" in this!. Calling.");
			this.getObjectFromString(this.ownerClass, sceneName)();
		}
		else {
			trace("WARNING: Enter scene called with unknown arg/function \"" + sceneName + "\". falling back to the debug pane");
			this.ownerClass.doNext(this.ownerClass.debugPane);
		}
		return ret;
	};
	// Parses the contents of a scene tag, shoves the unprocessed text in the scene object (this.parserState)
	// under the proper name.
	// Scenes tagged as such:
	//
	// [sceneName | scene contents blaugh]
	//
	// This gets placed in this.parserState so this.parserState["sceneName"] == "scene contents blaugh"
	//
	// Note that parsing of the actual scene contents is deferred untill it's actually called for display.
	Parser.prototype.parseSceneTag = function (textCtnt) {
		var sceneName;
		var sceneCont;
		sceneName = textCtnt.substring(textCtnt.indexOf(' '), textCtnt.indexOf('|'));
		sceneCont = textCtnt.substr(textCtnt.indexOf('|') + 1);
		sceneName = this.stripStr(sceneName);
		if (this.sceneParserDebug)
			trace("WARNING: Adding scene with name \"" + sceneName + "\"");
		// Cleanup the scene content from spurious leading and trailing space.
		sceneCont = this.trimStr(sceneCont, "\n");
		sceneCont = this.trimStr(sceneCont, "	");
		this.parserState[sceneName] = this.stripStr(sceneCont);
	};
	// Evaluates the contents of a button tag, and instantiates the relevant button
	// Current syntax:
	//
	// [button function_name | Button Name]
	// where "button" is a constant string, "function_name" is the name of the function pressing the button will call,
	// and "Button Name" is the text that will be shown on the button.
	// Note that the function name cannot contain spaces (actionscript requires this), and is case-sensitive
	// "Button name" can contain arbitrary spaces or characters, excepting "]", "[" and "|"
	Parser.prototype.parseButtonTag = function (textCtnt) {
		// TODO: Allow button positioning!
		var arr = textCtnt.split("|");
		if (arr.length > 2) {
			if (this.settingsClass.haltOnErrors)
				throw new Error("");
			throw new Error("Too many items in button");
		}
		var buttonName = this.stripStr(arr[1]);
		var buttonFunc = this.stripStr(arr[0].substring(arr[0].indexOf(' ')));
		//trace("WARNING: adding a button with name\"" + buttonName + "\" and function \"" + buttonFunc + "\"");
		this.ownerClass.addButton(this.buttonNum, buttonName, this.enterParserScene, buttonFunc);
		this.buttonNum += 1;
	};
	// pushes the contents of the passed string into the scene list object if it's a scene, or instantiates the named button if it's a button
	// command and returns an empty string.
	// if the contents are not a button or scene contents, returns the contents.
	Parser.prototype.evalForSceneControls = function (textCtnt) {
		if (this.sceneParserDebug)
			trace("WARNING: Checking for scene tags.");
		if (textCtnt.toLowerCase().indexOf("screen") == 0) {
			if (this.sceneParserDebug)
				trace("WARNING: It's a scene");
			this.parseSceneTag(textCtnt);
			return "";
		}
		else if (textCtnt.toLowerCase().indexOf("button") == 0) {
			if (this.sceneParserDebug)
				trace("WARNING: It's a button add statement");
			this.parseButtonTag(textCtnt);
			return "";
		}
		return textCtnt;
	};
	Parser.prototype.isIfStatement = function (textCtnt) {
		return textCtnt.toLowerCase().indexOf("if") == 0;
	};
	// Called to determine if the contents of a bracket are a parseable statement or not
	// If the contents *are* a parseable, it calls the relevant function to evaluate it
	// if not, it simply returns the contents as passed
	Parser.prototype.parseNonIfStatement = function (textCtnt, depth) {
		var retStr = "";
		if (this.printCcntentDebug)
			trace("WARNING: Parsing content string: ", textCtnt);
		if (this.mainParserDebug)
			trace("WARNING: Not an if statement");
		// Match a single word, with no leading or trailing space
		var singleWordTagRegExp = /^[\w\.]+$/;
		var doubleWordTagRegExp = /^[\w\.]+\s[\w\.]+$/;
		if (this.mainParserDebug)
			trace("WARNING: string length = ", textCtnt.length);
		if (textCtnt.toLowerCase().indexOf("insertsection") == 0) {
			if (this.sceneParserDebug)
				trace("WARNING: It's a scene section insert tag!");
			retStr = this.tostr(this.getSceneSectionToInsert(textCtnt));
		}
		else if (singleWordTagRegExp.exec(textCtnt)) {
			if (this.mainParserDebug)
				trace("WARNING: It's a single word!");
			retStr += this.tostr(this.convertSingleArg(textCtnt));
		}
		else if (doubleWordTagRegExp.exec(textCtnt)) {
			if (this.mainParserDebug)
				trace("WARNING: Two-word tag!");
			retStr += this.tostr(this.convertDoubleArg(textCtnt));
		}
		else {
			if (this.mainParserDebug)
				trace("WARNING: Cannot parse content. What?", textCtnt);
			retStr += this.errstr("!Unknown multi-word tag \"" + retStr + "\"!");
		}
		return retStr;
	};
	Parser.prototype.tostr = function (s) {
		if (s === null || s === undefined) {
			return this.errstr(s);
		}
		else {
			return "" + s;
		}
	};
	Parser.prototype.errstr = function (s) {
		return "<span class='bg-danger text-white'>" + s + "</span>";
	};
	// Actual internal parser function.
	// textCtnt is the text you want parsed, depth is a number that reflects the current recursion depth
	// You pass in the string you want parsed, and the parsed result is returned as a string.
	Parser.prototype.recParser = function (textCtnt, depth) {
		if (this.mainParserDebug)
			trace("WARNING: Recursion call", depth, "---------------------------------------------+++++++++++++++++++++");
		if (this.printIntermediateParseStateDebug)
			trace("WARNING: Parsing contents = ", textCtnt);
		// Depth tracks our recursion depth
		// Basically, we need to handle things differently on the first execution, so we don't mistake single-word print-statements for
		// a tag. Therefore, every call of this.recParser increments depth by 1
		depth += 1;
		if (textCtnt.length == 0)
			return "";
		var i = 0;
		var bracketCnt = 0;
		var lastBracket = -1;
		var retStr = "";
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
		if (lastBracket != -1) {
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
				if (bracketCnt == 0) {
					var prefixTmp = void 0, postfixTmp = void 0;
					// Only prepend the prefix if it actually has content.
					prefixTmp = textCtnt.substring(0, lastBracket);
					if (this.mainParserDebug)
						trace("WARNING: prefix content = ", prefixTmp);
					if (prefixTmp)
						retStr += prefixTmp;
					// We know there aren't any brackets in the section before the first opening bracket.
					// therefore, we just add it to the returned string
					var tmpStr = textCtnt.substring(lastBracket + 1, i);
					tmpStr = this.evalForSceneControls(tmpStr);
					// this.evalForSceneControls swallows scene controls, so they won't get parsed further now.
					// therefore, you could *theoretically* have nested scene pages, though I don't know WHY you'd ever want that.
					if (this.isIfStatement(tmpStr)) {
						if (this.conditionalDebug)
							trace("WARNING: early eval as if");
						retStr += this.parseConditional(tmpStr, depth);
						if (this.conditionalDebug)
							trace("WARNING: ------------------0000000000000000000000000000000000000000000000000000000000000000-----------------------");
						//trace("WARNING: Parsed Ccnditional - ", retStr)
					}
					else if (tmpStr) {
						if (this.printCcntentDebug)
							trace("WARNING: Parsing bracket contents = ", tmpStr);
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
						if (this.printCcntentDebug)
							trace("WARNING: Need to parse trailing text", postfixTmp);
						retStr += this.recParser(postfixTmp, depth); // Parse the trailing text (if any)
						// Note: This leads to LOTS of recursion. Since we basically call this.recParser once per
						// tag, it means that if a body of text has 30 tags, we'll end up recursing at least
						// 29 times before finishing.
						// Making this tail-call reursive, or just parsing it flatly may be a much better option in
						// the future, if this does become an issue.
					}
					else {
						if (this.printCcntentDebug)
							trace("WARNING: No brackets in trailing text", postfixTmp);
						retStr += postfixTmp;
					}
					return retStr;
					// and return the parsed string
				}
			}
		}
		else {
			// DERP. We should never have brackets around something that ISN'T a tag intended to be parsed. Therefore, we just need
			// to determine what type of parsing should be done do the tag.
			if (this.printCcntentDebug)
				trace("WARNING: No brackets present in text passed to recParse", textCtnt);
			retStr += textCtnt;
		}
		return retStr;
	};
	// Main parser function.
	// textCtnt is the text you want parsed, depth is a number, which should be 0
	// or not passed at all.
	// You pass in the string you want parsed, and the parsed result is returned as a string.
	Parser.prototype.recursiveParser = function (contents, prettyQuotes) {
		if (prettyQuotes === void 0) {
			prettyQuotes = true;
		}
		if (this.mainParserDebug)
			trace("WARNING: ------------------ Parser called on string -----------------------");
		// Eventually, when this goes properly class-based, we'll add a period, and have this.parserState.
		// Reset the parser's internal state, since we're parsing a new string:
		// trace("WARNING: Purging scene parser contents")
		this.parserState = {};
		var ret;
		// Run through the parser
		contents = contents.replace(/\\n/g, "\n");
		ret = this.recParser(contents, 0);
		if (this.printIntermediateParseStateDebug)
			trace("WARNING: Parser intermediate contents = ", ret);
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
		return ret;
	};
	// ---------------------------------------------------------------------------------------------------------------------------------------
	// ---------------------------------------------------------------------------------------------------------------------------------------
	// ---------------------------------------------------------------------------------------------------------------------------------------
	// Make shit look nice
	Parser.prototype.makeQuotesPrettah = function (inStr) {
		inStr = inStr.replace(/(\w)'(\w)/g, "$1\u2019$2") // Apostrophes
			.replace(/(^|[\r\n 	\.\!\,\?])"([a-zA-Z<>\.\!\,\?])/g, "$1\u201c$2") // Opening doubles
			.replace(/([a-zA-Z<>\.\!\,\?])"([\r\n 	\.\!\,\?]|$)/g, "$1\u201d$2") // Closing doubles
			.replace(/--/g, "\u2014"); // em-dashes
		return inStr;
	};
	// ---------------------------------------------------------------------------------------------------------------------------------------
	// ---------------------------------------------------------------------------------------------------------------------------------------
	// ---------------------------------------------------------------------------------------------------------------------------------------
	// Stupid string utility functions, because actionscript doesn't have them (WTF?)
	Parser.prototype.stripStr = function (str) {
		return this.trimStrBack(this.trimStrFront(str, " "), " ");
	};
	Parser.prototype.trimStr = function (str, char) {
		if (char === void 0) {
			char = " ";
		}
		return this.trimStrBack(this.trimStrFront(str, char), char);
	};
	Parser.prototype.trimStrFront = function (str, char) {
		if (char === void 0) {
			char = " ";
		}
		char = this.stringToCharacter(char);
		if (str.charAt(0) == char) {
			str = this.trimStrFront(str.substring(1), char);
		}
		return str;
	};
	Parser.prototype.trimStrBack = function (str, char) {
		if (char === void 0) {
			char = " ";
		}
		char = this.stringToCharacter(char);
		if (str.charAt(str.length - 1) == char) {
			str = this.trimStrBack(str.substring(0, str.length - 1), char);
		}
		return str;
	};
	Parser.prototype.stringToCharacter = function (str) {
		if (str.length == 1) {
			return str;
		}
		return str.slice(0, 1);
	};
	Parser.prototype.isUpperCase = function (char) {
		if (!isNaN(+char)) {
			return false;
		}
		else if (char == char.toUpperCase()) {
			return true;
		}
		return false;
	};
	Parser.prototype.capitalizeFirstWord = function (str) {
		str = str.charAt(0).toUpperCase() + str.slice(1);
		return str;
	};
	return Parser;
}());
// Lookup dictionary for converting any single argument brackets into it's corresponding string
// basically [armor] results in the "[armor]" segment of the string being replaced with the
// results of the corresponding anonymous function, in this case: function(): any {return player.armorName;}
// tags not present in the singleArgConverters object return an error message.
// all the errors related to trying to parse stuff if not present are
// already handled in the various *Descript() functions.
// no need to duplicate them.
// Note: all key strings MUST be ENTIRELY lowercase.
var singleArgConverters = {
	"agility": function (thisPtr) {
		return "[Agility]";
	},
	"allbreasts": function (thisPtr) {
		return kGAMECLASS.player.allBreastsDescript();
	},
	"alltits": function (thisPtr) {
		return kGAMECLASS.player.allBreastsDescript();
	},
	"armor": function (thisPtr) {
		return kGAMECLASS.player.armorName;
	},
	"armorname": function (thisPtr) {
		return kGAMECLASS.player.armorName;
	},
	"ass": function (thisPtr) {
		return kGAMECLASS.player.buttDescript();
	},
	"asshole": function (thisPtr) {
		return kGAMECLASS.player.assholeDescript();
	},
	"balls": function (thisPtr) {
		return kGAMECLASS.player.ballsDescriptLight();
	},
	"bodytype": function (thisPtr) {
		return kGAMECLASS.player.bodyType();
	},
	"boyfriend": function (thisPtr) {
		return kGAMECLASS.player.mf("boyfriend", "girlfriend");
	},
	"breasts": function (thisPtr) {
		return kGAMECLASS.player.breastDescript(0);
	},
	"butt": function (thisPtr) {
		return kGAMECLASS.player.buttDescript();
	},
	"butthole": function (thisPtr) {
		return kGAMECLASS.player.assholeDescript();
	},
	"chest": function (thisPtr) {
		return kGAMECLASS.player.chestDesc();
	},
	"claws": function (thisPtr) {
		return kGAMECLASS.player.claws();
	},
	"clit": function (thisPtr) {
		return kGAMECLASS.player.clitDescript();
	},
	"cock": function (thisPtr) {
		return kGAMECLASS.player.cockDescript(0);
	},
	"cockhead": function (thisPtr) {
		return kGAMECLASS.player.cockHead(0);
	},
	"cocks": function (thisPtr) {
		return kGAMECLASS.player.multiCockDescriptLight();
	},
	"cunt": function (thisPtr) {
		return kGAMECLASS.player.vaginaDescript();
	},
	"eachcock": function (thisPtr) {
		return kGAMECLASS.player.sMultiCockDesc();
	},
	"evade": function (thisPtr) {
		return "[Evade]";
	},
	"eyes": function (thisPtr) {
		return kGAMECLASS.player.eyesDescript();
	},
	"face": function (thisPtr) {
		return kGAMECLASS.player.face();
	},
	"feet": function (thisPtr) {
		return kGAMECLASS.player.feet();
	},
	"foot": function (thisPtr) {
		return kGAMECLASS.player.foot();
	},
	"fullchest": function (thisPtr) {
		return kGAMECLASS.player.allChestDesc();
	},
	"hair": function (thisPtr) {
		return kGAMECLASS.player.hairDescript();
	},
	"haircolor": function (thisPtr) {
		return kGAMECLASS.player.hairColor;
	},
	"hairorfur": function (thisPtr) {
		return kGAMECLASS.player.hairOrFur();
	},
	"he": function (thisPtr) {
		return kGAMECLASS.player.mf("he", "she");
	},
	"he2": function (thisPtr) {
		return kGAMECLASS.player2.mf("he", "she");
	},
	"him": function (thisPtr) {
		return kGAMECLASS.player.mf("him", "her");
	},
	"him2": function (thisPtr) {
		return kGAMECLASS.player2.mf("him", "her");
	},
	"himself": function (thisPtr) {
		return kGAMECLASS.player.mf("himself", "herself");
	},
	"herself": function (thisPtr) {
		return kGAMECLASS.player.mf("himself", "herself");
	},
	"hips": function (thisPtr) {
		return kGAMECLASS.player.hipDescript();
	},
	"his": function (thisPtr) {
		return kGAMECLASS.player.mf("his", "her");
	},
	"his2": function (thisPtr) {
		return kGAMECLASS.player2.mf("his", "her");
	},
	"horns": function (thisPtr) {
		return kGAMECLASS.player.hornDescript();
	},
	"leg": function (thisPtr) {
		return kGAMECLASS.player.leg();
	},
	"legs": function (thisPtr) {
		return kGAMECLASS.player.legs();
	},
	"lowergarment": function (thisPtr) {
		return kGAMECLASS.player.lowerGarmentName;
	},
	"man": function (thisPtr) {
		return kGAMECLASS.player.mf("man", "woman");
	},
	"men": function (thisPtr) {
		return kGAMECLASS.player.mf("men", "women");
	},
	"malefemaleherm": function (thisPtr) {
		return kGAMECLASS.player.maleFemaleHerm();
	},
	"master": function (thisPtr) {
		return kGAMECLASS.player.mf("master", "mistress");
	},
	"misdirection": function (thisPtr) {
		return "[Misdirection]";
	},
	"multicock": function (thisPtr) {
		return kGAMECLASS.player.multiCockDescriptLight();
	},
	"multicockdescriptlight": function (thisPtr) {
		return kGAMECLASS.player.multiCockDescriptLight();
	},
	"name": function (thisPtr) {
		return kGAMECLASS.player.short;
	},
	"nipple": function (thisPtr) {
		return kGAMECLASS.player.nippleDescript(0);
	},
	"nipples": function (thisPtr) {
		return kGAMECLASS.player.nippleDescript(0) + "s";
	},
	"onecock": function (thisPtr) {
		return kGAMECLASS.player.oMultiCockDesc();
	},
	"pg": function (thisPtr) {
		return "\n\n";
	},
	"pussy": function (thisPtr) {
		return kGAMECLASS.player.vaginaDescript();
	},
	"race": function (thisPtr) {
		return kGAMECLASS.player.race();
	},
	"sack": function (thisPtr) {
		return kGAMECLASS.player.sackDescript();
	},
	"sheath": function (thisPtr) {
		return kGAMECLASS.player.sheathDescript();
	},
	"shield": function (thisPtr) {
		return kGAMECLASS.player.shieldName;
	},
	"skin": function (thisPtr) {
		return kGAMECLASS.player.skin();
	},
	"skin.noadj": function (thisPtr) {
		return kGAMECLASS.player.skin(true);
	},
	"skinfurscales": function (thisPtr) {
		return kGAMECLASS.player.skinFurScales();
	},
	"tallness": function (thisPtr) {
		return kGAMECLASS.measurements.footInchOrMetres(kGAMECLASS.player.tallness);
	},
	"tits": function (thisPtr) {
		return kGAMECLASS.player.breastDescript(0);
	},
	"tongue": function (thisPtr) {
		return kGAMECLASS.player.tongueDescript();
	},
	"uppergarment": function (thisPtr) {
		return kGAMECLASS.player.upperGarmentName;
	},
	"vag": function (thisPtr) {
		return kGAMECLASS.player.vaginaDescript();
	},
	"vagina": function (thisPtr) {
		return kGAMECLASS.player.vaginaDescript();
	},
	"vagorass": function (thisPtr) {
		return (kGAMECLASS.player.hasVagina() ? kGAMECLASS.player.vaginaDescript() : kGAMECLASS.player.assholeDescript());
	},
	"weapon": function (thisPtr) {
		return kGAMECLASS.player.weaponName;
	},
	"weaponname": function (thisPtr) {
		return kGAMECLASS.player.weaponName;
	},
	"latexyname": function (thisPtr) {
		return kGAMECLASS.flags[kFLAGS.GOO_NAME];
	},
	"bathgirlname": function (thisPtr) {
		return kGAMECLASS.flags[kFLAGS.MILK_NAME];
	},
	"cockplural": function (thisPtr) {
		return (kGAMECLASS.player.cocks.length == 1) ? "cock" : "cocks";
	},
	"dickplural": function (thisPtr) {
		return (kGAMECLASS.player.cocks.length == 1) ? "dick" : "dicks";
	},
	"headplural": function (thisPtr) {
		return (kGAMECLASS.player.cocks.length == 1) ? "head" : "heads";
	},
	"prickplural": function (thisPtr) {
		return (kGAMECLASS.player.cocks.length == 1) ? "prick" : "pricks";
	},
	"boy": function (thisPtr) {
		return kGAMECLASS.player.mf("boy", "girl");
	},
	"guy": function (thisPtr) {
		return kGAMECLASS.player.mf("guy", "girl");
	},
	"wings": function (thisPtr) {
		return kGAMECLASS.player.wingsDescript();
	},
	"tail": function (thisPtr) {
		return kGAMECLASS.player.tailDescript();
	},
	"onetail": function (thisPtr) {
		return kGAMECLASS.player.oneTailDescript();
	},
	//Prisoner
	"captortitle": function (thisPtr) {
		return kGAMECLASS.prison.prisonCaptor.captorTitle;
	},
	"captorname": function (thisPtr) {
		return kGAMECLASS.prison.prisonCaptor.captorName;
	},
	"captorhe": function (thisPtr) {
		return kGAMECLASS.prison.prisonCaptor.captorPronoun1;
	},
	"captorhim": function (thisPtr) {
		return kGAMECLASS.prison.prisonCaptor.captorPronoun2;
	},
	"captorhis": function (thisPtr) {
		return kGAMECLASS.prison.prisonCaptor.captorPronoun3;
	}
};
// PC ASCII Aspect lookups
// For subject: "cock"
var cockLookups = {
	"all": function (thisPtr) {
		return kGAMECLASS.player.multiCockDescriptLight();
	},
	"each": function (thisPtr) {
		return kGAMECLASS.player.sMultiCockDesc();
	},
	"one": function (thisPtr) {
		return kGAMECLASS.player.oMultiCockDesc();
	},
	"largest": function (thisPtr) {
		return kGAMECLASS.player.cockDescript(kGAMECLASS.player.biggestCockIndex());
	},
	"biggest": function (thisPtr) {
		return kGAMECLASS.player.cockDescript(kGAMECLASS.player.biggestCockIndex());
	},
	"biggest2": function (thisPtr) {
		return kGAMECLASS.player.cockDescript(kGAMECLASS.player.biggestCockIndex2());
	},
	"biggest3": function (thisPtr) {
		return kGAMECLASS.player.cockDescript(kGAMECLASS.player.biggestCockIndex3());
	},
	"smallest": function (thisPtr) {
		return kGAMECLASS.player.cockDescript(kGAMECLASS.player.smallestCockIndex());
	},
	"smallest2": function (thisPtr) {
		return kGAMECLASS.player.cockDescript(kGAMECLASS.player.smallestCockIndex2());
	},
	"longest": function (thisPtr) {
		return kGAMECLASS.player.cockDescript(kGAMECLASS.player.longestCock());
	},
	"shortest": function (thisPtr) {
		return kGAMECLASS.player.cockDescript(kGAMECLASS.player.shortestCockIndex());
	}
};
// For subject: "cockHead"
var cockHeadLookups = {
	"biggest": function (thisPtr) {
		return kGAMECLASS.player.cockHead(kGAMECLASS.player.biggestCockIndex());
	},
	"biggest2": function (thisPtr) {
		return kGAMECLASS.player.cockHead(kGAMECLASS.player.biggestCockIndex2());
	},
	"biggest3": function (thisPtr) {
		return kGAMECLASS.player.cockHead(kGAMECLASS.player.biggestCockIndex3());
	},
	"largest": function (thisPtr) {
		return kGAMECLASS.player.cockHead(kGAMECLASS.player.biggestCockIndex());
	},
	"smallest": function (thisPtr) {
		return kGAMECLASS.player.cockHead(kGAMECLASS.player.smallestCockIndex());
	},
	"smallest2": function (thisPtr) {
		return kGAMECLASS.player.cockHead(kGAMECLASS.player.smallestCockIndex2());
	},
	"longest": function (thisPtr) {
		return kGAMECLASS.player.cockHead(kGAMECLASS.player.longestCock());
	},
	"shortest": function (thisPtr) {
		return kGAMECLASS.player.cockHead(kGAMECLASS.player.shortestCockIndex());
	}
};
// These tags take a two-word tag with a **numberic** attribute for lookup.
// [object NUMERIC-attribute]
// if "NUMERIC-attribute" can be cast to a Number, the parser looks for "object" in twoWordNumericTagsLookup.
// If it finds twoWordNumericTagsLookup["object"], it calls the anonymous function stored with said key "object"
// like so: twoWordNumericTagsLookup["object"](Number("NUMERIC-attribute"))
//
// if attribute cannot be case to a number, the parser looks for "object" in twoWordTagsLookup.
var twoWordNumericTagsLookup = {
	"cockfit": function (thisPtr, aspect) {
		if (!kGAMECLASS.player.hasCock())
			return "<b>(Attempt to parse cock when none present.)</b>";
		else {
			if (kGAMECLASS.player.cockThatFits(aspect) >= 0)
				return kGAMECLASS.player.cockDescript(kGAMECLASS.player.cockThatFits(aspect));
			else
				return kGAMECLASS.player.cockDescript(kGAMECLASS.player.smallestCockIndex());
		}
	},
	"cockfit2": function (thisPtr, aspect) {
		if (!kGAMECLASS.player.hasCock())
			return "<b>(Attempt to parse cock when none present.)</b>";
		else {
			if (kGAMECLASS.player.cockThatFits2(aspect) >= 0)
				return kGAMECLASS.player.cockDescript(kGAMECLASS.player.cockThatFits2(aspect));
			else
				return kGAMECLASS.player.cockDescript(kGAMECLASS.player.smallestCockIndex());
		}
	},
	"cockheadfit": function (thisPtr, aspect) {
		if (!kGAMECLASS.player.hasCock()) {
			return "<b>(Attempt to parse cockhead when none present.)</b>";
		}
		else {
			if (kGAMECLASS.player.cockThatFits(aspect) >= 0)
				return kGAMECLASS.player.cockHead(kGAMECLASS.player.cockThatFits(aspect));
			else
				return kGAMECLASS.player.cockHead(kGAMECLASS.player.smallestCockIndex());
		}
	},
	"cockheadfit2": function (thisPtr, aspect) {
		if (!kGAMECLASS.player.hasCock())
			return "<b>(Attempt to parse cockhead when none present.)</b>";
		else {
			if (kGAMECLASS.player.cockThatFits2(aspect) >= 0)
				return kGAMECLASS.player.cockHead(kGAMECLASS.player.cockThatFits2(aspect));
			else
				return kGAMECLASS.player.cockHead(kGAMECLASS.player.smallestCockIndex());
		}
	},
	"cock": function (thisPtr, aspect) {
		if (!kGAMECLASS.player.hasCock())
			return "<b>(Attempt to parse cock when none present.)</b>";
		else {
			if (aspect - 1 >= 0 && aspect - 1 < kGAMECLASS.player.cockTotal())
				return kGAMECLASS.player.cockDescript(aspect - 1);
			else
				return "<b>(Attempt To Parse player.cockDescript for Invalid Cock)</b>";
		}
	},
	"cockhead": function (thisPtr, aspect) {
		if (!kGAMECLASS.player.hasCock())
			return "<b>(Attempt to parse cockHead when none present.)</b>";
		else {
			var intAspect = (aspect - 1) | 0;
			if (intAspect >= 0 && intAspect < kGAMECLASS.player.cockTotal())
				return kGAMECLASS.player.cockHead(intAspect);
			else
				return "<b>(Attempt To Parse CockHeadDescript for Invalid Cock)</b>";
		}
	}
};
// These tags take an ascii attribute for lookup.
// [object attribute]
// if attribute cannot be cast to a number, the parser looks for "object" in twoWordTagsLookup,
// and then uses the corresponding object to determine the value of "attribute", by looking for
// "attribute" twoWordTagsLookup["object"]["attribute"]
var twoWordTagsLookup = {
	// NPCs:
	//"rubi"  : rubiLookups,
	//"arian" : arianLookups,
	//"ember" : emberLookups,
	//"benoit": benoitLookups,
	// PC Attributes:
	"cock": cockLookups,
	"cockhead": cockHeadLookups
};
var textarea;
var previews = [];
var Preview;
(function (Preview) {
})(Preview || (Preview = {}));
function regenOne(preview) {
	var src = textarea.val();
	preview.ui.status.text("rendering...");
	_.defer(function () {
		Rng.state = (preview.seed = preview.ui.seed.val() | 0);
		for (var _i = 0, _a = preview.ui.attrs.toArray(); _i < _a.length; _i++) {
			var a = _a[_i];
			attrSet(preview.game, a.name, a.value);
		}
		kGAMECLASS = preview.game;
		var t0 = new Date();
		var s = preview.parser.recursiveParser(src);
		var t1 = new Date();
		preview.ui.status.text("done in " + (t1.getTime() - t0.getTime()).toFixed() + "ms");
		_.defer(function () {
			preview.ui.content.html(s);
		});
	});
}
function regen() {
	_.forEach(previews, regenOne);
}
function setupPreview(container) {
	container.html("").append(Preview.template.clone());
	var game = new CoC();
	var p = {
		ui: {
			content: container.find("[data-role=content]"),
			container: container,
			status: container.find("[data-role=status]"),
			seed: container.find("[name=seed]"),
			attrs: container.find("[data-role=attr]")
		},
		parser: new Parser(game, {}),
		game: game,
		seed: Rng.gen_state()
	};
	var updater = _.debounce(_.partial(regenOne, p), 300);
	p.ui.seed.val(p.seed).on("input", updater);
	p.ui.attrs.on("input", updater);
	for (var _i = 0, _a = p.ui.attrs.toArray(); _i < _a.length; _i++) {
		var a = _a[_i];
		a.value = attrGet(p.game, a.name);
	}
	return p;
}
$(function () {
	textarea = $("#source");
	Preview.template = $("#preview-1 > *").clone();
	for (var i = 1; i <= 2; i++) {
		previews.push(setupPreview($("#preview-" + i)));
	}
	textarea.on("input change", _.debounce(regen, 300));
	regen();
});
var CockTypesEnum;
(function (CockTypesEnum) {
	CockTypesEnum[CockTypesEnum["HUMAN"] = 0] = "HUMAN";
	CockTypesEnum[CockTypesEnum["HORSE"] = 1] = "HORSE";
	CockTypesEnum[CockTypesEnum["DOG"] = 2] = "DOG";
	CockTypesEnum[CockTypesEnum["DEMON"] = 3] = "DEMON";
	CockTypesEnum[CockTypesEnum["TENTACLE"] = 4] = "TENTACLE";
	CockTypesEnum[CockTypesEnum["CAT"] = 5] = "CAT";
	CockTypesEnum[CockTypesEnum["LIZARD"] = 6] = "LIZARD";
	CockTypesEnum[CockTypesEnum["ANEMONE"] = 7] = "ANEMONE";
	CockTypesEnum[CockTypesEnum["KANGAROO"] = 8] = "KANGAROO";
	CockTypesEnum[CockTypesEnum["DRAGON"] = 9] = "DRAGON";
	CockTypesEnum[CockTypesEnum["DISPLACER"] = 10] = "DISPLACER";
	CockTypesEnum[CockTypesEnum["FOX"] = 11] = "FOX";
	CockTypesEnum[CockTypesEnum["BEE"] = 12] = "BEE";
	CockTypesEnum[CockTypesEnum["PIG"] = 13] = "PIG";
	CockTypesEnum[CockTypesEnum["AVIAN"] = 14] = "AVIAN";
	CockTypesEnum[CockTypesEnum["RHINO"] = 15] = "RHINO";
	CockTypesEnum[CockTypesEnum["ECHIDNA"] = 16] = "ECHIDNA";
	CockTypesEnum[CockTypesEnum["UNDEFINED"] = 17] = "UNDEFINED";
})(CockTypesEnum || (CockTypesEnum = {}));
var SkinTypeEnum;
(function (SkinTypeEnum) {
	SkinTypeEnum[SkinTypeEnum["PLAIN"] = 0] = "PLAIN";
	SkinTypeEnum[SkinTypeEnum["FUR"] = 1] = "FUR";
	SkinTypeEnum[SkinTypeEnum["LIZARD_SCALES"] = 2] = "LIZARD_SCALES";
	SkinTypeEnum[SkinTypeEnum["GOO"] = 3] = "GOO";
	SkinTypeEnum[SkinTypeEnum["UNDEFINED"] = 4] = "UNDEFINED";
	SkinTypeEnum[SkinTypeEnum["DRAGON_SCALES"] = 5] = "DRAGON_SCALES";
	SkinTypeEnum[SkinTypeEnum["FISH_SCALES"] = 6] = "FISH_SCALES";
})(SkinTypeEnum || (SkinTypeEnum = {}));
var SKIN_TYPE_PLAIN = SkinTypeEnum.PLAIN;
var SKIN_TYPE_FUR = SkinTypeEnum.FUR;
var SKIN_TYPE_LIZARD_SCALES = SkinTypeEnum.LIZARD_SCALES;
var SKIN_TYPE_GOO = SkinTypeEnum.GOO;
var SKIN_TYPE_UNDEFINED = SkinTypeEnum.UNDEFINED;
var SKIN_TYPE_DRAGON_SCALES = SkinTypeEnum.DRAGON_SCALES;
var SKIN_TYPE_FISH_SCALES = SkinTypeEnum.FISH_SCALES;
var ANAL_WETNESS_DRY = 0;
var ANAL_WETNESS_NORMAL = 1;
var ANAL_WETNESS_MOIST = 2;
var ANAL_WETNESS_SLIMY = 3;
var ANAL_WETNESS_DROOLING = 4;
var ANAL_WETNESS_SLIME_DROOLING = 5;
var ANAL_LOOSENESS_VIRGIN = 0;
var ANAL_LOOSENESS_TIGHT = 1;
var ANAL_LOOSENESS_NORMAL = 2;
var ANAL_LOOSENESS_LOOSE = 3;
var ANAL_LOOSENESS_STRETCHED = 4;
var ANAL_LOOSENESS_GAPING = 5;
///<reference path="appearanceDefs.ts"/>
var Appearance;
(function (Appearance) {
	function cockDescript(creature, cockIndex) {
		if (cockIndex === void 0) {
			cockIndex = 0;
		}
		if (creature.cocks.length == 0)
			return "<b>ERROR: cockDescript Called But No Cock Present</b>";
		var cockType = CockTypesEnum.HUMAN;
		if (cockIndex != 99) {
			if (creature.cocks.length <= cockIndex)
				return "<b>ERROR: cockDescript called with index of " + cockIndex + " - out of BOUNDS</b>";
			cockType = creature.cocks[cockIndex].cockType;
		}
		var isPierced = (creature.cocks.length == 1) && (creature.cocks[cockIndex].isPierced); //Only describe as pierced or sock covered if the creature has just one cock
		var hasSock = (creature.cocks.length == 1) && (creature.cocks[cockIndex].sock != "");
		var isGooey = (creature.skinType == SKIN_TYPE_GOO);
		return cockDescription(cockType, creature.cocks[cockIndex].cockLength, creature.cocks[cockIndex].cockThickness, creature.lust, creature.cumQ(), isPierced, hasSock, isGooey);
	}

	Appearance.cockDescript = cockDescript;
	function cockDescription(cockType, length, girth, lust, cumQ, isPierced, hasSock, isGooey) {
		if (lust === void 0) {
			lust = 50;
		}
		if (cumQ === void 0) {
			cumQ = 10;
		}
		if (isPierced === void 0) {
			isPierced = false;
		}
		if (hasSock === void 0) {
			hasSock = false;
		}
		if (isGooey === void 0) {
			isGooey = false;
		}
		if (rand(2) == 0) {
			if (cockType == CockTypesEnum.HUMAN)
				return cockAdjective(cockType, length, girth, lust, cumQ, isPierced, hasSock, isGooey) + " " + cockNoun(cockType);
			else
				return cockAdjective(cockType, length, girth, lust, cumQ, isPierced, hasSock, isGooey) + ", " + cockNoun(cockType);
		}
		return cockNoun(cockType);
	}

	Appearance.cockDescription = cockDescription;
	function cockNoun(cockType) {
		var l = {};
		l[CockTypesEnum.HUMAN] = [
			"cock", "cock", "cock", "cock", "cock",
			"prick", "prick",
			"pecker",
			"shaft", "shaft", "shaft"
		];
		l[CockTypesEnum.BEE] = [
			"bee prick", "bee prick", "bee prick", "bee prick",
			"insectoid cock", "insectoid cock",
			"furred monster"
		];
		l[CockTypesEnum.DOG] = [
			"dog-shaped dong",
			"canine shaft",
			"pointed prick",
			"knotty dog-shaft",
			"bestial cock",
			"animalistic puppy-pecker",
			"pointed dog-dick",
			"pointed shaft",
			"canine member",
			"canine cock",
			"knotted dog-cock"
		];
		l[CockTypesEnum.FOX] = [
			"fox-shaped dong",
			"vulpine shaft",
			"pointed prick",
			"knotty fox-shaft",
			"bestial cock",
			"animalistic vixen-pricker",
			"pointed fox-dick",
			"pointed shaft",
			"vulpine member",
			"vulpine cock",
			"knotted fox-cock"
		];
		l[CockTypesEnum.HORSE] = [
			"flared horse-cock",
			"equine prick",
			"bestial horse-shaft",
			"flat-tipped horse-member",
			"animalistic stallion-prick",
			"equine dong",
			"beast cock",
			"flared stallion-cock"
		];
		l[CockTypesEnum.DEMON] = [
			"nub-covered demon-dick",
			"nubby shaft",
			"corrupted cock",
			"perverse pecker",
			"bumpy demon-dick",
			"demonic cock",
			"demonic dong",
			"cursed cock",
			"infernal prick",
			"unholy cock",
			"blighted cock"
		];
		l[CockTypesEnum.TENTACLE] = [
			"twisting tentacle-prick",
			"wriggling plant-shaft",
			"sinuous tentacle-cock",
			"squirming cock-tendril",
			"writhing tentacle-pecker",
			"wriggling plant-prick",
			"penile flora",
			"smooth shaft",
			"undulating tentacle-dick",
			"slithering vine-prick",
			"vine-shaped cock"
		];
		l[CockTypesEnum.CAT] = [
			"feline dick",
			"spined cat-cock",
			"pink kitty-cock",
			"spiny prick",
			"animalistic kitty-prick",
			"oddly-textured cat-penis",
			"feline member",
			"spined shaft",
			"feline shaft",
			"barbed dick",
			"nubby kitten-prick"
		];
		l[CockTypesEnum.LIZARD] = [
			"reptilian dick",
			"purple cock",
			"inhuman cock",
			"reptilian prick",
			"purple prick",
			"purple member",
			"serpentine member",
			"serpentine shaft",
			"reptilian shaft",
			"bulbous snake-shaft",
			"bulging snake-dick"
		];
		l[CockTypesEnum.ANEMONE] = [
			"anemone dick",
			"tentacle-ringed cock",
			"blue member",
			"stinger-laden shaft",
			"pulsating prick",
			"anemone prick",
			"stinger-coated member",
			"blue cock",
			"tentacle-ringed dick",
			"near-transparent shaft",
			"squirming shaft"
		];
		l[CockTypesEnum.KANGAROO] = [
			"kangaroo-like dick",
			"pointed cock",
			"marsupial member",
			"tapered shaft",
			"curved pecker",
			"pointed prick",
			"squirming kangaroo-cock",
			"marsupial cock",
			"tapered kangaroo-dick",
			"curved kangaroo-cock",
			"squirming shaft"
		];
		l[CockTypesEnum.DRAGON] = [
			"dragon-like dick",
			"segmented shaft",
			"pointed prick",
			"knotted dragon-cock",
			"mythical mast",
			"segmented tool",
			"draconic dick",
			"draconic cock",
			"tapered dick",
			"unusual endowment",
			"scaly shaft"
		];
		l[CockTypesEnum.DISPLACER] = [
			"coerl cock",
			"tentacle-tipped phallus",
			"starfish-tipped shaft",
			"alien member",
			"almost-canine dick",
			"bizarre prick",
			"beastly cock",
			"cthulhu-tier cock",
			"coerl cock",
			"animal dong",
			"star-capped tool",
			"knotted erection"
		];
		l[CockTypesEnum.AVIAN] = [
			"bird cock",
			"bird dick",
			"bird pecker",
			"avian cock",
			"avian dick",
			"avian penis",
			"avian prick",
			"avian pecker",
			"tapered cock",
			"tapered prick"
		];
		l[CockTypesEnum.PIG] = [
			"pig cock",
			"pig dick",
			"pig penis",
			"pig-like cock",
			"pig-like dick",
			"swine cock",
			"swine penis",
			"corkscrew-tipped cock",
			"hoggish cock",
			"pink pig-cock",
			"pink pecker"
		];
		l[CockTypesEnum.RHINO] = [
			"oblong cock",
			"oblong dick",
			"oblong prick",
			"rhino cock",
			"rhino dick",
			"rhino penis",
			"rhino pecker",
			"rhino prick",
			"bulged rhino cock",
			"bulged rhino dick"
		];
		l[CockTypesEnum.ECHIDNA] = [
			"strange echidna dick",
			"strange echidna cock",
			"echidna dick",
			"echidna penis",
			"echidna cock",
			"exotic endowment",
			"four-headed prick",
			"four-headed penis",
			"four-headed cock",
			"four-headed dick"
		];
		var options = l[cockType] || ["cock", "prick", "pecker", "shaft"];
		return randomChoice.apply(void 0, options);
	}

	Appearance.cockNoun = cockNoun;
	function cockAdjective(cockType, length, girth, lust, cumQ, isPierced, hasSock, isGooey) {
		if (lust === void 0) {
			lust = 50;
		}
		if (cumQ === void 0) {
			cumQ = 10;
		}
		if (isPierced === void 0) {
			isPierced = false;
		}
		if (hasSock === void 0) {
			hasSock = false;
		}
		if (isGooey === void 0) {
			isGooey = false;
		}
		var options = ["length", "girth"];
		if (lust > 75)
			options.push("lust");
		if (isPierced)
			options.push("pierced");
		if (hasSock)
			options.push("sock");
		if (isGooey)
			options.push("goo");
		switch (randomChoice(options)) {
			case "lust":
				if (lust > 90) {
					if (cumQ < 50)
						return randomChoice("throbbing", "pulsating"); //Weak as shit cum
					if (cumQ < 200)
						return randomChoice("dribbling", "leaking", "drooling"); //lots of cum? drippy.
					return randomChoice("very drippy", "pre-gushing", "cum-bubbling", "pre-slicked", "pre-drooling"); //Tons of cum
				}
				else {
					if (cumQ < 50)
						return randomChoice("turgid", "blood-engorged", "rock-hard", "stiff", "eager"); //Weak as shit cum
					if (cumQ < 200)
						return randomChoice("turgid", "blood-engorged", "rock-hard", "stiff", "eager", "fluid-beading", "slowly-oozing"); //A little drippy
					return randomChoice("dribbling", "drooling", "fluid-leaking", "leaking"); //uber drippy
				}
			case "pierced":
				return "pierced";
			case "sock":
				return randomChoice("sock-sheathed", "garment-wrapped", "smartly dressed", "cloth-shrouded", "fabric swaddled", "covered");
			case "goo":
				return randomChoice("goopey", "gooey", "slimy");
			case "girth":
				if (girth <= 0.75)
					return randomChoice("thin", "slender", "narrow");
				if (girth <= 1.2)
					return "ample";
				if (girth <= 1.4)
					return randomChoice("ample", "big");
				if (girth <= 2)
					return randomChoice("broad", "meaty", "girthy");
				if (girth <= 3.5)
					return randomChoice("fat", "distended", "wide");
				return randomChoice("inhumanly distended", "monstrously thick", "bloated");
			case "length":
			default:
				if (length < 3)
					return randomChoice("little", "toy-sized", "mini", "budding", "tiny");
				if (length < 5)
					return randomChoice("short", "small");
				if (length < 7)
					return randomChoice("fair-sized", "nice");
				if (length < 9) {
					if (cockType == CockTypesEnum.HORSE)
						return randomChoice("sizable", "pony-sized", "colt-like");
					return randomChoice("sizable", "long", "lengthy");
				}
				if (length < 13) {
					if (cockType == CockTypesEnum.DOG)
						return randomChoice("huge", "foot-long", "mastiff-like");
					return randomChoice("huge", "foot-long", "cucumber-length");
				}
				if (length < 18)
					return randomChoice("massive", "knee-length", "forearm-length");
				if (length < 30)
					return randomChoice("enormous", "giant", "arm-like");
				if (cockType == CockTypesEnum.TENTACLE && rand(2) == 0)
					return "coiled";
				return randomChoice("towering", "freakish", "monstrous", "massive");
		}
	}

	Appearance.cockAdjective = cockAdjective;
	function assholeDescript(i_creature, forceDesc) {
		if (forceDesc === void 0) {
			forceDesc = false;
		}
		var description = "";
		// 66% Wetness Descript
		var ANAL_WETNESS_DESCRIPTORS = {};
		ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_DRY] = "";
		ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_NORMAL] = "";
		ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_MOIST] = "moist ";
		ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_SLIMY] = "slimy ";
		ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_DROOLING] = "drooling ";
		ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_SLIME_DROOLING] = "slime-drooling ";
		if (forceDesc || rand(3) <= 1) {
			description += ANAL_WETNESS_DESCRIPTORS[i_creature.ass.analWetness] || "";
		}
		var ANAL_TIGHTNESS_DESCRIPTORS = {};
		ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_VIRGIN] = "virgin ";
		ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_TIGHT] = "tight ";
		ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_NORMAL] = "loose ";
		ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_LOOSE] = "roomy ";
		ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_STRETCHED] = "stretched ";
		ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_GAPING] = "gaping ";
		//25% tightness description
		if (forceDesc || rand(4) == 0 || (i_creature.ass.analLooseness <= 1 && rand(4) <= 2)) {
			description += ANAL_TIGHTNESS_DESCRIPTORS[i_creature.ass.analLooseness] || "";
		}
		//asshole descript
		description += randomChoice("ass", "anus", "pucker", "backdoor", "asshole", "butthole");
		return description;
	}

	Appearance.assholeDescript = assholeDescript;
})(Appearance || (Appearance = {}));
///<reference path="Appearance.ts"/>
function todo(what) {
	console.warn("TODO properly implement " + what);
}
var CockClass = (function () {
	function CockClass() {
		this.cockType = CockTypesEnum.HUMAN;
		this.isPierced = false;
		this.sock = "";
		this.cockLength = 5;
		this.cockThickness = 1.5;
	}

	return CockClass;
}());
var AssClass = (function () {
	function AssClass() {
		this.analWetness = 0;
		this.analLooseness = 0;
	}

	return AssClass;
}());
var Creature = (function () {
	function Creature() {
		this.short = "creature";
		this.str = 15;
		this.tou = 15;
		this.spe = 15;
		this.inte = 15;
		this.lib = 15;
		this.sens = 15;
		this.cor = 15;
		this.fatigue = 20;
		this.lust = 20;
		this.HP = 99;
		this.hunger = 80;
		this.armorName = "comfortable clothes";
		this.weaponName = "fists";
		this.shieldName = "nothing";
		this.upperGarmentName = "nothing";
		this.lowerGarmentName = "comfortable loincloth";
		this.tallness = 70;
		this.hairColor = "blonde";
		this.femininity = 50;
		this.skinType = SkinTypeEnum.PLAIN;
		this.balls = 0;
		this.cocks = [];
		this.ass = new AssClass();
	}

	Object.defineProperty(Creature.prototype, "gender", {
		get: function () {
			return (this.hasCock() ? 1 : 0) + (this.hasVagina() ? 2 : 0);
		},
		enumerable: true,
		configurable: true
	});
	Creature.prototype.mf = function (m, f) {
		todo("mf");
		return this.hasVagina() ? f : m;
	};
	Creature.prototype.maleFemaleHerm = function () {
		todo("maleFemaleHerm");
		var options = {
			0: ["genderless", "fem-genderless"],
			1: ["male", "dickgirl"],
			2: ["cuntboy", "female"],
			3: ["maleherm", "hermaphrodite"]
		}[this.gender];
		return capitalize(this.mf(options[0], options[1]));
	};
	Creature.prototype.race = function () {
		todo("race");
	};
	Creature.prototype.claws = function () {
		todo("claws");
	};
	Creature.prototype.face = function () {
		todo("face");
	};
	Creature.prototype.feet = function () {
		todo("feet");
	};
	Creature.prototype.foot = function () {
		todo("foot");
	};
	Creature.prototype.leg = function () {
		todo("leg");
	};
	Creature.prototype.legs = function () {
		todo("legs");
	};
	Creature.prototype.skin = function (adj) {
		todo("skin");
	};
	Creature.prototype.hairOrFur = function () {
		todo("hairOrFur");
		return this.hasFur() ? "fur" : "hair";
	};
	Creature.prototype.skinFurScales = function () {
		todo("skinFurScales");
	};
	Creature.prototype.bodyType = function () {
		todo("bodyType");
	};
	Creature.prototype.chestDesc = function () {
		todo("chestDesc");
	};
	Creature.prototype.allChestDesc = function () {
		todo("allChestDesc");
	};
	Creature.prototype.hairDescript = function () {
		todo("hairDescript");
		return "moderately long, " + this.hairColor + " hair";
	};
	Creature.prototype.hipDescript = function () {
		todo("hipDescript");
		return "curvy hips";
	};
	Creature.prototype.hornDescript = function () {
		todo("hornDescript");
	};
	Creature.prototype.nippleDescript = function (row) {
		todo("nippleDescript");
	};
	Creature.prototype.tongueDescript = function () {
		todo("tongueDescript");
	};
	Creature.prototype.wingsDescript = function () {
		todo("wingsDescript");
		return "large feathered wings";
	};
	Creature.prototype.tailDescript = function () {
		todo("tailDescript");
		return "trio of kitsune tails";
	};
	Creature.prototype.oneTailDescript = function () {
		todo("oneTailDescript");
		return "one of kitsune tails";
	};
	Creature.prototype.cockDescript = function (index) {
		if (index === void 0) {
			index = 0;
		}
		return Appearance.cockDescript(this, index);
	};
	Creature.prototype.breastDescript = function (row) {
		if (row === void 0) {
			row = 0;
		}
		todo("breastDescript");
		return "large breasts";
	};
	Creature.prototype.allBreastsDescript = function () {
		todo("allBreastsDescript");
		return "two rows of large breasts";
	};
	Creature.prototype.vaginaDescript = function (index) {
		if (index === void 0) {
			index = 0;
		}
		todo("vaginaDescript");
		return "virgin, moist vagina";
	};
	Creature.prototype.sackDescript = function () {
		todo("sackDescript");
		return "scrotum";
	};
	Creature.prototype.sheathDescript = function () {
		todo("sheathDescript");
	};
	Creature.prototype.buttDescript = function () {
		todo("buttDescript");
		return "firm ass";
	};
	Creature.prototype.assholeDescript = function () {
		return Appearance.assholeDescript(this);
	};
	Creature.prototype.clitDescript = function () {
		todo("clitDescript");
		return "tiny clit";
	};
	Creature.prototype.eyesDescript = function () {
		todo("eyesDescript");
		return "human eyes";
	};
	Creature.prototype.hasCock = function () {
		return this.cocks.length > 0;
	};
	Creature.prototype.hasVagina = function () {
		todo("hasVagina");
	};
	Creature.prototype.hasFur = function () {
		todo("hasFur");
	};
	Creature.prototype.cockTotal = function () {
		return this.cocks.length;
	};
	Creature.prototype.cockHead = function (index) {
		todo("cockHead");
	};
	Creature.prototype.multiCockDescriptLight = function () {
		todo("multiCockDescriptLight");
	};
	Creature.prototype.sMultiCockDesc = function () {
		todo("sMultiCockDesc");
	};
	Creature.prototype.oMultiCockDesc = function () {
		todo("oMultiCockDesc");
	};
	Creature.prototype.biggestCockIndex = function () {
		todo("biggestCockIndex");
	};
	Creature.prototype.biggestCockIndex2 = function () {
		todo("biggestCockIndex2");
	};
	Creature.prototype.biggestCockIndex3 = function () {
		todo("biggestCockIndex3");
	};
	Creature.prototype.smallestCockIndex = function () {
		todo("smallestCockIndex");
	};
	Creature.prototype.smallestCockIndex2 = function () {
		todo("smallestCockIndex2");
	};
	Creature.prototype.smallestCockIndex3 = function () {
		todo("smallestCockIndex3");
	};
	Creature.prototype.longestCock = function () {
		todo("longestCock");
	};
	Creature.prototype.shortestCockIndex = function () {
		todo("shortestCockIndex");
	};
	Creature.prototype.cockThatFits = function (aspect) {
		todo("cockThatFits");
	};
	Creature.prototype.cockThatFits2 = function (aspect) {
		todo("cockThatFits2");
	};
	Creature.prototype.vaginalCapacity = function () {
		todo("vaginalCapacity");
	};
	Creature.prototype.analCapacity = function () {
		todo("analCapacity");
	};
	Creature.prototype.cumQ = function () {
		todo("cumQ");
	};
	Creature.prototype.lactationQ = function () {
		todo("lactationQ");
	};
	Creature.prototype.wetness = function () {
		todo("wetness");
	};
	Creature.prototype.bRows = function () {
		todo("bRows");
	};
	Creature.prototype.biggestTitSize = function () {
		todo("biggestTitSize");
	};
	Creature.prototype.isTaur = function () {
		todo("isTaur");
		return false;
	};
	Creature.prototype.isNaga = function () {
		todo("isNaga");
		return false;
	};
	Creature.prototype.isGoo = function () {
		todo("isGoo");
		return false;
	};
	Creature.prototype.isBiped = function () {
		todo("isBiped");
		return true;
	};
	Creature.prototype.hasFuckableNipples = function () {
		todo("hasFuckableNipples");
		return false;
	};
	Creature.prototype.canFly = function () {
		todo("canFly");
		return true;
	};
	Creature.prototype.ballsDescriptLight = function () {
		todo("ballsDescriptLight");
	};
	return Creature;
}());
var Player = (function (_super) {
	__extends(Player, _super);
	function Player() {
		return _super !== null && _super.apply(this, arguments) || this;
	}

	return Player;
}(Creature));
var CoC = (function () {
	function CoC() {
		this.player = new Player();
		this.player2 = new Player();
	}

	return CoC;
}());
function attrGet(game, attr) {
	try {
		return eval("game." + attr);
	}
	catch (e) {
		console.error("On evaluating " + attr);
		console.error(e);
		return "/!\\ JavaScript Error";
	}
}
function attrSet(game, attr, value) {
	try {
		eval("(function(game,value){game." + attr + "=value;})")(game, value);
	}
	catch (e) {
		console.error("On evaluating " + attr);
		console.error(e);
	}
}
var kGAMECLASS = new CoC();
var Rng;
(function (Rng) {
	var MAXINT = 0x7fffffff;
	var MININT = 0xffffffff;

	function xorshift32(x) {
		x = x | 0;
		x = ((x << 13) ^ x) | 0;
		x = ((x >>> 17) ^ x) | 0;
		x = ((x << 5) ^ x) | 0;
		return x | 0;
	}

	Rng.xorshift32 = xorshift32;
	function gen_state() {
		return (Math.random() * MININT) | 0;
	}

	Rng.gen_state = gen_state;
	Rng.state = gen_state();
	function rnd_int() {
		return (Rng.state = xorshift32(Rng.state));
	}

	Rng.rnd_int = rnd_int;
	function rnd_uint() {
		return (Rng.state = xorshift32(Rng.state)) & MAXINT;
	}

	Rng.rnd_uint = rnd_uint;
	function random() {
		return rnd_uint() / MAXINT;
	}

	Rng.random = random;
	function rand(i) {
		return rnd_uint() % (i | 0);
	}

	Rng.rand = rand;
})(Rng || (Rng = {}));
function rand(i) {
	return Rng.rand(i);
}
function randomChoice() {
	if (Array.isArray(arguments[0]))
		return arguments[0][rand(arguments[0].length)];
	return arguments[rand(arguments.length)];
}
function capitalize(s) {
	return s.slice(0, 1).toUpperCase() + s.slice(1);
}
//# sourceMappingURL=tsout.js.map