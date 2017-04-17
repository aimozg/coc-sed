///<reference path="appearanceDefs.ts"/>

namespace Appearance {
	export function cockDescript(creature: Creature, cockIndex: number = 0): string {
		if (creature.cocks.length == 0) return "<b>ERROR: cockDescript Called But No Cock Present</b>";
		let cockType: CockTypesEnum = CockTypesEnum.HUMAN;
		if (cockIndex != 99) { //CockIndex 99 forces a human cock description
			if (creature.cocks.length <= cockIndex) return "<b>ERROR: cockDescript called with index of " + cockIndex + " - out of BOUNDS</b>";
			cockType = creature.cocks[cockIndex].cockType;
		}
		const isPierced: boolean = (creature.cocks.length == 1) && (creature.cocks[cockIndex].isPierced); //Only describe as pierced or sock covered if the creature has just one cock
		const hasSock: boolean   = (creature.cocks.length == 1) && (creature.cocks[cockIndex].sock != "");
		const isGooey: boolean   = (creature.skinType == SKIN_TYPE_GOO);
		return cockDescription(cockType, creature.cocks[cockIndex].cockLength, creature.cocks[cockIndex].cockThickness, creature.lust, creature.cumQ(), isPierced, hasSock, isGooey);
	}

	export function cockDescription(cockType: CockTypesEnum,
									length: number,
									girth: number,
									lust: number       = 50,
									cumQ: number       = 10,
									isPierced: boolean = false,
									hasSock: boolean   = false,
									isGooey: boolean   = false): string {
		if (rand(2) == 0) {
			if (cockType == CockTypesEnum.HUMAN) return cockAdjective(cockType, length, girth, lust, cumQ, isPierced, hasSock, isGooey) + " " + cockNoun(cockType);
			else return cockAdjective(cockType, length, girth, lust, cumQ, isPierced, hasSock, isGooey) + ", " + cockNoun(cockType);
		}
		return cockNoun(cockType);
	}

