///<reference path="appearanceDefs.ts"/>

namespace Appearance {
	export const DEFAULT_GENDER_NAMES                                = _.object([
		[GENDER_NONE, "genderless"],
		[GENDER_MALE, "male"],
		[GENDER_FEMALE, "female"],
		[GENDER_HERM, "hermaphrodite"]
	]) as Dictionary<string>;
	export const DEFAULT_SKIN_NAMES                                  = _.object([
		[SKIN_TYPE_PLAIN, "skin"],
		[SKIN_TYPE_FUR, "fur"],
		[SKIN_TYPE_LIZARD_SCALES, "scales"],
		[SKIN_TYPE_GOO, "goo"],
		[SKIN_TYPE_UNDEFINED, "undefined flesh"],
		[SKIN_TYPE_DRAGON_SCALES, "scales"],
		[SKIN_TYPE_FISH_SCALES, "scales"],
	]) as Dictionary<string>;
	export const DEFAULT_SKIN_DESCS                                  = _.object([
		[SKIN_TYPE_PLAIN, "skin"],
		[SKIN_TYPE_FUR, "fur"],
		[SKIN_TYPE_LIZARD_SCALES, "scales"],
		[SKIN_TYPE_GOO, "skin"],
		[SKIN_TYPE_UNDEFINED, "skin"],
		[SKIN_TYPE_DRAGON_SCALES, "scales"],
		[SKIN_TYPE_FISH_SCALES, "scales"],
	]) as Dictionary<string>;
	export const DEFAULT_HAIR_NAMES                                  = _.object([
		[HAIR_NORMAL, "normal"],
		[HAIR_FEATHER, "feather"],
		[HAIR_GHOST, "transparent"],
		[HAIR_GOO, "goopy"],
		[HAIR_ANEMONE, "tentacle"],
		[HAIR_QUILL, "quill"],
		[HAIR_BASILISK_SPINES, "spiny basilisk"],
		[HAIR_BASILISK_PLUME, "feathery plume"],
	]) as Dictionary<string>;
	export const DEFAULT_BEARD_NAMES                                 = _.object([
		[BEARD_NORMAL, "normal"],
		[BEARD_GOATEE, "goatee"],
		[BEARD_CLEANCUT, "clean-cut"],
		[BEARD_MOUNTAINMAN, "mountain-man"]
	]) as Dictionary<string>;
	export const DEFAULT_FACE_NAMES                                  = _.object([
		[FACE_HUMAN, "human"],
		[FACE_HORSE, "horse"],
		[FACE_DOG, "dog"],
		[FACE_COW_MINOTAUR, "cow"],
		[FACE_SHARK_TEETH, "shark"],
		[FACE_SNAKE_FANGS, "snake"],
		[FACE_CAT, "cat"],
		[FACE_LIZARD, "lizard"],
		[FACE_BUNNY, "bunny"],
		[FACE_KANGAROO, "kangaroo"],
		[FACE_SPIDER_FANGS, "spider"],
		[FACE_FOX, "fox"],
		[FACE_DRAGON, "dragon"],
		[FACE_RACCOON_MASK, "raccoon mask"],
		[FACE_RACCOON, "racoon"],
		[FACE_BUCKTEETH, "buckteeth"],
		[FACE_MOUSE, "mouse"],
		[FACE_FERRET_MASK, "ferret mask"],
		[FACE_FERRET, "ferret"],
		[FACE_PIG, "pig"],
		[FACE_BOAR, "boar"],
		[FACE_RHINO, "rhino"],
		[FACE_ECHIDNA, "echidna"],
		[FACE_DEER, "deer"]
	]) as Dictionary<string>;
	export const DEFAULT_TONGUE_NAMES                                = _.object([
		[TONGUE_HUMAN, "human"],
		[TONGUE_SNAKE, "serpentine"],
		[TONGUE_DEMONIC, "demonic"],
		[TONGUE_DRACONIC, "draconic"],
		[TONGUE_ECHIDNA, "echidna"],
		[TONGUE_LIZARD, "lizard"],
	]) as Dictionary<string>;
	export const DEFAULT_EYES_NAMES                                  = _.object([
		[EYES_HUMAN, "human"],
		[EYES_FOUR_SPIDER_EYES, "4 spider"],
		[EYES_BLACK_EYES_SAND_TRAP, "sandtrap black"],
		[EYES_LIZARD, "lizard"],
		[EYES_DRAGON, "dragon"],
		[EYES_BASILISK, "basilisk"],
	]) as Dictionary<string>;
	export const DEFAULT_EARS_NAMES                                  = _.object([
		[EARS_HUMAN, "human"],
		[EARS_HORSE, "horse"],
		[EARS_DOG, "dog"],
		[EARS_COW, "cow"],
		[EARS_ELFIN, "elfin"],
		[EARS_CAT, "cat"],
		[EARS_LIZARD, "lizard"],
		[EARS_BUNNY, "bunny"],
		[EARS_KANGAROO, "kangaroo"],
		[EARS_FOX, "fox"],
		[EARS_DRAGON, "dragon"],
		[EARS_RACCOON, "raccoon"],
		[EARS_MOUSE, "mouse"],
		[EARS_FERRET, "ferret"],
		[EARS_PIG, "pig"],
		[EARS_RHINO, "rhino"],
		[EARS_ECHIDNA, "echidna"],
		[EARS_DEER, "deer"]
	]) as Dictionary<string>;
	export const DEFAULT_HORNS_NAMES                                 = _.object([
		[HORNS_NONE, "non-existant"],
		[HORNS_DEMON, "demon"],
		[HORNS_COW_MINOTAUR, "cow"],
		[HORNS_DRACONIC_X2, "2 draconic"],
		[HORNS_DRACONIC_X4_12_INCH_LONG, "four 12\" long draconic"],
		[HORNS_ANTLERS, "deer"],
		[HORNS_GOAT, "goat"],
		[HORNS_RHINO, "rhino"]
	]) as Dictionary<string>;
	export const DEFAULT_ANTENNAE_NAMES                              = _.object([
		[ANTENNAE_NONE, "non-existant"],
		[ANTENNAE_BEE, "bee"]
	]) as Dictionary<string>;
	export const DEFAULT_ARM_NAMES                                   = _.object([
		[ARM_TYPE_HUMAN, "human"],
		[ARM_TYPE_HARPY, "harpy"],
		[ARM_TYPE_SPIDER, "spider"],
		[ARM_TYPE_PREDATOR, "predator"],
		[ARM_TYPE_SALAMANDER, "salamander"]
	]) as Dictionary<string>;
	export const DEFAULT_TAIL_NAMES                                  = _.object([
		[TAIL_TYPE_NONE, "non-existant"],
		[TAIL_TYPE_HORSE, "horse"],
		[TAIL_TYPE_DOG, "dog"],
		[TAIL_TYPE_DEMONIC, "demonic"],
		[TAIL_TYPE_COW, "cow"],
		[TAIL_TYPE_SPIDER_ADBOMEN, "spider abdomen"],
		[TAIL_TYPE_BEE_ABDOMEN, "bee abdomen"],
		[TAIL_TYPE_SHARK, "shark"],
		[TAIL_TYPE_CAT, "cat"],
		[TAIL_TYPE_LIZARD, "lizard"],
		[TAIL_TYPE_RABBIT, "rabbit"],
		[TAIL_TYPE_HARPY, "harpy"],
		[TAIL_TYPE_KANGAROO, "kangaroo"],
		[TAIL_TYPE_FOX, "fox"],
		[TAIL_TYPE_DRACONIC, "draconic"],
		[TAIL_TYPE_RACCOON, "raccoon"],
		[TAIL_TYPE_MOUSE, "mouse"],
		[TAIL_TYPE_BEHEMOTH, "behemoth"],
		[TAIL_TYPE_PIG, "pig"],
		[TAIL_TYPE_SCORPION, "scorpion"],
		[TAIL_TYPE_GOAT, "goat"],
		[TAIL_TYPE_RHINO, "rhino"],
		[TAIL_TYPE_ECHIDNA, "echidna"],
		[TAIL_TYPE_DEER, "deer"],
		[TAIL_TYPE_SALAMANDER, "salamander"]
	]) as Dictionary<string>;
	export const DEFAULT_WING_NAMES                                  = _.object([
		[WING_TYPE_NONE, "non-existant"],
		[WING_TYPE_BEE_LIKE_SMALL, "small bee-like"],
		[WING_TYPE_BEE_LIKE_LARGE, "large bee-like"],
		[WING_TYPE_HARPY, "harpy"],
		[WING_TYPE_IMP, "imp"],
		[WING_TYPE_IMP_LARGE, "large imp"],
		[WING_TYPE_BAT_LIKE_TINY, "tiny bat-like"],
		[WING_TYPE_BAT_LIKE_LARGE, "large bat-like"],
		[WING_TYPE_SHARK_FIN, "shark fin"],
		[WING_TYPE_FEATHERED_LARGE, "large feathered"],
		[WING_TYPE_DRACONIC_SMALL, "small draconic"],
		[WING_TYPE_DRACONIC_LARGE, "large draconic"],
		[WING_TYPE_GIANT_DRAGONFLY, "giant dragonfly"]
	]) as Dictionary<string>;
	export const DEFAULT_WING_DESCS                                  = _.object([
		[WING_TYPE_NONE, "non-existant"],
		[WING_TYPE_BEE_LIKE_SMALL, "small bee-like"],
		[WING_TYPE_BEE_LIKE_LARGE, "large bee-like"],
		[WING_TYPE_HARPY, "large feathery"],
		[WING_TYPE_IMP, "small"],
		[WING_TYPE_IMP_LARGE, "large"],
		[WING_TYPE_BAT_LIKE_TINY, "tiny, bat-like"],
		[WING_TYPE_BAT_LIKE_LARGE, "large, bat-like"],
		[WING_TYPE_SHARK_FIN, ""],
		[WING_TYPE_FEATHERED_LARGE, "large, feathered"],
		[WING_TYPE_DRACONIC_SMALL, "small, draconic"],
		[WING_TYPE_DRACONIC_LARGE, "large, draconic"],
		[WING_TYPE_GIANT_DRAGONFLY, "giant dragonfly"]
	]) as Dictionary<string>;
	export const DEFAULT_LOWER_BODY_NAMES                            = _.object([
		[LOWER_BODY_TYPE_HUMAN, "human"],
		[LOWER_BODY_TYPE_HOOFED, "hoofed"],
		[LOWER_BODY_TYPE_DOG, "dog"],
		[LOWER_BODY_TYPE_NAGA, "naga"],
		[LOWER_BODY_TYPE_CENTAUR, "centaur"],
		[LOWER_BODY_TYPE_DEMONIC_HIGH_HEELS, "demonic high-heels"],
		[LOWER_BODY_TYPE_DEMONIC_CLAWS, "demonic claws"],
		[LOWER_BODY_TYPE_BEE, "bee"],
		[LOWER_BODY_TYPE_GOO, "goo"],
		[LOWER_BODY_TYPE_CAT, "cat"],
		[LOWER_BODY_TYPE_LIZARD, "lizard"],
		[LOWER_BODY_TYPE_PONY, "pony"],
		[LOWER_BODY_TYPE_BUNNY, "bunny"],
		[LOWER_BODY_TYPE_HARPY, "harpy"],
		[LOWER_BODY_TYPE_KANGAROO, "kangaroo"],
		[LOWER_BODY_TYPE_CHITINOUS_SPIDER_LEGS, "chitinous spider legs"],
		[LOWER_BODY_TYPE_DRIDER_LOWER_BODY, "drider"],
		[LOWER_BODY_TYPE_FOX, "fox"],
		[LOWER_BODY_TYPE_DRAGON, "dragon"],
		[LOWER_BODY_TYPE_RACCOON, "raccoon"],
		[LOWER_BODY_TYPE_FERRET, "ferret"],
		[LOWER_BODY_TYPE_CLOVEN_HOOFED, "cloven-hoofed"],
		[LOWER_BODY_TYPE_ECHIDNA, "echidna"],
		[LOWER_BODY_TYPE_ECHIDNA, "deertaur"],
		[LOWER_BODY_TYPE_SALAMANDER, "salamander"]
	]) as Dictionary<string>;
	export const DEFAULT_PIERCING_NAMES                              = _.object([
		[PIERCING_TYPE_NONE, "none"],
		[PIERCING_TYPE_STUD, "stud"],
		[PIERCING_TYPE_RING, "ring"],
		[PIERCING_TYPE_LADDER, "ladder"],
		[PIERCING_TYPE_HOOP, "hoop"],
		[PIERCING_TYPE_CHAIN, "chain"]
	]) as Dictionary<string>;
	export const DEFAULT_VAGINA_TYPE_NAMES                           = _.object([
		[VAGINA_TYPE_HUMAN, "human"],
		[VAGINA_TYPE_EQUINE, "equine"],
		[VAGINA_TYPE_BLACK_SAND_TRAP, "black sandtrap"]
	]) as Dictionary<string>;
	export const DEFAULT_VAGINA_WETNESS_SCALES: [number, string][]   = [
		[VAGINA_WETNESS_DRY, "dry"],
		[VAGINA_WETNESS_NORMAL, "normal"],
		[VAGINA_WETNESS_WET, "wet"],
		[VAGINA_WETNESS_SLICK, "slick"],
		[VAGINA_WETNESS_DROOLING, "drooling"],
		[VAGINA_WETNESS_SLAVERING, "slavering"],
	];
	export const DEFAULT_VAGINA_LOOSENESS_SCALES: [number, string][] = [
		[VAGINA_LOOSENESS_TIGHT, "tight"],
		[VAGINA_LOOSENESS_NORMAL, "normal"],
		[VAGINA_LOOSENESS_LOOSE, "loose"],
		[VAGINA_LOOSENESS_GAPING, "gaping"],
		[VAGINA_LOOSENESS_GAPING_WIDE, "gaping wide"],
		[VAGINA_LOOSENESS_LEVEL_CLOWN_CAR, "clown-car level"]
	];
	export const DEFAULT_ANAL_WETNESS_SCALES: [number, string][]     = [
		[ANAL_WETNESS_DRY, "dry"],
		[ANAL_WETNESS_NORMAL, "normal"],
		[ANAL_WETNESS_MOIST, "moist"],
		[ANAL_WETNESS_SLIMY, "slimym"],
		[ANAL_WETNESS_DROOLING, "drooling"],
		[ANAL_WETNESS_SLIME_DROOLING, "slime-drooling"],
	];
	export const DEFAULT_ANAL_LOOSENESS_SCALES: [number, string][]   = [
		[ANAL_LOOSENESS_VIRGIN, "virgin"],
		[ANAL_LOOSENESS_TIGHT, "tight"],
		[ANAL_LOOSENESS_NORMAL, "normal"],
		[ANAL_LOOSENESS_LOOSE, "loose"],
		[ANAL_LOOSENESS_STRETCHED, "stretched"],
		[ANAL_LOOSENESS_GAPING, "gaping"]
	];
	export const DEFAULT_HIP_RATING_SCALES: [number, string][]       = [
		[HIP_RATING_BOYISH, "boyish"],
		[HIP_RATING_SLENDER, "slender"],
		[HIP_RATING_AVERAGE, "average"],
		[HIP_RATING_AMPLE, "ample"],
		[HIP_RATING_CURVY, "curvy"],
		[HIP_RATING_FERTILE, "fertile"],
		[HIP_RATING_INHUMANLY_WIDE, "inhumanly wide"]
	];
	export const DEFAULT_BUTT_RATING_SCALES: [number, string][]      = [
		[BUTT_RATING_BUTTLESS, "buttless"],
		[BUTT_RATING_TIGHT, "tight"],
		[BUTT_RATING_AVERAGE, "average"],
		[BUTT_RATING_NOTICEABLE, "noticeable"],
		[BUTT_RATING_LARGE, "large"],
		[BUTT_RATING_JIGGLY, "jiggly"],
		[BUTT_RATING_EXPANSIVE, "expansive"],
		[BUTT_RATING_HUGE, "huge"],
		[BUTT_RATING_INCONCEIVABLY_BIG, "inconceivably big"]
	];

