class CockClass {
	isPierced: boolean = false;
	sock: string       = "";
	knotMultiplier     = 0.25;

	constructor(public cockLength: number      = 5.5,
				public cockThickness: number   = 1,
				public cockType: CockTypesEnum = CockTypesEnum.HUMAN) {
	}
}
class AssClass {
	analWetness   = 0;
	analLooseness = 0;
}
class BreastRowClass {
	breastRating        = 0;
	lactationMultiplier = 1;
	breasts             = 2;
	fuckable            = false;
}
class VaginaClass {
	vaginalWetness   = 1;
	vaginalLooseness = 0;
	type             = 0;
	virgin: boolean  = true;
	fullness         = 0;
	labiaPierced     = 0;
	labiaPShort      = "";
	labiaPLong       = "";
	clitPierced      = 0;
	clitPShort       = "";
	clitPLong        = "";
	clitLength       = 0.5;
	recoveryProgress = 0;

	capacity(): number {
		return 8 * (this.vaginalLooseness ** 2) * (1 + this.vaginalWetness / 10);
	}
}
class CreatureData {
	short: string = "creature";
	a: string     = "the ";

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

	tallness               = 70;
	femininity             = 50;
	thickness              = 50;
	tone                   = 50;
	hipRating              = 2;
	buttRating             = 2;
	hairLength: number;
	hairColor: string      = "blonde";
	hairType               = HAIR_NORMAL;
	skinType: SkinTypeEnum = SkinTypeEnum.PLAIN;
	skinAdj                = "";
	skinDesc               = "skin";
	skinTone               = "pale";

	faceType   = FACE_HUMAN;
	eyeType    = EYES_HUMAN;
	tongueType = TONGUE_HUMAN;
	earType    = EARS_HUMAN;
	lowerBody  = LOWER_BODY_TYPE_HUMAN;
	legCount   = 2;
	armType    = ARM_TYPE_HUMAN;

	clawType  = CLAW_TYPE_NORMAL;
	clawTone  = "";
	hornType  = HORNS_NONE;
	horns     = 0;
	tailType  = TAIL_TYPE_NONE;
	tailVenom = 0;
	wingType  = WING_TYPE_NONE;
	wingDesc  = "non-existant";
	gillType  = GILLS_NONE;
	antennae  = ANTENNAE_NONE;
	_furColor = "no";

	nipplesPierced = 0;
	nipplesPShort  = "";
	nipplesPLong   = "";
	lipPierced     = 0;
	lipPShort      = "";
	lipPLong       = "";
	tonguePierced  = 0;
	tonguePShort   = "";
	tonguePLong    = "";
	eyebrowPierced = 0;
	eyebrowPShort  = "";
	eyebrowPLong   = "";
	earsPierced    = 0;
	earsPShort     = "";
	earsPLong      = "";
	nosePierced    = 0;
	nosePShort     = "";
	nosePLong      = "";

	nippleLength                 = .25;
	balls                        = 0;
	ballSize                     = 0;
	hoursSinceCum                = 0;
	cumMultiplier                = 1;
	pregnancyIncubation: number;
	buttPregnancyIncubation: number;
	cocks: CockClass[]           = [];
	ass: AssClass                = new AssClass();
	breastRows: BreastRowClass[] = [new BreastRowClass()];
	vaginas: VaginaClass[]       = [];

	perks: string[]         = [];
	statusEffects: string[] = [];
}
class Creature extends CreatureData {
	get capitalA(): string {
		return capitalize(this.a);
	}

	get pronoun1(): string {
		return this.mf("he", "she");
	}

	get pronoun2(): string {
		return this.mf("him", "her");
	}

	get pronoun3(): string {
		return this.mf("his", "her");
	}
	get flags() {
		return kGAMECLASS.flags;
	}

	createPerk(name: string) {
		this.perks.push(name);
	}

	createVagina() {
		this.vaginas.push(new VaginaClass());
	}

	createCock(clength: number = 5.5, cthickness: number = 1, ctype: CockTypesEnum = CockTypesEnum.HUMAN) {
		this.cocks.push(new CockClass(clength, cthickness, ctype))
	}

