enum CockTypesEnum {
	HUMAN,
	HORSE,
	DOG,
	DEMON,
	TENTACLE,
	CAT,
	LIZARD,
	ANEMONE,
	KANGAROO,
	DRAGON,
	DISPLACER,
	FOX,
	BEE,
	PIG,
	AVIAN,
	RHINO,
	ECHIDNA,
	UNDEFINED
}
enum SkinTypeEnum {
	PLAIN,
	FUR,
	LIZARD_SCALES,
	GOO,
	UNDEFINED,
	DRAGON_SCALES,
	FISH_SCALES
}
const SKIN_TYPE_PLAIN: number         = SkinTypeEnum.PLAIN;
const SKIN_TYPE_FUR: number           = SkinTypeEnum.FUR;
const SKIN_TYPE_LIZARD_SCALES: number = SkinTypeEnum.LIZARD_SCALES;
const SKIN_TYPE_GOO: number           = SkinTypeEnum.GOO;
const SKIN_TYPE_UNDEFINED: number     = SkinTypeEnum.UNDEFINED;
const SKIN_TYPE_DRAGON_SCALES: number = SkinTypeEnum.DRAGON_SCALES;
const SKIN_TYPE_FISH_SCALES: number   = SkinTypeEnum.FISH_SCALES;

const ANAL_WETNESS_DRY: number            = 0;
const ANAL_WETNESS_NORMAL: number         = 1;
const ANAL_WETNESS_MOIST: number          = 2;
const ANAL_WETNESS_SLIMY: number          = 3;
const ANAL_WETNESS_DROOLING: number       = 4;
const ANAL_WETNESS_SLIME_DROOLING: number = 5;

const ANAL_LOOSENESS_VIRGIN: number    = 0;
const ANAL_LOOSENESS_TIGHT: number     = 1;
const ANAL_LOOSENESS_NORMAL: number    = 2;
const ANAL_LOOSENESS_LOOSE: number     = 3;
const ANAL_LOOSENESS_STRETCHED: number = 4;
const ANAL_LOOSENESS_GAPING: number    = 5;

// gender
const GENDER_NONE: number   = 0;
const GENDER_MALE: number   = 1;
const GENDER_FEMALE: number = 2;
const GENDER_HERM: number   = 3;

// hairType
const HAIR_NORMAL: number          = 0;
const HAIR_FEATHER: number         = 1;
const HAIR_GHOST: number           = 2;
const HAIR_GOO: number             = 3;
const HAIR_ANEMONE: number         = 4;
const HAIR_QUILL: number           = 5;
const HAIR_BASILISK_SPINES: number = 6;
const HAIR_BASILISK_PLUME: number  = 7;

// beardType
const BEARD_NORMAL: number      = 0;
const BEARD_GOATEE: number      = 1;
const BEARD_CLEANCUT: number    = 2;
const BEARD_MOUNTAINMAN: number = 3;

// faceType
const FACE_HUMAN: number        = 0;
const FACE_HORSE: number        = 1;
const FACE_DOG: number          = 2;
const FACE_COW_MINOTAUR: number = 3;
const FACE_SHARK_TEETH: number  = 4;
const FACE_SNAKE_FANGS: number  = 5;
const FACE_CAT: number          = 6;
const FACE_LIZARD: number       = 7;
const FACE_BUNNY: number        = 8;
const FACE_KANGAROO: number     = 9;
const FACE_SPIDER_FANGS: number = 10;
const FACE_FOX: number          = 11;
const FACE_DRAGON: number       = 12;
const FACE_RACCOON_MASK: number = 13;
const FACE_RACCOON: number      = 14;
const FACE_BUCKTEETH: number    = 15;
const FACE_MOUSE: number        = 16;
const FACE_FERRET_MASK: number  = 17;
const FACE_FERRET: number       = 18;
const FACE_PIG: number          = 19;
const FACE_BOAR: number         = 20;
const FACE_RHINO: number        = 21;
const FACE_ECHIDNA: number      = 22;
const FACE_DEER: number         = 23;

