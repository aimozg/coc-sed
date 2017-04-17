namespace KitsuneScene {
	export const basicKitsuneFur    = ["orange and white", "black", "black and white", "red", "red and white", "white"];
	export const basicKitsuneHair   = ["white", "black", "black", "black", "red", "red", "red"];
	export const elderKitsuneColors = ["metallic golden", "golden blonde", "metallic silver", "silver blonde", "snow white", "iridescent gray"];
}
namespace FetishManager {
	export const DEFAULT_STATE     = 0;
	export const FETISH_EXHIBITION = 1 << 0;  //00000001 = 1
	export const FETISH_BONDAGE    = 1 << 1;  //00000010 = 2
	export const FETISH_NO_COMBAT  = 1 << 2;  //00000100 = 4
	export const FETISH_A          = 1 << 3;  //00001000 = 8
	export const FETISH_B          = 1 << 4;  //00010000 = 16
	export const FETISH_C          = 1 << 5;  //00100000 = 32
	export const FETISH_D          = 1 << 6;  //01000000 = 64
	export const FETISH_E          = 1 << 7;  //10000000 = 128
	export const FETISH_F          = 1 << 8;  //00000001 00000000 = 256
	export const FETISH_G          = 1 << 9;  //00000010 00000000 = 512
	export const FETISH_H          = 1 << 10; //00000100 00000000 = 1,024
	export const FETISH_I          = 1 << 11; //00001000 00000000 = 2,048
	export const FETISH_J          = 1 << 12; //00010000 00000000 = 4,096
	export const FETISH_K          = 1 << 13; //00100000 00000000 = 8,192
}