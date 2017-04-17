///<reference path="Appearance.ts"/>
///<reference path="player.ts"/>

class Measurements {
	constructor(readonly game: CoC) {
	}

	footInchOrMetres(inches: number, precision: number = 2): string {
		if (this.game.flags[kFLAGS.USE_METRICS])
			return (Math.round(inches * 2.54) / Math.pow(10, precision)).toFixed(precision) + " metres";

		return Math.floor(inches / 12) + " foot " + inches % 12 + " inch";
	}

	numInchesOrCentimetres(inches: number): string {
		if (inches < 1) return this.inchesOrCentimetres(inches);

		let value: number = Math.round(inches);

		if (this.game.flags[kFLAGS.USE_METRICS]) {
			value = Math.round(inches * 2.54);
			return num2Text(value) + (value == 1 ? " centimetre" : " centimetres");
		}

		if (inches % 12 == 0)
			return (inches == 12 ? "a foot" : num2Text(inches / 12) + " feet");

		return num2Text(value) + (value == 1 ? " inch" : " inches");
	}

	inchesOrCentimetres(inches: number, precision: number = 1): string {
		const value: number = Math.round(this.inchToCm(inches) * Math.pow(10, precision)) / Math.pow(10, precision);
		const text: string  = value + (this.game.flags[kFLAGS.USE_METRICS] ? " centimetre" : " inch");

		if (value == 1) return text;

		return text + (this.game.flags[kFLAGS.USE_METRICS] ? "s" : "es");
	}

	shortSuffix(inches: number, precision: number = 1): string {
		const value: number = Math.round(this.inchToCm(inches) * Math.pow(10, precision)) / Math.pow(10, precision);
		return value + (this.game.flags[kFLAGS.USE_METRICS] ? "-cm" : "-inch");
	}

	inchToCm(inches: number): number {
		return this.game.flags[kFLAGS.USE_METRICS] ? inches * 2.54 : inches;
	}
}
class CoC {
	player: Player        = new Player();
	player2: Player       = new Player();
	readonly model: GameModel;
	readonly measurements = new Measurements(this);
	readonly flags: {
		[index: number]: (string | number);
	}                     = {};

	get kFLAGS_REF(): any {
		return kFLAGS
	};
	readonly prison: PrisonClass;
}
function attrGet(game: CoC, attr: string): any {
	try {
		return eval("game." + attr);
	} catch (e) {
		console.error("On evaluating " + attr);
		console.error(e);
		return "/!\\ JavaScript Error";
	}
}
function attrSet(game: CoC, attr: string, value: any) {
	try {
		eval("(function(game,value){game." + attr + "=value;})")(game, value);
	} catch (e) {
		console.error("On evaluating " + attr);
		console.error(e);
	}
}
let kGAMECLASS: CoC = new CoC();