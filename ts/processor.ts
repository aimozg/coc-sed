///<reference path="parser.ts"/>
function maybeCap(key: string, val: any): any {
	return (isUpperCase(key[0]) && typeof val == "string") ? capitalize(val) : val;
}
abstract class EvalContext {
	constructor(public readonly parent?: EvalContext) {}

	public abstract doTerm(word: string): any;

	public abstract doLookup(where: any, what: string): any;

	public abstract text(input: string | number | null | undefined | boolean): string;

	public abstract error(e: any): string;

	public term(word: string): any {
		let val = this.doTerm(word);
		console.debug('term', word, '->', typeof val, val);
		return maybeCap(word, val);
	}

	public lookup(where: any, what: string): any {
		let val = this.doLookup(where, what);
		console.debug('lookup', what, 'in', where, '->', typeof val, val);
		return maybeCap(what, val);
	}
}

function CoCtopLevelTerm(word: string): any {
	let game   = kGAMECLASS;
	let player = game.player;
	let w2     = word.toLowerCase();
	if (word in topLevelFns) return topLevelFns[word];
	if (w2 in topLevelFns) return topLevelFns[word];
	if (word in singleArgConverters) return singleArgConverters[word](kGAMECLASS);
	if (w2 in singleArgConverters) return singleArgConverters[w2](kGAMECLASS);
	if (word in game) return lookupAndBind(game, word);
	if (word in player) return lookupAndBind(player, word);
	if (isUpperCase(word) && word in window) {
		let v = window[word];
		if (typeof v === "number") return v;
	}
	throw("Unknown term " + word);
}

let topLevelFns: { [index: string]: (...args: any[]) => any } = {
	"if": function (condition): any {
		console.debug("if", this, "(", ...Array["from"](arguments), ")");
		condition = !!condition && condition != "false" && condition != "False";
		return (ifpart: () => string = () => "", elsepart: () => string = () => "") => {
			return condition ? ifpart.call(this) : elsepart.call(this);
		}
	}
};