// tongueType
const TONGUE_HUMAN: number    = 0;
const TONGUE_SNAKE: number    = 1;
const TONGUE_DEMONIC: number  = 2;
const TONGUE_DRACONIC: number = 3;
const TONGUE_ECHIDNA: number  = 4;
const TONGUE_LIZARD: number   = 5;

// eyeType
const EYES_HUMAN: number                = 0;
const EYES_FOUR_SPIDER_EYES: number     = 1;
const EYES_BLACK_EYES_SAND_TRAP: number = 2;
const EYES_LIZARD: number               = 3;
const EYES_DRAGON: number               = 4; // Slightly different description/TF and *maybe* in the future(!) grant different perks/combat abilities
const EYES_BASILISK: number             = 5;

// earType
const EARS_HUMAN: number    = 0;
const EARS_HORSE: number    = 1;
const EARS_DOG: number      = 2;
const EARS_COW: number      = 3;
const EARS_ELFIN: number    = 4;
const EARS_CAT: number      = 5;
const EARS_LIZARD: number   = 6;
const EARS_BUNNY: number    = 7;
const EARS_KANGAROO: number = 8;
const EARS_FOX: number      = 9;
const EARS_DRAGON: number   = 10;
const EARS_RACCOON: number  = 11;
const EARS_MOUSE: number    = 12;
const EARS_FERRET: number   = 13;
const EARS_PIG: number      = 14;
const EARS_RHINO: number    = 15;
const EARS_ECHIDNA: number  = 16;
const EARS_DEER: number     = 17;

// hornType
const HORNS_NONE: number                     = 0;
const HORNS_DEMON: number                    = 1;
const HORNS_COW_MINOTAUR: number             = 2;
const HORNS_DRACONIC_X2: number              = 3;
const HORNS_DRACONIC_X4_12_INCH_LONG: number = 4;
const HORNS_ANTLERS: number                  = 5;
const HORNS_GOAT: number                     = 6;
const HORNS_UNICORN: number                  = 7;
const HORNS_RHINO: number                    = 8;

// antennae
const ANTENNAE_NONE: number = 0;
const ANTENNAE_BEE: number  = 2;

// gillType
const GILLS_NONE: number    = 0;
const GILLS_ANEMONE: number = 1;
const GILLS_FISH: number    = 2;

// armType
const ARM_TYPE_HUMAN: number      = 0;
const ARM_TYPE_HARPY: number      = 1;
const ARM_TYPE_SPIDER: number     = 2;
const ARM_TYPE_PREDATOR: number   = 4;
const ARM_TYPE_SALAMANDER: number = 5;

// clawType
const CLAW_TYPE_NORMAL: number     = 0;
const CLAW_TYPE_LIZARD: number     = 1;
const CLAW_TYPE_DRAGON: number     = 2;
const CLAW_TYPE_SALAMANDER: number = 3;
const CLAW_TYPE_CAT: number        = 4; // NYI! Placeholder for now!! (See http://tiny.cc/coc-revamp-claws)
const CLAW_TYPE_DOG: number        = 5; // NYI! Placeholder for now!! (See http://tiny.cc/coc-revamp-claws)
const CLAW_TYPE_RAPTOR: number     = 6; // NYI! Placeholder for now!! (See http://tiny.cc/coc-revamp-claws) Giev teh Rapturs :-)
const CLAW_TYPE_MANTIS: number     = 7; // NYI! Placeholder for Xianxia mod (See http://tiny.cc/coc-xianxia-mod)

