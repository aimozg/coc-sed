///<reference path="Appearance.ts"/>
///<reference path="player.ts"/>
///<reference path="kFLAGS.ts"/>

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
class TimeModel {
	minutes: number = 0;
	hours: number   = 0;
	days: number    = 0;
}
class GameModel {
	readonly time: TimeModel = new TimeModel();
}
class PrisonCaptor {
	captorTitle: string    = "captorTitle";
	captorName: string     = "captorName";
	captorPronoun1: string = "captorPronoun1";
	captorPronoun2: string = "captorPronoun2";
	captorPronoun3: string = "captorPronoun3";
}
class PrisonClass {
	readonly prisonCaptor: PrisonCaptor = new PrisonCaptor();
}

class CoC {
	player: Player        = new Player();
	monster               = this.player;
	player2: Player       = this.player;
	readonly model        = new GameModel();
	readonly measurements = new Measurements(this);
	readonly flags: {
		[index: number]: (string | number);
	}                     = {};

	constructor() {
		this.flags[kFLAGS.AKBAL_TIMES_BITCHED] = 69;
	}

	//noinspection JSUnusedGlobalSymbols
	get kFLAGS_REF(): any {
		return kFLAGS
	};

	readonly prison = new PrisonClass();
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