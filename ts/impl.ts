///<reference path="Appearance.ts"/>
function todo(what: string) {
	console.warn("TODO properly implement " + what);
}
class CockClass {
	cockType: CockTypesEnum = CockTypesEnum.HUMAN;
	isPierced: boolean      = false;
	sock: string            = "";
	cockLength: number      = 5;
	cockThickness: number   = 1.5;
}
class AssClass {
	analWetness: number   = 0;
	analLooseness: number = 0;
}
class Creature {
	short: string = "creature";

	str: number  = 15;
	tou: number  = 15;
	spe: number  = 15;
	inte: number = 15;
	lib: number  = 15;
	sens: number = 15;
	cor: number  = 15;

	fatigue: number = 20;
	lust: number    = 20;
	HP: number      = 99;
	hunger: number  = 80;

	esteem: number;
	obey: number;
	will: number;

	armorName: string        = "comfortable clothes";
	weaponName: string       = "fists";
	shieldName: string       = "nothing";
	upperGarmentName: string = "nothing";
	lowerGarmentName: string = "comfortable loincloth";

	tallness: number   = 70;
	hairLength: number;
	hairColor: string  = "blonde";
	femininity: number = 50;

	get gender(): number {
		return (this.hasCock() ? 1 : 0) + (this.hasVagina() ? 2 : 0);
	}

	skinType: SkinTypeEnum = SkinTypeEnum.PLAIN;

	balls: number      = 0;
	pregnancyIncubation: number;
	buttPregnancyIncubation: number;
	cocks: CockClass[] = [];
	ass: AssClass      = new AssClass();

	mf<T>(m: T, f: T): T {
		todo("mf");
		return this.hasVagina() ? f : m;
	}

	maleFemaleHerm(): string {
		todo("maleFemaleHerm");
		let options = {
			0: ["genderless", "fem-genderless"],
			1: ["male", "dickgirl"],
			2: ["cuntboy", "female"],
			3: ["maleherm", "hermaphrodite"]
		}[this.gender];
		return capitalize(this.mf(options[0], options[1]));
	}

	race(): string {
		todo("race");
	}

	claws(): string {
		todo("claws");
	}

	face(): string {
		todo("face");
	}

	feet(): string {
		todo("feet");
	}

	foot(): string {
		todo("foot");
	}

	leg(): string {
		todo("leg");
	}

	legs(): string {
		todo("legs");
	}

	skin(adj?: boolean): string {
		todo("skin");
	}

	hairOrFur(): string {
		todo("hairOrFur");
		return this.hasFur() ? "fur" : "hair";
	}

	skinFurScales(): string {
		todo("skinFurScales");
	}

	bodyType(): string {
		todo("bodyType");
	}

	chestDesc(): string {
		todo("chestDesc");
	}

	allChestDesc(): string {
		todo("allChestDesc");
	}

	hairDescript(): string {
		todo("hairDescript");
		return "moderately long, " + this.hairColor + " hair";
	}

	hipDescript(): string {
		todo("hipDescript");
		return "curvy hips";
	}

	hornDescript(): string {
		todo("hornDescript");
	}

	nippleDescript(row?: number): string {
		todo("nippleDescript");
	}

	tongueDescript(): string {
		todo("tongueDescript");
	}

	wingsDescript(): string {
		todo("wingsDescript");
		return "large feathered wings";
	}

	tailDescript(): string {
		todo("tailDescript");
		return "trio of kitsune tails";
	}

	oneTailDescript(): string {
		todo("oneTailDescript");
		return "one of kitsune tails";
	}

	cockDescript(index: number = 0): string {
		return Appearance.cockDescript(this, index);
	}

	breastDescript(row: number = 0): string {
		todo("breastDescript");
		return "large breasts";
	}

	allBreastsDescript(): string {
		todo("allBreastsDescript");
		return "two rows of large breasts";
	}

	vaginaDescript(index: number = 0): string {
		todo("vaginaDescript");
		return "virgin, moist vagina";
	}

	sackDescript(): string {
		todo("sackDescript");
		return "scrotum";
	}

	sheathDescript(): string {
		todo("sheathDescript");
	}

	buttDescript(): string {
		todo("buttDescript");
		return "firm ass";
	}

	assholeDescript(): string {
		return Appearance.assholeDescript(this);
	}

	clitDescript(): string {
		todo("clitDescript");
		return "tiny clit";
	}

	eyesDescript(): string {
		todo("eyesDescript");
		return "human eyes";
	}

	hasCock(): boolean {
		return this.cocks.length > 0;
	}

	hasVagina(): boolean {
		todo("hasVagina");
	}

	hasFur(): boolean {
		todo("hasFur");
	}

	cockTotal(): number {
		return this.cocks.length;
	}

	cockHead(index?: number): string {
		todo("cockHead");
	}

	multiCockDescriptLight(): string {
		todo("multiCockDescriptLight");
	}

	sMultiCockDesc(): string {
		todo("sMultiCockDesc");
	}

	oMultiCockDesc(): string {
		todo("oMultiCockDesc");
	}

	biggestCockIndex(): number {
		todo("biggestCockIndex");
	}

	biggestCockIndex2(): number {
		todo("biggestCockIndex2");
	}

	biggestCockIndex3(): number {
		todo("biggestCockIndex3");
	}

	smallestCockIndex(): number {
		todo("smallestCockIndex");
	}

	smallestCockIndex2(): number {
		todo("smallestCockIndex2");
	}

	smallestCockIndex3(): number {
		todo("smallestCockIndex3");
	}

	longestCock(): number {
		todo("longestCock");
	}

	shortestCockIndex(): number {
		todo("shortestCockIndex");
	}

	cockThatFits(aspect: any): number {
		todo("cockThatFits");
	}

	cockThatFits2(aspect: any): number {
		todo("cockThatFits2");
	}

	vaginalCapacity(): number {
		todo("vaginalCapacity");
	}

	analCapacity(): number {
		todo("analCapacity");
	}

	cumQ(): number {
		todo("cumQ");
	}

	lactationQ(): number {
		todo("lactationQ");
	}

	wetness(): number {
		todo("wetness");
	}

	bRows(): number {
		todo("bRows");
	}

	biggestTitSize(): number {
		todo("biggestTitSize");
	}

	isTaur(): boolean {
		todo("isTaur");
		return false;
	}

	isNaga(): boolean {
		todo("isNaga");
		return false;
	}

	isGoo(): boolean {
		todo("isGoo");
		return false;
	}

	isBiped(): boolean {
		todo("isBiped");
		return true;
	}

	hasFuckableNipples(): boolean {
		todo("hasFuckableNipples");
		return false;
	}

	canFly(): boolean {
		todo("canFly");
		return true;
	}

	ballsDescriptLight(): string {
		todo("ballsDescriptLight");
	}


}
class Player extends Creature {

}
class CoC {
	player: Player  = new Player();
	player2: Player = new Player();
	readonly model: GameModel;
	readonly measurements: Measurements;
	readonly flags: {
		[index: number]: (string | number);
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