// tailType
const TAIL_TYPE_NONE: number           = 0;
const TAIL_TYPE_HORSE: number          = 1;
const TAIL_TYPE_DOG: number            = 2;
const TAIL_TYPE_DEMONIC: number        = 3;
const TAIL_TYPE_COW: number            = 4;
const TAIL_TYPE_SPIDER_ADBOMEN: number = 5;
const TAIL_TYPE_BEE_ABDOMEN: number    = 6;
const TAIL_TYPE_SHARK: number          = 7;
const TAIL_TYPE_CAT: number            = 8;
const TAIL_TYPE_LIZARD: number         = 9;
const TAIL_TYPE_RABBIT: number         = 10;
const TAIL_TYPE_HARPY: number          = 11;
const TAIL_TYPE_KANGAROO: number       = 12;
const TAIL_TYPE_FOX: number            = 13;
const TAIL_TYPE_DRACONIC: number       = 14;
const TAIL_TYPE_RACCOON: number        = 15;
const TAIL_TYPE_MOUSE: number          = 16;
const TAIL_TYPE_FERRET: number         = 17;
const TAIL_TYPE_BEHEMOTH: number       = 18;
const TAIL_TYPE_PIG: number            = 19;
const TAIL_TYPE_SCORPION: number       = 20;
const TAIL_TYPE_GOAT: number           = 21;
const TAIL_TYPE_RHINO: number          = 22;
const TAIL_TYPE_ECHIDNA: number        = 23;
const TAIL_TYPE_DEER: number           = 24;
const TAIL_TYPE_SALAMANDER: number     = 25;

// wingType
const WING_TYPE_NONE: number            = 0;
const WING_TYPE_BEE_LIKE_SMALL: number  = 1;
const WING_TYPE_BEE_LIKE_LARGE: number  = 2;
const WING_TYPE_HARPY: number           = 4;
const WING_TYPE_IMP: number             = 5;
const WING_TYPE_BAT_LIKE_TINY: number   = 6;
const WING_TYPE_BAT_LIKE_LARGE: number  = 7;
const WING_TYPE_SHARK_FIN: number       = 8;
const WING_TYPE_FEATHERED_LARGE: number = 9;
const WING_TYPE_DRACONIC_SMALL: number  = 10;
const WING_TYPE_DRACONIC_LARGE: number  = 11;
const WING_TYPE_GIANT_DRAGONFLY: number = 12;
const WING_TYPE_IMP_LARGE: number       = 13;

const canFlyWings = [
	WING_TYPE_BEE_LIKE_LARGE,
	WING_TYPE_BAT_LIKE_LARGE,
	WING_TYPE_FEATHERED_LARGE,
	WING_TYPE_DRACONIC_LARGE,
	WING_TYPE_GIANT_DRAGONFLY,
	WING_TYPE_IMP_LARGE
];

// lowerBody
const LOWER_BODY_TYPE_HUMAN: number                 = 0;
const LOWER_BODY_TYPE_HOOFED: number                = 1;
const LOWER_BODY_TYPE_DOG: number                   = 2;
const LOWER_BODY_TYPE_NAGA: number                  = 3;
const LOWER_BODY_TYPE_CENTAUR: number               = 4; // DEPRECATED, use LOWER_BODY_TYPE_HOOFED and legCount=4
const LOWER_BODY_TYPE_DEMONIC_HIGH_HEELS: number    = 5;
const LOWER_BODY_TYPE_DEMONIC_CLAWS: number         = 6;
const LOWER_BODY_TYPE_BEE: number                   = 7;
const LOWER_BODY_TYPE_GOO: number                   = 8;
const LOWER_BODY_TYPE_CAT: number                   = 9;
const LOWER_BODY_TYPE_LIZARD: number                = 10;
const LOWER_BODY_TYPE_PONY: number                  = 11;
const LOWER_BODY_TYPE_BUNNY: number                 = 12;
const LOWER_BODY_TYPE_HARPY: number                 = 13;
const LOWER_BODY_TYPE_KANGAROO: number              = 14;
const LOWER_BODY_TYPE_CHITINOUS_SPIDER_LEGS: number = 15;
const LOWER_BODY_TYPE_DRIDER_LOWER_BODY: number     = 16;
const LOWER_BODY_TYPE_FOX: number                   = 17;
const LOWER_BODY_TYPE_DRAGON: number                = 18;
const LOWER_BODY_TYPE_RACCOON: number               = 19;
const LOWER_BODY_TYPE_FERRET: number                = 20;
const LOWER_BODY_TYPE_CLOVEN_HOOFED: number         = 21;
//const LOWER_BODY_TYPE_RHINO:number                                       =  22;
const LOWER_BODY_TYPE_ECHIDNA: number               = 23;
const LOWER_BODY_TYPE_DEERTAUR: number              = 24; // DEPRECATED, use LOWER_BODY_TYPE_CLOVEN_HOOFED and legCount=4
const LOWER_BODY_TYPE_SALAMANDER: number            = 25;

