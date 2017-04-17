// PC ASCII Aspect lookups

// For subject: "cock"
const cockLookups: Object = {
	"all"      : function (thisPtr: any): any {
		return kGAMECLASS.player.multiCockDescriptLight();
	},
	"each"     : function (thisPtr: any): any {
		return kGAMECLASS.player.sMultiCockDesc();
	},
	"one"      : function (thisPtr: any): any {
		return kGAMECLASS.player.oMultiCockDesc();
	},
	"largest"  : function (thisPtr: any): any {
		return kGAMECLASS.player.cockDescript(kGAMECLASS.player.biggestCockIndex());
	},
	"biggest"  : function (thisPtr: any): any {
		return kGAMECLASS.player.cockDescript(kGAMECLASS.player.biggestCockIndex());
	},
	"biggest2" : function (thisPtr: any): any {
		return kGAMECLASS.player.cockDescript(kGAMECLASS.player.biggestCockIndex2());
	},
	"biggest3" : function (thisPtr: any): any {
		return kGAMECLASS.player.cockDescript(kGAMECLASS.player.biggestCockIndex3());
	},
	"smallest" : function (thisPtr: any): any {
		return kGAMECLASS.player.cockDescript(kGAMECLASS.player.smallestCockIndex());
	},
	"smallest2": function (thisPtr: any): any {
		return kGAMECLASS.player.cockDescript(kGAMECLASS.player.smallestCockIndex2());
	},
	"longest"  : function (thisPtr: any): any {
		return kGAMECLASS.player.cockDescript(kGAMECLASS.player.longestCock());
	},
	"shortest" : function (thisPtr: any): any {
		return kGAMECLASS.player.cockDescript(kGAMECLASS.player.shortestCockIndex());
	}
};

// For subject: "cockHead"
const cockHeadLookups: Object = {
	"biggest"  : function (thisPtr: any): any {
		return kGAMECLASS.player.cockHead(kGAMECLASS.player.biggestCockIndex());
	},
	"biggest2" : function (thisPtr: any): any {
		return kGAMECLASS.player.cockHead(kGAMECLASS.player.biggestCockIndex2());
	},
	"biggest3" : function (thisPtr: any): any {
		return kGAMECLASS.player.cockHead(kGAMECLASS.player.biggestCockIndex3());
	},
	"largest"  : function (thisPtr: any): any {
		return kGAMECLASS.player.cockHead(kGAMECLASS.player.biggestCockIndex());
	},
	"smallest" : function (thisPtr: any): any {
		return kGAMECLASS.player.cockHead(kGAMECLASS.player.smallestCockIndex());
	},
	"smallest2": function (thisPtr: any): any {
		return kGAMECLASS.player.cockHead(kGAMECLASS.player.smallestCockIndex2());
	},
	"longest"  : function (thisPtr: any): any {
		return kGAMECLASS.player.cockHead(kGAMECLASS.player.longestCock());
	},			// the *head* of a cock has a length? Wut?
	"shortest" : function (thisPtr: any): any {
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
const twoWordNumericTagsLookup: Object = {
	"cockfit"     : function (thisPtr: any, aspect: any): any {
		if (!kGAMECLASS.player.hasCock()) return Parser.errstr("(Attempt to parse cock when none present.)");
		else {
			if (kGAMECLASS.player.cockThatFits(aspect) >= 0) return kGAMECLASS.player.cockDescript(kGAMECLASS.player.cockThatFits(aspect));
			else return kGAMECLASS.player.cockDescript(kGAMECLASS.player.smallestCockIndex());
		}
	},
	"cockfit2"    : function (thisPtr: any, aspect: any): any {
		if (!kGAMECLASS.player.hasCock()) return Parser.errstr("(Attempt to parse cock when none present.)");
		else {
			if (kGAMECLASS.player.cockThatFits2(aspect) >= 0) return kGAMECLASS.player.cockDescript(kGAMECLASS.player.cockThatFits2(aspect));
			else return kGAMECLASS.player.cockDescript(kGAMECLASS.player.smallestCockIndex());
		}
	},
	"cockheadfit" : function (thisPtr: any, aspect: any): any {
		if (!kGAMECLASS.player.hasCock()) {
			return Parser.errstr("(Attempt to parse cockhead when none present.)");
		}
		else {
			if (kGAMECLASS.player.cockThatFits(aspect) >= 0) return kGAMECLASS.player.cockHead(kGAMECLASS.player.cockThatFits(aspect));
			else return kGAMECLASS.player.cockHead(kGAMECLASS.player.smallestCockIndex());
		}
	},
	"cockheadfit2": function (thisPtr: any, aspect: any): any {
		if (!kGAMECLASS.player.hasCock()) return Parser.errstr("(Attempt to parse cockhead when none present.)");
		else {
			if (kGAMECLASS.player.cockThatFits2(aspect) >= 0) return kGAMECLASS.player.cockHead(kGAMECLASS.player.cockThatFits2(aspect));
			else return kGAMECLASS.player.cockHead(kGAMECLASS.player.smallestCockIndex());
		}
	},
	"cock"        : function (thisPtr: any, aspect: any): any {
		if (!kGAMECLASS.player.hasCock()) return Parser.errstr("(Attempt to parse cock when none present.)");
		else {
			if (aspect - 1 >= 0 && aspect - 1 < kGAMECLASS.player.cockTotal()) return kGAMECLASS.player.cockDescript(aspect - 1);
			else return Parser.errstr("(Attempt To Parse player.cockDescript for Invalid Cock)");
		}
	},
	"cockhead"    : function (thisPtr: any, aspect: any): any {
		if (!kGAMECLASS.player.hasCock()) return Parser.errstr("(Attempt to parse cockHead when none present.)");
		else {
			let intAspect: number = (aspect - 1) | 0;
			if (intAspect >= 0 && intAspect < kGAMECLASS.player.cockTotal()) return kGAMECLASS.player.cockHead(intAspect);
			else return Parser.errstr("(Attempt To Parse CockHeadDescript for Invalid Cock)");
		}
	}

};

// These tags take an ascii attribute for lookup.
// [object attribute]
// if attribute cannot be cast to a number, the parser looks for "object" in twoWordTagsLookup,
// and then uses the corresponding object to determine the value of "attribute", by looking for
// "attribute" twoWordTagsLookup["object"]["attribute"]
const twoWordTagsLookup: Object = {
	// NPCs:
	//"rubi"  : rubiLookups,
	//"arian" : arianLookups,
	//"ember" : emberLookups,
	//"benoit": benoitLookups,

	// PC Attributes:

	"cock"    : cockLookups,
	"cockhead": cockHeadLookups
};