	get furColor(): string {
		return this.hasFur() ? this._furColor : this.hairColor;
	}

	set furColor(color: string) {
		this._furColor = color;
	}

	get gender(): number {
		return (this.hasCock() ? 1 : 0) + (this.hasVagina() ? 2 : 0);
	}

	mf<T>(male: T, female: T): T {
		let biggestTitSize = this.biggestTitSize();
		let femininity     = this.femininity;
		if (this.hasCock()) {
			if (this.hasVagina()) {
				// herm
				if (biggestTitSize >= 2) return female;
				else if (biggestTitSize == 1) return femininity >= 50 ? female : male;
				else return femininity >= 75 ? female : male;
			} else if (biggestTitSize >= 1 && femininity > 55 || femininity >= 75) return female; // d-girl
			else return male;
		} else {
			if (this.hasVagina()) // pure female
				if (biggestTitSize <= 1 && femininity < 45) return male; // c-boy
				else return female;
			else {// genderless
				if (biggestTitSize >= 3 || femininity >= 75) return female;
				else return male;
			}
		}
	}

	maleFemaleHerm(caps: boolean = false): string {
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
		let toneText: string = this.clawTone == "" ? " " : (", " + this.clawTone + " ");
		switch (this.clawType) {
			case CLAW_TYPE_NORMAL:
				return "fingernails";
			case CLAW_TYPE_LIZARD:
				return "short curved" + toneText + "claws";
			case CLAW_TYPE_DRAGON:
				return "powerful, thick curved" + toneText + "claws";
			// Since mander arms are hardcoded and the others are NYI, we're done here for now
		}
		return "fingernails";
	}

	face(): string {
		let stringo = "";
		//0 - human
		//5 - Human w/Naga fangz
		//8 - bunnah faceahhh bunbun
		//10 - spidah-face (humanish)
		let faceType = this.faceType;
		if (faceType == 0) return "face";
		//1 - horse
		//2 - dogface
		//6 - kittah face
		//7 - lizard face (durned argonians!)
		//9 - kangaface
		if (this.hasMuzzle()) {
			if (rand(3) == 0 && faceType == FACE_HORSE) stringo = "long ";
			if (rand(3) == 0 && faceType == FACE_CAT) stringo = "feline ";
			if (rand(3) == 0 && faceType == FACE_RHINO) stringo = "rhino ";
			if (rand(3) == 0 && (faceType == FACE_LIZARD || faceType == FACE_DRAGON)) stringo = "reptilian ";
			switch (rand(3)) {
				case 0:
					return stringo + "muzzle";
				case 1:
					return stringo + "snout";
				case 2:
					return stringo + "face";
				default:
					return stringo + "face";
			}
		}
		//3 - cowface
		if (faceType == FACE_COW_MINOTAUR) {
			if (rand(4) == 0) stringo = "bovine ";
			if (rand(2) == 0) return "muzzle";
			return stringo + "face";
		}
		//4 - sharkface-teeth
		if (faceType == FACE_SHARK_TEETH) {
			if (rand(4) == 0) stringo = "angular ";
			return stringo + "face";
		}
		if (faceType == FACE_PIG || faceType == FACE_BOAR) {
			if (Math.floor(Math.random() * 4) == 0) stringo = (faceType == FACE_PIG ? "pig" : "boar") + "-like ";
			if (Math.floor(Math.random() * 4) == 0) return stringo + "snout";
			return stringo + "face";
		}
		return "face";
	}

