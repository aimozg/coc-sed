import Dictionary = _.Dictionary;
namespace Rng {
	let MAXINT = 0x7fffffff;
	let MININT = 0xffffffff;

	export function xorshift32(x: number): number {
		x = x | 0;
		x = ((x << 13) ^ x) | 0;
		x = ((x >>> 17) ^ x) | 0;
		x = ((x << 5) ^ x) | 0;
		return x | 0;
	}

	export function gen_state(): number {
		return (Math.random() * MININT) | 0;
	}

	export let state = gen_state();

	export function rnd_int(): number {
		return (state = xorshift32(state));
	}

	export function rnd_uint(): number {
		return (state = xorshift32(state)) & MAXINT;
	}

	export function random(): number {
		return rnd_uint() / MAXINT;
	}

	export function rand(i: number): number {
		return rnd_uint() % (i | 0);
	}
}
function rand(i: number): number {
	return Rng.rand(i);
}
function randomChoice<T>(args: T[]): T;
function randomChoice<T>(...args: T[]): T;
function randomChoice() {
	if (arguments.length == 1 && Array.isArray(arguments[0])) return arguments[0][rand(arguments[0].length)];
	return arguments[rand(arguments.length)];
}
function capitalize(s: string): string {
	return s.slice(0, 1).toUpperCase() + s.slice(1);
}
const NUMBER_WORDS_NORMAL     = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const NUMBER_WORDS_CAPITAL    = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
const NUMBER_WORDS_POSITIONAL = ["zeroth", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];
function num2Text(n: number): String {
	if (n >= 0 && n <= 10) return NUMBER_WORDS_NORMAL[n];
	return n.toString();
}
function todo(what: string) {
	console.warn("TODO properly implement " + what);
}
function strmul(s: string, to: number): string {
	let r = '';
	while (to > 0) {
		if (to % 2) r += s;
		to >>>= 1;
		s = s + s;
	}
	return r;
}
function strlpad(x: any, to: number, pad: string = ' '): string {
	let s = '' + x;
	return strmul(pad, to - s.length) + s;
}
function strrpad(x: any, to: number, pad: string = ' '): string {
	let s = '' + x;
	return s + strmul(pad, to - s.length);
}
function tostr(s: any): string {
	if (s === null || s === undefined) {
		return errstr(s);
	} else {
		return "" + s;
	}
}

function errstr(s: any): string {
	return "<span class='bg-danger text-white'>" + s + "</span>";
}

function spanwrap(clazz: string, s: string): string {
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

function wrapeval(depth: number, s: any): string {
	return spanwrap("tok-eval tok-eval-depth-" + Math.min(10, depth | 0), '' + s);
}

function wrapgroup(depth: number, s: any): string {
	return spanwrap("tok-group tok-group-depth-" + Math.min(10, depth | 0), '' + s);
}
function isUpperCase(char: string): boolean {
	return char != char.toLowerCase();
}
