///<reference path="lexer.ts"/>
const XmlSingleTags = ["br", "hr", "input"];
interface ParserOptions extends LexerOptions {
	debugParser?: boolean;
}
abstract class PreProcessor {
	public parser: Parser;

	attach(parser: Parser) {
		this.parser = parser;
	}

	text(text: string): string {
		return text;
	}

	comment(text: string): string {
		return '';
	}

	abstract startNode(type: string);

	abstract endNode(type: string, result: any);

	abstract error(error: any, arg: any): string;

	abstract topLevelTerm(word: string): any;

	textOrError(t: any, reason: string): string {
		if (t === null || t === undefined) throw argthrow(new Error("" + t + " in " + reason), t);
		return this.text(t);
	}

	xml(tag: string, attributes: string, body: string): string {
		attributes = attributes ? ' ' + attributes : '';
		if (XmlSingleTags.indexOf(tag) >= 0) return '<' + tag + attributes + '/>';
		return '<' + tag + attributes + '>' + body + '</' + tag + '>';
	}
}

interface ITagNode {
	type: "tag";
	prefix: IExpression | string;
	call: ITagCall | null;
}
interface ITagCall {
	args: IExpression[];
	trail: ITextable[];
}
interface ITextNode {
	type: "text";
	content: ITextable[];
}
interface IXmlNode {
	type: "xml";
	tag: string;
	attributes: string;
	body: ITextable;
}
interface IErrorNode {
	type: "error";
	error: any;
	errstr: string;
}
interface IBinaryExpr {
	type: "bop";
	left: IExpression;
	right: IExpression;
	prio: number;
	op: string;
}
interface ITermExpr {
	type: "term";
	term: string;
}
interface IConstExpr {
	type: "const";
	value: string;
}
type IExpression = IErrorNode | ITermExpr | IConstExpr | IBinaryExpr;
type ITextable = ITagNode | ITextNode | IXmlNode | IErrorNode | string;
const Priorities: { [index: string]: number } = {};
((src: string[][], dst: { [index: string]: number }) => {
	for (let i = 0; i < src.length; i++) {
		for (let op in src[i]) {
			dst[op] = i;
		}
	}
})([
	['.'],//0
	[' '],//1
	['**'],//2
	['*', '/', '%'],//3
	['+', '-'],//4
	['<<', '>>', '>>>'],//5
	['>', '<', '<=', '>='],//6
	['===', '!==', '==', '!=', '=', '<>'],//7
	['&&'],//8
	['^'],//9
	['||']//10
], Priorities);

class Parser {
	private makeErrstr(e: any): string {
		let error: any;
		let arg1: any;
		if (Array.isArray(e)) {
			error = e[0];
			arg1  = e[1];
		} else if (typeof e == 'object' && 'data' in e) {
			error = e;
			arg1  = e['data'];
		} else {
			error = e;
			arg1  = null;
		}
		return this.preproc.error(error, arg1);
	}

	private node<R>(nodeType: string, body: () => R): R | IErrorNode {
		let rslt: R = undefined;
		try {
			this.depth++;
			if (!(nodeType in this.depths)) this.depths[nodeType] = 1;
			else this.depths[nodeType]++;
			if (this.options.debugParser) {
				console.debug(strlpad('', this.depth), '{', nodeType);
			}
			this.preproc.startNode(nodeType);
			rslt = body();
			return rslt;
		} catch (e) {
			console.error(e);
			return {
				type: "error", error: e, errstr: this.makeErrstr(e)
			} as IErrorNode;
		} finally {
			if (this.options.debugParser) {
				console.debug(strlpad('', this.depth), '}', nodeType, rslt);
			}
			this.depth--;
			this.depths[nodeType]--;
			this.preproc.endNode(nodeType, rslt);
		}
	}

	private expect(...types: TokenType[]): Token | null {
		if (this.peek(...types)) return this.input.shift();
		return null;
	}

	private empty(): boolean {
		let input = this.input;
		while (input.length > 0 && input[0].type == TokenType.COMMENT) input.shift();
		return input.length == 0;
	}

	private peek(...types: TokenType[]): boolean {
		return (!this.empty() && types.indexOf(this.input[0].type) >= 0);
	}

	private pop(): Token {
		return this.input.shift();
	}

	private produceExpression(closingTokens: TokenType[],
							  consume: boolean,
							  maxprio: number): IExpression {
		return this.node("expr", () => this.doProduceExpression(closingTokens, consume, maxprio));
	}