	// returns leg,legs,foot,feet
	public lowerBodyParts(): string[] {
		switch (this.lowerBody) {
			case LOWER_BODY_TYPE_HUMAN:
				return ["leg", "legs", "foot", "feet"];
			case LOWER_BODY_TYPE_HOOFED:
				return ["leg", "legs", "hoof", "hooves"];
			case LOWER_BODY_TYPE_DOG:
				return ["leg", "legs", "paw", "paws"];
			case LOWER_BODY_TYPE_NAGA:
				return ["snake-tail", "snake-like coils", "coiled tail", "coils"];
			case LOWER_BODY_TYPE_CENTAUR:
				return ["equine leg", "equine legs", "hoof", "hooves"];
			case LOWER_BODY_TYPE_DEMONIC_HIGH_HEELS:
				return ["leg", "legs", "foot", "demonic high-heels"];
			case LOWER_BODY_TYPE_DEMONIC_CLAWS:
				return ["leg", "legs", "foot", "demonic foot-claws"];
			case LOWER_BODY_TYPE_GOO:
				return ["mound of goo", "mounds of goo", "slimey undercarriage", "slimey cillia"];
			case LOWER_BODY_TYPE_PONY:
				return ["cartoonish pony-leg", "cute pony-legs", "flat pony-foot", "flat pony-feet"];
			case LOWER_BODY_TYPE_BUNNY:
				return randomChoice(
					["fuzzy, bunny leg", "fuzzy, bunny legs"],
					["fur-covered leg", "fur-covered legs"],
					["furry leg", "furry legs"],
					["leg", "legs"],
					["leg", "legs"],
					["leg", "legs"]
				).concat(randomChoice(
					["large bunny feet", "large bunny feet"],
					["rabbit foot", "rabbit feet"],
					["large foot", "feet"],
					["foot", "feet"],
					["foot", "feet"]
					)
				);
			case LOWER_BODY_TYPE_HARPY:
				return randomChoice(
					["bird-like leg", "bird-like legs"],
					["feathered leg", "feathered legs"],
					["leg", "legs"],
					["leg", "legs"],
					["leg", "legs"]
				).concat(randomChoice(
					["taloned foot", "taloned feet"],
					["foot", "feet"],
					["foot", "feet"],
					["foot", "feet"],
					["foot", "feet"]
					)
				);
			case LOWER_BODY_TYPE_KANGAROO:
				return ["leg", "legs", "foot-paw", "foot-paws"];
			case LOWER_BODY_TYPE_FOX:
				return randomChoice(
					["fox-like leg", "fox-like legs"],
					["vulpine leg", "vulpine legs"],
					["leg", "legs"],
					["leg", "legs"]
				).concat(randomChoice(
					["soft, padded paw", "soft, padded paws"],
					["fox-like fee", "fox-like feet"],
					["paw", "paws"],
					["paw", "paws"],
					)
				);
			case LOWER_BODY_TYPE_RACCOON:
				return randomChoice(
					["raccoon-like leg", "raccoon-like legs"],
					["leg", "legs"],
					["leg", "legs"],
					["leg", "legs"]
				).concat(randomChoice(
					["raccoon-like foot", "raccoon-like feet"],
					["long-toed paw", "long-toed paws"],
					["foot", "feet"],
					["paw", "paws"])
				);
			case LOWER_BODY_TYPE_CLOVEN_HOOFED:
				return randomChoice(
					["pig-like leg", "pig-like legs"],
					["swine leg", "swine legs"],
					["leg", "legs"],
					["leg", "legs"],
					["leg", "legs"]
				).concat(["foot", "feet"]
				);
		}
		return ["leg", "legs", "foot", "feet"];
	}

	public leg(): string {
		return this.lowerBodyParts()[0];
	}

	public legs(): string {
		if (this.isDrider()) return num2Text(this.legCount) + " spider legs";
		if (this.isTaur()) return num2Text(this.legCount) + " legs";
		return this.lowerBodyParts()[1];
	}

	public foot(): string {
		return this.lowerBodyParts()[2];
	}

	public feet(): string {
		return this.lowerBodyParts()[3];
	}

	skin(noAdj: boolean = false, noTone: boolean = false): string {
		let skinzilla = "";
		let skinTone  = this.skinTone;
		let skinAdj   = this.skinAdj;
		if (!noAdj) {
			if (skinAdj != "" && !noTone && skinTone != "rough gray") {
				skinzilla += skinAdj;
				if (noTone) skinzilla += " ";
				else skinzilla += ", ";
			}
		}
		if (!noTone) skinzilla += skinTone + " ";
		//Fur handled a little differently since it uses haircolor
		if (this.hasFur()) skinzilla += "skin";
		else skinzilla += this.skinDesc;
		return skinzilla;
	}