///////////////////////////////////////////////////////
// The Big Eval
///////////////////////////////////////////////////////
function finalExpr(doit: boolean, thiz: any, e: any): any {
	while (doit && typeof e === "function") {
		console.debug("finalize", e, "->", (e = e.call(thiz)));
	}
	return e;
}
function evalOp(ctx: EvalContext, left: any, op: string, right: any): any {
	console.debug(left, op, right);
	switch (op) {
		case '.':
			return ctx.lookup(left, right);
		case ' ':
			return ctx.lookup(left, right);
		case '**':
			return (+left) ** +right;
		case '*':
			return +left * +right;
		case '/':
			return +left / +right;
		case '%':
			return +left % +right;
		case '-':
			return +left - +right;
		case '<<':
			return +left << +right;
		case '>>':
			return +left >> +right;
		case '>>>':
			return +left >>> +right;
		case '^':
			return +left ^ +right;
		case '+':
			return left + right;
		case '>':
			return left > right;
		case '<':
			return left < right;
		case '<=':
			return left <= right;
		case '>=':
			return +left >= right;
		case '===':
			return left === right;
		case '!==':
			return left !== right;
		case '==':
			return left == right;
		case '=':
			return left == right;
		case '<>':
			return +left != right;
		case '!=':
			return left != right;
		case '&&':
			return left && right;
		case '||':
			return left || right;
		default:
			throw "Unknown operator " + op;
	}
}
function evalExpr(ctx: EvalContext, expr: IExpression, final: boolean): any {
	console.log('evalExpr', expr.type, final);
	let rslt: any;
	switch (expr.type) {
		case "const":
			rslt = expr.value;
			break;
		case "term":
			rslt = ctx.term(expr.term.toString());
			break;
		case "bop": {
			let left   = evalExpr(ctx, expr.left, false);
			let xright = expr.right;
			if (expr.op == '.' || expr.op == ' ') {
				if (xright.type == 'const') {
					rslt = left[xright.value];
				} else if (xright.type == 'term') {
					rslt = left[xright.term];
				} else throw "Invalid index " + xright.type;
			} else {
				left      = finalExpr(true, ctx, left);
				let right = evalExpr(ctx, xright, true);
				rslt      = evalOp(ctx, left, expr.op, right);
			}
			break;
		}
		default:
			throw "TODO not supported " + expr.type;
	}
	return finalExpr(final, ctx, rslt);
}
function evalCall(ctx: EvalContext, src: ICallTag): string {
	let base = evalExpr(ctx, src.ctx, false);
	if (typeof base != "function") {
		throw "Not a function";
	}
	let rslt: any;
	rslt = base.apply(ctx, src.args.map(e => evalExpr(ctx, e, true)));
	if (typeof rslt == "function") {
		rslt = rslt.apply(ctx, src.trail.map(t => () => evalText(ctx, t)));
	}
	return ctx.text(rslt);
}
function evalPhrase(ctx: EvalContext, src: IPhraseTag): string {
	let base = evalExpr(ctx, src.ctx, false);
	if (!base) return "";
	let rslt = [] as string[];
	for (let obj of src.content) {
		let x;
		if (obj.type == "term") {
			x = ctx.lookup(base, obj.term);
		} else {
			x = evalExpr(ctx, obj, true);
		}
		rslt.push(ctx.text(finalExpr(true, base, x)));
	}
	return rslt.join(" ");
}
function evalText(ctx: EvalContext, src: ITextable): string {
	if (typeof src == 'string') return ctx.text(src);
	if (src === null || src === undefined) return ctx.text(src as (null | undefined));
	switch (src.type) {
		case "call":
			return evalCall(ctx, src);
		case "expr":
			return evalExpr(ctx, src.ctx, true);
		case "phrase":
			return evalPhrase(ctx, src);
		case "text":
			return src.content.map(i => {
				try {
					return evalText(ctx, i)
				} catch (e) {
					return ctx.error(e);
				}
			}).join("");
		case "xml":
			return ctx.text(xmlWrap(src.tag, src.attributes, evalText(ctx, src.body)));
		case "error":
			return src.errstr;
		default:
			throw "Not supported " + src["type"];
	}
}
/*
 class Processor {
 public depth: number  = 0;
 public debug: boolean = false;

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
 return this.error(error, arg1);
 }

 private node<R>(nodeType: string, body: () => R): R | IErrorNode {
 let rslt: R = undefined;
 try {
 this.depth++;
 if (this.debug) {
 console.debug(strlpad('', this.depth), '{', nodeType);
 }
 rslt = body();
 return rslt;
 } catch (e) {
 console.error(e);
 return {
 type: "error", error: e, errstr: this.makeErrstr(e)
 } as IErrorNode;
 } finally {
 if (this.debug) {
 console.debug(strlpad('', this.depth), '}', nodeType, rslt);
 }
 this.depth--;
 }
	}

	error(error: any, arg: any): string {
		let ermsg = '' + ((typeof error == "object" && 'message' in error) ? error['message'] : error);
		if (arg !== undefined && arg !== null) {
			ermsg += ' ' + (isToken(arg) ? tok2str(arg) : arg);
		}
		console.error(ermsg);
		return errstr(ermsg);
	}


 public evalTag(node: ITagNode): string {
 let t = this.node("tag", () => this.doEvalTag(node));
 if (typeof t === 'string') return t;
 return t.errstr;
 }

 private doEvalTag(node: ITagNode): string {
 let prefix: IExpression = (typeof node.prefix == "string") ? {
 type: "term",
 term: node.prefix
 } : node.prefix;
 if (node.call == null) {
 return this.textOrError(this.evalExpression(prefix, true), "eval tag");
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

 public evalExpression(context: EvalContext, expr: IExpression, stringify: boolean): any {
 return this.node("eval " + expr.type, () => this.doEvalExpression(context, expr, stringify));
 }

 private doEvalExpression(context: EvalContext, expr: IExpression, stringify: boolean): any {
 let rslt: any;
 switch (expr.type) {
 case 'error':
 return expr.errstr;
 case 'bop':
 let left   = this.evalExpression(context, expr.left, false);
 let xright = expr.right;
 switch (expr.op) {
 case ' ': {
 let right = (xright.type == 'term') ? xright.term : this.evalExpression(left, expr.right, true);
 if (left === null || left === undefined) throw argthrow(new Error("Encountered " + left), expr);
 if (typeof left == 'function') {
 rslt = left(right);
 } else {
 rslt = left[right];
 }
 if (typeof rslt == 'function') rslt = rslt.apply(left, []);
 } break;
 case '.': {

 } break;
 default:
 throw argthrow(new Error("TODO eval bop"), expr.op);
 }
 break;
 case 'const':
 return expr.value;
 case 'term':
 let lookup = context.term(expr.term);
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
 }


 *////////////////////////////////////////////////////////
// The API
///////////////////////////////////////////////////////
function lookupAndBind(obj: any, key: string): any {
	if (key in obj) {
		let v = obj[key];
		if (typeof v == 'function') return _.extend(function (...rest: any[]) {
			//console.log(obj, key, ...rest);
			return v.apply(obj, rest);
		}, v);
		return v;
	}
	return undefined;
}
function wrapComment(text: string): string {
	return spanwrap('tok-comment', '[#' + text + '#]');
}
abstract class SimpleContext extends EvalContext {
	public depth: number = 0;

	constructor(public basis: Object,
				parent?: EvalContext) {
		super(parent);
		if (parent instanceof SimpleContext) this.depth = parent.depth + 1;
	}

	public text(input: string | number | boolean | null | undefined): string {
		return '' + input;
	}

	public doLookup(where: any, what: string): any {
		let w2 = what.toLowerCase();
		if ((typeof where === "object" || typeof where === "function") && where !== null) {
			if (what in where) return where[what];
			if (w2 in where) return where[w2];
		}
		if (what in this.basis) return this.basis[what];
		if (w2 in this.basis) return this.basis[w2];
		if (this.parent) return this.parent.doLookup(where, what);
		return undefined;
	}

	public doTerm(word: string): any {
		return this.doLookup(null, word);
	}
}
class GameContext extends SimpleContext {

	constructor(basis: Object, root: GameContext | undefined) {
		super(basis, root);
	}

	public doTerm(word: string): any {
		let k = super.doTerm(word);
		if (k !== undefined) return k;
		return CoCtopLevelTerm(word);
	}

	public error(e: any): string {
		console.error(e);
		return errstr(e);
	}

	public text(input: string | number | boolean | any | any): string {
		if (input === null || input === undefined) {
			return errstr(input);
		} else {
			return wrapgroup(this.depth, input);
		}
	}
}