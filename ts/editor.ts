///<reference path="impl.ts"/>

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
	flags: JQuery;
}
interface Preview {
	ui: PreviewUi;
	parser_old: OldParser;
	game: CoC;
	seed: number;
}
namespace Preview {
	export let template: JQuery;
}
function regenOne(preview: Preview) {
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
		let options = {};
		for (let a of preview.ui.flags.toArray() as HTMLInputElement[]) {
			options[a.name] = a.checked;
		}
		let format = $('#sourceformat').val();
		kGAMECLASS = preview.game;
		let t0     = new Date();
		let s: string;
		switch (format) {
			case 'cocparser':
				s = preview.parser_old.recursiveParser(src);
				break;
			case 'parser2':
				s = evalText(new GameContext(preview.game, undefined),
					parse(Lexer.lexrun(src, options as LexerOptions), options as ParserOptions));
				break;
			default:
				console.error("Format not supported", format);
		}

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
		ui        : {
			content  : container.find("[data-role=content]"),
			container: container,
			status   : container.find("[data-role=status]"),
			seed     : container.find("[name=seed]"),
			flags    : container.find("[data-role=flag]"),
			attrs    : container.find("[data-role=attr]"),
			attrLists: container.find("[data-role=attrlist]").toArray().map(element => {
				return {} as AttrList;
			})
		},
		parser_old: new OldParser(game, {}),
		game      : game,
		seed      : Rng.gen_state()
	} as Preview;
	let updater = _.debounce(_.partial(regenOne, p), 300);
	p.ui.seed.val(p.seed).on("input", updater);
	p.ui.attrs.on("input", updater);
	p.ui.flags.on("change", updater);
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
		player.skinAdj                    = "sexy";
		player.skinDesc                   = "fur";
		player["oldskin"]                 = player.skin;
		player["skin"]                    = _.extend(() => player["oldskin"](), {
			noun : () => player.skinDesc,
			long : () => player["oldskin"](),
			full : () => player["oldskin"](),
			is   : "is",
			color: () => player.skinTone,
			extra: 0,
			neck : () => player["skin"]
		});
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
		player.short      = "Betram";
		player.earType    = EARS_FOX;
		player.tailType   = TAIL_TYPE_FOX;
		player.tailVenom  = 1;
		player["oldskin"] = player.skin;
		player["skin"]    = _.extend(() => player["oldskin"](), {
			noun : () => player.skinDesc,
			long : () => player["oldskin"](),
			full : () => player["oldskin"](),
			is   : "is",
			color: () => player.skinTone,
			extra: _.extend(() => 'green scales', {
				noun : 'scales',
				long : 'green scales',
				full : 'green scales',
				is   : 'are',
				color: 'green'
			}),
			neck : () => player["skin"]["extra"]
		});
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
	textarea = $("#source");
	textarea.val(
		textarea.data("init").split(',').map(i =>
			($(i).html() || "").trim()).join("\n<hr>\n")
	);
	Preview.template = $("#preview-1 > *").clone();
	for (let i = 0; i < StartChars.length; i++) {
		let game = new CoC();
		StartChars[i](game.player, game);
		let preview = setupPreview($("#preview-" + (i + 1)), game);
		previews.push(preview);
	}
	textarea.on("input change", _.debounce(regen, 300));
	regen();
});