	private doProduceExpression(closingTokens: TokenType[], consume: boolean, maxprio: number): IExpression {
		let expect = (...types: TokenType[]) => this.expect(...types);
		let peek   = (...types: TokenType[]) => this.peek(...types);
		if (expect(TokenType.PAROPEN)) {
			return this.produceExpression([TokenType.PARCLOSE], true, 0);
		}
		let t: Token;
		let x: IExpression;
		if ((t = expect(TokenType.OPERATOR))) {
			// Unary operator
			throw argthrow(new Error("TODO expr"), t);
		} else if ((t = expect(TokenType.WORD))) {
			x = {type: "term", term: t.content};
		} else if ((t = expect(TokenType.STRING, TokenType.NUMBER))) {
			x = {type: "const", value: t.content};
		} else if (peek(...closingTokens)) {
			throw argthrow(new Error("Abnormal expression termination"), this.pop());
		} else {
			throw argthrow(new Error("TODO expr"), this.pop());
		}
		while (true) {
			let t: Token;
			if (peek(...closingTokens)) {
				if (consume) this.pop();
				break;
			} else if (expect(TokenType.DOT)) {
				let y = peek(TokenType.WORD);
				if (!y) y = peek(TokenType.NUMBER);
				if (!y) throw argthrow(new Error("Word or number expected after dot"), this.pop());
				x = {
					type : "bop",
					left : x,
					right: this.produceExpression(closingTokens, consume, Priorities['.']),
					prio : Priorities['.'],
					op   : '.'
				};
			} else if (peek(TokenType.WORD)) {
				if (x.type == "term") {
					x = {
						type : "bop",
						left : x,
						right: this.produceExpression(closingTokens, consume, Priorities[' ']),
						prio : Priorities[' '],
						op   : ' '
					};
				} else throw argthrow(new Error("Illegal expression token"), t);
			} else {
				throw argthrow(new Error("Illegal expression token"), this.pop());
			}
		}

		/*if (inline) {
		 let ret = this.evalExpression(x,true);
		 return {
		 type:"const",
		 value:ret
		 }
		 } else return x*/
		return x;
	}

	private produceArguments(): IExpression[] {
		let rslt: IExpression[] = [];
		if (this.expect(TokenType.PARCLOSE)) return rslt;
		while (true) {
			rslt.push(this.produceExpression([TokenType.COMMA, TokenType.PARCLOSE], false, 0));
			if (this.expect(TokenType.PARCLOSE)) return rslt;
			if (!this.expect(TokenType.COMMA)) throw argthrow(new Error("Expected ',' or ')'"), this.pop());
		}
	}

	private produceTrail(): ITextable[] {
		let rslt: ITextable[] = [];
		while (true) {
			rslt.push(this.produceText([TokenType.SBCLOSE, TokenType.SEPARATOR]));
			if (this.expect(TokenType.SBCLOSE)) break;
			if (!this.expect(TokenType.SEPARATOR)) throw argthrow(new Error("Expected Textable, '[', or '|'"), this.pop());
		}
		return rslt;
	}

	private produceTag(): ITagNode | IErrorNode | string {
		return this.node("tag", () => this.doProduceTag());
	}

	private doProduceTag(): ITagNode | IErrorNode | string {
		let expr   = this.produceExpression([TokenType.SBCLOSE, TokenType.PAROPEN, TokenType.SEMICOLON], false, 0);
		let expect = (...types: TokenType[]) => this.expect(...types);
		if (expect(TokenType.SBCLOSE)) {
			return {type: "tag", prefix: expr, call: null};
		}
		let args: IExpression[];
		if (expect(TokenType.PAROPEN)) {
			args = this.produceArguments();
		} else if (expect(TokenType.COLON)) {
			args = [];
		} else throw argthrow(new Error("Expected ']', '(', or ':'"), this.pop());
		let trail = this.produceTrail();
		/*let tag   = {type: "tag", prefix: expr, call: {args, trail}} as ITagNode;
		 return inline ? this.evalTag(tag) : tag;*/
		return {type: "tag", prefix: expr, call: {args, trail}} as ITagNode;
	}

	private produceTextItem(): ITextable {
		let processor = this.preproc;
		let expect    = (...types: TokenType[]) => this.expect(...types);
		let t: Token;
		if ((t = expect(TokenType.COMMENT))) {
			return processor.comment(t.content);
		} else if ((t = expect(TokenType.TEXT))) {
			return processor.text(t.content);
		} else if ((t = expect(TokenType.XMLOPEN, TokenType.XMLSINGLE))) {
			let {tag, attributes} = t as XmlToken;
			if (t.type == TokenType.XMLSINGLE || XmlSingleTags.indexOf(tag) >= 0) {
				return processor.xml(tag, attributes, "");
			} else {
				return this.node("xml", () => {
					let body = this.produceText([TokenType.XMLCLOSE]);
					let t    = expect(TokenType.XMLCLOSE) as XmlToken;
					if (!t) throw argthrow(new Error("Expected XMLCLOSE"), this.pop());
					let tag2 = t.tag;
					if (tag2 != tag) throw argthrow(new Error("Expected XMLCLOSE tag " + tag + ", got " + tag2), t);
					return {type: "xml", tag, attributes, body} as IXmlNode
				});
			}
		} else if ((t = expect(TokenType.XMLCLOSE))) {
			throw argthrow(new Error("Unmatched XMLOPEN"), t);
		} else if (expect(TokenType.SBOPEN)) {
			return this.produceTag();
		} else {
			throw argthrow(new Error("Not a text-level token"), this.pop());
		}
	}

