namespace Lexer {
	export enum TokenType {
		TEXT,
		SEPARATOR, // | in [if (expr) TEXT1 | TEXT2 ]
		XMLOPEN, // <something>
		XMLCLOSE, // </something>
		XMLSINGLE, // <something/>
		NUMBER, // decimal/hex, int/float
		WORD, // identifier or other word
		DOT, // .
		STRING, // '...' "..."
		OPERATOR, // js op
		SBOPEN, // [
		SBCLOSE, // ]
		//CBOPEN, // {
		//CBCLOSE, // }
		PAROPEN, // (
		PARCLOSE, // )
		COMMENT // [# ... #]
	}
	export interface Token {
		type: TokenType;
		content: string;
		from: number;
		to: number;
	}
	export function tok2str(t: Token): string {
		let c = t.content;
		let s: string;
		if (typeof c == "string") {
			s = (c.length > 10) ? c.substr(0, 9) + "…" : strrpad(c, 10);
		} else if (Array.isArray(c)) {
			s = c[0] + (c[1] ? ' ' + c[1] : c[1]);
		} else s = "" + c;
		return strrpad(TokenType[t.type], 8) + s + "@" + t.from + ":" + t.to;
	}

	export interface NumericToken extends Token {
		type: TokenType.NUMBER;
		value: number;
	}
	export interface XmlToken extends Token {
		type: TokenType.XMLOPEN | TokenType.XMLCLOSE | TokenType.XMLSINGLE;
		tag: string;
		attributes: string;
	}
	export const DecimalRex    = /^[+-]?(\d+\.\d*|\.\d+|\d+)(e[+-]?\d+)?/i;
	export const HexRex        = /^[+-]?0x\d{1,8}/i;
	export const IdentifierRex = /^[a-z_$][a-z_$0-9]*/i;
	export const XmlOpRex      = /**/   /^<([a-z0-9_-]+) *([^[\]\n<>])*>/i;
	export const XmlSingleRex  = /**/   /^<([a-z0-9_-]+) *([^[\]\n<>])*\/>/i;
	export const XmlCloseRex   = /**/ /^<\/([a-z0-9_-]+) *([^[\]\n<>])*>/i;
	export const TextRex       = /^[^<\\[|\]\n]+/;
	export const Operators     = ['===', '!==', '==', '!=', '<=', '>=', '>', '<',
		'++', '--', '**', '&&', '||',
		'+', '-', '~', '*', '/', '%', '^', '&', '|', '=',
		'?', ':', ';', ','];
	export const XmlSingleTags = ["br", "hr", "input"];
	export const ReservedWords = ["if", "screen", "button"];
	export enum LexerStateType {
		TEXT,
		SUBTEXT,
		EXPR,
		EOF
	}
	export interface LexerStateFlags {
		"(": number;
	}
	export function LexerStateFlags(): LexerStateFlags {
		return {"(": 0};
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
		convertNewlines?: boolean;
		debugLexer?: boolean;
		debugParser?: boolean;
	}
	export function lexstep(lexerState: LexerData,
	                        {
		                        allowNewlineEscape = true,
		                        convertNewlines = true,
		                        debugLexer = false,
	                        }: LexerOptions): LexerResult {
		let {input, pos, stack} = lexerState;
		let stack0              = stack;
		let pos0                = pos;
		stack                   = stack.slice();
		let [top, flags]        = stack[stack.length - 1];
		let rslt: Token[]       = [];
		let x: RegExpMatchArray;
		let s                   = input.slice(pos);
		switch (top) {
			case LexerStateType.TEXT:
			case LexerStateType.SUBTEXT:
				let buffer = '', next: Token | null = null;
				while (next == null && s.length > 0) {
					let c0 = s[0], c1 = s[1], l = 0, y: string;
					if (( x = s.match(TextRex))) {
						l = (y = x[0]).length;
						buffer += y;
					} else {
						switch (c0) {
							case '\r':
							case '\n':
								if (convertNewlines) {
									l    = (c0 == '\r' && c1 == '\n') ? 2 : 1;
									next = {type  : TokenType.XMLSINGLE,
										content   : "<br/>",
										tag       : "br",
										attributes: "",
										from      : pos,
										to        : pos + l
									} as XmlToken;
								} else {
									l = 1;
									buffer += c0;
								}
								break;
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
									l = 1;
									stack.pop();
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
								next = {type  : ttype,
									content   : x[0],
									tag       : x[1],
									attributes: x[2] || "",
									from      : pos,
									to        : pos + l
								} as XmlToken;
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
								if (c1 == '#') { // is a comment
									l = s.indexOf('#]');
									if (l >= 0) {
										next = {
											type   : TokenType.COMMENT,
											content: s.slice(2, l),
											from   : pos,
											to     : pos + l + 2
										};
										l += 2;
									} else {
										console.warn("Comment not closed, state=", LexerStateType[top], " pos=", pos, " buffer.length=", buffer.length, " c0=", c0);
										buffer += c0;
										l = 1;
									}
								} else {
									next = {type: TokenType.SBOPEN, content: '[', from: pos, to: pos + 1};
									stack.push([LexerStateType.EXPR, LexerStateFlags()]);
									l = 1;
								}
								break;
							default:
								console.warn("Lexer pitfall, state=", LexerStateType[top], " pos=", pos, " buffer.length=", buffer.length, " c0=", c0);
								buffer += c0;
								l = 1;
						}
					}
					pos += l;
					s = s.slice(l);
				}
				if (buffer.length > 0) {
					let topos = pos;
					if (next != null) topos = next.from;
					rslt.push({type: TokenType.TEXT, content: buffer, from: pos0, to: topos});
				}
				if (next != null) rslt.push(next);
				break;
			case LexerStateType.EXPR:
				let c0 = s[0], c1 = s[1], l = 0, y = "";
				let s3 = s.substr(0, 3);
				if ((x = s.match(/^\s+/))) {
					l = x[0].length;
				} else if ((x = s.match(IdentifierRex))) {
					l = (y = x[0]).length;
					rslt.push({
						type   : TokenType.WORD,
						content: y, from: pos, to: pos + l
					});
				} else if ((x = s.match(DecimalRex)) || (x = s.match(HexRex))) {
					l = (y = x[0]).length;
					rslt.push({type: TokenType.NUMBER, content: y, value: +y, from: pos, to: pos + l} as NumericToken);
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
							flags['(']++;
							break;
						case ')':
							flags['(']--;
							l = 1;
							rslt.push({type: TokenType.PARCLOSE, content: ')', from: pos, to: pos + 1});
							if (flags['('] == 0) {
								stack.push([LexerStateType.SUBTEXT, LexerStateFlags()]);
							}
							break;
						case '.':
							l = 1;
							rslt.push({type: TokenType.DOT, content: '.', from: pos, to: pos + l});
							break;
						case '"':
						case "'":
							l = 1;
							if (c1 != c0) {
								let i = s.indexOf(c0, l);
								if (i == -1) {
									l = s.length - 2;
									break;
								}
								while (i > 0 && s[i - 1] == '\\') {
									l = i + 1;
									i = s.indexOf(c0, l);
								}
								l = i;
							}
							let buffer = s.substr(1, l - 1).replace(/\\(.)/g, '$1');
							l++;
							rslt.push({type: TokenType.STRING, content: buffer, from: pos, to: pos + l});
							break;
						default:
							console.warn("Lexer pitfall, state=", LexerStateType[top], "pos=", pos, " c0=", c0);
							l = 1;
					}
				}
				pos += l;
				break;
			case LexerStateType.EOF:
				break;
		}
		if (pos >= input.length) {
			stack.pop();
			stack.push([LexerStateType.EOF, LexerStateFlags()]);
		}
		if (debugLexer) {
			console.debug("Lexer @", strrpad(pos0, 5),
				"[", ...stack0.map(i => LexerStateType[i[0]]),
				"] => ", ...(rslt.map(tok2str)));
		}
		return {
			tokens: rslt,
			state : {input, pos, stack, top: stack[stack.length - 1]}
		};
	}

	export function lexrun(input: string, options: LexerOptions = {}): Token[] {
		let tokens: Token[]     = [];
		let stack: LexerState[] = [[LexerStateType.TEXT, LexerStateFlags()]];
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