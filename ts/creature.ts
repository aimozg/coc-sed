class CockClass {
	cockType: CockTypesEnum = CockTypesEnum.HUMAN;
	isPierced: boolean      = false;
	sock: string            = "";
	cockLength              = 5;
	cockThickness           = 1.5;
}
class AssClass {
	analWetness   = 0;
	analLooseness = 0;
}
class BreastRowClass {
	breastRating        = 0;
	lactationMultiplier = 1;
	breasts             = 2;
}
class VaginaClass {
//data
	//Vag wetness
	vaginalWetness = 1;
	/*Vag looseness
	 0 - virgin
	 1 - normal
	 2 - loose
	 3 - very loose
	 4 - gaping
	 5 - monstrous*/
	vaginalLooseness = 0;
	//Type
	//0 - Normal
	//5 - Black bugvag
	type             = 0;
	virgin: boolean  = true;
	//Used during sex to determine how full it currently is.  For multi-dick sex.
	fullness         = 0;
	labiaPierced     = 0;
	labiaPShort      = "";
	labiaPLong       = "";
	clitPierced      = 0;
	clitPShort       = "";
	clitPLong        = "";
	clitLength       = 0.5;
	recoveryProgress = 0;
}
class CreatureData {
	short: string = "creature";

	str  = 15;
	tou  = 15;
	spe  = 15;
	inte = 15;
	lib  = 15;
	sens = 15;
	cor  = 15;

	fatigue = 20;
	lust    = 20;
	HP      = 99;

	armorName: string        = "comfortable clothes";
	weaponName: string       = "fists";
	shieldName: string       = "nothing";
	upperGarmentName: string = "nothing";
	lowerGarmentName: string = "comfortable loincloth";

	tallness   = 70;
	femininity = 50;
	thickness  = 50;
	tone       = 50;
	hipRating  = 2;
	buttRating = 2;

	hairLength: number;
	hairColor: string      = "blonde";
	hairType               = HAIR_NORMAL;
	skinType: SkinTypeEnum = SkinTypeEnum.PLAIN;
	skinAdj                = "";
	skinTone               = "pale";
	faceType               = FACE_HUMAN;
	eyeType                = EYES_HUMAN;
	tongueType             = TONGUE_HUMAN;
	earType                = EARS_HUMAN;
	lowerBody              = LOWER_BODY_TYPE_HUMAN;
	legCount               = 2;
	armType                = ARM_TYPE_HUMAN;
	clawType               = CLAW_TYPE_NORMAL;
	hornType               = HORNS_NONE;
	horns                  = 0;
	tailType               = TAIL_TYPE_NONE;
	tailVenom              = 0;
	wingType               = WING_TYPE_NONE;
	antennae               = 0;
	_furColor              = "no";

	balls                        = 0;
	ballSize                     = 0;
	pregnancyIncubation: number;
	buttPregnancyIncubation: number;
	cocks: CockClass[]           = [];
	ass: AssClass                = new AssClass();
	breastRows: BreastRowClass[] = [new BreastRowClass()];
	vaginas: VaginaClass[]       = [];
}
class Creature extends CreatureData {


	get furColor(): string {
		return this.hasFur() ? this._furColor : this.hairColor;
	}

	get gender(): number {
		return (this.hasCock() ? 1 : 0) + (this.hasVagina() ? 2 : 0);
	}

	mf<T>(m: T, f: T): T {
		todo("mf");
		return this.hasVagina() ? f : m;
	}

	maleFemaleHerm(caps: boolean = false): string {
		todo("maleFemaleHerm");
		let options = {
			0: ["genderless", "fem-genderless"],
			1: ["male", "dickgirl"],
			2: ["cuntboy", "female"],
			3: ["maleherm", "hermaphrodite"]
		}[this.gender];
		let s       = this.mf(options[0], options[1]);
		return caps ? capitalize(s) : s;
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
		if (this.biggestTitSize() < 1) return "chest";
		return Appearance.biggestBreastSizeDescript(this);
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
		return this.vaginas.lengh > 0;
	}

	hasFur(): boolean {
		return this.skinType == SkinTypeEnum.FUR;
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
		return this.breastRows.length;
	}

	biggestTitRow(): number {
		let i = 0;
		for (let j = 1; j < this.breastRows.length; j++) {
			if (this.breastRows[j].breastRating > this.breastRows[i].breastRating) i = j;
		}
		return i;
	}

	biggestTitSize(): number {
		return this.breastRows[this.biggestTitRow()].breastRating;
	}

	biggestLactation(): number {
		todo("biggestLactation");
	}

