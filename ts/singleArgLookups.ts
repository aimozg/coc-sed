// Lookup dictionary for converting any single argument brackets into it's corresponding string
// basically [armor] results in the "[armor]" segment of the string being replaced with the
// results of the corresponding anonymous function, in this case: function(): any {return player.armorName;}
// tags not present in the singleArgConverters object return an error message.


// all the errors related to trying to parse stuff if not present are
// already handled in the various *Descript() functions.
// no need to duplicate them.

// Note: all key strings MUST be ENTIRELY lowercase.
const singleArgConverters: { [index: string]: () => any } = {
	"agility"               : function (): any {
		return "[Agility]";
	},
	"allbreasts"            : function (): any {
		return kGAMECLASS.player.allBreastsDescript();
	},
	"alltits"               : function (): any {
		return kGAMECLASS.player.allBreastsDescript();
	},
	"armor"                 : function (): any {
		return kGAMECLASS.player.armorName;
	},
	"armorname"             : function (): any {
		return kGAMECLASS.player.armorName;
	},
	"ass"                   : function (): any {
		return kGAMECLASS.player.buttDescript();
	},
	"asshole"               : function (): any {
		return kGAMECLASS.player.assholeDescript();
	},
	"balls"                 : function (): any {
		return kGAMECLASS.player.ballsDescriptLight();
	},
	"bodytype"              : function (): any {
		return kGAMECLASS.player.bodyType();
	},
	"boyfriend"             : function (): any {
		return kGAMECLASS.player.mf("boyfriend", "girlfriend");
	},
	"breasts"               : function (): any {
		return kGAMECLASS.player.breastDescript(0);
	},
	"butt"                  : function (): any {
		return kGAMECLASS.player.buttDescript();
	},
	"butthole"              : function (): any {
		return kGAMECLASS.player.assholeDescript();
	},
	"chest"                 : function (): any {
		return kGAMECLASS.player.chestDesc();
	},
	"claws"                 : function (): any {
		return kGAMECLASS.player.claws();
	},
	"clit"                  : function (): any {
		return kGAMECLASS.player.clitDescript();
	},
	"cock"                  : function (): any {
		return kGAMECLASS.player.cockDescript(0);
	},
	"cockhead"              : function (): any {
		return kGAMECLASS.player.cockHead(0);
	},
	"cocks"                 : function (): any {
		return kGAMECLASS.player.multiCockDescriptLight();
	},
	"cunt"                  : function (): any {
		return kGAMECLASS.player.vaginaDescript();
	},
	"eachcock"              : function (): any {
		return kGAMECLASS.player.sMultiCockDesc();
	},
	"evade"                 : function (): any {
		return "[Evade]";
	},
	"eyes"                  : function (): any {
		return kGAMECLASS.player.eyesDescript();
	},
	"face"                  : function (): any {
		return kGAMECLASS.player.face();
	},
	"feet"                  : function (): any {
		return kGAMECLASS.player.feet();
	},
	"foot"                  : function (): any {
		return kGAMECLASS.player.foot();
	},
	"fullchest"             : function (): any {
		return kGAMECLASS.player.allChestDesc();
	},
	"hair"                  : function (): any {
		return kGAMECLASS.player.hairDescript();
	},
	"haircolor"             : function (): any {
		return kGAMECLASS.player.hairColor;
	},
	"hairorfur"             : function (): any {
		return kGAMECLASS.player.hairOrFur();
	},
	"he"                    : function (): any {
		return kGAMECLASS.player.mf("he", "she");
	},
	"he2"                   : function (): any {
		return kGAMECLASS.player2.mf("he", "she");
	},
	"him"                   : function (): any {
		return kGAMECLASS.player.mf("him", "her");
	},
	"him2"                  : function (): any {
		return kGAMECLASS.player2.mf("him", "her");
	},
	"himself"               : function (): any {
		return kGAMECLASS.player.mf("himself", "herself");
	},
	"herself"               : function (): any {
		return kGAMECLASS.player.mf("himself", "herself");
	},
	"hips"                  : function (): any {
		return kGAMECLASS.player.hipDescript();
	},
	"his"                   : function (): any {
		return kGAMECLASS.player.mf("his", "her");
	},
	"his2"                  : function (): any {
		return kGAMECLASS.player2.mf("his", "her");
	},
	"horns"                 : function (): any {
		return kGAMECLASS.player.hornDescript();
	},
	"leg"                   : function (): any {
		return kGAMECLASS.player.leg();
	},
	"legs"                  : function (): any {
		return kGAMECLASS.player.legs();
	},
	"lowergarment"          : function (): any {
		return kGAMECLASS.player.lowerGarmentName;
	},
	"man"                   : function (): any {
		return kGAMECLASS.player.mf("man", "woman");
	},
	"men"                   : function (): any {
		return kGAMECLASS.player.mf("men", "women");
	},
	"malefemaleherm"        : function (): any {
		return kGAMECLASS.player.maleFemaleHerm();
	},
	"master"                : function (): any {
		return kGAMECLASS.player.mf("master", "mistress");
	},
	"misdirection"          : function (): any {
		return "[Misdirection]";
	},
	"multicock"             : function (): any {
		return kGAMECLASS.player.multiCockDescriptLight();
	},
	"multicockdescriptlight": function (): any {
		return kGAMECLASS.player.multiCockDescriptLight();
	},
	"name"                  : function (): any {
		return kGAMECLASS.player.short;
	},
	"nipple"                : function (): any {
		return kGAMECLASS.player.nippleDescript(0);
	},
	"nipples"               : function (): any {
		return kGAMECLASS.player.nippleDescript(0) + "s";
	},
	"onecock"               : function (): any {
		return kGAMECLASS.player.oMultiCockDesc();
	},
	"pg"                    : function (): any {
		return "\n\n";
	},
	"pussy"                 : function (): any {
		return kGAMECLASS.player.vaginaDescript();
	},
	"race"                  : function (): any {
		return kGAMECLASS.player.race();
	},
	"sack"                  : function (): any {
		return kGAMECLASS.player.sackDescript();
	},
	"sheath"                : function (): any {
		return kGAMECLASS.player.sheathDescript();
	},
	"shield"                : function (): any {
		return kGAMECLASS.player.shieldName;
	},
	"skin"                  : function (): any {
		return kGAMECLASS.player.skin();
	},
	"skin.noadj"            : function (): any {
		return kGAMECLASS.player.skin(true);
	},
	"skinfurscales"         : function (): any {
		return kGAMECLASS.player.skinFurScales();
	},
	"tallness"              : function (): any {
		return kGAMECLASS.measurements.footInchOrMetres(kGAMECLASS.player.tallness);
	},
	"tits"                  : function (): any {
		return kGAMECLASS.player.breastDescript(0);
	},
	"tongue"                : function (): any {
		return kGAMECLASS.player.tongueDescript();
	},
	"uppergarment"          : function (): any {
		return kGAMECLASS.player.upperGarmentName;
	},
	"vag"                   : function (): any {
		return kGAMECLASS.player.vaginaDescript();
	},
	"vagina"                : function (): any {
		return kGAMECLASS.player.vaginaDescript();
	},
	"vagorass"              : function (): any {
		return (kGAMECLASS.player.hasVagina() ? kGAMECLASS.player.vaginaDescript() : kGAMECLASS.player.assholeDescript());
	},
	"weapon"                : function (): any {
		return kGAMECLASS.player.weaponName;
	},
	"weaponname"            : function (): any {
		return kGAMECLASS.player.weaponName;
	},
	"latexyname"            : function (): any {
		return kGAMECLASS.flags[kFLAGS.GOO_NAME];
	},
	"bathgirlname"          : function (): any {
		return kGAMECLASS.flags[kFLAGS.MILK_NAME];
	},
	"cockplural"            : function (): any {
		return (kGAMECLASS.player.cocks.length == 1) ? "cock" : "cocks";
	},
	"dickplural"            : function (): any {
		return (kGAMECLASS.player.cocks.length == 1) ? "dick" : "dicks";
	},
	"headplural"            : function (): any {
		return (kGAMECLASS.player.cocks.length == 1) ? "head" : "heads";
	},
	"prickplural"           : function (): any {
		return (kGAMECLASS.player.cocks.length == 1) ? "prick" : "pricks";
	},
	"boy"                   : function (): any {
		return kGAMECLASS.player.mf("boy", "girl");
	},
	"guy"                   : function (): any {
		return kGAMECLASS.player.mf("guy", "girl");
	},
	"wings"                 : function (): any {
		return kGAMECLASS.player.wingsDescript();
	},
	"tail"                  : function (): any {
		return kGAMECLASS.player.tailDescript();
	},
	"onetail"               : function (): any {
		return kGAMECLASS.player.oneTailDescript();
	},

//Prisoner
	"captortitle": function (): any {
		return kGAMECLASS.prison.prisonCaptor.captorTitle;
	},
	"captorname" : function (): any {
		return kGAMECLASS.prison.prisonCaptor.captorName;
	},
	"captorhe"   : function (): any {
		return kGAMECLASS.prison.prisonCaptor.captorPronoun1;
	},
	"captorhim"  : function (): any {
		return kGAMECLASS.prison.prisonCaptor.captorPronoun2;
	},
	"captorhis"  : function (): any {
		return kGAMECLASS.prison.prisonCaptor.captorPronoun3;
	}

};