	private produceText(closingTokens: TokenType[]): ITextable {
		let result = [];
		while (!this.empty()) {
			if (this.peek(...closingTokens)) break;
			let item: ITextable = this.node("text", () => this.produceTextItem());
			if (typeof item === "object" && item.type == "error"
				&& Array.isArray(item.error)
				&& Array.isArray(item.error[2])) {
				(item.error[2] as ITextable[]).push(item);
			}
			result.push(item);
		}
		if (result.length == 1) {
			return result[0];
		}
		return {type: "text", content: result};
	}

	private textize(src: ITextable): string {
		if (typeof src == 'string') return src;
		if (src === null || src === undefined) return this.preproc.error(src, null);
		switch (src.type) {
			case "tag":
				return this.evalTag(src);
			case "text":
				return src.content.map(i => this.textize(i)).join("");
			case "xml":
				return this.preproc.xml(src.tag, src.attributes, this.textize(src.body));
			case "error":
				return src.errstr;
		}
	}

	private evalTag(node: ITagNode): string {
		return this.textize(this.node("tag", () => this.doEvalTag(node)));
	}

	private doEvalTag(node: ITagNode): string {
		let prefix: IExpression = (typeof node.prefix == "string") ? {
			type: "term",
			term: node.prefix
		} : node.prefix;
		if (node.call == null) {
			return this.preproc.textOrError(this.evalExpression(prefix, true), "eval tag");
		} else {
			let pfxterm = this.evalExpression(prefix, false);
			if (typeof pfxterm == "function") {
				let pfxval = pfxterm.apply(null, node.call.args.map(e => this.evalExpression(e, true)));
				let result: any;
				if (typeof pfxval == "function") {
					result = pfxval.apply(null, node.call.trail.map(f => () => this.textize(f)));
				} else result = pfxval;
				return this.preproc.textOrError(result, "eval tag");
			} else throw argthrow(new Error("Not a function in call-expression"), pfxterm);
		}
	}

	private evalExpression(expr: IExpression, stringify: boolean): any {
		return this.node("eval " + expr.type, () => this.doEvalExpression(expr, stringify));
	}

	private doEvalExpression(expr: IExpression, stringify: boolean): any {
		let rslt: any;
		switch (expr.type) {
			case 'error':
				return expr.errstr;
			case 'bop':
				let left   = this.evalExpression(expr.left, false);
				let xright = expr.right;
				switch (expr.op) {
					case ' ':
					case '.':
						let right = (xright.type == 'term') ? xright.term : this.evalExpression(expr.right, true);
						if (left === null || left === undefined) throw argthrow(new Error("Encountered " + left), expr);
						if (typeof left == 'function') {
							rslt = left(right);
						} else {
							rslt = left[right];
						}
						if (typeof rslt == 'function') rslt = rslt.apply(left, []);
						break;
					default:
						throw argthrow(new Error("TODO eval bop"), expr.op);
				}
				break;
			case 'const':
				return expr.value;
			case 'term':
				let lookup = this.preproc.topLevelTerm(expr.term);
				if (lookup !== undefined) {
					rslt = lookup;
				} else {
					rslt = function () {console.log(expr, arguments)};
				}
				break;
			default:
				throw argthrow(new Error("TODO eval"), expr['type']);
		}
		if (typeof rslt == 'function' && stringify) rslt = rslt();
		return rslt;
		// return stringify? this.preproc.textOrError(rslt,"Evaluation failed") : rslt;
	}

	public constructor(public preproc: PreProcessor, {
		debugLexer = false, debugParser = false, allowNewlineEscape = true, convertNewlines = true
	}: ParserOptions) {
		this.options = {
			convertNewlines, allowNewlineEscape, debugLexer, debugParser
		}
	}

	public options: ParserOptions;
	public depth          = 0;
	public depths         = {} as { [index: string]: number };
	public input: Token[] = [];

	public runParser(input: Token[]): string {
		this.preproc.attach(this);
		this.input  = input;
		this.depth  = 0;
		this.depths = {};
		let text    = [] as string[];
		while (!this.empty()) {
			text.push(this.textize(this.produceText([])));
		}
		return text.join("");
	}

	public parse(input: string): string {
		return this.runParser(Lexer.lexrun(input, this.options));
	}
}
