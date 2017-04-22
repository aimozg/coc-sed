///<reference path="lexer.ts"/>
namespace Parser {
	import Token = Lexer.Token;
	import XmlSingleTags = Lexer.XmlSingleTags;
	import TokenType = Lexer.TokenType;
	import XmlToken = Lexer.XmlToken;
	import lexrun = Lexer.lexrun;
	import LexerOptions = Lexer.LexerOptions;
	export interface ParserOptions extends LexerOptions {
		debugParser?: boolean;
	}
	export abstract class Processor {
		abstract attach(parser: Parser);

		abstract text(text: string): string;

		abstract comment(text: string): string;

		abstract xml(tag: string, attributes: string, body: string): string;

		abstract screen(name: string, body: string): string;

		abstract button(name: string, body: string): string;

		abstract phrase(terms: string[]): string;

		abstract term(words: string[]): string;

		abstract toBoolean(data: string): boolean;

		abstract wrapResult(text: string): string;

		abstract handleError(error: any, arg: any): string;
	}
	export abstract class AbstractProcessor extends Processor {
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

		abstract topLevelTerm(word: string): any;

		term(words: string[]): string {
			if (words.length == 0) return this.handleError("Empty word list", words);
			let o: any = this.topLevelTerm(words[0]);
			for (let i = 1; i < words.length; i++) {
				if (o === null || o === undefined) return this.handleError("Hit " + o + " at pos " + i, words);
				o = o[words[i]];
			}
			return '' + o;
		}

		xml(tag: string, attributes: string, body: string): string {
			attributes = attributes ? ' ' + attributes : '';
			if (XmlSingleTags.indexOf(tag) >= 0) return '<' + tag + attributes + '/>';
			return '<' + tag + attributes + '>' + body + '</' + tag + '>';
		}

		toBoolean(data: string): boolean {
			return data !== "false" && data !== "true" && +data !== 0 && data !== "";
		}

		wrapResult(text: string): string {
			return text;
		}

	}

	enum IExprNodeType {
		LITERAL,
		TERM,
		LIST,
		OPERATOR,
		ERROR
	}
	interface LiteralNode {
		type: IExprNodeType.LITERAL;
		value: Token;
	}
	interface TermNode {
		type: IExprNodeType.TERM;
		value: Token;
	}
	interface ExprNodeList {
		type: IExprNodeType.LIST;
		operands: IExpressionNode[];
	}
	interface OperatorNode {
		type: IExprNodeType.OPERATOR;
		value: Token;
	}
	interface ErrorNode {
		type: IExprNodeType.ERROR;
		value: any;
	}
	type IExpressionNode = LiteralNode | TermNode | ExprNodeList | OperatorNode | ErrorNode;
	export class Parser {
		expect(...types: TokenType[]): Token | null {
			if (this.peek(...types)) return this.input.shift();
			return null;
		}

		debug(s: string, ...rest: any[]) {
			if (this.options.debugParser) {
				console.debug()
			}
		}

		peek(...types: TokenType[]): boolean {
			return (this.input.length > 0 && types.indexOf(this.input[0].type) >= 0);
		}

		evaluate(expr: IExpressionNode): string {
			switch (expr.type) {
				case IExprNodeType.LIST:
					return "[" + expr.operands.map(s => this.evaluate(s)).join("") + "]";
				case IExprNodeType.TERM:
					return this.processor.term([expr.value.content]);
				case IExprNodeType.LITERAL:
					return "" + expr.value.content;
				case IExprNodeType.OPERATOR:
					return "" + expr.value.content;
				case IExprNodeType.ERROR:
					return "" + expr.value;
			}

		}

		produceExpression(closingTokens: TokenType[], consume: boolean): IExpressionNode {
			let {processor, input} = this;
			let expr: ExprNodeList = {type: IExprNodeType.LIST, operands: []};
			let t: Token;
			while (input.length > 0) {
				if (closingTokens.indexOf(input[0].type) >= 0) {
					if (consume) input.shift();
					break;
				} else if ((t = this.expect(TokenType.NUMBER, TokenType.STRING))) {
					expr.operands.push({value: t, type: IExprNodeType.LITERAL});
				} else if ((t = this.expect(TokenType.WORD))) {
					expr.operands.push({value: t, type: IExprNodeType.TERM});
				} else if ((t = this.expect(TokenType.DOT, TokenType.OPERATOR))) {
					expr.operands.push({value: t, type: IExprNodeType.OPERATOR});
				} else if ((t = this.expect(TokenType.PAROPEN))) {
					expr.operands.push(this.produceExpression([TokenType.PARCLOSE], true));
				} else {
					expr.operands.push({
						value: processor.handleError("Expected expression token", input.shift()),
						type : IExprNodeType.ERROR
					});
					break;
				}
			}
			return expr;
		}

