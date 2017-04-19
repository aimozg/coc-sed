let textarea: JQuery;
let previews: Preview[] = [];

interface AttrList {
	name: string;
	template: JQuery;
	items: JQuery;
}
interface PreviewUi {
	container: JQuery;
	content: JQuery;
	status: JQuery;
	seed: JQuery;
	attrs: JQuery;
	attrLists: AttrList[];
}
interface Preview {
	ui: PreviewUi;
	parser: Parser;
	game: CoC;
	seed: number;
}
namespace Preview {
	export let template: JQuery;
}
function regenOne(preview) {
	let src = textarea.val();
	preview.ui.status.text("rendering...");
	_.defer(() => {
		Rng.state = (preview.seed = preview.ui.seed.val() | 0);
		for (let a of preview.ui.attrs.toArray() as HTMLInputElement[]) {
			let v: any = a.value;
			let type   = a.dataset.type;
			if (type == 'boolean') v = v === 'true';
			attrSet(preview.game, a.name, v);
		}
		kGAMECLASS = preview.game;
		let t0     = new Date();
		let s      = preview.parser.recursiveParser(src);
		preview.ui.status.text("almost there");
		_.defer(() => {
			preview.ui.content.html(s);
			let t1 = new Date();
			preview.ui.status.text("done in " + (t1.getTime() - t0.getTime()).toFixed() + "ms");
		})
	})
}
function regen() {
	_.forEach(previews, regenOne);
}
function setupPreview(container: JQuery, game: CoC = new CoC()): Preview {
	container.html("").append(Preview.template.clone());
	let p       = {
		ui    : {
			content  : container.find("[data-role=content]"),
			container: container,
			status   : container.find("[data-role=status]"),
			seed     : container.find("[name=seed]"),
			attrs    : container.find("[data-role=attr]"),
			attrLists: container.find("[data-role=attrlist]").toArray().map(element => {
				return {} as AttrList;
			})
		},
		parser: new Parser(game, {}),
		game  : game,
		seed  : Rng.gen_state()
	} as Preview;
	let updater = _.debounce(_.partial(regenOne, p), 300);
	p.ui.seed.val(p.seed).on("input", updater);
	p.ui.attrs.on("input", updater);
	for (let a of p.ui.attrs.toArray() as HTMLInputElement[]) {
		a.value = attrGet(p.game, a.name)
	}
	return p;
}

let StartChars: ((Player, CoC) => any)[] = [
	(player: Player, game: CoC) => {
		player.short = "Aria";
		if (!player.hasVagina()) player.createVagina();
		if (player.femininity < 80) player.femininity = 80;
		player.createPerk("BimboBody");
		player.createPerk("BimboBrains");
		player.tailType  = TAIL_TYPE_FOX;
		player.tailVenom = 9;
		player.createPerk("EnlightenedNinetails");
		player.breastRows[0].breastRating = 5;
		player.femininity                 = 100;
		player.lowerBody                  = LOWER_BODY_TYPE_DEMONIC_HIGH_HEELS;
		player.skinTone                   = "pink";
		player.skinType                   = SKIN_TYPE_FUR;
		player.skinDesc                   = "fur";
		player.furColor                   = "pink";
		player.hairColor                  = "pink";
		player.hairLength                 = 50;
		player.hipRating                  = 5;
		player.buttRating                 = 5;
		player.thickness                  = 10;
		game.flags[kFLAGS.PC_FETISH]      = FetishManager.FETISH_BONDAGE;
		player.earsPierced                = 1;
		player.earsPShort                 = "green gem-stone handcuffs";
		player.earsPLong                  = "Green gem-stone handcuffs";
		player.nipplesPierced             = 1;
		player.nipplesPShort              = "seamless black nipple-studs";
		player.nipplesPLong               = "Seamless black nipple-studs";
		game.flags[kFLAGS.PC_FETISH]      = FetishManager.FETISH_BONDAGE;
		player.vaginas[0].clitPierced     = 1;
		player.vaginas[0].clitPShort      = "emerald clit-stud";
		player.vaginas[0].clitPLong       = "Emerald clit-stud";
		player.vaginas[0].labiaPierced    = 2;
		player.vaginas[0].labiaPShort     = "ruby labia-rings";
		player.vaginas[0].labiaPLong      = "Ruby labia-rings";
		player.createPerk("ElvenBounty");
		player.createPerk("PureAndLoving");
		player.createPerk("SensualLover");
		player.createPerk("OneTrackMind");
		player.weaponName = "succubi whip";
		player.armorName  = "skimpy nurse's outfit";
	},
	(player: Player) => {
		player.short     = "Betram";
		player.earType   = EARS_FOX;
		player.tailType  = TAIL_TYPE_FOX;
		player.tailVenom = 1;
		if (player.biggestTitSize() > 1) player.breastRows[0].breastRating = 1;
		if (!player.hasCock()) {
			player.createCock(CockTypesEnum.DOG, 8, 1);
			player.cocks[0].knotMultiplier = 1.4;
		}
		if (!player.hasVagina()) {
			player.createVagina();
			player.vaginas[0].vaginalWetness = VAGINA_WETNESS_WET;
			player.vaginas[0].clitLength     = 0.25;
		}
	}
];
$(() => {
	textarea         = $("#source");
	textarea.val($("#demo1").html());
	Preview.template = $("#preview-1 > *").clone();
	for (let i = 0; i < StartChars.length; i++) {
		let game = new CoC();
		StartChars[i](game.player, game);
		let preview = setupPreview($("#preview-" + (i + 1)), game);
		previews.push(preview);
		if (i == -1) {
			preview.parser.debug = true;
			regenOne(preview);
		}
	}
	textarea.on("input change", _.debounce(regen, 300));
	regen();
});