var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CockTypesEnum;
(function (CockTypesEnum) {
    CockTypesEnum[CockTypesEnum["HUMAN"] = 0] = "HUMAN";
    CockTypesEnum[CockTypesEnum["HORSE"] = 1] = "HORSE";
    CockTypesEnum[CockTypesEnum["DOG"] = 2] = "DOG";
    CockTypesEnum[CockTypesEnum["DEMON"] = 3] = "DEMON";
    CockTypesEnum[CockTypesEnum["TENTACLE"] = 4] = "TENTACLE";
    CockTypesEnum[CockTypesEnum["CAT"] = 5] = "CAT";
    CockTypesEnum[CockTypesEnum["LIZARD"] = 6] = "LIZARD";
    CockTypesEnum[CockTypesEnum["ANEMONE"] = 7] = "ANEMONE";
    CockTypesEnum[CockTypesEnum["KANGAROO"] = 8] = "KANGAROO";
    CockTypesEnum[CockTypesEnum["DRAGON"] = 9] = "DRAGON";
    CockTypesEnum[CockTypesEnum["DISPLACER"] = 10] = "DISPLACER";
    CockTypesEnum[CockTypesEnum["FOX"] = 11] = "FOX";
    CockTypesEnum[CockTypesEnum["BEE"] = 12] = "BEE";
    CockTypesEnum[CockTypesEnum["PIG"] = 13] = "PIG";
    CockTypesEnum[CockTypesEnum["AVIAN"] = 14] = "AVIAN";
    CockTypesEnum[CockTypesEnum["RHINO"] = 15] = "RHINO";
    CockTypesEnum[CockTypesEnum["ECHIDNA"] = 16] = "ECHIDNA";
    CockTypesEnum[CockTypesEnum["UNDEFINED"] = 17] = "UNDEFINED";
})(CockTypesEnum || (CockTypesEnum = {}));
var SkinTypeEnum;
(function (SkinTypeEnum) {
    SkinTypeEnum[SkinTypeEnum["PLAIN"] = 0] = "PLAIN";
    SkinTypeEnum[SkinTypeEnum["FUR"] = 1] = "FUR";
    SkinTypeEnum[SkinTypeEnum["LIZARD_SCALES"] = 2] = "LIZARD_SCALES";
    SkinTypeEnum[SkinTypeEnum["GOO"] = 3] = "GOO";
    SkinTypeEnum[SkinTypeEnum["UNDEFINED"] = 4] = "UNDEFINED";
    SkinTypeEnum[SkinTypeEnum["DRAGON_SCALES"] = 5] = "DRAGON_SCALES";
    SkinTypeEnum[SkinTypeEnum["FISH_SCALES"] = 6] = "FISH_SCALES";
})(SkinTypeEnum || (SkinTypeEnum = {}));
var SKIN_TYPE_PLAIN = SkinTypeEnum.PLAIN;
var SKIN_TYPE_FUR = SkinTypeEnum.FUR;
var SKIN_TYPE_LIZARD_SCALES = SkinTypeEnum.LIZARD_SCALES;
var SKIN_TYPE_GOO = SkinTypeEnum.GOO;
var SKIN_TYPE_UNDEFINED = SkinTypeEnum.UNDEFINED;
var SKIN_TYPE_DRAGON_SCALES = SkinTypeEnum.DRAGON_SCALES;
var SKIN_TYPE_FISH_SCALES = SkinTypeEnum.FISH_SCALES;
var ANAL_WETNESS_DRY = 0;
var ANAL_WETNESS_NORMAL = 1;
var ANAL_WETNESS_MOIST = 2;
var ANAL_WETNESS_SLIMY = 3;
var ANAL_WETNESS_DROOLING = 4;
var ANAL_WETNESS_SLIME_DROOLING = 5;
var ANAL_LOOSENESS_VIRGIN = 0;
var ANAL_LOOSENESS_TIGHT = 1;
var ANAL_LOOSENESS_NORMAL = 2;
var ANAL_LOOSENESS_LOOSE = 3;
var ANAL_LOOSENESS_STRETCHED = 4;
var ANAL_LOOSENESS_GAPING = 5;
// gender
var GENDER_NONE = 0;
var GENDER_MALE = 1;
var GENDER_FEMALE = 2;
var GENDER_HERM = 3;
// hairType
var HAIR_NORMAL = 0;
var HAIR_FEATHER = 1;
var HAIR_GHOST = 2;
var HAIR_GOO = 3;
var HAIR_ANEMONE = 4;
var HAIR_QUILL = 5;
var HAIR_BASILISK_SPINES = 6;
var HAIR_BASILISK_PLUME = 7;
// beardType
var BEARD_NORMAL = 0;
var BEARD_GOATEE = 1;
var BEARD_CLEANCUT = 2;
var BEARD_MOUNTAINMAN = 3;
// faceType
var FACE_HUMAN = 0;
var FACE_HORSE = 1;
var FACE_DOG = 2;
var FACE_COW_MINOTAUR = 3;
var FACE_SHARK_TEETH = 4;
var FACE_SNAKE_FANGS = 5;
var FACE_CAT = 6;
var FACE_LIZARD = 7;
var FACE_BUNNY = 8;
var FACE_KANGAROO = 9;
var FACE_SPIDER_FANGS = 10;
var FACE_FOX = 11;
var FACE_DRAGON = 12;
var FACE_RACCOON_MASK = 13;
var FACE_RACCOON = 14;
var FACE_BUCKTEETH = 15;
var FACE_MOUSE = 16;
var FACE_FERRET_MASK = 17;
var FACE_FERRET = 18;
var FACE_PIG = 19;
var FACE_BOAR = 20;
var FACE_RHINO = 21;
var FACE_ECHIDNA = 22;
var FACE_DEER = 23;
// tongueType
var TONGUE_HUMAN = 0;
var TONGUE_SNAKE = 1;
var TONGUE_DEMONIC = 2;
var TONGUE_DRACONIC = 3;
var TONGUE_ECHIDNA = 4;
var TONGUE_LIZARD = 5;
// eyeType
var EYES_HUMAN = 0;
var EYES_FOUR_SPIDER_EYES = 1;
var EYES_BLACK_EYES_SAND_TRAP = 2;
var EYES_LIZARD = 3;
var EYES_DRAGON = 4; // Slightly different description/TF and *maybe* in the future(!) grant different perks/combat abilities
var EYES_BASILISK = 5;
// earType
var EARS_HUMAN = 0;
var EARS_HORSE = 1;
var EARS_DOG = 2;
var EARS_COW = 3;
var EARS_ELFIN = 4;
var EARS_CAT = 5;
var EARS_LIZARD = 6;
var EARS_BUNNY = 7;
var EARS_KANGAROO = 8;
var EARS_FOX = 9;
var EARS_DRAGON = 10;
var EARS_RACCOON = 11;
var EARS_MOUSE = 12;
var EARS_FERRET = 13;
var EARS_PIG = 14;
var EARS_RHINO = 15;
var EARS_ECHIDNA = 16;
var EARS_DEER = 17;
// hornType
var HORNS_NONE = 0;
var HORNS_DEMON = 1;
var HORNS_COW_MINOTAUR = 2;
var HORNS_DRACONIC_X2 = 3;
var HORNS_DRACONIC_X4_12_INCH_LONG = 4;
var HORNS_ANTLERS = 5;
var HORNS_GOAT = 6;
var HORNS_UNICORN = 7;
var HORNS_RHINO = 8;
// antennae
var ANTENNAE_NONE = 0;
var ANTENNAE_BEE = 2;
// gillType
var GILLS_NONE = 0;
var GILLS_ANEMONE = 1;
var GILLS_FISH = 2;
// armType
var ARM_TYPE_HUMAN = 0;
var ARM_TYPE_HARPY = 1;
var ARM_TYPE_SPIDER = 2;
var ARM_TYPE_PREDATOR = 4;
var ARM_TYPE_SALAMANDER = 5;
// clawType
var CLAW_TYPE_NORMAL = 0;
var CLAW_TYPE_LIZARD = 1;
var CLAW_TYPE_DRAGON = 2;
var CLAW_TYPE_SALAMANDER = 3;
var CLAW_TYPE_CAT = 4; // NYI! Placeholder for now!! (See http://tiny.cc/coc-revamp-claws)
var CLAW_TYPE_DOG = 5; // NYI! Placeholder for now!! (See http://tiny.cc/coc-revamp-claws)
var CLAW_TYPE_RAPTOR = 6; // NYI! Placeholder for now!! (See http://tiny.cc/coc-revamp-claws) Giev teh Rapturs :-)
var CLAW_TYPE_MANTIS = 7; // NYI! Placeholder for Xianxia mod (See http://tiny.cc/coc-xianxia-mod)
// tailType
var TAIL_TYPE_NONE = 0;
var TAIL_TYPE_HORSE = 1;
var TAIL_TYPE_DOG = 2;
var TAIL_TYPE_DEMONIC = 3;
var TAIL_TYPE_COW = 4;
var TAIL_TYPE_SPIDER_ADBOMEN = 5;
var TAIL_TYPE_BEE_ABDOMEN = 6;
var TAIL_TYPE_SHARK = 7;
var TAIL_TYPE_CAT = 8;
var TAIL_TYPE_LIZARD = 9;
var TAIL_TYPE_RABBIT = 10;
var TAIL_TYPE_HARPY = 11;
var TAIL_TYPE_KANGAROO = 12;
var TAIL_TYPE_FOX = 13;
var TAIL_TYPE_DRACONIC = 14;
var TAIL_TYPE_RACCOON = 15;
var TAIL_TYPE_MOUSE = 16;
var TAIL_TYPE_FERRET = 17;
var TAIL_TYPE_BEHEMOTH = 18;
var TAIL_TYPE_PIG = 19;
var TAIL_TYPE_SCORPION = 20;
var TAIL_TYPE_GOAT = 21;
var TAIL_TYPE_RHINO = 22;
var TAIL_TYPE_ECHIDNA = 23;
var TAIL_TYPE_DEER = 24;
var TAIL_TYPE_SALAMANDER = 25;
// wingType
var WING_TYPE_NONE = 0;
var WING_TYPE_BEE_LIKE_SMALL = 1;
var WING_TYPE_BEE_LIKE_LARGE = 2;
var WING_TYPE_HARPY = 4;
var WING_TYPE_IMP = 5;
var WING_TYPE_BAT_LIKE_TINY = 6;
var WING_TYPE_BAT_LIKE_LARGE = 7;
var WING_TYPE_SHARK_FIN = 8;
var WING_TYPE_FEATHERED_LARGE = 9;
var WING_TYPE_DRACONIC_SMALL = 10;
var WING_TYPE_DRACONIC_LARGE = 11;
var WING_TYPE_GIANT_DRAGONFLY = 12;
var WING_TYPE_IMP_LARGE = 13;
var canFlyWings = [
    WING_TYPE_BEE_LIKE_LARGE,
    WING_TYPE_BAT_LIKE_LARGE,
    WING_TYPE_FEATHERED_LARGE,
    WING_TYPE_DRACONIC_LARGE,
    WING_TYPE_GIANT_DRAGONFLY,
    WING_TYPE_IMP_LARGE
];
// lowerBody
var LOWER_BODY_TYPE_HUMAN = 0;
var LOWER_BODY_TYPE_HOOFED = 1;
var LOWER_BODY_TYPE_DOG = 2;
var LOWER_BODY_TYPE_NAGA = 3;
var LOWER_BODY_TYPE_CENTAUR = 4; // DEPRECATED, use LOWER_BODY_TYPE_HOOFED and legCount=4
var LOWER_BODY_TYPE_DEMONIC_HIGH_HEELS = 5;
var LOWER_BODY_TYPE_DEMONIC_CLAWS = 6;
var LOWER_BODY_TYPE_BEE = 7;
var LOWER_BODY_TYPE_GOO = 8;
var LOWER_BODY_TYPE_CAT = 9;
var LOWER_BODY_TYPE_LIZARD = 10;
var LOWER_BODY_TYPE_PONY = 11;
var LOWER_BODY_TYPE_BUNNY = 12;
var LOWER_BODY_TYPE_HARPY = 13;
var LOWER_BODY_TYPE_KANGAROO = 14;
var LOWER_BODY_TYPE_CHITINOUS_SPIDER_LEGS = 15;
var LOWER_BODY_TYPE_DRIDER_LOWER_BODY = 16;
var LOWER_BODY_TYPE_FOX = 17;
var LOWER_BODY_TYPE_DRAGON = 18;
var LOWER_BODY_TYPE_RACCOON = 19;
var LOWER_BODY_TYPE_FERRET = 20;
var LOWER_BODY_TYPE_CLOVEN_HOOFED = 21;
//const LOWER_BODY_TYPE_RHINO:number                                       =  22;
var LOWER_BODY_TYPE_ECHIDNA = 23;
var LOWER_BODY_TYPE_DEERTAUR = 24; // DEPRECATED, use LOWER_BODY_TYPE_CLOVEN_HOOFED and legCount=4
var LOWER_BODY_TYPE_SALAMANDER = 25;
// piercingtypesNOPEDISABLED
var PIERCING_TYPE_NONE = 0;
var PIERCING_TYPE_STUD = 1;
var PIERCING_TYPE_RING = 2;
var PIERCING_TYPE_LADDER = 3;
var PIERCING_TYPE_HOOP = 4;
var PIERCING_TYPE_CHAIN = 5;
// vaginatypesNOPEDISABLED
var VAGINA_TYPE_HUMAN = 0;
var VAGINA_TYPE_EQUINE = 1;
var VAGINA_TYPE_BLACK_SAND_TRAP = 5;
// vaginalWetness
var VAGINA_WETNESS_DRY = 0;
var VAGINA_WETNESS_NORMAL = 1;
var VAGINA_WETNESS_WET = 2;
var VAGINA_WETNESS_SLICK = 3;
var VAGINA_WETNESS_DROOLING = 4;
var VAGINA_WETNESS_SLAVERING = 5;
// vaginalLooseness
var VAGINA_LOOSENESS_TIGHT = 0;
var VAGINA_LOOSENESS_NORMAL = 1;
var VAGINA_LOOSENESS_LOOSE = 2;
var VAGINA_LOOSENESS_GAPING = 3;
var VAGINA_LOOSENESS_GAPING_WIDE = 4;
var VAGINA_LOOSENESS_LEVEL_CLOWN_CAR = 5;
// hipRating
var HIP_RATING_BOYISH = 0;
var HIP_RATING_SLENDER = 2;
var HIP_RATING_AVERAGE = 4;
var HIP_RATING_AMPLE = 6;
var HIP_RATING_CURVY = 10;
var HIP_RATING_FERTILE = 15;
var HIP_RATING_INHUMANLY_WIDE = 20;
// buttRating
var BUTT_RATING_BUTTLESS = 0;
var BUTT_RATING_TIGHT = 2;
var BUTT_RATING_AVERAGE = 4;
var BUTT_RATING_NOTICEABLE = 6;
var BUTT_RATING_LARGE = 8;
var BUTT_RATING_JIGGLY = 10;
var BUTT_RATING_EXPANSIVE = 13;
var BUTT_RATING_HUGE = 16;
var BUTT_RATING_INCONCEIVABLY_BIG = 20;
//breast size (moved here because it's the largest list)
var BREAST_CUP_FLAT = 0;
var BREAST_CUP_A = 1;
var BREAST_CUP_B = 2;
var BREAST_CUP_C = 3;
var BREAST_CUP_D = 4;
var BREAST_CUP_DD = 5;
var BREAST_CUP_DD_BIG = 6;
var BREAST_CUP_E = 7;
var BREAST_CUP_E_BIG = 8;
var BREAST_CUP_EE = 9;
var BREAST_CUP_EE_BIG = 10;
var BREAST_CUP_F = 11;
var BREAST_CUP_F_BIG = 12;
var BREAST_CUP_FF = 13;
var BREAST_CUP_FF_BIG = 14;
var BREAST_CUP_G = 15;
var BREAST_CUP_G_BIG = 16;
var BREAST_CUP_GG = 17;
var BREAST_CUP_GG_BIG = 18;
var BREAST_CUP_H = 19;
var BREAST_CUP_H_BIG = 20;
var BREAST_CUP_HH = 21;
var BREAST_CUP_HH_BIG = 22;
var BREAST_CUP_HHH = 23;
var BREAST_CUP_I = 24;
var BREAST_CUP_I_BIG = 25;
var BREAST_CUP_II = 26;
var BREAST_CUP_II_BIG = 27;
var BREAST_CUP_J = 28;
var BREAST_CUP_J_BIG = 29;
var BREAST_CUP_JJ = 30;
var BREAST_CUP_JJ_BIG = 31;
var BREAST_CUP_K = 32;
var BREAST_CUP_K_BIG = 33;
var BREAST_CUP_KK = 34;
var BREAST_CUP_KK_BIG = 35;
var BREAST_CUP_L = 36;
var BREAST_CUP_L_BIG = 37;
var BREAST_CUP_LL = 38;
var BREAST_CUP_LL_BIG = 39;
var BREAST_CUP_M = 40;
var BREAST_CUP_M_BIG = 41;
var BREAST_CUP_MM = 42;
var BREAST_CUP_MM_BIG = 43;
var BREAST_CUP_MMM = 44;
var BREAST_CUP_MMM_LARGE = 45;
var BREAST_CUP_N = 46;
var BREAST_CUP_N_LARGE = 47;
var BREAST_CUP_NN = 48;
var BREAST_CUP_NN_LARGE = 49;
var BREAST_CUP_O = 50;
var BREAST_CUP_O_LARGE = 51;
var BREAST_CUP_OO = 52;
var BREAST_CUP_OO_LARGE = 53;
var BREAST_CUP_P = 54;
var BREAST_CUP_P_LARGE = 55;
var BREAST_CUP_PP = 56;
var BREAST_CUP_PP_LARGE = 57;
var BREAST_CUP_Q = 58;
var BREAST_CUP_Q_LARGE = 59;
var BREAST_CUP_QQ = 60;
var BREAST_CUP_QQ_LARGE = 61;
var BREAST_CUP_R = 62;
var BREAST_CUP_R_LARGE = 63;
var BREAST_CUP_RR = 64;
var BREAST_CUP_RR_LARGE = 65;
var BREAST_CUP_S = 66;
var BREAST_CUP_S_LARGE = 67;
var BREAST_CUP_SS = 68;
var BREAST_CUP_SS_LARGE = 69;
var BREAST_CUP_T = 70;
var BREAST_CUP_T_LARGE = 71;
var BREAST_CUP_TT = 72;
var BREAST_CUP_TT_LARGE = 73;
var BREAST_CUP_U = 74;
var BREAST_CUP_U_LARGE = 75;
var BREAST_CUP_UU = 76;
var BREAST_CUP_UU_LARGE = 77;
var BREAST_CUP_V = 78;
var BREAST_CUP_V_LARGE = 79;
var BREAST_CUP_VV = 80;
var BREAST_CUP_VV_LARGE = 81;
var BREAST_CUP_W = 82;
var BREAST_CUP_W_LARGE = 83;
var BREAST_CUP_WW = 84;
var BREAST_CUP_WW_LARGE = 85;
var BREAST_CUP_X = 86;
var BREAST_CUP_X_LARGE = 87;
var BREAST_CUP_XX = 88;
var BREAST_CUP_XX_LARGE = 89;
var BREAST_CUP_Y = 90;
var BREAST_CUP_Y_LARGE = 91;
var BREAST_CUP_YY = 92;
var BREAST_CUP_YY_LARGE = 93;
var BREAST_CUP_Z = 94;
var BREAST_CUP_Z_LARGE = 95;
var BREAST_CUP_ZZ = 96;
var BREAST_CUP_ZZ_LARGE = 97;
var BREAST_CUP_ZZZ = 98;
var BREAST_CUP_ZZZ_LARGE = 99;
var BREAST_CUP_HYPER_A = 100; // <-- HYPER
var BREAST_CUP_HYPER_B = 101;
var BREAST_CUP_HYPER_C = 102;
var BREAST_CUP_HYPER_D = 103;
var BREAST_CUP_HYPER_DD = 104;
var BREAST_CUP_HYPER_DD_BIG = 105;
var BREAST_CUP_HYPER_E = 106;
var BREAST_CUP_HYPER_E_BIG = 107;
var BREAST_CUP_HYPER_EE = 108;
var BREAST_CUP_HYPER_EE_BIG = 109;
var BREAST_CUP_HYPER_F = 110;
var BREAST_CUP_HYPER_F_BIG = 111;
var BREAST_CUP_HYPER_FF = 112;
var BREAST_CUP_HYPER_FF_BIG = 113;
var BREAST_CUP_HYPER_G = 114;
var BREAST_CUP_HYPER_G_BIG = 115;
var BREAST_CUP_HYPER_GG = 116;
var BREAST_CUP_HYPER_GG_BIG = 117;
var BREAST_CUP_HYPER_H = 118;
var BREAST_CUP_HYPER_H_BIG = 119;
var BREAST_CUP_HYPER_HH = 120;
var BREAST_CUP_HYPER_HH_BIG = 121;
var BREAST_CUP_HYPER_HHH = 122;
var BREAST_CUP_HYPER_I = 123;
var BREAST_CUP_HYPER_I_BIG = 124;
var BREAST_CUP_HYPER_II = 125;
var BREAST_CUP_HYPER_II_BIG = 126;
var BREAST_CUP_HYPER_J = 127;
var BREAST_CUP_HYPER_J_BIG = 128;
var BREAST_CUP_HYPER_JJ = 129;
var BREAST_CUP_HYPER_JJ_BIG = 130;
var BREAST_CUP_HYPER_K = 131;
var BREAST_CUP_HYPER_K_BIG = 132;
var BREAST_CUP_HYPER_KK = 133;
var BREAST_CUP_HYPER_KK_BIG = 134;
var BREAST_CUP_HYPER_L = 135;
var BREAST_CUP_HYPER_L_BIG = 136;
var BREAST_CUP_HYPER_LL = 137;
var BREAST_CUP_HYPER_LL_BIG = 138;
var BREAST_CUP_HYPER_M = 139;
var BREAST_CUP_HYPER_M_BIG = 140;
var BREAST_CUP_HYPER_MM = 141;
var BREAST_CUP_HYPER_MM_BIG = 142;
var BREAST_CUP_HYPER_MMM = 143;
var BREAST_CUP_HYPER_MMM_LARGE = 144;
var BREAST_CUP_HYPER_N = 145;
var BREAST_CUP_HYPER_N_LARGE = 146;
var BREAST_CUP_HYPER_NN = 147;
var BREAST_CUP_HYPER_NN_LARGE = 148;
var BREAST_CUP_HYPER_O = 149;
var BREAST_CUP_HYPER_O_LARGE = 150;
var BREAST_CUP_HYPER_OO = 151;
var BREAST_CUP_HYPER_OO_LARGE = 152;
var BREAST_CUP_HYPER_P = 153;
var BREAST_CUP_HYPER_P_LARGE = 154;
var BREAST_CUP_HYPER_PP = 155;
var BREAST_CUP_HYPER_PP_LARGE = 156;
var BREAST_CUP_HYPER_Q = 157;
var BREAST_CUP_HYPER_Q_LARGE = 158;
var BREAST_CUP_HYPER_QQ = 159;
var BREAST_CUP_HYPER_QQ_LARGE = 160;
var BREAST_CUP_HYPER_R = 161;
var BREAST_CUP_HYPER_R_LARGE = 162;
var BREAST_CUP_HYPER_RR = 163;
var BREAST_CUP_HYPER_RR_LARGE = 164;
var BREAST_CUP_HYPER_S = 165;
var BREAST_CUP_HYPER_S_LARGE = 166;
var BREAST_CUP_HYPER_SS = 167;
var BREAST_CUP_HYPER_SS_LARGE = 168;
var BREAST_CUP_HYPER_T = 169;
var BREAST_CUP_HYPER_T_LARGE = 170;
var BREAST_CUP_HYPER_TT = 171;
var BREAST_CUP_HYPER_TT_LARGE = 172;
var BREAST_CUP_HYPER_U = 173;
var BREAST_CUP_HYPER_U_LARGE = 174;
var BREAST_CUP_HYPER_UU = 175;
var BREAST_CUP_HYPER_UU_LARGE = 176;
var BREAST_CUP_HYPER_V = 177;
var BREAST_CUP_HYPER_V_LARGE = 178;
var BREAST_CUP_HYPER_VV = 179;
var BREAST_CUP_HYPER_VV_LARGE = 180;
var BREAST_CUP_HYPER_W = 181;
var BREAST_CUP_HYPER_W_LARGE = 182;
var BREAST_CUP_HYPER_WW = 183;
var BREAST_CUP_HYPER_WW_LARGE = 184;
var BREAST_CUP_HYPER_X = 185;
var BREAST_CUP_HYPER_X_LARGE = 186;
var BREAST_CUP_HYPER_XX = 187;
var BREAST_CUP_HYPER_XX_LARGE = 188;
var BREAST_CUP_HYPER_Y = 189;
var BREAST_CUP_HYPER_Y_LARGE = 190;
var BREAST_CUP_HYPER_YY = 191;
var BREAST_CUP_HYPER_YY_LARGE = 192;
var BREAST_CUP_HYPER_Z = 193;
var BREAST_CUP_HYPER_Z_LARGE = 194;
var BREAST_CUP_HYPER_ZZ = 195;
var BREAST_CUP_HYPER_ZZ_LARGE = 196;
var BREAST_CUP_HYPER_ZZZ = 197;
var BREAST_CUP_HYPER_ZZZ_LARGE = 198;
var BREAST_CUP_JACQUES00 = 199; // <-- Jacques00-cup
// End Description constants
///<reference path="appearanceDefs.ts"/>
var Appearance;
(function (Appearance) {
    Appearance.DEFAULT_GENDER_NAMES = _.object([
        [GENDER_NONE, "genderless"],
        [GENDER_MALE, "male"],
        [GENDER_FEMALE, "female"],
        [GENDER_HERM, "hermaphrodite"]
    ]);
    Appearance.DEFAULT_SKIN_NAMES = _.object([
        [SKIN_TYPE_PLAIN, "skin"],
        [SKIN_TYPE_FUR, "fur"],
        [SKIN_TYPE_LIZARD_SCALES, "scales"],
        [SKIN_TYPE_GOO, "goo"],
        [SKIN_TYPE_UNDEFINED, "undefined flesh"],
        [SKIN_TYPE_DRAGON_SCALES, "scales"],
        [SKIN_TYPE_FISH_SCALES, "scales"],
    ]);
    Appearance.DEFAULT_SKIN_DESCS = _.object([
        [SKIN_TYPE_PLAIN, "skin"],
        [SKIN_TYPE_FUR, "fur"],
        [SKIN_TYPE_LIZARD_SCALES, "scales"],
        [SKIN_TYPE_GOO, "skin"],
        [SKIN_TYPE_UNDEFINED, "skin"],
        [SKIN_TYPE_DRAGON_SCALES, "scales"],
        [SKIN_TYPE_FISH_SCALES, "scales"],
    ]);
    Appearance.DEFAULT_HAIR_NAMES = _.object([
        [HAIR_NORMAL, "normal"],
        [HAIR_FEATHER, "feather"],
        [HAIR_GHOST, "transparent"],
        [HAIR_GOO, "goopy"],
        [HAIR_ANEMONE, "tentacle"],
        [HAIR_QUILL, "quill"],
        [HAIR_BASILISK_SPINES, "spiny basilisk"],
        [HAIR_BASILISK_PLUME, "feathery plume"],
    ]);
    Appearance.DEFAULT_BEARD_NAMES = _.object([
        [BEARD_NORMAL, "normal"],
        [BEARD_GOATEE, "goatee"],
        [BEARD_CLEANCUT, "clean-cut"],
        [BEARD_MOUNTAINMAN, "mountain-man"]
    ]);
    Appearance.DEFAULT_FACE_NAMES = _.object([
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
    ]);
    Appearance.DEFAULT_TONGUE_NAMES = _.object([
        [TONGUE_HUMAN, "human"],
        [TONGUE_SNAKE, "serpentine"],
        [TONGUE_DEMONIC, "demonic"],
        [TONGUE_DRACONIC, "draconic"],
        [TONGUE_ECHIDNA, "echidna"],
        [TONGUE_LIZARD, "lizard"],
    ]);
    Appearance.DEFAULT_EYES_NAMES = _.object([
        [EYES_HUMAN, "human"],
        [EYES_FOUR_SPIDER_EYES, "4 spider"],
        [EYES_BLACK_EYES_SAND_TRAP, "sandtrap black"],
        [EYES_LIZARD, "lizard"],
        [EYES_DRAGON, "dragon"],
        [EYES_BASILISK, "basilisk"],
    ]);
    Appearance.DEFAULT_EARS_NAMES = _.object([
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
    ]);
    Appearance.DEFAULT_HORNS_NAMES = _.object([
        [HORNS_NONE, "non-existant"],
        [HORNS_DEMON, "demon"],
        [HORNS_COW_MINOTAUR, "cow"],
        [HORNS_DRACONIC_X2, "2 draconic"],
        [HORNS_DRACONIC_X4_12_INCH_LONG, "four 12\" long draconic"],
        [HORNS_ANTLERS, "deer"],
        [HORNS_GOAT, "goat"],
        [HORNS_RHINO, "rhino"]
    ]);
    Appearance.DEFAULT_ANTENNAE_NAMES = _.object([
        [ANTENNAE_NONE, "non-existant"],
        [ANTENNAE_BEE, "bee"]
    ]);
    Appearance.DEFAULT_ARM_NAMES = _.object([
        [ARM_TYPE_HUMAN, "human"],
        [ARM_TYPE_HARPY, "harpy"],
        [ARM_TYPE_SPIDER, "spider"],
        [ARM_TYPE_PREDATOR, "predator"],
        [ARM_TYPE_SALAMANDER, "salamander"]
    ]);
    Appearance.DEFAULT_TAIL_NAMES = _.object([
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
    ]);
    Appearance.DEFAULT_WING_NAMES = _.object([
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
    ]);
    Appearance.DEFAULT_WING_DESCS = _.object([
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
    ]);
    Appearance.DEFAULT_LOWER_BODY_NAMES = _.object([
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
    ]);
    Appearance.DEFAULT_PIERCING_NAMES = _.object([
        [PIERCING_TYPE_NONE, "none"],
        [PIERCING_TYPE_STUD, "stud"],
        [PIERCING_TYPE_RING, "ring"],
        [PIERCING_TYPE_LADDER, "ladder"],
        [PIERCING_TYPE_HOOP, "hoop"],
        [PIERCING_TYPE_CHAIN, "chain"]
    ]);
    Appearance.DEFAULT_VAGINA_TYPE_NAMES = _.object([
        [VAGINA_TYPE_HUMAN, "human"],
        [VAGINA_TYPE_EQUINE, "equine"],
        [VAGINA_TYPE_BLACK_SAND_TRAP, "black sandtrap"]
    ]);
    Appearance.DEFAULT_VAGINA_WETNESS_SCALES = [
        [VAGINA_WETNESS_DRY, "dry"],
        [VAGINA_WETNESS_NORMAL, "normal"],
        [VAGINA_WETNESS_WET, "wet"],
        [VAGINA_WETNESS_SLICK, "slick"],
        [VAGINA_WETNESS_DROOLING, "drooling"],
        [VAGINA_WETNESS_SLAVERING, "slavering"],
    ];
    Appearance.DEFAULT_VAGINA_LOOSENESS_SCALES = [
        [VAGINA_LOOSENESS_TIGHT, "tight"],
        [VAGINA_LOOSENESS_NORMAL, "normal"],
        [VAGINA_LOOSENESS_LOOSE, "loose"],
        [VAGINA_LOOSENESS_GAPING, "gaping"],
        [VAGINA_LOOSENESS_GAPING_WIDE, "gaping wide"],
        [VAGINA_LOOSENESS_LEVEL_CLOWN_CAR, "clown-car level"]
    ];
    Appearance.DEFAULT_ANAL_WETNESS_SCALES = [
        [ANAL_WETNESS_DRY, "dry"],
        [ANAL_WETNESS_NORMAL, "normal"],
        [ANAL_WETNESS_MOIST, "moist"],
        [ANAL_WETNESS_SLIMY, "slimym"],
        [ANAL_WETNESS_DROOLING, "drooling"],
        [ANAL_WETNESS_SLIME_DROOLING, "slime-drooling"],
    ];
    Appearance.DEFAULT_ANAL_LOOSENESS_SCALES = [
        [ANAL_LOOSENESS_VIRGIN, "virgin"],
        [ANAL_LOOSENESS_TIGHT, "tight"],
        [ANAL_LOOSENESS_NORMAL, "normal"],
        [ANAL_LOOSENESS_LOOSE, "loose"],
        [ANAL_LOOSENESS_STRETCHED, "stretched"],
        [ANAL_LOOSENESS_GAPING, "gaping"]
    ];
    Appearance.DEFAULT_HIP_RATING_SCALES = [
        [HIP_RATING_BOYISH, "boyish"],
        [HIP_RATING_SLENDER, "slender"],
        [HIP_RATING_AVERAGE, "average"],
        [HIP_RATING_AMPLE, "ample"],
        [HIP_RATING_CURVY, "curvy"],
        [HIP_RATING_FERTILE, "fertile"],
        [HIP_RATING_INHUMANLY_WIDE, "inhumanly wide"]
    ];
    Appearance.DEFAULT_BUTT_RATING_SCALES = [
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
    function cockDescript(creature, cockIndex) {
        if (cockIndex === void 0) { cockIndex = 0; }
        if (creature.cocks.length == 0)
            return errstr("cockDescript Called But No Cock Present");
        var cockType = CockTypesEnum.HUMAN;
        if (cockIndex != 99) {
            if (creature.cocks.length <= cockIndex)
                return errstr("ERROR: cockDescript called with index of " + cockIndex + " - out of BOUNDS");
            cockType = creature.cocks[cockIndex].cockType;
        }
        var isPierced = (creature.cocks.length == 1) && (creature.cocks[cockIndex].isPierced); //Only describe as pierced or sock covered if the creature has just one cock
        var hasSock = (creature.cocks.length == 1) && (creature.cocks[cockIndex].sock != "");
        var isGooey = (creature.skinType == SKIN_TYPE_GOO);
        return cockDescription(cockType, creature.cocks[cockIndex].cockLength, creature.cocks[cockIndex].cockThickness, creature.lust, creature.cumQ(), isPierced, hasSock, isGooey);
    }
    Appearance.cockDescript = cockDescript;
    function cockDescription(cockType, length, girth, lust, cumQ, isPierced, hasSock, isGooey) {
        if (lust === void 0) { lust = 50; }
        if (cumQ === void 0) { cumQ = 10; }
        if (isPierced === void 0) { isPierced = false; }
        if (hasSock === void 0) { hasSock = false; }
        if (isGooey === void 0) { isGooey = false; }
        if (rand(2) == 0) {
            if (cockType == CockTypesEnum.HUMAN)
                return cockAdjective(cockType, length, girth, lust, cumQ, isPierced, hasSock, isGooey) + " " + cockNoun(cockType);
            else
                return cockAdjective(cockType, length, girth, lust, cumQ, isPierced, hasSock, isGooey) + ", " + cockNoun(cockType);
        }
        return cockNoun(cockType);
    }
    Appearance.cockDescription = cockDescription;
    function cockNoun(cockType) {
        var l = {};
        l[CockTypesEnum.HUMAN] = [
            "cock", "cock", "cock", "cock", "cock",
            "prick", "prick",
            "pecker",
            "shaft", "shaft", "shaft"
        ];
        l[CockTypesEnum.BEE] = [
            "bee prick", "bee prick", "bee prick", "bee prick",
            "insectoid cock", "insectoid cock",
            "furred monster"
        ];
        l[CockTypesEnum.DOG] = [
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
            "knotted dog-cock"
        ];
        l[CockTypesEnum.FOX] = [
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
            "knotted fox-cock"
        ];
        l[CockTypesEnum.HORSE] = [
            "flared horse-cock",
            "equine prick",
            "bestial horse-shaft",
            "flat-tipped horse-member",
            "animalistic stallion-prick",
            "equine dong",
            "beast cock",
            "flared stallion-cock"
        ];
        l[CockTypesEnum.DEMON] = [
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
            "blighted cock"
        ];
        l[CockTypesEnum.TENTACLE] = [
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
            "vine-shaped cock"
        ];
        l[CockTypesEnum.CAT] = [
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
            "nubby kitten-prick"
        ];
        l[CockTypesEnum.LIZARD] = [
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
            "bulging snake-dick"
        ];
        l[CockTypesEnum.ANEMONE] = [
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
            "squirming shaft"
        ];
        l[CockTypesEnum.KANGAROO] = [
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
            "squirming shaft"
        ];
        l[CockTypesEnum.DRAGON] = [
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
            "scaly shaft"
        ];
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
            "knotted erection"
        ];
        l[CockTypesEnum.AVIAN] = [
            "bird cock",
            "bird dick",
            "bird pecker",
            "avian cock",
            "avian dick",
            "avian penis",
            "avian prick",
            "avian pecker",
            "tapered cock",
            "tapered prick"
        ];
        l[CockTypesEnum.PIG] = [
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
            "pink pecker"
        ];
        l[CockTypesEnum.RHINO] = [
            "oblong cock",
            "oblong dick",
            "oblong prick",
            "rhino cock",
            "rhino dick",
            "rhino penis",
            "rhino pecker",
            "rhino prick",
            "bulged rhino cock",
            "bulged rhino dick"
        ];
        l[CockTypesEnum.ECHIDNA] = [
            "strange echidna dick",
            "strange echidna cock",
            "echidna dick",
            "echidna penis",
            "echidna cock",
            "exotic endowment",
            "four-headed prick",
            "four-headed penis",
            "four-headed cock",
            "four-headed dick"
        ];
        var options = l[cockType] || ["cock", "prick", "pecker", "shaft"];
        return randomChoice.apply(void 0, options);
    }
    Appearance.cockNoun = cockNoun;
    function cockAdjective(cockType, length, girth, lust, cumQ, isPierced, hasSock, isGooey) {
        if (lust === void 0) { lust = 50; }
        if (cumQ === void 0) { cumQ = 10; }
        if (isPierced === void 0) { isPierced = false; }
        if (hasSock === void 0) { hasSock = false; }
        if (isGooey === void 0) { isGooey = false; }
        var options = ["length", "girth"];
        if (lust > 75)
            options.push("lust");
        if (isPierced)
            options.push("pierced");
        if (hasSock)
            options.push("sock");
        if (isGooey)
            options.push("goo");
        switch (randomChoice(options)) {
            case "lust":
                if (lust > 90) {
                    if (cumQ < 50)
                        return randomChoice("throbbing", "pulsating"); //Weak as shit cum
                    if (cumQ < 200)
                        return randomChoice("dribbling", "leaking", "drooling"); //lots of cum? drippy.
                    return randomChoice("very drippy", "pre-gushing", "cum-bubbling", "pre-slicked", "pre-drooling"); //Tons of cum
                }
                else {
                    if (cumQ < 50)
                        return randomChoice("turgid", "blood-engorged", "rock-hard", "stiff", "eager"); //Weak as shit cum
                    if (cumQ < 200)
                        return randomChoice("turgid", "blood-engorged", "rock-hard", "stiff", "eager", "fluid-beading", "slowly-oozing"); //A little drippy
                    return randomChoice("dribbling", "drooling", "fluid-leaking", "leaking"); //uber drippy
                }
            case "pierced":
                return "pierced";
            case "sock":
                return randomChoice("sock-sheathed", "garment-wrapped", "smartly dressed", "cloth-shrouded", "fabric swaddled", "covered");
            case "goo":
                return randomChoice("goopey", "gooey", "slimy");
            case "girth":
                if (girth <= 0.75)
                    return randomChoice("thin", "slender", "narrow");
                if (girth <= 1.2)
                    return "ample";
                if (girth <= 1.4)
                    return randomChoice("ample", "big");
                if (girth <= 2)
                    return randomChoice("broad", "meaty", "girthy");
                if (girth <= 3.5)
                    return randomChoice("fat", "distended", "wide");
                return randomChoice("inhumanly distended", "monstrously thick", "bloated");
            case "length":
            default:
                if (length < 3)
                    return randomChoice("little", "toy-sized", "mini", "budding", "tiny");
                if (length < 5)
                    return randomChoice("short", "small");
                if (length < 7)
                    return randomChoice("fair-sized", "nice");
                if (length < 9) {
                    if (cockType == CockTypesEnum.HORSE)
                        return randomChoice("sizable", "pony-sized", "colt-like");
                    return randomChoice("sizable", "long", "lengthy");
                }
                if (length < 13) {
                    if (cockType == CockTypesEnum.DOG)
                        return randomChoice("huge", "foot-long", "mastiff-like");
                    return randomChoice("huge", "foot-long", "cucumber-length");
                }
                if (length < 18)
                    return randomChoice("massive", "knee-length", "forearm-length");
                if (length < 30)
                    return randomChoice("enormous", "giant", "arm-like");
                if (cockType == CockTypesEnum.TENTACLE && rand(2) == 0)
                    return "coiled";
                return randomChoice("towering", "freakish", "monstrous", "massive");
        }
    }
    Appearance.cockAdjective = cockAdjective;
    function biggestBreastSizeDescript(creature) {
        var choice;
        var descript = "";
        var row = creature.breastRows[creature.biggestTitRow()];
        if (row.breastRating < 1)
            return "flat breasts";
        //50% of the time size-descript them
        if (rand(2) == 0)
            descript += breastSize(row.breastRating);
        //Nouns!
        choice = rand(10);
        switch (choice) {
            case 0:
                descript += "breasts";
                break;
            case 1:
                if (row.lactationMultiplier > 2)
                    descript += "milk-udders";
                else
                    descript += "breasts";
                break;
            case 2:
                if (row.lactationMultiplier > 1.5)
                    descript += "milky ";
                if (row.breastRating > 4)
                    descript += "tits";
                else
                    descript += "breasts";
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
                if (row.lactationMultiplier >= 1 && row.lactationMultiplier < 2.5)
                    descript += "milk jugs";
                if (row.lactationMultiplier >= 2.5)
                    descript += "udders";
                if (row.lactationMultiplier < 1)
                    descript += "jugs";
                break;
            case 8:
                if (row.breastRating > 6)
                    descript += "love-pillows";
                else
                    descript += "boobs";
                break;
            case 9:
                if (row.breastRating > 6)
                    descript += "tits";
                else
                    descript += "breasts";
                break;
        }
        return descript;
    }
    Appearance.biggestBreastSizeDescript = biggestBreastSizeDescript;
    function breastSize(val) {
        var descript = "";
        //Catch all for dudes.
        if (val < 1)
            return "manly ";
        if (val <= 2) {
            //Small - A->B
            descript += randomChoice("palmable ", "tight ", "perky ", "baseball-sized ");
        }
        else if (val <= 4) {
            //C-D
            descript += randomChoice("nice ", "hand-filling ", "well-rounded ", "supple ", "softball-sized ");
        }
        else if (val < 11) {
            //DD->big EE
            descript += randomChoice("big ", "large ", "pillowy ", "jiggly ", "volleyball-sized ");
        }
        else if (val < 15) {
            //F->big FF
            descript += randomChoice("soccerball-sized ", "hand-overflowing ", "generous ", "jiggling ");
        }
        else if (val < 24) {
            //G -> HHH
            descript += randomChoice("basketball-sized ", "whorish ", "cushiony ", "wobbling ");
        }
        else if (val < 35) {
            //I -> KK
            descript += randomChoice("massive motherly ", "luscious ", "smothering ", "prodigious ");
        }
        else if (val < 100) {
            //K- > MMM+
            descript += randomChoice("mountainous ", "monumental ", "back-breaking ", "exercise-ball-sized ", "immense ");
        }
        else {
            //Hyper sizes
            descript += randomChoice("ludicrously-sized ", "hideously large ", "absurdly large ", "back-breaking ", "colossal ", "immense ");
        }
        return descript;
    }
    Appearance.breastSize = breastSize;
    function allBreastsDescript(creature) {
        var storage = "";
        if (creature.breastRows.length == 0)
            return "unremarkable chest muscles ";
        if (creature.breastRows.length == 2) {
            //if (creature.totalBreasts() == 4) storage += "quartet of ";
            storage += "two rows of ";
        }
        else if (creature.breastRows.length == 3) {
            if (rand(2) == 0)
                storage += "three rows of ";
            else
                storage += "multi-layered ";
        }
        if (creature.breastRows.length == 4) {
            if (rand(2) == 0)
                storage += "four rows of ";
            else
                storage += "four-tiered ";
        }
        if (creature.breastRows.length == 5) {
            if (rand(2) == 0)
                storage += "five rows of ";
            else
                storage += "five-tiered ";
        }
        storage += biggestBreastSizeDescript(creature);
        return storage;
    }
    Appearance.allBreastsDescript = allBreastsDescript;
    function breastDescript(size, lactation) {
        if (lactation === void 0) { lactation = 0; }
        if (size < 1)
            return "flat breasts";
        var descript = (rand(2) == 0 ? Appearance.breastSize(size) : ""); //Add a description of the breast size 50% of the time
        switch (rand(10)) {
            case 1:
                if (lactation > 2)
                    return descript + "milk-udders";
                break;
            case 2:
                if (lactation > 1.5)
                    descript += "milky ";
                if (size > 4)
                    return descript + "tits";
                break;
            case 4:
            case 5:
            case 6:
                return descript + "tits";
            case 7:
                if (lactation >= 2.5)
                    return descript + "udders";
                if (lactation >= 1)
                    descript += "milk ";
                return descript + "jugs";
            case 8:
                if (size > 6)
                    return descript + "love-pillows";
                return descript + "boobs";
            case 9:
                if (size > 6)
                    return descript + "tits";
        }
        return descript + "breasts";
    }
    Appearance.breastDescript = breastDescript;
    function assholeDescript(i_creature, forceDesc) {
        if (forceDesc === void 0) { forceDesc = false; }
        var description = "";
        // 66% Wetness Descript
        var ANAL_WETNESS_DESCRIPTORS = {};
        ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_DRY] = "";
        ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_NORMAL] = "";
        ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_MOIST] = "moist ";
        ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_SLIMY] = "slimy ";
        ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_DROOLING] = "drooling ";
        ANAL_WETNESS_DESCRIPTORS[ANAL_WETNESS_SLIME_DROOLING] = "slime-drooling ";
        if (forceDesc || rand(3) <= 1) {
            description += ANAL_WETNESS_DESCRIPTORS[i_creature.ass.analWetness] || "";
        }
        var ANAL_TIGHTNESS_DESCRIPTORS = {};
        ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_VIRGIN] = "virgin ";
        ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_TIGHT] = "tight ";
        ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_NORMAL] = "loose ";
        ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_LOOSE] = "roomy ";
        ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_STRETCHED] = "stretched ";
        ANAL_TIGHTNESS_DESCRIPTORS[ANAL_LOOSENESS_GAPING] = "gaping ";
        //25% tightness description
        if (forceDesc || rand(4) == 0 || (i_creature.ass.analLooseness <= 1 && rand(4) <= 2)) {
            description += ANAL_TIGHTNESS_DESCRIPTORS[i_creature.ass.analLooseness] || "";
        }
        //asshole descript
        description += randomChoice("ass", "anus", "pucker", "backdoor", "asshole", "butthole");
        return description;
    }
    Appearance.assholeDescript = assholeDescript;
    function tongueDescript(i_creature) {
        if (i_creature.tongueType == TONGUE_HUMAN || !Appearance.DEFAULT_TONGUE_NAMES[i_creature.tongueType])
            return "tongue";
        return Appearance.DEFAULT_TONGUE_NAMES[i_creature.tongueType] + " tongue";
    }
    Appearance.tongueDescript = tongueDescript;
    function vaginaDescript(i_creature, i_vaginaIndex, forceDesc) {
        if (i_vaginaIndex === void 0) { i_vaginaIndex = 0; }
        if (forceDesc === void 0) { forceDesc = false; }
        if (i_vaginaIndex > (i_creature.vaginas.length - 1) || i_vaginaIndex < 0) {
            return errstr("Invalid vagina number (" + i_vaginaIndex + ") passed to vaginaDescript()");
        }
        var description = "";
        var weighting = 0;
        var options = [];
        //Very confusing way to display values.
        var vagina = i_creature.vaginas[i_vaginaIndex];
        if (vagina.vaginalLooseness == 0)
            weighting = 61;
        if (vagina.vaginalLooseness == 4 || vagina.vaginalLooseness == 5)
            weighting = 10;
        //tightness descript - 40% display rate
        if (forceDesc || rand(100) + weighting > 60) {
            if (vagina.vaginalLooseness == 0) {
                if (vagina.virgin)
                    description += "virgin";
                else
                    description += "tight";
            }
            if (vagina.vaginalLooseness == 2)
                description += "loose";
            if (vagina.vaginalLooseness == 3)
                description += "very loose";
            if (vagina.vaginalLooseness == 4)
                description += "gaping";
            if (vagina.vaginalLooseness == 5)
                description += "gaping-wide";
        }
        //wetness descript - 30% display rate
        if (forceDesc || rand(100) + weighting > 70) {
            if (description != "")
                description += ", ";
            if (vagina.vaginalWetness == 0)
                description += "dry";
            if (vagina.vaginalWetness == 1)
                description += "moist";
            if (vagina.vaginalWetness == 2)
                description += "wet";
            if (vagina.vaginalWetness == 3)
                description += "slick";
            if (vagina.vaginalWetness == 4)
                description += "drooling";
            if (vagina.vaginalWetness == 5)
                description += "slavering";
        }
        if (vagina.labiaPierced > 0 && (forceDesc || rand(3) == 0)) {
            if (description != "")
                description += ", ";
            description += "pierced";
        }
        if (description == "" && i_creature.hasGooSkin()) {
            if (description != "")
                description = description + ", ";
            if (rand(2) == 0)
                description += "gooey";
            else
                description += "slimy";
        }
        if (i_creature.vaginaType() == 5 && (forceDesc || Math.floor(Math.random() * 2) == 0)) {
            if (description != "")
                description += ", ";
            description += randomChoice("black", "onyx", "ebony", "dusky", "sable", "obsidian", "midnight-hued", "jet black");
        }
        if (description != "")
            description += " ";
        if (kGAMECLASS.flags[kFLAGS.SFW_MODE] > 0) {
            options = ["vagina",
                "pussy",
                "cooter",
                "snatch",
                "muff"];
        }
        else {
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
    Appearance.vaginaDescript = vaginaDescript;
    function hairDescription(i_creature) {
        var description = "";
        var options = [];
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
        else
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
            if (i_creature.hairType == HAIR_FEATHER)
                description += "feather-";
            else if (i_creature.hairType == HAIR_GHOST)
                description += "transparent ";
            else if (i_creature.hairType == HAIR_GOO)
                description += "goo-";
            else if (i_creature.hairType == HAIR_ANEMONE)
                description += "tentacle-";
            else if (i_creature.hairType == HAIR_QUILL)
                description += "quill-";
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
        if (i_creature.hairType == HAIR_FEATHER)
            description += "feather-";
        else if (i_creature.hairType == HAIR_GHOST)
            description += "transparent ";
        else if (i_creature.hairType == HAIR_GOO)
            description += "goo-";
        else if (i_creature.hairType == HAIR_ANEMONE)
            description += "tentacle-";
        else if (i_creature.hairType == HAIR_QUILL)
            description += "quill-";
        description += "hair";
        return description;
    }
    Appearance.hairDescription = hairDescription;
    function wingsDescript(i_creature) {
        return Appearance.DEFAULT_WING_NAMES[i_creature.wingType] + " wings";
    }
    Appearance.wingsDescript = wingsDescript;
    function tailDescript(i_creature) {
        if (i_creature.tailType == TAIL_TYPE_NONE) {
            trace("WARNING: Creature has no tails to describe.");
            return "<b>!Creature has no tails to describe!</b>";
        }
        var descript = "";
        if (i_creature.tailType == TAIL_TYPE_FOX && i_creature.tailVenom >= 1) {
            // Kitsune tails, we're using tailVenom to track tail count
            if (i_creature.tailVenom > 1) {
                if (i_creature.tailVenom == 2)
                    descript += "pair ";
                else if (i_creature.tailVenom == 3)
                    descript += "trio ";
                else if (i_creature.tailVenom == 4)
                    descript += "quartet ";
                else if (i_creature.tailVenom == 5)
                    descript += "quintet ";
                else if (i_creature.tailVenom > 5)
                    descript += "bundle ";
                descript += "of kitsune tails";
            }
            else
                descript += "kitsune tail";
        }
        else {
            descript += Appearance.DEFAULT_TAIL_NAMES[i_creature.tailType];
            descript += " tail";
        }
        return descript;
    }
    Appearance.tailDescript = tailDescript;
    function oneTailDescript(i_creature) {
        if (i_creature.tailType == TAIL_TYPE_NONE) {
            trace("WARNING: Creature has no tails to describe.");
            return "<b>!Creature has no tails to describe!</b>";
        }
        var descript = "";
        if (i_creature.tailType == TAIL_TYPE_FOX && i_creature.tailVenom >= 1) {
            if (i_creature.tailVenom == 1) {
                descript += "your kitsune tail";
            }
            else {
                descript += "one of your kitsune tails";
            }
        }
        else {
            descript += "your " + Appearance.DEFAULT_TAIL_NAMES[i_creature.tailType] + " tail";
        }
        return descript;
    }
    Appearance.oneTailDescript = oneTailDescript;
    function buttDescription(i_creature) {
        var description = "";
        if (i_creature.buttRating <= 1) {
            description += randomChoice("insignificant ", "very small ");
        }
        else if (i_creature.buttRating > 1 && i_creature.buttRating < 4) {
            description += randomChoice("tight ", "firm ", "compact ");
        }
        else if (i_creature.buttRating >= 4 && i_creature.buttRating < 6) {
            description += randomChoice("regular ", "unremarkable ");
        }
        else if (i_creature.buttRating >= 6 && i_creature.buttRating < 8) {
            if (rand(3) == 0)
                return "handful of ass";
            description += randomChoice("full ", "shapely ");
        }
        else if (i_creature.buttRating >= 8 && i_creature.buttRating < 10) {
            description += randomChoice("squeezable ", "large ", "substantial ");
        }
        else if (i_creature.buttRating >= 10 && i_creature.buttRating < 13) {
            description += randomChoice("jiggling ", "spacious ", "heavy ");
        }
        else if (i_creature.buttRating >= 13 && i_creature.buttRating < 16) {
            if (rand(3) == 0)
                return "generous amount of ass";
            description += randomChoice("expansive ", "voluminous ");
        }
        else if (i_creature.buttRating >= 16 && i_creature.buttRating < 20) {
            if (rand(3) == 2)
                return "jiggling expanse of ass";
            description += randomChoice("huge ", "vast ");
        }
        else if (i_creature.buttRating >= 20) {
            description += randomChoice("ginormous ", "colossal ", "tremendous ");
        }
        description += randomChoice("butt ", "ass ");
        if (rand(2) == 0)
            description += "cheeks";
        return description;
    }
    Appearance.buttDescription = buttDescription;
    function eyesDescript(i_creature) {
        return Appearance.DEFAULT_EYES_NAMES[i_creature.eyeType] + " eyes";
    }
    Appearance.eyesDescript = eyesDescript;
    function hipDescription(i_character) {
        var description = "";
        var hipRating = i_character.hipRating;
        if (hipRating <= 1) {
            description = randomChoice("tiny ", "narrow ", "boyish ");
        }
        else if (hipRating > 1 && hipRating < 4) {
            description = randomChoice("slender ", "narrow ", "thin ");
            if (i_character.thickness < 30) {
                if (rand(2) == 0)
                    description = "slightly-flared ";
                else
                    description = "curved ";
            }
        }
        else if (hipRating >= 4 && hipRating < 6) {
            description = randomChoice("well-formed ", "pleasant ");
            if (i_character.thickness < 30) {
                if (rand(2) == 0)
                    description = "flared ";
                else
                    description = "curvy ";
            }
        }
        else if (hipRating >= 6 && hipRating < 10) {
            description = randomChoice("ample ", "noticeable ", "girly ");
            if (i_character.thickness < 30) {
                if (rand(2) == 0)
                    description = "flared ";
                else
                    description = "waspish ";
            }
        }
        else if (hipRating >= 10 && hipRating < 15) {
            description = randomChoice("flared ", "curvy ", "wide ");
            if (i_character.thickness < 30) {
                if (rand(2) == 0)
                    description = "flared ";
                else
                    description = "waspish ";
            }
        }
        else if (hipRating >= 15 && hipRating < 20) {
            if (i_character.thickness < 40) {
                if (rand(2) == 0)
                    description = "flared, ";
                else
                    description = "waspish, ";
            }
            description += randomChoice("fertile ", "child-bearing ", "voluptuous ");
        }
        else if (hipRating >= 20) {
            if (i_character.thickness < 40) {
                if (rand(2) == 0)
                    description = "flaring, ";
                else
                    description = "incredibly waspish, ";
            }
            description += randomChoice("broodmother-sized ", "cow-like ", "inhumanly-wide ");
        }
        //Taurs
        if (i_character.isTaur() && rand(3) == 0)
            description += "flanks";
        else if (i_character.isNaga() && rand(3) == 0)
            description += "sides";
        else {
            //Non taurs or taurs who didn't roll flanks
            description += randomChoice("hips", "thighs");
        }
        return description;
    }
    Appearance.hipDescription = hipDescription;
    function nippleDescription(i_creature, i_rowNum) {
        if (i_rowNum === void 0) { i_rowNum = 0; }
        //DEBUG SHIT!
        if (i_rowNum > (i_creature.breastRows.length - 1) || i_rowNum < 0) {
            return errstr("Error: Invalid breastRows (" + i_rowNum + ") passed to nippleDescription()");
        }
        var haveDescription = false;
        var description = "";
        //Size descriptors 33% chance
        var nippleLength = i_creature.nippleLength;
        if (rand(4) == 0) {
            //TINAHHHH
            if (nippleLength < .25) {
                description += randomChoice("tiny ", "itty-bitty ", "teeny-tiny ", "dainty ");
            }
            else if (nippleLength >= .4 && nippleLength < 1) {
                //Prominant
                description += randomChoice("prominent ", "pencil eraser-sized ", "eye-catching ", "pronounced ", "striking ");
            }
            else if (nippleLength >= 1 && nippleLength < 2) {
                //Big 'uns
                description += randomChoice("forwards-jutting ", "over-sized ", "fleshy ", "large protruding ");
            }
            else if (nippleLength >= 2 && nippleLength < 3.2) {
                //'Uge
                description += randomChoice("elongated ", "massive ", "awkward ", "lavish ", "hefty ");
            }
            else if (nippleLength >= 3.2) {
                //Massive
                description += randomChoice("bulky ", "ponderous ", "thumb-sized ", "cock-sized ", "cow-like ");
            }
            haveDescription = true;
        }
        //Milkiness/Arousal/Wetness Descriptors 33% of the time
        if (rand(3) == 0 && !haveDescription) {
            //Fuckable chance first!
            if (i_creature.hasFuckableNipples()) {
                //Fuckable and lactating?
                if (i_creature.biggestLactation() > 1) {
                    description += randomChoice("milk-lubricated ", "lactating ", "lactating ", "milk-slicked ", "milky ");
                }
                else {
                    description += randomChoice("wet ", "mutated ", "slimy ", "damp ", "moist ", "slippery ", "oozing ", "sloppy ", "dewy ");
                }
                haveDescription = true;
            }
            else if (i_creature.biggestLactation() > 0) {
                //Light lactation
                if (i_creature.biggestLactation() <= 1) {
                    description += randomChoice("milk moistened ", "slightly lactating ", "milk-dampened ");
                }
                //Moderate lactation
                if (i_creature.biggestLactation() > 1 && i_creature.biggestLactation() <= 2) {
                    description += randomChoice("lactating ", "milky ", "milk-seeping ");
                }
                //Heavy lactation
                if (i_creature.biggestLactation() > 2) {
                    description += randomChoice("dripping ", "dribbling ", "milk-leaking ", "drooling ");
                }
                haveDescription = true;
            }
        }
        else if (rand(3) == 0 && !haveDescription) {
            if (i_creature.lust > 50 && i_creature.lust < 75) {
                description += randomChoice("erect ", "perky ", "erect ", "firm ", "tender ");
                haveDescription = true;
            }
            if (i_creature.lust >= 75) {
                description += randomChoice("throbbing ", "trembling ", "needy ", "throbbing ");
                haveDescription = true;
            }
        }
        if (!haveDescription && rand(2) == 0 && i_creature.nipplesPierced > 0 && i_rowNum == 0) {
            if (i_creature.nipplesPierced == 5)
                description += "chained ";
            else
                description += "pierced ";
            haveDescription = true;
        }
        if (!haveDescription && i_creature.hasGooSkin()) {
            description += randomChoice("slime-slick ", "goopy ", "slippery ");
        }
        if (!haveDescription && i_creature.hasStatusEffect("BlackNipples")) {
            description += randomChoice("black ", "ebony ", "sable ");
        }
        //Nounsssssssss*BOOM*
        switch (rand(5)) {
            case 0:
                description += "nipple";
                break;
            case 1:
                if (nippleLength < .5)
                    description += "perky nipple";
                else
                    description += "cherry-like nub";
                break;
            case 2:
                if (i_creature.hasFuckableNipples())
                    description += "fuckable nip";
                else {
                    if (i_creature.biggestLactation() >= 1 && nippleLength >= 1)
                        description += "teat";
                    else
                        description += "nipple";
                }
                break;
            case 3:
                if (i_creature.hasFuckableNipples())
                    description += "nipple-hole";
                else {
                    if (i_creature.biggestLactation() >= 1 && nippleLength >= 1)
                        description += "teat";
                    else
                        description += "nipple";
                }
                break;
            case 4:
                if (i_creature.hasFuckableNipples())
                    description += "nipple-cunt";
                else
                    description += "nipple";
                break;
        }
        return description;
    }
    Appearance.nippleDescription = nippleDescription;
    function ballsDescription(i_forcedSize, i_plural, i_creature, i_withArticle) {
        if (i_withArticle === void 0) { i_withArticle = false; }
        if (i_creature.balls == 0)
            return "prostate";
        var description = "";
        var options;
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
            if (description)
                description += " ";
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
            if (description)
                description += " ";
            options = ["tightly-compressed",
                "snug",
                "cute",
                "pleasantly squeezed",
                "compressed-together"];
            description += randomChoice(options);
        }
        //Descriptive
        if (i_creature.hoursSinceCum >= 48 && rand(2) == 0 && !i_forcedSize) {
            if (description)
                description += " ";
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
            if (description)
                description += " ";
            options = ["goopey",
                "gooey",
                "slimy"];
            description += randomChoice(options);
        }
        if (description)
            description += " ";
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
        if (i_plural)
            description += "s";
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
    Appearance.ballsDescription = ballsDescription;
    function hairOrFur(creature) {
        return creature.hasFur() ? "fur" : "hair";
    }
    Appearance.hairOrFur = hairOrFur;
    function sackDescript(i_creature) {
        if (i_creature.balls == 0)
            return "prostate";
        var options;
        var description = "";
        options = ["scrotum",
            "sack",
            "nutsack",
            "ballsack",
            "beanbag",
            "pouch"];
        description += randomChoice(options);
        return description;
    }
    Appearance.sackDescript = sackDescript;
    function clitDescription(i_creature) {
        var description = "";
        var options;
        var haveDescription = false;
        //Length Adjective - 50% chance
        if (rand(2) == 0) {
            //small clits!
            var clitLength = i_creature.vaginas[0].clitLength;
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
                options = ["throbbing ",
                    "pulsating ",
                    "hard "];
                description += randomChoice(options);
                haveDescription = true;
            }
            //High libido - always use if no other descript
            if (i_creature.lib > 50 && rand(2) == 0 && !haveDescription) {
                options = ["insatiable ",
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
            return errstr("clitDescript with no clit");
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
    Appearance.clitDescription = clitDescription;
    function multiCockDescriptLight(creature) {
        if (creature.cocks.length < 1) {
            return errstr("multiCockDescriptLight() called with no penises present.");
        }
        //Get cock counts
        var descript = "";
        var currCock = 0;
        var totCock = creature.cocks.length;
        var dogCocks = 0;
        var horseCocks = 0;
        var normalCocks = 0;
        var normalCockKey = 0;
        var dogCockKey = 0;
        var horseCockKey = 0;
        var averageLength = 0;
        var averageThickness = 0;
        var same = true;
        //For temp14 random values
        var rando = 0;
        var descripted = false;
        //If one, return normal cock descript
        if (totCock == 1)
            return creature.cockDescript(0);
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
            if (same && currCock > 0 && creature.cocks[currCock].cockType != creature.cocks[currCock - 1].cockType)
                same = false;
            currCock++;
        }
        //Crunch averages
        averageLength /= currCock;
        averageThickness /= currCock;
        //Quantity descriptors
        if (creature.cockTotal() == 1) {
            if (dogCocks == 1)
                return cockNoun(CockTypesEnum.DOG);
            if (horseCocks == 1)
                return cockNoun(CockTypesEnum.HORSE);
            if (normalCocks == 1)
                return creature.cockDescript(0);
            //Failsafe
            return creature.cockDescript(0);
        }
        if (currCock == 2) {
            //For cocks that are the same
            if (same) {
                descript += randomChoice("pair of ", "two ", "brace of ", "matching ", "twin ");
                descript += creature.cockAdjective();
                if (normalCocks == 2)
                    descript += " " + cockNoun(CockTypesEnum.HUMAN) + "s";
                if (horseCocks == 2)
                    descript += ", " + cockNoun(CockTypesEnum.HORSE) + "s";
                if (dogCocks == 2)
                    descript += ", " + cockNoun(CockTypesEnum.DOG) + "s";
                //Failsafe
                if (creature.cocks[0].cockType > 2)
                    descript += ", " + cockNoun(creature.cocks[0].cockType) + "s";
            }
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
                if (normalCocks == 3)
                    descript += " " + cockNoun(CockTypesEnum.HUMAN) + "s";
                if (horseCocks == 3)
                    descript += ", " + cockNoun(CockTypesEnum.HORSE) + "s";
                if (dogCocks == 3)
                    descript += ", " + cockNoun(CockTypesEnum.DOG) + "s";
                //Tentacles
                if (creature.cocks[0].cockType > 2)
                    descript += ", " + cockNoun(creature.cocks[0].cockType) + "s";
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
    Appearance.multiCockDescriptLight = multiCockDescriptLight;
})(Appearance || (Appearance = {}));
// Possible text arguments in the conditional of a if statement
// First, there is an attempt to cast the argument to a Number. If that fails,
// a dictionary lookup is performed to see if the argument is in the conditionalOptions[]
// object. If that fails, we just fall back to returning 0
var conditionalOptions = {
    "strength": function (thisPtr) {
        return kGAMECLASS.player.str;
    },
    "toughness": function (thisPtr) {
        return kGAMECLASS.player.tou;
    },
    "speed": function (thisPtr) {
        return kGAMECLASS.player.spe;
    },
    "intelligence": function (thisPtr) {
        return kGAMECLASS.player.inte;
    },
    "libido": function (thisPtr) {
        return kGAMECLASS.player.lib;
    },
    "sensitivity": function (thisPtr) {
        return kGAMECLASS.player.sens;
    },
    "corruption": function (thisPtr) {
        return kGAMECLASS.player.cor;
    },
    "fatigue": function (thisPtr) {
        return kGAMECLASS.player.fatigue;
    },
    "hp": function (thisPtr) {
        return kGAMECLASS.player.HP;
    },
    "hunger": function (thisPtr) {
        return kGAMECLASS.player.hunger;
    },
    "minute": function (thisPtr) {
        return kGAMECLASS.model.time.minutes;
    },
    "hour": function (thisPtr) {
        return kGAMECLASS.model.time.hours;
    },
    "days": function (thisPtr) {
        return kGAMECLASS.model.time.days;
    },
    "tallness": function (thisPtr) {
        return kGAMECLASS.player.tallness;
    },
    "hairlength": function (thisPtr) {
        return kGAMECLASS.player.hairLength;
    },
    "femininity": function (thisPtr) {
        return kGAMECLASS.player.femininity;
    },
    "masculinity": function (thisPtr) {
        return 100 - kGAMECLASS.player.femininity;
    },
    "cocks": function (thisPtr) {
        return kGAMECLASS.player.cockTotal();
    },
    "breastrows": function (thisPtr) {
        return kGAMECLASS.player.bRows();
    },
    "biggesttitsize": function (thisPtr) {
        return kGAMECLASS.player.biggestTitSize();
    },
    "vagcapacity": function (thisPtr) {
        return kGAMECLASS.player.vaginalCapacity();
    },
    "analcapacity": function (thisPtr) {
        return kGAMECLASS.player.analCapacity();
    },
    "balls": function (thisPtr) {
        return kGAMECLASS.player.balls;
    },
    "cumquantity": function (thisPtr) {
        return kGAMECLASS.player.cumQ();
    },
    "milkquantity": function (thisPtr) {
        return kGAMECLASS.player.lactationQ();
    },
    "hasvagina": function (thisPtr) {
        return kGAMECLASS.player.hasVagina();
    },
    "istaur": function (thisPtr) {
        return kGAMECLASS.player.isTaur();
    },
    "isnaga": function (thisPtr) {
        return kGAMECLASS.player.isNaga();
    },
    "isgoo": function (thisPtr) {
        return kGAMECLASS.player.isGoo();
    },
    "isbiped": function (thisPtr) {
        return kGAMECLASS.player.isBiped();
    },
    "hasbreasts": function (thisPtr) {
        return (kGAMECLASS.player.biggestTitSize() >= 1);
    },
    "hasballs": function (thisPtr) {
        return (kGAMECLASS.player.balls > 0);
    },
    "hascock": function (thisPtr) {
        return kGAMECLASS.player.hasCock();
    },
    "isherm": function (thisPtr) {
        return (kGAMECLASS.player.gender == 3);
    },
    "cumnormal": function (thisPtr) {
        return (kGAMECLASS.player.cumQ() <= 150);
    },
    "cummedium": function (thisPtr) {
        return (kGAMECLASS.player.cumQ() > 150 && kGAMECLASS.player.cumQ() <= 350);
    },
    "cumhigh": function (thisPtr) {
        return (kGAMECLASS.player.cumQ() > 350 && kGAMECLASS.player.cumQ() <= 1000);
    },
    "cumveryhigh": function (thisPtr) {
        return (kGAMECLASS.player.cumQ() > 1000 && kGAMECLASS.player.cumQ() <= 2500);
    },
    "cumextreme": function (thisPtr) {
        return (kGAMECLASS.player.cumQ() > 2500);
    },
    "issquirter": function (thisPtr) {
        return (kGAMECLASS.player.wetness() >= 4);
    },
    "ispregnant": function (thisPtr) {
        return (kGAMECLASS.player.pregnancyIncubation > 0);
    },
    "isbuttpregnant": function (thisPtr) {
        return (kGAMECLASS.player.buttPregnancyIncubation > 0);
    },
    "hasnipplecunts": function (thisPtr) {
        return kGAMECLASS.player.hasFuckableNipples();
    },
    "canfly": function (thisPtr) {
        return kGAMECLASS.player.canFly();
    },
    "islactating": function (thisPtr) {
        return (kGAMECLASS.player.lactationQ() > 0);
    },
    "true": function (thisPtr) {
        return true;
    },
    "false": function (thisPtr) {
        return false;
    },
    //Prison
    "esteem": function (thisPtr) {
        return kGAMECLASS.player.esteem;
    },
    "obey": function (thisPtr) {
        return kGAMECLASS.player.obey;
    },
    "will": function (thisPtr) {
        return kGAMECLASS.player.will;
    }
};
var CockClass = (function () {
    function CockClass(cockLength, cockThickness, cockType) {
        if (cockLength === void 0) { cockLength = 5.5; }
        if (cockThickness === void 0) { cockThickness = 1; }
        if (cockType === void 0) { cockType = CockTypesEnum.HUMAN; }
        this.cockLength = cockLength;
        this.cockThickness = cockThickness;
        this.cockType = cockType;
        this.isPierced = false;
        this.sock = "";
        this.knotMultiplier = 0.25;
    }
    return CockClass;
}());
var AssClass = (function () {
    function AssClass() {
        this.analWetness = 0;
        this.analLooseness = 0;
    }
    return AssClass;
}());
var BreastRowClass = (function () {
    function BreastRowClass() {
        this.breastRating = 0;
        this.lactationMultiplier = 1;
        this.breasts = 2;
        this.fuckable = false;
    }
    return BreastRowClass;
}());
var VaginaClass = (function () {
    function VaginaClass() {
        this.vaginalWetness = 1;
        this.vaginalLooseness = 0;
        this.type = 0;
        this.virgin = true;
        this.fullness = 0;
        this.labiaPierced = 0;
        this.labiaPShort = "";
        this.labiaPLong = "";
        this.clitPierced = 0;
        this.clitPShort = "";
        this.clitPLong = "";
        this.clitLength = 0.5;
        this.recoveryProgress = 0;
    }
    VaginaClass.prototype.capacity = function () {
        return 8 * (Math.pow(this.vaginalLooseness, 2)) * (1 + this.vaginalWetness / 10);
    };
    return VaginaClass;
}());
var CreatureData = (function () {
    function CreatureData() {
        this.short = "creature";
        this.a = "the ";
        this.str = 15;
        this.tou = 15;
        this.spe = 15;
        this.inte = 15;
        this.lib = 15;
        this.sens = 15;
        this.cor = 15;
        this.fatigue = 20;
        this.lust = 20;
        this.HP = 99;
        this.armorName = "comfortable clothes";
        this.weaponName = "fists";
        this.shieldName = "nothing";
        this.upperGarmentName = "nothing";
        this.lowerGarmentName = "comfortable loincloth";
        this.tallness = 70;
        this.femininity = 50;
        this.thickness = 50;
        this.tone = 50;
        this.hipRating = 2;
        this.buttRating = 2;
        this.hairColor = "blonde";
        this.hairType = HAIR_NORMAL;
        this.skinType = SkinTypeEnum.PLAIN;
        this.skinAdj = "";
        this.skinDesc = "skin";
        this.skinTone = "pale";
        this.faceType = FACE_HUMAN;
        this.eyeType = EYES_HUMAN;
        this.tongueType = TONGUE_HUMAN;
        this.earType = EARS_HUMAN;
        this.lowerBody = LOWER_BODY_TYPE_HUMAN;
        this.legCount = 2;
        this.armType = ARM_TYPE_HUMAN;
        this.clawType = CLAW_TYPE_NORMAL;
        this.clawTone = "";
        this.hornType = HORNS_NONE;
        this.horns = 0;
        this.tailType = TAIL_TYPE_NONE;
        this.tailVenom = 0;
        this.wingType = WING_TYPE_NONE;
        this.wingDesc = "non-existant";
        this.gillType = GILLS_NONE;
        this.antennae = ANTENNAE_NONE;
        this._furColor = "no";
        this.nipplesPierced = 0;
        this.nipplesPShort = "";
        this.nipplesPLong = "";
        this.lipPierced = 0;
        this.lipPShort = "";
        this.lipPLong = "";
        this.tonguePierced = 0;
        this.tonguePShort = "";
        this.tonguePLong = "";
        this.eyebrowPierced = 0;
        this.eyebrowPShort = "";
        this.eyebrowPLong = "";
        this.earsPierced = 0;
        this.earsPShort = "";
        this.earsPLong = "";
        this.nosePierced = 0;
        this.nosePShort = "";
        this.nosePLong = "";
        this.nippleLength = .25;
        this.balls = 0;
        this.ballSize = 0;
        this.hoursSinceCum = 0;
        this.cumMultiplier = 1;
        this.cocks = [];
        this.ass = new AssClass();
        this.breastRows = [new BreastRowClass()];
        this.vaginas = [];
        this.perks = [];
        this.statusEffects = [];
    }
    return CreatureData;
}());
var Creature = (function (_super) {
    __extends(Creature, _super);
    function Creature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Creature.prototype, "capitalA", {
        get: function () {
            return capitalize(this.a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Creature.prototype, "pronoun1", {
        get: function () {
            return this.mf("he", "she");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Creature.prototype, "pronoun2", {
        get: function () {
            return this.mf("him", "her");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Creature.prototype, "pronoun3", {
        get: function () {
            return this.mf("his", "her");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Creature.prototype, "flags", {
        get: function () {
            return kGAMECLASS.flags;
        },
        enumerable: true,
        configurable: true
    });
	Creature.prototype.armorDescript = function (nakedText) {
		if (nakedText === void 0) { nakedText = "gear"; }
		var textArray = [];
		var text = "";
		//if (armor != ArmorLib.NOTHING) text += armorName;
		//Join text.
		if (this.armorName != "nothing")
			textArray.push(this.armorName);
		//if (upperGarment != UndergarmentLib.NOTHING) textArray.push(upperGarmentName);
		//if (lowerGarment != UndergarmentLib.NOTHING) textArray.push(lowerGarmentName);
		if (textArray.length > 0)
			text = formatStringArray(textArray);
		//Naked?
		if (this.armorName == "NOTHING")
			text = nakedText;
		return text;
	};
    Creature.prototype.createPerk = function (name) {
        this.perks.push(name);
    };
    Creature.prototype.createVagina = function () {
        this.vaginas.push(new VaginaClass());
    };
    Creature.prototype.createCock = function (clength, cthickness, ctype) {
        if (clength === void 0) { clength = 5.5; }
        if (cthickness === void 0) { cthickness = 1; }
        if (ctype === void 0) { ctype = CockTypesEnum.HUMAN; }
        this.cocks.push(new CockClass(clength, cthickness, ctype));
    };
    Object.defineProperty(Creature.prototype, "furColor", {
        get: function () {
            return this.hasFur() ? this._furColor : this.hairColor;
        },
        set: function (color) {
            this._furColor = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Creature.prototype, "gender", {
        get: function () {
            return (this.hasCock() ? 1 : 0) + (this.hasVagina() ? 2 : 0);
        },
        enumerable: true,
        configurable: true
    });
    Creature.prototype.mf = function (male, female) {
        var biggestTitSize = this.biggestTitSize();
        var femininity = this.femininity;
        if (this.hasCock()) {
            if (this.hasVagina()) {
                // herm
                if (biggestTitSize >= 2)
                    return female;
                else if (biggestTitSize == 1)
                    return femininity >= 50 ? female : male;
                else
                    return femininity >= 75 ? female : male;
            }
            else if (biggestTitSize >= 1 && femininity > 55 || femininity >= 75)
                return female; // d-girl
            else
                return male;
        }
        else {
            if (this.hasVagina())
                if (biggestTitSize <= 1 && femininity < 45)
                    return male; // c-boy
                else
                    return female;
            else {
                if (biggestTitSize >= 3 || femininity >= 75)
                    return female;
                else
                    return male;
            }
        }
    };
    Creature.prototype.maleFemaleHerm = function (caps) {
        if (caps === void 0) { caps = false; }
        var options = {
            0: ["genderless", "fem-genderless"],
            1: ["male", "dickgirl"],
            2: ["cuntboy", "female"],
            3: ["maleherm", "hermaphrodite"]
        }[this.gender];
        var s = this.mf(options[0], options[1]);
        return caps ? capitalize(s) : s;
    };
    Creature.prototype.claws = function () {
        var toneText = this.clawTone == "" ? " " : (", " + this.clawTone + " ");
        switch (this.clawType) {
            case CLAW_TYPE_NORMAL:
                return "fingernails";
            case CLAW_TYPE_LIZARD:
                return "short curved" + toneText + "claws";
            case CLAW_TYPE_DRAGON:
                return "powerful, thick curved" + toneText + "claws";
        }
        return "fingernails";
    };
    Creature.prototype.face = function () {
        var stringo = "";
        //0 - human
        //5 - Human w/Naga fangz
        //8 - bunnah faceahhh bunbun
        //10 - spidah-face (humanish)
        var faceType = this.faceType;
        if (faceType == 0)
            return "face";
        //1 - horse
        //2 - dogface
        //6 - kittah face
        //7 - lizard face (durned argonians!)
        //9 - kangaface
        if (this.hasMuzzle()) {
            if (rand(3) == 0 && faceType == FACE_HORSE)
                stringo = "long ";
            if (rand(3) == 0 && faceType == FACE_CAT)
                stringo = "feline ";
            if (rand(3) == 0 && faceType == FACE_RHINO)
                stringo = "rhino ";
            if (rand(3) == 0 && (faceType == FACE_LIZARD || faceType == FACE_DRAGON))
                stringo = "reptilian ";
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
            if (rand(4) == 0)
                stringo = "bovine ";
            if (rand(2) == 0)
                return "muzzle";
            return stringo + "face";
        }
        //4 - sharkface-teeth
        if (faceType == FACE_SHARK_TEETH) {
            if (rand(4) == 0)
                stringo = "angular ";
            return stringo + "face";
        }
        if (faceType == FACE_PIG || faceType == FACE_BOAR) {
            if (Math.floor(Math.random() * 4) == 0)
                stringo = (faceType == FACE_PIG ? "pig" : "boar") + "-like ";
            if (Math.floor(Math.random() * 4) == 0)
                return stringo + "snout";
            return stringo + "face";
        }
        return "face";
    };
    // returns leg,legs,foot,feet
    Creature.prototype.lowerBodyParts = function () {
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
                return randomChoice(["fuzzy, bunny leg", "fuzzy, bunny legs"], ["fur-covered leg", "fur-covered legs"], ["furry leg", "furry legs"], ["leg", "legs"], ["leg", "legs"], ["leg", "legs"]).concat(randomChoice(["large bunny feet", "large bunny feet"], ["rabbit foot", "rabbit feet"], ["large foot", "feet"], ["foot", "feet"], ["foot", "feet"]));
            case LOWER_BODY_TYPE_HARPY:
                return randomChoice(["bird-like leg", "bird-like legs"], ["feathered leg", "feathered legs"], ["leg", "legs"], ["leg", "legs"], ["leg", "legs"]).concat(randomChoice(["taloned foot", "taloned feet"], ["foot", "feet"], ["foot", "feet"], ["foot", "feet"], ["foot", "feet"]));
            case LOWER_BODY_TYPE_KANGAROO:
                return ["leg", "legs", "foot-paw", "foot-paws"];
            case LOWER_BODY_TYPE_FOX:
                return randomChoice(["fox-like leg", "fox-like legs"], ["vulpine leg", "vulpine legs"], ["leg", "legs"], ["leg", "legs"]).concat(randomChoice(["soft, padded paw", "soft, padded paws"], ["fox-like fee", "fox-like feet"], ["paw", "paws"], ["paw", "paws"]));
            case LOWER_BODY_TYPE_RACCOON:
                return randomChoice(["raccoon-like leg", "raccoon-like legs"], ["leg", "legs"], ["leg", "legs"], ["leg", "legs"]).concat(randomChoice(["raccoon-like foot", "raccoon-like feet"], ["long-toed paw", "long-toed paws"], ["foot", "feet"], ["paw", "paws"]));
            case LOWER_BODY_TYPE_CLOVEN_HOOFED:
                return randomChoice(["pig-like leg", "pig-like legs"], ["swine leg", "swine legs"], ["leg", "legs"], ["leg", "legs"], ["leg", "legs"]).concat(["foot", "feet"]);
        }
        return ["leg", "legs", "foot", "feet"];
    };
    Creature.prototype.leg = function () {
        return this.lowerBodyParts()[0];
    };
    Creature.prototype.legs = function () {
        if (this.isDrider())
            return num2Text(this.legCount) + " spider legs";
        if (this.isTaur())
            return num2Text(this.legCount) + " legs";
        return this.lowerBodyParts()[1];
    };
    Creature.prototype.foot = function () {
        return this.lowerBodyParts()[2];
    };
    Creature.prototype.feet = function () {
        return this.lowerBodyParts()[3];
    };
    Creature.prototype.skin = function (noAdj, noTone) {
        if (noAdj === void 0) { noAdj = false; }
        if (noTone === void 0) { noTone = false; }
        var skinzilla = "";
        var skinTone = this.skinTone;
        var skinAdj = this.skinAdj;
        if (!noAdj) {
            if (skinAdj != "" && !noTone && skinTone != "rough gray") {
                skinzilla += skinAdj;
                if (noTone)
                    skinzilla += " ";
                else
                    skinzilla += ", ";
            }
        }
        if (!noTone)
            skinzilla += skinTone + " ";
        //Fur handled a little differently since it uses haircolor
        if (this.hasFur())
            skinzilla += "skin";
        else
            skinzilla += this.skinDesc;
        return skinzilla;
    };
    Creature.prototype.hairOrFur = function () {
        return Appearance.hairOrFur(this);
    };
	Creature.prototype.faceDesc = function () {
		var femininity = this.femininity;
		var faceo = "";
		//0-10
		if (femininity < 10) {
			faceo = "a square chin";
			//if (!this.hasBeard()) TODO
			faceo += " and chiseled jawline";
            /*else
             faceo += ", chiseled jawline, and " + this.beard();*/
		}
		else if (femininity < 20) {
			//10+ -20
			faceo = "a rugged looking " + this.face() + " ";
            /*if (this.hasBeard()) TODO
             faceo += "and " + this.beard();*/
			faceo += "that's surely handsome";
		}
		else if (femininity < 28) {
			faceo = "a well-defined jawline and a fairly masculine profile";
		}
		else if (femininity < 35) {
			faceo = "a somewhat masculine, angular jawline";
		}
		else if (femininity < 45) {
			faceo = "the barest hint of masculinity on its features";
		}
		else if (femininity <= 55) {
			faceo = "an androgynous set of features that would look normal on a male or female";
		}
		else if (femininity <= 65) {
			faceo = "a tiny touch of femininity to it, with gentle curves";
		}
		else if (femininity <= 72) {
			faceo = "a nice set of cheekbones and lips that have the barest hint of pout";
		}
		else if (femininity <= 80) {
			faceo = "a beautiful, feminine shapeliness that's sure to draw the attention of males";
		}
		else if (femininity <= 90) {
			faceo = "a gorgeous profile with full lips, a button nose, and noticeable eyelashes";
		}
		else {
			faceo = "a jaw-droppingly feminine shape with full, pouting lips, an adorable nose, and long, beautiful eyelashes";
		}
		return faceo;
	};
    Creature.prototype.skinFurScales = function () {
        var skinzilla = "";
        if (this.skinAdj != "")
            skinzilla += this.skinAdj + ", ";
        if (this.hasFur())
            skinzilla += this.furColor + " ";
        else if (this.hasDragonScales())
            skinzilla += "iron-like, " + this.skinTone + " shield-shaped ";
        else
            skinzilla += this.skinTone + " ";
        skinzilla += this.skinDesc;
        return skinzilla;
    };
    Creature.prototype.chestDesc = function () {
        if (this.biggestTitSize() < 1)
            return "chest";
        return Appearance.biggestBreastSizeDescript(this);
    };
    Creature.prototype.allChestDesc = function () {
        if (this.biggestTitSize() < 1)
            return "chest";
        return this.allBreastsDescript();
    };
    Creature.prototype.hairDescript = function () {
        return Appearance.hairDescription(this);
    };
    Creature.prototype.hipDescript = function () {
        return Appearance.hipDescription(this);
    };
    Creature.prototype.hornDescript = function () {
        return Appearance.DEFAULT_HORNS_NAMES[this.hornType] + " horns";
    };
    Creature.prototype.nippleDescript = function (rowIdx) {
        if (rowIdx === void 0) { rowIdx = 0; }
        return Appearance.nippleDescription(this, rowIdx);
    };
    Creature.prototype.tongueDescript = function () {
        return Appearance.tongueDescript(this);
    };
    Creature.prototype.wingsDescript = function () {
        return Appearance.wingsDescript(this);
    };
    Creature.prototype.tailDescript = function () {
        return Appearance.tailDescript(this);
    };
    Creature.prototype.oneTailDescript = function () {
        return Appearance.oneTailDescript(this);
    };
    Creature.prototype.cockDescript = function (index) {
        if (index === void 0) { index = 0; }
        return Appearance.cockDescript(this, index);
    };
    Creature.prototype.cockDescriptShort = function (i_cockIndex) {
        if (i_cockIndex === void 0) { i_cockIndex = 0; }
        if (this.cocks.length == 0)
            return errstr("INVALID CREATURE SPECIFIED to cockDescriptShort");
        var description = "";
        var cock = this.cocks[i_cockIndex];
        if (rand(3) == 0) {
            if (cock.cockLength >= 30)
                description = "towering ";
            else if (cock.cockLength >= 18)
                description = "enormous ";
            else if (cock.cockLength >= 13)
                description = "massive ";
            else if (cock.cockLength >= 10)
                description = "huge ";
            else if (cock.cockLength >= 7)
                description = "long ";
            else if (cock.cockLength >= 5)
                description = "average ";
            else
                description = "short ";
        }
        else if (rand(2) == 0) {
            if (cock.cockThickness <= .75)
                description = "narrow ";
            if (cock.cockThickness > 1 && cock.cockThickness <= 1.4)
                description = "ample ";
            if (cock.cockThickness > 1.4 && cock.cockThickness <= 2)
                description = "broad ";
            if (cock.cockThickness > 2 && cock.cockThickness <= 3.5)
                description = "fat ";
            if (cock.cockThickness > 3.5)
                description = "distended ";
        }
        description += Appearance.cockNoun(cock.cockType);
        return description;
    };
    Creature.prototype.breastDescript = function (row) {
        if (row === void 0) { row = 0; }
        if (row < 0 || row >= this.breastRows.length)
            return errstr("breastRows index out of range");
        return Appearance.breastDescript(this.breastRows[row].breastRating, this.breastRows[row].lactationMultiplier);
    };
    Creature.prototype.allBreastsDescript = function () {
        return Appearance.allBreastsDescript(this);
    };
    Creature.prototype.vaginaDescript = function (index) {
        if (index === void 0) { index = 0; }
        return Appearance.vaginaDescript(this, index);
    };
    Creature.prototype.sackDescript = function () {
        return Appearance.sackDescript(this);
    };
    Creature.prototype.sheathDescript = function () {
        if (this.hasSheath())
            return "sheath";
        return "base";
    };
    Creature.prototype.buttDescript = function () {
        return Appearance.buttDescription(this);
    };
    Creature.prototype.assholeDescript = function () {
        return Appearance.assholeDescript(this);
    };
    Creature.prototype.clitDescript = function () {
        return Appearance.clitDescription(this);
    };
    Creature.prototype.eyesDescript = function () {
        return Appearance.eyesDescript(this);
    };
    Creature.prototype.hasCock = function () {
        return this.cocks.length > 0;
    };
    Creature.prototype.hasVagina = function () {
        return this.vaginas.length > 0;
    };
    Creature.prototype.hasFur = function () {
        return this.skinType == SkinTypeEnum.FUR;
    };
    Creature.prototype.hasSheath = function () {
        return _.any(this.cocks, function (cock) { return [CockTypesEnum.CAT,
            CockTypesEnum.DISPLACER,
            CockTypesEnum.DOG,
            CockTypesEnum.FOX,
            CockTypesEnum.HORSE,
            CockTypesEnum.KANGAROO,
            CockTypesEnum.AVIAN,
				CockTypesEnum.ECHIDNA].indexOf(+cock.cockType) >= 0;
		});
    };
    Creature.prototype.cockTotal = function () {
        return this.cocks.length;
    };
    Creature.prototype.cockHead = function (cockNum) {
        if (cockNum === void 0) { cockNum = 0; }
        if (cockNum < 0 || cockNum >= this.cocks.length) {
            return errstr("cocks index out of bounds");
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
        if (rand(2) == 0)
            return "crown";
        return randomChoice("head", "cock-head");
    };
    Creature.prototype.cockAdjective = function (index) {
        if (index === void 0) { index = -1; }
        if (index < 0)
            index = this.biggestCockIndex();
        var cock = this.cocks[index];
        var isPierced = (this.cocks.length == 1) && (cock.isPierced); //Only describe as pierced or sock covered if the creature has just one cock
        var hasSock = (this.cocks.length == 1) && (cock.sock != "");
        var isGooey = (this.skinType == SKIN_TYPE_GOO);
        return Appearance.cockAdjective(cock.cockType, cock.cockLength, cock.cockThickness, this.lust, this.cumQ(), isPierced, hasSock, isGooey);
    };
    Creature.prototype.multiCockDescriptLight = function () {
        return Appearance.multiCockDescriptLight(this);
    };
    Creature.prototype.sMultiCockDesc = function () {
        return (this.cocks.length > 1 ? "one of your " : "your ") + this.cockMultiLDescriptionShort();
    };
    Creature.prototype.SMultiCockDesc = function () {
        return (this.cocks.length > 1 ? "One of your " : "Your ") + this.cockMultiLDescriptionShort();
    };
    Creature.prototype.oMultiCockDesc = function () {
        return (this.cocks.length > 1 ? "each of your " : "your ") + this.cockMultiLDescriptionShort();
    };
    Creature.prototype.OMultiCockDesc = function () {
        return (this.cocks.length > 1 ? "Each of your " : "Your ") + this.cockMultiLDescriptionShort();
    };
    Creature.prototype.cockMultiLDescriptionShort = function () {
        var cocks = this.cocks;
        if (cocks.length < 1) {
            return errstr("NO WANGS DETECTED for cockMultiLightDesc()");
        }
        if (cocks.length == 1) {
            return Appearance.cockDescript(this, 0);
        }
        switch (cocks[0].cockType) {
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
                if (this.countCocksOfType(cocks[0].cockType) == cocks.length)
                    return Appearance.cockNoun(cocks[0].cockType) + "s";
                break;
            case CockTypesEnum.DOG:
            case CockTypesEnum.FOX:
                if (this.dogCocks() == cocks.length)
                    return Appearance.cockNoun(CockTypesEnum.DOG) + "s";
                break;
            default:
        }
        return Appearance.cockNoun(CockTypesEnum.HUMAN) + "s";
    };
    Creature.prototype.cockArea = function (i_cockIndex) {
        if (i_cockIndex === void 0) { i_cockIndex = 0; }
        if (i_cockIndex >= this.cocks.length || i_cockIndex < 0)
            return 0;
        return (this.cocks[i_cockIndex].cockThickness * this.cocks[i_cockIndex].cockLength);
    };
    Creature.prototype.biggestCockIndex = function () {
        var i = 0;
        for (var j = 1; j < this.cocks.length; j++) {
            if (this.cockArea(j) > this.cockArea(i))
                i = j;
        }
        return i;
    };
    Creature.prototype.biggestCockIndex2 = function () {
        var i = 0, m1 = this.biggestCockIndex();
        for (var j = 1; j < this.cocks.length; j++) {
            if (this.cockArea(j) > this.cockArea(i) && j != m1)
                i = j;
        }
        return i;
    };
    Creature.prototype.biggestCockIndex3 = function () {
        var i = 0, m1 = this.biggestCockIndex(), m2 = this.biggestCockIndex2();
        for (var j = 1; j < this.cocks.length; j++) {
            if (this.cockArea(j) > this.cockArea(i) && j != m1 && j != m2)
                i = j;
        }
        return i;
    };
    Creature.prototype.smallestCockIndex = function () {
        var i = 0;
        for (var j = 1; j < this.cocks.length; j++) {
            if (this.cockArea(j) < this.cockArea(i))
                i = j;
        }
        return i;
    };
    Creature.prototype.smallestCockIndex2 = function () {
        var i = 0, m1 = this.smallestCockIndex();
        for (var j = 1; j < this.cocks.length; j++) {
            if (this.cockArea(j) < this.cockArea(i) && j != m1)
                i = j;
        }
        return i;
    };
    Creature.prototype.smallestCockIndex3 = function () {
        var i = 0, m1 = this.smallestCockIndex(), m2 = this.smallestCockIndex2();
        for (var j = 1; j < this.cocks.length; j++) {
            if (this.cockArea(j) < this.cockArea(i) && j != m1 && j != m2)
                i = j;
        }
        return i;
    };
    Creature.prototype.longestCock = function () {
        var i = 0;
        for (var j = 1; j < this.cocks.length; j++) {
            if (this.cocks[j].cockLength > this.cocks[i].cockLength)
                i = j;
        }
        return i;
    };
    Creature.prototype.shortestCockIndex = function () {
        var i = 0;
        for (var j = 1; j < this.cocks.length; j++) {
            if (this.cocks[j].cockLength < this.cocks[i].cockLength)
                i = j;
        }
        return i;
    };
    Creature.prototype.cockThatFits = function (i_fits, type) {
        if (i_fits === void 0) { i_fits = 0; }
        if (type === void 0) { type = "area"; }
        if (this.cocks.length <= 0)
            return -1;
        var i = 0;
        for (var j = 1; j < this.cocks.length; j++) {
            if (type == "area") {
                if (this.cockArea(j) <= i_fits) {
                    if (this.cockArea(j) > this.cockArea(i))
                        i = j;
                }
            }
            else if (type == "length") {
                if (this.cocks[j].cockLength <= i_fits) {
                    if (this.cocks[j].cockLength > this.cocks[i].cockLength)
                        i = j;
                }
            }
        }
        return i;
    };
    Creature.prototype.cockThatFits2 = function (i_fits, type) {
        if (i_fits === void 0) { i_fits = 0; }
        if (type === void 0) { type = "area"; }
        if (this.cocks.length <= 1)
            return -1;
        var i = 0, m1 = this.cockThatFits(i_fits, type);
        for (var j = 1; j < this.cocks.length; j++) {
            if (j == m1)
                continue;
            if (type == "area") {
                if (this.cockArea(j) <= i_fits) {
                    if (this.cockArea(j) > this.cockArea(i))
                        i = j;
                }
            }
            else if (type == "length") {
                if (this.cocks[j].cockLength <= i_fits) {
                    if (this.cocks[j].cockLength > this.cocks[i].cockLength)
                        i = j;
                }
            }
        }
        return i;
    };
    Creature.prototype.vaginalCapacity = function () {
        return this.vaginas[0].capacity();
    };
    Creature.prototype.analCapacity = function () {
        var bonus = 0;
        if (this.isTaur())
            bonus = 30;
        if (this.findPerk("HistorySlut") >= 0)
            bonus += 20;
        if (this.findPerk("Cornucopia") >= 0)
            bonus += 30;
        if (this.findPerk("OneTrackMind") >= 0)
            bonus += 10;
        if (this.ass.analWetness > 0)
            bonus += 15;
        return ((bonus + this.statusEffectv1("BonusACapacity") + 6 * (Math.pow(this.ass.analLooseness, 2))) * (1 + this.ass.analWetness / 10));
    };
    Creature.prototype.cumCapacity = function () {
        if (!this.hasCock())
            return 0;
        var quantity = 0;
        if (this.balls > 0)
            quantity += Math.pow(((4 / 3) * Math.PI * (this.ballSize / 2)), 3) * this.balls;
        else
            quantity += Math.pow(((4 / 3) * Math.PI), 3) * 2;
        quantity = this.applyCumBonus(quantity) * this.cumMultiplier;
        quantity = Math.round(quantity);
        if (quantity > 0x7fffffff)
            quantity = 0x7fffffff;
        return quantity;
    };
    Creature.prototype.applyCumBonus = function (quantity) {
        if (this.findPerk("BroBody") >= 0)
            quantity *= 1.3;
        if (this.findPerk("FertilityPlus") >= 0)
            quantity *= 1.5;
        if (this.findPerk("FertilityMinus") >= 0 && this.lib < 25)
            quantity *= 0.7;
        if (this.findPerk("MessyOrgasms") >= 0)
            quantity *= 1.5;
        if (this.findPerk("OneTrackMind") >= 0)
            quantity *= 1.1;
        if (this.findPerk("ParasiteMusk") >= 0)
            quantity *= 1.2;
        if (this.findPerk("MaraesGiftStud") >= 0)
            quantity += 350;
        if (this.findPerk("FerasBoonAlpha") >= 0)
            quantity += 200;
        if (this.findPerk("MagicalVirility") >= 0)
            quantity += 200 + (this.perkv1("MagicalVirility") * 100);
        if (this.findPerk("FerasBoonSeeder") >= 0)
            quantity += 1000;
        quantity += this.perkv1("ElvenBounty");
        if (this.findPerk("BroBody") >= 0)
            quantity += 200;
        if (this.findPerk("SatyrSexuality") >= 0)
            quantity += 50;
        quantity += this.statusEffectv1("Rut");
        quantity *= (1 + (2 * this.perkv1("PiercedFertite")) / 100);
        //if (jewelryEffectId == JewelryLib.MODIFIER_FERTILITY) quantity *= (1 + (jewelryEffectMagnitude / 100));
        return quantity;
    };
    Creature.prototype.cumQ = function () {
        if (!this.hasCock())
            return 0;
        var quantity = 0;
        var lustCoefficient = (this.lust + 50) / 10;
        var _a = this, hoursSinceCum = _a.hoursSinceCum, balls = _a.balls, cumMultiplier = _a.cumMultiplier, ballSize = _a.ballSize;
        if (kGAMECLASS.flags[kFLAGS.HUNGER_ENABLED] >= 1) {
            //If realistic mode is enabled, limits cum to capacity.
            lustCoefficient = lustCoefficient / 2;
            if (this.findPerk("PilgrimsBounty") >= 0)
                lustCoefficient = 30;
            var percent = lustCoefficient + (hoursSinceCum + 10);
            if (percent > 100) {
                //Pilgrim's bounty maxes lust coefficient
                percent = 100;
                if (quantity > this.cumCapacity()) {
                }
                quantity = this.cumCapacity();
                return (percent / 100) * this.cumCapacity();
            }
        }
        if (this.findPerk("PilgrimsBounty") >= 0)
            lustCoefficient = 150 / 10;
        if ((balls == 0 || this.hasStatusEffect("Uniball")) && this.findPerk("PotentProstate") >= 0)
            quantity = 0 | (4 * 2 * cumMultiplier * 2 * lustCoefficient * (hoursSinceCum + 10) / 24) / 10;
        else if (balls == 0)
            quantity = 0 | (1.25 * 2 * cumMultiplier * 2 * lustCoefficient * (hoursSinceCum + 10) / 24) / 10;
        else
            quantity = 0 | (ballSize * balls * cumMultiplier * 2 * lustCoefficient * (hoursSinceCum + 10) / 24) / 10;
        quantity = this.applyCumBonus(quantity);
        if (quantity < 2)
            quantity = 2;
        if (quantity > 0x7fffffff)
            quantity = 0x7fffffff;
        return quantity;
    };
    Creature.prototype.wetness = function () {
        return this.vaginas.length > 0 ? this.vaginas[0].vaginalWetness : 0;
    };
    Creature.prototype.bRows = function () {
        return this.breastRows.length;
    };
    Creature.prototype.biggestTitRow = function () {
        var i = 0;
        for (var j = 1; j < this.breastRows.length; j++) {
            if (this.breastRows[j].breastRating > this.breastRows[i].breastRating)
                i = j;
        }
        return i;
    };
    Creature.prototype.biggestTitSize = function () {
        return this.breastRows[this.biggestTitRow()].breastRating;
    };
    Creature.prototype.biggestLactation = function () {
        if (this.breastRows.length == 0)
            return 0;
        return this.breastRows.reduce(function (a, b) { return (a.lactationMultiplier > b.lactationMultiplier) ? a : b; }).lactationMultiplier;
    };
    Creature.prototype.averageBreastSize = function () {
        return this.breastRows.map(function (b) { return b.breastRating; }).reduce(function (a, b) { return a + b; }) / this.breastRows.length;
    };
    Creature.prototype.hasFuckableNipples = function () {
        return _.any(this.breastRows, function (b) { return b.fuckable; });
    };
    Creature.prototype.canFly = function () {
		return !this.hasStatusEffect("Web") && canFlyWings.indexOf(+this.wingType) != -1;
    };
    Creature.prototype.ballsDescriptLight = function (forcedSize) {
        if (forcedSize === void 0) { forcedSize = true; }
        return Appearance.ballsDescription(forcedSize, true, this);
    };
    Creature.prototype.countCocksOfType = function () {
        var types = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            types[_i] = arguments[_i];
        }
		return this.cocks.filter(function (c) { return types.indexOf(+c.cockType) >= 0; }).length;
    };
    Creature.prototype.dogCocks = function () {
        return this.countCocksOfType(CockTypesEnum.DOG, CockTypesEnum.FOX);
    };
    Creature.prototype.hasStatusEffect = function (t) {
        return this.statusEffects.indexOf(t) >= 0;
    };
    Creature.prototype.statusEffectv1 = function (t) {
        //todo("statusEffectv1");
        return 0;
    };
    Creature.prototype.vaginaType = function () {
        return this.vaginas[0].type;
    };
    Creature.prototype.dragonCocks = function () {
        return this.countCocksOfType(CockTypesEnum.DRAGON);
    };
    Creature.prototype.lizardCocks = function () {
        return this.countCocksOfType(CockTypesEnum.LIZARD);
    };
    Creature.prototype.hasDragonHorns = function (fourHorns) {
        if (fourHorns === void 0) { fourHorns = false; }
        return (!fourHorns && this.horns > 0 && this.hornType == HORNS_DRACONIC_X2) || this.hornType == HORNS_DRACONIC_X4_12_INCH_LONG;
    };
    Creature.prototype.hasReptileEyes = function () {
		return [EYES_LIZARD, EYES_DRAGON, EYES_BASILISK].indexOf(+this.eyeType) != -1;
    };
    Creature.prototype.hasLizardEyes = function () {
		return [EYES_LIZARD, EYES_BASILISK].indexOf(+this.eyeType) != -1;
    };
    Creature.prototype.hasReptileFace = function () {
		return [FACE_SNAKE_FANGS, FACE_LIZARD, FACE_DRAGON].indexOf(+this.faceType) != -1;
    };
    Creature.prototype.hasDragonWings = function (large) {
        if (large === void 0) { large = false; }
        if (large)
            return this.wingType == WING_TYPE_DRACONIC_LARGE;
        else
			return [WING_TYPE_DRACONIC_SMALL, WING_TYPE_DRACONIC_LARGE].indexOf(+this.wingType) != -1;
    };
    Creature.prototype.hasBatLikeWings = function (large) {
        if (large === void 0) { large = false; }
        if (large)
            return this.wingType == WING_TYPE_BAT_LIKE_LARGE;
        else
			return [WING_TYPE_BAT_LIKE_TINY, WING_TYPE_BAT_LIKE_LARGE].indexOf(+this.wingType) != -1;
    };
    Creature.prototype.hasLeatheryWings = function (large) {
        if (large === void 0) { large = false; }
        return this.hasDragonWings(large) || this.hasBatLikeWings(large);
    };
    Creature.prototype.hasDragonfire = function () {
        return this.findPerk("Dragonfire") >= 0;
    };
    Creature.prototype.hasDragonWingsAndFire = function (largeWings) {
        if (largeWings === void 0) { largeWings = true; }
        return this.hasDragonWings(largeWings) && this.hasDragonfire();
    };
    Creature.prototype.isBasilisk = function () {
        return this.eyeType == EYES_BASILISK;
    };
    Creature.prototype.isMaleOrHerm = function () {
        return (this.gender & GENDER_MALE) != 0;
    };
    Creature.prototype.isFemaleOrHerm = function () {
        return (this.gender & GENDER_FEMALE) != 0;
    };
    Creature.prototype.findPerk = function (perk) {
        return this.perks.indexOf(perk);
    };
    Creature.prototype.perkv1 = function (t) {
        //todo("perkv1");
        return 0;
    };
    Creature.prototype.hasScales = function () {
		return [SKIN_TYPE_LIZARD_SCALES, SKIN_TYPE_DRAGON_SCALES, SKIN_TYPE_FISH_SCALES].indexOf(+this.skinType) != -1;
    };
    Creature.prototype.hasReptileScales = function () {
		return [SKIN_TYPE_LIZARD_SCALES, SKIN_TYPE_DRAGON_SCALES].indexOf(+this.skinType) != -1;
    };
    Creature.prototype.hasDragonScales = function () {
        return this.skinType == SKIN_TYPE_DRAGON_SCALES;
    };
    Creature.prototype.hasLizardScales = function () {
        return this.skinType == SKIN_TYPE_LIZARD_SCALES;
    };
    Creature.prototype.hasNonLizardScales = function () {
        return this.hasScales() && !this.hasLizardScales();
    };
    Creature.prototype.hasFurOrScales = function () {
        return this.hasFur() || this.hasScales();
    };
    Creature.prototype.hasGooSkin = function () {
        return this.skinType == SKIN_TYPE_GOO;
    };
    Creature.prototype.hasPlainSkin = function () {
        return this.skinType == SKIN_TYPE_PLAIN;
    };
    Creature.prototype.hasMuzzle = function () {
        return [FACE_HORSE, FACE_DOG, FACE_CAT, FACE_LIZARD, FACE_KANGAROO, FACE_FOX, FACE_DRAGON, FACE_RHINO, FACE_ECHIDNA, FACE_DEER].indexOf(this.faceType) >= 0;
    };
    Creature.prototype.isBiped = function () {
        return this.legCount == 2;
    };
    Creature.prototype.isNaga = function () {
        return this.lowerBody == LOWER_BODY_TYPE_NAGA;
    };
    Creature.prototype.isTaur = function () {
        return this.legCount > 2 && !this.isDrider();
    };
    Creature.prototype.isDrider = function () {
        return (this.lowerBody == LOWER_BODY_TYPE_DRIDER_LOWER_BODY);
    };
    Creature.prototype.isGoo = function () {
        return this.lowerBody == LOWER_BODY_TYPE_GOO;
    };
    return Creature;
}(CreatureData));
// PC ASCII Aspect lookups
// For subject: "cock"
var cockLookups = {
    "all": function (thisPtr) {
        return kGAMECLASS.player.multiCockDescriptLight();
    },
    "each": function (thisPtr) {
        return kGAMECLASS.player.sMultiCockDesc();
    },
    "one": function (thisPtr) {
        return kGAMECLASS.player.oMultiCockDesc();
    },
    "largest": function (thisPtr) {
        return kGAMECLASS.player.cockDescript(kGAMECLASS.player.biggestCockIndex());
    },
    "biggest": function (thisPtr) {
        return kGAMECLASS.player.cockDescript(kGAMECLASS.player.biggestCockIndex());
    },
    "biggest2": function (thisPtr) {
        return kGAMECLASS.player.cockDescript(kGAMECLASS.player.biggestCockIndex2());
    },
    "biggest3": function (thisPtr) {
        return kGAMECLASS.player.cockDescript(kGAMECLASS.player.biggestCockIndex3());
    },
    "smallest": function (thisPtr) {
        return kGAMECLASS.player.cockDescript(kGAMECLASS.player.smallestCockIndex());
    },
    "smallest2": function (thisPtr) {
        return kGAMECLASS.player.cockDescript(kGAMECLASS.player.smallestCockIndex2());
    },
    "longest": function (thisPtr) {
        return kGAMECLASS.player.cockDescript(kGAMECLASS.player.longestCock());
    },
    "shortest": function (thisPtr) {
        return kGAMECLASS.player.cockDescript(kGAMECLASS.player.shortestCockIndex());
    }
};
// For subject: "cockHead"
var cockHeadLookups = {
    "biggest": function (thisPtr) {
        return kGAMECLASS.player.cockHead(kGAMECLASS.player.biggestCockIndex());
    },
    "biggest2": function (thisPtr) {
        return kGAMECLASS.player.cockHead(kGAMECLASS.player.biggestCockIndex2());
    },
    "biggest3": function (thisPtr) {
        return kGAMECLASS.player.cockHead(kGAMECLASS.player.biggestCockIndex3());
    },
    "largest": function (thisPtr) {
        return kGAMECLASS.player.cockHead(kGAMECLASS.player.biggestCockIndex());
    },
    "smallest": function (thisPtr) {
        return kGAMECLASS.player.cockHead(kGAMECLASS.player.smallestCockIndex());
    },
    "smallest2": function (thisPtr) {
        return kGAMECLASS.player.cockHead(kGAMECLASS.player.smallestCockIndex2());
    },
    "longest": function (thisPtr) {
        return kGAMECLASS.player.cockHead(kGAMECLASS.player.longestCock());
    },
    "shortest": function (thisPtr) {
        return kGAMECLASS.player.cockHead(kGAMECLASS.player.shortestCockIndex());
    }
};
// These tags take a two-word tag with a **numberic** attribute for lookup.
// [object NUMERIC-attribute]
// if "NUMERIC-attribute" can be cast to a Number, the parser looks for "object" in twoWordNumericTagsLookup.
// If it finds twoWordNumericTagsLookup["object"], it calls the anonymous function stored with said key "object"
// like so: twoWordNumericTagsLookup["object"](Number("NUMERIC-attribute"))
//
// if attribute cannot be case to a number, the parser looks for "object" in twoWordTagsLookup.
var twoWordNumericTagsLookup = {
    "cockfit": function (thisPtr, aspect) {
        if (!kGAMECLASS.player.hasCock())
            return errstr("(Attempt to parse cock when none present.)");
        else {
            if (kGAMECLASS.player.cockThatFits(aspect) >= 0)
                return kGAMECLASS.player.cockDescript(kGAMECLASS.player.cockThatFits(aspect));
            else
                return kGAMECLASS.player.cockDescript(kGAMECLASS.player.smallestCockIndex());
        }
    },
    "cockfit2": function (thisPtr, aspect) {
        if (!kGAMECLASS.player.hasCock())
            return errstr("(Attempt to parse cock when none present.)");
        else {
            if (kGAMECLASS.player.cockThatFits2(aspect) >= 0)
                return kGAMECLASS.player.cockDescript(kGAMECLASS.player.cockThatFits2(aspect));
            else
                return kGAMECLASS.player.cockDescript(kGAMECLASS.player.smallestCockIndex());
        }
    },
    "cockheadfit": function (thisPtr, aspect) {
        if (!kGAMECLASS.player.hasCock()) {
            return errstr("(Attempt to parse cockhead when none present.)");
        }
        else {
            if (kGAMECLASS.player.cockThatFits(aspect) >= 0)
                return kGAMECLASS.player.cockHead(kGAMECLASS.player.cockThatFits(aspect));
            else
                return kGAMECLASS.player.cockHead(kGAMECLASS.player.smallestCockIndex());
        }
    },
    "cockheadfit2": function (thisPtr, aspect) {
        if (!kGAMECLASS.player.hasCock())
            return errstr("(Attempt to parse cockhead when none present.)");
        else {
            if (kGAMECLASS.player.cockThatFits2(aspect) >= 0)
                return kGAMECLASS.player.cockHead(kGAMECLASS.player.cockThatFits2(aspect));
            else
                return kGAMECLASS.player.cockHead(kGAMECLASS.player.smallestCockIndex());
        }
    },
    "cock": function (thisPtr, aspect) {
        if (!kGAMECLASS.player.hasCock())
            return errstr("(Attempt to parse cock when none present.)");
        else {
            if (aspect - 1 >= 0 && aspect - 1 < kGAMECLASS.player.cockTotal())
                return kGAMECLASS.player.cockDescript(aspect - 1);
            else
                return errstr("(Attempt To Parse player.cockDescript for Invalid Cock)");
        }
    },
    "cockhead": function (thisPtr, aspect) {
        if (!kGAMECLASS.player.hasCock())
            return errstr("(Attempt to parse cockHead when none present.)");
        else {
            var intAspect = (aspect - 1) | 0;
            if (intAspect >= 0 && intAspect < kGAMECLASS.player.cockTotal())
                return kGAMECLASS.player.cockHead(intAspect);
            else
                return errstr("(Attempt To Parse CockHeadDescript for Invalid Cock)");
        }
    }
};
// These tags take an ascii attribute for lookup.
// [object attribute]
// if attribute cannot be cast to a number, the parser looks for "object" in twoWordTagsLookup,
// and then uses the corresponding object to determine the value of "attribute", by looking for
// "attribute" twoWordTagsLookup["object"]["attribute"]
var twoWordTagsLookup = {
    // NPCs:
    //"rubi"  : rubiLookups,
    //"arian" : arianLookups,
    //"ember" : emberLookups,
    //"benoit": benoitLookups,
    // PC Attributes:
    "cock": cockLookups,
    "cockhead": cockHeadLookups
};
///<reference path="creature.ts"/>
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hunger = 80;
        _this.esteem = 50;
        _this.obey = 50;
        _this.will = 50;
        _this.startingRace = "human";
        return _this;
    }
    Player.prototype.bodyType = function () {
        var desc = "";
        var _a = this, thickness = _a.thickness, tone = _a.tone, gender = _a.gender, hipRating = _a.hipRating, buttRating = _a.buttRating;
        //OLD STUFF
        //SUPAH THIN
        if (thickness < 10) {
            //SUPAH BUFF
            if (tone > 90)
                desc += "a lithe body covered in highly visible muscles";
            else if (tone > 75)
                desc += "an incredibly thin, well-muscled frame";
            else if (tone > 50)
                desc += "a very thin body that has a good bit of muscle definition";
            else if (tone > 25)
                desc += "a lithe body and only a little bit of muscle definition";
            else
                desc += "a waif-thin body, and soft, forgiving flesh";
        }
        else if (thickness < 25) {
            //Pretty thin
            if (tone > 90)
                desc += "a thin body and incredible muscle definition";
            else if (tone > 75)
                desc += "a narrow frame that shows off your muscles";
            else if (tone > 50)
                desc += "a somewhat lithe body and a fair amount of definition";
            else if (tone > 25)
                desc += "a narrow, soft body that still manages to show off a few muscles";
            else
                desc += "a thin, soft body";
        }
        else if (thickness < 40) {
            //Somewhat thin
            if (tone > 90)
                desc += "a fit, somewhat thin body and rippling muscles all over";
            else if (tone > 75)
                desc += "a thinner-than-average frame and great muscle definition";
            else if (tone > 50)
                desc += "a somewhat narrow body and a decent amount of visible muscle";
            else if (tone > 25)
                desc += "a moderately thin body, soft curves, and only a little bit of muscle";
            else
                desc += "a fairly thin form and soft, cuddle-able flesh";
        }
        else if (thickness < 60) {
            //average
            if (tone > 90)
                desc += "average thickness and a bevy of perfectly defined muscles";
            else if (tone > 75)
                desc += "an average-sized frame and great musculature";
            else if (tone > 50)
                desc += "a normal waistline and decently visible muscles";
            else if (tone > 25)
                desc += "an average body and soft, unremarkable flesh";
            else
                desc += "an average frame and soft, untoned flesh with a tendency for jiggle";
        }
        else if (thickness < 75) {
            if (tone > 90)
                desc += "a somewhat thick body that's covered in slabs of muscle";
            else if (tone > 75)
                desc += "a body that's a little bit wide and has some highly-visible muscles";
            else if (tone > 50)
                desc += "a solid build that displays a decent amount of muscle";
            else if (tone > 25)
                desc += "a slightly wide frame that displays your curves and has hints of muscle underneath";
            else
                desc += "a soft, plush body with plenty of jiggle";
        }
        else if (thickness < 90) {
            if (tone > 90)
                desc += "a thickset frame that gives you the appearance of a wall of muscle";
            else if (tone > 75)
                desc += "a burly form and plenty of muscle definition";
            else if (tone > 50)
                desc += "a solid, thick frame and a decent amount of muscles";
            else if (tone > 25)
                desc += "a wide-set body, some soft, forgiving flesh, and a hint of muscle underneath it";
            else {
                desc += "a wide, cushiony body";
                if (gender >= 2 || this.biggestTitSize() > 3 || hipRating > 7 || buttRating > 7)
                    desc += " and plenty of jiggle on your curves";
            }
        }
        else {
            //Chunky monkey
            if (tone > 90)
                desc += "an extremely thickset frame and so much muscle others would find you harder to move than a huge boulder";
            else if (tone > 75)
                desc += "a very wide body and enough muscle to make you look like a tank";
            else if (tone > 50)
                desc += "an extremely substantial frame packing a decent amount of muscle";
            else if (tone > 25) {
                desc += "a very wide body";
                if (gender >= 2 || this.biggestTitSize() > 4 || hipRating > 10 || buttRating > 10)
                    desc += ", lots of curvy jiggles,";
                desc += " and hints of muscle underneath";
            }
            else {
                desc += "a thick";
                if (gender >= 2 || this.biggestTitSize() > 4 || hipRating > 10 || buttRating > 10)
                    desc += ", voluptuous";
                desc += " body and plush, ";
                if (gender >= 2 || this.biggestTitSize() > 4 || hipRating > 10 || buttRating > 10)
                    desc += " jiggly curves";
                else
                    desc += " soft flesh";
            }
        }
        return desc;
    };
    //OtherCoCStuff
    Player.prototype.isLoliShota = function (loli, nope) {
        if (this.tallness <= 58 && this.femininity > 40 && this.averageBreastSize() <= 3 && this.hipRating <= 6 && this.buttRating <= 6) {
            return loli;
        }
        return nope;
    };
    Player.prototype.isLoli = function () {
        return this.tallness <= 58
            && this.femininity > 40
            && this.averageBreastSize() <= 3
            && this.hipRating <= 6
            && this.buttRating <= 6
            && this.hasVagina();
    };
    Player.prototype.isShota = function () {
        return this.tallness <= 58
            && this.femininity > 40
            && this.averageBreastSize() <= 3
            && this.hipRating <= 6
            && this.buttRating <= 6
            && this.hasCock();
    };
    Player.prototype.redundantRace = function () {
        return ["shota", "loli", "kitten", "puppy"].indexOf(this.race()) >= 0;
    };
    //determine demon rating
    Player.prototype.demonScore = function () {
        var demonCounter = 0;
        var _a = this, hornType = _a.hornType, horns = _a.horns, tailType = _a.tailType, wingType = _a.wingType, faceType = _a.faceType, cor = _a.cor, lowerBody = _a.lowerBody;
        if (hornType == 1 && horns > 0)
            demonCounter++;
        if (hornType == 1 && horns > 4)
            demonCounter++;
        if (tailType == 3)
            demonCounter++;
        if (wingType == 6 || wingType == 7)
            demonCounter++;
        if (this.hasPlainSkin() && cor > 50)
            demonCounter++;
        if (faceType == 0 && cor > 50)
            demonCounter++;
        if (lowerBody == 5 || lowerBody == 6)
            demonCounter++;
        if (this.countCocksOfType(CockTypesEnum.DEMON) > 0)
            demonCounter++;
        return demonCounter;
    };
    //Determine Human Rating
    Player.prototype.humanScore = function () {
        var humanCounter = 0;
        if (this.faceType == 0)
            humanCounter++;
        if (this.skinType == 0)
            humanCounter++;
        if (this.horns == 0)
            humanCounter++;
        if (this.tailType == 0)
            humanCounter++;
        if (this.wingType == 0)
            humanCounter++;
        if (this.lowerBody == 0)
            humanCounter++;
        if (this.countCocksOfType(CockTypesEnum.HUMAN) == 1 && this.cocks.length == 1)
            humanCounter++;
        if (this.breastRows.length == 1 && this.skinType == 0)
            humanCounter++;
        return humanCounter;
    };
    //Determine minotaur rating
    Player.prototype.minoScore = function () {
        var minoCounter = 0;
        if (this.faceType == 3)
            minoCounter++;
        if (this.earType == 3)
            minoCounter++;
        if (this.tailType == 4)
            minoCounter++;
        if (this.hornType == 2)
            minoCounter++;
        if (this.lowerBody == 1 && minoCounter > 0)
            minoCounter++;
        if (this.tallness > 80 && minoCounter > 0)
            minoCounter++;
        if (this.cocks.length > 0 && minoCounter > 0
            && this.countCocksOfType(CockTypesEnum.HORSE) > 0)
            minoCounter++;
        if (this.vaginas.length > 0)
            minoCounter--;
        return minoCounter;
    };
    Object.defineProperty(Player.prototype, "minotaurScore", {
        get: function () {
            return this.minoScore();
        },
        enumerable: true,
        configurable: true
    });
    //Determine cow rating
    Player.prototype.cowScore = function () {
        var minoCounter = 0;
        if (this.faceType == 0)
            minoCounter++;
        if (this.faceType == 3)
            minoCounter--;
        if (this.earType == 3)
            minoCounter++;
        if (this.tailType == 4)
            minoCounter++;
        if (this.hornType == 2)
            minoCounter++;
        if (this.lowerBody == 1 && minoCounter > 0)
            minoCounter++;
        if (this.tallness >= 73 && minoCounter > 0)
            minoCounter++;
        if (this.vaginas.length > 0)
            minoCounter++;
        if (this.biggestTitSize() > 4 && minoCounter > 0)
            minoCounter++;
        if (this.biggestLactation() > 2 && minoCounter > 0)
            minoCounter++;
        return minoCounter;
    };
    Player.prototype.sandTrapScore = function () {
        var counter = 0;
        if (this.hasStatusEffect("BlackNipples"))
            counter++;
        if (this.hasStatusEffect("Uniball"))
            counter++;
        if (this.hasVagina() && this.vaginaType() == 5)
            counter++;
        if (this.eyeType == 2)
            counter++;
        if (this.wingType == 12)
            counter++;
        if (this.hasStatusEffect("Uniball"))
            counter++;
        return counter;
    };
    //Determine Bee Rating
    Player.prototype.beeScore = function () {
        var beeCounter = 0;
        if (this.hairColor == "shiny black")
            beeCounter++;
        if (this.hairColor == "black and yellow")
            beeCounter += 2;
        if (this.antennae > 0) {
            beeCounter++;
            if (this.faceType == 0)
                beeCounter++;
        }
        if (this.lowerBody == 7) {
            beeCounter++;
            if (this.vaginas.length == 1)
                beeCounter++;
        }
        if (this.tailType == 6)
            beeCounter++;
        if (this.wingType == 1)
            beeCounter++;
        if (this.wingType == 2)
            beeCounter++;
        return beeCounter;
    };
    //Determine Ferret Rating!
    Player.prototype.ferretScore = function () {
        var counter = 0;
        if (this.faceType == FACE_FERRET_MASK)
            counter++;
        if (this.faceType == FACE_FERRET)
            counter += 2;
        if (this.earType == EARS_FERRET)
            counter++;
        if (this.tailType == TAIL_TYPE_FERRET)
            counter++;
        if (this.lowerBody == LOWER_BODY_TYPE_FERRET)
            counter++;
        if (this.hasFur() && counter > 0)
            counter++;
        return counter;
    };
    //Determine Dog Rating
    Player.prototype.dogScore = function () {
        var dogCounter = 0;
        if (this.faceType == 2)
            dogCounter++;
        if (this.earType == 2)
            dogCounter++;
        if (this.tailType == 2)
            dogCounter++;
        if (this.lowerBody == 2)
            dogCounter++;
        if (this.dogCocks() > 0)
            dogCounter++;
        if (this.breastRows.length > 1)
            dogCounter++;
        if (this.breastRows.length == 3)
            dogCounter++;
        if (this.breastRows.length > 3)
            dogCounter--;
        //Fur only counts if some canine features are present
        if (this.hasFur() && dogCounter > 0)
            dogCounter++;
        return dogCounter;
    };
    Player.prototype.mouseScore = function () {
        var coonCounter = 0;
        if (this.earType == 12)
            coonCounter++;
        if (this.tailType == 16)
            coonCounter++;
        if (this.faceType == 15)
            coonCounter++;
        if (this.faceType == 16)
            coonCounter += 2;
        //Fur only counts if some canine features are present
        if (this.hasFur() && coonCounter > 0)
            coonCounter++;
        if (this.tallness < 55 && coonCounter > 0)
            coonCounter++;
        if (this.tallness < 45 && coonCounter > 0)
            coonCounter++;
        return coonCounter;
    };
    Player.prototype.raccoonScore = function () {
        var coonCounter = 0;
        if (this.faceType == 13)
            coonCounter++;
        if (this.faceType == 14)
            coonCounter += 2;
        if (this.earType == 11)
            coonCounter++;
        if (this.tailType == 15)
            coonCounter++;
        if (this.lowerBody == 19)
            coonCounter++;
        if (coonCounter > 0 && this.balls > 0)
            coonCounter++;
        //Fur only counts if some canine features are present
        if (this.hasFur() && coonCounter > 0)
            coonCounter++;
        return coonCounter;
    };
    //Determine Fox Rating
    Player.prototype.foxScore = function () {
        var foxCounter = 0;
        if (this.faceType == 11)
            foxCounter++;
        if (this.earType == 9)
            foxCounter++;
        if (this.tailType == 13)
            foxCounter++;
        if (this.lowerBody == 17)
            foxCounter++;
        if (this.dogCocks() > 0 && foxCounter > 0)
            foxCounter++;
        if (this.breastRows.length > 1 && foxCounter > 0)
            foxCounter++;
        if (this.breastRows.length == 3 && foxCounter > 0)
            foxCounter++;
        if (this.breastRows.length == 4 && foxCounter > 0)
            foxCounter++;
        //Fur only counts if some canine features are present
        if (this.hasFur() && foxCounter > 0)
            foxCounter++;
        return foxCounter;
    };
    //Determine cat Rating
    Player.prototype.catScore = function () {
        var catCounter = 0;
        if (this.faceType == 6)
            catCounter++;
        if (this.earType == 5)
            catCounter++;
        if (this.tailType == 8)
            catCounter++;
        if (this.lowerBody == 9)
            catCounter++;
        if (this.countCocksOfType(CockTypesEnum.CAT) > 0)
            catCounter++;
        if (this.breastRows.length > 1 && catCounter > 0)
            catCounter++;
        if (this.breastRows.length == 3 && catCounter > 0)
            catCounter++;
        if (this.breastRows.length > 3)
            catCounter -= 2;
        //Fur only counts if some canine features are present
        if (this.hasFur() && catCounter > 0)
            catCounter++;
        return catCounter;
    };
    //Determine lizard rating
    Player.prototype.lizardScore = function () {
        var lizardCounter = 0;
        if (this.faceType == FACE_LIZARD)
            lizardCounter++;
        if (this.earType == EARS_LIZARD)
            lizardCounter++;
        if (this.tailType == TAIL_TYPE_LIZARD)
            lizardCounter++;
        if ([TONGUE_LIZARD, TONGUE_SNAKE].indexOf(this.tongueType) != -1)
            lizardCounter++;
        if (this.lowerBody == LOWER_BODY_TYPE_LIZARD)
            lizardCounter++;
        if (this.lizardCocks() > 0)
            lizardCounter++;
        if (this.hasDragonHorns())
            lizardCounter++;
        if (this.hornType == HORNS_DRACONIC_X4_12_INCH_LONG)
            lizardCounter++;
        if (this.armType == ARM_TYPE_PREDATOR && this.clawType == CLAW_TYPE_LIZARD)
            lizardCounter++;
        if (this.hasReptileScales())
            lizardCounter++;
        if (this.eyeType == EYES_LIZARD)
            lizardCounter++;
        if (lizardCounter >= 4 && this.eyeType == EYES_BASILISK)
            lizardCounter++;
        return lizardCounter;
    };
    Player.prototype.spiderScore = function () {
        var score = 0;
        if (this.eyeType == 1)
            score += 2;
        if (this.faceType == 10)
            score++;
        if (this.armType == 2)
            score++;
        if (this.lowerBody == 15 || this.lowerBody == 16)
            score += 2;
        else if (score > 0)
            score--;
        if (this.tailType == 5)
            score += 2;
        if (!this.hasPlainSkin() && score > 0)
            score--;
        return score;
    };
    //Determine Horse Rating
    Player.prototype.horseScore = function () {
        var horseCounter = 0;
        if (this.faceType == 1)
            horseCounter++;
        if (this.earType == 1)
            horseCounter++;
        if (this.tailType == 1)
            horseCounter++;
        if (this.countCocksOfType(CockTypesEnum.HORSE) > 0)
            horseCounter++;
        if (this.lowerBody == 1 || this.lowerBody == 4)
            horseCounter++;
        //Fur only counts if some equine features are present
        if (this.hasFur() && horseCounter > 0)
            horseCounter++;
        return horseCounter;
    };
    //Determine kitsune Rating
    Player.prototype.kitsuneScore = function () {
        var kitsuneCounter = 0;
        //If the character has fox ears, +1
        if (this.earType == EARS_FOX)
            kitsuneCounter++;
        //If the character has a fox tail, +1
        if (this.tailType == TAIL_TYPE_FOX)
            kitsuneCounter++;
        //If the character has two or more fox tails, +2
        if (this.tailType == TAIL_TYPE_FOX && this.tailVenom >= 2)
            kitsuneCounter += 2;
        //If the character has tattooed skin, +1
        //9999
        //If the character has a 'vag of holding', +1
        if (this.vaginalCapacity() >= 8000)
            kitsuneCounter++;
        //If the character's kitsune score is greater than 0 and:
        //If the character has a normal face, +1
        if (kitsuneCounter > 0 && (this.faceType == FACE_HUMAN || this.faceType == FACE_FOX))
            kitsuneCounter++;
        //If the character's kitsune score is greater than 1 and:
        //If the character has "blonde","black","red","white", or "silver" hair, +1
        if (kitsuneCounter > 0
            && (KitsuneScene.basicKitsuneHair.indexOf(this.furColor) >= 0 || KitsuneScene.elderKitsuneColors.indexOf(this.furColor) >= 0))
            kitsuneCounter++;
        //If the character's femininity is 40 or higher, +1
        if (kitsuneCounter > 0 && this.femininity >= 40)
            kitsuneCounter++;
        //If the character has fur, scales, or gooey skin, -1
        if (this.hasFur()
            && KitsuneScene.basicKitsuneFur.indexOf(this.furColor) < 0
            && KitsuneScene.elderKitsuneColors.indexOf(this.furColor) < 0)
            kitsuneCounter--;
        if (this.hasScales())
            kitsuneCounter -= 2;
        if (this.hasGooSkin())
            kitsuneCounter -= 3;
        //If the character has abnormal legs, -1
        if (this.lowerBody != LOWER_BODY_TYPE_HUMAN && this.lowerBody != LOWER_BODY_TYPE_FOX)
            kitsuneCounter--;
        //If the character has a nonhuman face, -1
        if (this.faceType != FACE_HUMAN && this.faceType != FACE_FOX)
            kitsuneCounter--;
        //If the character has ears other than fox ears, -1
        if (this.earType != EARS_FOX)
            kitsuneCounter--;
        //If the character has tail(s) other than fox tails, -1
        if (this.tailType != TAIL_TYPE_FOX)
            kitsuneCounter--;
        return kitsuneCounter;
    };
    //Determine Dragon Rating
    Player.prototype.dragonScore = function () {
        var dragonCounter = 0;
        if (this.faceType == FACE_DRAGON)
            dragonCounter++;
        if (this.earType == EARS_DRAGON)
            dragonCounter++;
        if (this.tailType == TAIL_TYPE_DRACONIC)
            dragonCounter++;
        if (this.tongueType == TONGUE_DRACONIC)
            dragonCounter++;
        if (this.dragonCocks() > 0)
            dragonCounter++;
        if (this.hasDragonWings())
            dragonCounter++;
        if (this.lowerBody == LOWER_BODY_TYPE_DRAGON)
            dragonCounter++;
        if (this.hasDragonScales() && dragonCounter > 0)
            dragonCounter++;
        if (this.hasDragonHorns())
            dragonCounter++;
        if (this.hornType == HORNS_DRACONIC_X4_12_INCH_LONG)
            dragonCounter++;
        if (this.hasDragonfire())
            dragonCounter++;
        if (this.armType == ARM_TYPE_PREDATOR && this.clawType == CLAW_TYPE_DRAGON)
            dragonCounter++;
        if (this.eyeType == EYES_DRAGON)
            dragonCounter++;
        return dragonCounter;
    };
    //Goblinscore
    Player.prototype.goblinScore = function () {
        var _a = this, earType = _a.earType, faceType = _a.faceType, lowerBody = _a.lowerBody, tallness = _a.tallness, skinTone = _a.skinTone;
        var horseCounter = 0;
        if (earType == 4)
            horseCounter++;
        if (skinTone == "pale yellow" || skinTone == "grayish-blue" || skinTone == "green" || skinTone == "dark green")
            horseCounter++;
        if (horseCounter > 0) {
            if (faceType == 0)
                horseCounter++;
            if (tallness < 48)
                horseCounter++;
            if (this.hasVagina())
                horseCounter++;
            if (lowerBody == 0)
                horseCounter++;
        }
        return horseCounter;
    };
    //Gooscore
    Player.prototype.gooScore = function () {
        var _a = this, lowerBody = _a.lowerBody, hairType = _a.hairType, skinAdj = _a.skinAdj;
        var gooCounter = 0;
        if (hairType == 3)
            gooCounter++;
        if (skinAdj == "slimy")
            gooCounter++;
        if (lowerBody == 8)
            gooCounter++;
        if (this.vaginalCapacity() > 9000)
            gooCounter++;
        if (this.hasStatusEffect("SlimeCraving"))
            gooCounter++;
        return gooCounter;
    };
    //Nagascore
    Player.prototype.nagaScore = function () {
        var _a = this, wingType = _a.wingType, faceType = _a.faceType, tongueType = _a.tongueType, antennae = _a.antennae;
        var nagaCounter = 0;
        if (faceType == 5)
            nagaCounter++;
        if (tongueType == 1)
            nagaCounter++;
        if (nagaCounter > 0 && antennae == 0)
            nagaCounter++;
        if (nagaCounter > 0 && wingType == 0)
            nagaCounter++;
        return nagaCounter;
    };
    //Bunnyscore
    Player.prototype.bunnyScore = function () {
        var _a = this, earType = _a.earType, tailType = _a.tailType, wingType = _a.wingType, faceType = _a.faceType, lowerBody = _a.lowerBody, antennae = _a.antennae, balls = _a.balls;
        var bunnyCounter = 0;
        if (faceType == 8)
            bunnyCounter++;
        if (tailType == 10)
            bunnyCounter++;
        if (earType == 7)
            bunnyCounter++;
        if (lowerBody == 12)
            bunnyCounter++;
        //More than 2 balls reduces bunny score
        if (balls > 2 && bunnyCounter > 0)
            bunnyCounter--;
        //Human skin on bunmorph adds
        if (this.hasPlainSkin() && bunnyCounter > 1)
            bunnyCounter++;
        //No wings and antennae a plus
        if (bunnyCounter > 0 && antennae == 0)
            bunnyCounter++;
        if (bunnyCounter > 0 && wingType == 0)
            bunnyCounter++;
        return bunnyCounter;
    };
    //Harpyscore
    Player.prototype.harpyScore = function () {
        var _a = this, earType = _a.earType, tailType = _a.tailType, wingType = _a.wingType, faceType = _a.faceType, lowerBody = _a.lowerBody, armType = _a.armType, hairType = _a.hairType;
        var harpy = 0;
        if (armType == 1)
            harpy++;
        if (hairType == 1)
            harpy++;
        if (wingType == 9)
            harpy++;
        if (tailType == 11)
            harpy++;
        if (lowerBody == 13)
            harpy++;
        if (harpy >= 2 && faceType == 0)
            harpy++;
        if (harpy >= 2 && (earType == 0 || earType == 4))
            harpy++;
        return harpy;
    };
    //Kangascore
    Player.prototype.kangaScore = function () {
        var _a = this, earType = _a.earType, tailType = _a.tailType, faceType = _a.faceType, lowerBody = _a.lowerBody;
        var kanga = 0;
        if (this.countCocksOfType(CockTypesEnum.KANGAROO) > 0)
            kanga++;
        if (earType == 8)
            kanga++;
        if (tailType == 12)
            kanga++;
        if (lowerBody == 14)
            kanga++;
        if (faceType == 9)
            kanga++;
        if (kanga >= 2 && this.hasFur())
            kanga++;
        return kanga;
    };
    //sharkscore
    Player.prototype.sharkScore = function () {
        var _a = this, tailType = _a.tailType, wingType = _a.wingType, faceType = _a.faceType;
        var sharkCounter = 0;
        if (faceType == 4)
            sharkCounter++;
        if (wingType == 8)
            sharkCounter++;
        if (tailType == 7)
            sharkCounter++;
        //skin counting only if PC got any other shark traits
        if (this.hasPlainSkin() && sharkCounter > 0)
            sharkCounter++;
        return sharkCounter;
    };
    //Determine Mutant Rating
    Player.prototype.mutantScore = function () {
        var mutantCounter = 0;
        if (this.faceType > 0)
            mutantCounter++;
        if (this.hasPlainSkin())
            mutantCounter++;
        if (this.tailType > 0)
            mutantCounter++;
        if (this.cocks.length > 1)
            mutantCounter++;
        if (this.hasCock() && this.hasVagina())
            mutantCounter++;
        if (this.hasFuckableNipples())
            mutantCounter++;
        if (this.breastRows.length > 1)
            mutantCounter++;
        if (this.faceType == 1) {
            if (this.hasFur())
                mutantCounter--;
            if (this.tailType == 1)
                mutantCounter--;
        }
        if (this.faceType == 2) {
            if (this.hasFur())
                mutantCounter--;
            if (this.tailType == 2)
                mutantCounter--;
        }
        return mutantCounter;
    };
    //Salamander score
    Player.prototype.salamanderScore = function () {
        var salamanderCounter = 0;
        if (this.armType == ARM_TYPE_SALAMANDER)
            salamanderCounter++;
        if (this.lowerBody == LOWER_BODY_TYPE_SALAMANDER)
            salamanderCounter++;
        if (this.tailType == TAIL_TYPE_SALAMANDER)
            salamanderCounter++;
        if (this.findPerk("Lustzerker") >= 0)
            salamanderCounter++;
        if (salamanderCounter >= 2) {
            if (this.countCocksOfType(CockTypesEnum.LIZARD) > 0)
                salamanderCounter++;
            if (this.faceType == 0)
                salamanderCounter++;
            if (this.earType == 0)
                salamanderCounter++;
        }
        return salamanderCounter;
    };
    //------------
    // Mod-Added
    //------------
    Player.prototype.sirenScore = function () {
        var sirenCounter = 0;
        if (this.faceType == 4 && this.tailType == 7 && this.wingType == WING_TYPE_FEATHERED_LARGE && this.armType == ARM_TYPE_HARPY)
            sirenCounter += 4;
        if (this.hasVagina())
            sirenCounter++;
        //if (hasCock() && findFirstCockType(CockTypesEnum.ANEMONE) >= 0)
        //	sirenCounter++;
        return sirenCounter;
    };
    Player.prototype.pigScore = function () {
        var pigCounter = 0;
        if (this.earType == EARS_PIG)
            pigCounter++;
        if (this.tailType == TAIL_TYPE_PIG)
            pigCounter++;
        if (this.faceType == FACE_PIG || FACE_BOAR)
            pigCounter++;
        if (this.lowerBody == LOWER_BODY_TYPE_CLOVEN_HOOFED)
            pigCounter += 2;
        if (this.countCocksOfType(CockTypesEnum.PIG) > 0)
            pigCounter++;
        return pigCounter;
    };
    Player.prototype.satyrScore = function () {
        var satyrCounter = 0;
        if (this.lowerBody == LOWER_BODY_TYPE_CLOVEN_HOOFED)
            satyrCounter++;
        if (this.tailType == TAIL_TYPE_GOAT)
            satyrCounter++;
        if (satyrCounter >= 2) {
            if (this.earType == EARS_ELFIN)
                satyrCounter++;
            if (this.faceType == FACE_HUMAN)
                satyrCounter++;
            if (this.countCocksOfType(CockTypesEnum.HUMAN) > 0)
                satyrCounter++;
            if (this.balls > 0 && this.ballSize >= 3)
                satyrCounter++;
        }
        return satyrCounter;
    };
    Player.prototype.rhinoScore = function () {
        var rhinoCounter = 0;
        if (this.earType == EARS_RHINO)
            rhinoCounter++;
        if (this.tailType == TAIL_TYPE_RHINO)
            rhinoCounter++;
        if (this.faceType == FACE_RHINO)
            rhinoCounter++;
        if (this.hornType == HORNS_RHINO)
            rhinoCounter++;
        if (rhinoCounter >= 2 && this.skinTone == "gray")
            rhinoCounter++;
        if (rhinoCounter >= 2 && this.hasCock() && this.countCocksOfType(CockTypesEnum.RHINO) > 0)
            rhinoCounter++;
        return rhinoCounter;
    };
    Player.prototype.echidnaScore = function () {
        var echidnaCounter = 0;
        if (this.earType == EARS_ECHIDNA)
            echidnaCounter++;
        if (this.tailType == TAIL_TYPE_ECHIDNA)
            echidnaCounter++;
        if (this.faceType == FACE_ECHIDNA)
            echidnaCounter++;
        if (this.tongueType == TONGUE_ECHIDNA)
            echidnaCounter++;
        if (this.lowerBody == LOWER_BODY_TYPE_ECHIDNA)
            echidnaCounter++;
        if (echidnaCounter >= 2 && this.hasFur())
            echidnaCounter++;
        if (echidnaCounter >= 2 && this.countCocksOfType(CockTypesEnum.ECHIDNA) > 0)
            echidnaCounter++;
        return echidnaCounter;
    };
    Player.prototype.deerScore = function () {
        var deerCounter = 0;
        if (this.earType == EARS_DEER)
            deerCounter++;
        if (this.tailType == TAIL_TYPE_DEER)
            deerCounter++;
        if (this.faceType == FACE_DEER)
            deerCounter++;
        if (this.lowerBody == LOWER_BODY_TYPE_CLOVEN_HOOFED || this.lowerBody == LOWER_BODY_TYPE_DEERTAUR)
            deerCounter++;
        if (this.hornType == HORNS_ANTLERS && this.horns >= 4)
            deerCounter++;
        if (deerCounter >= 2 && this.hasFur())
            deerCounter++;
        if (deerCounter >= 3 && this.countCocksOfType(CockTypesEnum.HORSE) > 0)
            deerCounter++;
        return deerCounter;
    };
    //Dragonne
    Player.prototype.dragonneScore = function () {
        var dragonneCounter = 0;
        if (this.faceType == FACE_CAT)
            dragonneCounter++;
        if (this.earType == EARS_CAT)
            dragonneCounter++;
        if (this.tailType == TAIL_TYPE_CAT)
            dragonneCounter++;
        if (this.tongueType == TONGUE_DRACONIC)
            dragonneCounter++;
        if (this.hasDragonWings())
            dragonneCounter++;
        if (this.lowerBody == LOWER_BODY_TYPE_CAT)
            dragonneCounter++;
        if (this.hasReptileScales() && dragonneCounter > 0)
            dragonneCounter++;
        return dragonneCounter;
    };
    //Manticore
    Player.prototype.manticoreScore = function () {
        var catCounter = 0;
        if (this.faceType == FACE_CAT)
            catCounter++;
        if (this.earType == EARS_CAT)
            catCounter++;
        if (this.tailType == TAIL_TYPE_SCORPION)
            catCounter += 2;
        if (this.lowerBody == LOWER_BODY_TYPE_CAT)
            catCounter++;
        if (catCounter >= 4) {
            if (this.hornType == HORNS_DEMON || this.hasDragonHorns())
                catCounter++;
            if (this.hasLeatheryWings())
                catCounter++;
            if (this.hasLeatheryWings(true))
                catCounter++;
        }
        //Fur only counts if some canine features are present
        if (this.hasFur() && catCounter >= 6)
            catCounter++;
        return catCounter;
    };
    Player.prototype.bimboScore = function () {
        var bimboCounter = 0;
        if (this.hasVagina()) {
            bimboCounter += 2;
            if (this.vaginas[0].vaginalWetness >= VAGINA_WETNESS_SLICK)
                bimboCounter++;
        }
        if (this.hasCock())
            bimboCounter -= 2;
        if (this.armorName == "bimbo skirt")
            bimboCounter += 1;
        if (this.findPerk("BimboBrains") >= 0)
            bimboCounter += 2;
        if (this.findPerk("BimboBody") >= 0)
            bimboCounter += 2;
        if (kGAMECLASS.flags[kFLAGS.BIMBOSKIRT_MINIMUM_LUST] > 25)
            bimboCounter++;
        if (kGAMECLASS.flags[kFLAGS.BIMBOSKIRT_MINIMUM_LUST] > 10)
            bimboCounter++;
        if (this.biggestTitSize() >= 5)
            bimboCounter++;
        else
            bimboCounter += this.biggestTitSize() / 5.0;
        if (this.biggestTitSize() >= 10)
            bimboCounter++;
        else
            bimboCounter += this.biggestTitSize() / 10.0;
        if (this.hipRating >= 8)
            bimboCounter++;
        else
            bimboCounter += this.hipRating / 8.0;
        if (this.buttRating > 8)
            bimboCounter++;
        else
            bimboCounter += this.buttRating / 8.0;
        if (this.tone < 15)
            bimboCounter++;
        if (this.femininity > 80)
            bimboCounter++;
        else if (this.femininity < 20)
            bimboCounter--;
        else
            bimboCounter += (this.femininity - 50.0) / 30.0;
        if (this.hairColor == "platinum blonde")
            bimboCounter++;
        if (this.hairLength > 10)
            bimboCounter++;
        if (this.inte < 20)
            bimboCounter++;
        if (bimboCounter < 0)
            bimboCounter = 0;
        if (bimboCounter > 20)
            bimboCounter = 20;
        //if (biggestTitSize() > 5)
        //bimboCounter++;
        //if (biggestTitSize() > 10)
        //bimboCounter++;
        //if (hipRating > 8) //bimboCounter++;
        //if (buttRating > 8) //bimboCounter++;
        //if (tone < 15) //bimboCounter++;
        //if (hairColor == "platinum blonde") //bimboCounter++;
        //if (hairLength > 10) //bimboCounter++;
        //if (inte < 20) //bimboCounter++;
        //if (bimboCounter < 0) bimboCounter = 0;
        //
        return bimboCounter;
    };
    Player.prototype.lactationQ = function () {
        if (this.biggestLactation() < 1)
            return 0;
        //(Milk production TOTAL= breastSize x 10 * lactationMultiplier * breast total * milking-endurance (1- default, maxes at 2.  Builds over time as milking as done)
        //(Small – 0.01 mLs – Size 1 + 1 Multi)
        //(Large – 0.8 - Size 10 + 4 Multi)
        //(HUGE – 2.4 - Size 12 + 5 Multi + 4 tits)
        var total = 0;
        var breastRows = this.breastRows;
        var counter = breastRows.length;
        while (counter > 0) {
            counter--;
            total += 10 * breastRows[counter].breastRating * breastRows[counter].lactationMultiplier * breastRows[counter].breasts;
        }
        if (this.findPerk("MilkMaid") >= 0)
            total += 200 + (this.perkv1("MilkMaid") * 100);
        if (this.statusEffectv1("LactationReduction") >= 48)
            total = total * 1.5;
        if (total > Number.MAX_VALUE)
            total = Number.MAX_VALUE;
        return total;
    };
    Player.prototype.isLactating = function () {
        return this.lactationQ() > 0;
    };
    Player.prototype.race = function () {
        //Determine race type:
        var race = "human";
        var isTaur = this.isTaur();
        var _a = this, hornType = _a.hornType, wingType = _a.wingType, faceType = _a.faceType, lowerBody = _a.lowerBody;
        if (this.catScore() >= 4) {
            if (isTaur && lowerBody == LOWER_BODY_TYPE_CAT) {
                race = this.isLoliShota("kitten-taur", "cat-taur");
                if (faceType == 0)
                    race = "sphinx-morph"; // no way to be fully feral anyway
            }
            else {
                race = this.isLoliShota("kitten-morph", "cat-morph");
                if (faceType == 0)
                    race = this.isLoliShota("kitten-", "cat-") + this.mf("boy", "girl");
            }
        }
        if (this.lizardScore() >= 4) {
            if (this.hasDragonWingsAndFire())
                race = this.isBasilisk() ? "dracolisk" : "dragonewt";
            else
                race = this.isBasilisk() ? "basilisk" : "lizan";
            if (isTaur)
                race += "-taur";
            if (this.lizardScore() >= 9)
                return race; // High lizardScore? always return lizan-race
        }
        if (this.dragonScore() >= 6) {
            race = "dragon-morph";
            if (faceType == 0)
                race = "dragon-" + this.mf("man", "girl");
            if (isTaur)
                race = "dragon-taur";
        }
        if (this.raccoonScore() >= 4) {
            race = "raccoon-morph";
            if (this.balls > 0 && this.ballSize > 5)
                race = "tanuki-morph";
            if (isTaur)
                race = "raccoon-taur";
        }
        if (this.dogScore() >= 4) {
            if (isTaur && lowerBody == LOWER_BODY_TYPE_DOG)
                race = this.isLoliShota("puppy", "dog");
            else {
                race = this.isLoliShota("puppy-morph", "dog-morph");
                if (faceType == 0)
                    race = this.isLoliShota("puppy-" + this.mf("boy", "girl"), "dog-" + this.mf("man", "girl"));
            }
        }
        var hasFur = this.hasFur();
        if (this.foxScore() >= 4) {
            if (isTaur && lowerBody == LOWER_BODY_TYPE_FOX)
                race = "fox-taur";
            else if (hasFur)
                race = "fox-morph";
            else
                race = "fox-" + this.mf("morph", "girl");
        }
        if (this.ferretScore() >= 4) {
            if (hasFur)
                race = "ferret-morph";
            else
                race = "ferret-" + this.mf("morph", "girl");
        }
        if (this.kitsuneScore() >= 4) {
            race = "kitsune";
        }
        if (this.horseScore() >= 3) {
            if (isTaur)
                race = "centaur-morph";
            else if (hornType == HORNS_UNICORN) {
                if (wingType == WING_TYPE_FEATHERED_LARGE)
                    race = "alicorn";
                else
                    race = "unicorn-morph";
            }
            else {
                if (wingType == WING_TYPE_FEATHERED_LARGE)
                    race = "pegasus";
                else
                    race = "equine-morph";
            }
        }
        if (this.mutantScore() >= 5 && race == "human")
            race = "corrupted mutant";
        if (this.minoScore() >= 4)
            race = "minotaur-morph";
        if (this.cowScore() > 5) {
            race = "cow-";
            race += this.mf("morph", "girl");
        }
        if (this.beeScore() >= 5)
            race = "bee-morph";
        if (this.goblinScore() >= 5)
            race = "goblin";
        if (this.humanScore() >= 5 && race == "corrupted mutant")
            race = "somewhat human mutant";
        if (this.demonScore() > 4)
            race = this.isLoliShota(this.mf("shota", "loli") + "demon", "demon-morph");
        if (this.sharkScore() >= 3)
            race = "shark-morph";
        if (this.bunnyScore() >= 4)
            race = "bunny-" + this.mf("boy", "girl");
        if (this.harpyScore() >= 4) {
            if (this.gender >= 2)
                race = "harpy";
            else
                race = "avian";
        }
        if (this.spiderScore() >= 4) {
            race = "spider-morph";
            if (this.mf("no", "yes") == "yes")
                race = "spider-girl";
            if (this.isDrider())
                race = "drider";
        }
        if (this.kangaScore() >= 4)
            race = "kangaroo-morph";
        if (this.mouseScore() >= 3) {
            if (faceType != 16)
                race = "mouse-" + this.mf("boy", "girl");
            else
                race = "mouse-morph";
        }
        if (this.salamanderScore() >= 4) {
            if (isTaur)
                race = "salamander-taur";
            else
                race = "salamander-" + this.mf("boy", "girl");
        }
        //<mod>
        if (this.pigScore() >= 4) {
            race = "pig-morph";
            if (faceType == 0)
                race = "pig-" + this.mf("boy", "girl");
            if (faceType == 20)
                race = "boar-morph";
        }
        if (this.satyrScore() >= 4) {
            race = "satyr";
        }
        if (this.rhinoScore() >= 4) {
            race = "rhino-morph";
            if (faceType == 0)
                race = "rhino-" + this.mf("man", "girl");
        }
        if (this.echidnaScore() >= 4) {
            race = "echidna-morph";
            if (faceType == 0)
                race = "echidna-" + this.mf("boy", "girl");
        }
        if (this.deerScore() >= 4) {
            if (isTaur)
                race = "deer-taur";
            else {
                race = "deer-morph";
                if (faceType == 0)
                    race = "deer-" + this.mf("morph", "girl");
            }
        }
        //Special, bizarre races
        if (this.dragonneScore() >= 6) {
            if (isTaur)
                race = "dragonne-taur";
            else {
                race = "dragonne-morph";
                if (faceType == 0)
                    race = "dragonne-" + this.mf("man", "girl");
            }
        }
        if (this.manticoreScore() >= 6) {
            race = "manticore-morph";
            if (faceType == 0)
                race = "manticore-" + this.mf("man", "girl");
        }
        if (this.sirenScore() >= 4) {
            race = "siren";
        }
        //</mod>
        if (lowerBody == 3)
            race = "naga";
        if (lowerBody == LOWER_BODY_TYPE_HOOFED && isTaur) {
            if (wingType == WING_TYPE_FEATHERED_LARGE) {
                if (hornType == HORNS_UNICORN)
                    race = "alicorn-taur";
                else
                    race = "pegataur";
            }
            else {
                if (hornType == HORNS_UNICORN)
                    race = "unicorn-taur";
                else {
                    if (this.horseScore() >= 5)
                        race = "equitaur";
                    else if (this.minoScore() >= 4)
                        race = "mino-centaur";
                    else
                        race = "centaur";
                }
            }
        }
        if (lowerBody == LOWER_BODY_TYPE_PONY)
            race = "pony-kin";
        if (this.gooScore() >= 3) {
            race = "goo-";
            race += this.mf("boi", "girl");
        }
        //fairy & loli statement
        if (this.humanScore() >= 4 && this.tallness <= 48
            && (wingType == 1 || wingType == 2)) {
            race = "fairy";
        }
        if (race == "human") {
            race = this.isLoliShota(this.mf("shota", "loli"), "human");
        }
        return race;
    };
    return Player;
}(Creature));
var kFLAGS;
(function (kFLAGS) {
    kFLAGS.UNKNOWN_FLAG_NUMBER_00000 = 0;
    kFLAGS.MARBLE_PREGNANCY_INCUBATION = 1; // Marble Pregnancy Incubation
    kFLAGS.MARBLE_PREGNANCY_TYPE = 2; // Marble Pregnancy Type" Description="1 = cowgirl
    kFLAGS.MARBLE_LUST = 3; // Marble Lust
    kFLAGS.MARBLE_DICK_TYPE = 4; // Marble Dick Type
    kFLAGS.MARBLE_DICK_LENGTH = 5; // Marble Dick Length
    kFLAGS.MARBLE_DICK_THICKNESS = 6; // Marble Dick Thickness
    kFLAGS.MARBLE_UNUSED_DOOTY = 7; // Marble Dooty. Haha doody.  (DUTY) Seems unused
    kFLAGS.MARBLE_KIDS = 8; //
    kFLAGS.MARBLE_NURSERY_CONSTRUCTION = 9; // Marble's Bitch-Bin (0 = not start, less than 100 = in progress.  100 = Finished
    kFLAGS.PLAYER_PREGGO_WITH_WORMS = 10; // (I think)// HAS WORM CUM DISPLAYED YET?
    kFLAGS.TIMES_FUCKED_URTA = 11; // URTA - times fucked
    kFLAGS.URTA_COMFORTABLE_WITH_OWN_BODY = 12; // URTA - horsecock comfort level (-1 = hates self, no luvs)
    kFLAGS.URTA_TIME_SINCE_LAST_CAME = 13; // URTA - hours until can be horny again
    kFLAGS.PC_SEEN_URTA_SEX_TOYS = 14; // URTA - seen Urta's toyz?
    kFLAGS.PLAYER_RESISTED_AKBAL = 15; // Akbal resisted?  - 1 means the PC has resisted at least once
    kFLAGS.AKBAL_SUBMISSION_COUNTER = 16; // Akbal submission counter
    kFLAGS.AKBAL_SUBMISSION_STATE = 17; // Akbal submission state. -1=Lost to him, 1=Beaten him, 2=Akbal is your bitch
    kFLAGS.MINOTAUR_CUM_ADDICTION_TRACKER = 18; // Minotaur cum Addiction Tracker
    kFLAGS.TIME_SINCE_LAST_CONSUMED_MINOTAUR_CUM = 19; // Time Since Last Minocum fix
    kFLAGS.MINOTAUR_CUM_ADDICTION_STATE = 20; // Current Addict State (0 = normal, 1= addicted, 1 = needy, 2= withdrawal)
    kFLAGS.MINOTAUR_CUM_REALLY_ADDICTED_STATE = 21; // lust status affect timer
    kFLAGS.IN_COMBAT_USE_PLAYER_WAITED_FLAG = 22; // Did PC Wait in combat?
    kFLAGS.PC_FETISH = 23; // Fetish Level 1 - exhibitionism, 2 - bondage, 3 - pacifism
    kFLAGS.PC_MET_CERAPH = 24; // Met Ceraph
    kFLAGS.INCREASED_HAIR_GROWTH_TIME_REMAINING = 25; // Increased Hair-growth Days Left
    kFLAGS.INCREASED_HAIR_GROWTH_SERUM_TIMES_APPLIED = 26; // Increased Hair-growth stack
    kFLAGS.CHEAT_ENTERING_COUNTER = 27; // Cheat Input Counter
    kFLAGS.TIMES_CHEATED_COUNTER = 28; // Cheat Break Counter
    kFLAGS.URTA_PC_AFFECTION_COUNTER = 29; // Urta love counter
    kFLAGS.URTA_PC_LOVE_COUNTER = 30; // Urta Love Level
    kFLAGS.URTA_ANGRY_AT_PC_COUNTDOWN = 31; // Urta pissed countdown
    kFLAGS.URTA_KNOWS_PC_HAS_MARBLE_FOLLOWER = 32; // Marble Cockblock happened = 0 - no, 1 = yes
    kFLAGS.PC_SEEN_URTA_BADASS_FIGHT = 33; // Seen Urta be a badass?
    kFLAGS.PC_ENCOUNTERED_CHRISTMAS_ELF_BEFORE = 34; // Last year xmas elf encountered
    kFLAGS.AMILY_MET = 35; //   (0 = not met, 1 = met)Amily Met.     0=Not Met, 1=Met
    kFLAGS.AMILY_VILLAGE_ENCOUNTERS_DISABLED = 36; //  1=true,44=village buttonAmily Village Encounters Disabled.     1=True, 44=Village Button?
    kFLAGS.AMILY_GROSSED_OUT_BY_WORMS = 37; //  1=freaked out-Amily encounters disabled due to worms 0=False, 1= True
    kFLAGS.AMILY_AFFECTION = 38; //   (< 15 = low.  In between = medium. 40+= high affect)Amily Affection.    15 = Low.  In Between = Medium. 40+= High Affect
    kFLAGS.AMILY_OFFER_ACCEPTED = 39; //   (1 = true, 0 = not yet)Amily Offer Accepted.    0=False, 1=True
    kFLAGS.AMILY_BIRTH_TOTAL = 40; // Amily Birth Total.
    kFLAGS.AMILY_INCUBATION = 41; //    0 = not pregnant, otherwise hours till birth 168Amily Incubation.    0=Not Pregnant, Otherwise Hours Till Birth Starting From 168
    kFLAGS.AMILY_FUCK_COUNTER = 42; // Amily Fuck Counter.
    kFLAGS.AMILY_FOLLOWER = 43; // Amily Follower. 0=Not Follower, 1=Follower 2=Corrupted Follower?
    kFLAGS.AMILY_VILLAGE_ACCESSIBLE = 44; // Amily Village Accessible.    Related To 36]
    kFLAGS.AMILY_WANG_LENGTH = 45; // Amily's Wang Length" Description="Starts 4x1, maxes @ 13x2
    kFLAGS.AMILY_WANG_GIRTH = 46; // Amily Penis Gith.    Default=0
    kFLAGS.AMILY_CUP_SIZE = 47; //  5-JanAmily's Cup Size (1 to 5)
    kFLAGS.AMILY_NIPPLE_LENGTH = 48; //  0.3-4Nipple Length from .3 to 4"
    kFLAGS.AMILY_HIP_RATING = 49; //  girly-womanlyAmily Hip Rating - girly to womanly - Default=12
    kFLAGS.AMILY_ASS_SIZE = 50; // Can increase ass from "unremarkable ass" to "delightfully jiggly" - Default=12
    kFLAGS.AMILY_LACTATION_RATE = 51; // Amily Lactation Rate. Default=0
    kFLAGS.AMILY_CLOTHING = 52; // Amily Clothing. Default="sexy rags"
    kFLAGS.LUMI_MET = 53; // Lumi Met
    kFLAGS.NUMBER_OF_TIMES_MET_SCYLLA = 54; // Met Scylla:   -1 = decline.  0 = not met.  1 = sucked once, 2 = sucked twice, etc
    kFLAGS.TIMES_ENCOUNTED_TAMANIS_DAUGHTERS = 55; // Times encountered Tamani's Daughters
    kFLAGS.TAMANI_TIMES_HYPNOTISED = 56; // Tamani Hypno Level" Description="increases by 1 for each hypno event.  1-3 slight lust raises, 4-9 medium lust raises, 10-19 super high lust raises, 20+ high chance of autorape with special scene.
    kFLAGS.TAMANI_DAUGHTER_PREGGO_COUNTDOWN = 57; // Daughter Pregnancy Counter" Description="they will not return until this countdown timer is 0.  Same length as Tamani's incubation &#x2014; approx 1 week.
    kFLAGS.TAMANI_DAUGHTER_CHAIR_COUNTER = 58; // Times In Goblin Daughter 'CHAIR'
    kFLAGS.TIMES_FUCKED_TAMANIS_DAUGHTERS = 59; // TimeSleptWithDaughters
    kFLAGS.UNABLE_TO_MASTURBATE_BECAUSE_CENTAUR = 60; // Fail Masturbation As Centaur?
    kFLAGS.CERULEAN_POTION_BAD_END_FUTA_COUNTER = 61; // Cerulean Potion Bad-End Futa Count
    kFLAGS.CERULEAN_POTION_NEUTER_ATTEMPTED = 62; // Cerulean Potion Neuter Attempted
    kFLAGS.TEMP_STORAGE_SAVE_DELETION = 63; // Used as temp storage for deleting save slots
    kFLAGS.MARBLE_GROSSED_OUT_BECAUSE_WORM_INFESTATION = 64; // Marble not sleeping with you due to worms
    kFLAGS.FORCE_BEE_TO_PRODUCE_HONEY = 65; // Force Bee Honey Drop - Found Bee Honey.    1=Found
    kFLAGS.HAIR_GROWTH_STOPPED_BECAUSE_LIZARD = 66; // Hair no longer grows due to lizard
    kFLAGS.TIMES_AUTOFELLATIO_DUE_TO_CAT_FLEXABILITY = 67; // CAT: Autofellated
    kFLAGS.EDRYN_PREGNANCY_INCUBATION = 68; //
    kFLAGS.EDRYN_NUMBER_OF_KIDS = 69; // EDRYN: Kids
    kFLAGS.EDRYN_NEVER_SEE_AGAIN = 70; // EDRYN: NEVER SEE AGAIN
    kFLAGS.EDRYN_PREGNANT_AND_NOT_TOLD_PC_YET = 71; // EDRYN: Pregnancy Panic happen?
    kFLAGS.EDRYN_NEEDS_TO_TALK_ABOUT_KID = 72; // EDRYN: Gotta talk about kid
    kFLAGS.EDRYN_GIFT_COUNTER = 73; // EDRYN: GOOD HAND OUTS
    kFLAGS.AMILY_MET_PURE_JOJO = 74; // AMILY: Met pure jojo
    kFLAGS.AMILY_SPAR_WITH_PURE_JOJO = 75; // AMILY: Spar with Jojo
    kFLAGS.AMILY_PISSED_PC_CORRUPED_JOJO = 76; // AMILY: Knew pure Jojo and is pissed that you 'broke' him.
    kFLAGS.AMILY_WAIT_FOR_PC_FIX_JOJO = 77; // AMILY: PC agreed to 'fix' jojo.  No sex until this is reset to 0.
    kFLAGS.AMILY_BLOCK_COUNTDOWN_BECAUSE_CORRUPTED_JOJO = 78; // AMILY: Jojo fixing countdown - no encounters with amily till it reaches 0.
    kFLAGS.JOJO_FIXED_STATUS = 79; // JOJO: 'FIXED' = 1, 'FIXED + NOTE READ = 2
    kFLAGS.JOJO_DEAD_OR_GONE = 80; // JOJO DEAD OR GONE = 1
    kFLAGS.AMILY_DISCOVERED_TENTATLE_JOJO = 81; // AMILY: Discovered tentacle Jojo happened
    kFLAGS.AMILY_MET_RATHAZUL = 82; // AMILY: Met Rathazul
    kFLAGS.RATHAZUL_CORRUPT_JOJO_FREAKOUT = 83; // RATHAZUL: Corrupt Jojo freakout!
    kFLAGS.JOJO_RATHAZUL_INTERACTION_COUNTER = 84; // RATHAZUL: NON CORRUPT JOJO STUFF
    kFLAGS.MARBLE_OR_AMILY_FIRST_FOR_FREAKOUT = 85; // Which came first?  Marble(1) or Amily(2) - Freakout at Camp if both Marble and Amily present.    1=true, 2=No freakout
    kFLAGS.AMILY_NOT_FREAKED_OUT = 86; // Amily Freakout Session
    kFLAGS.RATHAZUL_CAMP_INTERACTION_COUNTDOWN = 87; // Rathazul inter-follower countdown timer
    kFLAGS.DISCOVERED_HIGH_MOUNTAIN = 88; // DISCOVER HIGH MOUNTAIN (Rangers, what a terrible TV show)
    kFLAGS.COMBAT_BONUS_XP_VALUE = 89; // Sekrit Bonus XP Pass
    kFLAGS.MET_SOPHIE_COUNTER = 90; // Met Sophie?
    kFLAGS.FUCKED_SOPHIE_COUNTER = 91; // Times Had Sex With Sophie
    kFLAGS.BREASTFEAD_SOPHIE_COUNTER = 92; // Times Breastfed Sophie
    kFLAGS.SOPHIE_PREGNANCY_TYPE = 93; // Was previously SOPHIE_WILD_EGG_COUNTDOWN_TIMER
    kFLAGS.SOPHIE_EGGS_LAID = 94; // Sophie eggs laid
    kFLAGS.PC_CURRENTLY_LUSTSTICK_AFFECTED = 95; // N
    kFLAGS.SOPHIE_ANGRY_AT_PC_COUNTER = 96; // Sophie Pissed Off Counter
    kFLAGS.TIMES_PISSED_OFF_SOPHIE_COUNTER = 97; // Times Pissed Off Sophie
    kFLAGS.TIMES_FUCKED_SOPHIE_LESBIAN = 98; // Times Lesbo-Sexed
    kFLAGS.EASY_MODE_ENABLE_FLAG = 99; // Invincibility On - Easy Mode.    0=false, 1=true
    kFLAGS.CORRUPT_MARAE_FOLLOWUP_ENCOUNTER_STATE = 100; // Corrupt Marae Followups
    kFLAGS.FOUND_WIZARD_STAFF = 101; // Found Wizard Staff
    kFLAGS.JOJO_LAST_MEDITATION = 102; // Last time Jojo meditation used
    kFLAGS.TIMES_AUTOFELLATIOED_EXGARTUAN = 103; // Times Autofellated Exgartuan
    kFLAGS.WHITNEY_GEMS_PAID_THIS_WEEK = 104; // Whitney Gems Paid Out That Week
    kFLAGS.TIMES_MET_SCYLLA_IN_ADDICTION_GROUP = 105; // SCYLLA:  Times met Addiction Group
    kFLAGS.TIMES_SCYLLA_ADDICT_GROUP_EXPLOITED = 106; // SCYLLA: Times addict group taken advantage of
    kFLAGS.SCYLLA_TIMES_SHARED_IN_ADDICT_GROUP = 107; // SCYLLA: Times given the option to 'share' something
    kFLAGS.SCYLLA_MILK_THERAPY_TIMES = 108; // SCYLLA: Milk therapy times
    kFLAGS.SCYLLA_CUM_THERAPY_TIMES = 109; // SCYLLA: Cum therapy times
    kFLAGS.SCYLLA_SEX_THERAPY_TIMES = 110; // SCYLLA: Sex therapy times
    kFLAGS.CERULEAN_SUCCUBUS_HERM_COUNTER = 111; // Cerulean Succubus: Herm times used
    kFLAGS.USED_MILKER_TODAY = 112; // Used milkers today?
    kFLAGS.DISCOVERED_DUNGEON_2_ZETAZ = 113; // Discovered Dungeon 2 (Zetaz's Lair)
    kFLAGS.DEFEATED_ZETAZ = 114; // Zetaz Defeated
    kFLAGS.ZETAZ_DOOR_UNLOCKED = 115; // Zetaz' Door unlocked
    kFLAGS.ZETAZ_IMP_HORDE_DEFEATED = 116; // Imp Horde Defooted
    kFLAGS.ZETAZ_FUNGUS_ROOM_DEFEATED = 117; // Fungus Room Defeated (1 = yes)
    kFLAGS.SILLY_MODE_PONIES = 118; // PONIES?!?!?!
    kFLAGS.FREED_VALA = 119; // Vala Released?
    kFLAGS.WEEKLY_FAIRY_ORGY_COUNTDOWN = 120; // Weekly Faerie Orgy Countdown
    kFLAGS.ENCOUNTERED_VALA_AT_BAR = 121; // Vala Met At Bar?
    kFLAGS.FUCKED_VALA_AT_BAR_TODAY = 122; // Fucked Vala Today @ Bar?
    kFLAGS.TIMES_FUCKED_VALA_IN_DUNGEON = 123; // Times Vala Used IN Dungeon
    kFLAGS.INVESTIGATED_VALA_AFTER_ZETAZ_DEFEATED = 124; // Investigated Vala Since Zetaz downed?
    kFLAGS.TIME_SINCE_VALA_ATTEMPTED_RAPE_PC = 125; // rape attempt
    kFLAGS.TIMES_PC_DEFEATED_VALA = 126; // Times beaten Vala into the dirt
    kFLAGS.TIMES_PC_DEFEATED_VALA_AND_RAEPED = 127; // Times beat AND raped vala
    kFLAGS.ZETAZ_DEFEATED_AND_KILLED = 128; // Zetaz Killed
    kFLAGS.ZETAZ_LAIR_TOOK_BONDAGE_STRAPS = 129; // Bondage Straps Taken
    kFLAGS.ZETAZ_LAIR_DEMON_VENDOR_PRESENT = 130; // Sean Demon Vendor Here
    kFLAGS.TIMES_EXPLORED_PLAINS = 131; // Times Explored Plains
    kFLAGS.MET_BUNBUN = 132; // Met Bunbun
    kFLAGS.RAPHEAL_COUNTDOWN_TIMER = 133; // Raphael Countdown (Time till Quiksilver Fawkes.  Set to -1 betrayed, set to -2 if covered for.
    kFLAGS.RAPHAEL_MET = 134; // Raphael Met? (1 = Y)
    kFLAGS.RAPHAEL_DRESS_TIMER = 135; // Dress TImer (Set when dress acquired, will proc event when dress is worn to bed or when counter is up (quiksilver fawkes!))
    kFLAGS.REJECTED_RAPHAEL = 136; // Raphael Reject?
    kFLAGS.RAPHAEL_RAPIER_TRANING = 137; // Raphael Rapier Training - OR? - Weapon strength post-newgame.
    kFLAGS.RAPHAEL_INTELLIGENCE_TRAINING = 138; // Raphael Intelligence Training
    kFLAGS.RAPHAEL_DISGUSTED_BY_PC_APPEARANCE = 139; // Raphael Disgusted by PC appearance
    kFLAGS.RAPHAEL_SECOND_DATE = 140; // Raphael 2nd Date Happen?
    kFLAGS.HELLHOUND_MASTER_PROGRESS = 141; // Hellhound Progression
    kFLAGS.SALON_MINOCUM_UNLOCKED = 142; // Can buy minotaur cum from goblins?
    kFLAGS.TIMES_CAUGHT_URTA_WITH_SCYLLA = 143; // How Many Times Have You Caught Urta + Scylla?
    kFLAGS.TIMES_ADVANTAGED_SCYLLA_MULTICOCKS = 144; // Multitake Scylla meeting take advantage ever done?
    kFLAGS.URTA_CONFRONTED_SCYLLA = 145; // Urta confrontation about Scylla ever done?
    kFLAGS.URTA_DRINK_FREQUENCY = 146; // Urta drink toggle = 0 is same, 1 is more, -1 is less.
    kFLAGS.URTA_BANNED_FROM_SCYLLA = 147; // Is Urta banned from Scylla?  1 = yes.
    kFLAGS.URTA_PAID_OUT_RAPHAELS_BOUNTY = 148; // Has Urta paid out Raphael's Bounty? (1 = yes)
    kFLAGS.RAPHAEL_BONED = 149; // Did you bone Raphael?
    kFLAGS.DOMINIKA_STAGE = 150; // Dominika Stage - 0=unknown, 1=met, 2=received, -1=blocked
    kFLAGS.DOMINIKA_SUCKED_OFF_LARGE_COCKS = 151; // Times Dominika Sucked off Smaller dicks
    kFLAGS.DOMINIKA_SUCKED_OFF_SMALL_COCKS = 152; // Times Dominika sucked off bigger dicks
    kFLAGS.DOMINIKA_VAGINAL_ORAL_RECEIVED = 153; // Times received vaginal oral from fellatrix
    kFLAGS.DOMINIKA_EMBARRASSED_ABOUT_MAGIC = 154; // Has fellatrix been embarassed about your magic knowledge yet?
    kFLAGS.DOMINIKA_LEARNING_COOLDOWN = 155; // Dominika learning cooldown
    kFLAGS.DOMINIKA_SUCKED_OFF_DOGCOCKS = 156; // Fellatrix - times sucked dogcock
    kFLAGS.DOMINIKA_SPECIAL_FOLLOWUP = 157; // Fellatrix - Special followup happen? (1 = agree, 2 = eh, 3 disagree, add 3 for post-dream)
    kFLAGS.AMILY_MET_AS = 158; // Amily remembers PC's gender at first meeting. Amily_Met_As:Int=158;
    kFLAGS.AMILY_CONFESSED_LESBIAN = 159; //  1=yes,2=and accepted1=Yes,2=And Accepted
    kFLAGS.AMILY_TIMES_FUCKED_FEMPC = 160; //
    kFLAGS.AMILY_HERM_TIMES_FUCKED_BY_FEMPC = 161; //
    kFLAGS.PC_TIMES_BIRTHED_AMILYKIDS = 162; // Times PC has birthed Amily's brood - Pc_Times_Birthed_Amilykids:Int=162;
    kFLAGS.PC_PENDING_PREGGERS = 163; //  1=yes,2=finished1=Yes,2=Finished
    kFLAGS.AMILY_PC_GENDER = 164; //
    kFLAGS.AMILY_HERM_QUEST = 165; //  1=amily flipped out, 2=accepted as amily's dad1=Amily Flipped Out, 2=Accepted As Amily'S Dad
    kFLAGS.AMILY_ALLOWS_FERTILITY = 166; //
    kFLAGS.LIFETIME_GYM_MEMBER = 167; // Permanent Gym Membership? (1 = yes)
    kFLAGS.AMILY_CORRUPT_FLIPOUT = 168; // Amily flip out about corruption yet?
    kFLAGS.AMILY_DRUG_MADE_COUNTER = 169; // Times cooked Amily's Drug
    kFLAGS.AMILY_CORRUPTION = 170; // Amily's Corruption Value
    kFLAGS.AMILY_HAS_BALLS_AND_SIZE = 171; // Amily's Balls: 1 = yes, higher numbers = bigger balls.
    kFLAGS.AMILY_VAGINAL_WETNESS = 172; // Amily's Wetness
    kFLAGS.AMILY_CAMP_CORRUPTION_FREAKED = 173; // In camp amily warns you!  DUN DUN DUN! - Amily Freaked out about your corruption.    0=Not freaked out, 1=Freaked out
    kFLAGS.DOMINIKA_SUCKED_OFF_HORSECOCKS = 174; // Times Dominika Sucked off horsecocks
    kFLAGS.DOMINIKA_DRAMA = 175; // Dominidrama - 1 = yes, 2 = no
    kFLAGS.TIMES_HAD_YOGA = 176; // Cotton - TIMES HAD YOGA
    kFLAGS.COTTON_MET_FUCKED = 177; // FUCKED - 0 = never met.  1 = met but not fucked. 2 = fucked
    kFLAGS.GYM_FEES_PAID_TODAY = 178; // Gym paid fees today?
    kFLAGS.JASUN_MET = 179; // Met Jasun
    kFLAGS.JASUN_FUCKED_COUNTER = 180; // Times fucked Jasun
    kFLAGS.JASUN_NAME_LEARNED = 181; // Jasun name learned
    kFLAGS.GYM_MACHINE_STATUS = 182; // Gym Sex Machine Status (0 - not encountered, 1 = encountered, 2 = used.
    kFLAGS.TIMES_USED_SEX_MACHINE_AS_MALE = 183; //  Times Used Sex Machine As Male
    kFLAGS.TIMES_USED_SEX_MACHINE_AS_FEMALE = 184; //  Times Used Sex Machine As Female
    kFLAGS.TIMES_USED_SEX_MACHINE_AS_EUNUCH = 185; //  Times Used Sex Machine As Genderless
    kFLAGS.TIMES_USED_SEX_MACHINE_AS_HERM = 186; //  Times Used Sex Machine As Herm
    kFLAGS.NEW_GAME_PLUS_BONUS_STORED_XP = 187; //  New Game Plus - Stored XP
    kFLAGS.NEW_GAME_PLUS_BONUS_STORED_ITEMS = 188; //  New Game Plus - Stored Gems
    kFLAGS.NEW_GAME_PLUS_BONUS_WEAPON_NAME = 189; //  NG+ Weapon name
    kFLAGS.NEW_GAME_PLUS_BONUS_WEAPON_VALUE = 190; //  NG+ Weapon Value
    kFLAGS.NEW_GAME_PLUS_BONUS_WEAPON_PERK = 191; //  NG+ Weapon Perk
    kFLAGS.NEW_GAME_PLUS_BONUS_WEAPON_VERB = 192; //  NG+ Weapon Verb
    kFLAGS.NEW_GAME_PLUS_BONUS_WEAPON_ATTACK = 193; //  NG+ Weapon Attack
    kFLAGS.NEW_GAME_PLUS_BONUS_ARMOR_NAME = 194; //  NG+ Armor Name
    kFLAGS.NEW_GAME_PLUS_BONUS_ARMOR_PERK = 195; //  NG+ Armor Perk
    kFLAGS.NEW_GAME_PLUS_BONUS_ARMOR_DEFENSE = 196; //  NG+ ArmorDef
    kFLAGS.NEW_GAME_PLUS_BONUS_ARMOR_VALUE = 197; //  NG + Armor Value
    kFLAGS.TEMP_STORAGE_PASTRY_NAME = 198; //  Holding pattern for pastry name
    kFLAGS.TEMP_STORAGE_PASTRY_PRICE = 199; //  Holding pattern for price
    kFLAGS.MINOTAUR_CUM_ECLAIR_UNLOCKED = 200; //  Unlocked mino cum eclair
    kFLAGS.TIMES_VISITED_BAKERY = 201; //  Times visited bakery
    kFLAGS.TIMES_FUCKED_HECKEL_BLOWJOB = 202; //  Times Heckel BJ
    kFLAGS.TIMES_FUCKED_HECKEL_ANAL = 203; //  Times Heckel Anal
    kFLAGS.MET_HECKEL = 204; //  Met Heckel
    kFLAGS.MET_IFRIS = 205; //  Met Ifris
    kFLAGS.TIMES_FUCKED_IFRIS_BLOWJOB = 206; //  Ifris sucked?
    kFLAGS.TIMES_FUCKED_IFRIS_LICKED = 207; //  Ifris licked?
    kFLAGS.IFRIS_SHOWED_OFF = 208; //  Shown off for ifris
    kFLAGS.HAVE_ENCOUNTERED_GNOLL_PLAINS = 209; //  New gnoll met?
    kFLAGS.BAZAAR_SLIPPERY_SQUEEZE_VISITED = 210; //  Visited the Slippery Squeeze?
    kFLAGS.BAZAAR_ENTERED = 211; //  Entered the bizarre bazaar?
    kFLAGS.BAZAAR_ENCOUNTERED = 212; //  Found the bazaar previously?
    kFLAGS.CINNABAR_HOUSE_VISITED = 213; //  -Been to Cinnabar's House?
    kFLAGS.CINNABAR_NUMBER_ENCOUNTERS = 214; //  -CINNABAR Introduced?
    kFLAGS.CINNABAR_NUMBER_TIMES_FUCKED = 215; //  -CINNABAR Times Fucked
    kFLAGS.CINNABAR_FUCKED_CORRUPT_PREVIOUSLY = 216; //  -CINNABARWas last fuck corrupt fuck? - Cinnabar Hard Fucked.    0=No, 1=Yes
    kFLAGS.CERAPH_GENITAL_STEAL_CHOICE = 217; // Ceraph's genital stealing choice is stored here between functions
    kFLAGS.CERAPH_DICKS_OWNED = 218; // Number of Dicks Ceraph owns
    kFLAGS.CERAPH_PUSSIES_OWNED = 219; // Number of Pussies Ceraph owns
    kFLAGS.CERAPH_TITS_OWNED = 220; // Number of Tit's Ceraph owns
    kFLAGS.ROXANNE_MET = 221; // -Met her?
    kFLAGS.ROXANNE_DRINING_CONTEST_WON = 222; // -Times Won Contest
    kFLAGS.ROXANNE_DRINING_CONTEST_LOST = 223; // -Times Lost Contest
    kFLAGS.ROXANNE_DRINKING_CONTEST_LAST_WINNER = 224; // -Who won contest last? (1 = pc, 2 = strahza)
    kFLAGS.ROXANNE_TIME_WITHOUT_SEX = 225; // -How long has Strahza gone without sex? Reducto will probably reduce this.
    kFLAGS.ROXANNE_DRINKING_CONTEST_LOSE_ON_PURPOSE = 226; // -Is PC losing the Roxanne's drinking contest intentionally?
    kFLAGS.ROXANNE_DRINKING_CONTEST_BONUS_SCORE = 227; // -Drinking Contest Bonus Score
    kFLAGS.DIAPAUSE_FLUID_AMOUNT = 228; // Diapause fluid store
    kFLAGS.DIAPAUSE_NEEDS_DISPLAYING = 229; // Diapause gain need displayed?
    kFLAGS.IZMA_ENCOUNTER_COUNTER = 230; // Sharkgirls met? (Izma counter)
    kFLAGS.IZMA_TIMES_FOUGHT_AND_WON = 231; // Izma fight
    kFLAGS.IZMA_TALKED_AT_LAKE = 232; // Times Talked At shark pussy
    kFLAGS.IZMA_WORMS_SCARED = 233; // Izma worm scare (1 = Izma has been scared off by worms)
    kFLAGS.BONUS_ITEM_AFTER_COMBAT_ID = 234; // Izma loot storage - Izma saved loot status
    kFLAGS.IZMA_GLOVES_TAKEN = 235; // Taken Izma gloves
    kFLAGS.IZMA_AMILY_FREAKOUT_STATUS = 236; // Izma + Amily Freakout Status = (-1 = done, 0 = nothing yet, 1 = queued for camp prog)
    kFLAGS.IZMA_MARBLE_FREAKOUT_STATUS = 237; // Izma + Marble Freakout Status = (Above)
    kFLAGS.IZMA_FOLLOWER_STATUS = 238; // Izma Follower Toggle (-1 = stay at lake, 0 = neutral, 1 = live in camp)
    kFLAGS.IZMA_TALK_LEVEL = 239; // Izma Talk level
    kFLAGS.MINO_CHEF_INTRO = 240; // Mino Chef First Meeting Happen?
    kFLAGS.MINO_CHEF_EXPLAINED_INGREDIENTS = 241; // mino explained what he needs yet?
    kFLAGS.MADDIE_STATUS = 242; // , 3 =stayed, 4 = epilogue'ed
    kFLAGS.MINO_CHEF_BAKERY_PROC_COUNTER = 243; // Counter for minotaur chef baker procs - Maddie present at bakery.    Mod%8=0, present
    kFLAGS.COTTON_UNUSUAL_YOGA_BOOK_TRACKER = 244; // Cotton Unusual Yoga Guidebook tracker
    kFLAGS.COTTON_BREAKFAST_CLUB = 245; // Cotton Breakfast Club
    kFLAGS.IZMA_TIGERSHARK_TOOTH_COUNTDOWN = 246; // Tiger Tooth Countdown
    kFLAGS.GENDERLESS_CENTAUR_MADNESS = 247; // Genderless centaur madness
    kFLAGS.IZMA_PREGNANCY_DISCUSSED = 248; // Izma Preggers Discussion
    kFLAGS.IZMA_PREGNANCY_ENABLED = 249; // Pregnancy Enabled (1 = yes)
    kFLAGS.IZMA_INCUBATION = 250; // Izma's Incubation timer
    kFLAGS.IZMA_CHILDREN_SHARKGIRLS = 251; // Izma sharkgirls
    kFLAGS.IZMA_CHILDREN_TIGERSHARKS = 252; // Izma tigersharks
    kFLAGS.IZMA_TIME_TILL_NEW_BOOK_AVAILABLE = 253; // Izma Nu Book Countdown
    kFLAGS.TAKEN_WEAPON_RACK_DEPRECATED = 254; // Weapon Rack owned? (1 = yes) (NO LONGER USED)
    kFLAGS.TAKEN_ARMOUR_RACK_DEPRECATED = 255; // Armor Rack owned? (2 = yes) (NO LONGER USED)
    kFLAGS.ISABELLA_CAMP_APPROACHED = 256; // PC decided to approach Isabella's camp yet? 1
    kFLAGS.ISABELLA_MET = 257; // Met Isabella?
    kFLAGS.ISABELLA_OKAY_WITH_TALL_FOLKS = 258; // Is Isabella okay with tall folks?
    kFLAGS.ISABELLA_MET_SHORT_PC = 259; // Has Isabella ever met the PC while PC is short?
    kFLAGS.ISABELLA_ANGRY_AT_PC_COUNTER = 260; // Isabella angry counter
    kFLAGS.ISABELLA_SLEEP_RAPE_COUNTER = 261; // Isabella Sleep rape counter
    kFLAGS.ISABELLA_TIMES_TALKED = 262; // TImes talked with Isabella
    kFLAGS.NANCY_MET = 263; // Met nancy
    kFLAGS.NANCY_RELATIONSHIP_LEVEL = 264; // Nancy relationship level
    kFLAGS.NANCY_TIMES_TALKED = 265; // Talk Nancy
    kFLAGS.NANCY_TIMES_BONED = 266; // Times boned
    kFLAGS.LILIUM_TIMES_TALKED = 267; // Lilium Timed Boned
    kFLAGS.PLAYER_DISARMED_WEAPON_ID = 268; // weapon storage
    kFLAGS.PLAYER_DISARMED_WEAPON_ATTACK = 269; // weapon damage
    kFLAGS.TIMES_ENCOUNTERED_FEMALE_SPIDERMORPHS = 270; // Times encountered spiderbitches
    kFLAGS.FEMALE_SPIDERMORPH_PREGNANCY_INCUBATION = 271; // Spider Preggo Timer
    kFLAGS.TIMES_EXPLORED_SWAMP = 272; // Times Explored Swamp
    kFLAGS.SHOW_SPRITES_FLAG = 273; // Sprites off? toggle
    kFLAGS.RATHAZUL_SILK_ARMOR_COUNTDOWN = 274; // Rathazul silk armor queue - 1 = armor done!
    kFLAGS.RATHAZUL_SILK_ARMOR_TYPE = 275; // Rathazul armor type selector - 1=armor, 2=robes (3=bra, 4=panties, 5=loincloth)
    kFLAGS.TIMES_ENCOUNTERED_BASILISK = 276; // Times Encountered Basilisk
    kFLAGS.TIMES_ENCOUNTERED_DRIDER = 277; // Times Encountered Drider
    kFLAGS.LOTTIE_DISABLED = 278; // LOTTIE DISABLED (1+ = YUS)
    kFLAGS.LOTTIE_FIGURE = 279; // LOTTIE FIGURE (HIGHER = SLIMMER)
    kFLAGS.LOTTIE_CONFIDENCE = 280; // LOTTIE CONFIDENCE (HIGHER = AWESOMER)
    kFLAGS.LOTTIE_ENCOUNTER_COUNTER = 281; // TIMES ENCOUNTERED LOTTIE
    kFLAGS.SOPHIE_BIMBO = 282; // Sophie Bimbo Follower?
    kFLAGS.SOPHIE_DISABLED_FOREVER = 283; // Sophie Disabled Forever
    kFLAGS.TIMES_SOPHIE_HAS_DRUNK_OVI_ELIXIR = 284; // Has Ovi Event Procced?
    kFLAGS.LUSTSTICK_RESISTANCE_PROGRESS = 285; // Luststick Resistance builder - decrements by 1 every day, incremented by 1 for every 2 hours of luststick
    kFLAGS.CERAPH_BELLYBUTTON_PIERCING = 286; // Have Ceraph's belly-button piercing
    kFLAGS.CERAPH_TOKEN = 287; // Carrying Careph's token?
    kFLAGS.CERAPH_HIDING_DICK = 288; // Ceraph Cock Hidden (1 = yes, 0 = cock floppin') - Ceraph's Demon Dong status 0=Visible, 1=Not visible
    kFLAGS.CERAPH_LICKED_YOU_OUT = 289; // Times Ceraph Licked You Out
    kFLAGS.CERAPH_PUNISHED = 290; // Punished Ceraph?
    kFLAGS.CERAPH_BEATEN_AND_RAPED_COUNTER = 291; // Times Beaten Ceraph And Raped Her Without Losing
    kFLAGS.BAZAAR_DEMONS_LISTENED_IN = 292; // Times listened in on demons
    kFLAGS.CERAPH_FAUX_CORRUPTION_DISABLED = 293; // Disabled Ceraph Faux Corruption - Ceraph Corruption Scene
    kFLAGS.CERAPH_SWEETIE_NO_RP_DONE = 294; // Times Done 'SWEETIE NO!' Ceraph Marble RP
    kFLAGS.CERAPH_SWEETIE_NO_RP_UTTER_MOO_DISABLED = 295; // In Ceraph's SWEETIE NO!, is Utter Moo disabled?
    kFLAGS.CERAPH_UDDERS = 296; // Ceraph Udder on or off? - Ceraph Has Udders.    0=No, 1=Yes
    kFLAGS.LOTTIE_LOVES_HER_BODY = 297; // Lottie love her bodY? (1 = yes)
    kFLAGS.LOTTIE_PORKED_COUNT = 298; // Lottie porked count? (1+ = yes)
    kFLAGS.LOTTIE_TRAINER = 299; // Lotties Trainer? (1 = yes)
    kFLAGS.LOTTIE_LAST_ENCOURAGEMENT_STATE = 300; // LOTTIE: Last encouragement state
    kFLAGS.LOTTIE_ENCOURAGEMENT_THRESHOLD_31_30_DOWN = 301; // LOTTIE: encouragement go from 31-&gt;30 yet? (1 = yes)
    kFLAGS.LOTTIE_ENCOURAGEMENT_THRESHOLD_30_31_UP = 302; // LOTTIE: Encouragement moved from 30 to 31 yet? (1 = yes)
    kFLAGS.LOTTIE_ENCOURAGEMENT_THRESHOLD_80_79_DOWN = 303; // LOTTIE: Encouragement moved from 80 to 79 yet? (1 = yes)
    kFLAGS.LOTTIE_ENCOURAGEMENT_THRESHOLD_79_80_UP = 304; // LOTTIE: Encouragement moved from 79 to 80 yet? (1=yes)
    kFLAGS.SILLY_MODE_ENABLE_FLAG = 305; // SILLY MODE ON?
    kFLAGS.LOTTIE_NEEDS_TO_TALK_ORAL = 306; // LOTTIE: Need to talk about Oral?
    kFLAGS.LOTTIE_NEEDS_TO_TALK_ANAL = 307; // LOTTIE: Need to talk about Anal?
    kFLAGS.LOTTIE_WEIGHT_CONCLUSION = 308; // LOTTIE: WEIGHT AT CONCLUSION OF LAST TALK EVENT
    kFLAGS.LOTTIE_FATASS_LOW_ESTEEM = 309; // LOTTIE: FATASS LOW SELF-ESTEEM SPECIAL EVENT TRIGGER YET? (1 = yes)
    kFLAGS.LOTTIE_DOGGYSTYLE_UNLOCKED = 310; // LOTTIE: DOGGYSTYLE UNLOCKED? (1 = yes)
    kFLAGS.LOTTIE_WALKIE_UNLOCKED = 311; // LOTTIE: WALKIES UNLOCKED? (1 = yes)
    kFLAGS.LOTTIE_LOVING_FAT_BITCH_EVENT = 312; // LOTTIE: LOVING FAT BITCH 1TIME EVENT TRIGGER? (1 = yes)
    kFLAGS.LOTTIE_COWGIRL_UNLOCKED = 313; // LOTTIE: COWGIRL UNLOCKED? (1 = yes)
    kFLAGS.LOTTIE_QUICKIE_UNLOCKED = 314; // LOTTIE: QUICKIE UNLOCKED (1 = yes)
    kFLAGS.LOTTIE_CHARLOTTES_WEB_EVENT = 315; // LOTTIE: CHARLOTTES WEB 1TIME HAPPEN (1 = yes)
    kFLAGS.LOTTIE_THREESOME_UNLOCKED = 316; // LOTTIE: THREESOME UNLOCKED (1 = yes)
    kFLAGS.LOTTIE_ELLE_NTR_UNLOCKED = 317; // LOTTIE: ELLE NTR UNLOCKED (1 = yes)
    kFLAGS.LOTTIE_MAX_GOAL_LOVE_REACHED = 318; // LOTTIE: MAX GOALS AND MAX LOVE REACHED (1 = yes)
    kFLAGS.LOTTIE_FEMDOM_UNLOCKED = 319; // LOTTIE: FEMDOM UNLOCKED (1 = yes)
    kFLAGS.LOTTIE_REVERSE_COWGIRL_UNLOCKED = 320; // LOTTIE: REVERSE COWGIRL UNLOCKED (1 = yes)
    kFLAGS.LOTTIE_TIMES_GIVEN_ITEMS = 321; // LOTTIE: TImes given item
    kFLAGS.LOTTIE_LABOVA_COUNTDOWN = 322; // LOTTIE: LA BOVA COUNTDOWN - counts down to 1 before she'll use it again.  Also used to track if LaBova has ever been used
    kFLAGS.LOTTIE_REDUCTO_USED = 323; // LOTTIE: HAS SHE USED REDUCTO?
    kFLAGS.LOTTIE_HAM_SAMMICH = 324; // LOTTIE: HAM SAMMICH
    kFLAGS.TIMES_ENCOUNTERED_MINOTAUR_MOB = 325; // Times met minotaur mob
    kFLAGS.ADULT_MINOTAUR_OFFSPRINGS = 326; // Number of grown up minotaur offspring - TRIBE SIZE
    kFLAGS.MINOTAUR_SONS_PENDING = 327; // Number of minotaur sons pending growing up
    kFLAGS.MINOTAUR_SONS_GROWUP_COUNTER = 328; // Grow up countdown
    kFLAGS.MINOTAUR_SONS_WASTED_TURN = 329; // Minos wasting a turn? (1 = yes)
    kFLAGS.MINOTAUR_SONS_CUM_REPEAT_COOLDOWN = 330; // Cooldown on minotaur cum repeat messages
    kFLAGS.JOJO_COCK_MILKING_COUNTER = 331; // Times Jojo Milked
    kFLAGS.JOJO_COCK_MILKING_COOLDOWN = 332; // Jojo milk cooldown 4 hours
    kFLAGS.PC_COCK_MILKED_COUNTER = 333; // Times PC been cock milked
    kFLAGS.FAP_ARENA_SESSIONS = 334; // Times fap arena'ed
    kFLAGS.FAP_ARENA_VICTORIES = 335; // Fap Arena victories
    kFLAGS.AMILY_OFFERED_DEFURRY = 336; //  1 = Offered to defurry Amily
    kFLAGS.AMILY_NOT_FURRY = 337; //  1 = Amily is no longer a flea-ridden furry who stinks up your carpet.
    kFLAGS.AMILY_IS_BATMAN = 338; //  1 = You turned Amily into a human and then pissed all over her happy thoughts.  She now stalks you from rooftops while buying graphite helmets, utility belts, and a sweet, jetpowered car in the theme of a rat.
    kFLAGS.FAP_ARENA_RULES_EXPLAINED = 339; // Fap Arena - rules been explaned?
    kFLAGS.MINOTAUR_CUM_INTAKE_COUNT = 340; // came in with minotaur cum
    kFLAGS.KIHA_TOLL = 341; //
    kFLAGS.KIHA_TOLL_DURATION = 342; //
    kFLAGS.TIMES_MET_KIHA = 343; //
    kFLAGS.KIHA_TALK_STAGE = 344; //
    kFLAGS.PC_WIN_LAST_KIHA_FIGHT = 345; //
    kFLAGS.AMILY_VISITING_URTA = 346; // AMILY_VISITING_URTA (1 = amily is gone, 2 = they fucked), (3 = DICK MODE) (4 = THREESOME MODE)
    kFLAGS.AMILY_NEED_TO_FREAK_ABOUT_URTA = 347; // AMILY_NEED_TO_FREAK_ABOUT_URTA (1= yes)
    kFLAGS.JOEY_BIG_BALLS_COUNTER = 348; // Joey Big balls counter
    kFLAGS.JOEY_TOLD_TO_MASTURBATE_COUNTER = 349; // Times told joey to masturbate his big balls.
    kFLAGS.URTA_AMILY_FOLLOWUP_NEEDED = 350; // Urta x Amily Urta followup needed?  (1 = cue Urta angst, 2 = done)
    kFLAGS.TIMES_MET_SHOULDRA = 351; //
    kFLAGS.TIMES_BEATEN_SHOULDRA = 352; //
    kFLAGS.TIMES_POSSESSED_BY_SHOULDRA = 353; //
    kFLAGS.TIMED_SHARKGINAS = 354; //
    kFLAGS.TIMES_SHARKPENISED = 355; //
    kFLAGS.SHOULDRA_SLIME_PENOR_TIMES = 356; //
    kFLAGS.SHOULDRA_GENDERLESS_FUCK_COUNT = 357; //
    kFLAGS.SHOULDRA_PENIS_DEFEAT_TIMES = 358; //
    kFLAGS.SHOULDRA_WORM_SCENE_COUNTER = 359; //
    kFLAGS.SHOULDRA_EXGARTUAN_SPIRIT_SEX_COUNT = 360; //
    kFLAGS.SHOULDRA_VAGINAL_POSSESSIONS = 361; //
    kFLAGS.SHOULDRA_HERMSEX_COUNT = 362; //
    kFLAGS.SHOULDRA_USES_YOUR_GIANT_COCK_COUNT = 363; //
    kFLAGS.TIMES_MET_OOZE = 364; //
    kFLAGS.SHOULDRA_PALADIN_MAIDEN_COUNTDOWN = 365; // COUNTDOWN TILL MAIDEN FOLLOWUP
    kFLAGS.SHOULDRA_PALADIN_MAIDEN_COUNTER = 366; // TIMES MET GHOSTGIRL MAIDEN
    kFLAGS.ISABELLA_TIMES_OFFERED_FOLLOWER = 367; //
    kFLAGS.ISABELLA_AFFECTION = 368; //
    kFLAGS.ISABELLA_FOLLOWER_ACCEPTED = 369; //
    kFLAGS.ISABELLA_PLAINS_DISABLED = 370; //
    kFLAGS.ISABELLA_CAMP_DISABLED = 371; //
    kFLAGS.ISABELLA_ACCENT_TRAINING_PERCENT = 372; //
    kFLAGS.ISABELLA_ACCENT_TRAINING_COOLDOWN = 373; //
    kFLAGS.ISABELLA_ACCENT_FORCED_ON = 374; //
    kFLAGS.ISABELLA_MILKED_YET = 375; //
    kFLAGS.ISABELLA_BLOWJOBS_DISABLED = 376; //
    kFLAGS.ISABELLA_MORNING_FELLATIO_COUNT = 377; //
    kFLAGS.ISABELLA_TIME_SINCE_LAST_HOTDOGGING = 378; //
    kFLAGS.ISABELLA_TIMES_HOTDOGGED = 379; //
    kFLAGS.ISABELLA_MILK_COOLDOWN = 380; //
    kFLAGS.ISABELLA_MURBLE_BLEH = 381; //
    kFLAGS.ISABELLA_SPARRING_INTRO = 382; //
    kFLAGS.ISABELLA_PROBOVA_BURP_COUNT = 383; //
    kFLAGS.GOOGIRL_BIRTHS = 384; //
    kFLAGS.GOOGIRL_CONSECUTIVE_LOSSES = 385; //
    kFLAGS.DOMINIKA_TIMES_MULTICOCK_SLOBBERED = 386; //
    kFLAGS.DOMINIKA_TIMES_HYPNO_BJ = 387; //
    kFLAGS.DOMINIKA_LAST_HYPNO_SUCK_COUNT = 388; //
    kFLAGS.CERAPH_ROLEPLAY_AS_DOMINIKA_COUNT = 389; //
    kFLAGS.HEL_TALKED_ABOUT_BERSERKING = 390; //
    kFLAGS.HEL_TALKED_ABOUT_HER = 391; //
    kFLAGS.HEL_TALKED_ABOUT_ATTACKING_YOU = 392; //
    kFLAGS.HEL_FUCKBUDDY = 393; //
    kFLAGS.HEL_FUCK_COUNTER = 394; //
    kFLAGS.HEL_AFFECTION = 395; //
    kFLAGS.HEL_TIMES_ENCOUNTERED = 396; //
    kFLAGS.HEL_ISABELLA_THREESOME_ENABLED = 397; //
    kFLAGS.KATHERINE_UNLOCKED = 398; //
    kFLAGS.KATHERINE_DICK_COUNT = 399; //
    kFLAGS.KATHERINE_DICK_LENGTH = 400; //
    kFLAGS.KATHERINE_KNOT_THICKNESS = 401; //
    kFLAGS.KATHERINE_BALL_SIZE = 402; //
    kFLAGS.KATHERINE_TIMES_SEXED = 403; //
    kFLAGS.EDRYN_TIMES_HEL_THREESOMED = 404; //
    kFLAGS.HEL_EDRYN_OFFER = 405; //
    kFLAGS.ZETSUKO_MET = 406; //
    kFLAGS.ROGAR_PHASE = 407; //
    kFLAGS.ROGAR_DIRT = 408; //
    kFLAGS.ROGAR_WARNING = 409; //
    kFLAGS.ROGAR_DISABLED = 410; //
    kFLAGS.ROGAR_FUCKED_TODAY = 411; //
    kFLAGS.IZMA_KIDS_IN_WILD = 412; // IZMA_KIDS_IN_THE_WILD
    kFLAGS.EXGARTUAN_TIGHTPANTS_MASTURBATE_COUNT = 413; //
    kFLAGS.BOOBGARTUAN_SURPRISE_COUNT = 414; //
    kFLAGS.GOTTEN_INQUISITOR_ARMOR = 415; //
    kFLAGS.DOMINIKAS_SWORD_GIVEN = 416; //
    kFLAGS.HEL_FOXY_FOURSOME_WARNED = 417; //
    kFLAGS.HISTORY_PERK_SELECTED = 418; // HISTORY PERK SET - tail, fur, or scales.    0=Nothing
    kFLAGS.AMILY_TIMES_BUTTFUCKED_PC = 419; //
    kFLAGS.TIMES_FUCKED_AMILYBUTT = 420; //
    kFLAGS.KIHA_AFFECTION_LEVEL = 421; //
    kFLAGS.KIHA_AFFECTION = 422; //
    kFLAGS.KIHA_CORRUPTION_BITCH = 423; //
    kFLAGS.KIHA_NEED_SPIDER_TEXT = 424; //
    kFLAGS.KIHA_AND_HEL_WHOOPIE = 425; //
    kFLAGS.KIHA_ADMITTED_WARM_FEELINZ = 426; // KIHA_CERVIXGINITY_TAKEN
    kFLAGS.KIHA_MOVE_IN_OFFER = 427; //
    kFLAGS.KIHA_FOLLOWER = 428; //
    kFLAGS.KIHA_NEEDS_TO_REACT_TO_HORSECOCKING = 429; //
    kFLAGS.KIHA_CERVIXGINITY_TAKEN = 430; //
    kFLAGS.KIHA_HORSECOCK_FUCKED = 431; //
    kFLAGS.KIHA_CHOKED_OUT_PC = 432; //
    kFLAGS.VALA_CUMBATH_TIMES = 433; //
    kFLAGS.TIMES_AMILY_AND_JOJO_PLAYED_TIMES = 434; //
    kFLAGS.AMILY_X_JOJO_COOLDOWN = 435; //
    kFLAGS.AMILY_INCEST_COUNTDOWN_TIMER = 436; // 1 = timer started, 30 days = RIPE FOR INCEST
    kFLAGS.YVONNE_FUCK_COUNTER = 437; //
    kFLAGS.TIMES_CERAPH_PORTAL_FUCKED = 438; //
    kFLAGS.IZMA_NO_COCK = 439; //
    kFLAGS.ASKED_IZMA_ABOUT_WANG_REMOVAL = 440; //
    kFLAGS.SALON_PAID = 441; //
    kFLAGS.URTA_FAMILY_TALK_ATTEMPTS = 442; //
    kFLAGS.URTA_OPEN_ABOUT_EDRYN = 443; //
    kFLAGS.PC_DISLIKES_URTA_AND_EDRYN_TOGETHER = 444; //
    kFLAGS.DISCUSSED_URTA_ALCOHOLISM = 445; //
    kFLAGS.MET_NIAMH = 446; //
    kFLAGS.GOT_NIAMH_BEER = 447; //
    kFLAGS.TALKED_NIAMH = 448; //
    kFLAGS.NIAMH_MOVED_OUT_COUNTER = 449; //
    kFLAGS.NIAMH_STATUS = 450; //
    kFLAGS.NIAMH_SEAN_BREW_BIMBO_LIQUEUR_COUNTER = 451; // NIAMH_SEAN_BREW_BIMBO_LIQUEUR_COUNTER" Description="1 = ready!
    kFLAGS.TIMES_NIAMH_BAZAAR_MET = 452; //
    kFLAGS.TIMES_MET_ANEMONE = 453; //
    kFLAGS.ANEMONE_KID = 454; //
    kFLAGS.KID_ITEM_FIND_HOURS = 455; //
    kFLAGS.ANEMONE_WATCH = 456; //
    kFLAGS.ANEMONE_WEAPON_ID = 457; //
    kFLAGS.MURBLE_FARM_TALK_LEVELS = 458; //
    kFLAGS.BROKE_UP_WITH_MARBLE = 459; //
    kFLAGS.MARBLE_PLAYED_WITH_KIDS_TODAY = 460; //
    kFLAGS.MARBLE_CAMPTALK_LEVEL = 461; //
    kFLAGS.MARBLE_TELADRE_STORY = 462; //
    kFLAGS.MARBLE_WARNING = 463; //
    kFLAGS.FARM_DISABLED = 464; //
    kFLAGS.MARBLE_BOVA_LEVEL = 465; //
    kFLAGS.JOEY_OFFERED_MILKER = 466; //
    kFLAGS.ANTS_PC_FAILED_PHYLLA = 467; //
    kFLAGS.ANT_COLONY_KEPT_HIDDEN = 468; //
    kFLAGS.PC_READY_FOR_ANT_COLONY_CHALLENGE = 469; //
    kFLAGS.PHYLLA_SAVED = 470; //
    kFLAGS.MET_ANT_ARENA = 471; //
    kFLAGS.ANT_ARENA_WINS = 472; //
    kFLAGS.ANT_ARENA_LOSSES = 473; //
    kFLAGS.ANTS_PC_BEAT_GNOLL = 474; //
    kFLAGS.ANTS_PC_LOST_TO_GNOLL = 475; //
    kFLAGS.MET_ANT_ARENA_GNOLL = 476; //
    kFLAGS.FOX_BAD_END_WARNING = 477; //
    kFLAGS.HEL_AFFECTION_FOLLOWER = 478; //
    kFLAGS.HEL_FOLLOWER_LEVEL = 479; //
    kFLAGS.TOOK_GOO_ARMOR = 480; //
    kFLAGS.LOST_GOO_ARMOR_FIGHT = 481; //
    kFLAGS.WON_GOO_ARMOR_FIGHT = 482; //
    kFLAGS.HEL_REDUCED_ENCOUNTER_RATE = 483; //
    kFLAGS.MET_VALERIA = 484; //
    kFLAGS.HEL_HARPIES_DEFEATED = 485; //
    kFLAGS.HEL_DUNGEON_MEAD_LOOTED = 486; //
    kFLAGS.HEL_BRIGID_DEFEATED = 487; //
    kFLAGS.HEL_PC_TALKED_WITH_HAKON = 488; //
    kFLAGS.HEL_DUNGEON_TAKEN_WHIP = 489; //
    kFLAGS.HEL_DUNGEON_TAKEN_STRAPS = 490; //
    kFLAGS.HEL_DUNGEON_TAKEN_DAGGER = 491; //
    kFLAGS.HEL_PHOENIXES_DEFEATED = 492; //
    kFLAGS.HEL_HARPY_QUEEN_DEFEATED = 493; //
    kFLAGS.HARPY_QUEEN_EXECUTED = 494; // HARPY_QUEEN_EXECUTED" Description="-1 = RELEASED, 1 = KILLED
    kFLAGS.HEL_KNOWS_ABOUT_HAKON = 495; //
    kFLAGS.FOUGHT_WITH_HEL_IN_DUNGEON = 496; //
    kFLAGS.TOOK_QUEEN_STAFF = 497; //
    kFLAGS.VALARIA_AT_CAMP = 498; //
    kFLAGS.VELARIA_FUTA = 499; //
    kFLAGS.DECLINED_TO_VISIT_REBECCS_VILLAGE = 500; //
    kFLAGS.TIMES_IN_DEMON_PIT = 501; //
    kFLAGS.TIMES_REFUSED_REBECCS_OFFER = 502; //
    kFLAGS.OWCAS_ATTITUDE = 503; //
    kFLAGS.VAPULA_SUBMISSIVENESS = 504; //
    kFLAGS.DAYS_SINCE_LAST_DEMON_DEALINGS = 505; //
    kFLAGS.OWCA_UNLOCKED = 506; //
    kFLAGS.REBECCS_LAST_PLEA = 507; //
    kFLAGS.OWCA_ANGER_DISABLED = 508; //
    kFLAGS.SLIMEGINAED = 509; //
    kFLAGS.GHOST_GIRL_SLIME_X_SHOULDRA_COUNTER = 510; //
    kFLAGS.GENDERLESS_MASTURBATION_WITH_GHOST_COUNT = 511; //
    kFLAGS.SHOULDRA_TONGUE_LICKS_TIMES = 512; //
    kFLAGS.SHOULDRA_FOLLOWER_STATE = 513; //
    kFLAGS.SHOULDRA_PLOT_LEVEL = 514; //
    kFLAGS.SHOULDRA_TALK_NEEDED = 515; //
    kFLAGS.SHOULDRA_PLOT_COUNTDOWN = 516; //
    kFLAGS.SHOULDRA_SLEEP_TIMER = 517; //
    kFLAGS.SHOULDRA_MAGIC_COOLDOWN = 518; //
    kFLAGS.SHOULDRA_TIMES_NIGHT_RAPED_PC = 519; //
    kFLAGS.SHOULDRA_EXGARTUDRAMA = 520; //
    kFLAGS.SHOULDRA_BAKERY_TIMES = 521; //
    kFLAGS.PUMPKIN_FUCK_YEAR_DONE = 522; //
    kFLAGS.EMBER_AFFECTION = 523; // : Pretty obvious
    kFLAGS.EMBER_HATCHED = 524; // : is ember hatched? 1 = true
    kFLAGS.EMBER_GENDER = 525; //  1 for male, 2 for female, 3 for herm. This also controls the egg's shell color.
    kFLAGS.EMBER_TYPE = 526; // numerical value: Ember is supposed to have many forms, this will control which one is born. (This is important for when Ember has hybrid forms.)
    kFLAGS.EMBER_COR = 527; // dragon-girl Ember uses this. (Default starting value = 50)
    kFLAGS.EMBER_HAIR = 528; // 0 for no hair, 1 for hair, 2 for mane.
    kFLAGS.EMBER_MILK = 529; // 0 for no lactation, 1 for lactating.
    kFLAGS.EMBER_OVIPOSITION = 530; // 0 for no egg laying, 1 for egg laying.
    kFLAGS.EMBER_ROUNDFACE = 531; // 0 for anthro Ember, 1 for dragon-girl Ember. (You might want to control this with the Type flag since only default Embers use this variable.)
    kFLAGS.EMBER_EGG_FLUID_COUNT = 532; // This controls when it's time to hatch. Every item use and every time you use the egg as a masturbation aid, this will be incremented. Threshold for birthing is 5, but the birthing process can only be triggered when using as a masturbatory aid. This is done to allow players the chance to modify Ember before actually hatching.
    kFLAGS.EMBER_STAT = 533; // All Embers have a hidden stat, Corrupt has Ego, Pure has Confidence, Tainted has Affection, and hybrids vary. There is a need to track this, but only 1 special stat for every Ember.
    kFLAGS.EMBER_INTERNAL_DICK = 534; // Dragon-girl Ember can have either a internal sheath to keep " + emberMF("his","her") + " dick in or have it be more human-like. 0 = internal, 1 = external.
    kFLAGS.TIMES_EQUIPPED_EMBER_SHIELD = 535; //
    kFLAGS.TOOK_EMBER_EGG = 536; // PC Take ember's egg home?
    kFLAGS.EGG_BROKEN = 537; // PC Smash!? ember's egg?
    kFLAGS.TIMES_FOUND_EMBERS_EGG = 538; // Times stumbled into ze egg.
    kFLAGS.EMBER_JACKED_ON = 539; // Has the PC masturbated on the egg yet?  Needed to hatcH!
    kFLAGS.EMBER_OVI_BITCHED_YET = 540; // Used to trigger emberBitchesAboutPCBeingFullOfEggs()
    kFLAGS.EMBER_LUST_BITCHING_COUNTER = 541; //
    kFLAGS.EMBER_CURRENTLY_FREAKING_ABOUT_MINOCUM = 542; //  Used to trigger minotaurJizzFreakout()
    kFLAGS.DRANK_EMBER_BLOOD_TODAY = 543; // Cooldown for ember TFs
    kFLAGS.EMBER_PUSSY_FUCK_COUNT = 544; //
    kFLAGS.TIMES_BUTTFUCKED_EMBER = 545; //
    kFLAGS.VAPULA_HAREM_FUCK = 546; //
    kFLAGS.VAPULA_THREESOMES = 547; //
    kFLAGS.OWCA_SACRIFICE_DISABLED = 548; //
    kFLAGS.VAPULA_FOLLOWER = 549; //
    kFLAGS.JOJO_MOVE_IN_DISABLED = 550; //
    kFLAGS.VAPULA_DAYS_SINCE_FED = 551; //
    kFLAGS.VAPULA_TEASE_COUNT = 552; //
    kFLAGS.EMBER_INCUBATION = 553; //
    kFLAGS.EMBER_CHILDREN_MALES = 554; //
    kFLAGS.EMBER_CHILDREN_FEMALES = 555; //
    kFLAGS.EMBER_CHILDREN_HERMS = 556; //
    kFLAGS.EMBER_EGGS = 557; //
    kFLAGS.EMBER_BITCHES_ABOUT_PREGNANT_PC = 558; //
    kFLAGS.EMBER_TALKS_TO_PC_ABOUT_PC_MOTHERING_DRAGONS = 559; //
    kFLAGS.EMBER_PREGNANT_TALK = 560; //
    kFLAGS.TIMES_MET_CHAMELEON = 561; //
    kFLAGS.TIMES_IN_BENOITS = 562; //
    kFLAGS.BENOIT_AFFECTION = 563; //
    kFLAGS.BENOIT_EXPLAINED_SHOP = 564; //
    kFLAGS.BENOIT_SUGGEST_UNLOCKED = 565; //
    kFLAGS.TURKEY_FUCK_YEAR_DONE = 566; //
    kFLAGS.BENOIT_1 = 567; //
    kFLAGS.BENOIT_2 = 568; //
    kFLAGS.BENOIT_3 = 569; //
    kFLAGS.BENOIT_TALKED_TODAY = 570; //
    kFLAGS.BENOIT_TALKED_TO_PROPERLY = 571; //
    kFLAGS.BENOIT_EGGS = 572; //
    kFLAGS.BENOIT_TIMES_SEXED_FEMPCS = 573; //
    kFLAGS.BENOIT_BIRTH_DELAY = 574; //
    kFLAGS.BENOIT_WOMB_TALK_UNLOCKED = 575; //
    kFLAGS.BENOIT_POST_FIRSTFUCK_TALK = 576; //
    kFLAGS.BENOIT_TESTED_BASILISK_WOMB = 577; //
    kFLAGS.TIMES_ENCOUNTERED_SAND_TRAPS = 578; //
    kFLAGS.SANDTRAP_NAGA_3SOME = 579; //
    kFLAGS.TAMANI_TIME_OUT = 580; //
    kFLAGS.TIMES_OVIPOSITED_TAMANI = 581; //
    kFLAGS.URTA_EGGS = 582; //
    kFLAGS.URTA_FERTILE_EGGS = 583; //
    kFLAGS.URTA_EGG_FORCE_EVENT = 584; //
    kFLAGS.URTA_TIMES_EGG_PREGGED = 585; //
    kFLAGS.URTA_PREGNANCY_TYPE = 586; //Previously URTA_EGG_INCUBATION
    kFLAGS.URTA_FLATBELLY_NOTICE = 587; //
    kFLAGS.EGG_WITCH_COUNTER = 588; //
    kFLAGS.EGG_WITCH_TYPE = 589; //
    kFLAGS.TIMES_EGGED_JOJO = 590; //
    kFLAGS.JOJO_EGGCUBATE_COUNT = 591; //
    kFLAGS.DICK_EGG_INCUBATION = 592; //
    kFLAGS.TIMES_EGGED_IN_COCK = 593; //
    kFLAGS.TIMES_FUCKED_FLOWER = 594; //
    kFLAGS.TIMES_RIDDEN_FLOWER = 595; //
    kFLAGS.FUCK_FLOWER_LEVEL = 596; //
    kFLAGS.FUCK_FLOWER_GROWTH_COUNTER = 597; //
    kFLAGS.FUCK_FLOWER_KILLED = 598; //
    kFLAGS.AMILY_TREE_FLIPOUT = 599; //
    kFLAGS.HOLLI_FRUIT = 600; //
    kFLAGS.HOLLI_FRUIT_EXPLAINED = 601; //
    kFLAGS.HOLLI_DEFENSE_ON = 602; //
    kFLAGS.SATYR_KIDS = 603; //
    kFLAGS.RUBI_AFFECTION = 604; //
    kFLAGS.RUBI_DISABLED = 605; //
    kFLAGS.RUBI_ADMITTED_GENDER = 606; //
    kFLAGS.RUBI_INTRODUCED = 607; //
    kFLAGS.RUBI_BLU_BALLS = 608; //
    kFLAGS.RUBI_ORGASM_DENIAL = 609; //
    kFLAGS.RUBI_BIMBO = 610; //
    kFLAGS.RUBI_INCUBUS_PROGRESS = 611; //
    kFLAGS.RUBI_SUITCLOTHES = 612; //
    kFLAGS.RUBI_FETISH_CLOTHES = 613; //
    kFLAGS.RUBI_GREEN_ADVENTURER = 614; //
    kFLAGS.RUBI_TUBE_TOP = 615; //
    kFLAGS.RUBI_BODYSUIT = 616; //
    kFLAGS.RUBI_LONGDRESS = 617; //
    kFLAGS.RUBI_TIGHT_PANTS = 618; //
    kFLAGS.RUBI_NURSE_CLOTHES = 619; //
    kFLAGS.RUBI_SWIMWEAR = 620; //
    kFLAGS.RUBI_PROSTITUTION = 621; // -1 dont see others, -2 = broke up, 1 = NTR okay, 2 = prostitute
    kFLAGS.RUBIS_HOUSE_FIRST_TIME = 622; //
    kFLAGS.RUBI_GOT_BIMBO_SKIRT = 623; //
    kFLAGS.RUBI_PROFIT = 624; //
    kFLAGS.RUBI_BIMBO_MINIDRESS = 625; //
    kFLAGS.MANSION_VISITED = 626; //
    kFLAGS.redheadIsFuta = 627; //
    kFLAGS.MET_KITSUNES = 628; //
    kFLAGS.AMILY_OVIPOSITED_COUNT = 629; //
    kFLAGS.AMILY_OVIPOSITED_COUNTDOWN = 630; //
    kFLAGS.AMILY_OVIPOSITION_UNLOCKED = 631; //
    kFLAGS.BENOIT_GENERIC_EGGS = 632; //
    kFLAGS.URTA_SCYLLA_BIG_DICK_TIMES_DONE = 633; //
    kFLAGS.VAPULA_EARNED_A_SPANK = 634; //
    kFLAGS.AMILY_TIMES_SWIMFUCKED = 635; //
    kFLAGS.AMILY_OWNS_BIKINI = 636; //
    kFLAGS.CANDY_CANE_YEAR_MET = 637; //
    kFLAGS.GATS_ANGEL_GOOD_ENDED = 638; //
    kFLAGS.GATS_ANGEL_DISABLED = 639; //
    kFLAGS.GATS_ANGEL_QUEST_BEGAN = 640; //
    kFLAGS.GATS_ANGEL_TIME_TO_FIND_KEY = 641; //
    kFLAGS.XMAS_CHICKEN_YEAR = 642; //
    kFLAGS.KAMI_ENCOUNTER = 643; //
    kFLAGS.POLAR_PETE_YEAR_MET = 644; //
    kFLAGS.JACK_FROST_YEAR = 645; //
    kFLAGS.JACK_FROST_PROGRESS = 646; //
    kFLAGS.NIEVE_STAGE = 647; //
    kFLAGS.NIEVE_GENDER = 648; //
    kFLAGS.NIEVE_MOUTH = 649; //
    kFLAGS.TIMES_LOST_HECKEL_DOM_CHALLENGE = 650; //
    kFLAGS.TIMES_DOMMED_HECKEL = 651; //
    kFLAGS.TIMES_MET_CHICKEN_HARPY = 652; //
    kFLAGS.EGGS_BOUGHT = 653; //
    kFLAGS.GOO_TFED_MEAN = 654; //
    kFLAGS.GOO_TFED_NICE = 655; //
    kFLAGS.GOO_NAME = 656; //
    kFLAGS.GOO_SLAVE_RECRUITED = 657; //
    kFLAGS.GOO_EYES = 658; //
    kFLAGS.GOO_TOSSED_AFTER_NAMING = 659; //
    kFLAGS.TIMES_FUCKED_NORMAL_GOOS = 660; //
    kFLAGS.PC_KNOWS_ABOUT_BLACK_EGGS = 661; //
    kFLAGS.GOO_HAPPINESS = 662; //
    kFLAGS.GOO_OBEDIENCE = 663; //
    kFLAGS.GOO_FLUID_AMOUNT = 664; //
    kFLAGS.GOO_PREFERRED_TIT_SIZE = 665; //
    kFLAGS.GOO_NIPPLE_TYPE = 666; //
    kFLAGS.GOO_DICK_LENGTH = 667; //
    kFLAGS.GOO_DICK_TYPE = 668; //
    kFLAGS.TIMES_THOUGHT_ABOUT_GOO_RECRUITMENT = 669; //
    kFLAGS.GOO_INDIRECT_FED = 670; //
    kFLAGS.TIMES_FED_LATEXY_MINO_CUM = 671; //
    kFLAGS.LATEX_GOO_TIMES_FEMDOMMED_BY_PC = 672; //
    kFLAGS.COTTON_PREGNANCY_INCUBATION = 673; //
    kFLAGS.COTTON_PREGNANCY_TYPE = 674; //
    kFLAGS.COTTON_KID_COUNT = 675; //
    kFLAGS.COTTON_OLDEST_KID_AGE = 676; //
    kFLAGS.PC_IS_A_DEADBEAT_COTTON_DAD = 677; //
    kFLAGS.PC_IS_A_GOOD_COTTON_DAD = 678; //
    kFLAGS.COTTON_HERBS_OFF = 679; //
    kFLAGS.COTTON_CONTRACEPTION_TALK = 680; //
    kFLAGS.COTTON_KNOCKED_UP_PC_AND_TALK_HAPPENED = 681; //
    kFLAGS.HOLLI_SUBMISSIVE = 682; //
    kFLAGS.TIMES_ORPHANAGED_WITH_RAPHAEL = 683; //
    kFLAGS.LOPPE_FURRY = 684; //
    kFLAGS.LOPPE_FERTILE = 685; //
    kFLAGS.LOPPE_KIDS = 686; //
    kFLAGS.LOPPE_TRAINING = 687; //
    kFLAGS.LOPPE_KIDS_LIMIT = 688; //
    kFLAGS.LOPPE_URTA_CHATS = 689; //
    kFLAGS.LOPPE_PC_MET_UMA = 690; //
    kFLAGS.LOPPE_TIMES_SEXED = 691; //
    kFLAGS.LOPPE_DENIAL_COUNTER = 692; //
    kFLAGS.LOPPE_DISABLED = 693; //
    kFLAGS.TIMES_ASKED_LOPPE_ABOUT_LOPPE = 694; //
    kFLAGS.LOPPE_MET = 695; //
    kFLAGS.HELIA_FOLLOWER_DISABLED = 696; //
    kFLAGS.HEL_INTROS_LEVEL = 697; //
    kFLAGS.MINO_SONS_HAVE_SOPHIE = 698; //
    kFLAGS.KEEP_HELIA_AND_SOPHIE = 699; //
    kFLAGS.FOLLOWER_HEL_TALKS = 700; //  FOLLOWER_HEL_TALKS
    kFLAGS.SLEEP_WITH = 701; //  related to who you sleep with in camp
    kFLAGS.COTTON_OLDEST_KID_GENDER = 702; //
    kFLAGS.HEL_CAN_SWIM = 703; //
    kFLAGS.HEL_GUARDING = 704; //
    kFLAGS.PC_PROMISED_HEL_MONOGAMY_FUCKS = 705; //
    kFLAGS.HEL_RAPED_TODAY = 706; //
    kFLAGS.FOUND_ISABELLA_AT_FARM_TODAY = 707; //
    kFLAGS.KITSUNE_SHRINE_VISIT = 708; //
    kFLAGS.TOOK_KITSUNE_STATUE = 709; //
    kFLAGS.URTA_MET_HEL = 710; //
    kFLAGS.URTA_QUEST_STATUS = 711; //
    kFLAGS.URTA_FUCKED_HEL = 712; //
    kFLAGS.SUCCUBI_MILKED_GNOLL_PRINCESS = 713; //
    kFLAGS.URTA_TAKEN_BY_GNOLLS = 714; //
    kFLAGS.URTA_BECOMES_SNAKE_SLAVE = 715; //
    kFLAGS.URTA_GOBLIN_SLAVE = 716; //
    kFLAGS.URTA_TENTACLE_RAPED = 717; //
    kFLAGS.URTA_TENTACLE_GAPED = 718; //
    kFLAGS.URTA_IS_VULQUINE_MENACE = 719; //
    kFLAGS.URTA_RAPED_MINO_LORD = 720; //
    kFLAGS.URTA_MINO_AND_SUCCUBI_SLAVE = 721; //
    kFLAGS.EDRYN_PREGNANCY_TYPE = 722; //In previous versions was EDRYN_BIRF_COUNTDOWN - Corrected in Saves.unFuckSave()
    kFLAGS.URTA_FERTILE = 723; //
    kFLAGS.URTA_PREG_EVERYBODY = 724; //
    kFLAGS.KELT_BREAK_LEVEL = 725; //
    kFLAGS.KELLY_CUNT_TYPE = 726; //
    kFLAGS.NEVER_RESIST_KELT = 727; //
    kFLAGS.WHITNEY_FLIPPED_OUT_OVER_KELLY = 728; //
    kFLAGS.TIMES_PUNISHED_KELLY = 729; //
    kFLAGS.TIMES_RIM_JOBBED_BY_KELLY = 730; //
    kFLAGS.TIMES_RIDDEN_KELLY_FOR_PUNISHMENT = 731; //
    kFLAGS.KELLY_BONUS_TIT_ROWS = 732; //
    kFLAGS.KELLY_LACTATING = 733; //
    kFLAGS.KELLY_DISOBEYING_COUNTER = 734; //
    kFLAGS.KELLY_VAGINALLY_FUCKED_COUNT = 735; //
    kFLAGS.VALENTINES_EVENT_YEAR = 736; //
    kFLAGS.SOPHIE_HEAT_COUNTER = 737; //
    kFLAGS.SOPHIE_INCUBATION = 738; //
    kFLAGS.SOPHIE_BROACHED_SLEEP_WITH = 739; //
    kFLAGS.SOPHIE_ADULT_KID_COUNT = 740; //
    kFLAGS.SOPHIE_DAUGHTER_MATURITY_COUNTER = 741; //
    kFLAGS.SOPHIE_CAMP_EGG_COUNTDOWN = 742; //
    kFLAGS.SOPHIE_FAMILY_INCEST = 743; //
    kFLAGS.RATHAZUL_DEBIMBO_OFFERED = 744; //
    kFLAGS.SOPHIE_DEBIMBOED = 745; //
    kFLAGS.SOPHIES_DAUGHTERS_DEBIMBOED = 746; //
    kFLAGS.SOPHIE_RECRUITED_PURE = 747; //
    kFLAGS.SOPHIE_FOLLOWER_IRRITATION = 748; //
    kFLAGS.TIMES_MORNING_SOPHIE_FEMDOMMED = 749; //
    kFLAGS.DAUGHTER_ONE_BIMBO = 750; //
    kFLAGS.DAUGHTER_TWO_BIMBO = 751; //
    kFLAGS.DAUGHTER_THREE_BIMBO = 752; //
    kFLAGS.DAUGHTER_FOUR_BIMBO = 753; //
    kFLAGS.NO_PURE_SOPHIE_RECRUITMENT = 754; //
    kFLAGS.SOPHIE_FOLLOWER_PROGRESS = 755; //
    kFLAGS.KID_A_XP = 756; //
    kFLAGS.KID_SITTER = 757; // 0 = no sitter, 1 = possible, 2 = doing dat shit
    kFLAGS.HAD_KID_A_DREAM = 758; //
    kFLAGS.CUSTOM_PC_ENABLED = 759; //No longer in use
    kFLAGS.SHEILA_CORRUPTION = 760; //
    kFLAGS.SHEILA_XP = 761; //
    kFLAGS.SHEILA_PREGNANCY_INCUBATION = 762; //Previously SHEILA_PREG
    kFLAGS.SHEILA_JOEYS = 763; //
    kFLAGS.SHEILA_DEMON = 764; //
    kFLAGS.SHEILA_CITE = 765; //
    kFLAGS.SHOULDRA_MET_VALA = 766; //
    kFLAGS.TIMES_VALA_CONSENSUAL_BIG = 767; //
    kFLAGS.TIMES_VAPULA_AND_GIANT_VALA = 768; //
    kFLAGS.BIKINI_ARMOR_BONUS = 769; //
    kFLAGS.OWN_MAIDEN_BIKINI = 770; //
    kFLAGS.AMILY_X_IZMA_POTION_3SOME = 771; //
    kFLAGS.MET_ESSY = 772; //
    kFLAGS.TURNED_DOWN_ESSY_FIRST_MEETING = 773; //
    kFLAGS.ACCEPTED_ESSY_FIRST_MEETING = 774; //
    kFLAGS.GIVEN_AMILY_NURSE_OUTFIT = 775; //
    kFLAGS.TIMES_EATEN_EDRYN_PUSSY_RUT = 776; //
    kFLAGS.MET_OTTERGIRL = 777; //
    kFLAGS.TIMES_SOLO_FED_NUN = 778; //
    kFLAGS.FED_SCYLLA_TODAY = 779; //
    kFLAGS.TIMES_SOPHIE_AND_IZMA_FUCKED = 780; //
    kFLAGS.TOLD_SOPHIE_TO_IZMA = 781; //
    kFLAGS.URTA_CUM_NO_CUM_DAYS = 782; //
    kFLAGS.URTA_X_RAPHAEL_HAPPENED = 783; //
    kFLAGS.IZMA_X_LATEXY_DISABLED = 784; //
    kFLAGS.TIMES_IZMA_DOMMED_LATEXY = 785; //
    kFLAGS.TIMES_HELIA_DOUBLE_DONGED = 786; //
    kFLAGS.EVER_INFESTED = 787; //
    kFLAGS.CAME_WORMS_AFTER_COMBAT = 788; //
    kFLAGS.URTA_INCUBATION = 789; //
    kFLAGS.URTA_TIMES_BIRTHED = 790; //
    kFLAGS.URTA_TIMES_PC_BIRTHED = 791; //
    kFLAGS.URTA_KIDS_MALES = 792; //
    kFLAGS.URTA_KIDS_FEMALES = 793; //
    kFLAGS.URTA_KIDS_HERMS = 794; //
    kFLAGS.URTA_FIRSTBORN_GENDER = 795; //
    kFLAGS.URTA_FIRSTBORN_COCKTYPE = 796; //
    kFLAGS.URTA_LATESTBORN_GENDER = 797; //
    kFLAGS.URTA_LATESTBORN_COCKTYPE = 798; //
    kFLAGS.NEED_URTA_LETTER = 799; //
    kFLAGS.EVENT_PARSER_ESCAPE = 800; //
    kFLAGS.URTA_INCUBATION_CELEBRATION = 801; //
    kFLAGS.URTA_PREGNANT_DELIVERY_SCENE = 802; //
    kFLAGS.TIMES_MASSAGED_URTA_BELLY = 803; //
    kFLAGS.TIMES_URTA_BOOB_WORSHIPPED = 804; //
    kFLAGS.TIMES_NURSED_FROM_URTA = 805; //
    kFLAGS.URTA_LUNCH_PLAY = 806; //
    kFLAGS.LIANNA_HAVESTED_MALES = 807; //
    kFLAGS.LIANNA_HAVESTED_LADIES = 808; //
    kFLAGS.FIRST_TIME_AT_URTA_HOUSE = 809; //
    kFLAGS.NEW_BABY_ANNOUNCED = 810; //
    kFLAGS.DISCUSSED_LUBE_SPRAY = 811; //
    kFLAGS.SANDTRAP_LOSS_REPEATS = 812; //
    kFLAGS.MINERVA_LOVE = 813; //
    kFLAGS.MINERVA_BACKSTORY = 814; //
    kFLAGS.MINERVA_BACKSTORY_LEARNED = 815; //
    kFLAGS.TIMES_MINERVA_SEXED = 816; //
    kFLAGS.TIMES_BUTTFUCKED_MINERVA = 817; //
    kFLAGS.TIMES_MINERVA_COWGIRLED = 818; //
    kFLAGS.TIMES_MINERVA_LAPSEXED = 819; //
    kFLAGS.MINERVA_LEZZES_OUT = 820; //
    kFLAGS.MET_MINERVA = 821; //
    kFLAGS.MET_OLIVIA = 822; //
    kFLAGS.LAST_EASTER_YEAR = 823; //
    kFLAGS.TIMES_EMBER_LUSTY_FUCKED = 824; //
    kFLAGS.GAR_NAME = 825; //
    kFLAGS.GAR_CONFIDENCE = 826; //
    kFLAGS.RITUAL_INTRO = 827; //
    kFLAGS.KINKY_RITUALS_SPOKEN = 828; //
    kFLAGS.GAR_HISTORY = 829; //
    kFLAGS.GAR_CATHEDRAL = 830; //
    kFLAGS.GAR_NAME_TALKS = 831; //
    kFLAGS.TIMES_RUBI_MASSAGED = 832; //
    kFLAGS.SANURA_DISABLED = 833; //
    kFLAGS.MET_SANURA = 834; //
    kFLAGS.BEATEN_SANURA_COUNT = 835; //
    kFLAGS.SANDWITCH_MOB_DEFEATED = 836; //
    kFLAGS.SANDWITCH_THRONE_UNLOCKED = 837; //
    kFLAGS.SAND_WITCHES_FRIENDLY = 838; //
    kFLAGS.CUM_WITCH_DEFEATED = 839; //
    kFLAGS.ENTERED_SANDWITCH_DUNGEON = 840; //
    kFLAGS.PAWJOBS = 841; //
    kFLAGS.RIDDLE_ONE = 842; //
    kFLAGS.RIDDLE_TWO = 843; //
    kFLAGS.RIDDLE_THREE = 844; //
    kFLAGS.TIMES_SUBMITTED_TO_SANURA = 845; //
    kFLAGS.TIMES_WINFUCKED_SANURA = 846; //
    kFLAGS.SAND_MOTHER_DEFEATED = 847; //
    kFLAGS.TIMES_TENTACLED_SAND_MOTHER = 848; //
    kFLAGS.SAND_WITCHES_COWED = 849; //
    kFLAGS.SAND_WITCH_LOOT_TAKEN = 850; //
    kFLAGS.TIMES_FRIENDLY_FUCKED_SAND_MOTHER = 851; //
    kFLAGS.MORE_CUM_WITCHES = 852; //
    kFLAGS.CUM_WITCHES_FIGHTABLE = 853; //
    kFLAGS.SAND_WITCH_LEAVE_ME_ALONE = 854; //
    kFLAGS.BEEN_BLESSED_BY_CUM_WITCH = 855; //
    kFLAGS.DISCOVERED_WITCH_DUNGEON = 856; //
    kFLAGS.URTA_PETPLAY_DONE = 857; //
    kFLAGS.SHEILA_CLOCK = 858; //
    kFLAGS.SHEILA_IMPS = 859; //
    kFLAGS.TIMES_VISITED_MALI = 860; //
    kFLAGS.TIMES_BEEN_TO_LIBRARY = 861; //
    kFLAGS.MALI_TAKEN_BLADE = 862; //
    kFLAGS.ESSRAYLE_ESCAPED_DUNGEON = 863; //
    kFLAGS.TOLD_MOTHER_TO_RELEASE_ESSY = 864; //
    kFLAGS.ESSY_DUNGEON_FUCKED = 865; //
    kFLAGS.ESSY_MET_IN_DUNGEON = 866; //
    kFLAGS.DOUBLE_ATTACK_STYLE = 867; // DOUBLE_ATTACK_STYLE" Description="0 = always, 1 = dynamic, 2 = single
    kFLAGS.SPELLS_CAST = 868; //
    kFLAGS.MILK_NAME = 869; //
    kFLAGS.MILK_SIZE = 870; //
    kFLAGS.MET_MILK_SLAVE = 871; //
    kFLAGS.COUNTDOWN_TO_NIGHT_RAPE = 872; //
    kFLAGS.PHYLLA_CAPACITY = 873; //
    kFLAGS.ANT_KIDS = 874; //
    kFLAGS.ANT_WAIFU = 875; //
    kFLAGS.PHYLLA_STAY_HOME = 876; //
    kFLAGS.PHYLLA_CAMP_VISITS = 877; //
    kFLAGS.DAYS_PHYLLA_IN_CAMP = 878; //
    kFLAGS.PHYLLA_EGG_LAYING = 879; // PHYLLLA_EGG_LAYING
    kFLAGS.PHYLLA_BLOWJOBS = 880; //
    kFLAGS.TALKED_WITH_PHYLLA_ABOUT_HISTORY = 881; //
    kFLAGS.TIMES_LINKED_BJ_SUCK = 882; //
    kFLAGS.PHYLLA_FUCKS = 883; //
    kFLAGS.TIMES_CORRUPT_MALE_ANT_ORGY = 884; //
    kFLAGS.TIMES_CORRUPT_FEMALE_ANT_ORGY = 885; //
    kFLAGS.PHYLLA_TIMES_DRIDER_EGG_LAYED = 886; //
    kFLAGS.DAYS_PHYLLA_HAS_SPENT_BIRTHING = 887; //
    kFLAGS.ANTS_BIRTHED_FROM_LICKING = 888; //
    kFLAGS.PHYLLA_COOLDOWN = 889; //
    kFLAGS.TIMES_EGG_IMPREGNATING_PHYLLA = 890; //
    kFLAGS.PHYLLA_DRIDER_INCUBATION = 891; //
    kFLAGS.HAS_SEEN_MINO_AND_COWGIRL = 892; //
    kFLAGS.PHYLLA_GEMS_HUNTED_TODAY = 893; //
    kFLAGS.PHYLLA_DRIDER_BABIES_COUNT = 894; //
    kFLAGS.SOCK_COUNTER = 895; //
    kFLAGS.SOCK_HOLDING = 896; //
    kFLAGS.FOUND_SOCKS = 897; //
    kFLAGS.SOCKS_BOUGHT = 898; //
    kFLAGS.GILDED_JERKED = 899; //
    kFLAGS.PHYLLA_INHERITED_KNOWLEDGE = 900; //
    kFLAGS.PHYLLA_IZMA_TALK = 901; //
    kFLAGS.AKBAL_TIMES_BITCHED = 902; //
    kFLAGS.AKBAL_BITCH_Q = 903; //
    kFLAGS.KELLY_BONUS_BOOB_ROWS = 904; //
    kFLAGS.KELLY_INCUBATION = 905; //
    kFLAGS.KELLY_TIMES_PEPPERED = 906; //
    kFLAGS.KELLY_HEAT_TIME = 907; //
    kFLAGS.KELLY_KIDS = 908; //
    kFLAGS.KELLY_FIRST_KID_GENDER = 909; //
    kFLAGS.KAIJU_MEETINGS = 910; //
    kFLAGS.KAIJU_DISABLED = 911; //
    kFLAGS.KAIJU_TALK_CYCLE = 912; //
    kFLAGS.KAIJU_COCK = 913; //
    kFLAGS.KAIJU_BAD_END_COUNTER = 914; //
    kFLAGS.BROOKE_AFFECTION = 915; //
    kFLAGS.BROOKE_SHOWERED_WITH = 916; //
    kFLAGS.BROOKE_AND_HELIA_3SOME = 917; //
    kFLAGS.TIMES_IN_BROOKES_BUTT = 918; //
    kFLAGS.BROOKE_MEDIUM_SCENE = 919; // BROOKE_MEDIUM_SCENE" Description="Brooke fucked ya.
    kFLAGS.BROOKE_MET = 920; //
    kFLAGS.BROOKE_MET_TODAY = 921; //
    kFLAGS.BROOKE_GRUMPS_ABOUT_TA = 922; //
    kFLAGS.FOUGHT_HOLLI = 923; //
    kFLAGS.THREATENED_HOLLI = 924; //
    kFLAGS.DIDNT_FUCK_PHYLLA_ON_RECRUITMENT = 925; //
    kFLAGS.HELIA_ANAL_TRAINING_OFFERED = 926; //
    kFLAGS.HELIA_ANAL_TRAINING = 927; //
    kFLAGS.HELIA_BIRTHDAY_OFFERED = 928; //
    kFLAGS.HELIA_BDAY_DRINKS = 929; //
    kFLAGS.HELIA_BDAY_HAKON_AND_KIRI = 930; //
    kFLAGS.HELIA_BDAY_PHOENIXES = 931; //
    kFLAGS.HELIA_BDAY_FOX_TWINS = 932; //
    kFLAGS.ARIAN_FOLLOWER = 933; //
    kFLAGS.ARIAN_PARK = 934; // -1 = disabled, 1 = helped.
    kFLAGS.ARIAN_HEALTH = 935; // Higher is better.
    kFLAGS.ARIAN_ANAL_XP = 936; //
    kFLAGS.ARIAN_CAPACITY = 937; //
    kFLAGS.ARIAN_COCK_SIZE = 938; //
    kFLAGS.ARIAN_DOUBLE_COCK = 939; //
    kFLAGS.ARIAN_VAGINA = 940; //
    kFLAGS.ARIAN_BREASTS = 941; //
    kFLAGS.ARIAN_VIRGIN = 942; //
    kFLAGS.ARIAN_S_DIALOGUE = 943; //
    kFLAGS.ARIAN_HERM_CHAT = 944; //
    kFLAGS.ARIAN_ASS_CHAT = 945; //
    kFLAGS.ARIAN_LESSONS = 946; //
    kFLAGS.ARIAN_DOUBLE_PENETRATION_CHAT = 947; //
    kFLAGS.ARIAN_FIRST_REPTILUM = 948; //
    kFLAGS.ARIAN_TREATMENT = 949; //
    kFLAGS.ARIAN_HAS_BLOWN = 950; //
    kFLAGS.ARIAN_MORNING = 951; //
    kFLAGS.ARIAN_EGG_CHAT = 952; //
    kFLAGS.ARIAN_EGG_EVENT = 953; //
    kFLAGS.ARIAN_EGG_COLOR = 954; //
    kFLAGS.ARIAN_EGG_COUNTER = 955; //
    kFLAGS.HELSPAWN_NAME = 956; //
    kFLAGS.HELSPAWN_PERSONALITY = 957; //
    kFLAGS.HELSPAWN_DADDY = 958; //
    kFLAGS.HELSPAWN_WEAPON = 959; //
    kFLAGS.HELSPAWN_AGE = 960; //
    kFLAGS.HELSPAWN_GROWUP_COUNTER = 961; //
    kFLAGS.HEL_LOVE = 962; //
    kFLAGS.HELIA_KIDS_CHAT = 963; //
    kFLAGS.HELIA_TALK_SEVEN = 964; //
    kFLAGS.HEL_NTR_TRACKER = 965; //
    kFLAGS.HEL_BONUS_POINTS = 966; //
    kFLAGS.HEL_PREGNANCY_INCUBATION = 967; //
    kFLAGS.HELIA_PREGNANCY_TYPE = 968; //Previously HEL_PREGNANCY_NOTICES
    kFLAGS.HAD_FIRST_HELSPAWN_TALK = 969; //
    kFLAGS.HELSPAWN_INCEST = 970; //
    kFLAGS.HEL_TALK_EIGHT = 971; //
    kFLAGS.HELSPAWN_DISCOVER_BOOZE = 972; //
    kFLAGS.HELSPAWN_FUCK_INTERRUPTUS = 973; //
    kFLAGS.SPIDER_BRO_GIFT = 974; //
    kFLAGS.HAKON_AND_KIRI_VISIT = 975; //
    kFLAGS.KELLY_HAIR_COLOR = 976; //
    kFLAGS.KELLY_TALK_N_HAND_TIMES = 977; //
    kFLAGS.KELLY_TIMES_REWARDED = 978; //
    kFLAGS.KELLY_TIMES_DIED_HAIR = 979; //
    kFLAGS.KELLY_TIMES_APPLESAUCED = 980; //
    kFLAGS.KELLY_REWARD_COOLDOWN = 981; //
    kFLAGS.KIHA_CAMP_WATCH = 982; //
    kFLAGS.TIMES_ARIAN_DILDOED = 983; //
    kFLAGS.RUBI_BREAST_SIZE = 984; //
    kFLAGS.RUBI_COCK_SIZE = 985; //
    kFLAGS.RUBI_COCK_TYPE = 986; //
    kFLAGS.RUBI_LOWERBODY = 987; //
    kFLAGS.RUBI_HORNTYPE = 988; //
    kFLAGS.RUBI_NIPPLETYPE = 989; //
    kFLAGS.RUBI_NO_CUNT = 990; //
    kFLAGS.RUBI_CUNTTYPE = 991; //
    kFLAGS.RUBI_EYE_DESCRIPT = 992; //
    kFLAGS.RUBI_EYE_TYPE = 993; //
    kFLAGS.RUBI_SKIN = 994; //
    kFLAGS.RUBI_HAIR = 995; //
    kFLAGS.RUBI_HAIR_LENGTH = 996; //
    kFLAGS.RUBI_BALLS_TYPE = 997; //
    kFLAGS.RUBI_EAR_TYPE = 998; //
    kFLAGS.RUBI_HANDS = 999; //
    kFLAGS.RUBI_WHISKERS = 1000; //
    kFLAGS.RUBI_FEET = 1001; //
    kFLAGS.RUBI_DEBIMBO = 1002; //
    kFLAGS.RUBI_NIPPLE_TYPE = 1003; //
    kFLAGS.RUBI_SHE = 1004; //
    kFLAGS.TIMES_DISCUSSED_RUBIS_IDENTITY = 1005; //
    kFLAGS.RUBI_ICECREAM_CONFESSION = 1006; //
    kFLAGS.TIMES_RUBI_DATED = 1007; //
    kFLAGS.RUBI_FANCY_CONFESSION = 1008; //
    kFLAGS.RUBI_BAR_CONFESSION = 1009; //
    kFLAGS.RUBI_TIMES_ANALLY_TRAINED = 1010; //
    kFLAGS.RUBI_TIMES_GIVEN_AN_ITEM = 1011; //
    kFLAGS.RUBI_BONDAGE_STRAPS = 1012; //
    kFLAGS.RUBI_INQUISITORS_CORSET = 1013; //
    kFLAGS.RUBI_SETUP = 1014; //
    kFLAGS.EXPLORATION_PAGE = 1015; //
    kFLAGS.BOG_EXPLORED = 1016; //
    kFLAGS.TIMES_ENCOUNTERED_FROG = 1017; //
    kFLAGS.FERAS_GLADE_EXPLORED_YEAR = 1018;
    kFLAGS.FERAS_TRAP_SPRUNG_YEAR = 1019;
    kFLAGS.TIMES_VALERIA_GOO_THREESOMED = 1020;
    kFLAGS.MORE_TURKEY = 1021;
    kFLAGS.LYNNETTE_PREGNANCY_CYCLE = 1022; //0-3 = pregnant. 4-6 = not.
    kFLAGS.LYNNETTE_APPROVAL = 1023;
    kFLAGS.LYNNETTE_BABY_COUNT = 1024;
    kFLAGS.LYNNETTE_CARRYING_COUNT = 1025;
    kFLAGS.LYNNETTE_MET_UNPREGNANT = 1026;
    kFLAGS.LYNNETTE_ANNOUNCED_APPROVAL = 1027;
    kFLAGS.LYNNETTE_FUCK_COUNTER = 1028;
    kFLAGS.UMA_TIMES_SEXED = 1029;
    kFLAGS.UMA_TIMES_MASSAGED = 1030;
    kFLAGS.UMA_TIMES_ACUPUNCTURE_UNDO = 1031;
    kFLAGS.UMA_TIMES_SUCKED_YOU = 1032;
    kFLAGS.TIMES_RUT_FUCKED_URTAS_CUNT = 1033;
    kFLAGS.TIMES_KIHA_ANALED = 1034;
    kFLAGS.TIMES_ENCOUNTERED_GOBLIN_ASSASSIN = 1035;
    kFLAGS.IZUMI_MET = 1036; // Player has had the introduction/meeting scene with Izumi
    kFLAGS.IZUMI_LAST_ENCOUNTER = 1037; // Outcome of the last enouncter with Izumi, 0 = Unset, 1 = PC Lost in a fight, 2 = PC ran away, 3 = PC Won in a fight
    kFLAGS.IZUMI_TIMES_SUBMITTED = 1038; // Times the player has voluntarily submitted to Izumi's demands
    kFLAGS.IZUMI_TIMES_GRABBED_THE_HORN = 1039; // Times the player has beaten Izumi in a fight, and touched her horn.
    kFLAGS.IZUMI_TIMES_LOST_FIGHT = 1040; // Times the player has been beaten by Izumi in a fight
    kFLAGS.IZUMI_SEEN_PC_GENDER = 1041; // Indicates if Izumi knows the PCs true gender/equipment (val in the last gender int that izumi knows the player was)
    kFLAGS.CUSTOM_FONT_SIZE = 1042; // Defines the currently set font size for output text elements. (Hacky, need to do something better, but this works for now.)
    kFLAGS.FERRET_BAD_END_WARNING = 1043;
    kFLAGS.TIMES_TALKED_WITH_JOJO = 1044; // Number of times the player has talked with Pure Jojo.
    kFLAGS.TIMES_TRAINED_WITH_JOJO = 1045; // Number of times the player has trained with Jojo
    kFLAGS.UNLOCKED_JOJO_TRAINING = 1046;
    kFLAGS.MET_FROSTY = 1047;
    kFLAGS.SIGNED_FROSTYS_CONTRACT = 1048;
    kFLAGS.FROSTY_POINTS = 1049;
    kFLAGS.SEEN_GENDERLESS_FROSTY_REJECTION = 1050;
    kFLAGS.MARBLE_PURIFIED = 1051;
    kFLAGS.MARBLE_BOYS = 1052;
    kFLAGS.CLARA_IMPRISONED = 1053;
    kFLAGS.CLARA_PURIFIED = 1054;
    kFLAGS.MARBLE_TIME_SINCE_NURSED_IN_HOURS = 1055;
    kFLAGS.MARBLE_BREAST_SIZE = 1056;
    kFLAGS.TIMES_GIVEN_MARBLE_PURE_LABOVA = 1057;
    kFLAGS.MARBLE_RATHAZUL_COUNTER_1 = 1058;
    kFLAGS.MARBLE_PURIFICATION_STAGE = 1059;
    kFLAGS.MURBLE_TEA_DRINKER_COUNT = 1060;
    kFLAGS.MARBLE_RATHAZUL_COUNTER_2 = 1061;
    kFLAGS.MARBLE_WARNED_ABOUT_CORRUPTION = 1062;
    kFLAGS.MARBLE_LEFT_OVER_CORRUPTION = 1063;
    kFLAGS.MARBLE_COUNTUP_TO_PURIFYING = 1064;
    kFLAGS.TIMES_ENCOUNTERED_PRINCESS_GWYNN = 1065; // Times the player has run into Princess Gwyn
    kFLAGS.WILD_HUNT_ENCOUNTERS = 1066; // Total wild hunt encounters
    kFLAGS.ERLKING_DISABLED = 1067; // Wild hunt/Erlking has been disabled
    //export const ERLKING_ENCOUNTER_COUNTER:number                                   = 1068; // used to check "every 5th encounter" which was replaced with random
    kFLAGS.KATHERINE_MET_SCYLLA = 1069;
    kFLAGS.WHITNEY_TALK_MURBLE_AND_KELT = 1070; // Player has done the talk with Whitney requiring they have metl Murble and Kelt
    kFLAGS.WHITNEY_TALK_TELADRE = 1071; // Player talked to Whitney about TelAdre
    kFLAGS.WHITNEY_TALK_HIGH_MOUNTAIN = 1072; // Player talked to Whitney about the High Mountains
    kFLAGS.WHITNEY_TALK_DUNGEON = 1073; // Player talked to Whitney about shutting D1 down
    kFLAGS.WHITNEY_TALK_DUNGEON_FOLLOWUP = 1074; // Player talked to Whitney about D1 #
    kFLAGS.FARM_CORRUPTION_DISABLED = 1075; // Player selected "Never" when presented with an option to corrupt farm
    kFLAGS.FARM_CORRUPT_PROMPT_DISPLAY = 1076; // Tracking the state for prompt display
    kFLAGS.FARM_CORRUPTION_STARTED = 1077; // Player has started the farm corruption process
    kFLAGS.WHITNEY_CORRUPTION = 1078; // Whitneys corruption value
    kFLAGS.FOLLOWER_AT_FARM_AMILY = 1079; // Amily as at the farm
    kFLAGS.FOLLOWER_AT_FARM_JOJO = 1080; // Jojo is at the farm
    kFLAGS.FOLLOWER_AT_FARM_SOPHIE = 1081; // Sophie is at the farm (0 = no, 1 = Sophie, 2 = Bimbo Sophie)
    kFLAGS.FOLLOWER_AT_FARM_IZMA = 1082; // Izma is at the farm (0 = no, 1 = Izma, 2 = Izmael)
    kFLAGS.FOLLOWER_AT_FARM_ISABELLA = 1083; // Isabell is at the farm
    kFLAGS.FOLLOWER_AT_FARM_VAPULA = 1084; // Vapula is at the farm
    kFLAGS.FOLLOWER_AT_FARM_LATEXY = 1085; // Latexy is at the farm
    kFLAGS.FOLLOWER_AT_FARM_CERAPH = 1086; // Ceraph is at the farm
    kFLAGS.FOLLOWER_AT_FARM_HOLLI = 1087; // Holli has corrupted the farm (Yes I know she can't actually move gtfo) (0 = no, anything else = num days affected)
    kFLAGS.FOLLOWER_AT_FARM_KELLY = 1088; // Kelly is at the farm (Don't think this is strictly required, depends if pc can disable Kellys corruption effect)
    kFLAGS.FOLLOWER_AT_FARM_BATH_GIRL = 1089; // Bathslut is at the farm
    kFLAGS.FARM_CORRUPTION_FIRST_DATE = 1090; // Day value that the Farm completed the corruption process
    kFLAGS.FOLLOWER_AT_FARM_MARBLE = 1091;
    kFLAGS.FARM_CORRUPTION_DAYS_SINCE_LAST_PAYOUT = 1092;
    kFLAGS.FARM_CORRUPTION_GEMS_WAITING = 1093;
    kFLAGS.FARM_UPGRADES_REFINERY = 1094;
    kFLAGS.WHITNEY_CORRUPTION_COMPLETE = 1095;
    kFLAGS.FOLLOWER_PRODUCTION_AMILY = 1096;
    kFLAGS.FARM_SUCCUMILK_STORED = 1097;
    kFLAGS.FOLLOWER_PRODUCTION_JOJO = 1098;
    kFLAGS.FARM_INCUDRAFT_STORED = 1099;
    kFLAGS.FOLLOWER_AT_FARM_AMILY_GIBS_MILK = 1100;
    kFLAGS.FOLLOWER_AT_FARM_JOJO_GIBS_DRAFT = 1101;
    kFLAGS.FOLLOWER_PRODUCTION_SOPHIE = 1102;
    kFLAGS.FOLLOWER_PRODUCTION_SOPHIE_COLORCHOICE = 1103;
    kFLAGS.FARM_EGG_STORED = 1104;
    kFLAGS.FARM_EGG_COUNTDOWN = 1105;
    kFLAGS.FOLLOWER_PRODUCTION_VAPULA = 1106;
    kFLAGS.FOLLOWER_AT_FARM_VAPULA_GIBS_MILK = 1107;
    kFLAGS.HOLLI_FUCKED_TODAY = 1108;
    kFLAGS.FARM_UPGRADES_CONTRACEPTIVE = 1109;
    kFLAGS.KELT_TALKED_FARM_MANAGEMENT = 1110;
    kFLAGS.FARM_CONTRACEPTIVE_STORED = 1111;
    kFLAGS.WHITNEY_CORRUPTION_HIGHEST = 1112;
    kFLAGS.WHITNEY_CORRUPTION_0_30_DROP_MESSAGE = 1113;
    kFLAGS.FARM_CORRUPTION_APPROACHED_WHITNEY = 1114;
    kFLAGS.WHITNEY_LEAVE_0_60 = 1115;
    kFLAGS.WHITNEY_MENU_31_60 = 1116;
    kFLAGS.WHITNEY_MENU_61_90 = 1117;
    kFLAGS.WHITNEY_LEAVE_61_90 = 1118;
    kFLAGS.WHITNEY_MENU_91_119 = 1119;
    kFLAGS.WHITNEY_DISABLED_FOR_DAY = 1120;
    kFLAGS.WHITNEY_DEFURRED = 1121;
    kFLAGS.WHITNEY_DOM = 1122;
    kFLAGS.FARM_UPGRADES_MILKTANK = 1123;
    kFLAGS.QUEUE_BREASTMILKER_UPGRADE = 1124;
    kFLAGS.QUEUE_COCKMILKER_UPGRADE = 1125;
    kFLAGS.QUEUE_REFINERY_UPGRADE = 1126;
    kFLAGS.QUEUE_CONTRACEPTIVE_UPGRADE = 1127;
    kFLAGS.QUEUE_MILKTANK_UPGRADE = 1128;
    kFLAGS.WHITNEY_TATTOO_COLLARBONE = 1129;
    kFLAGS.WHITNEY_TATTOO_SHOULDERS = 1130;
    kFLAGS.WHITNEY_TATTOO_LOWERBACK = 1131;
    kFLAGS.WHITNEY_TATTOO_BUTT = 1132;
    kFLAGS.FARM_CORRUPTION_BRANDING_MENU_UNLOCKED = 1133;
    kFLAGS.QUEUE_BRANDING_UPGRADE = 1134;
    kFLAGS.QUEUE_BRANDING_AVAILABLE_TALK = 1135;
    kFLAGS.WHITNEY_ORAL_TRAINING = 1136;
    kFLAGS.AMILY_TATTOO_COLLARBONE = 1137;
    kFLAGS.AMILY_TATTOO_SHOULDERS = 1138;
    kFLAGS.AMILY_TATTOO_LOWERBACK = 1139;
    kFLAGS.AMILY_TATTOO_BUTT = 1140;
    kFLAGS.JOJO_TATTOO_COLLARBONE = 1141;
    kFLAGS.JOJO_TATTOO_SHOULDERS = 1142;
    kFLAGS.JOJO_TATTOO_LOWERBACK = 1143;
    kFLAGS.JOJO_TATTOO_BUTT = 1144;
    kFLAGS.SOPHIE_TATTOO_COLLARBONE = 1145;
    kFLAGS.SOPHIE_TATTOO_SHOULDERS = 1146;
    kFLAGS.SOPHIE_TATTOO_LOWERBACK = 1147;
    kFLAGS.SOPHIE_TATTOO_BUTT = 1148;
    kFLAGS.VAPULA_TATTOO_COLLARBONE = 1149;
    kFLAGS.VAPULA_TATTOO_SHOULDERS = 1150;
    kFLAGS.VAPULA_TATTOO_LOWERBACK = 1151;
    kFLAGS.VAPULA_TATTOO_BUTT = 1152;
    kFLAGS.KELLY_TATTOO_COLLARBONE = 1153;
    kFLAGS.KELLY_TATTOO_SHOULDERS = 1154;
    kFLAGS.KELLY_TATTOO_LOWERBACK = 1155;
    kFLAGS.KELLY_TATTOO_BUTT = 1156;
    kFLAGS.MILKY_TATTOO_COLLARBONE = 1157;
    kFLAGS.MILKY_TATTOO_SHOULDERS = 1158;
    kFLAGS.MILKY_TATTOO_LOWERBACK = 1159;
    kFLAGS.MILKY_TATTOO_BUTT = 1160;
    kFLAGS.WHITNEY_DOM_FIRST_PLEASURE = 1161;
    kFLAGS.FARM_UPGRADES_ORGYROOM = 1162;
    kFLAGS.MASSAGE_HAPPY_ENDINGS = 1163;
    kFLAGS.QUEUE_ORGYROOM_UPGRADE = 1164;
    kFLAGS.FOUND_CATHEDRAL = 1165;
    kFLAGS.PLACES_PAGE = 1166;
    kFLAGS.FUCK_YOU_GOT_MINE_RAPHAEL = 1167;
    kFLAGS.MARBLE_MILKED_BEFORE = 1168;
    kFLAGS.TATTOO_SAVEFIX_APPLIED = 1169;
    kFLAGS.BIRTHS_PHOUKA = 1170; // For the status page, possible future content
    kFLAGS.BIRTHS_FAERIE = 1171; // For the status page, possible future content
    kFLAGS.PHOUKA_ENCOUNTER_STATUS = 1172; // 0 for never encountered, 1 for encountered at least once, other values can be used later if you're doing something for one
    kFLAGS.PHOUKA_LORE = 1173; // 0 when you don't know what they're called, 1 once you learn their name, higher values as you hear more drunken stories.
    kFLAGS.PREGNANCY_CORRUPTION = 1174; // Starts at 2 when you get pregnant. Drops if you drink pure honey, rises if you drink phouka whiskey
    kFLAGS.TREACLE_MINE_YEAR_DONE = 1175; // Same as for the Fera encounter, this is a once a year halloween deal
    kFLAGS.PLAYER_INFECTED_HELLHOUNDS = 1176;
    kFLAGS.PLAYER_INFECTED_MINOTAURS = 1177;
    kFLAGS.PLAYER_INFECTED_IMPS = 1178;
    kFLAGS.FEMOIT_UNLOCKED = 1179; // Unlocked the option to feminise Benoit
    kFLAGS.BIMBO_FEMOIT_UNLOCKED = 1180; // Unlocked the option to bimbofy Benoit
    kFLAGS.BENOIT_STATUS = 1181; // Benoits "mode" -- 0 = Male, 1 = Fem, 2 = Bimbo, 3 = Herm (only in mod)
    kFLAGS.FEMOIT_NEXTDAY_EVENT = 1182; // Proc the event the following day when you visit - stores the minimum day number that the event can proc on.
    kFLAGS.FEMOIT_TALKED_TO = 1183;
    kFLAGS.KATHERINE_RANDOM_RECRUITMENT_DISABLED = 1184;
    kFLAGS.TIMES_FUCKED_FEMOIT = 1185;
    kFLAGS.FEMOIT_EGGS = 1186;
    kFLAGS.FEMOIT_INCUBATION = 1187;
    kFLAGS.FEMOIT_READY_FOR_EGGS = 1188;
    kFLAGS.FEMOIT_FIRST_CLUTCH_MISSED = 1189;
    kFLAGS.FEMOIT_EGGS_LAID = 1190;
    kFLAGS.FEMOIT_HELPED_LAY = 1191;
    kFLAGS.FEMOIT_SPOONED = 1192;
    kFLAGS.FEMOIT_NEXTDAY_EVENT_DONE = 1193;
    kFLAGS.VALA_HEALED_HONEY = 1194;
    kFLAGS.AMILY_PREGNANCY_TYPE = 1195;
    kFLAGS.AMILY_BUTT_PREGNANCY_TYPE = 1196;
    kFLAGS.FEMALE_SPIDERMORPH_PREGNANCY_TYPE = 1197;
    kFLAGS.PHYLLA_VAGINAL_PREGNANCY_TYPE = 1198;
    kFLAGS.TAMANI_PREGNANCY_TYPE = 1199;
    kFLAGS.TAMANI_PREGNANCY_INCUBATION = 1200;
    kFLAGS.TAMANI_PREGNANCY_COUNT = 1201; //Just how many has she got stuffed in there?
    kFLAGS.TAMANI_TIMES_IMPREGNATED = 1202;
    kFLAGS.TAMANI_MET = 1203;
    kFLAGS.TAMANI_NUMBER_OF_DAUGHTERS = 1204;
    kFLAGS.TAMANI_DAUGHTERS_PREGNANCY_TYPE = 1205;
    kFLAGS.TAMANI_DAUGHTERS_PREGNANCY_COUNT = 1206;
    kFLAGS.IZMA_PREGNANCY_TYPE = 1207;
    kFLAGS.EMBER_PREGNANCY_TYPE = 1208;
    kFLAGS.JOJO_BUTT_PREGNANCY_TYPE = 1209;
    kFLAGS.SHEILA_DISABLED = 1210; //1 = Told to avoid or you refused apology, 2 = Baby Issues, 3 = Worm Infested, 4 = Jojo's 'Wife'
    kFLAGS.SHEILA_PREGNANCY_TYPE = 1211;
    kFLAGS.KELLY_PREGNANCY_TYPE = 1212;
    kFLAGS.KELLY_KIDS_MALE = 1213; //Tracks number of sons with Kelly. Total number of children is stored in KELLY_KIDS
    kFLAGS.FUCK_OFF_THEIVING_RAPHAEL = 1214;
    kFLAGS.VALA_TIMES_CONSENSUAL_SEX = 1215;
    kFLAGS.KATHERINE_DICK_FORM = 1216;
    kFLAGS.KATHERINE_BREAST_SIZE = 1217;
    kFLAGS.KATHERINE_HOURS_SINCE_CUM = 1218;
    kFLAGS.KATHERINE_SEXUAL_EXPERIENCE = 1219;
    kFLAGS.KATHERINE_CLOTHES = 1220;
    kFLAGS.KATHERINE_CLOTHES_PREF = 1221;
    kFLAGS.KATHERINE_CLOTHES_WORN = 1222;
    kFLAGS.KATHERINE_HAIR_COLOR = 1223;
    kFLAGS.KATHERINE_IS_CAT_GIRL = 1224;
    kFLAGS.KATHERINE_LOCATION = 1225;
    kFLAGS.KATHERINE_TRAINING = 1226;
    kFLAGS.KATHERINE_SUB_FLAGS = 1227;
    kFLAGS.KATHERINE_AMILY_AFFECTION = 1228;
    kFLAGS.KATHERINE_COTTON_AFFECTION = 1229;
    kFLAGS.KATHERINE_EDRYN_AFFECTION = 1230;
    kFLAGS.KATHERINE_HELIA_AFFECTION = 1231;
    kFLAGS.KATHERINE_URTA_AFFECTION = 1232;
    kFLAGS.KATHERINE_URTA_DATE = 1233;
    kFLAGS.KATHERINE_URTA_TIMES_SEX = 1234;
    kFLAGS.KATHERINE_VALA_AFFECTION = 1235;
    kFLAGS.KATHERINE_VALA_DATE = 1236;
    kFLAGS.KATHERINE_VALA_TIMES_SEX = 1237;
    kFLAGS.SAVE_FILE_INTEGER_FORMAT_VERSION = 1238;
    kFLAGS.D3_DISCOVERED = 1239;
    kFLAGS.D3_ENTERED_MAGPIEHALL = 1240;
    kFLAGS.D3_BASILISKS_REMOVED_FROM_MAGPIE_HALL = 1241;
    kFLAGS.D3_MIRRORS_SHATTERED = 1242;
    kFLAGS.D3_JEAN_CLAUDE_DEFEATED = 1243;
    kFLAGS.D3_DOPPLEGANGER_DEFEATED = 1244;
    kFLAGS.D3_MECHANIC_LAST_GREET = 1245;
    kFLAGS.D3_MECHANIC_FIGHT_RESULT = 1246;
    kFLAGS.D3_MECHANIC_COCK_TYPE_SELECTION = 1247; // This is the kinda shit that sounds like it might get referenced in future (HAHAHA YEAH RIGHT?)
    kFLAGS.D3_STATUE_DEFEATED = 1248;
    kFLAGS.D3_GARDENER_DEFEATED = 1249;
    kFLAGS.D1_OMNIBUS_KILLED = 1250;
    kFLAGS.D3_CENTAUR_DEFEATED = 1251;
    kFLAGS.D3_EGGS_AVAILABLE = 1252;
    kFLAGS.NOT_HELPED_ARIAN_TODAY = 1253;
    kFLAGS.BEE_GIRL_STATUS = 1254; //Player Attitude + Conversation Stage
    kFLAGS.BEE_GIRL_COMBAT_WINS_WITH_RAPE = 1255;
    kFLAGS.BEE_GIRL_COMBAT_WINS_WITHOUT_RAPE = 1256;
    kFLAGS.BEE_GIRL_COMBAT_LOSSES = 1257;
    kFLAGS.KATHERINE_MILK_OPTIONS = 1258;
    kFLAGS.SCYLLA_FURRY_FOURSOME_COUNT = 1259;
    kFLAGS.SCYLLA_SMALLCOCK_INTRO = 1260; // Player has had the initial lil' dick intro version with scylla
    kFLAGS.DRIDERINCUBUS_DEFEATED = 1261;
    kFLAGS.DRIDERINCUBUS_KILLED = 1262;
    kFLAGS.MITZI_RECRUITED = 1263;
    kFLAGS.MITZI_FUCKED = 1264;
    kFLAGS.DRIDERINCUBUS_FUCKED = 1265;
    kFLAGS.MINOTAURKING_DEFEATED = 1266;
    kFLAGS.MINOTAURKING_KILLED = 1267;
    kFLAGS.MINOTAURKING_FUCKED = 1268;
    kFLAGS.MINOTAURKINGSSLUT_FUCKED = 1269;
    kFLAGS.MINOTAURKINGS_TOUCH = 1270;
    kFLAGS.MINOTAURKING_ALIVE = 1271;
    kFLAGS.LETHICE_DEFEATED = 1272;
    kFLAGS.LAST_ATTACK_TYPE = 1273;
    kFLAGS.LETHICE_NAME = 1274;
    kFLAGS.LETHICE_FUCKED = 1275;
    kFLAGS.LETHICE_REDEEMED = 1276;
    kFLAGS.LETHICE_KILLED = 1277;
    kFLAGS.LETHICE_LEFT_ALIVE = 1278;
    kFLAGS.GAME_END = 1279;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01280 = 1280;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01281 = 1281;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01282 = 1282;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01283 = 1283;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01284 = 1284;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01285 = 1285;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01286 = 1286;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01287 = 1287;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01288 = 1288;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01289 = 1289;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01290 = 1290;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01291 = 1291;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01292 = 1292;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01293 = 1293;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01294 = 1294;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01295 = 1295;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01296 = 1296;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01297 = 1297;
    kFLAGS.DISABLE_QUICKLOAD_CONFIRM = 1298; // Disable the confirmation-dialog on quickload
    kFLAGS.DISABLE_QUICKSAVE_CONFIRM = 1299; // Disable the confirmation-dialog on quicksave
    kFLAGS.BENOIT_EYES_TALK_UNLOCKED = 1300; // Player has talked to Benoit(e) about basilisk eyes
    kFLAGS.BENOIT_BASIL_EYES_GRANTED = 1301; // Counter to keep track, how often you gained them
    kFLAGS.BENOIT_HAIRPIN_TALKED_TODAY = 1302; // Talked to Benoit(e) about the hairpin today
    kFLAGS.IMPS_PETRIFIED = 1303; // Total imps petrified
    kFLAGS.CAMP_WALL_STATUES = 1304; // Total imp statues at camp wall
    kFLAGS.CODEX_ENTRY_BASILISKS = 1305;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01306 = 1306;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01307 = 1307;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01308 = 1308;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01309 = 1309;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01310 = 1310;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01311 = 1311;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01312 = 1312;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01313 = 1313;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01314 = 1314;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01315 = 1315;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01316 = 1316;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01317 = 1317;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01318 = 1318;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01319 = 1319;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01320 = 1320;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01321 = 1321;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01322 = 1322;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01323 = 1323;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01324 = 1324;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01325 = 1325;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01326 = 1326;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01327 = 1327;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01328 = 1328;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01329 = 1329;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01330 = 1330;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01331 = 1331;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01332 = 1332;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01333 = 1333;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01334 = 1334;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01335 = 1335;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01336 = 1336;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01337 = 1337;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01338 = 1338;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01339 = 1339;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01340 = 1340;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01341 = 1341;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01342 = 1342;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01343 = 1343;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01344 = 1344;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01345 = 1345;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01346 = 1346;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01347 = 1347;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01348 = 1348;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01349 = 1349;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01350 = 1350;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01351 = 1351;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01352 = 1352;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01353 = 1353;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01354 = 1354;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01355 = 1355;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01356 = 1356;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01357 = 1357;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01358 = 1358;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01359 = 1359;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01360 = 1360;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01361 = 1361;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01362 = 1362;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01363 = 1363;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01364 = 1364;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01365 = 1365;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01366 = 1366;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01367 = 1367;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01368 = 1368;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01369 = 1369;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01370 = 1370;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01371 = 1371;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01372 = 1372;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01373 = 1373;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01374 = 1374;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01375 = 1375;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01376 = 1376;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01377 = 1377;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01378 = 1378;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01379 = 1379;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01380 = 1380;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01381 = 1381;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01382 = 1382;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01383 = 1383;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01384 = 1384;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01385 = 1385;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01386 = 1386;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01387 = 1387;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01388 = 1388;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01389 = 1389;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01390 = 1390;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01391 = 1391;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01392 = 1392;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01393 = 1393;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01394 = 1394;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01395 = 1395;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01396 = 1396;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01397 = 1397;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01398 = 1398;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01399 = 1399;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01400 = 1400;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01401 = 1401;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01402 = 1402;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01403 = 1403;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01404 = 1404;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01405 = 1405;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01406 = 1406;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01407 = 1407;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01408 = 1408;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01409 = 1409;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01410 = 1410;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01411 = 1411;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01412 = 1412;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01413 = 1413;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01414 = 1414;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01415 = 1415;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01416 = 1416;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01417 = 1417;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01418 = 1418;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01419 = 1419;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01420 = 1420;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01421 = 1421;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01422 = 1422;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01423 = 1423;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01424 = 1424;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01425 = 1425;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01426 = 1426;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01427 = 1427;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01428 = 1428;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01429 = 1429;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01430 = 1430;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01431 = 1431;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01432 = 1432;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01433 = 1433;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01434 = 1434;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01435 = 1435;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01436 = 1436;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01437 = 1437;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01438 = 1438;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01439 = 1439;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01440 = 1440;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01441 = 1441;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01442 = 1442;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01443 = 1443;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01444 = 1444;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01445 = 1445;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01446 = 1446;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01447 = 1447;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01448 = 1448;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01449 = 1449;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01450 = 1450;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01451 = 1451;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01452 = 1452;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01453 = 1453;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01454 = 1454;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01455 = 1455;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01456 = 1456;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01457 = 1457;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01458 = 1458;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01459 = 1459;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01460 = 1460;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01461 = 1461;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01462 = 1462;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01463 = 1463;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01464 = 1464;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01465 = 1465;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01466 = 1466;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01467 = 1467;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01468 = 1468;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01469 = 1469;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01470 = 1470;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01471 = 1471;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01472 = 1472;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01473 = 1473;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01474 = 1474;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01475 = 1475;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01476 = 1476;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01477 = 1477;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01478 = 1478;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01479 = 1479;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01480 = 1480;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01481 = 1481;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01482 = 1482;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01483 = 1483;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01484 = 1484;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01485 = 1485;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01486 = 1486;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01487 = 1487;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01488 = 1488;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01489 = 1489;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01490 = 1490;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01491 = 1491;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01492 = 1492;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01493 = 1493;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01494 = 1494;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01495 = 1495;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01496 = 1496;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01497 = 1497;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01498 = 1498;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01499 = 1499;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01500 = 1500;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01501 = 1501;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01502 = 1502;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01503 = 1503;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01504 = 1504;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01505 = 1505;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01506 = 1506;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01507 = 1507;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01508 = 1508;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01509 = 1509;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01510 = 1510;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01511 = 1511;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01512 = 1512;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01513 = 1513;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01514 = 1514;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01515 = 1515;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01516 = 1516;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01517 = 1517;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01518 = 1518;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01519 = 1519;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01520 = 1520;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01521 = 1521;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01522 = 1522;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01523 = 1523;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01524 = 1524;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01525 = 1525;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01526 = 1526;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01527 = 1527;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01528 = 1528;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01529 = 1529;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01530 = 1530;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01531 = 1531;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01532 = 1532;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01533 = 1533;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01534 = 1534;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01535 = 1535;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01536 = 1536;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01537 = 1537;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01538 = 1538;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01539 = 1539;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01540 = 1540;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01541 = 1541;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01542 = 1542;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01543 = 1543;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01544 = 1544;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01545 = 1545;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01546 = 1546;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01547 = 1547;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01548 = 1548;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01549 = 1549;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01550 = 1550;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01551 = 1551;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01552 = 1552;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01553 = 1553;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01554 = 1554;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01555 = 1555;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01556 = 1556;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01557 = 1557;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01558 = 1558;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01559 = 1559;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01560 = 1560;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01561 = 1561;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01562 = 1562;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01563 = 1563;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01564 = 1564;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01565 = 1565;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01566 = 1566;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01567 = 1567;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01568 = 1568;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01569 = 1569;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01570 = 1570;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01571 = 1571;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01572 = 1572;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01573 = 1573;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01574 = 1574;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01575 = 1575;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01576 = 1576;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01577 = 1577;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01578 = 1578;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01579 = 1579;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01580 = 1580;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01581 = 1581;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01582 = 1582;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01583 = 1583;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01584 = 1584;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01585 = 1585;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01586 = 1586;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01587 = 1587;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01588 = 1588;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01589 = 1589;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01590 = 1590;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01591 = 1591;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01592 = 1592;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01593 = 1593;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01594 = 1594;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01595 = 1595;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01596 = 1596;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01597 = 1597;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01598 = 1598;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01599 = 1599;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01600 = 1600;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01601 = 1601;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01602 = 1602;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01603 = 1603;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01604 = 1604;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01605 = 1605;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01606 = 1606;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01607 = 1607;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01608 = 1608;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01609 = 1609;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01610 = 1610;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01611 = 1611;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01612 = 1612;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01613 = 1613;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01614 = 1614;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01615 = 1615;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01616 = 1616;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01617 = 1617;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01618 = 1618;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01619 = 1619;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01620 = 1620;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01621 = 1621;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01622 = 1622;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01623 = 1623;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01624 = 1624;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01625 = 1625;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01626 = 1626;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01627 = 1627;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01628 = 1628;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01629 = 1629;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01630 = 1630;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01631 = 1631;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01632 = 1632;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01633 = 1633;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01634 = 1634;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01635 = 1635;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01636 = 1636;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01637 = 1637;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01638 = 1638;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01639 = 1639;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01640 = 1640;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01641 = 1641;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01642 = 1642;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01643 = 1643;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01644 = 1644;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01645 = 1645;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01646 = 1646;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01647 = 1647;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01648 = 1648;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01649 = 1649;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01650 = 1650;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01651 = 1651;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01652 = 1652;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01653 = 1653;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01654 = 1654;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01655 = 1655;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01656 = 1656;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01657 = 1657;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01658 = 1658;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01659 = 1659;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01660 = 1660;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01661 = 1661;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01662 = 1662;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01663 = 1663;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01664 = 1664;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01665 = 1665;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01666 = 1666;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01667 = 1667;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01668 = 1668;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01669 = 1669;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01670 = 1670;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01671 = 1671;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01672 = 1672;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01673 = 1673;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01674 = 1674;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01675 = 1675;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01676 = 1676;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01677 = 1677;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01678 = 1678;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01679 = 1679;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01680 = 1680;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01681 = 1681;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01682 = 1682;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01683 = 1683;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01684 = 1684;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01685 = 1685;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01686 = 1686;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01687 = 1687;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01688 = 1688;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01689 = 1689;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01690 = 1690;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01691 = 1691;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01692 = 1692;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01693 = 1693;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01694 = 1694;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01695 = 1695;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01696 = 1696;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01697 = 1697;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01698 = 1698;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01699 = 1699;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01700 = 1700;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01701 = 1701;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01702 = 1702;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01703 = 1703;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01704 = 1704;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01705 = 1705;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01706 = 1706;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01707 = 1707;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01708 = 1708;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01709 = 1709;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01710 = 1710;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01711 = 1711;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01712 = 1712;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01713 = 1713;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01714 = 1714;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01715 = 1715;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01716 = 1716;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01717 = 1717;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01718 = 1718;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01719 = 1719;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01720 = 1720;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01721 = 1721;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01722 = 1722;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01723 = 1723;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01724 = 1724;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01725 = 1725;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01726 = 1726;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01727 = 1727;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01728 = 1728;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01729 = 1729;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01730 = 1730;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01731 = 1731;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01732 = 1732;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01733 = 1733;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01734 = 1734;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01735 = 1735;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01736 = 1736;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01737 = 1737;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01738 = 1738;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01739 = 1739;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01740 = 1740;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01741 = 1741;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01742 = 1742;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01743 = 1743;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01744 = 1744;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01745 = 1745;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01746 = 1746;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01747 = 1747;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01748 = 1748;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01749 = 1749;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01750 = 1750;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01751 = 1751;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01752 = 1752;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01753 = 1753;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01754 = 1754;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01755 = 1755;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01756 = 1756;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01757 = 1757;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01758 = 1758;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01759 = 1759;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01760 = 1760;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01761 = 1761;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01762 = 1762;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01763 = 1763;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01764 = 1764;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01765 = 1765;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01766 = 1766;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01767 = 1767;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01768 = 1768;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01769 = 1769;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01770 = 1770;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01771 = 1771;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01772 = 1772;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01773 = 1773;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01774 = 1774;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01775 = 1775;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01776 = 1776;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01777 = 1777;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01778 = 1778;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01779 = 1779;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01780 = 1780;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01781 = 1781;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01782 = 1782;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01783 = 1783;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01784 = 1784;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01785 = 1785;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01786 = 1786;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01787 = 1787;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01788 = 1788;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01789 = 1789;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01790 = 1790;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01791 = 1791;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01792 = 1792;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01793 = 1793;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01794 = 1794;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01795 = 1795;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01796 = 1796;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01797 = 1797;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01798 = 1798;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01799 = 1799;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01800 = 1800;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01801 = 1801;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01802 = 1802;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01803 = 1803;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01804 = 1804;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01805 = 1805;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01806 = 1806;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01807 = 1807;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01808 = 1808;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01809 = 1809;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01810 = 1810;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01811 = 1811;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01812 = 1812;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01813 = 1813;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01814 = 1814;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01815 = 1815;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01816 = 1816;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01817 = 1817;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01818 = 1818;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01819 = 1819;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01820 = 1820;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01821 = 1821;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01822 = 1822;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01823 = 1823;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01824 = 1824;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01825 = 1825;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01826 = 1826;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01827 = 1827;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01828 = 1828;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01829 = 1829;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01830 = 1830;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01831 = 1831;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01832 = 1832;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01833 = 1833;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01834 = 1834;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01835 = 1835;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01836 = 1836;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01837 = 1837;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01838 = 1838;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01839 = 1839;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01840 = 1840;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01841 = 1841;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01842 = 1842;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01843 = 1843;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01844 = 1844;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01845 = 1845;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01846 = 1846;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01847 = 1847;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01848 = 1848;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01849 = 1849;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01850 = 1850;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01851 = 1851;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01852 = 1852;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01853 = 1853;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01854 = 1854;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01855 = 1855;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01856 = 1856;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01857 = 1857;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01858 = 1858;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01859 = 1859;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01860 = 1860;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01861 = 1861;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01862 = 1862;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01863 = 1863;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01864 = 1864;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01865 = 1865;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01866 = 1866;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01867 = 1867;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01868 = 1868;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01869 = 1869;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01870 = 1870;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01871 = 1871;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01872 = 1872;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01873 = 1873;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01874 = 1874;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01875 = 1875;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01876 = 1876;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01877 = 1877;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01878 = 1878;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01879 = 1879;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01880 = 1880;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01881 = 1881;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01882 = 1882;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01883 = 1883;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01884 = 1884;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01885 = 1885;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01886 = 1886;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01887 = 1887;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01888 = 1888;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01889 = 1889;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01890 = 1890;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01891 = 1891;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01892 = 1892;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01893 = 1893;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01894 = 1894;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01895 = 1895;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01896 = 1896;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01897 = 1897;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01898 = 1898;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01899 = 1899;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01900 = 1900;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01901 = 1901;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01902 = 1902;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01903 = 1903;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01904 = 1904;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01905 = 1905;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01906 = 1906;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01907 = 1907;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01908 = 1908;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01909 = 1909;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01910 = 1910;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01911 = 1911;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01912 = 1912;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01913 = 1913;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01914 = 1914;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01915 = 1915;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01916 = 1916;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01917 = 1917;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01918 = 1918;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01919 = 1919;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01920 = 1920;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01921 = 1921;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01922 = 1922;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01923 = 1923;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01924 = 1924;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01925 = 1925;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01926 = 1926;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01927 = 1927;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01928 = 1928;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01929 = 1929;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01930 = 1930;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01931 = 1931;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01932 = 1932;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01933 = 1933;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01934 = 1934;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01935 = 1935;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01936 = 1936;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01937 = 1937;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01938 = 1938;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01939 = 1939;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01940 = 1940;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01941 = 1941;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01942 = 1942;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01943 = 1943;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01944 = 1944;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01945 = 1945;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01946 = 1946;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01947 = 1947;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01948 = 1948;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01949 = 1949;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01950 = 1950;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01951 = 1951;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01952 = 1952;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01953 = 1953;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01954 = 1954;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01955 = 1955;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01956 = 1956;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01957 = 1957;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01958 = 1958;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01959 = 1959;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01960 = 1960;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01961 = 1961;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01962 = 1962;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01963 = 1963;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01964 = 1964;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01965 = 1965;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01966 = 1966;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01967 = 1967;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01968 = 1968;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01969 = 1969;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01970 = 1970;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01971 = 1971;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01972 = 1972;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01973 = 1973;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01974 = 1974;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01975 = 1975;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01976 = 1976;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01977 = 1977;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01978 = 1978;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01979 = 1979;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01980 = 1980;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01981 = 1981;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01982 = 1982;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01983 = 1983;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01984 = 1984;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01985 = 1985;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01986 = 1986;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01987 = 1987;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01988 = 1988;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01989 = 1989;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01990 = 1990;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01991 = 1991;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01992 = 1992;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01993 = 1993;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01994 = 1994;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01995 = 1995;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01996 = 1996;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01997 = 1997;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01998 = 1998;
    kFLAGS.UNKNOWN_FLAG_NUMBER_01999 = 1999;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02000 = 2000;
    kFLAGS.TIMES_ORGASMED = 2001; //The reason flags are moved down there is to provide room when CoC ever gets updated and flags gets added. This is to avoid screwing up saves.
    kFLAGS.CORRUPTED_MARAE_KILLED = 2002;
    kFLAGS.CAMP_BUILT_CABIN = 2003;
    kFLAGS.CAMP_CABIN_PROGRESS = 2004;
    kFLAGS.CAMP_CABIN_WOOD_RESOURCES = 2005;
    kFLAGS.CAMP_CABIN_FURNITURE_BED = 2006;
    kFLAGS.CAMP_CABIN_FURNITURE_NIGHTSTAND = 2007;
    kFLAGS.CAMP_CABIN_FURNITURE_DRESSER = 2008;
    kFLAGS.CAMP_CABIN_FURNITURE_TABLE = 2009;
    kFLAGS.CAMP_CABIN_FURNITURE_CHAIR1 = 2010;
    kFLAGS.CAMP_CABIN_FURNITURE_CHAIR2 = 2011;
    kFLAGS.CAMP_CABIN_FURNITURE_DESK = 2012;
    kFLAGS.CAMP_CABIN_FURNITURE_DESKCHAIR = 2013;
    kFLAGS.CAMP_CABIN_FURNITURE_BOOKSHELF = 2014;
    kFLAGS.MET_MARAE = 2015;
    kFLAGS.MET_MARAE_CORRUPTED = 2016;
    kFLAGS.MARAE_QUEST_START = 2017;
    kFLAGS.MARAE_QUEST_COMPLETE = 2018;
    kFLAGS.MARAE_LETHICITE = 2019; //Not used anymore, may be reclaimed for later use.
    kFLAGS.FACTORY_FOUND = 2020;
    kFLAGS.FACTORY_SUCCUBUS_DEFEATED = 2021;
    kFLAGS.FACTORY_INCUBUS_DEFEATED = 2022;
    kFLAGS.FACTORY_OMNIBUS_DEFEATED = 2023;
    kFLAGS.FACTORY_SHUTDOWN = 2024; //1 if shutdown, 2 if overloaded.
    kFLAGS.FACTORY_INCUBUS_BRIBED = 2025;
    kFLAGS.FACTORY_TAKEN_LACTAID = 2026;
    kFLAGS.FACTORY_TAKEN_GROPLUS = 2027;
    kFLAGS.FACTORY_MILKER_BUILT = 2028;
    kFLAGS.KELT_KILL_PLAN = 2029;
    kFLAGS.KELT_KILLED = 2030;
    kFLAGS.WHITNEY_GONE = 2031;
    kFLAGS.CODEX_CURRENT_ENTRY = 2032;
    kFLAGS.CODEX_CURRENT_PAGE = 2033;
    kFLAGS.CODEX_UNUSED_FLAG_1 = 2034;
    kFLAGS.CODEX_UNUSED_FLAG_2 = 2035;
    kFLAGS.CODEX_ENTRY_ANEMONES = 2036;
    kFLAGS.CODEX_ENTRY_ARACHNES = 2037;
    kFLAGS.CODEX_ENTRY_FETISHFOLLOWERS = 2038;
    kFLAGS.CODEX_ENTRY_GIANTBEES = 2039;
    kFLAGS.CODEX_ENTRY_GOBLINS = 2040;
    kFLAGS.CODEX_ENTRY_GOOGIRLS = 2041;
    kFLAGS.CODEX_ENTRY_HARPIES = 2042;
    kFLAGS.CODEX_ENTRY_HELLHOUNDS = 2043;
    kFLAGS.CODEX_ENTRY_IMPS = 2044;
    kFLAGS.CODEX_ENTRY_LABOVINES = 2045;
    kFLAGS.CODEX_ENTRY_LIZANS = 2046;
    kFLAGS.CODEX_ENTRY_MAGIC = 2047;
    kFLAGS.CODEX_ENTRY_MINOTAURS = 2048;
    kFLAGS.CODEX_ENTRY_NAGAS = 2049;
    kFLAGS.CODEX_ENTRY_ORCS = 2050;
    kFLAGS.CODEX_ENTRY_SALAMANDERS = 2051;
    kFLAGS.CODEX_ENTRY_SANDWITCHES = 2052;
    kFLAGS.CODEX_ENTRY_SATYRS = 2053;
    kFLAGS.CODEX_ENTRY_SHARKGIRLS = 2054;
    kFLAGS.CODEX_ENTRY_SUCCUBUS = 2055;
    kFLAGS.PIG_SLUT_DISABLED = 2056;
    kFLAGS.MARBLE_CORRUPT_MARAE_STORY = 2057;
    kFLAGS.CAMP_PORTAL_PROGRESS = 2058; //Will eventually allow you to travel back to Ingnam.
    kFLAGS.DISCOVERED_GLACIAL_RIFT = 2059;
    kFLAGS.DISCOVERED_VOLCANO_CRAG = 2060;
    kFLAGS.MET_YETI_FIRST_TIME = 2061;
    kFLAGS.VALERIA_FOUND_IN_GLACIAL_RIFT = 2062;
    kFLAGS.SHEILA_LETHICITE_FORGE_DAY = 2063; //Scarred Blade forge progress.
    kFLAGS.CHEAT_ENTERING_COUNTER_2 = 2064; //Debug menu
    kFLAGS.GIACOMO_MET = 2065;
    kFLAGS.MOD_SAVE_VERSION = 2066; //Current version of save.
    kFLAGS.GIACOMO_NOTICES_WORMS = 2067;
    kFLAGS.KEPT_PURE_JOJO_OVER_VAPULA = 2068; //Requires 90+ intelligence.
    kFLAGS.KEPT_PURE_AMILY_OVER_VAPULA = 2069; //Requires 90+ intelligence.
    kFLAGS.PHOENIX_ENCOUNTERED = 2070;
    kFLAGS.LUSTSTICK_LIBIDO_INITIAL = 2071;
    kFLAGS.LUSTSTICK_LIBIDO_MOD = 2072;
    kFLAGS.PHOENIX_WANKED_COUNTER = 2073;
    kFLAGS.TIMES_MASTURBATED = 2074;
    kFLAGS.DEMONS_DEFEATED = 2075;
    kFLAGS.AMILY_VILLAGE_EXPLORED = 2076; //Times explored TownRuins, counts for achievement.
    kFLAGS.TIMES_TRANSFORMED = 2077; //Times transformed, counts for achievement.
    kFLAGS.CORRUPTED_GLADES_DESTROYED = 2078; //Now reused. Formerly, this flag tracked whether omnibus was killed. Now this tracks progress until extinction of glades.
    kFLAGS.HERMOIT_NEXTDAY_EVENT = 2079;
    kFLAGS.HERMOIT_NEXTDAY_EVENT_DONE = 2080;
    kFLAGS.ACHIEVEMENT_PROGRESS_FASTING = 2081;
    kFLAGS.ACHIEVEMENT_PROGRESS_GLUTTON = 2082;
    kFLAGS.ACHIEVEMENT_PROGRESS_SCHIZOPHRENIA = 2083;
    kFLAGS.ACHIEVEMENT_PROGRESS_CLEAN_SLATE = 2084;
    kFLAGS.ACHIEVEMENT_PROGRESS_TOTAL_DAMAGE = 2085;
    kFLAGS.CLEARED_HEL_TOWER = 2086;
    kFLAGS.MINERVA_PURIFICATION_PROGRESS = 2087; //Purification progress. 10 denotes completion. -10 indicates corruption.
    kFLAGS.MINERVA_PURIFICATION_MARAE_TALKED = 2088; //0 if not started, 1 if the condition is met, 2 is talked.
    kFLAGS.MINERVA_PURIFICATION_JOJO_TALKED = 2089; //0 if not started, 1 if the condition is met, 2 is talked.
    kFLAGS.MINERVA_PURIFICATION_RATHAZUL_TALKED = 2090; //0 if not started, 1 if the condition is met, 2 is talked.
    kFLAGS.MINERVA_CHILDREN = 2091; //Children with Minerva!
    kFLAGS.MINERVA_CORRUPTION_PROGRESS = 2092; //Corruption progress. 10 denotes completion.
    kFLAGS.MINERVA_TOWER_TREE = 2093; //Set to 1 if seed is planted and tree grows.
    kFLAGS.MINERVA_TOWER_REPAIRED = 2094; //Alters the part where you enter the tower. 1 for first time.
    kFLAGS.MINERVA_PREGNANCY_TYPE = 2095;
    kFLAGS.MINERVA_PREGNANCY_INCUBATION = 2096;
    kFLAGS.MINERVA_FOUND_LOST_SHARKGIRL = 2097; //Possible mini-quest?
    kFLAGS.MINERVA_TELLS_ABOUT_PREGNANCY = 2098; //Increments to 1 when she gives birth for first time.
    kFLAGS.TIMES_BIRTHED_SHARPIES = 2099;
    kFLAGS.ACHIEVEMENT_PROGRESS_DEFORESTER = 2100;
    kFLAGS.ACHIEVEMENT_PROGRESS_IM_NO_LUMBERJACK = 2101;
    kFLAGS.ACHIEVEMENT_PROGRESS_HAMMER_TIME = 2102;
    kFLAGS.ACHIEVEMENT_PROGRESS_SCAVENGER = 2103;
    kFLAGS.TIMES_BAD_ENDED = 2104;
    kFLAGS.CONDOMED = 2105; //If you use condom
    kFLAGS.HELIA_HERMIFIED = 2106; //1 if Helia is made a hermaphrodite.
    kFLAGS.IMP_LORD_MALEHERM_PROGRESS = 2107; //1 if started, 10 if finished.
    kFLAGS.EMBER_SPAR_VICTORIES = 2108; //Times won against Ember spars.
    kFLAGS.PHOENIX_HP_LOSS_COUNTER = 2109; //If you lose by HP 4 times in a row, bad end.
    kFLAGS.LIZAN_ROGUE_SEX_COUNTER = 2110;
    kFLAGS.BENOIT_PISTOL_BOUGHT = 2111;
    kFLAGS.FLINTLOCK_PISTOL_AMMO = 2112;
    kFLAGS.BENOIT_CLOCK_BOUGHT = 2113;
    kFLAGS.BENOIT_CLOCK_ALARM = 2114;
    kFLAGS.GOBLIN_ELDER_GRATEFUL_OVER_LETHICE_DEFEAT = 2115;
    kFLAGS.MET_LIZAN_FIRST_TIME = 2116;
    kFLAGS.TIMES_ENCOUNTERED_GOBLIN_WARRIOR = 2117;
    kFLAGS.TIMES_ENCOUNTERED_GOBLIN_SHAMAN = 2118;
    kFLAGS.TIMES_ENCOUNTERED_GOBLIN_ELDER = 2119;
    kFLAGS.TIMES_ENCOUNTERED_GOBLIN_QUEEN = 2120;
    kFLAGS.TIMES_ENCOUNTERED_IMP_WARLORD = 2121;
    kFLAGS.TIMES_ENCOUNTERED_IMP_OVERLORD = 2122;
    kFLAGS.IN_INGNAM = 2123;
    kFLAGS.INGNAM_PROLOGUE_COMPLETE = 2124;
    kFLAGS.INGNAM_WEAPONSMITH_TALKED = 2125;
    kFLAGS.INGNAM_ARMORSMITH_TALKED = 2126;
    kFLAGS.INGNAM_RUMORS = 2127; //Hear the rumors
    kFLAGS.INGNAM_FARMER_MET = 2128;
    kFLAGS.INGNAM_BLACKMARKET_TALKED = 2129;
    kFLAGS.INGNAM_ALCHEMIST_TALKED = 2130;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02131 = 2131; //Not used for now. Will be used for Ingnam somehow.
    kFLAGS.INGNAM_EARS_FREAKOUT = 2132; //Ears freakout
    kFLAGS.INGNAM_EARS_LAST_TYPE = 2133;
    kFLAGS.INGNAM_TAIL_FREAKOUT = 2134; //Tail freakout
    kFLAGS.INGNAM_TAIL_LAST_TYPE = 2135;
    kFLAGS.DISABLED_JOJO_RAPE = 2136; //If 1, disables Jojo rape for good, locks out corrupt path permanently.
    kFLAGS.DISABLED_SEX_MACHINE = 2137;
    kFLAGS.ENEMY_CRITICAL = 2138;
    kFLAGS.MARBLE_HAMMER_QUEST_PROGRESS = 2139;
    kFLAGS.SHIFT_KEY_DOWN = 2140;
    kFLAGS.IN_PRISON = 2141; //In prison. Replaces old flag 1001 in prisoner mod.
    kFLAGS.PRISON_CAPTURE_CHANCE = 2142; //Captor chance. Replaces old flag 1000 in prisoner mod.
    kFLAGS.PRISON_TRAINING_LEVEL = 2143; //Training level. Replaces old flag 1002 in prisoner mod.
    kFLAGS.PRISON_TRAINING_REFUSED = 2144; //Training refused. Replaces old flag 1003 in prisoner mod.
    kFLAGS.PRISON_DIRT_ENABLED = 2145;
    kFLAGS.PRISON_PUNISHMENT = 2146; //0: None, 1: Stockade, 2: Solitary Confinement, 3: BJ Trainer
    kFLAGS.PRISON_DOOR_UNLOCKED = 2147;
    kFLAGS.PRISON_CAPTURE_COUNTER = 2148;
    kFLAGS.PRISON_DILDO_RACK = 2149;
    kFLAGS.PRISON_TRAIN_SELF_CONTROL_UNLOCKED = 2150;
    kFLAGS.PRISON_TRAIN_ANAL_CAPACITY_UNLOCKED = 2151;
    kFLAGS.PRISON_TRAIN_PUPPY_TRICKS_UNLOCKED = 2152;
    kFLAGS.PRISON_STUDY_MANNERS_UNLOCKED = 2153;
    kFLAGS.PRISON_STUDY_BREATHING_UNLOCKED = 2154;
    kFLAGS.PRISON_BITCHED_ABOUT_MARBLE_MILK = 2155;
    kFLAGS.PRISON_EVENT_TIMEOUT = 2156;
    kFLAGS.PRISON_STORAGE_ARMOR = 2157;
    kFLAGS.PRISON_STORAGE_WEAPON = 2158;
    kFLAGS.PRISON_STORAGE_SHIELD = 2159;
    kFLAGS.MET_BEHEMOTH = 2160;
    kFLAGS.BEHEMOTH_ANAL_PITCH = 2161;
    kFLAGS.BEHEMOTH_ANAL_CATCH = 2162;
    kFLAGS.BEHEMOTH_VAGINAL_CATCH = 2163;
    kFLAGS.BEHEMOTH_COCK_SUCKED = 2164;
    kFLAGS.BEHEMOTH_CUM_BATH = 2165;
    kFLAGS.BEHEMOTH_WATERSPORTS = 2166;
    kFLAGS.BEHEMOTH_GEMS = 2167;
    kFLAGS.BEHEMOTH_TALK_LEVEL = 2168;
    kFLAGS.BEHEMOTH_CHILDREN = 2169;
    kFLAGS.BEHEMOTH_TENT = 2170;
    kFLAGS.BEHEMOTH_TALKED_ABOUT_CUM = 2171;
    kFLAGS.THIEF_GEMS = 2172;
    kFLAGS.INGNAM_GREETED_AFTER_LONGTIME = 2173;
    kFLAGS.CODEX_ENTRY_BEHEMOTH = 2174;
    kFLAGS.SCARRED_BLADE_STATUS = 2175;
    kFLAGS.PURE_MARAE_ENDGAME = 2176; //1 if met, 2 if defeated.
    kFLAGS.LETHICITE_ARMOR_TAKEN = 2177; //1 if Lethicite armor is taken.
    kFLAGS.CAMP_WALL_PROGRESS = 2178; //100 if complete.
    kFLAGS.CAMP_WALL_GATE = 2179; //1 if built.
    kFLAGS.CAMP_WALL_SKULLS = 2180; //Number of Imp Skulls hung.
    kFLAGS.BEHEMOTH_CHILD_1_BIRTH_DAY = 2181;
    kFLAGS.BEHEMOTH_CHILD_2_BIRTH_DAY = 2182;
    kFLAGS.BEHEMOTH_CHILD_3_BIRTH_DAY = 2183;
    kFLAGS.JOJO_SEX_COUNTER = 2184;
    kFLAGS.JOJO_ANAL_XP = 2185; //Also used for Bimbo Jojo.
    kFLAGS.JOJO_LITTERS = 2186; //Litters of mouse-morphs birthed. Will also be used to track litters by Joy.
    kFLAGS.JOJO_BLOWJOB_XP = 2187; //How many times you've sucked Jojo's cock.
    kFLAGS.JOJO_VAGINAL_CATCH_COUNTER = 2188; //How many times Jojo has penetrated you vaginally.
    kFLAGS.JOJO_LITTERS_AMILY_REACTION_COUNTER = 2189;
    kFLAGS.JOJO_ANAL_CATCH_COUNTER = 2190; //How many times Jojo has penetrated you anally.
    kFLAGS.KIHA_UNDERGARMENTS = 2191; //0 if nude, 1 if wearing panties, 2 if wearing loincloth. (Spider-silk only)
    kFLAGS.KIHA_PREGNANCY_TYPE = 2192;
    kFLAGS.KIHA_INCUBATION = 2193;
    kFLAGS.KIHA_EGG_COUNTER = 2194; //Not used anymore, might be reclaimed.
    kFLAGS.KIHA_CHILDREN_BOYS = 2195;
    kFLAGS.KIHA_CHILDREN_GIRLS = 2196;
    kFLAGS.KIHA_CHILDREN_HERMS = 2197;
    kFLAGS.KIHA_CHILD_MATURITY_COUNTER = 2198;
    kFLAGS.KIHA_PREGNANCY_POTENTIAL = 2199;
    kFLAGS.VALERIA_FLUIDS = 2200; //Enabled in New Game+. 100 is full.
    kFLAGS.IZMA_FEEDING_VALERIA = 2201;
    kFLAGS.HELLHOUNDS_KILLED = 2202; //Flag used to be pigtail truffle bad end warning. Has been replaced.
    kFLAGS.IMPS_KILLED = 2203;
    kFLAGS.GOBLINS_KILLED = 2204;
    kFLAGS.MINOTAURS_KILLED = 2205;
    kFLAGS.TIMES_SLEPT_WITH_EMBER = 2206;
    kFLAGS.EMBER_MORNING = 2207;
    kFLAGS.BASILISK_RESISTANCE_TRACKER = 2208;
    kFLAGS.MINOTAUR_CUM_RESISTANCE_TRACKER = 2209;
    kFLAGS.DLC_APRIL_FOOLS = 2210;
    kFLAGS.GOBLIN_ELDER_TALK_COUNTER = 2211;
    kFLAGS.ISABELLA_POTENCY_STATE = 2212;
    kFLAGS.ISABELLA_COWMOTHER = 2213; //0.5 means prompt happened. 1 indicates she can give birth to cowgirls.
    kFLAGS.ISABELLA_PREGNANCY_TYPE = 2214;
    kFLAGS.ISABELLA_PREGNANCY_INCUBATION = 2215;
    kFLAGS.ISABELLA_PREGNANCY_BOOSTED = 2216; //1 indicates her pregnancy is boosted by Ovi Elixir. Resets to 0 when she gives birth.
    kFLAGS.ISABELLA_CHILDREN_HUMANS = 2217;
    kFLAGS.ISABELLA_CHILDREN_COWGIRLS = 2218;
    kFLAGS.ISABELLA_COUNTDOWN_TO_CONTRACEPTIONS = 2219; //If Isabella joins your camp, set to 240. -1 means done.
    kFLAGS.ISABELLA_VALERIA_SPARRED = 2220;
    kFLAGS.FAERIE_ENCOUNTER_DISABLED = 2221;
    kFLAGS.MINERVA_CORRUPTED_CUM_ADDICTION = 2222; //This will be used for Corrupted Minerva.
    kFLAGS.ERLKING_CANE_OBTAINED = 2223;
    kFLAGS.ERLKING_CANE_ATTACK_COUNTER = 2224; //After 10, has a chance to break.
    kFLAGS.KIHA_DESTROYING_CORRUPTED_GLADES = 2225; //1 if Kiha is currently destroying corrupted glades.
    kFLAGS.AMILY_DESTROYING_CORRUPTED_GLADES = 2226; //1 if Amily is currently destroying corrupted glades.
    kFLAGS.BIMBO_LIQUEUR_STASH_COUNTER_FOR_JOJO = 2227; //How long Bimbo Liqueur has been in stash since Jojo joined.
    kFLAGS.JOJO_BIMBO_STATE = 2228; //Here comes the choice. 1 means Jojo warned about thief. 2 means prompt to catch thief is chosen, leads to bimbofication. 3 means Jojo is bimbo.
    kFLAGS.JOY_COCK_SIZE = 2229; //Jojo is bimbofied, turns into Joy.
    kFLAGS.JOY_BREAST_SIZE = 2230; //Joy's cock size. 0 means no cock and that means you're a bastard for removing her cock.
    kFLAGS.JOY_VAGINAL_WETNESS = 2231; //Joy's breast size.
    kFLAGS.JOY_LACTAID_MILKED_COUNTER = 2232; //Times given Lactaid and have milk drank from Joy.
    kFLAGS.JOY_INTELLIGENCE = 2233; //Starts at 20, increases by 1-4 with each dose of Scholar's Tea, up to maximum of 50.
    kFLAGS.TIMES_PENETRATED_JOY_VAGINALLY = 2234; //Times penetrated Joy's vagina.
    kFLAGS.TIMES_LICKED_JOYS_PUSSY = 2235; //Times licked Joy's vagina.
    kFLAGS.TIMES_FROTTED_WITH_JOY = 2236; //Times frotted with Joy. She must have a cock for that.
    kFLAGS.TIMES_GET_BLOWN_BY_JOY = 2237; //Times blown by Joy.
    kFLAGS.TIMES_GET_LICKED_BY_JOY = 2238; //Times licked by Joy.
    kFLAGS.JOY_TALKED_ABOUT_YOURSELF = 2239;
    kFLAGS.JOY_TALKED_ABOUT_HERSELF = 2240;
    kFLAGS.JOY_TALKED_ABOUT_OLD_LIFE = 2241;
    kFLAGS.JOY_TALKED_ABOUT_DEMONS = 2242;
    kFLAGS.JOY_TALKED_ABOUT_BABIES = 2243;
    kFLAGS.JOY_COCK_FONDNESS = 2244; //When this reaches 10, Joy will refuse to eat pink eggs.
    kFLAGS.JOY_EATEN_BLUE_EGG = 2245;
    kFLAGS.JOY_PREGNANCY_TYPE = 2246;
    kFLAGS.JOY_PREGNANCY_INCUBATION = 2247;
    kFLAGS.JOY_TWINS_BIRTHED = 2248; //Twins birthed by Joy.
    kFLAGS.JOY_NIGHT_FUCK = 2249;
    kFLAGS.JOY_TAKES_BABIES_AWAY_COUNTER = 2250; //Starts at 72 if you have at least 3 litters with Joy.
    kFLAGS.BLACK_COCK_MET_ANITA = 2251;
    kFLAGS.BLACK_COCK_MET_ANDY = 2252;
    kFLAGS.BLACK_COCK_MET_HARRY = 2253;
    kFLAGS.BLACK_COCK_MET_FRIDA = 2254;
    kFLAGS.BLACK_COCK_ANITA_SONGS_LISTENED = 2255; //Number of times you've listened to Anita's songs.
    kFLAGS.BLACK_COCK_ANITA_SEX_INTRO = 2256;
    kFLAGS.BLACK_COCK_ANITA_SEX_COUNTER = 2257;
    kFLAGS.BLACK_COCK_ANDY_STASH_STATE = 2258; //1 if Andy's stash is explained, 2 if smoked at least once.
    kFLAGS.BLACK_COCK_ANDY_ORAL_GIVEN = 2259; //Number of times given oral to Andy.
    kFLAGS.BLACK_COCK_ANDY_SEX_COUNTER = 2260; //1 if intro to sex happens.
    kFLAGS.BLACK_COCK_HARRY_SEX_INTRO = 2261;
    kFLAGS.BLACK_COCK_HARRY_SEX_COUNTER = 2262; //How many times you've been fucked by Harry.
    kFLAGS.BLACK_COCK_FRIDAS_CAKE_EATEN_COUNTER = 2263; //Total number of cake slices eaten so far.
    kFLAGS.CODEX_ENTRY_RHINOS = 2264;
    kFLAGS.CODEX_ENTRY_ECHIDNAS = 2265;
    kFLAGS.URTA_VIXEN_AND_CREAM_COUNTER = 2266;
    kFLAGS.CAMP_CABIN_STONE_RESOURCES = 2267;
    kFLAGS.ACHIEVEMENT_PROGRESS_YABBA_DABBA_DOO = 2268;
    kFLAGS.ACHIEVEMENT_PROGRESS_ANTWORKS = 2269;
    kFLAGS.CODEX_ENTRY_ZEBRAS = 2270;
    kFLAGS.ACHIEVEMENT_PROGRESS_EGG_HUNTER = 2271;
    kFLAGS.CURRENT_WEATHER = 2272;
    kFLAGS.WEATHER_CHANGE_COOLDOWN = 2273; //4 hours to prevent weather from changing too fast.
    kFLAGS.TAMANI_DEFEAT_COUNTER = 2274; //If this reaches 4, you can bad-end Tamani.
    kFLAGS.TAMANI_BAD_ENDED = 2275; //Determines if Tamani is bad-ended. (Killed)
    kFLAGS.PHYLLA_STONES_HUNTED_TODAY = 2276;
    kFLAGS.ANZU_PALACE_UNLOCKED = 2277;
    kFLAGS.ANZU_RELATIONSHIP_LEVEL = 2278;
    kFLAGS.ANZU_AFFECTION = 2279;
    kFLAGS.ANZU_TIMES_TALKED = 2280;
    kFLAGS.ANZU_TALKED_PAST = 2281;
    kFLAGS.ANZU_TALKED_PALACE = 2282;
    kFLAGS.ANZU_TALKED_RIFT = 2283;
    kFLAGS.ANZU_TALKED_POWERS = 2284;
    kFLAGS.ANZU_TALKED_GODS = 2285;
    kFLAGS.ANZU_TIMES_DINED_BREAKFAST = 2286; // 0 if haven't done, 1 if started, 2 if high relationship
    kFLAGS.ANZU_TIMES_DINED_LUNCH = 2287;
    kFLAGS.ANZU_TIMES_DINED_DINNER = 2288;
    kFLAGS.ANZU_TIMES_DRUNK_SEX = 2289;
    kFLAGS.ANZU_TIMES_RACED = 2290;
    kFLAGS.ANZU_ANAL_CATCH_COUNTER = 2291;
    kFLAGS.ANZU_VAGINAL_CATCH_COUNTER = 2292;
    kFLAGS.ANZU_BLOWN_YOU_COUNTER = 2293;
    kFLAGS.ANZU_SUCKED_OFF_COUNTER = 2294;
    kFLAGS.ANZU_ANAL_PITCH_COUNTER = 2295;
    kFLAGS.ANZU_FED_COUNTER = 2296;
    kFLAGS.TIMES_EXPLORED = 2297; // Replaces `player.explored`
    kFLAGS.TIMES_EXPLORED_FOREST = 2298; // Replaces `player.exploredForest`
    kFLAGS.TIMES_EXPLORED_DESERT = 2299; // Replaces `player.exploredDesert`
    kFLAGS.TIMES_EXPLORED_MOUNTAIN = 2300; // Replaces `player.exploredMountain`
    kFLAGS.TIMES_EXPLORED_LAKE = 2301; // Replaces `player.exploredLake`
    kFLAGS.HELIA_SPAR_VICTORIES = 2302;
    kFLAGS.HELSPAWN_SPAR_VICTORIES = 2303;
    kFLAGS.KIHA_SPAR_VICTORIES = 2304;
    kFLAGS.ISABELLA_SPAR_VICTORIES = 2305;
    kFLAGS.MINERVA_SPAR_VICTORIES = 2306;
    kFLAGS.VALERIA_SPAR_VICTORIES = 2307;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02308 = 2308; // Reserved for additional sparrable partner.
    kFLAGS.UNKNOWN_FLAG_NUMBER_02309 = 2309; // Reserved for additional sparrable partner.
    kFLAGS.SANDWITCH_SERVICED = 2310; // Number of times, the player has serviced a sand witch.
    kFLAGS.JOJO_STATUS = 2311; // Replacement for `CoC.monk` variable.
    kFLAGS.IZMA_BROFIED = 2312;
    kFLAGS.IZMAEL_ANAL_PENETRATED = 2313;
    kFLAGS.IZMAEL_FRENZIED = 2314;
    kFLAGS.IZMAEL_ENTRAPPED = 2315;
    kFLAGS.IZMAEL_BATHTIME_COUNTER = 2316;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02317 = 2317; // Reserved for Izmael.
    kFLAGS.UNKNOWN_FLAG_NUMBER_02318 = 2318; // Reserved for Izmael.
    kFLAGS.TOWN_RUINS_SCAVENGE_CONSIDERED = 2319;
    kFLAGS.TOWN_RUINS_HOUSES_DISMANTLED = 2320;
    kFLAGS.TOWN_RUINS_HOUSE_SCAVENGE_PROGRESS = 2321;
    kFLAGS.TOWN_RUINS_TOWNHALL_SCAVENGE_PROGRESS = 2322;
    kFLAGS.TOWN_RUINS_SHOP_SCAVENGE_PROGRESS = 2323;
    kFLAGS.TOWN_RUINS_HOUSE_FURNITURE_FOUND = 2324;
    kFLAGS.TOWN_RUINS_TOWNHALL_FURNITURE_FOUND = 2325;
    kFLAGS.TOWN_RUINS_SHOP_FURNITURE_FOUND = 2326;
    kFLAGS.PABLO_MET = 2327;
    kFLAGS.PABLO_AFFECTION = 2328;
    kFLAGS.PABLO_WORKOUT_COUNTER = 2329;
    kFLAGS.PABLO_SECRET_LEARNED = 2330;
    kFLAGS.PABLO_SEX_UNLOCKED = 2331;
    kFLAGS.PABLO_GOT_DICKED_VAGINALLY = 2332;
    kFLAGS.PABLO_GOT_DICKED_ANALLY = 2333;
    kFLAGS.PABLO_USED_YOUR_PUSSY = 2334;
    kFLAGS.PABLO_USED_YOUR_ASS = 2335;
    kFLAGS.PABLO_FREAKED_OUT_OVER_WORMS = 2336;
    // Hellspawn flags - thrown here for the time being
    kFLAGS._modPLAYERCAMEBEFORERIDING = 2337;
    kFLAGS.HELSPAWN_HADSEX = 2338;
    //Ceraph test (delete from here if it fails)
    kFLAGS.CERAPHSUBMISSIVE = 2339; //Counter for Ceraph submissiveness, when it reaches 10 PC becomes a bitch nigga
    kFLAGS.CERAPHCHASITY = 2340; //1 means yay, 0 means nay
    kFLAGS.CERAPHTOLDGIRLS = 2341; //1 Means Ceraph told everyone that you're the camp's personal whore
    //End of Ceraph stuff
    kFLAGS.ARROWS_FIRED = 2342; //Number of arrows fired. Used to track extra perks that extend the bow's usefulness.
    kFLAGS.ASCENSION_MODE = 2343; //Handles whether or not Ascension resets your character partially. 0 is no reset. 1 resets your level, level up perks and equipment.
    kFLAGS.ASCENSIONING = 2344; //Handles scaling in-game. Used to prevent ascension mode switches from actively changing the current game.
    kFLAGS.HADSLUGPARASITE = 2345; //Tracks whether or not you were infected by a slug parasite in the past.
    kFLAGS.METVOLCANICGOLEM = 2346; //Tracks whether or not you met the Volcanic Golem before.
    kFLAGS.VOLCANICGOLEMHP = 2347; //The Volcanic Golem has the same HP bar between encounters.
    kFLAGS.VOLCANICGOLEMSHIELDHP = 2348; //Tracks the Volcanic Golem's shimmering shield HP.
    kFLAGS.DESTROYEDVOLCANICGOLEM = 2349; //Tracks if the volcanic golem is destroyed.
    kFLAGS.VOLCWITCHNUMBEROFCHILDREN = 2350; //Tracks how many times you fathered a corrupted witch. This is abstract; there's no real pregnancy event.
    kFLAGS.VOLCWITCHNUMBEROFBIRTHS = 2351; //Tracks how many times you've birthed a corrupted witch.
    kFLAGS.POTENTPREGNANCYBOOST = 2352; //Tracks if the player is due the potent pregnancy stat boost.
    kFLAGS.AMILY_TREE_MADEUPBULLSHIT = 2353; //You managed to convince your lover of a lie so you can fuck a tree.
    kFLAGS.PARASITE_EEL_DAYDONE = 2354; //Makes sure parasites only hunger for semen(and only raise your lust for it) once every three days.
    kFLAGS.AMILY_BULGE_STRIKES = 2355; //Three strikes means you're out.
    kFLAGS.AMILY_BULGE_PROMISE = 2356; //Player promised to never again impale Amily on his dick. Oh man.
    kFLAGS.CERAPH_KILLED = 2357; //Player killed Ceraph.
    kFLAGS.KIHA_KILLED = 2358; //Player killed Kiha. What a monster.
    kFLAGS.DULLAHAN_MET = 2359; //Met the dullahan
    kFLAGS.DULLAHAN_RUDE = 2360; //You were rude to the dullahan. No more nice Gan Caenn.
    kFLAGS.DULLAHAN_DEAD = 2361; //You're aware that the Dullahan is, in fact, dead.
    kFLAGS.BEAUTIFUL_SWORD_LEVEL = 2362; //Tracks the Beautiful Sword power.
    kFLAGS.OTHERCOCANON_SURVIVALTWEAK = 2363; //Enables or disables OtherCoCAnon's survival tweaks.
    kFLAGS.SWORD_SHARDS_TAKEN = 2365; //How many shards you've taken.
    kFLAGS.ZETAZ_POTION_CURED = 2366; //Tracks whether or not you're being affected by Zetaz's concoction. 0 = completely, 1 = partially. Purity Blessing Perk eliminates it.
    kFLAGS.TIMES_MINO_MUTUAL = 2367; //How many times the Minotaur's "minoMutual" scene been accessed
    kFLAGS.TIMES_BEATEN_DULLAHAN_SPAR = 2368; //how many times the player has beaten the dullahan while sparring. Used to award the "Counter" ability.
    kFLAGS.RECEIVED_MASTURBATION_WARNING = 2369;
    kFLAGS.BIMBO_MINISKIRT_PROGRESS_DISABLED = 2370;
    kFLAGS.MANOR_PROGRESS = 2371; //going to try to use just one flag for the entire manor.
    kFLAGS.FOUND_MANOR = 2372; //except for this.
    kFLAGS.UNKNOWN_FLAG_NUMBER_02373 = 2373;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02374 = 2374;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02375 = 2375;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02376 = 2376;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02377 = 2377;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02378 = 2378;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02379 = 2379;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02380 = 2380;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02381 = 2381;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02382 = 2382;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02383 = 2383;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02384 = 2384;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02385 = 2385;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02386 = 2386;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02387 = 2387;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02388 = 2388;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02389 = 2389;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02390 = 2390;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02391 = 2391;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02392 = 2392;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02393 = 2393;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02394 = 2394;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02395 = 2395;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02396 = 2396;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02397 = 2397;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02398 = 2398;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02399 = 2399;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02400 = 2400;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02401 = 2401;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02402 = 2402;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02403 = 2403;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02404 = 2404;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02405 = 2405;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02406 = 2406;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02407 = 2407;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02408 = 2408;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02409 = 2409;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02410 = 2410;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02411 = 2411;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02412 = 2412;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02413 = 2413;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02414 = 2414;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02415 = 2415;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02416 = 2416;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02417 = 2417;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02418 = 2418;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02419 = 2419;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02420 = 2420;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02421 = 2421;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02422 = 2422;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02423 = 2423;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02424 = 2424;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02425 = 2425;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02426 = 2426;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02427 = 2427;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02428 = 2428;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02429 = 2429;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02430 = 2430;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02431 = 2431;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02432 = 2432;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02433 = 2433;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02434 = 2434;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02435 = 2435;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02436 = 2436;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02437 = 2437;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02438 = 2438;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02439 = 2439;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02440 = 2440;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02441 = 2441;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02442 = 2442;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02443 = 2443;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02444 = 2444;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02445 = 2445;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02446 = 2446;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02447 = 2447;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02448 = 2448;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02449 = 2449;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02450 = 2450;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02451 = 2451;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02452 = 2452;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02453 = 2453;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02454 = 2454;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02455 = 2455;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02456 = 2456;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02457 = 2457;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02458 = 2458;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02459 = 2459;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02460 = 2460;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02461 = 2461;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02462 = 2462;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02463 = 2463;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02464 = 2464;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02465 = 2465;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02466 = 2466;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02467 = 2467;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02468 = 2468;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02469 = 2469;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02470 = 2470;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02471 = 2471;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02472 = 2472;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02473 = 2473;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02474 = 2474;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02475 = 2475;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02476 = 2476;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02477 = 2477;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02478 = 2478;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02479 = 2479;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02480 = 2480;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02481 = 2481;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02482 = 2482;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02483 = 2483;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02484 = 2484;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02485 = 2485;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02486 = 2486;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02487 = 2487;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02488 = 2488;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02489 = 2489;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02490 = 2490;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02491 = 2491;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02492 = 2492;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02493 = 2493;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02494 = 2494;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02495 = 2495;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02496 = 2496;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02497 = 2497;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02498 = 2498;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02499 = 2499;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02500 = 2500;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02501 = 2501;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02502 = 2502;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02503 = 2503;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02504 = 2504;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02505 = 2505;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02506 = 2506;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02507 = 2507;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02508 = 2508;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02509 = 2509;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02510 = 2510;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02511 = 2511;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02512 = 2512;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02513 = 2513;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02514 = 2514;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02515 = 2515;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02516 = 2516;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02517 = 2517;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02518 = 2518;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02519 = 2519;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02520 = 2520;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02521 = 2521;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02522 = 2522;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02523 = 2523;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02524 = 2524;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02525 = 2525;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02526 = 2526;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02527 = 2527;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02528 = 2528;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02529 = 2529;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02530 = 2530;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02531 = 2531;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02532 = 2532;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02533 = 2533;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02534 = 2534;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02535 = 2535;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02536 = 2536;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02537 = 2537;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02538 = 2538;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02539 = 2539;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02540 = 2540;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02541 = 2541;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02542 = 2542;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02543 = 2543;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02544 = 2544;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02545 = 2545;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02546 = 2546;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02547 = 2547;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02548 = 2548;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02549 = 2549;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02550 = 2550;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02551 = 2551;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02552 = 2552;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02553 = 2553;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02554 = 2554;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02555 = 2555;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02556 = 2556;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02557 = 2557;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02558 = 2558;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02559 = 2559;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02560 = 2560;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02561 = 2561;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02562 = 2562;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02563 = 2563;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02564 = 2564;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02565 = 2565;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02566 = 2566;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02567 = 2567;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02568 = 2568;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02569 = 2569;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02570 = 2570;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02571 = 2571;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02572 = 2572;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02573 = 2573;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02574 = 2574;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02575 = 2575;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02576 = 2576;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02577 = 2577;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02578 = 2578;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02579 = 2579;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02580 = 2580;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02581 = 2581;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02582 = 2582;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02583 = 2583;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02584 = 2584;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02585 = 2585;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02586 = 2586;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02587 = 2587;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02588 = 2588;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02589 = 2589;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02590 = 2590;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02591 = 2591;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02592 = 2592;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02593 = 2593;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02594 = 2594;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02595 = 2595;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02596 = 2596;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02597 = 2597;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02598 = 2598;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02599 = 2599;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02600 = 2600;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02601 = 2601;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02602 = 2602;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02603 = 2603;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02604 = 2604;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02605 = 2605;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02606 = 2606;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02607 = 2607;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02608 = 2608;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02609 = 2609;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02610 = 2610;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02611 = 2611;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02612 = 2612;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02613 = 2613;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02614 = 2614;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02615 = 2615;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02616 = 2616;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02617 = 2617;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02618 = 2618;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02619 = 2619;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02620 = 2620;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02621 = 2621;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02622 = 2622;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02623 = 2623;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02624 = 2624;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02625 = 2625;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02626 = 2626;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02627 = 2627;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02628 = 2628;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02629 = 2629;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02630 = 2630;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02631 = 2631;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02632 = 2632;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02633 = 2633;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02634 = 2634;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02635 = 2635;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02636 = 2636;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02637 = 2637;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02638 = 2638;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02639 = 2639;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02640 = 2640;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02641 = 2641;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02642 = 2642;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02643 = 2643;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02644 = 2644;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02645 = 2645;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02646 = 2646;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02647 = 2647;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02648 = 2648;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02649 = 2649;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02650 = 2650;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02651 = 2651;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02652 = 2652;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02653 = 2653;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02654 = 2654;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02655 = 2655;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02656 = 2656;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02657 = 2657;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02658 = 2658;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02659 = 2659;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02660 = 2660;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02661 = 2661;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02662 = 2662;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02663 = 2663;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02664 = 2664;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02665 = 2665;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02666 = 2666;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02667 = 2667;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02668 = 2668;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02669 = 2669;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02670 = 2670;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02671 = 2671;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02672 = 2672;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02673 = 2673;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02674 = 2674;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02675 = 2675;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02676 = 2676;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02677 = 2677;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02678 = 2678;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02679 = 2679;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02680 = 2680;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02681 = 2681;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02682 = 2682;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02683 = 2683;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02684 = 2684;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02685 = 2685;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02686 = 2686;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02687 = 2687;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02688 = 2688;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02689 = 2689;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02690 = 2690;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02691 = 2691;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02692 = 2692;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02693 = 2693;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02694 = 2694;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02695 = 2695;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02696 = 2696;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02697 = 2697;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02698 = 2698;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02699 = 2699;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02700 = 2700;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02701 = 2701;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02702 = 2702;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02703 = 2703;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02704 = 2704;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02705 = 2705;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02706 = 2706;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02707 = 2707;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02708 = 2708;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02709 = 2709;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02710 = 2710;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02711 = 2711;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02712 = 2712;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02713 = 2713;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02714 = 2714;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02715 = 2715;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02716 = 2716;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02717 = 2717;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02718 = 2718;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02719 = 2719;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02720 = 2720;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02721 = 2721;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02722 = 2722;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02723 = 2723;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02724 = 2724;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02725 = 2725;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02726 = 2726;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02727 = 2727;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02728 = 2728;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02729 = 2729;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02730 = 2730;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02731 = 2731;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02732 = 2732;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02733 = 2733;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02734 = 2734;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02735 = 2735;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02736 = 2736;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02737 = 2737;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02738 = 2738;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02739 = 2739;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02740 = 2740;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02741 = 2741;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02742 = 2742;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02743 = 2743;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02744 = 2744;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02745 = 2745;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02746 = 2746;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02747 = 2747;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02748 = 2748;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02749 = 2749;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02750 = 2750;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02751 = 2751;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02752 = 2752;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02753 = 2753;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02754 = 2754;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02755 = 2755;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02756 = 2756;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02757 = 2757;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02758 = 2758;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02759 = 2759;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02760 = 2760;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02761 = 2761;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02762 = 2762;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02763 = 2763;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02764 = 2764;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02765 = 2765;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02766 = 2766;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02767 = 2767;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02768 = 2768;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02769 = 2769;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02770 = 2770;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02771 = 2771;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02772 = 2772;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02773 = 2773;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02774 = 2774;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02775 = 2775;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02776 = 2776;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02777 = 2777;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02778 = 2778;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02779 = 2779;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02780 = 2780;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02781 = 2781;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02782 = 2782;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02783 = 2783;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02784 = 2784;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02785 = 2785;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02786 = 2786;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02787 = 2787;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02788 = 2788;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02789 = 2789;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02790 = 2790;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02791 = 2791;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02792 = 2792;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02793 = 2793;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02794 = 2794;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02795 = 2795;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02796 = 2796;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02797 = 2797;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02798 = 2798;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02799 = 2799;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02800 = 2800;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02801 = 2801;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02802 = 2802;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02803 = 2803;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02804 = 2804;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02805 = 2805;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02806 = 2806;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02807 = 2807;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02808 = 2808;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02809 = 2809;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02810 = 2810;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02811 = 2811;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02812 = 2812;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02813 = 2813;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02814 = 2814;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02815 = 2815;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02816 = 2816;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02817 = 2817;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02818 = 2818;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02819 = 2819;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02820 = 2820;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02821 = 2821;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02822 = 2822;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02823 = 2823;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02824 = 2824;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02825 = 2825;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02826 = 2826;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02827 = 2827;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02828 = 2828;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02829 = 2829;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02830 = 2830;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02831 = 2831;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02832 = 2832;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02833 = 2833;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02834 = 2834;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02835 = 2835;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02836 = 2836;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02837 = 2837;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02838 = 2838;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02839 = 2839;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02840 = 2840;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02841 = 2841;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02842 = 2842;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02843 = 2843;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02844 = 2844;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02845 = 2845;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02846 = 2846;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02847 = 2847;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02848 = 2848;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02849 = 2849;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02850 = 2850;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02851 = 2851;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02852 = 2852;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02853 = 2853;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02854 = 2854;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02855 = 2855;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02856 = 2856;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02857 = 2857;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02858 = 2858;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02859 = 2859;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02860 = 2860;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02861 = 2861;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02862 = 2862;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02863 = 2863;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02864 = 2864;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02865 = 2865;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02866 = 2866;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02867 = 2867;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02868 = 2868;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02869 = 2869;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02870 = 2870;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02871 = 2871;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02872 = 2872;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02873 = 2873;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02874 = 2874;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02875 = 2875;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02876 = 2876;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02877 = 2877;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02878 = 2878;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02879 = 2879;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02880 = 2880;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02881 = 2881;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02882 = 2882;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02883 = 2883;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02884 = 2884;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02885 = 2885;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02886 = 2886;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02887 = 2887;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02888 = 2888;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02889 = 2889;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02890 = 2890;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02891 = 2891;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02892 = 2892;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02893 = 2893;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02894 = 2894;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02895 = 2895;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02896 = 2896;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02897 = 2897;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02898 = 2898;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02899 = 2899;
    kFLAGS.TIMES_ORGASM_VAGINAL = 2900;
    kFLAGS.TIMES_ORGASM_ANAL = 2901;
    kFLAGS.TIMES_ORGASM_DICK = 2902;
    kFLAGS.TIMES_ORGASM_TITS = 2903;
    kFLAGS.TIMES_ORGASM_NIPPLES = 2904;
    kFLAGS.TIMES_ORGASM_LIPS = 2905;
    kFLAGS.BIMBOSKIRT_MINIMUM_LUST = 2906;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02907 = 2907;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02908 = 2908;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02909 = 2909;
    kFLAGS.GRIMDARK_BACKGROUND_UNLOCKED = 2910; //2910-2949 possibly reserved for Grimdark Mode.
    kFLAGS.GRIMDARK_FACTORY_DOOR_UNLOCKED = 2911;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02912 = 2912;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02913 = 2913;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02914 = 2914;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02915 = 2915;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02916 = 2916;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02917 = 2917;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02918 = 2918;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02919 = 2919;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02920 = 2920;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02921 = 2921;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02922 = 2922;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02923 = 2923;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02924 = 2924;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02925 = 2925;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02926 = 2926;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02927 = 2927;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02928 = 2928;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02929 = 2929;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02930 = 2930;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02931 = 2931;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02932 = 2932;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02933 = 2933;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02934 = 2934;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02935 = 2935;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02936 = 2936;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02937 = 2937;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02938 = 2938;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02939 = 2939;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02940 = 2940;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02941 = 2941;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02942 = 2942;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02943 = 2943;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02944 = 2944;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02945 = 2945;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02946 = 2946;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02947 = 2947;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02948 = 2948;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02949 = 2949;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02950 = 2950;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02951 = 2951;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02952 = 2952;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02953 = 2953;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02954 = 2954;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02955 = 2955;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02956 = 2956;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02957 = 2957;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02958 = 2958;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02959 = 2959;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02960 = 2960;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02961 = 2961;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02962 = 2962;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02963 = 2963;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02964 = 2964;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02965 = 2965;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02966 = 2966;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02967 = 2967;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02968 = 2968;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02969 = 2969;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02970 = 2970;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02971 = 2971;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02972 = 2972;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02973 = 2973;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02974 = 2974;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02975 = 2975;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02976 = 2976;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02977 = 2977;
    kFLAGS.UNKNOWN_FLAG_NUMBER_02978 = 2978;
    kFLAGS.NEW_GAME_PLUS_LEVEL = 2979; // Current intensity of New Game+. Each ascension increments this counter by 1.
    kFLAGS.NEW_GAME_PLUS_BONUS_UNLOCKED_HERM = 2980; // Unlocked hermaphrodite.
    kFLAGS.USE_OLD_INTERFACE = 2981; // 1 if old interface is used, currently disabled until I can re-implement something that mimics the old interface.
    kFLAGS.IMAGEPACK_OFF = 2982; // 1 if imagepack is disabled.
    kFLAGS.SPRITE_STYLE = 2983; // 1 if old sprites are used.
    kFLAGS.AUTO_LEVEL = 2984; // 1 if automatic leveling is enabled.
    kFLAGS.SFW_MODE = 2985; // 1 if SFW is enabled.
    kFLAGS.WATERSPORTS_ENABLED = 2986; // 1 if watersport scenes are enabled.
    kFLAGS.USE_METRICS = 2987; // 0 for imperial, 1 for metric.
    kFLAGS.USE_OLD_FONT = 2988; // Side bar font.
    kFLAGS.BACKGROUND_STYLE = 2989; // Background theme.
    kFLAGS.GAME_DIFFICULTY = 2990; // 0 is normal, 1 is hard, 2 is nightmare, 3 is extreme. Affects HP and damage.
    kFLAGS.HARDCORE_MODE = 2991; // 0 is disabled, 1 is enabled. Forces save and causes deletion of save file on bad end.
    kFLAGS.HARDCORE_SLOT = 2992; // The current slot for hardcore mode. Forced autosave will save over the selected slot.
    kFLAGS.HUNGER_ENABLED = 2993; // Determines if hunger is enabled. 1 is enabled.
    kFLAGS.USE_12_HOURS = 2994; // 0 for 24-hour format, 1 for 12-hour format.
    kFLAGS.MEANINGLESS_CORRUPTION = 2995; // Raises corruption tolerance by 100.
    kFLAGS.ITS_EVERY_DAY = 2996; // all special calender events occur every day!
    kFLAGS.LOW_STANDARDS_FOR_ALL = 2997;
    kFLAGS.HYPER_HAPPY = 2998;
    kFLAGS.GRIMDARK_MODE = 2999; // Grimdark CoC! Do you wanna have a bad time?
})(kFLAGS || (kFLAGS = {}));
///<reference path="Appearance.ts"/>
///<reference path="player.ts"/>
///<reference path="kFLAGS.ts"/>
var Measurements = (function () {
    function Measurements(game) {
        this.game = game;
    }
    Measurements.prototype.footInchOrMetres = function (inches, precision) {
        if (precision === void 0) { precision = 2; }
        if (this.game.flags[kFLAGS.USE_METRICS])
            return (Math.round(inches * 2.54) / Math.pow(10, precision)).toFixed(precision) + " metres";
        return Math.floor(inches / 12) + " foot " + inches % 12 + " inch";
    };
    Measurements.prototype.numInchesOrCentimetres = function (inches) {
        if (inches < 1)
            return this.inchesOrCentimetres(inches);
        var value = Math.round(inches);
        if (this.game.flags[kFLAGS.USE_METRICS]) {
            value = Math.round(inches * 2.54);
            return num2Text(value) + (value == 1 ? " centimetre" : " centimetres");
        }
        if (inches % 12 == 0)
            return (inches == 12 ? "a foot" : num2Text(inches / 12) + " feet");
        return num2Text(value) + (value == 1 ? " inch" : " inches");
    };
    Measurements.prototype.inchesOrCentimetres = function (inches, precision) {
        if (precision === void 0) { precision = 1; }
        var value = Math.round(this.inchToCm(inches) * Math.pow(10, precision)) / Math.pow(10, precision);
        var text = value + (this.game.flags[kFLAGS.USE_METRICS] ? " centimetre" : " inch");
        if (value == 1)
            return text;
        return text + (this.game.flags[kFLAGS.USE_METRICS] ? "s" : "es");
    };
    Measurements.prototype.shortSuffix = function (inches, precision) {
        if (precision === void 0) { precision = 1; }
        var value = Math.round(this.inchToCm(inches) * Math.pow(10, precision)) / Math.pow(10, precision);
        return value + (this.game.flags[kFLAGS.USE_METRICS] ? "-cm" : "-inch");
    };
    Measurements.prototype.inchToCm = function (inches) {
        return this.game.flags[kFLAGS.USE_METRICS] ? inches * 2.54 : inches;
    };
    return Measurements;
}());
var TimeModel = (function () {
    function TimeModel() {
        this.minutes = 0;
        this.hours = 0;
        this.days = 0;
    }
    return TimeModel;
}());
var GameModel = (function () {
    function GameModel() {
        this.time = new TimeModel();
    }
    return GameModel;
}());
var PrisonCaptor = (function () {
    function PrisonCaptor() {
        this.captorTitle = "captorTitle";
        this.captorName = "captorName";
        this.captorPronoun1 = "captorPronoun1";
        this.captorPronoun2 = "captorPronoun2";
        this.captorPronoun3 = "captorPronoun3";
    }
    return PrisonCaptor;
}());
var PrisonClass = (function () {
    function PrisonClass() {
        this.prisonCaptor = new PrisonCaptor();
    }
    return PrisonClass;
}());
var CoC = (function () {
    function CoC() {
        this.player = new Player();
        this.monster = this.player;
        this.player2 = this.player;
        this.model = new GameModel();
        this.measurements = new Measurements(this);
        this.flags = {};
        this.prison = new PrisonClass();
        this.flags[kFLAGS.AKBAL_TIMES_BITCHED] = 69;
    }
    Object.defineProperty(CoC.prototype, "kFLAGS_REF", {
        //noinspection JSUnusedGlobalSymbols
        get: function () {
            return kFLAGS;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return CoC;
}());
function attrGet(game, attr) {
    try {
        return eval("game." + attr);
    }
    catch (e) {
        console.error("On evaluating " + attr);
        console.error(e);
        return "/!\\ JavaScript Error";
    }
}
function attrSet(game, attr, value) {
    try {
        eval("(function(game,value){game." + attr + "=value;})")(game, value);
    }
    catch (e) {
        console.error("On evaluating " + attr);
        console.error(e);
    }
}
var kGAMECLASS = new CoC();
///<reference path="impl.ts"/>
var textarea;
var previews = [];
var Preview;
(function (Preview) {
})(Preview || (Preview = {}));
function regenOne(preview) {
    var src = textarea.val();
    preview.ui.status.text("rendering...");
    _.defer(function () {
        Rng.state = (preview.seed = preview.ui.seed.val() | 0);
        for (var _i = 0, _a = preview.ui.attrs.toArray(); _i < _a.length; _i++) {
            var a = _a[_i];
            var v = a.value;
            var type = a.dataset.type;
            if (type == 'boolean')
                v = v === 'true';
            attrSet(preview.game, a.name, v);
        }
		var options = {};
		for (var _b = 0, _c = preview.ui.flags.toArray(); _b < _c.length; _b++) {
			var a = _c[_b];
			options[a.name] = a.checked;
		}
        var format = $('#sourceformat').val();
        kGAMECLASS = preview.game;
        var t0 = new Date();
        var s;
        switch (format) {
            case 'cocparser':
                s = preview.parser_old.recursiveParser(src);
                break;
            case 'parser2':
				s = evalText(new GameContext(preview.game, undefined), parse(Lexer.lexrun(src, options), options));
                break;
            default:
                console.error("Format not supported", format);
        }
        preview.ui.status.text("almost there");
        _.defer(function () {
            preview.ui.content.html(s);
            var t1 = new Date();
            preview.ui.status.text("done in " + (t1.getTime() - t0.getTime()).toFixed() + "ms");
        });
    });
}
function regen() {
    _.forEach(previews, regenOne);
}
function setupPreview(container, game) {
    if (game === void 0) { game = new CoC(); }
    container.html("").append(Preview.template.clone());
    var p = {
        ui: {
            content: container.find("[data-role=content]"),
            container: container,
            status: container.find("[data-role=status]"),
            seed: container.find("[name=seed]"),
			flags: container.find("[data-role=flag]"),
            attrs: container.find("[data-role=attr]"),
            attrLists: container.find("[data-role=attrlist]").toArray().map(function (element) {
                return {};
            })
        },
        parser_old: new OldParser(game, {}),
        game: game,
        seed: Rng.gen_state()
    };
    var updater = _.debounce(_.partial(regenOne, p), 300);
    p.ui.seed.val(p.seed).on("input", updater);
    p.ui.attrs.on("input", updater);
	p.ui.flags.on("change", updater);
    for (var _i = 0, _a = p.ui.attrs.toArray(); _i < _a.length; _i++) {
        var a = _a[_i];
        a.value = attrGet(p.game, a.name);
    }
    return p;
}
var StartChars = [
    function (player, game) {
        player.short = "Aria";
        if (!player.hasVagina())
            player.createVagina();
        if (player.femininity < 80)
            player.femininity = 80;
        player.createPerk("BimboBody");
        player.createPerk("BimboBrains");
        player.tailType = TAIL_TYPE_FOX;
        player.tailVenom = 9;
        player.createPerk("EnlightenedNinetails");
        player.breastRows[0].breastRating = 5;
        player.femininity = 100;
        player.lowerBody = LOWER_BODY_TYPE_DEMONIC_HIGH_HEELS;
        player.skinTone = "pink";
        player.skinType = SKIN_TYPE_FUR;
		player.skinAdj = "sexy";
        player.skinDesc = "fur";
		player["oldskin"] = player.skin;
		player["skin"] = _.extend(function () { return player["oldskin"](); }, {
			noun: function () { return player.skinDesc; },
			long: function () { return player["oldskin"](); },
			full: function () { return player["oldskin"](); },
			is: "is",
			color: function () { return player.skinTone; },
			extra: 0,
			neck: function () { return player["skin"]; }
		});
        player.furColor = "pink";
        player.hairColor = "pink";
        player.hairLength = 50;
        player.hipRating = 5;
        player.buttRating = 5;
        player.thickness = 10;
        game.flags[kFLAGS.PC_FETISH] = FetishManager.FETISH_BONDAGE;
        player.earsPierced = 1;
        player.earsPShort = "green gem-stone handcuffs";
        player.earsPLong = "Green gem-stone handcuffs";
        player.nipplesPierced = 1;
        player.nipplesPShort = "seamless black nipple-studs";
        player.nipplesPLong = "Seamless black nipple-studs";
        game.flags[kFLAGS.PC_FETISH] = FetishManager.FETISH_BONDAGE;
        player.vaginas[0].clitPierced = 1;
        player.vaginas[0].clitPShort = "emerald clit-stud";
        player.vaginas[0].clitPLong = "Emerald clit-stud";
        player.vaginas[0].labiaPierced = 2;
        player.vaginas[0].labiaPShort = "ruby labia-rings";
        player.vaginas[0].labiaPLong = "Ruby labia-rings";
        player.createPerk("ElvenBounty");
        player.createPerk("PureAndLoving");
        player.createPerk("SensualLover");
        player.createPerk("OneTrackMind");
        player.weaponName = "succubi whip";
        player.armorName = "skimpy nurse's outfit";
    },
    function (player) {
        player.short = "Betram";
        player.earType = EARS_FOX;
        player.tailType = TAIL_TYPE_FOX;
        player.tailVenom = 1;
		player["oldskin"] = player.skin;
		player["skin"] = _.extend(function () { return player["oldskin"](); }, {
			noun: function () { return player.skinDesc; },
			long: function () { return player["oldskin"](); },
			full: function () { return player["oldskin"](); },
			is: "is",
			color: function () { return player.skinTone; },
			extra: _.extend(function () { return 'green scales'; }, {
				noun: 'scales',
				long: 'green scales',
				full: 'green scales',
				is: 'are',
				color: 'green'
			}),
			neck: function () { return player["skin"]["extra"]; }
		});
        if (player.biggestTitSize() > 1)
            player.breastRows[0].breastRating = 1;
        if (!player.hasCock()) {
            player.createCock(CockTypesEnum.DOG, 8, 1);
            player.cocks[0].knotMultiplier = 1.4;
        }
        if (!player.hasVagina()) {
            player.createVagina();
            player.vaginas[0].vaginalWetness = VAGINA_WETNESS_WET;
            player.vaginas[0].clitLength = 0.25;
        }
    }
];
$(function () {
    textarea = $("#source");
	textarea.val(textarea.data("init").split(',').map(function (i) {
		return ($(i).html() || "").trim();
	}).join("\n<hr>\n"));
    Preview.template = $("#preview-1 > *").clone();
    for (var i = 0; i < StartChars.length; i++) {
        var game = new CoC();
        StartChars[i](game.player, game);
        var preview = setupPreview($("#preview-" + (i + 1)), game);
        previews.push(preview);
    }
    textarea.on("input change", _.debounce(regen, 300));
    regen();
});
var TokenType;
(function (TokenType) {
	TokenType[TokenType["TEXT"] = 0] = "TEXT";
	TokenType[TokenType["SEPARATOR"] = 1] = "SEPARATOR";
	TokenType[TokenType["XMLOPEN"] = 2] = "XMLOPEN";
	TokenType[TokenType["XMLCLOSE"] = 3] = "XMLCLOSE";
	TokenType[TokenType["XMLSINGLE"] = 4] = "XMLSINGLE";
	TokenType[TokenType["NUMBER"] = 5] = "NUMBER";
	TokenType[TokenType["WORD"] = 6] = "WORD";
	TokenType[TokenType["DOT"] = 7] = "DOT";
	TokenType[TokenType["COLON"] = 8] = "COLON";
	TokenType[TokenType["SEMICOLON"] = 9] = "SEMICOLON";
	TokenType[TokenType["QUESTION"] = 10] = "QUESTION";
	TokenType[TokenType["COMMA"] = 11] = "COMMA";
	TokenType[TokenType["STRING"] = 12] = "STRING";
	TokenType[TokenType["OPERATOR"] = 13] = "OPERATOR";
	TokenType[TokenType["SBOPEN"] = 14] = "SBOPEN";
	TokenType[TokenType["SBCLOSE"] = 15] = "SBCLOSE";
	//CBOPEN, // {
	//CBCLOSE, // }
	TokenType[TokenType["PAROPEN"] = 16] = "PAROPEN";
	TokenType[TokenType["PARCLOSE"] = 17] = "PARCLOSE";
	TokenType[TokenType["COMMENT"] = 18] = "COMMENT"; // [# ... #]
})(TokenType || (TokenType = {}));
function isToken(t) {
	return typeof t === "object"
		&& t !== null
		&& 'type' in t
		&& 'content' in t
		&& 'from' in t
		&& 'to' in t;
}
function tok2str(t, pad, limit) {
	if (pad === void 0) { pad = false; }
	if (limit === void 0) { limit = 20; }
	var c = t.content;
	var s;
	if (typeof c == "string") {
		s = (c.length > limit) ? c.substr(0, limit - 1) + "…" : strrpad(c, pad ? limit : 0);
	}
	else if (Array.isArray(c)) {
		s = c[0] + (c[1] ? ' ' + c[1] : c[1]);
	}
	else
		s = "" + c;
	return strrpad(TokenType[t.type], pad ? 8 : 0) + ' ' + s + "@" + t.from + ":" + t.to;
}
var Lexer;
(function (Lexer) {
    Lexer.DecimalRex = /^[+-]?(\d+\.\d*|\.\d+|\d+)(e[+-]?\d+)?/i;
    Lexer.HexRex = /^[+-]?0x\d{1,8}/i;
    Lexer.IdentifierRex = /^[a-z_$][a-z_$0-9]*/i;
    Lexer.XmlOpRex = /^<([a-z0-9_-]+) *([^[\]\n<>])*>/i;
    Lexer.XmlSingleRex = /^<([a-z0-9_-]+) *([^[\]\n<>])*\/>/i;
    Lexer.XmlCloseRex = /^<\/([a-z0-9_-]+) *([^[\]\n<>])*>/i;
    Lexer.TextRex = /^[^<\\[|\]\n]+/;
	Lexer.Operators = ['===', '>>>', '<<', '>>', '!==', '==', '!=', '<=', '>=', '>', '<', '++', '--', '**', '&&', '||', '+', '-', '~', '*', '/', '%', '^', '=', '!'];
    Lexer.ReservedWords = ["if", "screen", "button"];
    var LexerStateType;
    (function (LexerStateType) {
        LexerStateType[LexerStateType["TEXT"] = 0] = "TEXT";
        LexerStateType[LexerStateType["SUBTEXT"] = 1] = "SUBTEXT";
        LexerStateType[LexerStateType["EXPR"] = 2] = "EXPR";
        LexerStateType[LexerStateType["EOF"] = 3] = "EOF";
    })(LexerStateType = Lexer.LexerStateType || (Lexer.LexerStateType = {}));
    function LexerStateFlags() {
        return { "(": 0 };
    }
    Lexer.LexerStateFlags = LexerStateFlags;
    function lexstep(lexerState, _a) {
        var _b = _a.allowNewlineEscape, allowNewlineEscape = _b === void 0 ? true : _b, _c = _a.convertNewlines, convertNewlines = _c === void 0 ? true : _c, _d = _a.debugLexer, debugLexer = _d === void 0 ? false : _d;
        var input = lexerState.input, pos = lexerState.pos, stack = lexerState.stack;
        var stack0 = stack;
        var pos0 = pos;
        stack = stack.slice();
        var _e = stack[stack.length - 1], top = _e[0], flags = _e[1];
        var rslt = [];
        var x;
        var s = input.slice(pos);
        switch (top) {
            case LexerStateType.TEXT:
            case LexerStateType.SUBTEXT:
                var buffer = '', next = null;
                while (next == null && s.length > 0) {
                    var c0_1 = s[0], c1_1 = s[1], l_1 = 0, y_1 = void 0;
                    if ((x = s.match(Lexer.TextRex))) {
                        l_1 = (y_1 = x[0]).length;
                        buffer += y_1;
                    }
                    else {
                        switch (c0_1) {
                            case '\r':
                            case '\n':
                                if (convertNewlines) {
                                    l_1 = (c0_1 == '\r' && c1_1 == '\n') ? 2 : 1;
									next = {
										type: TokenType.XMLSINGLE,
										content: "<br/>",
										tag: "br",
										attributes: "",
										from: pos,
										to: pos + l_1
									};
                                }
                                else {
                                    l_1 = 1;
                                    buffer += c0_1;
                                }
                                break;
                            case '|':
                                l_1 = 1;
                                if (top == LexerStateType.SUBTEXT) {
                                    next = { type: TokenType.SEPARATOR, from: pos, to: pos + l_1, content: c0_1 };
                                }
                                else {
                                    buffer += c0_1;
                                }
                                break;
                            case ']':
                                if (top == LexerStateType.SUBTEXT) {
                                    l_1 = 1;
                                    stack.pop();
                                    stack.pop();
                                    next = { type: TokenType.SBCLOSE, from: pos, to: pos + 1, content: c0_1 };
                                }
                                else {
                                    l_1 = 1;
                                    buffer += c0_1;
                                }
                                break;
                            case '<':
                                var ttype = void 0;
                                if ((x = s.match(Lexer.XmlCloseRex))) {
                                    ttype = TokenType.XMLCLOSE;
                                }
                                else if ((x = s.match(Lexer.XmlSingleRex))) {
                                    ttype = TokenType.XMLSINGLE;
                                }
                                else if ((x = s.match(Lexer.XmlOpRex))) {
                                    ttype = TokenType.XMLOPEN;
                                }
                                else {
                                    buffer += c0_1;
                                    l_1 = 1;
                                    break;
                                }
                                l_1 = x[0].length;
								next = {
									type: ttype,
									content: x[0],
									tag: x[1].toLowerCase(),
									attributes: x[2] || "",
									from: pos,
									to: pos + l_1
								};
                                break;
                            case '\\':
                                switch (c1_1) {
                                    case '[':
                                    case ']':
                                    case '|':
                                        buffer += c1_1;
                                        l_1 = 2;
                                        break;
                                    case '\n':
                                        l_1 = 2;
                                        if (!allowNewlineEscape) {
                                            buffer += c0_1;
                                            buffer += c1_1;
                                        }
                                        break;
                                    default:
                                        buffer += c0_1;
                                        l_1 = 1;
                                        break;
                                }
                                break;
                            case '[':
                                if (c1_1 == '#') {
                                    l_1 = s.indexOf('#]');
                                    if (l_1 >= 0) {
                                        next = {
											type: TokenType.COMMENT,
											content: s.slice(2, l_1),
											from: pos,
											to: pos + l_1 + 2
                                        };
                                        l_1 += 2;
                                    }
                                    else {
                                        console.warn("Comment not closed, state=", LexerStateType[top], " pos=", pos, " buffer.length=", buffer.length, " c0=", c0_1);
                                        buffer += c0_1;
                                        l_1 = 1;
                                    }
                                }
                                else {
                                    next = { type: TokenType.SBOPEN, content: '[', from: pos, to: pos + 1 };
                                    stack.push([LexerStateType.EXPR, LexerStateFlags()]);
                                    l_1 = 1;
                                }
                                break;
                            default:
                                console.warn("Lexer pitfall, state=", LexerStateType[top], " pos=", pos, " buffer.length=", buffer.length, " c0=", c0_1);
                                buffer += c0_1;
                                l_1 = 1;
                        }
                    }
                    pos += l_1;
                    s = s.slice(l_1);
                }
                if (buffer.length > 0) {
                    var topos = pos;
                    if (next != null)
                        topos = next.from;
                    rslt.push({ type: TokenType.TEXT, content: buffer, from: pos0, to: topos });
                }
                if (next != null)
                    rslt.push(next);
                break;
            case LexerStateType.EXPR:
                var c0 = s[0], c1 = s[1], l = 0, y = "";
                var s3_1 = s.substr(0, 3);
                if ((x = s.match(/^\s+/))) {
                    l = x[0].length;
                }
                else if ((x = s.match(Lexer.IdentifierRex))) {
                    l = (y = x[0]).length;
                    rslt.push({
						type: TokenType.WORD, content: y, from: pos, to: pos + l
                    });
                }
                else if ((x = s.match(Lexer.DecimalRex)) || (x = s.match(Lexer.HexRex))) {
                    l = (y = x[0]).length;
                    rslt.push({ type: TokenType.NUMBER, content: y, value: +y, from: pos, to: pos + l });
                }
                else if ((y = Lexer.Operators.filter(function (i) { return s3_1.indexOf(i) === 0; })[0])) {
                    l = y.length;
                    rslt.push({
                        type: TokenType.OPERATOR, content: y, from: pos, to: pos + l
                    });
                }
                else {
                    switch (c0) {
                        case ']':
                            stack.pop();
                            rslt.push({ type: TokenType.SBCLOSE, from: pos, to: pos + l, content: c0 });
                            l = 1;
                            break;
                        case '(':
                            l = 1;
							rslt.push({type: TokenType.PAROPEN, content: '(', from: pos, to: pos + 1});
                            flags['(']++;
                            break;
                        case ')':
                            flags['(']--;
                            l = 1;
                            rslt.push({ type: TokenType.PARCLOSE, content: ')', from: pos, to: pos + 1 });
                            if (flags['('] == 0) {
                                stack.push([LexerStateType.SUBTEXT, LexerStateFlags()]);
                            }
							break;
						case ':':
						case ',':
                        case '.':
						case ';':
						case '?':
                            l = 1;
							rslt.push({
								type: {
									'.': TokenType.DOT,
									',': TokenType.COMMA,
									';': TokenType.SEMICOLON,
									'?': TokenType.QUESTION,
									':': TokenType.COLON,
								}[c0], content: c0, from: pos, to: pos + l
							});
                            break;
                        case '"':
                        case "'":
                            l = 1;
                            if (c1 != c0) {
                                var i = s.indexOf(c0, l);
                                if (i == -1) {
                                    l = s.length - 2;
                                    break;
                                }
                                while (i > 0 && s[i - 1] == '\\') {
                                    l = i + 1;
                                    i = s.indexOf(c0, l);
                                }
                                l = i;
                            }
                            var buffer_1 = s.substr(1, l - 1).replace(/\\(.)/g, '$1');
                            l++;
                            rslt.push({ type: TokenType.STRING, content: buffer_1, from: pos, to: pos + l });
                            break;
                        default:
                            console.warn("Lexer pitfall, state=", LexerStateType[top], "pos=", pos, " c0=", c0);
                            l = 1;
                    }
                }
                pos += l;
                break;
            case LexerStateType.EOF:
                break;
        }
        if (pos >= input.length) {
            stack.pop();
            stack.push([LexerStateType.EOF, LexerStateFlags()]);
        }
        if (debugLexer) {
			console.debug.apply(console, ["Lexer @", strrpad(pos0, 5), "["].concat(stack0.map(function (i) { return LexerStateType[i[0]]; }), ["] => "], (rslt.map(tok2str))));
        }
        return {
			tokens: rslt, state: {input: input, pos: pos, stack: stack, top: stack[stack.length - 1]}
        };
    }
    Lexer.lexstep = lexstep;
    function lexrun(input, options) {
        if (options === void 0) { options = {}; }
        var tokens = [];
        var stack = [[LexerStateType.TEXT, LexerStateFlags()]];
        var state = {
            input: input, pos: 0, stack: stack, top: stack[stack.length - 1]
        };
        var brk = 0;
        while (state.top[0] != LexerStateType.EOF) {
            var rslt = lexstep(state, options);
            tokens.push.apply(tokens, rslt.tokens);
            if (rslt.state.pos <= state.pos) {
                brk++;
                if (brk >= 3) {
                    console.error("Lexer stuck in state", LexerStateType[state.top[0]], "at", state.pos);
                    break;
                }
            }
            else {
                brk = 0;
            }
            if (state.top == rslt.state.top && state.pos == rslt.state.pos) {
                console.error("Lexer stuck in state", LexerStateType[state.top[0]], "at", state.pos);
                break;
            }
            state = rslt.state;
        }
        return tokens;
    }
    Lexer.lexrun = lexrun;
})(Lexer || (Lexer = {}));
///<reference path="conditionalConverters.ts"/>
var trace = console.trace;
var OldParser = (function () {
    /**
     * @param ownerClass main game class. Variables are looked-up in this class.
     * @param settingsClass global static class used for shoving conf vars around
     */
    function OldParser(ownerClass, settingsClass) {
        this.ownerClass = ownerClass;
        this.settingsClass = settingsClass;
        this.debug = false;
        this.logErrors = true;
        /*
         Parser Syntax:
    
         // Querying simple PC stat nouns:
         [noun]
    
         Conditional statements:
         // Simple if statement:
         [if (condition) OUTPUT_IF_TRUE]
         // If-Else statement
         [if (condition) OUTPUT_IF_TRUE | OUTPUT_IF_FALSE]
         // Note - Implicit else indicated by presence of the "|"
    
         // Object aspect descriptions
         [object aspect]
         // gets the description of aspect "aspect" of object/NPC/PC "object"
         // Eventually, I want this to be able to use introspection to access class attributes directly
         // Maybe even manipulate them, though I haven't thought that out much at the moment.
    
         // Gender Pronoun Weirdness:
         // PRONOUNS: The parser uses Elverson/Spivak Pronouns specifically to allow characters to be written with non-specific genders.
         // http://en.wikipedia.org/wiki/Spivak_pronoun
         //
         // Cheat Table:
         //           | Subject    | Object       | Possessive Adjective | Possessive Pronoun | Reflexive         |
         // Agendered | ey laughs  | I hugged em  | eir heart warmed     | that is eirs       | ey loves emself   |
         // Masculine | he laughs  | I hugged him | his heart warmed     | that is his        | he loves himself  |
         // Feminine  | she laughs | I hugged her | her heart warmed     | that is hers       | she loves herself |
    
    
    
         [screen (SCREEN_NAME) | screen text]
         // creates a new screen/page.
    
         [button (SCREEN_NAME)| button_text]
         // Creates a button which jumps to SCREEN_NAME when clicked
    
         */
        // this.parserState is used to store the scene-parser state.
        // it is cleared every time recursiveParser is called, and then any scene tags are added
        // as parserState["sceneName"] = "scene content"
        this.parserState = {};
    }
    // Does lookup of single argument tags ("[cock]", "[armor]", etc...) in singleArgConverters
    // Supported variables are the options listed in the above
    // singleArgConverters object. If the passed argument is found in the above object,
    // the corresponding anonymous function is called, and it's return-value is returned.
    // If the arg is not present in the singleArgConverters object, an error message is
    // returned.
    // ALWAYS returns a string
    OldParser.prototype.convertSingleArg = function (depth, arg) {
        if (this.debug)
            console.debug("  convertSingleArg", arg);
        var argResult = null;
        var mustCapitalize = isUpperCase(arg.charAt(0));
        var argLower;
        argLower = arg.toLowerCase();
        if (argLower in singleArgConverters) {
            if (this.debug)
                console.debug("    is singleArgConverter", argLower);
            argResult = singleArgConverters[argLower](this.ownerClass);
            if (this.debug)
                console.debug("      =>", argResult);
            if (mustCapitalize)
                argResult = capitalize(argResult);
            return wrapeval(depth, argResult);
        }
        else {
            var obj = this.getObjectFromString(this.ownerClass, arg);
            if (obj != null) {
                if (this.debug)
                    console.debug("    In owner class:", typeof obj, obj);
                if (obj instanceof Function) {
                    var rslt = obj();
                    if (this.debug)
                        console.debug("      is function =>", rslt);
                    return wrapeval(depth, rslt);
                }
                else {
                    return wrapeval(depth, obj);
                }
            }
            else {
                if (this.debug || this.logErrors)
                    console.warn("    No lookup found for", arg, "search result is:", typeof obj, obj);
                return errstr("!Unknown tag \"" + arg + "\"!");
            }
        }
    };
    OldParser.prototype.convertDoubleArg = function (depth, inputArg) {
        var argResult = null;
        var thing;
        var argTemp = inputArg.split(" ");
        if (argTemp.length != 2) {
            if (this.logErrors)
                console.warn("  Not a two word tag", inputArg, argTemp);
            return errstr("!Not actually a two-word tag!\"" + inputArg + "\"!");
        }
        var subject = argTemp[0];
        var aspect = argTemp[1];
        var subjectLower = argTemp[0].toLowerCase();
        var aspectLower = argTemp[1].toLowerCase();
        if (this.debug)
            console.debug("  convertDoubleArg, subject =", subject, ", aspect =", aspect);
        // Figure out if we need to capitalize the resulting text
        var mustCapitalize = isUpperCase(aspect.charAt(0));
        // Only perform lookup in twoWordNumericTagsLookup if aspect can be cast to a valid number
        if ((subjectLower in twoWordNumericTagsLookup) && !isNaN(+aspect)) {
            aspectLower = +aspectLower;
            if (this.debug)
                console.debug("    is twoWordNumericTag", aspectLower);
            argResult = twoWordNumericTagsLookup[subjectLower](this.ownerClass, aspectLower);
            if (mustCapitalize)
                argResult = capitalize(argResult);
            if (this.debug)
                console.debug("      =>", argResult);
            return wrapeval(depth, argResult);
        }
        // aspect isn't a number. Look for subject in the normal twoWordTagsLookup
        if (subjectLower in twoWordTagsLookup) {
            var twoWordGroup = twoWordTagsLookup[subjectLower];
            if (aspectLower in twoWordGroup) {
                if (this.debug)
                    console.debug("    is twoWordTag", subjectLower, aspectLower);
                argResult = twoWordGroup[aspectLower](this.ownerClass);
                if (mustCapitalize)
                    argResult = capitalize(argResult);
                if (this.debug)
                    console.debug("      =>", argResult);
                return wrapeval(depth, argResult);
            }
            else {
                if (this.logErrors)
                    console.warn("    Is a two-word tag but not an aspect, Input:", inputArg, "Aspect:", aspectLower);
                return errstr("!Unknown aspect in two-word tag \"" + inputArg + "\"! ASCII Aspect = \"" + aspectLower + "\"");
            }
        }
        //if (this.debug) console.debug("    testing parent");
        var descriptorArray = subject.split(".");
        thing = this.getObjectFromString(this.ownerClass, descriptorArray[0]);
        var aspectLookup = this.getObjectFromString(this.ownerClass, aspect);
        if (thing != null) {
            if (this.debug)
                console.debug("    in owner class:", typeof thing, thing);
            if (thing instanceof Function) {
                var argResult_1 = thing(aspect);
                if (this.debug)
                    console.debug("      is function", argResult_1);
                return wrapeval(depth, argResult_1);
            }
            else if (Array.isArray(thing)) {
                var index = +aspectLower;
                if (isNaN(index)) {
                    if (this.logErrors)
                        console.warn("      is array, but index is non-number, Input:", inputArg, "Subject:", subject, "Aspect:", aspect);
                    return errstr("Cannot use non-number as index to Array \"" + inputArg + "\"! Subject = \"" + subject + ", Aspect = " + aspect + "\"");
                }
                else {
                    argResult = thing[index];
                    if (this.debug)
                        console.debug("      is array =>", argResult);
                    return wrapeval(depth, argResult);
                }
            }
            else if (typeof thing == "object") {
                if (aspectLookup in thing) {
                    return wrapeval(depth, thing[aspectLookup]);
                }
                else if (aspect in thing) {
                    return wrapeval(depth, thing[aspect]);
                }
                else {
                    if (this.logErrors)
                        console.debug("WARNING: Object does not have aspect as a member. Arg: " + inputArg + " Subject: " + subject + " Aspect:" + aspect + " or " + aspectLookup);
                    return errstr("Object does not have aspect as a member \"" + inputArg + "\"! Subject = \"" + subject + ", Aspect = " + aspect + " or " + aspectLookup + "\"");
                }
            }
            else {
                if (this.debug)
                    console.warn("      Non-container subject", thing, "with an aspect", aspect);
                return wrapeval(depth, thing);
            }
        }
        if (this.debug || this.logErrors)
            console.debug("WARNING: No lookup found for", inputArg, " search result is: ", thing);
        return errstr("!Unknown subject in two-word tag \"" + inputArg + "\"! Subject = \"" + subject + ", Aspect = " + aspect + "\"");
        // return Parser.errstr("!Unknown tag \"" + arg + "\"!");
    };
    // converts a single argument to a conditional to
    // the relevant value, either by simply converting to a number, or
    // through lookup in the above conditionalOptions oject, and then calling the
    // relevant function
    // Realistally, should only return either boolean or numbers.
    OldParser.prototype.convertConditionalArgumentFromStr = function (arg) {
        // convert the string contents of a conditional argument into a meaningful variable.
        var argLower = arg.toLowerCase();
        var argResult = -1;
        // Note: Case options MUST be ENTIRELY lower case. The comparaison string is converted to
        // lower case before the switch:case section
        // Try to cast to a number. If it fails, go on with the switch/case statement.
        if (!isNaN(+arg)) {
            if (this.debug)
                console.debug("WARNING: Converted to float. number = ", +arg);
            return +arg;
        }
        if (argLower in conditionalOptions) {
            if (this.debug)
                console.debug("WARNING: Found corresponding anonymous function");
            argResult = conditionalOptions[argLower](this.ownerClass);
            if (this.debug)
                console.debug("WARNING: Called, return = ", argResult);
            return argResult;
        }
        var obj = this.getObjectFromString(this.ownerClass, arg);
        if (this.debug)
            console.debug("WARNING: Looked up ", arg, " in ", this.ownerClass, "Result was:", obj);
        if (obj != null) {
            if (this.debug)
                console.debug("WARNING: Found corresponding function for conditional argument lookup.");
            if (obj instanceof Function) {
                if (this.debug)
                    console.debug("WARNING: Found corresponding function in owner class");
                argResult = +obj();
                return argResult;
            }
            else {
                if (this.debug)
                    console.debug("WARNING: Found corresponding aspect in owner class");
                argResult = +obj;
                return argResult;
            }
        }
        else {
            if (this.debug || this.logErrors)
                console.debug("WARNING: No lookups found!");
            return null;
        }
        /*if (this.printConditionalEvalDebug || LogErrors) console.debug("WARNING: Could not convert to number. Evaluated ", arg, " as", argResult);
         return argResult;*/
    };
    // Evaluates the conditional section of an if-statement.
    // Does the proper parsing and look-up of any of the special nouns
    // which can be present in the conditional
    OldParser.prototype.evalConditionalStatementStr = function (textCond) {
        // Evaluates a conditional statement:
        // (varArg1 [conditional] varArg2)
        // varArg1 & varArg2 can be either numbers, or any of the
        // strings in the "conditionalOptions" object above.
        // numbers (which are in string format) are converted to a number type
        // prior to comparison.
        // supports multiple comparison operators:
        // "=", "=="  - Both are Equals or equivalent-to operators
        // "<", ">    - Less-Than and Greater-Than
        // "<=", ">=" - Less-than or equal, greater-than or equal
        // "!="       - Not equal
        // proper, nested parsing of statements is a WIP
        // and not supported at this time.
        var isExp = /([\w\.]+)\s?(==|=|!=|<|>|<=|>=)\s?([\w\.]+)/;
        var expressionResult = isExp.exec(textCond);
        if (!expressionResult) {
            var condArg = this.convertConditionalArgumentFromStr(textCond);
            if (condArg != null) {
                if (this.debug)
                    console.debug("WARNING: Conditional \"", textCond, "\" Evalueated to: \"", condArg, "\"");
                return condArg;
            }
            else {
                if (this.logErrors)
                    console.debug("WARNING: Invalid conditional! \"(", textCond, ")\" Conditionals must be in format:");
                if (this.logErrors)
                    console.debug("WARNING:  \"({statment1} (==|=|!=|<|>|<=|>=) {statement2})\" or \"({valid variable/function name})\". ");
                return false;
            }
        }
        if (this.debug)
            console.debug("WARNING: Expression = ", textCond, "Expression result = [", expressionResult, "], length of = ", expressionResult.length);
        var condArgStr1 = expressionResult[1];
        var operator = expressionResult[2];
        var condArgStr2 = expressionResult[3];
        var retVal = false;
        var condArg1 = this.convertConditionalArgumentFromStr(condArgStr1);
        var condArg2 = this.convertConditionalArgumentFromStr(condArgStr2);
        //Perform check
        if (operator == "=")
            retVal = (condArg1 == condArg2);
        else if (operator == ">")
            retVal = (condArg1 > condArg2);
        else if (operator == "==")
            retVal = (condArg1 == condArg2);
        else if (operator == "<")
            retVal = (condArg1 < condArg2);
        else if (operator == ">=")
            retVal = (condArg1 >= condArg2);
        else if (operator == "<=")
            retVal = (condArg1 <= condArg2);
        else if (operator == "!=")
            retVal = (condArg1 != condArg2);
        else
            retVal = (condArg1 != condArg2);
        if (this.debug)
            console.debug("WARNING: Check: " + condArg1 + " " + operator + " " + condArg2 + " result: " + retVal);
        return retVal;
    };
    // Splits the result from an if-statement.
    // ALWAYS returns an array with two strings.
    // if there is no else, the second string is empty.
    OldParser.prototype.splitConditionalResult = function (textCtnt) {
        // Splits the conditional section of an if-statemnt in to two results:
        // [if (condition) OUTPUT_IF_TRUE]
        //                 ^ This Bit   ^
        // [if (condition) OUTPUT_IF_TRUE | OUTPUT_IF_FALSE]
        //                 ^          This Bit            ^
        // If there is no OUTPUT_IF_FALSE, returns an empty string for the second option.
        if (this.debug)
            console.debug("WARNING: ------------------4444444444444444444444444444444444444444444444444444444444-----------------------");
        if (this.debug)
            console.debug("WARNING: Split Conditional input string: ", textCtnt);
        if (this.debug)
            console.debug("WARNING: ------------------4444444444444444444444444444444444444444444444444444444444-----------------------");
        var ret = ["", ""];
        var i;
        var sectionStart = 0;
        var section = 0;
        var nestLevel = 0;
        for (i = 0; i < textCtnt.length; i += 1) {
            switch (textCtnt.charAt(i)) {
                case "[":
                    nestLevel += 1;
                    break;
                case "]":
                    nestLevel -= 1;
                    break;
                case "|":
                    if (nestLevel == 0) {
                        if (section == 1) {
                            if (this.settingsClass.haltOnErrors)
                                throw new Error("Nested IF statements still a WIP");
                            ret = [errstr("Error! Too many options in if statement!"),
                                errstr("Error! Too many options in if statement!")];
                        }
                        else {
                            ret[section] = textCtnt.substring(sectionStart, i);
                            sectionStart = i + 1;
                            section += 1;
                        }
                    }
                    break;
                default:
                    break;
            }
        }
        ret[section] = textCtnt.substring(sectionStart, textCtnt.length);
        if (this.debug)
            console.debug("WARNING: ------------------5555555555555555555555555555555555555555555555555555555555-----------------------");
        if (this.debug)
            console.debug("WARNING: Outputs: ", ret);
        if (this.debug)
            console.debug("WARNING: ------------------5555555555555555555555555555555555555555555555555555555555-----------------------");
        return ret;
    };
    // Called to evaluate a if statment string, and return the evaluated result.
    // Returns an empty string ("") if the conditional rvaluates to false, and there is no else
    // option.
    OldParser.prototype.parseConditional = function (textCtnt, depth) {
        // NOTE: enclosing brackets are *not* included in the actual textCtnt string passed into this function
        // they're shown in the below examples simply for clarity's sake.
        // And because that's what the if-statements look like in the raw string passed into the parser
        // The brackets are actually removed earlier on by the this.recParser() step.
        // this.parseConditional():
        // Takes the contents of an if statement:
        // [if (condition) OUTPUT_IF_TRUE]
        // [if (condition) OUTPUT_IF_TRUE | OUTPUT_IF_FALSE]
        // splits the contents into an array as such:
        // ["condition", "OUTPUT_IF_TRUE"]
        // ["condition", "OUTPUT_IF_TRUE | OUTPUT_IF_FALSE"]
        // Finally, evalConditionalStatementStr() is called on the "condition", the result
        // of which is used to determine which content-section is returned
        //
        // TODO: (NOT YET) Allows nested condition parenthesis, because I'm masochistic
        // POSSIBLE BUG: A actual statement starting with "if" could be misinterpreted as an if-statement
        // It's unlikely, but I *could* see it happening.
        // I need to do some testing
        // ~~~~Fake-Name
        if (this.debug)
            console.debug("WARNING: ------------------2222222222222222222222222222222222222222222222222222222222-----------------------");
        if (this.debug)
            console.debug("WARNING: If input string: ", textCtnt);
        if (this.debug)
            console.debug("WARNING: ------------------2222222222222222222222222222222222222222222222222222222222-----------------------");
        var ret = ["", "", ""]; // first string is conditional, second string is the output
        var i = 0;
        var parenthesisCount = 0;
        //var ifText;
        var conditional;
        var output;
        var condStart = textCtnt.indexOf("(");
        if (condStart != -1) {
            for (i = condStart; i < textCtnt.length; i += 1) {
                if (textCtnt.charAt(i) == "(") {
                    parenthesisCount += 1;
                }
                else if (textCtnt.charAt(i) == ")") {
                    parenthesisCount -= 1;
                }
                if (parenthesisCount == 0) {
                    // Pull out the conditional, and then evaluate it.
                    conditional = textCtnt.substring(condStart + 1, i);
                    conditional = this.evalConditionalStatementStr(conditional);
                    // Make sure the contents of the if-statement have been evaluated to a plain-text string before trying to
                    // split the base-level if-statement on the "|"
                    output = textCtnt.substring(i + 1, textCtnt.length);
                    // And now do the actual splitting.
                    output = this.splitConditionalResult(output);
                    // LOTS of debugging
                    if (this.debug)
                        console.debug("WARNING: prefix = '", ret[0], "' conditional = ", conditional, " content = ", output);
                    if (this.debug)
                        console.debug("WARNING: -0--------------------------------------------------");
                    if (this.debug)
                        console.debug("WARNING: Content Item 1 = ", output[0]);
                    if (this.debug)
                        console.debug("WARNING: -1--------------------------------------------------");
                    if (this.debug)
                        console.debug("WARNING: Item 2 = ", output[1]);
                    if (this.debug)
                        console.debug("WARNING: -2--------------------------------------------------");
                    if (conditional)
                        return wrapgroup(depth, this.recParser(output[0], depth));
                    else
                        return wrapgroup(depth, this.recParser(output[1], depth));
                }
            }
        }
        else {
            if (this.settingsClass.haltOnErrors)
                throw "Invalid if statement! " + textCtnt;
            return errstr("Invalid IF Statement " + textCtnt);
        }
        return "";
    };
    // ---------------------------------------------------------------------------------------------------------------------------------------
    // SCENE PARSING ---------------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------------------------------------
    // attempt to return function "prop" that is a member of "object"
    // Properly handles nested classes/objects, e.g. localThis.herp.derp
    // is returned by getFuncFromString(localThis, "herp.derp");
    // returns the relevant function if it exists, null if it does not.
    OldParser.prototype.getObjectFromString = function (object, prop) {
        if (this.debug)
            console.debug("  getObjectFromString: prop=", prop, "object=", object);
        var ret = object[prop];
        if (ret !== undefined) {
            if (this.debug)
                console.debug("    found", typeof ret, ret);
            if (ret instanceof Function) {
                var _this_1 = this;
                return function () {
                    if (_this_1.debug)
                        console.debug("        curried call on prop=", prop, "this=", object, "with args", arguments);
                    return ret.apply(object, arguments);
                };
            }
            return ret;
        }
        if (prop.indexOf('.') > 0) {
            var localReference = void 0;
            var itemName = void 0;
            localReference = prop.substr(0, prop.indexOf('.'));
            itemName = prop.substr(prop.indexOf('.') + 1);
            var subitem = object[localReference];
            if (this.debug)
                console.debug("    subitem: ", localReference, "[", itemName, "], this[", localReference + "]=", subitem);
            // If we have the localReference as a member of the object, call this function again to further for
            // the item itemName in object[localReference]
            // This allows arbitrarily-nested data-structures, by recursing over the . structure in prop
            return this.getObjectFromString(subitem, itemName);
        }
        if (this.debug)
            console.warn("getObjectFromString:", prop, " NOT in: ", object);
        return null;
    };
    OldParser.prototype.getSceneSectionToInsert = function (inputArg) {
        var argTemp = inputArg.split(" ");
        if (argTemp.length != 2) {
            return errstr("!Not actually a valid insertSection tag:!\"" + inputArg + "\"!");
        }
        var callName = argTemp[0];
        var sceneName = argTemp[1];
        var callNameLower = argTemp[0].toLowerCase();
        if (this.debug)
            console.debug("WARNING: Doing lookup for sceneSection tag:", callName, " scene name: ", sceneName);
        // this should have been checked before calling.
        if (callNameLower != "insertsection")
            throw new Error("Wat?");
        if (sceneName in this.parserState) {
            if (this.debug)
                console.debug("WARNING: Have sceneSection \"" + sceneName + "\". Parsing and setting up menu");
            this.buttonNum = 0; // Clear the button number, so we start adding buttons from button 0
            // Split up into multiple variables for debugging (it was crashing at one point. Separating the calls let me delineate what was crashing)
            var tmp1 = this.parserState[sceneName];
            var tmp2 = this.recParser(tmp1, 0); // we have to actually parse the scene now
            //var tmp3:string = Showdown.makeHtml(tmp2)
            return ""; //Fuck Showdown
            //return tmp3;			// and then stick it on the display
            //if (sceneParserDebug) console.debug("WARNING: Scene contents: \"" + tmp1 + "\" as parsed: \"" + tmp2 + "\"")
        }
        else {
            return "Insert sceneSection called with unknown arg \"" + sceneName + "\". falling back to the debug pane";
        }
    };
    // TODO: Make failed scene button lookups fail in a debuggable manner!
    // Parser button event handler
    // This is the event bound to all button events, as well as the function called
    // to enter the parser's cached scenes. If you pass recursiveParser a set of scenes including a scene named
    // "startup", the parser will not exit normally, and will instead enter the "startup" scene at the completion of parsing the
    // input string.
    //
    // the passed seneName string is preferentially looked-up in the cached scene array, and if there is not a cached scene of name sceneName
    // in the cache, it is then looked for as a member of this.ownerClass.
    // if the function name is not found in either context, an error *should* be thrown, but at the moment,
    // it just returns to the debugPane
    //
    OldParser.prototype.enterParserScene = function (sceneName) {
        /*
         if (sceneParserDebug) console.debug("WARNING: this.parserStateContents:")
         for (var prop in this.parserState)
         {
         if (sceneParserDebug) console.debug("WARNING: this.parserState."+prop+" = "+this.parserState[prop]);
         }
         */
        var ret = "";
        if (this.debug)
            console.debug("WARNING: Entering parser scene: \"" + sceneName + "\"");
        if (this.debug)
            console.debug("WARNING: Do we have the scene name? ", sceneName in this.parserState);
        if (sceneName == "exit") {
            if (this.debug)
                console.debug("WARNING: Enter scene called to exit");
            //doNextClear(debugPane);
            // TODO:
            // This needs to change to something else anyways. I need to add the ability to
            // tell the parser where to exit to at some point
            this.ownerClass.debugPane();
        }
        else if (sceneName in this.parserState) {
            if (this.debug)
                console.debug("WARNING: Have scene \"" + sceneName + "\". Parsing and setting up menu");
            this.ownerClass.menu();
            this.buttonNum = 0; // Clear the button number, so we start adding buttons from button 0
            var tmp1 = this.parserState[sceneName];
            var tmp2 = this.recParser(tmp1, 0); // we have to actually parse the scene now
            //ret             = Showdown.makeHtml(tmp2)
            //this.ownerClass.rawOutputText(ret, true);			// and then stick it on the display
            //if (sceneParserDebug) console.debug("WARNING: Scene contents: \"" + tmp1 + "\" as parsed: \"" + tmp2 + "\"")
            if (this.debug)
                console.debug("WARNING: Scene contents after markdown: \"" + ret + "\"");
        }
        else if (this.getObjectFromString(this.ownerClass, sceneName) != null) {
            if (this.debug)
                console.debug("WARNING: Have function \"" + sceneName + "\" in this!. Calling.");
            this.getObjectFromString(this.ownerClass, sceneName)();
        }
        else {
            console.debug("WARNING: Enter scene called with unknown arg/function \"" + sceneName + "\". falling back to the debug pane");
            this.ownerClass.doNext(this.ownerClass.debugPane);
        }
        return ret;
    };
    // Parses the contents of a scene tag, shoves the unprocessed text in the scene object (this.parserState)
    // under the proper name.
    // Scenes tagged as such:
    //
    // [sceneName | scene contents blaugh]
    //
    // This gets placed in this.parserState so this.parserState["sceneName"] == "scene contents blaugh"
    //
    // Note that parsing of the actual scene contents is deferred untill it's actually called for display.
    OldParser.prototype.parseSceneTag = function (textCtnt) {
        var sceneName;
        var sceneCont;
        sceneName = textCtnt.substring(textCtnt.indexOf(' '), textCtnt.indexOf('|'));
        sceneCont = textCtnt.substr(textCtnt.indexOf('|') + 1);
        sceneName = sceneName.trim();
        if (this.debug)
            console.debug("WARNING: Adding scene with name \"" + sceneName + "\"");
        // Cleanup the scene content from spurious leading and trailing space.
        sceneCont = sceneCont.replace(/^\s+/, '').replace(/\s+$/, '');
        this.parserState[sceneName] = sceneCont.trim();
    };
    // Evaluates the contents of a button tag, and instantiates the relevant button
    // Current syntax:
    //
    // [button function_name | Button Name]
    // where "button" is a constant string, "function_name" is the name of the function pressing the button will call,
    // and "Button Name" is the text that will be shown on the button.
    // Note that the function name cannot contain spaces (actionscript requires this), and is case-sensitive
    // "Button name" can contain arbitrary spaces or characters, excepting "]", "[" and "|"
    OldParser.prototype.parseButtonTag = function (textCtnt) {
        // TODO: Allow button positioning!
        var arr = textCtnt.split("|");
        if (arr.length > 2) {
            if (this.settingsClass.haltOnErrors)
                throw new Error("");
            throw new Error("Too many items in button");
        }
        var buttonName = arr[1].trim();
        var buttonFunc = arr[0].substring(arr[0].indexOf(' ')).trim();
        //console.debug("WARNING: adding a button with name\"" + buttonName + "\" and function \"" + buttonFunc + "\"");
        this.ownerClass.addButton(this.buttonNum, buttonName, this.enterParserScene, buttonFunc);
        this.buttonNum += 1;
    };
    // pushes the contents of the passed string into the scene list object if it's a scene, or instantiates the named button if it's a button
    // command and returns an empty string.
    // if the contents are not a button or scene contents, returns the contents.
    OldParser.prototype.evalForSceneControls = function (textCtnt) {
        if (this.debug)
            console.debug("WARNING: Checking for scene tags.");
        if (textCtnt.toLowerCase().indexOf("screen") == 0) {
            if (this.debug)
                console.debug("WARNING: It's a scene");
            this.parseSceneTag(textCtnt);
            return "";
        }
        else if (textCtnt.toLowerCase().indexOf("button") == 0) {
            if (this.debug)
                console.debug("WARNING: It's a button add statement");
            this.parseButtonTag(textCtnt);
            return "";
        }
        return textCtnt;
    };
    OldParser.prototype.isIfStatement = function (textCtnt) {
        return textCtnt.toLowerCase().indexOf("if") == 0;
    };
    // Called to determine if the contents of a bracket are a parseable statement or not
    // If the contents *are* a parseable, it calls the relevant function to evaluate it
    // if not, it simply returns the contents as passed
    OldParser.prototype.parseNonIfStatement = function (textCtnt, depth) {
        var retStr = "";
        if (this.debug)
            console.debug("WARNING: Parsing content string: ", textCtnt);
        if (this.debug)
            console.debug("WARNING: Not an if statement");
        // Match a single word, with no leading or trailing space
        var singleWordTagRegExp = /^[\w\.]+$/;
        var doubleWordTagRegExp = /^[\w\.]+\s[\w\.]+$/;
        if (this.debug)
            console.debug("WARNING: string length = ", textCtnt.length);
        if (textCtnt.toLowerCase().indexOf("insertsection") == 0) {
            if (this.debug)
                console.debug("WARNING: It's a scene section insert tag!");
            retStr = tostr(this.getSceneSectionToInsert(textCtnt));
        }
        else if (singleWordTagRegExp.exec(textCtnt)) {
            if (this.debug)
                console.debug("WARNING: It's a single word!");
            retStr += this.convertSingleArg(depth, textCtnt);
        }
        else if (doubleWordTagRegExp.exec(textCtnt)) {
            if (this.debug)
                console.debug("WARNING: Two-word tag!");
            retStr += tostr(this.convertDoubleArg(depth, textCtnt));
        }
        else {
            if (this.debug)
                console.debug("WARNING: Cannot parse content. What?", textCtnt);
            retStr += errstr("!Unknown multi-word tag \"" + retStr + "\"!");
        }
        return retStr;
    };
    // Actual internal parser function.
    // textCtnt is the text you want parsed, depth is a number that reflects the current recursion depth
    // You pass in the string you want parsed, and the parsed result is returned as a string.
    OldParser.prototype.recParser = function (textCtnt, depth) {
        var retStr = "";
        try {
            if (this.debug)
                console.debug("WARNING: Recursion call", depth, "---------------------------------------------+++++++++++++++++++++");
            if (this.debug)
                console.debug("WARNING: Parsing contents = ", textCtnt);
            // Depth tracks our recursion depth
            // Basically, we need to handle things differently on the first execution, so we don't mistake single-word print-statements for
            // a tag. Therefore, every call of this.recParser increments depth by 1
            depth += 1;
            if (textCtnt.length == 0) {
                return "";
            }
            var i = 0;
            var bracketCnt = 0;
            var lastBracket = -1;
            do {
                lastBracket = textCtnt.indexOf("[", lastBracket + 1);
                if (textCtnt.charAt(lastBracket - 1) == "\\") {
                    // console.debug("WARNING: bracket is escaped 1", lastBracket);
                }
                else if (lastBracket != -1) {
                    // console.debug("WARNING: need to parse bracket", lastBracket);
                    break;
                }
            } while (lastBracket != -1);
            if (lastBracket != -1) {
                for (i = lastBracket; i < textCtnt.length; i += 1) {
                    if (textCtnt.charAt(i) == "[") {
                        if (textCtnt.charAt(i - 1) != "\\") {
                            //console.debug("WARNING: bracket is not escaped - 2");
                            bracketCnt += 1;
                        }
                    }
                    else if (textCtnt.charAt(i) == "]") {
                        if (textCtnt.charAt(i - 1) != "\\") {
                            //console.debug("WARNING: bracket is not escaped - 3");
                            bracketCnt -= 1;
                        }
                    }
                    if (bracketCnt == 0) {
                        var prefixTmp = void 0, postfixTmp = void 0;
                        // Only prepend the prefix if it actually has content.
                        prefixTmp = textCtnt.substring(0, lastBracket);
                        if (this.debug)
                            console.debug("WARNING: prefix content = ", prefixTmp);
                        if (prefixTmp)
                            retStr += wrapgroup(depth - 1, prefixTmp);
                        // We know there aren't any brackets in the section before the first opening bracket.
                        // therefore, we just add it to the returned string
                        var tmpStr = textCtnt.substring(lastBracket + 1, i);
                        tmpStr = this.evalForSceneControls(tmpStr);
                        // this.evalForSceneControls swallows scene controls, so they won't get parsed further now.
                        // therefore, you could *theoretically* have nested scene pages, though I don't know WHY you'd ever want that.
                        if (this.isIfStatement(tmpStr)) {
                            if (this.debug)
                                console.debug("WARNING: early eval as if");
                            retStr += this.parseConditional(tmpStr, depth);
                            if (this.debug)
                                console.debug("WARNING: ------------------0000000000000000000000000000000000000000000000000000000000000000-----------------------");
                            //console.debug("WARNING: Parsed Ccnditional - ", retStr)
                        }
                        else if (tmpStr) {
                            if (this.debug)
                                console.debug("WARNING: Parsing bracket contents = ", tmpStr);
                            retStr += this.parseNonIfStatement(this.recParser(tmpStr, depth), depth);
                        }
                        // First parse into the text in the brackets (to resolve any nested brackets)
                        // then, eval their contents, in case they're an if-statement or other control-flow thing
                        // I haven't implemented yet
                        // Only parse the trailing string if it has brackets in it.
                        // if not, we need to just return the string as-is.
                        // Parsing the trailing string if it doesn't have brackets could lead to it being
                        // incorrectly interpreted as a multi-word tag (and shit would asplode and shit)
                        postfixTmp = textCtnt.substring(i + 1, textCtnt.length);
                        if (postfixTmp.indexOf("[") != -1) {
                            if (this.debug)
                                console.debug("WARNING: Need to parse trailing text", postfixTmp);
                            retStr += this.recParser(postfixTmp, depth - 1); // Parse the trailing text (if any)
                            // Note: This leads to LOTS of recursion. Since we basically call this.recParser once per
                            // tag, it means that if a body of text has 30 tags, we'll end up recursing at least
                            // 29 times before finishing.
                            // Making this tail-call reursive, or just parsing it flatly may be a much better option in
                            // the future, if this does become an issue.
                        }
                        else {
                            if (this.debug)
                                console.debug("WARNING: No brackets in trailing text", postfixTmp);
                            retStr += wrapgroup(depth, postfixTmp);
                        }
                        return retStr;
                        // and return the parsed string
                    }
                }
            }
            else {
                // DERP. We should never have brackets around something that ISN'T a tag intended to be parsed. Therefore, we just need
                // to determine what type of parsing should be done do the tag.
                if (this.debug)
                    console.debug("WARNING: No brackets present in text passed to recParse", textCtnt);
                if (depth > 1)
                    retStr += textCtnt;
                else
                    retStr += wrapgroup(depth, retStr);
            }
        }
        catch (e) {
            console.error(e);
            retStr = errstr("" + e);
        }
        finally {
            depth--;
        }
        return retStr;
    };
    // Main parser function.
    // textCtnt is the text you want parsed, depth is a number, which should be 0
    // or not passed at all.
    // You pass in the string you want parsed, and the parsed result is returned as a string.
    OldParser.prototype.recursiveParser = function (contents, prettyQuotes) {
        if (prettyQuotes === void 0) { prettyQuotes = true; }
        if (this.debug)
            console.debug("WARNING: ------------------ Parser called on string -----------------------");
        // Eventually, when this goes properly class-based, we'll add a period, and have this.parserState.
        // Reset the parser's internal state, since we're parsing a new string:
        // console.debug("WARNING: Purging scene parser contents")
        this.parserState = {};
        var ret;
        // Run through the parser
        contents = contents.replace(/\\\n/g, '').replace(/\\n/g, "\n");
        ret = this.recParser(contents, 0);
        if (this.debug)
            console.debug("WARNING: Parser intermediate contents = ", ret);
        // Currently, not parsing text as markdown by default because it's fucking with the line-endings.
        if (prettyQuotes) {
            // Convert quotes to prettyQuotes
            ret = this.makeQuotesPrettah(ret);
            // Quote conversion has to go before markdown calls
        }
        // cleanup escaped brackets
        ret = ret.replace(/\\\]/g, "]");
        ret = ret.replace(/\\\[/g, "[");
        // And repeated spaces (this has to be done after markdown processing)
        ret = ret.replace(/ +/g, " ");
        /*
         for (var prop in this.parserState)
         {
         console.debug("WARNING: this.parserState."+prop+" = "+this.parserState[prop]);
         }
         */
        // Finally, if we have a parser-based scene. enter the "startup" scene.
        if ("startup" in this.parserState) {
            ret = this.enterParserScene("startup");
            // HORRIBLE HACK
            // since we're initially called via a outputText command, the content of the first page's text will be overwritten
            // when we return. Therefore, in a horrible hack, we return the contents of mainTest.htmlText as the ret value, so
            // the outputText call overwrites the window content with the exact same content.
            // console.debug("WARNING: Returning: ", ret);
            this.ownerClass.currentText = ret;
        }
        ret = ret.replace(/\n/g, '<br>');
        //console.debug(ret);
        // console.debug("WARNING: Maintext content @ recursiveParser = ", mainText.htmlText.length)
        return ret;
    };
    // ---------------------------------------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------------------------------------
    // Make shit look nice
    OldParser.prototype.makeQuotesPrettah = function (inStr) {
        inStr = inStr.replace(/(\w)'(\w)/g, "$1\u2019$2") // Apostrophes
            .replace(/(^|[\r\n\t \.\!\,\?])"([a-zA-Z<>\.\!\,\?])/g, "$1\u201c$2") // Opening doubles
            .replace(/([a-zA-Z<>\.\!\,\?])"([\r\n\t \.\!\,\?]|$)/g, "$1\u201d$2") // Closing doubles
            .replace(/--/g, "\u2014"); // em-dashes
        return inStr;
    };
    return OldParser;
}());
///<reference path="lexer.ts"/>
var XmlSingleTags = ["br", "hr", "input"];
function xmlWrap(tag, attributes, body) {
	attributes = attributes ? ' ' + attributes : '';
	if (XmlSingleTags.indexOf(tag) >= 0)
		return '<' + tag + attributes + '/>';
	return '<' + tag + attributes + '>' + body + '</' + tag + '>';
}
var Priorities = {};
(function (src, dst) {
	for (var i = 0; i < src.length; i++) {
		for (var op in src[i]) {
			dst[op] = i;
		}
	}
})([
	['.'],
	[' '],
	['**'],
	['*', '/', '%'],
	['+', '-'],
	['<<', '>>', '>>>'],
	['>', '<', '<=', '>='],
	['===', '!==', '==', '!=', '=', '<>'],
	['&&'],
	['^'],
	['||'] //10
], Priorities);
function parse(input, _a) {
	var _b = _a.debugParser, debugParser = _b === void 0 ? true : _b;
	var depth = 0;
	input = input.slice();
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Utilities
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	function node(nodeType, body) {
		var rslt = undefined;
		try {
			depth++;
			if (debugParser)
				console.debug(strlpad('', depth), '{', nodeType);
			rslt = body();
			return rslt;
		}
		catch (e) {
			console.error(e);
			return {
				type: "error", error: e, errstr: errstr(e)
			};
		}
		finally {
			if (debugParser)
				console.debug(strlpad('', depth), '}', nodeType, rslt);
			depth--;
		}
	}

	function expect() {
		var types = [];
		for (var _i = 0; _i < arguments.length; _i++) {
			types[_i] = arguments[_i];
		}
		if (peek.apply(void 0, types))
			return input.shift();
		return null;
	}

	function empty() {
		while (input.length > 0 && input[0].type == TokenType.COMMENT)
			input.shift();
		return input.length == 0;
	}

	function peek() {
		var types = [];
		for (var _i = 0; _i < arguments.length; _i++) {
			types[_i] = arguments[_i];
		}
		if (empty())
			return false;
		var tok = input[0];
		for (var _a = 0, types_1 = types; _a < types_1.length; _a++) {
			var t = types_1[_a];
			if (typeof t == 'string') {
				if (t === tok.content)
					return true;
            }
			else {
				if (t === tok.type)
					return true;
			}
		}
		return false;
	}

	function produceExpression(closingTokens, consume, allowSpace) {
		return node("expr", function () {
			if (expect('(')) {
				return produceExpression([')'], true, allowSpace);
			}
			var t;
			var x;
			if ((t = expect(TokenType.OPERATOR))) {
				// Unary operator
				throw argthrow(new Error("TODO expr"), t);
			}
			else if ((t = expect(TokenType.WORD))) {
				x = {type: "term", term: t.content};
			}
			else if ((t = expect(TokenType.STRING, TokenType.NUMBER))) {
				x = {type: "const", value: t.content};
			}
			else if (peek.apply(void 0, closingTokens)) {
				throw argthrow(new Error("Abnormal expression termination"), input.shift());
			}
			else {
				throw argthrow(new Error("TODO expr"), input.shift());
			}
			var limit = 9999;
			while (limit-- > 0) {
				if (peek.apply(void 0, closingTokens)) {
					if (consume)
						input.shift();
					break;
				}
				else if (expect('.')) {
					var y = peek(TokenType.WORD);
					if (!y)
						y = peek(TokenType.NUMBER);
					if (!y)
						throw argthrow(new Error("Word or number expected after dot"), input.shift());
					x = {
						type: "bop",
						left: x,
						right: produceExpression(closingTokens, false, allowSpace),
						prio: Priorities['.'],
						op: '.'
					};
				}
				else if (peek(TokenType.WORD)) {
					if (!allowSpace)
						break;
					if (x.type == "term") {
						x = {
							type: "bop",
							left: x,
							right: produceExpression(closingTokens, false, allowSpace),
							prio: Priorities[' '],
							op: ' '
						};
					}
					else
						throw argthrow(new Error("Illegal expression token after " + x.type), input.shift());
				}
				else if ((t = expect(TokenType.OPERATOR))) {
					if (x.type == "term") {
						x = {
							type: "bop",
							left: x,
							right: produceExpression(closingTokens, false, false),
							prio: Priorities[t.content],
							op: t.content
						};
					}
					else
						throw argthrow(new Error("Illegal expression token after " + x.type), input.shift());
				}
				else {
					throw argthrow(new Error("Illegal expression token after " + x.type), input.shift());
				}
			}
			return x;
		});
	}

	function produceArguments() {
		var rslt = [];
		if (expect(')'))
			return rslt;
		var limit = 9999;
		while (limit-- > 0) {
			rslt.push(produceExpression([',', ')'], false, true));
			if (expect(')'))
				return rslt;
			if (!expect(','))
				throw argthrow(new Error("Expected ',' or ')'"), input.shift());
		}
	}

	function produceTrail() {
		var rslt = [];
		var limit = 9999;
		while (limit-- > 0) {
			rslt.push(produceText([']', '|']));
			if (expect(']'))
				break;
			if (!expect('|'))
				throw argthrow(new Error("Expected Textable, '[', or '|'"), input.shift());
		}
		return rslt;
	}

	function produceTag() {
		return node("tag", function () {
			var ctx = produceExpression([']', '(', ':'], false, true);
			if (expect(']')) {
				return {type: "expr", ctx: ctx};
			}
			if (expect('(')) {
				var args = produceArguments();
				var trail = produceTrail();
				return {type: "call", ctx: ctx, args: args, trail: trail};
			}
			else if (expect(':')) {
				var content = [];
				while (!empty()) {
					if (expect(']'))
						break;
					content.push(produceExpression([']'], false, false));
				}
				return {type: "phrase", ctx: ctx, content: content};
			}
			else
				throw argthrow(new Error("Expected ']', '(', or ':'"), input.shift());
		});
	}

	function produceTextable() {
		var t;
		if ((t = expect(TokenType.TEXT))) {
			return t.content;
		}
		else if ((t = expect(TokenType.XMLOPEN, TokenType.XMLSINGLE))) {
			var _a = t, tag_1 = _a.tag, attributes_1 = _a.attributes;
			if (t.type == TokenType.XMLSINGLE || XmlSingleTags.indexOf(tag_1) >= 0) {
				return xmlWrap(tag_1, attributes_1, "");
			}
			else {
				return node("xml", function () {
					var body = produceText([TokenType.XMLCLOSE]);
					var t = expect(TokenType.XMLCLOSE);
                    if (!t)
						throw argthrow(new Error("Expected XMLCLOSE"), input.shift());
					var tag2 = t.tag;
					if (tag2 != tag_1)
						throw argthrow(new Error("Expected XMLCLOSE tag " + tag_1 + ", got " + tag2), t);
					return {type: "xml", tag: tag_1, attributes: attributes_1, body: body};
				});
			}
		}
		else if ((t = expect(TokenType.XMLCLOSE))) {
			throw argthrow(new Error("Unmatched XMLOPEN"), t);
		}
		else if (expect('[')) {
			return produceTag();
		}
		else {
			throw argthrow(new Error("Not a text-level token"), input.shift());
		}
	}

	function produceText(closingTokens) {
		var result = [];
		while (!empty()) {
			if (peek.apply(void 0, closingTokens))
				break;
			var item = node("text", function () { return produceTextable(); });
			if (typeof item === "object" && item.type == "error"
				&& Array.isArray(item.error)
				&& Array.isArray(item.error[2])) {
				item.error[2].push(item);
			}
			result.push(item);
		}
		if (result.length == 1) {
			return result[0];
		}
		return {type: "text", content: result};
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Root
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var text = [];
	while (!empty()) {
		text.push(produceText([]));
	}
	if (text.length == 0)
		return "";
	if (text.length == 1)
		return text[0];
	return {type: "text", content: text};
}
///<reference path="parser.ts"/>
function maybeCap(key, val) {
	return (isUpperCase(key[0]) && typeof val == "string") ? capitalize(val) : val;
}
var EvalContext = (function () {
	function EvalContext(parent) {
		this.parent = parent;
	}

	EvalContext.prototype.term = function (word) {
		var val = this.doTerm(word);
		console.debug('term', word, '->', typeof val, val);
		return maybeCap(word, val);
	};
	EvalContext.prototype.lookup = function (where, what) {
		var val = this.doLookup(where, what);
		console.debug('lookup', what, 'in', where, '->', typeof val, val);
		return maybeCap(what, val);
	};
	return EvalContext;
}());
function CoCtopLevelTerm(word) {
	var game = kGAMECLASS;
	var player = game.player;
	var w2 = word.toLowerCase();
	if (word in topLevelFns)
		return topLevelFns[word];
	if (w2 in topLevelFns)
		return topLevelFns[word];
	if (word in singleArgConverters)
		return singleArgConverters[word](kGAMECLASS);
	if (w2 in singleArgConverters)
		return singleArgConverters[w2](kGAMECLASS);
	if (word in game)
		return lookupAndBind(game, word);
	if (word in player)
		return lookupAndBind(player, word);
	if (isUpperCase(word) && word in window) {
		var v = window[word];
		if (typeof v === "number")
			return v;
	}
	throw ("Unknown term " + word);
}
var topLevelFns = {
	"if": function (condition) {
		var _this = this;
		console.debug.apply(console, ["if", this, "("].concat(Array["from"](arguments), [")"]));
		condition = !!condition && condition != "false" && condition != "False";
		return function (ifpart, elsepart) {
			if (ifpart === void 0) { ifpart = function () { return ""; }; }
			if (elsepart === void 0) { elsepart = function () { return ""; }; }
			return condition ? ifpart.call(_this) : elsepart.call(_this);
		};
	}
};
///////////////////////////////////////////////////////
// The Big Eval
///////////////////////////////////////////////////////
function finalExpr(doit, thiz, e) {
	while (doit && typeof e === "function") {
		console.debug("finalize", e, "->", (e = e.call(thiz)));
	}
	return e;
}
function evalOp(ctx, left, op, right) {
	console.debug(left, op, right);
	switch (op) {
		case '.':
			return ctx.lookup(left, right);
		case ' ':
			return ctx.lookup(left, right);
		case '**':
			return Math.pow((+left), +right);
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
function evalExpr(ctx, expr, final) {
	console.log('evalExpr', expr.type, final);
	var rslt;
	switch (expr.type) {
		case "const":
			rslt = expr.value;
			break;
		case "term":
			rslt = ctx.term(expr.term.toString());
			break;
		case "bop": {
			var left = evalExpr(ctx, expr.left, false);
			var xright = expr.right;
			if (expr.op == '.' || expr.op == ' ') {
				if (xright.type == 'const') {
					rslt = left[xright.value];
				}
				else if (xright.type == 'term') {
					rslt = left[xright.term];
				}
				else
					throw "Invalid index " + xright.type;
			}
			else {
				left = finalExpr(true, ctx, left);
				var right = evalExpr(ctx, xright, true);
				rslt = evalOp(ctx, left, expr.op, right);
			}
			break;
		}
		default:
			throw "TODO not supported " + expr.type;
	}
	return finalExpr(final, ctx, rslt);
}
function evalCall(ctx, src) {
	var base = evalExpr(ctx, src.ctx, false);
	if (typeof base != "function") {
		throw "Not a function";
	}
	var rslt;
	rslt = base.apply(ctx, src.args.map(function (e) { return evalExpr(ctx, e, true); }));
	if (typeof rslt == "function") {
		rslt = rslt.apply(ctx, src.trail.map(function (t) { return function () { return evalText(ctx, t); }; }));
	}
	return ctx.text(rslt);
}
function evalPhrase(ctx, src) {
	var base = evalExpr(ctx, src.ctx, false);
	if (!base)
		return "";
	var rslt = [];
	for (var _i = 0, _a = src.content; _i < _a.length; _i++) {
		var obj = _a[_i];
		var x = void 0;
		if (obj.type == "term") {
			x = ctx.lookup(base, obj.term);
		}
		else {
			x = evalExpr(ctx, obj, true);
		}
		rslt.push(ctx.text(finalExpr(true, base, x)));
	}
	return rslt.join(" ");
}
function evalText(ctx, src) {
	if (typeof src == 'string')
		return ctx.text(src);
	if (src === null || src === undefined)
		return ctx.text(src);
	switch (src.type) {
		case "call":
			return evalCall(ctx, src);
		case "expr":
			return evalExpr(ctx, src.ctx, true);
		case "phrase":
			return evalPhrase(ctx, src);
		case "text":
			return src.content.map(function (i) {
				try {
					return evalText(ctx, i);
				}
				catch (e) {
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


 */ ///////////////////////////////////////////////////////
// The API
///////////////////////////////////////////////////////
function lookupAndBind(obj, key) {
	if (key in obj) {
		var v_1 = obj[key];
		if (typeof v_1 == 'function')
			return _.extend(function () {
				var rest = [];
				for (var _i = 0; _i < arguments.length; _i++) {
					rest[_i] = arguments[_i];
				}
				//console.log(obj, key, ...rest);
				return v_1.apply(obj, rest);
			}, v_1);
		return v_1;
	}
	return undefined;
}
function wrapComment(text) {
	return spanwrap('tok-comment', '[#' + text + '#]');
}
var SimpleContext = (function (_super) {
	__extends(SimpleContext, _super);
	function SimpleContext(basis, parent) {
		var _this = _super.call(this, parent) || this;
		_this.basis = basis;
		_this.depth = 0;
		if (parent instanceof SimpleContext)
			_this.depth = parent.depth + 1;
		return _this;
	}

	SimpleContext.prototype.text = function (input) {
		return '' + input;
	};
	SimpleContext.prototype.doLookup = function (where, what) {
		var w2 = what.toLowerCase();
		if ((typeof where === "object" || typeof where === "function") && where !== null) {
			if (what in where)
				return where[what];
			if (w2 in where)
				return where[w2];
		}
		if (what in this.basis)
			return this.basis[what];
		if (w2 in this.basis)
			return this.basis[w2];
		if (this.parent)
			return this.parent.doLookup(where, what);
		return undefined;
	};
	SimpleContext.prototype.doTerm = function (word) {
		return this.doLookup(null, word);
	};
	return SimpleContext;
}(EvalContext));
var GameContext = (function (_super) {
	__extends(GameContext, _super);
	function GameContext(basis, root) {
		return _super.call(this, basis, root) || this;
    }

	GameContext.prototype.doTerm = function (word) {
		var k = _super.prototype.doTerm.call(this, word);
		if (k !== undefined)
			return k;
		return CoCtopLevelTerm(word);
    };
	GameContext.prototype.error = function (e) {
		console.error(e);
		return errstr(e);
	};
	GameContext.prototype.text = function (input) {
		if (input === null || input === undefined) {
			return errstr(input);
		}
		else {
			return wrapgroup(this.depth, input);
		}
	};
	return GameContext;
}(SimpleContext));
var KitsuneScene;
(function (KitsuneScene) {
    KitsuneScene.basicKitsuneFur = ["orange and white", "black", "black and white", "red", "red and white", "white"];
    KitsuneScene.basicKitsuneHair = ["white", "black", "black", "black", "red", "red", "red"];
    KitsuneScene.elderKitsuneColors = ["metallic golden", "golden blonde", "metallic silver", "silver blonde", "snow white", "iridescent gray"];
})(KitsuneScene || (KitsuneScene = {}));
var FetishManager;
(function (FetishManager) {
    FetishManager.DEFAULT_STATE = 0;
    FetishManager.FETISH_EXHIBITION = 1 << 0; //00000001 = 1
    FetishManager.FETISH_BONDAGE = 1 << 1; //00000010 = 2
    FetishManager.FETISH_NO_COMBAT = 1 << 2; //00000100 = 4
    FetishManager.FETISH_A = 1 << 3; //00001000 = 8
    FetishManager.FETISH_B = 1 << 4; //00010000 = 16
    FetishManager.FETISH_C = 1 << 5; //00100000 = 32
    FetishManager.FETISH_D = 1 << 6; //01000000 = 64
    FetishManager.FETISH_E = 1 << 7; //10000000 = 128
    FetishManager.FETISH_F = 1 << 8; //00000001 00000000 = 256
    FetishManager.FETISH_G = 1 << 9; //00000010 00000000 = 512
    FetishManager.FETISH_H = 1 << 10; //00000100 00000000 = 1,024
    FetishManager.FETISH_I = 1 << 11; //00001000 00000000 = 2,048
    FetishManager.FETISH_J = 1 << 12; //00010000 00000000 = 4,096
    FetishManager.FETISH_K = 1 << 13; //00100000 00000000 = 8,192
})(FetishManager || (FetishManager = {}));
// Lookup dictionary for converting any single argument brackets into it's corresponding string
// basically [armor] results in the "[armor]" segment of the string being replaced with the
// results of the corresponding anonymous function, in this case: function(): any {return player.armorName;}
// tags not present in the singleArgConverters object return an error message.
// all the errors related to trying to parse stuff if not present are
// already handled in the various *Descript() functions.
// no need to duplicate them.
// Note: all key strings MUST be ENTIRELY lowercase.
var singleArgConverters = {
	"agility": function () { return "[Agility]"; },
	"allbreasts": function () { return kGAMECLASS.player.allBreastsDescript(); },
	"alltits": function () { return kGAMECLASS.player.allBreastsDescript(); },
	"armor": function () { return kGAMECLASS.player.armorName; },
	"armorname": function () { return kGAMECLASS.player.armorName; },
	"ass": function () { return kGAMECLASS.player.buttDescript(); },
	"asshole": function () { return kGAMECLASS.player.assholeDescript(); },
	"balls": function () { return kGAMECLASS.player.ballsDescriptLight(); },
	"bodytype": function () { return kGAMECLASS.player.bodyType(); },
	"boyfriend": function () { return kGAMECLASS.player.mf("boyfriend", "girlfriend"); },
	"breasts": function () { return kGAMECLASS.player.breastDescript(0); },
	"butt": function () { return kGAMECLASS.player.buttDescript(); },
	"butthole": function () { return kGAMECLASS.player.assholeDescript(); },
	"chest": function () { return kGAMECLASS.player.chestDesc(); },
	"claws": function () { return kGAMECLASS.player.claws(); },
	"clit": function () { return kGAMECLASS.player.clitDescript(); },
	"cock": function () { return kGAMECLASS.player.cockDescript(0); },
	"cockhead": function () { return kGAMECLASS.player.cockHead(0); },
	"cocks": function () { return kGAMECLASS.player.multiCockDescriptLight(); },
	"cunt": function () { return kGAMECLASS.player.vaginaDescript(); },
	"eachcock": function () { return kGAMECLASS.player.sMultiCockDesc(); },
	"evade": function () { return "[Evade]"; },
	"eyes": function () { return kGAMECLASS.player.eyesDescript(); },
	"face": function () { return kGAMECLASS.player.face(); },
	"feet": function () { return kGAMECLASS.player.feet(); },
	"foot": function () { return kGAMECLASS.player.foot(); },
	"fullchest": function () { return kGAMECLASS.player.allChestDesc(); },
	"hair": function () { return kGAMECLASS.player.hairDescript(); },
	"haircolor": function () { return kGAMECLASS.player.hairColor; },
	"hairorfur": function () { return kGAMECLASS.player.hairOrFur(); },
	"he": function () { return kGAMECLASS.player.mf("he", "she"); },
	"he2": function () { return kGAMECLASS.player2.mf("he", "she"); },
	"him": function () { return kGAMECLASS.player.mf("him", "her"); },
	"him2": function () { return kGAMECLASS.player2.mf("him", "her"); },
	"himself": function () { return kGAMECLASS.player.mf("himself", "herself"); },
	"herself": function () { return kGAMECLASS.player.mf("himself", "herself"); },
	"hips": function () { return kGAMECLASS.player.hipDescript(); },
	"his": function () { return kGAMECLASS.player.mf("his", "her"); },
	"his2": function () { return kGAMECLASS.player2.mf("his", "her"); },
	"horns": function () { return kGAMECLASS.player.hornDescript(); },
	"leg": function () { return kGAMECLASS.player.leg(); },
	"legs": function () { return kGAMECLASS.player.legs(); },
	"lowergarment": function () { return kGAMECLASS.player.lowerGarmentName; },
	"man": function () { return kGAMECLASS.player.mf("man", "woman"); },
	"men": function () { return kGAMECLASS.player.mf("men", "women"); },
	"malefemaleherm": function () { return kGAMECLASS.player.maleFemaleHerm(); },
	"master": function () { return kGAMECLASS.player.mf("master", "mistress"); },
	"misdirection": function () { return "[Misdirection]"; },
	"multicock": function () { return kGAMECLASS.player.multiCockDescriptLight(); },
	"multicockdescriptlight": function () { return kGAMECLASS.player.multiCockDescriptLight(); },
	"name": function () { return kGAMECLASS.player.short; },
	"nipple": function () { return kGAMECLASS.player.nippleDescript(0); },
	"nipples": function () { return kGAMECLASS.player.nippleDescript(0) + "s"; },
	"onecock": function () { return kGAMECLASS.player.oMultiCockDesc(); },
	"pg": function () { return "\n\n"; },
	"pussy": function () { return kGAMECLASS.player.vaginaDescript(); },
	"race": function () { return kGAMECLASS.player.race(); },
	"sack": function () { return kGAMECLASS.player.sackDescript(); },
	"sheath": function () { return kGAMECLASS.player.sheathDescript(); },
	"shield": function () { return kGAMECLASS.player.shieldName; },
	"skin.noadj": function () { return kGAMECLASS.player.skin(true); },
	"skinfurscales": function () { return kGAMECLASS.player.skinFurScales(); },
	"tallness": function () { return kGAMECLASS.measurements.footInchOrMetres(kGAMECLASS.player.tallness); },
	"tits": function () { return kGAMECLASS.player.breastDescript(0); },
	"tongue": function () { return kGAMECLASS.player.tongueDescript(); },
	"uppergarment": function () { return kGAMECLASS.player.upperGarmentName; },
	"vag": function () { return kGAMECLASS.player.vaginaDescript(); },
	"vagina": function () { return kGAMECLASS.player.vaginaDescript(); },
	"vagorass": function () { return (kGAMECLASS.player.hasVagina() ? kGAMECLASS.player.vaginaDescript() : kGAMECLASS.player.assholeDescript()); },
	"weapon": function () { return kGAMECLASS.player.weaponName; },
	"weaponname": function () { return kGAMECLASS.player.weaponName; },
	"latexyname": function () { return kGAMECLASS.flags[kFLAGS.GOO_NAME]; },
	"bathgirlname": function () { return kGAMECLASS.flags[kFLAGS.MILK_NAME]; },
	"cockplural": function () { return (kGAMECLASS.player.cocks.length == 1) ? "cock" : "cocks"; },
	"dickplural": function () { return (kGAMECLASS.player.cocks.length == 1) ? "dick" : "dicks"; },
	"headplural": function () { return (kGAMECLASS.player.cocks.length == 1) ? "head" : "heads"; },
	"prickplural": function () { return (kGAMECLASS.player.cocks.length == 1) ? "prick" : "pricks"; },
	"boy": function () { return kGAMECLASS.player.mf("boy", "girl"); },
	"guy": function () { return kGAMECLASS.player.mf("guy", "girl"); },
	"wings": function () { return kGAMECLASS.player.wingsDescript(); },
	"tail": function () { return kGAMECLASS.player.tailDescript(); },
	"onetail": function () { return kGAMECLASS.player.oneTailDescript(); },
    //Prisoner
	"captortitle": function () { return kGAMECLASS.prison.prisonCaptor.captorTitle; },
	"captorname": function () { return kGAMECLASS.prison.prisonCaptor.captorName; },
	"captorhe": function () { return kGAMECLASS.prison.prisonCaptor.captorPronoun1; },
	"captorhim": function () { return kGAMECLASS.prison.prisonCaptor.captorPronoun2; },
	"captorhis": function () { return kGAMECLASS.prison.prisonCaptor.captorPronoun3; }
};
function tab2(target, group) {
    var j = $(target).parents(target.dataset.tabgroup);
    j.find('[data-role=tab-content].active').removeClass('active');
    j.find('[data-target=' + target.dataset.target + ']').addClass('active');
    j.find('[role=tab].active').removeClass('active');
    target.classList.add('active');
}
var Rng;
(function (Rng) {
    var MAXINT = 0x7fffffff;
    var MININT = 0xffffffff;
    function xorshift32(x) {
        x = x | 0;
        x = ((x << 13) ^ x) | 0;
        x = ((x >>> 17) ^ x) | 0;
        x = ((x << 5) ^ x) | 0;
        return x | 0;
    }
    Rng.xorshift32 = xorshift32;
    function gen_state() {
        return (Math.random() * MININT) | 0;
    }
    Rng.gen_state = gen_state;
    Rng.state = gen_state();
    function rnd_int() {
        return (Rng.state = xorshift32(Rng.state));
    }
    Rng.rnd_int = rnd_int;
    function rnd_uint() {
        return (Rng.state = xorshift32(Rng.state)) & MAXINT;
    }
    Rng.rnd_uint = rnd_uint;
    function random() {
        return rnd_uint() / MAXINT;
    }
    Rng.random = random;
    function rand(i) {
        return rnd_uint() % (i | 0);
    }
    Rng.rand = rand;
})(Rng || (Rng = {}));
function rand(i) {
    return Rng.rand(i);
}
function randomChoice() {
    if (arguments.length == 1 && Array.isArray(arguments[0]))
        return arguments[0][rand(arguments[0].length)];
    return arguments[rand(arguments.length)];
}
function capitalize(s) {
    return s.slice(0, 1).toUpperCase() + s.slice(1);
}
var NUMBER_WORDS_NORMAL = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
var NUMBER_WORDS_CAPITAL = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
var NUMBER_WORDS_POSITIONAL = ["zeroth", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];
function num2Text(n) {
    if (n >= 0 && n <= 10)
        return NUMBER_WORDS_NORMAL[n];
    return n.toString();
}
function todo(what) {
    console.warn("TODO properly implement " + what);
}
function strmul(s, to) {
    var r = '';
    while (to > 0) {
        if (to % 2)
            r += s;
        to >>>= 1;
        s = s + s;
    }
    return r;
}
function strlpad(x, to, pad) {
    if (pad === void 0) { pad = ' '; }
    var s = '' + x;
	if (to <= 0)
		return s;
    return strmul(pad, to - s.length) + s;
}
function strrpad(x, to, pad) {
    if (pad === void 0) { pad = ' '; }
    var s = '' + x;
	if (to <= 0)
		return s;
    return s + strmul(pad, to - s.length);
}
function tostr(s) {
    if (s === null || s === undefined) {
        return errstr(s);
    }
    else {
        return "" + s;
    }
}
function errstr(s) {
	return spanwrap('badge badge-danger text-white', '' + s);
}
function spanwrap(clazz, s) {
    var s0, s1, s2;
    var i = s.indexOf('<');
    if (i >= 0) {
        s0 = s.slice(0, i);
        s1 = s.slice(i);
        var j = s1.lastIndexOf('>');
        if (j > 0) {
            s2 = s1.slice(j + 1);
            s1 = s1.slice(0, j + 1);
        }
        else {
            s2 = "";
        }
    }
    else {
        s0 = s;
        s1 = "";
        s2 = "";
    }
    var open = "<span class='" + clazz + "'>";
    var close = "</span>";
    return (s0.length > 0 ? open + s0 + close : "") + s1 + (s2.length > 0 ? open + s2 + close : "");
}
function wrapeval(depth, s) {
    return spanwrap("tok-eval tok-eval-depth-" + Math.min(10, depth | 0), '' + s);
}
function wrapgroup(depth, s) {
    return spanwrap("tok-group tok-group-depth-" + Math.min(10, depth | 0), '' + s);
}
function isUpperCase(char) {
    return char != char.toLowerCase();
}
function argthrow(e, data) {
	e["data"] = data;
	if (isToken(data))
		e.message += " " + tok2str(data);
	return e;
}
function formatStringArray(stringList) {
	switch (stringList.length) {
		case 0:
			return "";
		case 1:
			return stringList[0];
		case 2:
			return stringList[0] + " and " + stringList[1];
		default:
	}
	var concat = stringList[0];
	for (var x = 1; x < stringList.length - 1; x++)
		concat += ", " + stringList[x];
	return concat + " and " + stringList[stringList.length - 1];
}
//# sourceMappingURL=tsout.js.map