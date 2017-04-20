namespace Parser2 {
	export enum TokenType {
		TEXT,
		SEPARATOR, // | in [if (expr) TEXT1 | TEXT2 ]
		XMLOPEN, // <something>
		XMLCLOSE, // </something>
		XMLSINGLE, // <something/>
		NUMBER, // decimal/hex, int/float
		WORD, // identifier or something
		RESWORD, // if screen button
		OPERATOR, // js op
		SBOPEN, // [
		SBCLOSE, // ]
		CBOPEN, // {
		CBCLOSE, // }
		PAROPEN, // (
		PARCLOSE // )
	}
	export interface Token {
		type: TokenType;
		content: any;
		from: number;
		to: number;
	}
	export const DecimalRex    = /^[+-]?(\d+\.\d*|\.\d+|\d+)(e[+-]?\d+)?/i;
	export const HexRex        = /^[+-]?0x\d{1,8}/i;
	export const IdentifierRex = /^[a-z_$][a-z_$0-9]*/i;
	export const XmlOpRex      = /**/   /^<([a-z0-9_-]+) *([^[\]\n<>])*>/i;
	export const XmlSingleRex  = /**/   /^<([a-z0-9_-]+) *([^[\]\n<>])*\/>/i;
	export const XmlCloseRex   = /**/ /^<\/([a-z0-9_-]+) *([^[\]\n<>])*>/i;
	export const TextRex       = /^[^<\\[|\]]+/;
	export const Operators     = ['===', '!==', '==', '!=', '<=', '>=', '>', '<',
		'++', '--', '**', '&&', '||',
		'+', '-', '~', '*', '/', '%', '^', '&', '|', '=',
		'?', ':', ';', ',', '.'];
	export const XmlSingleTags = ["br", "hr", "input"];
	export const ReservedWords = ["if", "screen", "button"];
	export enum LexerStateType {
		TEXT,
		SUBTEXT,
		EXPRESSION,
		EOF
	}
	export interface LexerStateFlags {
		paropen: number;
	}
	export type LexerState = [LexerStateType, LexerStateFlags];
	export interface LexerData {
		input: string;
		pos: number;
		stack: LexerState[];
		top: LexerState;
	}
	export interface LexerResult {
		tokens: Token[];
		state: LexerData;
	}
	export interface LexerOptions {
		allowNewlineEscape?: boolean;
	}
	export function lexstep(lexerState: LexerData,
							{allowNewlineEscape = true}: LexerOptions): LexerResult {
		let {input, pos, stack} = lexerState;
		stack                   = stack.slice();
		let [top, flags]        = stack[stack.length - 1];
		let rslt: Token[]       = [];
		let x: RegExpMatchArray;
		let s                   = input.slice(pos);
		switch (top) {
			case LexerStateType.TEXT:
			case LexerStateType.SUBTEXT:
				let buffer = '', next: Token | null = null, pos0 = pos;
				while (next == null && s.length > 0) {
					let c0 = s[0], c1 = s[1], l = 0, y: string;
					if (( x = s.match(TextRex))) {
						l = (y = x[0]).length;
						buffer += y;
					} else {
						switch (c0) {
							case '|':
								l = 1;
								if (top == LexerStateType.SUBTEXT) {
									next = {type: TokenType.SEPARATOR, from: pos, to: pos + l, content: c0};
								} else {
									buffer += c0;
								}
								break;
							case ']':
								if (top == LexerStateType.SUBTEXT) {
									stack.pop();
									next = {type: TokenType.SBCLOSE, from: pos, to: pos + 1, content: c0};
								} else {
									l = 1;
									buffer += c0;
								}
								break;
							case '<':
								let ttype: TokenType;
								if ((x = s.match(XmlCloseRex))) {
									ttype = TokenType.XMLCLOSE;
								} else if ((x = s.match(XmlSingleRex))) {
									ttype = TokenType.XMLSINGLE;
								} else if (( x = s.match(XmlOpRex))) {
									ttype = TokenType.XMLOPEN;
								} else {
									buffer += c0;
									l = 1;
									break;
								}
								l    = x[0].length;
								next = {type: ttype, content: [x[1], x[2]], from: pos, to: pos + l};
								break;
							case '\\':
								switch (c1) {
									case '[':
									case ']':
									case '|':
										buffer += c1;
										l = 2;
										break;
									case '\n':
										l = 2;
										if (!allowNewlineEscape) {
											buffer += c0;
											buffer += c1;
										}
										break;
									default:
										buffer += c0;
										l = 1;
										break;
								}
								break;
							case '[':
								next = {type: TokenType.SBOPEN, content: '[', from: pos, to: pos + 1};
								stack.push([LexerStateType.EXPRESSION, {paropen: 0}]);
								l = 1;
								break;
							default:
								console.warn("Lexer pitfall, pos=", pos, " buffer.length=", buffer.length, " c0=", c0);
								buffer += c0;
								l = 1;
						}
					}
					pos += l;
					s = s.slice(l);
				}
				if (buffer.length > 0) {
					rslt.push({type: TokenType.TEXT, content: buffer, from: pos0, to: pos});
				}
				if (next != null) rslt.push(next);
				break;
			case LexerStateType.EXPRESSION:
				let c0 = s[0], c1 = s[1], l = 0, y = "";
				let s3 = s.substr(0, 3);
				if ((x = s.match(/^\s+/))) {
					l = x[0].length;
				} else if ((x = s.match(IdentifierRex))) {
					l = (y = x[0]).length;
					rslt.push({
						type   : ReservedWords.indexOf(y.toLowerCase()) >= 0 ? TokenType.RESWORD : TokenType.WORD,
						content: y, from: pos, to: pos + l
					});
				} else if ((x = s.match(DecimalRex)) || (x = s.match(HexRex))) {
					l = (y = x[0]).length;
					rslt.push({type: TokenType.NUMBER, content: +y, from: pos, to: pos + l});
				} else if ((y = Operators.filter(i => s3.indexOf(i) === 0)[0])) {
					l = y.length;
					rslt.push({
						type: TokenType.OPERATOR, content: y, from: pos, to: pos + l
					});
				} else {
					switch (c0) {
						case ']':
							stack.pop();
							rslt.push({type: TokenType.SBCLOSE, from: pos, to: pos + l, content: c0});
							l = 1;
							break;
						case '(':
							l = 1;
							rslt.push({type: TokenType.PAROPEN, content: '(', from: pos, to: pos + l});
							flags.paropen++;
							break;
						case ')':
							flags.paropen--;
							l = 1;
							rslt.push({type: TokenType.PARCLOSE, content: ')', from: pos, to: pos + 1});
							if (flags.paropen == 0) {
								stack.push([LexerStateType.SUBTEXT, {paropen: 0}]);
							}
							break;
					}
				}
				pos += l;
				break;
			case LexerStateType.EOF:
				break;
		}
		if (pos >= input.length) {
			stack.pop();
			stack.push([LexerStateType.EOF, {paropen: 0}]);
		}
		return {
			tokens: rslt,
			state : {input, pos, stack, top: stack[stack.length - 1]}
		};
	}

	export function lexrun(input: string, options: LexerOptions = {}): Token[] {
		let tokens: Token[]     = [];
		let stack: LexerState[] = [[LexerStateType.TEXT, {paropen: 0}]];
		let state: LexerData    = {
			input: input, pos: 0, stack: stack, top: stack[stack.length - 1]
		};
		let brk                 = 0;
		while (state.top[0] != LexerStateType.EOF) {
			let rslt = lexstep(state, options);
			tokens.push(...rslt.tokens);
			if (rslt.state.pos <= state.pos) {
				brk++;
				if (brk >= 3) {
					console.error("Lexer stuck in state", LexerStateType[state.top[0]], "at", state.pos);
					break;
				}
			} else {
				brk = 0;
			}
			if (state.top == rslt.state.top && state.pos == rslt.state.pos) {
				console.error("Lexer stuck in state", LexerStateType[state.top[0]], "at", state.pos);
				break;
			}
			state = rslt.state;
		}
		return tokens;
	}
}