	hairOrFur(): string {
		return Appearance.hairOrFur(this);
	}

	skinFurScales(): string {
		let skinzilla = "";
		if (this.skinAdj != "") skinzilla += this.skinAdj + ", ";
		if (this.hasFur()) skinzilla += this.furColor + " ";
		else if (this.hasDragonScales()) skinzilla += "iron-like, " + this.skinTone + " shield-shaped ";
		else skinzilla += this.skinTone + " ";
		skinzilla += this.skinDesc;
		return skinzilla;
	}

	chestDesc(): string {
		if (this.biggestTitSize() < 1) return "chest";
		return Appearance.biggestBreastSizeDescript(this);
	}

	allChestDesc(): string {
		if (this.biggestTitSize() < 1) return "chest";
		return this.allBreastsDescript();
	}

	hairDescript(): string {
		return Appearance.hairDescription(this);
	}

	hipDescript(): string {
		return Appearance.hipDescription(this);
	}

	hornDescript(): string {
		return Appearance.DEFAULT_HORNS_NAMES[this.hornType] + " horns";
	}

	nippleDescript(rowIdx: number = 0): string {
		return Appearance.nippleDescription(this, rowIdx);
	}

	tongueDescript(): string {
		return Appearance.tongueDescript(this);
	}

	wingsDescript(): string {
		return Appearance.wingsDescript(this);
	}

	tailDescript(): string {
		return Appearance.tailDescript(this);
	}

	oneTailDescript(): string {
		return Appearance.oneTailDescript(this);
	}

	cockDescript(index: number = 0): string {
		return Appearance.cockDescript(this, index);
	}

	cockDescriptShort(i_cockIndex: number = 0): string {
		if (this.cocks.length == 0) return Parser.errstr("INVALID CREATURE SPECIFIED to cockDescriptShort");

		let description = "";
		let cock        = this.cocks[i_cockIndex];
		if (rand(3) == 0) {
			if (cock.cockLength >= 30) description = "towering ";
			else if (cock.cockLength >= 18) description = "enormous ";
			else if (cock.cockLength >= 13) description = "massive ";
			else if (cock.cockLength >= 10) description = "huge ";
			else if (cock.cockLength >= 7) description = "long ";
			else if (cock.cockLength >= 5) description = "average ";
			else description = "short ";
		} else if (rand(2) == 0) {
			if (cock.cockThickness <= .75) description = "narrow ";
			if (cock.cockThickness > 1 && cock.cockThickness <= 1.4) description = "ample ";
			if (cock.cockThickness > 1.4 && cock.cockThickness <= 2) description = "broad ";
			if (cock.cockThickness > 2 && cock.cockThickness <= 3.5) description = "fat ";
			if (cock.cockThickness > 3.5) description = "distended ";
		}
		description += Appearance.cockNoun(cock.cockType);

		return description;
	}

	breastDescript(row: number = 0): string {
		if (row < 0 || row >= this.breastRows.length) return Parser.errstr("breastRows index out of range");
		return Appearance.breastDescript(this.breastRows[row].breastRating, this.breastRows[row].lactationMultiplier);
	}

	allBreastsDescript(): string {
		return Appearance.allBreastsDescript(this);
	}

	vaginaDescript(index: number = 0): string {
		return Appearance.vaginaDescript(this, index);
	}

	sackDescript(): string {
		return Appearance.sackDescript(this);
	}

	sheathDescript(): string {
		if (this.hasSheath()) return "sheath";
		return "base";
	}

	buttDescript(): string {
		return Appearance.buttDescription(this);
	}

	assholeDescript(): string {
		return Appearance.assholeDescript(this);
	}

	clitDescript(): string {
		return Appearance.clitDescription(this);
	}

	eyesDescript(): string {
		return Appearance.eyesDescript(this);
	}

	hasCock(): boolean {
		return this.cocks.length > 0;
	}