	export function cockNoun(cockType: CockTypesEnum): string {
		let l                      = {} as { [index: number]: string[] };
		l[CockTypesEnum.HUMAN]     = [
			"cock", "cock", "cock", "cock", "cock",
			"prick", "prick",
			"pecker",
			"shaft", "shaft", "shaft"];
		l[CockTypesEnum.BEE]       = [
			"bee prick", "bee prick", "bee prick", "bee prick",
			"insectoid cock", "insectoid cock",
			"furred monster"];
		l[CockTypesEnum.DOG]       = [
			"dog-shaped dong",
			"canine shaft",
			"pointed prick",
			"knotty dog-shaft",
			"bestial cock",
			"animalistic puppy-pecker",
			"pointed dog-dick",
			"pointed shaft",
			"canine member",
			"canine cock",
			"knotted dog-cock"];
		l[CockTypesEnum.FOX]       = [
			"fox-shaped dong",
			"vulpine shaft",
			"pointed prick",
			"knotty fox-shaft",
			"bestial cock",
			"animalistic vixen-pricker",
			"pointed fox-dick",
			"pointed shaft",
			"vulpine member",
			"vulpine cock",
			"knotted fox-cock"];
		l[CockTypesEnum.HORSE]     = [
			"flared horse-cock",
			"equine prick",
			"bestial horse-shaft",
			"flat-tipped horse-member",
			"animalistic stallion-prick",
			"equine dong",
			"beast cock",
			"flared stallion-cock"];
		l[CockTypesEnum.DEMON]     = [
			"nub-covered demon-dick",
			"nubby shaft",
			"corrupted cock",
			"perverse pecker",
			"bumpy demon-dick",
			"demonic cock",
			"demonic dong",
			"cursed cock",
			"infernal prick",
			"unholy cock",
			"blighted cock"];
		l[CockTypesEnum.TENTACLE]  = [
			"twisting tentacle-prick",
			"wriggling plant-shaft",
			"sinuous tentacle-cock",
			"squirming cock-tendril",
			"writhing tentacle-pecker",
			"wriggling plant-prick",
			"penile flora",
			"smooth shaft",
			"undulating tentacle-dick",
			"slithering vine-prick",
			"vine-shaped cock"];
		l[CockTypesEnum.CAT]       = [
			"feline dick",
			"spined cat-cock",
			"pink kitty-cock",
			"spiny prick",
			"animalistic kitty-prick",
			"oddly-textured cat-penis",
			"feline member",
			"spined shaft",
			"feline shaft",
			"barbed dick",
			"nubby kitten-prick"];
		l[CockTypesEnum.LIZARD]    = [
			"reptilian dick",
			"purple cock",
			"inhuman cock",
			"reptilian prick",
			"purple prick",
			"purple member",
			"serpentine member",
			"serpentine shaft",
			"reptilian shaft",
			"bulbous snake-shaft",
			"bulging snake-dick"];
		l[CockTypesEnum.ANEMONE]   = [
			"anemone dick",
			"tentacle-ringed cock",
			"blue member",
			"stinger-laden shaft",
			"pulsating prick",
			"anemone prick",
			"stinger-coated member",
			"blue cock",
			"tentacle-ringed dick",
			"near-transparent shaft",
			"squirming shaft"];
		l[CockTypesEnum.KANGAROO]  = [
			"kangaroo-like dick",
			"pointed cock",
			"marsupial member",
			"tapered shaft",
			"curved pecker",
			"pointed prick",
			"squirming kangaroo-cock",
			"marsupial cock",
			"tapered kangaroo-dick",
			"curved kangaroo-cock",
			"squirming shaft"];
		l[CockTypesEnum.DRAGON]    = [
			"dragon-like dick",
			"segmented shaft",
			"pointed prick",
			"knotted dragon-cock",
			"mythical mast",
			"segmented tool",
			"draconic dick",
			"draconic cock",
			"tapered dick",
			"unusual endowment",
			"scaly shaft"];
		l[CockTypesEnum.DISPLACER] = [
			"coerl cock",
			"tentacle-tipped phallus",
			"starfish-tipped shaft",
			"alien member",
			"almost-canine dick",
			"bizarre prick",
			"beastly cock",
			"cthulhu-tier cock",
			"coerl cock",
			"animal dong",
			"star-capped tool",
			"knotted erection"];
		l[CockTypesEnum.AVIAN]     = [
			"bird cock",
			"bird dick",
			"bird pecker",
			"avian cock",
			"avian dick",
			"avian penis",
			"avian prick",
			"avian pecker",
			"tapered cock",
			"tapered prick"];
		l[CockTypesEnum.PIG]       = [
			"pig cock",
			"pig dick",
			"pig penis",
			"pig-like cock",
			"pig-like dick",
			"swine cock",
			"swine penis",
			"corkscrew-tipped cock",
			"hoggish cock",
			"pink pig-cock",
			"pink pecker"];
		l[CockTypesEnum.RHINO]     = [
			"oblong cock",
			"oblong dick",
			"oblong prick",
			"rhino cock",
			"rhino dick",
			"rhino penis",
			"rhino pecker",
			"rhino prick",
			"bulged rhino cock",
			"bulged rhino dick"];
		l[CockTypesEnum.ECHIDNA]   = [
			"strange echidna dick",
			"strange echidna cock",
			"echidna dick",
			"echidna penis",
			"echidna cock",
			"exotic endowment",
			"four-headed prick",
			"four-headed penis",
			"four-headed cock",
			"four-headed dick"];
		let options                = l[cockType] || ["cock", "prick", "pecker", "shaft"];
		return randomChoice(...options);
	}

