///<reference path="parser.ts"/>
class SimpleProcessor extends PreProcessor {
	constructor(public root: any) {
		super()
	}

	startNode(nodeType: string) {
	}

	endNode(nodeType: string, result: any) {
	}

	text(text: string): string {
		//return wrapgroup(this.parser.depth, text);
		return wrapgroup(this.parser.depths['tag'] | 0, text);
	}

	comment(text: string): string {
		return spanwrap('tok-comment', '[#' + text + '#]');
	}

	topLevelTerm(word: string): any {
		let o = this.root;
		if (o === null || o === undefined) return this.error("Cannot lookup with " + o + "root", word);
		return lookupAndBind(o, word);
	}

	error(error: any, arg: any): string {
		let ermsg = '' + ((typeof error == "object" && 'message' in error) ? error['message'] : error);
		if (arg !== undefined && arg !== null) {
			ermsg += ' ' + (isToken(arg) ? tok2str(arg) : arg);
		}
		console.error(ermsg);
		//console.error(error);
		return errstr(ermsg);
	}
}
function lookupAndBind(obj: any, key: string): any {
	if (key in obj) {
		let v = obj[key];
		if (typeof v == 'function') return function (...rest: any[]) {
			//console.log(obj, key, ...rest);
			return v.apply(obj, rest);
		};
		return v;
	}
	return undefined;
}
class CoCProcessor extends SimpleProcessor {


	/*startNode(nodeType: string) {
	 if (this.parser.options.debugParser) {
	 console.debug(strlpad('',this.parser.depth),'{',nodeType);
	 }
	 }

	 endNode(nodeType: string,result:any) {
	 if (this.parser.options.debugParser) {
	 console.debug(strlpad('',this.parser.depth+1),'}',nodeType,result);
	 }
	 }*/

	constructor(root: CoC) {
		super(root);
	}

	topLevelTerm(word: string): any {
		let game   = this.root as CoC;
		let player = game.player;
		if (word in topLevelFns) {
			return _.partial(topLevelFns[word], game);
		}
		if (word in singleArgConverters) {
			return singleArgConverters[word](this.root);
		}
		if (word in game) return lookupAndBind(game, word);
		if (word in player) return lookupAndBind(player, word);
		return this.textOrError(super.topLevelTerm(word), word);
	}
}
let topLevelFns: { [index: string]: (game: CoC, ...rest: any[]) => any } = {
	"if"  : (game: CoC, condition: any) => {
		const x = !!condition && condition !== 'false' || condition !== 'false';
		return function (iftext: () => string   = () => "",
						 elsetext: () => string = () => "") {
			return x ? iftext() : elsetext();
		}
	},
	"skin": function (game: CoC, ...parts: string[]) {
		let player = game.player;
		if (parts.length == 0) return player.skinDesc;
		return parts.map(p => ({})['' + p] || p);
	}
};