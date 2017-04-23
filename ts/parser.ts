///<reference path="lexer.ts"/>
const XmlSingleTags = ["br", "hr", "input"];
function xmlWrap(tag: string, attributes: string, body: string): string {
	attributes = attributes ? ' ' + attributes : '';
	if (XmlSingleTags.indexOf(tag) >= 0) return '<' + tag + attributes + '/>';
	return '<' + tag + attributes + '>' + body + '</' + tag + '>';
}
interface ParserOptions {
	debugParser?: boolean;
}
/*
 *tag* ::= `[` *context* [ *call* | *phrase*] `]`
 *context* ::= *expression*
 *call* ::= `(` *arguments* `)` *trail*
 *phrase* ::= `:` { *expression* }
 *arguments* ::= *expression* { `,` *expression* }
 *trail* ::= **subtext** { `|` **subtext** }
 */
interface ICallTag {
	type: "call";
	ctx: IExpression;
	args: IExpression[];
	trail: ITextable[];
}
interface IExprTag {
	type: "expr";
	ctx: IExpression;
}
interface IPhraseTag {
	type: "phrase";
	ctx: IExpression;
	content: IExpression[];
}
type ITagNode = ICallTag | IExprTag | IPhraseTag;
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
type TokenTypeDef = TokenType | string;
function parse(input: Token[], {
	debugParser = true
}: ParserOptions): ITextable {
	let depth = 0;
	input     = input.slice();
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Utilities
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	function node<R>(nodeType: string, body: () => R): R | IErrorNode {
		let rslt: R = undefined;
		try {
			depth++;
			if (debugParser) console.debug(strlpad('', depth), '{', nodeType);
			rslt = body();
			return rslt;
		} catch (e) {
			console.error(e);
			return {
				type: "error", error: e, errstr: errstr(e)
			} as IErrorNode;
		} finally {
			if (debugParser) console.debug(strlpad('', depth), '}', nodeType, rslt);
			depth--;
		}
	}

	function expect(...types: TokenTypeDef[]): Token | null {
		if (peek(...types)) return input.shift();
		return null;
	}

	function empty(): boolean {
		while (input.length > 0 && input[0].type == TokenType.COMMENT) input.shift();
		return input.length == 0;
	}

	function peek(...types: TokenTypeDef[]): boolean {
		if (empty()) return false;
		let tok = input[0];
		for (let t of types) {
			if (typeof t == 'string') {
				if (t === tok.content) return true;
			} else {
				if (t === tok.type) return true;
			}
		}
		return false;
	}

	function produceExpression(closingTokens: TokenTypeDef[], consume: boolean, allowSpace: boolean): IExpression {

		return node("expr", () => {
			if (expect('(')) {
				return produceExpression([')'], true, allowSpace);
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
				throw argthrow(new Error("Abnormal expression termination"), input.shift());
			} else {
				throw argthrow(new Error("TODO expr"), input.shift());
			}
			let limit = 9999;
			while (limit-- > 0) {
				if (peek(...closingTokens)) {
					if (consume) input.shift();
					break;
				} else if (expect('.')) {
					let y = peek(TokenType.WORD);
					if (!y) y = peek(TokenType.NUMBER);
					if (!y) throw argthrow(new Error("Word or number expected after dot"), input.shift());
					x = {
						type : "bop",
						left : x,
						right: produceExpression(closingTokens, false, allowSpace),
						prio : Priorities['.'],
						op   : '.'
					};
				} else if (peek(TokenType.WORD)) {
					if (!allowSpace) break;
					if (x.type == "term") {
						x = {
							type : "bop",
							left : x,
							right: produceExpression(closingTokens, false, allowSpace),
							prio : Priorities[' '],
							op   : ' '
						};
					} else throw argthrow(new Error("Illegal expression token after " + x.type), input.shift());
				} else if ((t = expect(TokenType.OPERATOR))) {
					if (x.type == "term") {
						x = {
							type : "bop",
							left : x,
							right: produceExpression(closingTokens, false, false),
							prio : Priorities[t.content],
							op   : t.content
						}
					} else throw argthrow(new Error("Illegal expression token after " + x.type), input.shift());
				} else {
					throw argthrow(new Error("Illegal expression token after " + x.type), input.shift());
				}
			}
			return x;
		});
	}

	function produceArguments(): IExpression[] {
		let rslt: IExpression[] = [];
		if (expect(')')) return rslt;
		let limit = 9999;
		while (limit-- > 0) {
			rslt.push(produceExpression([',', ')'], false, true));
			if (expect(')')) return rslt;
			if (!expect(',')) throw argthrow(new Error("Expected ',' or ')'"), input.shift());
		}
	}

	function produceTrail(): ITextable[] {
		let rslt: ITextable[] = [];
		let limit             = 9999;
		while (limit-- > 0) {
			rslt.push(produceText([']', '|']));
			if (expect(']')) break;
			if (!expect('|')) throw argthrow(new Error("Expected Textable, '[', or '|'"), input.shift());
		}
		return rslt;
	}

	function produceTag(): ITagNode | IErrorNode | string {
		return node("tag", () => {
			let ctx = produceExpression([']', '(', ':'], false, true);
			if (expect(']')) {
				return {type: "expr", ctx: ctx} as IExprTag;
			}
			if (expect('(')) {
				let args  = produceArguments();
				let trail = produceTrail();
				return {type: "call", ctx, args, trail} as ICallTag;
			} else if (expect(':')) {
				let content = [] as IExpression[];
				while (!empty()) {
					if (expect(']')) break;
					content.push(produceExpression([']'], false, false));
				}
				return {type: "phrase", ctx, content} as IPhraseTag;
			} else throw argthrow(new Error("Expected ']', '(', or ':'"), input.shift());
		});
	}

	function produceTextable(): ITextable {
		let t: Token;
		if ((t = expect(TokenType.TEXT))) {
			return t.content;
		} else if ((t = expect(TokenType.XMLOPEN, TokenType.XMLSINGLE))) {
			let {tag, attributes} = t as XmlToken;
			if (t.type == TokenType.XMLSINGLE || XmlSingleTags.indexOf(tag) >= 0) {
				return xmlWrap(tag, attributes, "");
			} else {
				return node("xml", () => {
					let body = produceText([TokenType.XMLCLOSE]);
					let t    = expect(TokenType.XMLCLOSE) as XmlToken;
					if (!t) throw argthrow(new Error("Expected XMLCLOSE"), input.shift());
					let tag2 = t.tag;
					if (tag2 != tag) throw argthrow(new Error("Expected XMLCLOSE tag " + tag + ", got " + tag2), t);
					return {type: "xml", tag, attributes, body} as IXmlNode
				});
			}
		} else if ((t = expect(TokenType.XMLCLOSE))) {
			throw argthrow(new Error("Unmatched XMLOPEN"), t);
		} else if (expect('[')) {
			return produceTag();
		} else {
			throw argthrow(new Error("Not a text-level token"), input.shift());
		}
	}

	function produceText(closingTokens: TokenTypeDef[]): ITextable {
		let result: ITextable[] = [];
		while (!empty()) {
			if (peek(...closingTokens)) break;
			let item: ITextable = node("text", () => produceTextable());
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

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Root
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	let text = [] as ITextable[];
	while (!empty()) {
		text.push(produceText([]));
	}
	if (text.length == 0) return "";
	if (text.length == 1) return text[0];
	return {type: "text", content: text};
}