	export function cockAdjective(cockType: CockTypesEnum,
								  length: number,
								  girth: number,
								  lust: number       = 50,
								  cumQ: number       = 10,
								  isPierced: boolean = false,
								  hasSock: boolean   = false,
								  isGooey: boolean   = false): string {
		const options = ["length", "girth"];
		if (lust > 75) options.push("lust");
		if (isPierced) options.push("pierced");
		if (hasSock) options.push("sock");
		if (isGooey) options.push("goo");
		switch (randomChoice(options)) {
			case "lust":
				if (lust > 90) { //Uber horny like a baws!
					if (cumQ < 50) return randomChoice("throbbing", "pulsating"); //Weak as shit cum
					if (cumQ < 200) return randomChoice("dribbling", "leaking", "drooling"); //lots of cum? drippy.
					return randomChoice("very drippy", "pre-gushing", "cum-bubbling", "pre-slicked", "pre-drooling"); //Tons of cum
				}
				else {//A little less lusty, but still lusty.
					if (cumQ < 50) return randomChoice("turgid", "blood-engorged", "rock-hard", "stiff", "eager"); //Weak as shit cum
					if (cumQ < 200) return randomChoice("turgid", "blood-engorged", "rock-hard", "stiff", "eager", "fluid-beading", "slowly-oozing"); //A little drippy
					return randomChoice("dribbling", "drooling", "fluid-leaking", "leaking"); //uber drippy
				}
			case "pierced":
				return "pierced";
			case "sock":
				return randomChoice("sock-sheathed", "garment-wrapped", "smartly dressed", "cloth-shrouded", "fabric swaddled", "covered");
			case "goo":
				return randomChoice("goopey", "gooey", "slimy");
			case "girth":
				if (girth <= 0.75) return randomChoice("thin", "slender", "narrow");
				if (girth <= 1.2) return "ample";
				if (girth <= 1.4) return randomChoice("ample", "big");
				if (girth <= 2) return randomChoice("broad", "meaty", "girthy");
				if (girth <= 3.5) return randomChoice("fat", "distended", "wide");
				return randomChoice("inhumanly distended", "monstrously thick", "bloated");
			case "length":
			default:
				if (length < 3) return randomChoice("little", "toy-sized", "mini", "budding", "tiny");
				if (length < 5) return randomChoice("short", "small");
				if (length < 7) return randomChoice("fair-sized", "nice");
				if (length < 9) {
					if (cockType == CockTypesEnum.HORSE) return randomChoice("sizable", "pony-sized", "colt-like");
					return randomChoice("sizable", "long", "lengthy");
				}
				if (length < 13) {
					if (cockType == CockTypesEnum.DOG) return randomChoice("huge", "foot-long", "mastiff-like");
					return randomChoice("huge", "foot-long", "cucumber-length");
				}
				if (length < 18) return randomChoice("massive", "knee-length", "forearm-length");
				if (length < 30) return randomChoice("enormous", "giant", "arm-like");
				if (cockType == CockTypesEnum.TENTACLE && rand(2) == 0) return "coiled";
				return randomChoice("towering", "freakish", "monstrous", "massive")
		}
	}

	export function assholeDescript(i_creature: Creature, forceDesc: boolean = false): string {
		let description: string = "";

		// 66% Wetness Descript
		const ANAL_WETNESS_DESCRIPTORS                        = {};
		ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_DRY]            = "";
		ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_NORMAL]         = "";
		ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_MOIST]          = "moist ";
		ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_SLIMY]          = "slimy ";
		ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_DROOLING]       = "drooling ";
		ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_SLIME_DROOLING] = "slime-drooling ";

		if (forceDesc || rand(3) <= 1) {
			description += ANAL_WETNESS_DESCRIPTORS[i_creature.ass.analWetness] || "";
		}

		const ANAL_TIGHTNESS_DESCRIPTORS                     = {};
		ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_VIRGIN]    = "virgin ";
		ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_TIGHT]     = "tight ";
		ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_NORMAL]    = "loose ";
		ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_LOOSE]     = "roomy ";
		ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_STRETCHED] = "stretched ";
		ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_GAPING]    = "gaping ";

		//25% tightness description
		if (forceDesc || rand(4) == 0 || (i_creature.ass.analLooseness <= 1 && rand(4) <= 2)) {
			description += ANAL_TIGHTNESS_DESCRIPTORS[i_creature.ass.analLooseness] || "";
		}

		//asshole descript
		description += randomChoice("ass",
			"anus",
			"pucker",
			"backdoor",
			"asshole",
			"butthole");
		return description;
	}
}