	hasVagina(): boolean {
		return this.vaginas.length > 0;
	}

	hasFur(): boolean {
		return this.skinType == SkinTypeEnum.FUR;
	}

	hasSheath(): boolean {
		return _.any(this.cocks, cock => [CockTypesEnum.CAT,
			CockTypesEnum.DISPLACER,
			CockTypesEnum.DOG,
			CockTypesEnum.FOX,
			CockTypesEnum.HORSE,
			CockTypesEnum.KANGAROO,
			CockTypesEnum.AVIAN,
			CockTypesEnum.ECHIDNA].indexOf(cock.cockType) >= 0);
	}

	cockTotal(): number {
		return this.cocks.length;
	}

	cockHead(cockNum: number = 0): string {
		if (cockNum < 0 || cockNum >= this.cocks.length) {
			return Parser.errstr("cocks index out of bounds");
		}
		switch (this.cocks[cockNum].cockType) {
			case CockTypesEnum.CAT:
				return randomChoice("point", "narrow tip");
			case CockTypesEnum.DEMON:
				return randomChoice("tainted crown", "nub-ringed tip");
			case CockTypesEnum.DISPLACER:
				return randomChoice("star tip", "blooming cock-head", "open crown", "alien tip", "bizarre head");
			case CockTypesEnum.DOG:
			case CockTypesEnum.FOX:
				return randomChoice("pointed tip", "narrow tip");
			case CockTypesEnum.HORSE:
				return randomChoice("flare", "flat tip");
			case CockTypesEnum.KANGAROO:
				return randomChoice("tip", "point");
			case CockTypesEnum.LIZARD:
				return randomChoice("crown", "head");
			case CockTypesEnum.TENTACLE:
				return randomChoice("mushroom-like tip", "wide plant-like crown");
			case CockTypesEnum.PIG:
				return randomChoice("corkscrew tip", "corkscrew head");
			case CockTypesEnum.RHINO:
				return randomChoice("flared head", "rhinoceros dickhead");
			case CockTypesEnum.ECHIDNA:
				return randomChoice("quad heads", "echidna quad heads");
			default:
		}
		if (rand(2) == 0) return "crown";
		return randomChoice("head", "cock-head");
	}

	cockAdjective(index: number = -1): string {
		if (index < 0) index = this.biggestCockIndex();
		let cock        = this.cocks[index];
		const isPierced = (this.cocks.length == 1) && (cock.isPierced); //Only describe as pierced or sock covered if the creature has just one cock
		const hasSock   = (this.cocks.length == 1) && (cock.sock != "");
		const isGooey   = (this.skinType == SKIN_TYPE_GOO);
		return Appearance.cockAdjective(cock.cockType, cock.cockLength, cock.cockThickness, this.lust, this.cumQ(), isPierced, hasSock, isGooey);
	}

	multiCockDescriptLight(): string {
		return Appearance.multiCockDescriptLight(this);
	}

	sMultiCockDesc(): string {
		return (this.cocks.length > 1 ? "one of your " : "your ") + this.cockMultiLDescriptionShort();
	}

	SMultiCockDesc(): string {
		return (this.cocks.length > 1 ? "One of your " : "Your ") + this.cockMultiLDescriptionShort();
	}

	oMultiCockDesc(): string {
		return (this.cocks.length > 1 ? "each of your " : "your ") + this.cockMultiLDescriptionShort();
	}

	OMultiCockDesc(): string {
		return (this.cocks.length > 1 ? "Each of your " : "Your ") + this.cockMultiLDescriptionShort();
	}