		produceIf(): string {
			let {processor, input} = this;
			if (!this.expect(TokenType.PAROPEN)) return processor.handleError("Expected PAROPEN", input.shift());
			let expr    = this.produceExpression([TokenType.PARCLOSE], true);
			let iftrue  = this.produceText([TokenType.SEPARATOR, TokenType.SBCLOSE]);
			let iffalse = "";
			if (this.expect(TokenType.SBCLOSE)) {
				iffalse = "";
			} else if (this.expect(TokenType.SEPARATOR)) {
				iffalse = this.produceText([TokenType.SBCLOSE]);
				if (!this.expect(TokenType.SBCLOSE)) return processor.handleError("Expected SEPARATOR or SBCLOSE", input.shift());
			}
			return processor.text(processor.toBoolean(this.evaluate(expr)) ? iftrue : iffalse);
		}

		produceWordChain(): string[] {
			let {processor, input} = this;
			let words              = [] as string[];
			do {
				let t = this.expect(TokenType.WORD, TokenType.NUMBER);
				if (!t) return [processor.handleError("Expected WORD or NUMBER", input.shift())];
				words.push(t.content);
			} while (this.expect(TokenType.DOT));
			return words;
		}

		produceTerm(): string {
			return this.processor.term(this.produceWordChain());
		}

		produceTag(): string {
			let {processor, input} = this;
			let words              = this.produceWordChain();
			let word               = words[0];
			switch (word) {
				case "if":
					return this.produceIf();
				case "screen":
				case "button": {
					let t = this.expect(TokenType.PAROPEN);
					if (!t) return processor.handleError("Expected PAROPEN", input.shift());
					t = this.expect(TokenType.WORD);
					if (t == undefined) return processor.handleError("Expected WORD", input.shift());
					let name = t.content;
					t        = this.expect(TokenType.PARCLOSE);
					if (!t) return processor.handleError("Expected PARCLOSE", input.shift());
					let text = this.produceText([TokenType.SBCLOSE]);
					if (word == "screen") {
						return processor.screen(name, text);
					} else if (word == "button") {
						return processor.button(name, text);
					}
				}
			}
			let terms = [this.processor.term(words)];
			while (!this.expect(TokenType.SBCLOSE)) {
				terms.push(this.produceTerm());
			}
			return this.processor.phrase(terms);
		}

		produceText(closingTokens: TokenType[]): string {
			let result             = "";
			let {processor, input} = this;
			while (input.length > 0) {
				let type = input[0].type;
				if (closingTokens.indexOf(type) >= 0) {
					break;
				} else if (type == TokenType.COMMENT) {
					let t = input.shift();
					result += processor.comment(t.content);
				} else if (type == TokenType.TEXT) {
					let t = input.shift();
					result += processor.text(t.content);
				} else if (type == TokenType.XMLOPEN || type == TokenType.XMLSINGLE) {
					let t                          = input.shift() as XmlToken;
					let {content, tag, attributes} = t;
					let body: string;
					if (t.type == TokenType.XMLSINGLE || XmlSingleTags.indexOf(tag.toLowerCase()) >= 0) {
						body = "";
					} else {
						body  = this.produceText([TokenType.XMLCLOSE]);
						let t = this.expect(TokenType.XMLCLOSE) as XmlToken;
						if (!t) {
							result += body;
							result += processor.handleError("Expected XMLCLOSE", input.shift());
							continue;
						} else {
							let tag2 = t.tag.toLowerCase();
							if (tag2 != tag) {
								result += body;
								result += processor.handleError("Expected XMLCLOSE tag " + tag + ", got " + tag2, t);
								continue;
							}
						}
					}
					result += processor.xml(tag, attributes, body);
				} else if (type == TokenType.XMLCLOSE) {
					result += processor.handleError("Unmatched XMLOPEN", input.shift());
				} else if (type == TokenType.SBOPEN) {
					input.shift();
					result += this.produceTag()
				} else {
					result += processor.handleError("Not a text-level token: " + TokenType[type], input.shift());
					return result;
				}
			}
			return result;
		}

		public constructor(public processor: Processor,
		                   {
			                   debugLexer = false,
			                   debugParser = false,
			                   allowNewlineEscape = true,
			                   convertNewlines = true
		                   }: ParserOptions) {
			this.options = {
				convertNewlines,
				allowNewlineEscape,
				debugLexer,
				debugParser
			}
		}

		public options: ParserOptions;
		public depth          = 0;
		public input: Token[] = [];

		public runParser(input: Token[]): string {
			this.processor.attach(this);
			this.input = input;
			return this.processor.wrapResult(this.produceText([]));
		}

		public parse(input: string): string {
			return this.runParser(lexrun(input, this.options));
		}
	}
}