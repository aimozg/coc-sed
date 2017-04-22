///<reference path="parser.ts"/>
import Token = Lexer.Token;
import AbstractProcessor = Parser.AbstractProcessor;
class SimpleProcessor extends AbstractProcessor {
	constructor(public root: any) {
		super()
	}

	text(text: string): string {
		return wrapgroup(this.parser.depth, text);
	}

	comment(text: string): string {
		return spanwrap('tok-comment', '[#' + text + '#]');
	}

	screen(name: string, body: string): string {
		return wrapeval(this.parser.depth, '[screen(' + name + ')' + body + ']');
	}

	button(name: string, body: string): string {
		return '<button type="button">' + name + '/' + body + '</button>';
	}

	phrase(terms: string[]): string {
		return null;
	}


	topLevelTerm(word: string): any {
		let o = this.root;
		if (o === null || o === undefined) return this.handleError("Cannot lookup with " + o + "root", word);
		return o[word];
	}

	lookup(parent: any, item: string): any {
		if (parent === null || parent === undefined) parent = this.root;
		if (parent === null || parent === undefined) return this.handleError("Missing element " + item, parent);
		return parent[item];
	}

	twoWordLookup(word1: string, word2: string): string {
		return this.lookup(this.lookup(null, word1), word2);
	}

	handleError(error: any, top: Token | any): string {
		console.warn(error, top);
		return errstr(error);
	}
}
class CoCProcessor extends SimpleProcessor {

	topLevelTerm(word: string): any {
		if (word in singleArgConverters) {
			return singleArgConverters[word]();
		}
		return super.topLevelTerm(word);
	}
}