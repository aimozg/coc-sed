let textarea: JQuery;
let previews: Preview[] = [];

interface Preview {
	ui: {
		container: JQuery;
		content: JQuery;
		status: JQuery;
		seed: JQuery;
		attrs: JQuery;
	},
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
			attrSet(preview.game, a.name, a.value);
		}
		kGAMECLASS = preview.game;
		let t0     = new Date();
		let s      = preview.parser.recursiveParser(src);
		let t1     = new Date();
		preview.ui.status.text("done in " + (t1.getTime() - t0.getTime()).toFixed() + "ms");
		_.defer(() => {
			preview.ui.content.html(s);
		})
	})
}
function regen() {
	_.forEach(previews, regenOne);
}
function setupPreview(container: JQuery): Preview {
	container.html("").append(Preview.template.clone());
	let game    = new CoC();
	let p       = {
		ui    : {
			content  : container.find("[data-role=content]"),
			container: container,
			status   : container.find("[data-role=status]"),
			seed     : container.find("[name=seed]"),
			attrs    : container.find("[data-role=attr]")
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

$(() => {
	textarea         = $("#source");
	Preview.template = $("#preview-1 > *").clone();
	for (let i = 1; i <= 2; i++) {
		previews.push(setupPreview($("#preview-" + i)));
	}
	textarea.on("input change", _.debounce(regen, 300));
	regen();
});