// piercingtypesNOPEDISABLED
const PIERCING_TYPE_NONE: number   = 0;
const PIERCING_TYPE_STUD: number   = 1;
const PIERCING_TYPE_RING: number   = 2;
const PIERCING_TYPE_LADDER: number = 3;
const PIERCING_TYPE_HOOP: number   = 4;
const PIERCING_TYPE_CHAIN: number  = 5;

// vaginatypesNOPEDISABLED
const VAGINA_TYPE_HUMAN: number           = 0;
const VAGINA_TYPE_EQUINE: number          = 1;
const VAGINA_TYPE_BLACK_SAND_TRAP: number = 5;

// vaginalWetness
const VAGINA_WETNESS_DRY: number       = 0;
const VAGINA_WETNESS_NORMAL: number    = 1;
const VAGINA_WETNESS_WET: number       = 2;
const VAGINA_WETNESS_SLICK: number     = 3;
const VAGINA_WETNESS_DROOLING: number  = 4;
const VAGINA_WETNESS_SLAVERING: number = 5;

// vaginalLooseness
const VAGINA_LOOSENESS_TIGHT: number           = 0;
const VAGINA_LOOSENESS_NORMAL: number          = 1;
const VAGINA_LOOSENESS_LOOSE: number           = 2;
const VAGINA_LOOSENESS_GAPING: number          = 3;
const VAGINA_LOOSENESS_GAPING_WIDE: number     = 4;
const VAGINA_LOOSENESS_LEVEL_CLOWN_CAR: number = 5;

// hipRating
const HIP_RATING_BOYISH: number         = 0;
const HIP_RATING_SLENDER: number        = 2;
const HIP_RATING_AVERAGE: number        = 4;
const HIP_RATING_AMPLE: number          = 6;
const HIP_RATING_CURVY: number          = 10;
const HIP_RATING_FERTILE: number        = 15;
const HIP_RATING_INHUMANLY_WIDE: number = 20;

// buttRating
const BUTT_RATING_BUTTLESS: number          = 0;
const BUTT_RATING_TIGHT: number             = 2;
const BUTT_RATING_AVERAGE: number           = 4;
const BUTT_RATING_NOTICEABLE: number        = 6;
const BUTT_RATING_LARGE: number             = 8;
const BUTT_RATING_JIGGLY: number            = 10;
const BUTT_RATING_EXPANSIVE: number         = 13;
const BUTT_RATING_HUGE: number              = 16;
const BUTT_RATING_INCONCEIVABLY_BIG: number = 20;