	cockMultiLDescriptionShort(): string {
		let cocks = this.cocks;
		if (cocks.length < 1) {
			return Parser.errstr("NO WANGS DETECTED for cockMultiLightDesc()");
		}
		if (cocks.length == 1) { //For a songle cock return the default description
			return Appearance.cockDescript(this, 0);
		}
		switch (cocks[0].cockType) { //With multiple cocks only use the descriptions for specific cock types if all cocks are of a single type
			case CockTypesEnum.ANEMONE:
			case CockTypesEnum.CAT:
			case CockTypesEnum.DEMON:
			case CockTypesEnum.DISPLACER:
			case CockTypesEnum.DRAGON:
			case CockTypesEnum.HORSE:
			case CockTypesEnum.KANGAROO:
			case CockTypesEnum.LIZARD:
			case CockTypesEnum.PIG:
			case CockTypesEnum.TENTACLE:
				if (this.countCocksOfType(cocks[0].cockType) == cocks.length) return Appearance.cockNoun(cocks[0].cockType) + "s";
				break;
			case CockTypesEnum.DOG:
			case CockTypesEnum.FOX:
				if (this.dogCocks() == cocks.length) return Appearance.cockNoun(CockTypesEnum.DOG) + "s";
				break;
			default:
		}
		return Appearance.cockNoun(CockTypesEnum.HUMAN) + "s";
	}

	cockArea(i_cockIndex: number = 0): number {
		if (i_cockIndex >= this.cocks.length || i_cockIndex < 0) return 0;
		return (this.cocks[i_cockIndex].cockThickness * this.cocks[i_cockIndex].cockLength);
	}

	biggestCockIndex(): number {
		let i = 0;
		for (let j = 1; j < this.cocks.length; j++) {
			if (this.cockArea(j) > this.cockArea(i)) i = j;
		}
		return i;
	}

	biggestCockIndex2(): number {
		let i = 0, m1 = this.biggestCockIndex();
		for (let j = 1; j < this.cocks.length; j++) {
			if (this.cockArea(j) > this.cockArea(i) && j != m1) i = j;
		}
		return i;
	}

	biggestCockIndex3(): number {
		let i = 0, m1 = this.biggestCockIndex(), m2 = this.biggestCockIndex2();
		for (let j = 1; j < this.cocks.length; j++) {
			if (this.cockArea(j) > this.cockArea(i) && j != m1 && j != m2) i = j;
		}
		return i;
	}

	smallestCockIndex(): number {
		let i = 0;
		for (let j = 1; j < this.cocks.length; j++) {
			if (this.cockArea(j) < this.cockArea(i)) i = j;
		}
		return i;
	}

	smallestCockIndex2(): number {
		let i = 0, m1 = this.smallestCockIndex();
		for (let j = 1; j < this.cocks.length; j++) {
			if (this.cockArea(j) < this.cockArea(i) && j != m1) i = j;
		}
		return i;
	}

	smallestCockIndex3(): number {
		let i = 0, m1 = this.smallestCockIndex(), m2 = this.smallestCockIndex2();
		for (let j = 1; j < this.cocks.length; j++) {
			if (this.cockArea(j) < this.cockArea(i) && j != m1 && j != m2) i = j;
		}
		return i;
	}

	longestCock(): number {
		let i = 0;
		for (let j = 1; j < this.cocks.length; j++) {
			if (this.cocks[j].cockLength > this.cocks[i].cockLength) i = j;
		}
		return i;
	}

	shortestCockIndex(): number {
		let i = 0;
		for (let j = 1; j < this.cocks.length; j++) {
			if (this.cocks[j].cockLength < this.cocks[i].cockLength) i = j;
		}
		return i;
	}

	cockThatFits(i_fits: number = 0, type: "area" | "length" = "area"): number {
		if (this.cocks.length <= 0) return -1;
		let i = 0;
		for (let j = 1; j < this.cocks.length; j++) {
			if (type == "area") {
				if (this.cockArea(j) <= i_fits) {
					if (this.cockArea(j) > this.cockArea(i)) i = j;
				}
			} else if (type == "length") {
				if (this.cocks[j].cockLength <= i_fits) {
					if (this.cocks[j].cockLength > this.cocks[i].cockLength)
						i = j;
				}
			}
		}
		return i;
	}