	export function cockDescript(creature: Creature, cockIndex: number = 0): string {
		if (creature.cocks.length == 0) return Parser.errstr("cockDescript Called But No Cock Present");
		let cockType: CockTypesEnum = CockTypesEnum.HUMAN;
		if (cockIndex != 99) { //CockIndex 99 forces a human cock description
			if (creature.cocks.length <= cockIndex) return Parser.errstr("ERROR: cockDescript called with index of " + cockIndex + " - out of BOUNDS");
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

	export function biggestBreastSizeDescript(creature: Creature): string {
		let choice: number;
		let descript: string = "";
		let row              = creature.breastRows[creature.biggestTitRow()];
		if (row.breastRating < 1) return "flat breasts";
		//50% of the time size-descript them
		if (rand(2) == 0) descript += breastSize(row.breastRating);
		//Nouns!
		choice = rand(10);
		switch (choice) {
			case 0:
				descript += "breasts";
				break;

			case 1:
				if (row.lactationMultiplier > 2) descript += "milk-udders";
				else descript += "breasts";

				break;

			case 2:
				if (row.lactationMultiplier > 1.5) descript += "milky ";
				if (row.breastRating > 4) descript += "tits";
				else descript += "breasts";

				break;

			case 3:
				//if (creature.breastRows[temp142].breastRating > 6) descript += "rack";
				descript += "breasts";

				break;

			case 4:
				descript += "tits";
				break;

			case 5:
				descript += "tits";
				break;

			case 6:
				descript += "tits";
				break;

			case 7:
				if (row.lactationMultiplier >= 1 && row.lactationMultiplier < 2.5) descript += "milk jugs";
				if (row.lactationMultiplier >= 2.5) descript += "udders";
				if (row.lactationMultiplier < 1) descript += "jugs";

				break;

			case 8:
				if (row.breastRating > 6) descript += "love-pillows";
				else descript += "boobs";

				break;

			case 9:
				if (row.breastRating > 6) descript += "tits";
				else descript += "breasts";

				break;
		}
		return descript;
	}

	export function breastSize(val: number): string {
		let descript: string = "";
		//Catch all for dudes.
		if (val < 1) return "manly ";
		if (val <= 2) {
			//Small - A->B
			descript += randomChoice("palmable ", "tight ", "perky ", "baseball-sized ");
		} else if (val <= 4) {
			//C-D
			descript += randomChoice("nice ", "hand-filling ", "well-rounded ", "supple ", "softball-sized ");
		} else if (val < 11) {
			//DD->big EE
			descript += randomChoice("big ", "large ", "pillowy ", "jiggly ", "volleyball-sized ");
		} else if (val < 15) {
			//F->big FF
			descript += randomChoice("soccerball-sized ", "hand-overflowing ", "generous ", "jiggling ");
		} else if (val < 24) {
			//G -> HHH
			descript += randomChoice("basketball-sized ", "whorish ", "cushiony ", "wobbling ");
		} else if (val < 35) {
			//I -> KK
			descript += randomChoice("massive motherly ", "luscious ", "smothering ", "prodigious ");
		} else if (val < 100) {
			//K- > MMM+
			descript += randomChoice("mountainous ", "monumental ", "back-breaking ", "exercise-ball-sized ", "immense ");
		} else {
			//Hyper sizes
			descript += randomChoice("ludicrously-sized ", "hideously large ", "absurdly large ", "back-breaking ", "colossal ", "immense ");
		}
		return descript;
	}

	export function allBreastsDescript(creature: Creature): string {
		let storage: string = "";
		if (creature.breastRows.length == 0) return "unremarkable chest muscles ";
		if (creature.breastRows.length == 2) {
			//if (creature.totalBreasts() == 4) storage += "quartet of ";
			storage += "two rows of ";
		} else if (creature.breastRows.length == 3) {
			if (rand(2) == 0) storage += "three rows of ";
			else storage += "multi-layered ";
		}
		if (creature.breastRows.length == 4) {
			if (rand(2) == 0) storage += "four rows of ";
			else storage += "four-tiered ";
		}
		if (creature.breastRows.length == 5) {
			if (rand(2) == 0) storage += "five rows of ";
			else storage += "five-tiered ";
		}
		storage += biggestBreastSizeDescript(creature);
		return storage;

	}

	export function breastDescript(size: number, lactation: number = 0): string {
		if (size < 1) return "flat breasts";
		let descript: string = (rand(2) == 0 ? Appearance.breastSize(size) : ""); //Add a description of the breast size 50% of the time
		switch (rand(10)) {
			case 1:
				if (lactation > 2) return descript + "milk-udders";
				break;
			case 2:
				if (lactation > 1.5) descript += "milky ";
				if (size > 4) return descript + "tits";
				break;
			case 4:
			case 5:
			case 6:
				return descript + "tits";
			case 7:
				if (lactation >= 2.5) return descript + "udders";
				if (lactation >= 1) descript += "milk ";
				return descript + "jugs";
			case 8:
				if (size > 6) return descript + "love-pillows";
				return descript + "boobs";
			case 9:
				if (size > 6) return descript + "tits";
		}
		return descript + "breasts";
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

	export function tongueDescript(i_creature: Creature): string {
		if (i_creature.tongueType == TONGUE_HUMAN || !DEFAULT_TONGUE_NAMES[i_creature.tongueType]) return "tongue";
		return DEFAULT_TONGUE_NAMES[i_creature.tongueType] + " tongue";
	}

	export function vaginaDescript(i_creature: Creature,
								   i_vaginaIndex: number = 0,
								   forceDesc: boolean    = false): string {
		if (i_vaginaIndex > (i_creature.vaginas.length - 1) || i_vaginaIndex < 0) {
			return Parser.errstr("Invalid vagina number (" + i_vaginaIndex + ") passed to vaginaDescript()");
		}

		let description       = "";
		let weighting         = 0;
		let options: string[] = [];

		//Very confusing way to display values.
		let vagina = i_creature.vaginas[i_vaginaIndex];
		if (vagina.vaginalLooseness == 0) weighting = 61;
		if (vagina.vaginalLooseness == 4 || vagina.vaginalLooseness == 5) weighting = 10;

		//tightness descript - 40% display rate
		if (forceDesc || rand(100) + weighting > 60) {
			if (vagina.vaginalLooseness == 0) {
				if (vagina.virgin) description += "virgin";
				else description += "tight";
			}
			if (vagina.vaginalLooseness == 2) description += "loose";
			if (vagina.vaginalLooseness == 3) description += "very loose";
			if (vagina.vaginalLooseness == 4) description += "gaping";
			if (vagina.vaginalLooseness == 5) description += "gaping-wide";

		}
		//wetness descript - 30% display rate
		if (forceDesc || rand(100) + weighting > 70) {
			if (description != "") description += ", ";
			if (vagina.vaginalWetness == 0) description += "dry";
			if (vagina.vaginalWetness == 1) description += "moist";
			if (vagina.vaginalWetness == 2) description += "wet";
			if (vagina.vaginalWetness == 3) description += "slick";
			if (vagina.vaginalWetness == 4) description += "drooling";
			if (vagina.vaginalWetness == 5) description += "slavering";
		}
		if (vagina.labiaPierced > 0 && (forceDesc || rand(3) == 0)) {
			if (description != "") description += ", ";
			description += "pierced";
		}
		if (description == "" && i_creature.hasGooSkin()) {
			if (description != "") description = description + ", ";
			if (rand(2) == 0) description += "gooey";
			else description += "slimy";
		}
		if (i_creature.vaginaType() == 5 && (forceDesc || Math.floor(Math.random() * 2) == 0)) {
			if (description != "") description += ", ";
			description += randomChoice("black",
				"onyx",
				"ebony",
				"dusky",
				"sable",
				"obsidian",
				"midnight-hued",
				"jet black");
		}

		if (description != "")
			description += " ";

		if (kGAMECLASS.flags[kFLAGS.SFW_MODE] > 0) {
			options = ["vagina",
				"pussy",
				"cooter",
				"snatch",
				"muff"];
		} else {
			options = ["vagina",
				"pussy",
				"cooter",
				"twat",
				"cunt",
				"snatch",
				"fuck-hole",
				"muff"];
		}
		description += randomChoice(options);
		//Something that would be nice to have but needs a variable in Creature or Character.
		//if (i_creature.bunnyScore() >= 3) description += "rabbit hole";
		return description;
	}

	export function hairDescription(i_creature: Creature): string {
		let description: string = "";
		let options: string[]   = [];
		//
		// LENGTH ADJECTIVE!
		//
		if (i_creature.hairLength == 0)
			return randomChoice(["shaved", "bald", "smooth", "hairless", "glabrous"]) + " head";

		if (i_creature.hairLength < 1)
			description += randomChoice(["close-cropped, ", "trim, ", "very short, "]);
		else if (i_creature.hairLength < 3)
			description += "short, ";
		else if (i_creature.hairLength < 6)
			description += "shaggy, ";
		else if (i_creature.hairLength < 10)
			description += "moderately long, ";
		else if (i_creature.hairLength < 16)
			description += randomChoice(["long, ", "shoulder-length, "]);
		else if (i_creature.hairLength < 26)
			description += randomChoice(["very long, ", "flowing locks of "]);
		else if (i_creature.hairLength < 40)
			description += "ass-length, ";
		else if (i_creature.hairLength < i_creature.tallness)
			description += "obscenely long, ";
		else // if (i_creature.hairLength >= i_creature.tallness)
			description += randomChoice(["floor-length, ", "floor-dragging, "]);
		//
		// COLORS
		//
		description += i_creature.hairColor + " ";
		//
		// HAIR WORDS
		//
		switch (i_creature.hairType) {
			case HAIR_BASILISK_SPINES:
				options = [
					"rubbery spines",
					"spiny crown",
					"basilisk spines",
					"reptilian spines",
				];
				return description + randomChoice(options);
			case HAIR_BASILISK_PLUME:
				options = [
					"feathered hair",
					"fluffy plume",
					"basilisk plume",
					"shock of feathers",
				];
				return description + randomChoice(options);
		}
		// TODO: Fix the spaghetti-code below to use a switch-case-return and it'll be
		// case HAIR_GOO: return description + "goo-mane";
		// and so on. (Stadler76)
		//If furry and longish hair sometimes call it a mane (50%)
		if (i_creature.hasFur() && i_creature.hairLength > 3 && rand(2) == 0) {
			if (i_creature.hairType == HAIR_FEATHER) description += "feather-";
			else if (i_creature.hairType == HAIR_GHOST) description += "transparent ";
			else if (i_creature.hairType == HAIR_GOO) description += "goo-";
			else if (i_creature.hairType == HAIR_ANEMONE) description += "tentacle-";
			else if (i_creature.hairType == HAIR_QUILL) description += "quill-";
			description += "mane";
			return description;
		}
		//if medium length refer to as locks sometimes
		//CUT - locks is plural and screws up tense.
		/*if (creature.hairLength >= 3 && creature.hairLength < 16 && rand(2) == 0) {
		 descript += "locks of hair";
		 return descript;
		 }*/
		//If nothing else used, use hair!
		if (i_creature.hairType == HAIR_FEATHER) description += "feather-";
		else if (i_creature.hairType == HAIR_GHOST) description += "transparent ";
		else if (i_creature.hairType == HAIR_GOO) description += "goo-";
		else if (i_creature.hairType == HAIR_ANEMONE) description += "tentacle-";
		else if (i_creature.hairType == HAIR_QUILL) description += "quill-";
		description += "hair";

		return description;
	}

	export function wingsDescript(i_creature: Creature): string {
		return DEFAULT_WING_NAMES[i_creature.wingType] + " wings";
	}

	export function tailDescript(i_creature: Creature): string {
		if (i_creature.tailType == TAIL_TYPE_NONE) {
			trace("WARNING: Creature has no tails to describe.");
			return "<b>!Creature has no tails to describe!</b>";
		}

		let descript: string = "";

		if (i_creature.tailType == TAIL_TYPE_FOX && i_creature.tailVenom >= 1) {
			// Kitsune tails, we're using tailVenom to track tail count
			if (i_creature.tailVenom > 1) {
				if (i_creature.tailVenom == 2) descript += "pair ";
				else if (i_creature.tailVenom == 3) descript += "trio ";
				else if (i_creature.tailVenom == 4) descript += "quartet ";
				else if (i_creature.tailVenom == 5) descript += "quintet ";
				else if (i_creature.tailVenom > 5) descript += "bundle ";

				descript += "of kitsune tails";
			}
			else descript += "kitsune tail";
		}
		else {
			descript += DEFAULT_TAIL_NAMES[i_creature.tailType];
			descript += " tail";
		}

		return descript;
	}

	export function oneTailDescript(i_creature: Creature): string {
		if (i_creature.tailType == TAIL_TYPE_NONE) {
			trace("WARNING: Creature has no tails to describe.");
			return "<b>!Creature has no tails to describe!</b>";
		}

		let descript: string = "";

		if (i_creature.tailType == TAIL_TYPE_FOX && i_creature.tailVenom >= 1) {
			if (i_creature.tailVenom == 1) {
				descript += "your kitsune tail";
			}
			else {
				descript += "one of your kitsune tails";
			}
		}
		else {
			descript += "your " + DEFAULT_TAIL_NAMES[i_creature.tailType] + " tail";
		}

		return descript;
	}

	export function buttDescription(i_creature: Creature): string {
		let description: string = "";
		if (i_creature.buttRating <= 1) {
			description += randomChoice("insignificant ",
				"very small ");
		} else if (i_creature.buttRating > 1 && i_creature.buttRating < 4) {
			description += randomChoice("tight ",
				"firm ",
				"compact ");
		} else if (i_creature.buttRating >= 4 && i_creature.buttRating < 6) {
			description += randomChoice("regular ",
				"unremarkable ");
		} else if (i_creature.buttRating >= 6 && i_creature.buttRating < 8) {
			if (rand(3) == 0) return "handful of ass";
			description += randomChoice("full ",
				"shapely ");
		} else if (i_creature.buttRating >= 8 && i_creature.buttRating < 10) {
			description += randomChoice("squeezable ",
				"large ",
				"substantial ");
		} else if (i_creature.buttRating >= 10 && i_creature.buttRating < 13) {
			description += randomChoice("jiggling ",
				"spacious ",
				"heavy ");
		} else if (i_creature.buttRating >= 13 && i_creature.buttRating < 16) {
			if (rand(3) == 0) return "generous amount of ass";
			description += randomChoice("expansive ",
				"voluminous ");
		} else if (i_creature.buttRating >= 16 && i_creature.buttRating < 20) {
			if (rand(3) == 2) return "jiggling expanse of ass";
			description += randomChoice("huge ",
				"vast ");
		} else if (i_creature.buttRating >= 20) {
			description += randomChoice("ginormous ",
				"colossal ",
				"tremendous ");
		}
		description += randomChoice("butt ", "ass ");
		if (rand(2) == 0) description += "cheeks";
		return description;
	}

	export function eyesDescript(i_creature: Creature): string {
		return DEFAULT_EYES_NAMES[i_creature.eyeType] + " eyes";
	}

	export function hipDescription(i_character: Creature): string {
		let description: string = "";
		let hipRating           = i_character.hipRating;
		if (hipRating <= 1) {
			description = randomChoice("tiny ",
				"narrow ",
				"boyish ");
		} else if (hipRating > 1 && hipRating < 4) {
			description = randomChoice("slender ",
				"narrow ",
				"thin ");
			if (i_character.thickness < 30) {
				if (rand(2) == 0) description = "slightly-flared ";
				else description = "curved ";
			}
		} else if (hipRating >= 4 && hipRating < 6) {
			description = randomChoice("well-formed ",
				"pleasant ");
			if (i_character.thickness < 30) {
				if (rand(2) == 0) description = "flared ";
				else description = "curvy ";
			}
		}
		else if (hipRating >= 6 && hipRating < 10) {
			description = randomChoice("ample ",
				"noticeable ",
				"girly ");
			if (i_character.thickness < 30) {
				if (rand(2) == 0) description = "flared ";
				else description = "waspish ";
			}
		}
		else if (hipRating >= 10 && hipRating < 15) {
			description = randomChoice("flared ",
				"curvy ",
				"wide ");
			if (i_character.thickness < 30) {
				if (rand(2) == 0) description = "flared ";
				else description = "waspish ";
			}
		}
		else if (hipRating >= 15 && hipRating < 20) {
			if (i_character.thickness < 40) {
				if (rand(2) == 0) description = "flared, ";
				else description = "waspish, ";
			}
			description += randomChoice("fertile ",
				"child-bearing ",
				"voluptuous ");
		}
		else if (hipRating >= 20) {
			if (i_character.thickness < 40) {
				if (rand(2) == 0) description = "flaring, ";
				else description = "incredibly waspish, ";
			}
			description += randomChoice("broodmother-sized ",
				"cow-like ",
				"inhumanly-wide ");
		}
		//Taurs
		if (i_character.isTaur() && rand(3) == 0) description += "flanks";
		//Nagas have sides, right?
		else if (i_character.isNaga() && rand(3) == 0) description += "sides";
		else {
			//Non taurs or taurs who didn't roll flanks
			description += randomChoice("hips",
				"thighs");
		}

		return description;
	}

	export function nippleDescription(i_creature: Creature, i_rowNum: number = 0): string {
		//DEBUG SHIT!
		if (i_rowNum > (i_creature.breastRows.length - 1) || i_rowNum < 0) {
			return Parser.errstr("Error: Invalid breastRows (" + i_rowNum + ") passed to nippleDescription()");
		}
		let haveDescription: boolean = false;
		let description: string      = "";
		//Size descriptors 33% chance
		let nippleLength             = i_creature.nippleLength;
		if (rand(4) == 0) {
			//TINAHHHH
			if (nippleLength < .25) {
				description += randomChoice("tiny ",
					"itty-bitty ",
					"teeny-tiny ",
					"dainty ");
			} else if (nippleLength >= .4 && nippleLength < 1) {
				//Prominant
				description += randomChoice("prominent ",
					"pencil eraser-sized ",
					"eye-catching ",
					"pronounced ",
					"striking ");
			} else if (nippleLength >= 1 && nippleLength < 2) {
				//Big 'uns
				description += randomChoice("forwards-jutting ",
					"over-sized ",
					"fleshy ",
					"large protruding ");
			} else if (nippleLength >= 2 && nippleLength < 3.2) {
				//'Uge
				description += randomChoice("elongated ",
					"massive ",
					"awkward ",
					"lavish ",
					"hefty ");
			} else if (nippleLength >= 3.2) {
				//Massive
				description += randomChoice("bulky ",
					"ponderous ",
					"thumb-sized ",
					"cock-sized ",
					"cow-like ");
			}
			haveDescription = true;
		}
		//Milkiness/Arousal/Wetness Descriptors 33% of the time
		if (rand(3) == 0 && !haveDescription) {
			//Fuckable chance first!
			if (i_creature.hasFuckableNipples()) {
				//Fuckable and lactating?
				if (i_creature.biggestLactation() > 1) {
					description += randomChoice("milk-lubricated ",
						"lactating ",
						"lactating ",
						"milk-slicked ",
						"milky ");
				}
				//Just fuckable
				else {
					description += randomChoice("wet ",
						"mutated ",
						"slimy ",
						"damp ",
						"moist ",
						"slippery ",
						"oozing ",
						"sloppy ",
						"dewy ");
				}
				haveDescription = true;
			}
			//Just lactating!
			else if (i_creature.biggestLactation() > 0) {
				//Light lactation
				if (i_creature.biggestLactation() <= 1) {
					description += randomChoice("milk moistened ",
						"slightly lactating ",
						"milk-dampened ");
				}
				//Moderate lactation
				if (i_creature.biggestLactation() > 1 && i_creature.biggestLactation() <= 2) {
					description += randomChoice("lactating ",
						"milky ",
						"milk-seeping ");
				}
				//Heavy lactation
				if (i_creature.biggestLactation() > 2) {
					description += randomChoice("dripping ",
						"dribbling ",
						"milk-leaking ",
						"drooling ");
				}
				haveDescription = true;
			}
		}
		//Possible arousal descriptors
		else if (rand(3) == 0 && !haveDescription) {
			if (i_creature.lust > 50 && i_creature.lust < 75) {
				description += randomChoice("erect ",
					"perky ",
					"erect ",
					"firm ",
					"tender ");
				haveDescription = true;
			}
			if (i_creature.lust >= 75) {
				description += randomChoice("throbbing ",
					"trembling ",
					"needy ",
					"throbbing ");
				haveDescription = true;
			}
		}
		if (!haveDescription && rand(2) == 0 && i_creature.nipplesPierced > 0 && i_rowNum == 0) {
			if (i_creature.nipplesPierced == 5) description += "chained ";
			else description += "pierced ";
			haveDescription = true;
		}
		if (!haveDescription && i_creature.hasGooSkin()) {
			description += randomChoice("slime-slick ",
				"goopy ",
				"slippery ");
		}
		if (!haveDescription && i_creature.hasStatusEffect("BlackNipples")) {
			description += randomChoice("black ",
				"ebony ",
				"sable ");
		}

		//Nounsssssssss*BOOM*
		switch (rand(5)) {
			case 0:
				description += "nipple";
				break;

			case 1:
				if (nippleLength < .5) description += "perky nipple";
				else description += "cherry-like nub";

				break;

			case 2:
				if (i_creature.hasFuckableNipples()) description += "fuckable nip";
				else {
					if (i_creature.biggestLactation() >= 1 && nippleLength >= 1) description += "teat";
					else description += "nipple";
				}

				break;

			case 3:
				if (i_creature.hasFuckableNipples()) description += "nipple-hole";
				else {
					if (i_creature.biggestLactation() >= 1 && nippleLength >= 1) description += "teat";
					else description += "nipple";
				}

				break;

			case 4:
				if (i_creature.hasFuckableNipples()) description += "nipple-cunt";
				else description += "nipple";

				break;
		}
		return description;
	}

	export function ballsDescription(i_forcedSize: boolean,
									 i_plural: boolean,
									 i_creature: Creature,
									 i_withArticle: boolean = false): string {
		if (i_creature.balls == 0) return "prostate";


		let description: string = "";
		let options: string[];

		if (i_plural && (!i_creature.hasStatusEffect("Uniball"))) {
			if (i_creature.balls == 1) {
				if (i_withArticle) {
					options = ["a single",
						"a solitary",
						"a lone",
						"an individual"];
				}
				else {
					options = ["single",
						"solitary",
						"lone",
						"individual"];
				}
				description += randomChoice(options);
			}
			else if (i_creature.balls == 2) {
				if (i_withArticle) {
					options = ["a pair of",
						"two",
						"a duo of"];
				}
				else {
					options = ["pair of",
						"two",
						"duo of"];
				}
				description += randomChoice(options);
			}
			else if (i_creature.balls == 3) {
				options = ["three",
					"triple"];
				(i_withArticle) ? options.push("a trio of") : options.push("trio of");
				description += randomChoice(options);
			}
			else if (i_creature.balls == 4) {
				options = ["four",
					"quadruple"];
				(i_withArticle) ? options.push("a quartette of") : options.push("quartette of");
				description += randomChoice(options);
			}
			else {
				if (i_withArticle) {
					options = ["a multitude of",
						"many",
						"a large handful of"];
				}
				else {
					options = ["multitude of",
						"many",
						"large handful of"];
				}
				description += randomChoice(options);
			}
		}
		//size!
		if (i_creature.ballSize > 1 && (rand(3) <= 1 || i_forcedSize)) {
			if (description) description += " ";

			if (i_creature.ballSize >= 18)
				description += "hideously swollen and oversized";
			else if (i_creature.ballSize >= 15)
				description += "beachball-sized";
			else if (i_creature.ballSize >= 12)
				description += "watermelon-sized";
			else if (i_creature.ballSize >= 9)
				description += "basketball-sized";
			else if (i_creature.ballSize >= 7)
				description += "soccerball-sized";
			else if (i_creature.ballSize >= 5)
				description += "cantaloupe-sized";
			else if (i_creature.ballSize >= 4)
				description += "grapefruit-sized";
			else if (i_creature.ballSize >= 3)
				description += "apple-sized";
			else if (i_creature.ballSize >= 2)
				description += "baseball-sized";
			else if (i_creature.ballSize > 1)
				description += "large";

		}
		//UNIBALL
		if (i_creature.hasStatusEffect("Uniball")) {
			if (description) description += " ";
			options = ["tightly-compressed",
				"snug",
				"cute",
				"pleasantly squeezed",
				"compressed-together"];
			description += randomChoice(options);

		}
		//Descriptive
		if (i_creature.hoursSinceCum >= 48 && rand(2) == 0 && !i_forcedSize) {
			if (description) description += " ";
			options = ["overflowing",
				"swollen",
				"cum-engorged"];
			description += randomChoice(options);

		}
		//lusty
		if (i_creature.lust > 90 && (description == "") && rand(2) == 0 && !i_forcedSize) {
			options = ["eager",
				"full",
				"needy",
				"desperate",
				"throbbing",
				"heated",
				"trembling",
				"quivering",
				"quaking"];
			description += randomChoice(options);

		}
		//Slimy skin
		if (i_creature.hasGooSkin()) {
			if (description) description += " ";
			options = ["goopey",
				"gooey",
				"slimy"];
			description += randomChoice(options);

		}
		if (description) description += " ";

		options = ["nut",
			"gonad",
			"teste",
			"testicle",
			"testicle",
			"ball",
			"ball",
			"ball"];

		// I don't know how this was ever supposed to work.
		//if (i_creature.balls == 4 && i_plural) options.push("quads", "quads", "quads");

		description += randomChoice(options);
		if (i_plural) description += "s";

		if (i_creature.hasStatusEffect("Uniball") && rand(2) == 0) {
			if (rand(3) == 0)
				description += " merged into a cute, spherical package";
			else if (rand(2) == 0)
				description += " combined into a round, girlish shape";
			else
				description += " squeezed together into a perky, rounded form";
		}
		return description;
	}

	export function hairOrFur(creature: Creature): string {
		return creature.hasFur() ? "fur" : "hair";
	}

	export function sackDescript(i_creature: Creature): string {
		if (i_creature.balls == 0) return "prostate";

		let options: string[];
		let description: string = "";

		options = ["scrotum",
			"sack",
			"nutsack",
			"ballsack",
			"beanbag",
			"pouch"];

		description += randomChoice(options);

		return description;
	}

	export function clitDescription(i_creature: Creature): string {
		let description: string      = "";
		let options: string[];
		let haveDescription: boolean = false;
		//Length Adjective - 50% chance
		if (rand(2) == 0) {
			//small clits!
			let clitLength = i_creature.vaginas[0].clitLength;
			if (clitLength <= .5) {
				options = ["tiny ",
					"little ",
					"petite ",
					"diminutive ",
					"miniature "];
				description += randomChoice(options);
			}
			//"average".
			if (clitLength > .5 && clitLength < 1.5) {
				//no size comment
			}
			//Biggies!
			if (clitLength >= 1.5 && clitLength < 4) {
				options = ["large ",
					"large ",
					"substantial ",
					"substantial ",
					"considerable "];
				description += randomChoice(options);
			}
			//'Uge
			if (clitLength >= 4) {
				options = ["monster ",
					"tremendous ",
					"colossal ",
					"enormous ",
					"bulky "];
				description += randomChoice(options);
			}
		}
		//Descriptive descriptions - 50% chance of being called
		if (rand(2) == 0) {
			//Doggie descriptors - 50%
			//TODO Conditionals don't make sense, need to introduce a class variable to keep of "something" or move race or Creature/Character
			/*if (i_creature.hasFur() > 2 && !haveDescription && rand(2) == 0) {
			 description += "bitch-";
			 haveDescription = true;
			 }*/
			/*Horse descriptors - 50%
			 if (creature.hasFur() > 2 && !descripted && rand(2) == 0) {
			 descripted = true;
			 descript += "mare-";
			 }*/
			//Horny descriptors - 75% chance
			if (i_creature.lust > 70 && rand(4) < 3 && !haveDescription) {
				options         = ["throbbing ",
					"pulsating ",
					"hard "];
				description += randomChoice(options);
				haveDescription = true;
			}
			//High libido - always use if no other descript
			if (i_creature.lib > 50 && rand(2) == 0 && !haveDescription) {
				options         = ["insatiable ",
					"greedy ",
					"demanding ",
					"rapacious"];
				description += randomChoice(options);
				haveDescription = true;
			}
		}
		if (i_creature.hasVagina()) {
			if (!haveDescription && i_creature.vaginas[0].clitPierced > 0) {
				description += "pierced ";
			}
		}
		else {
			return Parser.errstr("clitDescript with no clit");
		}

		//Clit nouns
		options = ["clit",
			"clitty",
			"button",
			"pleasure-buzzer",
			"clit",
			"clitty",
			"button",
			"clit",
			"clit",
			"button"];
		if (kGAMECLASS.flags[kFLAGS.SFW_MODE] > 0) {
			options = ["bump", "button"];
		}
		description += randomChoice(options);

		return description;
	}

	export function multiCockDescriptLight(creature: Creature): string {
		if (creature.cocks.length < 1) {
			return Parser.errstr("multiCockDescriptLight() called with no penises present.");

		}
		//Get cock counts
		let descript: string         = "";
		let currCock: number         = 0;
		const totCock: number        = creature.cocks.length;
		let dogCocks: number         = 0;
		let horseCocks: number       = 0;
		let normalCocks: number      = 0;
		let normalCockKey: number    = 0;
		let dogCockKey: number       = 0;
		let horseCockKey: number     = 0;
		let averageLength: number    = 0;
		let averageThickness: number = 0;
		let same: boolean            = true;
		//For temp14 random values
		let rando: number            = 0;
		let descripted: boolean      = false;
		//If one, return normal cock descript
		if (totCock == 1) return creature.cockDescript(0);
		//Count cocks & Prep average totals
		while (currCock <= totCock - 1) {
			if (creature.cocks[currCock].cockType == CockTypesEnum.HUMAN) {
				normalCocks++;
				normalCockKey = currCock;
			}
			if (creature.cocks[currCock].cockType == CockTypesEnum.HORSE) {
				horseCocks++;
				horseCockKey = currCock;
			}
			if (creature.cocks[currCock].cockType == CockTypesEnum.DOG) {
				dogCocks++;
				dogCockKey = currCock;
			}
			averageLength += creature.cocks[currCock].cockLength;
			averageThickness += creature.cocks[currCock].cockThickness;
			//If cocks are matched make sure they still are
			if (same && currCock > 0 && creature.cocks[currCock].cockType != creature.cocks[currCock - 1].cockType) same = false;
			currCock++;
		}
		//Crunch averages
		averageLength /= currCock;
		averageThickness /= currCock;
		//Quantity descriptors
		if (creature.cockTotal() == 1) {
			if (dogCocks == 1) return cockNoun(CockTypesEnum.DOG);
			if (horseCocks == 1) return cockNoun(CockTypesEnum.HORSE);
			if (normalCocks == 1) return creature.cockDescript(0);
			//Failsafe
			return creature.cockDescript(0);
		}
		if (currCock == 2) {
			//For cocks that are the same
			if (same) {
				descript += randomChoice("pair of ", "two ", "brace of ", "matching ", "twin ");
				descript += creature.cockAdjective();
				if (normalCocks == 2) descript += " " + cockNoun(CockTypesEnum.HUMAN) + "s";
				if (horseCocks == 2) descript += ", " + cockNoun(CockTypesEnum.HORSE) + "s";
				if (dogCocks == 2) descript += ", " + cockNoun(CockTypesEnum.DOG) + "s";
				//Failsafe
				if (creature.cocks[0].cockType > 2) descript += ", " + cockNoun(creature.cocks[0].cockType) + "s";
			}
			//Nonidentical
			else {
				descript += randomChoice("pair of ", "two ", "brace of ");
				descript += creature.cockAdjective() + ", ";
				descript += randomChoice("mutated cocks", "mutated dicks", "mixed cocks", "mismatched dicks");
			}
		}
		if (currCock == 3) {
			//For samecocks
			if (same) {
				descript += randomChoice("three ", "group of ", "<i>ménage à trois</i> of ", "triad of ", "triumvirate of ");
				descript += creature.cockAdjective();
				if (normalCocks == 3) descript += " " + cockNoun(CockTypesEnum.HUMAN) + "s";
				if (horseCocks == 3) descript += ", " + cockNoun(CockTypesEnum.HORSE) + "s";
				if (dogCocks == 3) descript += ", " + cockNoun(CockTypesEnum.DOG) + "s";
				//Tentacles
				if (creature.cocks[0].cockType > 2) descript += ", " + cockNoun(creature.cocks[0].cockType) + "s";
			}
			else {
				descript += randomChoice("three ", "group of ");
				descript += creature.cockAdjective() + ", ";
				descript += randomChoice("mutated cocks", "mutated dicks", "mixed cocks", "mismatched dicks");
			}
		}
		//Large numbers of cocks!
		if (currCock > 3) {
			descript += randomChoice("bundle of ", "obscene group of ", "cluster of ", "wriggling bunch of ");
			//Cock adjectives and nouns
			descripted = false;
			//Same
			if (same) {
				if (currCock == normalCocks) {
					descript += creature.cockAdjective() + " ";
					descript += cockNoun(CockTypesEnum.HUMAN) + "s";
					descripted = true;
				}
				if (currCock == dogCocks) {
					descript += creature.cockAdjective() + ", ";
					descript += cockNoun(CockTypesEnum.DOG) + "s";
					descripted = true;
				}
				if (currCock == horseCocks) {
					descript += creature.cockAdjective() + ", ";
					descript += cockNoun(CockTypesEnum.HORSE) + "s";
					descripted = true;
				}
				if (creature.cocks[0].cockType > 2) {
					descript += creature.cockAdjective() + ", ";
					descript += cockNoun(creature.cocks[0].cockType) + "s";
					descripted = true;
				}
			}
			//If mixed
			if (!descripted) {
				descript += creature.cockAdjective() + ", ";
				descript += randomChoice("mutated cocks", "mutated dicks", "mixed cocks", "mismatched dicks");
			}
		}
		return descript;
	}
}