//breast size (moved here because it's the largest list)
const BREAST_CUP_FLAT: number            = 0;
const BREAST_CUP_A: number               = 1;
const BREAST_CUP_B: number               = 2;
const BREAST_CUP_C: number               = 3;
const BREAST_CUP_D: number               = 4;
const BREAST_CUP_DD: number              = 5;
const BREAST_CUP_DD_BIG: number          = 6;
const BREAST_CUP_E: number               = 7;
const BREAST_CUP_E_BIG: number           = 8;
const BREAST_CUP_EE: number              = 9;
const BREAST_CUP_EE_BIG: number          = 10;
const BREAST_CUP_F: number               = 11;
const BREAST_CUP_F_BIG: number           = 12;
const BREAST_CUP_FF: number              = 13;
const BREAST_CUP_FF_BIG: number          = 14;
const BREAST_CUP_G: number               = 15;
const BREAST_CUP_G_BIG: number           = 16;
const BREAST_CUP_GG: number              = 17;
const BREAST_CUP_GG_BIG: number          = 18;
const BREAST_CUP_H: number               = 19;
const BREAST_CUP_H_BIG: number           = 20;
const BREAST_CUP_HH: number              = 21;
const BREAST_CUP_HH_BIG: number          = 22;
const BREAST_CUP_HHH: number             = 23;
const BREAST_CUP_I: number               = 24;
const BREAST_CUP_I_BIG: number           = 25;
const BREAST_CUP_II: number              = 26;
const BREAST_CUP_II_BIG: number          = 27;
const BREAST_CUP_J: number               = 28;
const BREAST_CUP_J_BIG: number           = 29;
const BREAST_CUP_JJ: number              = 30;
const BREAST_CUP_JJ_BIG: number          = 31;
const BREAST_CUP_K: number               = 32;
const BREAST_CUP_K_BIG: number           = 33;
const BREAST_CUP_KK: number              = 34;
const BREAST_CUP_KK_BIG: number          = 35;
const BREAST_CUP_L: number               = 36;
const BREAST_CUP_L_BIG: number           = 37;
const BREAST_CUP_LL: number              = 38;
const BREAST_CUP_LL_BIG: number          = 39;
const BREAST_CUP_M: number               = 40;
const BREAST_CUP_M_BIG: number           = 41;
const BREAST_CUP_MM: number              = 42;
const BREAST_CUP_MM_BIG: number          = 43;
const BREAST_CUP_MMM: number             = 44;
const BREAST_CUP_MMM_LARGE: number       = 45;
const BREAST_CUP_N: number               = 46;
const BREAST_CUP_N_LARGE: number         = 47;
const BREAST_CUP_NN: number              = 48;
const BREAST_CUP_NN_LARGE: number        = 49;
const BREAST_CUP_O: number               = 50;
const BREAST_CUP_O_LARGE: number         = 51;
const BREAST_CUP_OO: number              = 52;
const BREAST_CUP_OO_LARGE: number        = 53;
const BREAST_CUP_P: number               = 54;
const BREAST_CUP_P_LARGE: number         = 55;
const BREAST_CUP_PP: number              = 56;
const BREAST_CUP_PP_LARGE: number        = 57;
const BREAST_CUP_Q: number               = 58;
const BREAST_CUP_Q_LARGE: number         = 59;
const BREAST_CUP_QQ: number              = 60;
const BREAST_CUP_QQ_LARGE: number        = 61;
const BREAST_CUP_R: number               = 62;
const BREAST_CUP_R_LARGE: number         = 63;
const BREAST_CUP_RR: number              = 64;
const BREAST_CUP_RR_LARGE: number        = 65;
const BREAST_CUP_S: number               = 66;
const BREAST_CUP_S_LARGE: number         = 67;
const BREAST_CUP_SS: number              = 68;
const BREAST_CUP_SS_LARGE: number        = 69;
const BREAST_CUP_T: number               = 70;
const BREAST_CUP_T_LARGE: number         = 71;
const BREAST_CUP_TT: number              = 72;
const BREAST_CUP_TT_LARGE: number        = 73;
const BREAST_CUP_U: number               = 74;
const BREAST_CUP_U_LARGE: number         = 75;
const BREAST_CUP_UU: number              = 76;
const BREAST_CUP_UU_LARGE: number        = 77;
const BREAST_CUP_V: number               = 78;
const BREAST_CUP_V_LARGE: number         = 79;
const BREAST_CUP_VV: number              = 80;
const BREAST_CUP_VV_LARGE: number        = 81;
const BREAST_CUP_W: number               = 82;
const BREAST_CUP_W_LARGE: number         = 83;
const BREAST_CUP_WW: number              = 84;
const BREAST_CUP_WW_LARGE: number        = 85;
const BREAST_CUP_X: number               = 86;
const BREAST_CUP_X_LARGE: number         = 87;
const BREAST_CUP_XX: number              = 88;
const BREAST_CUP_XX_LARGE: number        = 89;
const BREAST_CUP_Y: number               = 90;
const BREAST_CUP_Y_LARGE: number         = 91;
const BREAST_CUP_YY: number              = 92;
const BREAST_CUP_YY_LARGE: number        = 93;
const BREAST_CUP_Z: number               = 94;
const BREAST_CUP_Z_LARGE: number         = 95;
const BREAST_CUP_ZZ: number              = 96;
const BREAST_CUP_ZZ_LARGE: number        = 97;
const BREAST_CUP_ZZZ: number             = 98;
const BREAST_CUP_ZZZ_LARGE: number       = 99;
const BREAST_CUP_HYPER_A: number         = 100; // <-- HYPER
const BREAST_CUP_HYPER_B: number         = 101;
const BREAST_CUP_HYPER_C: number         = 102;
const BREAST_CUP_HYPER_D: number         = 103;
const BREAST_CUP_HYPER_DD: number        = 104;
const BREAST_CUP_HYPER_DD_BIG: number    = 105;
const BREAST_CUP_HYPER_E: number         = 106;
const BREAST_CUP_HYPER_E_BIG: number     = 107;
const BREAST_CUP_HYPER_EE: number        = 108;
const BREAST_CUP_HYPER_EE_BIG: number    = 109;
const BREAST_CUP_HYPER_F: number         = 110;
const BREAST_CUP_HYPER_F_BIG: number     = 111;
const BREAST_CUP_HYPER_FF: number        = 112;
const BREAST_CUP_HYPER_FF_BIG: number    = 113;
const BREAST_CUP_HYPER_G: number         = 114;
const BREAST_CUP_HYPER_G_BIG: number     = 115;
const BREAST_CUP_HYPER_GG: number        = 116;
const BREAST_CUP_HYPER_GG_BIG: number    = 117;
const BREAST_CUP_HYPER_H: number         = 118;
const BREAST_CUP_HYPER_H_BIG: number     = 119;
const BREAST_CUP_HYPER_HH: number        = 120;
const BREAST_CUP_HYPER_HH_BIG: number    = 121;
const BREAST_CUP_HYPER_HHH: number       = 122;
const BREAST_CUP_HYPER_I: number         = 123;
const BREAST_CUP_HYPER_I_BIG: number     = 124;
const BREAST_CUP_HYPER_II: number        = 125;
const BREAST_CUP_HYPER_II_BIG: number    = 126;
const BREAST_CUP_HYPER_J: number         = 127;
const BREAST_CUP_HYPER_J_BIG: number     = 128;
const BREAST_CUP_HYPER_JJ: number        = 129;
const BREAST_CUP_HYPER_JJ_BIG: number    = 130;
const BREAST_CUP_HYPER_K: number         = 131;
const BREAST_CUP_HYPER_K_BIG: number     = 132;
const BREAST_CUP_HYPER_KK: number        = 133;
const BREAST_CUP_HYPER_KK_BIG: number    = 134;
const BREAST_CUP_HYPER_L: number         = 135;
const BREAST_CUP_HYPER_L_BIG: number     = 136;
const BREAST_CUP_HYPER_LL: number        = 137;
const BREAST_CUP_HYPER_LL_BIG: number    = 138;
const BREAST_CUP_HYPER_M: number         = 139;
const BREAST_CUP_HYPER_M_BIG: number     = 140;
const BREAST_CUP_HYPER_MM: number        = 141;
const BREAST_CUP_HYPER_MM_BIG: number    = 142;
const BREAST_CUP_HYPER_MMM: number       = 143;
const BREAST_CUP_HYPER_MMM_LARGE: number = 144;
const BREAST_CUP_HYPER_N: number         = 145;
const BREAST_CUP_HYPER_N_LARGE: number   = 146;
const BREAST_CUP_HYPER_NN: number        = 147;
const BREAST_CUP_HYPER_NN_LARGE: number  = 148;
const BREAST_CUP_HYPER_O: number         = 149;
const BREAST_CUP_HYPER_O_LARGE: number   = 150;
const BREAST_CUP_HYPER_OO: number        = 151;
const BREAST_CUP_HYPER_OO_LARGE: number  = 152;
const BREAST_CUP_HYPER_P: number         = 153;
const BREAST_CUP_HYPER_P_LARGE: number   = 154;
const BREAST_CUP_HYPER_PP: number        = 155;
const BREAST_CUP_HYPER_PP_LARGE: number  = 156;
const BREAST_CUP_HYPER_Q: number         = 157;
const BREAST_CUP_HYPER_Q_LARGE: number   = 158;
const BREAST_CUP_HYPER_QQ: number        = 159;
const BREAST_CUP_HYPER_QQ_LARGE: number  = 160;
const BREAST_CUP_HYPER_R: number         = 161;
const BREAST_CUP_HYPER_R_LARGE: number   = 162;
const BREAST_CUP_HYPER_RR: number        = 163;
const BREAST_CUP_HYPER_RR_LARGE: number  = 164;
const BREAST_CUP_HYPER_S: number         = 165;
const BREAST_CUP_HYPER_S_LARGE: number   = 166;
const BREAST_CUP_HYPER_SS: number        = 167;
const BREAST_CUP_HYPER_SS_LARGE: number  = 168;
const BREAST_CUP_HYPER_T: number         = 169;
const BREAST_CUP_HYPER_T_LARGE: number   = 170;
const BREAST_CUP_HYPER_TT: number        = 171;
const BREAST_CUP_HYPER_TT_LARGE: number  = 172;
const BREAST_CUP_HYPER_U: number         = 173;
const BREAST_CUP_HYPER_U_LARGE: number   = 174;
const BREAST_CUP_HYPER_UU: number        = 175;
const BREAST_CUP_HYPER_UU_LARGE: number  = 176;
const BREAST_CUP_HYPER_V: number         = 177;
const BREAST_CUP_HYPER_V_LARGE: number   = 178;
const BREAST_CUP_HYPER_VV: number        = 179;
const BREAST_CUP_HYPER_VV_LARGE: number  = 180;
const BREAST_CUP_HYPER_W: number         = 181;
const BREAST_CUP_HYPER_W_LARGE: number   = 182;
const BREAST_CUP_HYPER_WW: number        = 183;
const BREAST_CUP_HYPER_WW_LARGE: number  = 184;
const BREAST_CUP_HYPER_X: number         = 185;
const BREAST_CUP_HYPER_X_LARGE: number   = 186;
const BREAST_CUP_HYPER_XX: number        = 187;
const BREAST_CUP_HYPER_XX_LARGE: number  = 188;
const BREAST_CUP_HYPER_Y: number         = 189;
const BREAST_CUP_HYPER_Y_LARGE: number   = 190;
const BREAST_CUP_HYPER_YY: number        = 191;
const BREAST_CUP_HYPER_YY_LARGE: number  = 192;
const BREAST_CUP_HYPER_Z: number         = 193;
const BREAST_CUP_HYPER_Z_LARGE: number   = 194;
const BREAST_CUP_HYPER_ZZ: number        = 195;
const BREAST_CUP_HYPER_ZZ_LARGE: number  = 196;
const BREAST_CUP_HYPER_ZZZ: number       = 197;
const BREAST_CUP_HYPER_ZZZ_LARGE: number = 198;
const BREAST_CUP_JACQUES00: number       = 199; // <-- Jacques00-cup

// End Description constants