	cockThatFits2(i_fits: number = 0, type: "area" | "length" = "area"): number {
		if (this.cocks.length <= 1) return -1;
		let i = 0, m1 = this.cockThatFits(i_fits, type);
		for (let j = 1; j < this.cocks.length; j++) {
			if (j == m1) continue;
			if (type == "area") {
				if (this.cockArea(j) <= i_fits) {
					if (this.cockArea(j) > this.cockArea(i)) i = j;
				}
			} else if (type == "length") {
				if (this.cocks[j].cockLength <= i_fits) {
					if (this.cocks[j].cockLength > this.cocks[i].cockLength)
						i = j;
				}
			}
		}
		return i;
	}

	vaginalCapacity(): number {
		return this.vaginas[0].capacity();
	}

	analCapacity(): number {
		let bonus: number = 0;
		if (this.isTaur()) bonus = 30;
		if (this.findPerk("HistorySlut") >= 0) bonus += 20;
		if (this.findPerk("Cornucopia") >= 0) bonus += 30;
		if (this.findPerk("OneTrackMind") >= 0) bonus += 10;
		if (this.ass.analWetness > 0) bonus += 15;
		return ((bonus + this.statusEffectv1("BonusACapacity") + 6 * (this.ass.analLooseness ** 2)) * (1 + this.ass.analWetness / 10));
	}

	cumCapacity(): number {
		if (!this.hasCock()) return 0;
		let quantity = 0;
		if (this.balls > 0) quantity += Math.pow(((4 / 3) * Math.PI * (this.ballSize / 2)), 3) * this.balls;
		else quantity += Math.pow(((4 / 3) * Math.PI), 3) * 2;
		quantity = this.applyCumBonus(quantity) * this.cumMultiplier;
		quantity = Math.round(quantity);
		if (quantity > 0x7fffffff) quantity = 0x7fffffff;
		return quantity;
	}

	private applyCumBonus(quantity: number): number {
		if (this.findPerk("BroBody") >= 0) quantity *= 1.3;
		if (this.findPerk("FertilityPlus") >= 0) quantity *= 1.5;
		if (this.findPerk("FertilityMinus") >= 0 && this.lib < 25) quantity *= 0.7;
		if (this.findPerk("MessyOrgasms") >= 0) quantity *= 1.5;
		if (this.findPerk("OneTrackMind") >= 0) quantity *= 1.1;
		if (this.findPerk("ParasiteMusk") >= 0) quantity *= 1.2;
		if (this.findPerk("MaraesGiftStud") >= 0) quantity += 350;
		if (this.findPerk("FerasBoonAlpha") >= 0) quantity += 200;
		if (this.findPerk("MagicalVirility") >= 0) quantity += 200 + (this.perkv1("MagicalVirility") * 100);
		if (this.findPerk("FerasBoonSeeder") >= 0) quantity += 1000;
		quantity += this.perkv1("ElvenBounty");
		if (this.findPerk("BroBody") >= 0) quantity += 200;
		if (this.findPerk("SatyrSexuality") >= 0) quantity += 50;
		quantity += this.statusEffectv1("Rut");
		quantity *= (1 + (2 * this.perkv1("PiercedFertite")) / 100);
		//if (jewelryEffectId == JewelryLib.MODIFIER_FERTILITY) quantity *= (1 + (jewelryEffectMagnitude / 100));
		return quantity;
	}

	cumQ(): number {
		if (!this.hasCock()) return 0;
		let quantity                                        = 0;
		let lustCoefficient                                 = (this.lust + 50) / 10;
		let {hoursSinceCum, balls, cumMultiplier, ballSize} = this;
		if (kGAMECLASS.flags[kFLAGS.HUNGER_ENABLED] >= 1) {
			//If realistic mode is enabled, limits cum to capacity.
			lustCoefficient = lustCoefficient / 2;
			if (this.findPerk("PilgrimsBounty") >= 0) lustCoefficient = 30;
			let percent = lustCoefficient + (hoursSinceCum + 10);
			if (percent > 100) {
				//Pilgrim's bounty maxes lust coefficient
				percent = 100;
				if (quantity > this.cumCapacity()) {
				}
				quantity = this.cumCapacity();
				return (percent / 100) * this.cumCapacity();
			}
		}
		if (this.findPerk("PilgrimsBounty") >= 0) lustCoefficient = 150 / 10;
		if ((balls == 0 || this.hasStatusEffect("Uniball")) && this.findPerk("PotentProstate") >= 0) quantity = 0 | (4 * 2 * cumMultiplier * 2 * lustCoefficient * (hoursSinceCum + 10) / 24) / 10;
		else if (balls == 0) quantity = 0 | (1.25 * 2 * cumMultiplier * 2 * lustCoefficient * (hoursSinceCum + 10) / 24) / 10;
		else quantity = 0 | (ballSize * balls * cumMultiplier * 2 * lustCoefficient * (hoursSinceCum + 10) / 24) / 10;
		quantity = this.applyCumBonus(quantity);
		if (quantity < 2) quantity = 2;
		if (quantity > 0x7fffffff) quantity = 0x7fffffff;
		return quantity;
	}