	averageBreastSize(): number {
		return this.breastRows.map(b => b.breastRating).reduce((a, b) => a + b) / this.breastRows.length;
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

	countCocksOfType(...types: CockTypesEnum[]): number {
		return this.cocks.filter(c => types.indexOf(c.cockType) >= 0).length;
	}

	dogCocks(): number {
		return this.countCocksOfType(CockTypesEnum.DOG, CockTypesEnum.FOX);
	}

	hasStatusEffect(t: string): boolean {
		todo("hasStatusEffect");
		return false;
	}

	statusEffectv1(t: string): number {
		todo("statusEffectv1");
		return 0;
	}

	vaginaType(): number {
		return this.vaginas[0].type;
	}

	dragonCocks(): number {
		return this.countCocksOfType(CockTypesEnum.DRAGON);
	}

	lizardCocks(): number {
		return this.countCocksOfType(CockTypesEnum.LIZARD);
	}

	hasDragonHorns(fourHorns: boolean = false): boolean {
		return (!fourHorns && this.horns > 0 && this.hornType == HORNS_DRACONIC_X2) || this.hornType == HORNS_DRACONIC_X4_12_INCH_LONG;
	}

	hasReptileEyes(): boolean {
		return [EYES_LIZARD, EYES_DRAGON, EYES_BASILISK].indexOf(this.eyeType) != -1;
	}

	hasLizardEyes(): boolean {
		return [EYES_LIZARD, EYES_BASILISK].indexOf(this.eyeType) != -1;
	}

	hasReptileFace(): boolean {
		return [FACE_SNAKE_FANGS, FACE_LIZARD, FACE_DRAGON].indexOf(this.faceType) != -1;
	}

	hasDragonWings(large: boolean = false): boolean {
		if (large)
			return this.wingType == WING_TYPE_DRACONIC_LARGE;
		else
			return [WING_TYPE_DRACONIC_SMALL, WING_TYPE_DRACONIC_LARGE].indexOf(this.wingType) != -1;
	}

	hasBatLikeWings(large: boolean = false): boolean {
		if (large)
			return this.wingType == WING_TYPE_BAT_LIKE_LARGE;
		else
			return [WING_TYPE_BAT_LIKE_TINY, WING_TYPE_BAT_LIKE_LARGE].indexOf(this.wingType) != -1;
	}

	hasLeatheryWings(large: boolean = false): boolean {
		return this.hasDragonWings(large) || this.hasBatLikeWings(large);
	}

	hasDragonfire(): boolean {
		return this.findPerk("Dragonfire") >= 0;
	}

	hasDragonWingsAndFire(largeWings: boolean = true): boolean {
		return this.hasDragonWings(largeWings) && this.hasDragonfire();
	}

	isBasilisk(): boolean {
		todo("isBasilisk");
		return this.eyeType == EYES_BASILISK;
	}

	isMaleOrHerm(): boolean {
		return (this.gender & GENDER_MALE) != 0;
	}

	isFemaleOrHerm(): boolean {
		return (this.gender & GENDER_FEMALE) != 0;
	}

	findPerk(perk: string): number {
		todo("findPerk");
		return -1;
	}

	perkv1(t: string): number {
		todo("perkv1");
		return 0;
	}

	hasScales(): boolean {
		return [SKIN_TYPE_LIZARD_SCALES, SKIN_TYPE_DRAGON_SCALES, SKIN_TYPE_FISH_SCALES].indexOf(this.skinType) != -1;
	}

	hasReptileScales(): boolean {
		return [SKIN_TYPE_LIZARD_SCALES, SKIN_TYPE_DRAGON_SCALES].indexOf(this.skinType) != -1;
	}

	hasDragonScales(): boolean {
		return this.skinType == SKIN_TYPE_DRAGON_SCALES;
	}

	hasLizardScales(): boolean {
		return this.skinType == SKIN_TYPE_LIZARD_SCALES;
	}

	hasNonLizardScales(): boolean {
		return this.hasScales() && !this.hasLizardScales();
	}

	hasFurOrScales(): boolean {
		return this.hasFur() || this.hasScales();
	}

	hasGooSkin(): boolean {
		return this.skinType == SKIN_TYPE_GOO;
	}

	hasPlainSkin(): boolean {
		return this.skinType == SKIN_TYPE_PLAIN;
	}

	isBiped(): boolean {
		return this.legCount == 2;
	}

	isNaga(): boolean {
		return this.lowerBody == LOWER_BODY_TYPE_NAGA;
	}

	isTaur(): boolean {
		if (this.legCount > 2 && !this.isDrider()) // driders have genitals on their human part, inlike usual taurs... this is actually bad way to check, but too many places to fix just now
			return true;
		return false;
	}

	isDrider(): boolean {
		return (this.lowerBody == LOWER_BODY_TYPE_DRIDER_LOWER_BODY);
	}

	isGoo(): boolean {
		return this.lowerBody == LOWER_BODY_TYPE_GOO;

	}
}