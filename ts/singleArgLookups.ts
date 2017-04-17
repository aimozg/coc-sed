// Lookup dictionary for converting any single argument brackets into it's corresponding string
// basically [armor] results in the "[armor]" segment of the string being replaced with the
// results of the corresponding anonymous function, in this case: function(): any {return player.armorName;}
// tags not present in the singleArgConverters object return an error message.


// all the errors related to trying to parse stuff if not present are
// already handled in the various *Descript() functions.
// no need to duplicate them.

// Note: all key strings MUST be ENTIRELY lowercase.
const singleArgConverters = {
	"agility"               : function (thisPtr: any): any {
		return "[Agility]";
	},
	"allbreasts"            : function (thisPtr: any): any {
		return kGAMECLASS.player.allBreastsDescript();
	},
	"alltits"               : function (thisPtr: any): any {
		return kGAMECLASS.player.allBreastsDescript();
	},
	"armor"                 : function (thisPtr: any): any {
		return kGAMECLASS.player.armorName;
	},
	"armorname"             : function (thisPtr: any): any {
		return kGAMECLASS.player.armorName;
	},
	"ass"                   : function (thisPtr: any): any {
		return kGAMECLASS.player.buttDescript();
	},
	"asshole"               : function (thisPtr: any): any {
		return kGAMECLASS.player.assholeDescript();
	},
	"balls"                 : function (thisPtr: any): any {
		return kGAMECLASS.player.ballsDescriptLight();
	},
	"bodytype"              : function (thisPtr: any): any {
		return kGAMECLASS.player.bodyType();
	},
	"boyfriend"             : function (thisPtr: any): any {
		return kGAMECLASS.player.mf("boyfriend", "girlfriend");
	},
	"breasts"               : function (thisPtr: any): any {
		return kGAMECLASS.player.breastDescript(0);
	},
	"butt"                  : function (thisPtr: any): any {
		return kGAMECLASS.player.buttDescript();
	},
	"butthole"              : function (thisPtr: any): any {
		return kGAMECLASS.player.assholeDescript();
	},
	"chest"                 : function (thisPtr: any): any {
		return kGAMECLASS.player.chestDesc();
	},
	"claws"                 : function (thisPtr: any): any {
		return kGAMECLASS.player.claws();
	},
	"clit"                  : function (thisPtr: any): any {
		return kGAMECLASS.player.clitDescript();
	},
	"cock"                  : function (thisPtr: any): any {
		return kGAMECLASS.player.cockDescript(0);
	},
	"cockhead"              : function (thisPtr: any): any {
		return kGAMECLASS.player.cockHead(0);
	},
	"cocks"                 : function (thisPtr: any): any {
		return kGAMECLASS.player.multiCockDescriptLight();
	},
	"cunt"                  : function (thisPtr: any): any {
		return kGAMECLASS.player.vaginaDescript();
	},
	"eachcock"              : function (thisPtr: any): any {
		return kGAMECLASS.player.sMultiCockDesc();
	},
	"evade"                 : function (thisPtr: any): any {
		return "[Evade]";
	},
	"eyes"                  : function (thisPtr: any): any {
		return kGAMECLASS.player.eyesDescript();
	},
	"face"                  : function (thisPtr: any): any {
		return kGAMECLASS.player.face();
	},
	"feet"                  : function (thisPtr: any): any {
		return kGAMECLASS.player.feet();
	},
	"foot"                  : function (thisPtr: any): any {
		return kGAMECLASS.player.foot();
	},
	"fullchest"             : function (thisPtr: any): any {
		return kGAMECLASS.player.allChestDesc();
	},
	"hair"                  : function (thisPtr: any): any {
		return kGAMECLASS.player.hairDescript();
	},
	"haircolor"             : function (thisPtr: any): any {
		return kGAMECLASS.player.hairColor;
	},
	"hairorfur"             : function (thisPtr: any): any {
		return kGAMECLASS.player.hairOrFur();
	},
	"he"                    : function (thisPtr: any): any {
		return kGAMECLASS.player.mf("he", "she");
	},
	"he2"                   : function (thisPtr: any): any {
		return kGAMECLASS.player2.mf("he", "she");
	},
	"him"                   : function (thisPtr: any): any {
		return kGAMECLASS.player.mf("him", "her");
	},
	"him2"                  : function (thisPtr: any): any {
		return kGAMECLASS.player2.mf("him", "her");
	},
	"himself"               : function (thisPtr: any): any {
		return kGAMECLASS.player.mf("himself", "herself");
	},
	"herself"               : function (thisPtr: any): any {
		return kGAMECLASS.player.mf("himself", "herself");
	},
	"hips"                  : function (thisPtr: any): any {
		return kGAMECLASS.player.hipDescript();
	},
	"his"                   : function (thisPtr: any): any {
		return kGAMECLASS.player.mf("his", "her");
	},
	"his2"                  : function (thisPtr: any): any {
		return kGAMECLASS.player2.mf("his", "her");
	},
	"horns"                 : function (thisPtr: any): any {
		return kGAMECLASS.player.hornDescript();
	},
	"leg"                   : function (thisPtr: any): any {
		return kGAMECLASS.player.leg();
	},
	"legs"                  : function (thisPtr: any): any {
		return kGAMECLASS.player.legs();
	},
	"lowergarment"          : function (thisPtr: any): any {
		return kGAMECLASS.player.lowerGarmentName;
	},
	"man"                   : function (thisPtr: any): any {
		return kGAMECLASS.player.mf("man", "woman");
	},
	"men"                   : function (thisPtr: any): any {
		return kGAMECLASS.player.mf("men", "women");
	},
	"malefemaleherm"        : function (thisPtr: any): any {
		return kGAMECLASS.player.maleFemaleHerm();
	},
	"master"                : function (thisPtr: any): any {
		return kGAMECLASS.player.mf("master", "mistress");
	},
	"misdirection"          : function (thisPtr: any): any {
		return "[Misdirection]";
	},
	"multicock"             : function (thisPtr: any): any {
		return kGAMECLASS.player.multiCockDescriptLight();
	},
	"multicockdescriptlight": function (thisPtr: any): any {
		return kGAMECLASS.player.multiCockDescriptLight();
	},
	"name"                  : function (thisPtr: any): any {
		return kGAMECLASS.player.short;
	},
	"nipple"                : function (thisPtr: any): any {
		return kGAMECLASS.player.nippleDescript(0);
	},
	"nipples"               : function (thisPtr: any): any {
		return kGAMECLASS.player.nippleDescript(0) + "s";
	},
	"onecock"               : function (thisPtr: any): any {
		return kGAMECLASS.player.oMultiCockDesc();
	},
	"pg"                    : function (thisPtr: any): any {
		return "\n\n";
	},
	"pussy"                 : function (thisPtr: any): any {
		return kGAMECLASS.player.vaginaDescript();
	},
	"race"                  : function (thisPtr: any): any {
		return kGAMECLASS.player.race();
	},
	"sack"                  : function (thisPtr: any): any {
		return kGAMECLASS.player.sackDescript();
	},
	"sheath"                : function (thisPtr: any): any {
		return kGAMECLASS.player.sheathDescript();
	},
	"shield"                : function (thisPtr: any): any {
		return kGAMECLASS.player.shieldName;
	},
	"skin"                  : function (thisPtr: any): any {
		return kGAMECLASS.player.skin();
	},
	"skin.noadj"            : function (thisPtr: any): any {
		return kGAMECLASS.player.skin(true);
	},
	"skinfurscales"         : function (thisPtr: any): any {
		return kGAMECLASS.player.skinFurScales();
	},
	"tallness"              : function (thisPtr: any): any {
		return kGAMECLASS.measurements.footInchOrMetres(kGAMECLASS.player.tallness);
	},
	"tits"                  : function (thisPtr: any): any {
		return kGAMECLASS.player.breastDescript(0);
	},
	"tongue"                : function (thisPtr: any): any {
		return kGAMECLASS.player.tongueDescript();
	},
	"uppergarment"          : function (thisPtr: any): any {
		return kGAMECLASS.player.upperGarmentName;
	},
	"vag"                   : function (thisPtr: any): any {
		return kGAMECLASS.player.vaginaDescript();
	},
	"vagina"                : function (thisPtr: any): any {
		return kGAMECLASS.player.vaginaDescript();
	},
	"vagorass"              : function (thisPtr: any): any {
		return (kGAMECLASS.player.hasVagina() ? kGAMECLASS.player.vaginaDescript() : kGAMECLASS.player.assholeDescript());
	},
	"weapon"                : function (thisPtr: any): any {
		return kGAMECLASS.player.weaponName;
	},
	"weaponname"            : function (thisPtr: any): any {
		return kGAMECLASS.player.weaponName;
	},
	"latexyname"            : function (thisPtr: any): any {
		return kGAMECLASS.flags[kFLAGS.GOO_NAME];
	},
	"bathgirlname"          : function (thisPtr: any): any {
		return kGAMECLASS.flags[kFLAGS.MILK_NAME];
	},
	"cockplural"            : function (thisPtr: any): any {
		return (kGAMECLASS.player.cocks.length == 1) ? "cock" : "cocks";
	},
	"dickplural"            : function (thisPtr: any): any {
		return (kGAMECLASS.player.cocks.length == 1) ? "dick" : "dicks";
	},
	"headplural"            : function (thisPtr: any): any {
		return (kGAMECLASS.player.cocks.length == 1) ? "head" : "heads";
	},
	"prickplural"           : function (thisPtr: any): any {
		return (kGAMECLASS.player.cocks.length == 1) ? "prick" : "pricks";
	},
	"boy"                   : function (thisPtr: any): any {
		return kGAMECLASS.player.mf("boy", "girl");
	},
	"guy"                   : function (thisPtr: any): any {
		return kGAMECLASS.player.mf("guy", "girl");
	},
	"wings"                 : function (thisPtr: any): any {
		return kGAMECLASS.player.wingsDescript();
	},
	"tail"                  : function (thisPtr: any): any {
		return kGAMECLASS.player.tailDescript();
	},
	"onetail"               : function (thisPtr: any): any {
		return kGAMECLASS.player.oneTailDescript();
	},

//Prisoner
	"captortitle": function (thisPtr: any): any {
		return kGAMECLASS.prison.prisonCaptor.captorTitle;
	},
	"captorname" : function (thisPtr: any): any {
		return kGAMECLASS.prison.prisonCaptor.captorName;
	},
	"captorhe"   : function (thisPtr: any): any {
		return kGAMECLASS.prison.prisonCaptor.captorPronoun1;
	},
	"captorhim"  : function (thisPtr: any): any {
		return kGAMECLASS.prison.prisonCaptor.captorPronoun2;
	},
	"captorhis"  : function (thisPtr: any): any {
		return kGAMECLASS.prison.prisonCaptor.captorPronoun3;
	}

}