	wetness(): number {
		return this.vaginas.length > 0 ? this.vaginas[0].vaginalWetness : 0;
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
		if (this.breastRows.length == 0) return 0;
		return this.breastRows.reduce((a,
									   b) => (a.lactationMultiplier > b.lactationMultiplier) ? a : b).lactationMultiplier;
	}

	averageBreastSize(): number {
		return this.breastRows.map(b => b.breastRating).reduce((a, b) => a + b) / this.breastRows.length;
	}


	hasFuckableNipples(): boolean {
		return _.any(this.breastRows, b => b.fuckable);
	}

	canFly(): boolean {
		return !this.hasStatusEffect("Web") && canFlyWings.indexOf(this.wingType) != -1;
	}

	ballsDescriptLight(forcedSize: boolean = true): string {
		return Appearance.ballsDescription(forcedSize, true, this);
	}

	countCocksOfType(...types: CockTypesEnum[]): number {
		return this.cocks.filter(c => types.indexOf(c.cockType) >= 0).length;
	}

	dogCocks(): number {
		return this.countCocksOfType(CockTypesEnum.DOG, CockTypesEnum.FOX);
	}

	hasStatusEffect(t: string): boolean {
		return this.statusEffects.indexOf(t) >= 0;
	}

	statusEffectv1(t: string): number {
		//todo("statusEffectv1");
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
		if (large) return this.wingType == WING_TYPE_DRACONIC_LARGE;
		else return [WING_TYPE_DRACONIC_SMALL, WING_TYPE_DRACONIC_LARGE].indexOf(this.wingType) != -1;
	}

	hasBatLikeWings(large: boolean = false): boolean {
		if (large) return this.wingType == WING_TYPE_BAT_LIKE_LARGE;
		else return [WING_TYPE_BAT_LIKE_TINY, WING_TYPE_BAT_LIKE_LARGE].indexOf(this.wingType) != -1;
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
		return this.eyeType == EYES_BASILISK;
	}

	isMaleOrHerm(): boolean {
		return (this.gender & GENDER_MALE) != 0;
	}

	isFemaleOrHerm(): boolean {
		return (this.gender & GENDER_FEMALE) != 0;
	}

	findPerk(perk: string): number {
		return this.perks.indexOf(perk);
	}

	perkv1(t: string): number {
		//todo("perkv1");
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

	hasMuzzle(): boolean {
		return [FACE_HORSE, FACE_DOG, FACE_CAT, FACE_LIZARD, FACE_KANGAROO, FACE_FOX, FACE_DRAGON, FACE_RHINO, FACE_ECHIDNA, FACE_DEER].indexOf(this.faceType) >= 0;
	}

	isBiped(): boolean {
		return this.legCount == 2;
	}

	isNaga(): boolean {
		return this.lowerBody == LOWER_BODY_TYPE_NAGA;
	}

	isTaur(): boolean {
		return this.legCount > 2 && !this.isDrider();

	}

	isDrider(): boolean {
		return (this.lowerBody == LOWER_BODY_TYPE_DRIDER_LOWER_BODY);
	}

	isGoo(): boolean {
		return this.lowerBody == LOWER_BODY_TYPE_GOO;

	}
}