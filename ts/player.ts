///<reference path="creature.ts"/>

class Player extends Creature {
	hunger: number = 80;
	esteem: number = 50;
	obey: number   = 50;
	will: number   = 50;
	startingRace   = "human";

	bodyType(): string {
		let desc: string                                     = "";
		let {thickness, tone, gender, hipRating, buttRating} = this;
		//OLD STUFF
		//SUPAH THIN
		if (thickness < 10) {
			//SUPAH BUFF
			if (tone > 90) desc += "a lithe body covered in highly visible muscles";
			else if (tone > 75) desc += "an incredibly thin, well-muscled frame";
			else if (tone > 50) desc += "a very thin body that has a good bit of muscle definition";
			else if (tone > 25) desc += "a lithe body and only a little bit of muscle definition";
			else desc += "a waif-thin body, and soft, forgiving flesh";
		} else if (thickness < 25) {
			//Pretty thin
			if (tone > 90) desc += "a thin body and incredible muscle definition";
			else if (tone > 75) desc += "a narrow frame that shows off your muscles";
			else if (tone > 50) desc += "a somewhat lithe body and a fair amount of definition";
			else if (tone > 25) desc += "a narrow, soft body that still manages to show off a few muscles";
			else desc += "a thin, soft body";
		} else if (thickness < 40) {
			//Somewhat thin
			if (tone > 90) desc += "a fit, somewhat thin body and rippling muscles all over";
			else if (tone > 75) desc += "a thinner-than-average frame and great muscle definition";
			else if (tone > 50) desc += "a somewhat narrow body and a decent amount of visible muscle";
			else if (tone > 25) desc += "a moderately thin body, soft curves, and only a little bit of muscle";
			else desc += "a fairly thin form and soft, cuddle-able flesh";
		} else if (thickness < 60) {
			//average
			if (tone > 90) desc += "average thickness and a bevy of perfectly defined muscles";
			else if (tone > 75) desc += "an average-sized frame and great musculature";
			else if (tone > 50) desc += "a normal waistline and decently visible muscles";
			else if (tone > 25) desc += "an average body and soft, unremarkable flesh";
			else desc += "an average frame and soft, untoned flesh with a tendency for jiggle";
		} else if (thickness < 75) {
			if (tone > 90) desc += "a somewhat thick body that's covered in slabs of muscle";
			else if (tone > 75) desc += "a body that's a little bit wide and has some highly-visible muscles";
			else if (tone > 50) desc += "a solid build that displays a decent amount of muscle";
			else if (tone > 25) desc += "a slightly wide frame that displays your curves and has hints of muscle underneath";
			else desc += "a soft, plush body with plenty of jiggle";
		} else if (thickness < 90) {
			if (tone > 90) desc += "a thickset frame that gives you the appearance of a wall of muscle";
			else if (tone > 75) desc += "a burly form and plenty of muscle definition";
			else if (tone > 50) desc += "a solid, thick frame and a decent amount of muscles";
			else if (tone > 25) desc += "a wide-set body, some soft, forgiving flesh, and a hint of muscle underneath it";
			else {
				desc += "a wide, cushiony body";
				if (gender >= 2 || this.biggestTitSize() > 3 || hipRating > 7 || buttRating > 7)
					desc += " and plenty of jiggle on your curves";
			}
		} else {
			//Chunky monkey
			if (tone > 90) desc += "an extremely thickset frame and so much muscle others would find you harder to move than a huge boulder";
			else if (tone > 75) desc += "a very wide body and enough muscle to make you look like a tank";
			else if (tone > 50) desc += "an extremely substantial frame packing a decent amount of muscle";
			else if (tone > 25) {
				desc += "a very wide body";
				if (gender >= 2 || this.biggestTitSize() > 4 || hipRating > 10 || buttRating > 10)
					desc += ", lots of curvy jiggles,";
				desc += " and hints of muscle underneath";
			} else {
				desc += "a thick";
				if (gender >= 2 || this.biggestTitSize() > 4 || hipRating > 10 || buttRating > 10)
					desc += ", voluptuous";
				desc += " body and plush, ";
				if (gender >= 2 || this.biggestTitSize() > 4 || hipRating > 10 || buttRating > 10)
					desc += " jiggly curves";
				else desc += " soft flesh";
			}
		}
		return desc;
	}

	//OtherCoCStuff
	isLoliShota(loli: string, nope: string): string {
		if (this.tallness <= 58 && this.femininity > 40 && this.averageBreastSize() <= 3 && this.hipRating <= 6 && this.buttRating <= 6) {
			return loli;
		}
		return nope;
	}

	isLoli(): Boolean {
		return this.tallness <= 58
			&& this.femininity > 40
			&& this.averageBreastSize() <= 3
			&& this.hipRating <= 6
			&& this.buttRating <= 6
			&& this.hasVagina();

	}

	isShota(): Boolean {
		return this.tallness <= 58
			&& this.femininity > 40
			&& this.averageBreastSize() <= 3
			&& this.hipRating <= 6
			&& this.buttRating <= 6
			&& this.hasCock();

	}

	redundantRace(): Boolean {//redundant races don't need gender in appearance
		return ["shota", "loli", "kitten", "puppy"].indexOf(this.race()) >= 0;
	}

	//determine demon rating
	demonScore(): number {
		let demonCounter: number                                            = 0;
		let {hornType, horns, tailType, wingType, faceType, cor, lowerBody} = this;
		if (hornType == 1 && horns > 0) demonCounter++;
		if (hornType == 1 && horns > 4) demonCounter++;
		if (tailType == 3) demonCounter++;
		if (wingType == 6 || wingType == 7) demonCounter++;
		if (this.hasPlainSkin() && cor > 50) demonCounter++;
		if (faceType == 0 && cor > 50) demonCounter++;
		if (lowerBody == 5 || lowerBody == 6) demonCounter++;
		if (this.countCocksOfType(CockTypesEnum.DEMON) > 0) demonCounter++;
		return demonCounter;
	}

	//Determine Human Rating
	humanScore(): number {
		let humanCounter: number = 0;
		if (this.faceType == 0) humanCounter++;
		if (this.skinType == 0) humanCounter++;
		if (this.horns == 0) humanCounter++;
		if (this.tailType == 0) humanCounter++;
		if (this.wingType == 0) humanCounter++;
		if (this.lowerBody == 0) humanCounter++;
		if (this.countCocksOfType(CockTypesEnum.HUMAN) == 1 && this.cocks.length == 1) humanCounter++;
		if (this.breastRows.length == 1 && this.skinType == 0) humanCounter++;
		return humanCounter;
	}

	//Determine minotaur rating
	minoScore(): number {
		let minoCounter: number = 0;
		if (this.faceType == 3) minoCounter++;
		if (this.earType == 3) minoCounter++;
		if (this.tailType == 4) minoCounter++;
		if (this.hornType == 2) minoCounter++;
		if (this.lowerBody == 1 && minoCounter > 0) minoCounter++;
		if (this.tallness > 80 && minoCounter > 0) minoCounter++;
		if (this.cocks.length > 0 && minoCounter > 0
			&& this.countCocksOfType(CockTypesEnum.HORSE) > 0) minoCounter++;
		if (this.vaginas.length > 0) minoCounter--;
		return minoCounter;
	}

	get minotaurScore(): number {
		return this.minoScore();
	}

	//Determine cow rating
	cowScore(): number {
		let minoCounter: number = 0;
		if (this.faceType == 0) minoCounter++;
		if (this.faceType == 3) minoCounter--;
		if (this.earType == 3) minoCounter++;
		if (this.tailType == 4) minoCounter++;
		if (this.hornType == 2) minoCounter++;
		if (this.lowerBody == 1 && minoCounter > 0) minoCounter++;
		if (this.tallness >= 73 && minoCounter > 0) minoCounter++;
		if (this.vaginas.length > 0) minoCounter++;
		if (this.biggestTitSize() > 4 && minoCounter > 0) minoCounter++;
		if (this.biggestLactation() > 2 && minoCounter > 0) minoCounter++;
		return minoCounter;
	}

	sandTrapScore(): number {
		let counter: number = 0;
		if (this.hasStatusEffect("BlackNipples")) counter++;
		if (this.hasStatusEffect("Uniball")) counter++;
		if (this.hasVagina() && this.vaginaType() == 5) counter++;
		if (this.eyeType == 2) counter++;
		if (this.wingType == 12) counter++;
		if (this.hasStatusEffect("Uniball")) counter++;
		return counter;
	}

	//Determine Bee Rating
	beeScore(): number {
		let beeCounter: number = 0;
		if (this.hairColor == "shiny black") beeCounter++;
		if (this.hairColor == "black and yellow") beeCounter += 2;
		if (this.antennae > 0) {
			beeCounter++;
			if (this.faceType == 0) beeCounter++;
		}
		if (this.lowerBody == 7) {
			beeCounter++;
			if (this.vaginas.length == 1) beeCounter++;
		}
		if (this.tailType == 6) beeCounter++;
		if (this.wingType == 1) beeCounter++;
		if (this.wingType == 2) beeCounter++;
		return beeCounter;
	}

	//Determine Ferret Rating!
	ferretScore(): number {
		let counter: number = 0;
		if (this.faceType == FACE_FERRET_MASK) counter++;
		if (this.faceType == FACE_FERRET) counter += 2;
		if (this.earType == EARS_FERRET) counter++;
		if (this.tailType == TAIL_TYPE_FERRET) counter++;
		if (this.lowerBody == LOWER_BODY_TYPE_FERRET) counter++;
		if (this.hasFur() && counter > 0) counter++;
		return counter;
	}

	//Determine Dog Rating
	dogScore(): number {
		let dogCounter: number = 0;
		if (this.faceType == 2) dogCounter++;
		if (this.earType == 2) dogCounter++;
		if (this.tailType == 2) dogCounter++;
		if (this.lowerBody == 2) dogCounter++;
		if (this.dogCocks() > 0)
			dogCounter++;
		if (this.breastRows.length > 1) dogCounter++;
		if (this.breastRows.length == 3) dogCounter++;
		if (this.breastRows.length > 3) dogCounter--;
		//Fur only counts if some canine features are present
		if (this.hasFur() && dogCounter > 0)
			dogCounter++;
		return dogCounter;
	}

	mouseScore(): number {
		let coonCounter: number = 0;
		if (this.earType == 12) coonCounter++;
		if (this.tailType == 16) coonCounter++;

		if (this.faceType == 15) coonCounter++;
		if (this.faceType == 16) coonCounter += 2;
		//Fur only counts if some canine features are present
		if (this.hasFur() && coonCounter > 0)
			coonCounter++;

		if (this.tallness < 55 && coonCounter > 0) coonCounter++;
		if (this.tallness < 45 && coonCounter > 0) coonCounter++;
		return coonCounter;
	}

	raccoonScore(): number {
		let coonCounter: number = 0;
		if (this.faceType == 13) coonCounter++;
		if (this.faceType == 14) coonCounter += 2;
		if (this.earType == 11) coonCounter++;
		if (this.tailType == 15) coonCounter++;
		if (this.lowerBody == 19) coonCounter++;
		if (coonCounter > 0 && this.balls > 0) coonCounter++;
		//Fur only counts if some canine features are present
		if (this.hasFur() && coonCounter > 0)
			coonCounter++;
		return coonCounter;
	}

	//Determine Fox Rating
	foxScore(): number {
		let foxCounter: number = 0;
		if (this.faceType == 11) foxCounter++;
		if (this.earType == 9) foxCounter++;
		if (this.tailType == 13) foxCounter++;
		if (this.lowerBody == 17) foxCounter++;
		if (this.dogCocks() > 0 && foxCounter > 0)
			foxCounter++;
		if (this.breastRows.length > 1 && foxCounter > 0) foxCounter++;
		if (this.breastRows.length == 3 && foxCounter > 0) foxCounter++;
		if (this.breastRows.length == 4 && foxCounter > 0) foxCounter++;
		//Fur only counts if some canine features are present
		if (this.hasFur() && foxCounter > 0)
			foxCounter++;
		return foxCounter;
	}

	//Determine cat Rating
	catScore(): number {
		let catCounter: number = 0;
		if (this.faceType == 6) catCounter++;
		if (this.earType == 5) catCounter++;
		if (this.tailType == 8) catCounter++;
		if (this.lowerBody == 9) catCounter++;
		if (this.countCocksOfType(CockTypesEnum.CAT) > 0)
			catCounter++;
		if (this.breastRows.length > 1 && catCounter > 0) catCounter++;
		if (this.breastRows.length == 3 && catCounter > 0) catCounter++;
		if (this.breastRows.length > 3) catCounter -= 2;
		//Fur only counts if some canine features are present
		if (this.hasFur() && catCounter > 0)
			catCounter++;
		return catCounter;
	}

	//Determine lizard rating
	lizardScore(): number {
		let lizardCounter: number = 0;
		if (this.faceType == FACE_LIZARD) lizardCounter++;
		if (this.earType == EARS_LIZARD) lizardCounter++;
		if (this.tailType == TAIL_TYPE_LIZARD) lizardCounter++;
		if ([TONGUE_LIZARD, TONGUE_SNAKE].indexOf(this.tongueType) != -1)
			lizardCounter++;
		if (this.lowerBody == LOWER_BODY_TYPE_LIZARD) lizardCounter++;
		if (this.lizardCocks() > 0)
			lizardCounter++;
		if (this.hasDragonHorns())
			lizardCounter++;
		if (this.hornType == HORNS_DRACONIC_X4_12_INCH_LONG) lizardCounter++;
		if (this.armType == ARM_TYPE_PREDATOR && this.clawType == CLAW_TYPE_LIZARD) lizardCounter++;
		if (this.hasReptileScales())
			lizardCounter++;
		if (this.eyeType == EYES_LIZARD) lizardCounter++;
		if (lizardCounter >= 4 && this.eyeType == EYES_BASILISK) lizardCounter++;
		return lizardCounter;
	}

	spiderScore(): number {
		let score: number = 0;
		if (this.eyeType == 1) score += 2;
		if (this.faceType == 10) score++;
		if (this.armType == 2) score++;
		if (this.lowerBody == 15 || this.lowerBody == 16) score += 2;
		else if (score > 0) score--;
		if (this.tailType == 5) score += 2;
		if (!this.hasPlainSkin() && score > 0)
			score--;
		return score;
	}

	//Determine Horse Rating
	horseScore(): number {
		let horseCounter: number = 0;
		if (this.faceType == 1) horseCounter++;
		if (this.earType == 1) horseCounter++;
		if (this.tailType == 1) horseCounter++;
		if (this.countCocksOfType(CockTypesEnum.HORSE) > 0)
			horseCounter++;
		if (this.lowerBody == 1 || this.lowerBody == 4) horseCounter++;
		//Fur only counts if some equine features are present
		if (this.hasFur() && horseCounter > 0)
			horseCounter++;
		return horseCounter;
	}

	//Determine kitsune Rating
	kitsuneScore(): number {
		let kitsuneCounter: number = 0;
		//If the character has fox ears, +1
		if (this.earType == EARS_FOX) kitsuneCounter++;
		//If the character has a fox tail, +1
		if (this.tailType == TAIL_TYPE_FOX) kitsuneCounter++;
		//If the character has two or more fox tails, +2
		if (this.tailType == TAIL_TYPE_FOX && this.tailVenom >= 2) kitsuneCounter += 2;
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
		if (kitsuneCounter > 0 && this.femininity >= 40) kitsuneCounter++;
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
		if (this.lowerBody != LOWER_BODY_TYPE_HUMAN && this.lowerBody != LOWER_BODY_TYPE_FOX) kitsuneCounter--;
		//If the character has a nonhuman face, -1
		if (this.faceType != FACE_HUMAN && this.faceType != FACE_FOX) kitsuneCounter--;
		//If the character has ears other than fox ears, -1
		if (this.earType != EARS_FOX) kitsuneCounter--;
		//If the character has tail(s) other than fox tails, -1
		if (this.tailType != TAIL_TYPE_FOX) kitsuneCounter--;

		return kitsuneCounter;

	}

	//Determine Dragon Rating
	dragonScore(): number {
		let dragonCounter: number = 0;
		if (this.faceType == FACE_DRAGON) dragonCounter++;
		if (this.earType == EARS_DRAGON) dragonCounter++;
		if (this.tailType == TAIL_TYPE_DRACONIC) dragonCounter++;
		if (this.tongueType == TONGUE_DRACONIC) dragonCounter++;
		if (this.dragonCocks() > 0)
			dragonCounter++;
		if (this.hasDragonWings())
			dragonCounter++;
		if (this.lowerBody == LOWER_BODY_TYPE_DRAGON) dragonCounter++;
		if (this.hasDragonScales() && dragonCounter > 0)
			dragonCounter++;
		if (this.hasDragonHorns())
			dragonCounter++;
		if (this.hornType == HORNS_DRACONIC_X4_12_INCH_LONG) dragonCounter++;
		if (this.hasDragonfire())
			dragonCounter++;
		if (this.armType == ARM_TYPE_PREDATOR && this.clawType == CLAW_TYPE_DRAGON) dragonCounter++;
		if (this.eyeType == EYES_DRAGON) dragonCounter++;
		return dragonCounter;
	}

	//Goblinscore
	goblinScore(): number {
		let {earType, faceType, lowerBody, tallness, skinTone} = this;
		let horseCounter: number                               = 0;
		if (earType == 4) horseCounter++;
		if (skinTone == "pale yellow" || skinTone == "grayish-blue" || skinTone == "green" || skinTone == "dark green") horseCounter++;
		if (horseCounter > 0) {
			if (faceType == 0) horseCounter++;
			if (tallness < 48) horseCounter++;
			if (this.hasVagina())
				horseCounter++;
			if (lowerBody == 0) horseCounter++;
		}
		return horseCounter;
	}

	//Gooscore
	gooScore(): number {
		let {lowerBody, hairType, skinAdj} = this;
		let gooCounter: number             = 0;
		if (hairType == 3) gooCounter++;
		if (skinAdj == "slimy") gooCounter++;
		if (lowerBody == 8) gooCounter++;
		if (this.vaginalCapacity() > 9000)
			gooCounter++;
		if (this.hasStatusEffect("SlimeCraving"))
			gooCounter++;
		return gooCounter;
	}

	//Nagascore
	nagaScore(): number {
		let {wingType, faceType, tongueType, antennae} = this;
		let nagaCounter: number                        = 0;
		if (faceType == 5) nagaCounter++;
		if (tongueType == 1) nagaCounter++;
		if (nagaCounter > 0 && antennae == 0) nagaCounter++;
		if (nagaCounter > 0 && wingType == 0) nagaCounter++;
		return nagaCounter;
	}

	//Bunnyscore
	bunnyScore(): number {
		let {earType, tailType, wingType, faceType, lowerBody, antennae, balls} = this;
		let bunnyCounter: number                                                = 0;
		if (faceType == 8) bunnyCounter++;
		if (tailType == 10) bunnyCounter++;
		if (earType == 7) bunnyCounter++;
		if (lowerBody == 12) bunnyCounter++;
		//More than 2 balls reduces bunny score
		if (balls > 2 && bunnyCounter > 0) bunnyCounter--;
		//Human skin on bunmorph adds
		if (this.hasPlainSkin() && bunnyCounter > 1)
			bunnyCounter++;
		//No wings and antennae a plus
		if (bunnyCounter > 0 && antennae == 0) bunnyCounter++;
		if (bunnyCounter > 0 && wingType == 0) bunnyCounter++;
		return bunnyCounter;
	}

	//Harpyscore
	harpyScore(): number {
		let {earType, tailType, wingType, faceType, lowerBody, armType, hairType} = this;

		let harpy: number = 0;
		if (armType == 1) harpy++;
		if (hairType == 1) harpy++;
		if (wingType == 9) harpy++;
		if (tailType == 11) harpy++;
		if (lowerBody == 13) harpy++;
		if (harpy >= 2 && faceType == 0) harpy++;
		if (harpy >= 2 && (earType == 0 || earType == 4))
			harpy++;
		return harpy;
	}

	//Kangascore
	kangaScore(): number {
		let {earType, tailType, faceType, lowerBody} = this;

		let kanga: number = 0;
		if (this.countCocksOfType(CockTypesEnum.KANGAROO) > 0)
			kanga++;
		if (earType == 8) kanga++;
		if (tailType == 12) kanga++;
		if (lowerBody == 14) kanga++;
		if (faceType == 9) kanga++;
		if (kanga >= 2 && this.hasFur())
			kanga++;
		return kanga;
	}

	//sharkscore
	sharkScore(): number {
		let {tailType, wingType, faceType} = this;

		let sharkCounter: number = 0;
		if (faceType == 4) sharkCounter++;
		if (wingType == 8) sharkCounter++;
		if (tailType == 7) sharkCounter++;
		//skin counting only if PC got any other shark traits
		if (this.hasPlainSkin() && sharkCounter > 0)
			sharkCounter++;
		return sharkCounter;
	}

	//Determine Mutant Rating
	mutantScore(): number {
		let mutantCounter: number = 0;
		if (this.faceType > 0) mutantCounter++;
		if (this.hasPlainSkin())
			mutantCounter++;
		if (this.tailType > 0) mutantCounter++;
		if (this.cocks.length > 1) mutantCounter++;
		if (this.hasCock() && this.hasVagina())
			mutantCounter++;
		if (this.hasFuckableNipples())
			mutantCounter++;
		if (this.breastRows.length > 1) mutantCounter++;
		if (this.faceType == 1) {
			if (this.hasFur())
				mutantCounter--;
			if (this.tailType == 1) mutantCounter--;
		}
		if (this.faceType == 2) {
			if (this.hasFur())
				mutantCounter--;
			if (this.tailType == 2) mutantCounter--;
		}
		return mutantCounter;
	}

	//Salamander score
	salamanderScore(): number {
		let salamanderCounter: number = 0;
		if (this.armType == ARM_TYPE_SALAMANDER) salamanderCounter++;
		if (this.lowerBody == LOWER_BODY_TYPE_SALAMANDER) salamanderCounter++;
		if (this.tailType == TAIL_TYPE_SALAMANDER) salamanderCounter++;
		if (this.findPerk("Lustzerker") >= 0)
			salamanderCounter++;
		if (salamanderCounter >= 2) {
			if (this.countCocksOfType(CockTypesEnum.LIZARD) > 0)
				salamanderCounter++;
			if (this.faceType == 0) salamanderCounter++;
			if (this.earType == 0) salamanderCounter++;
		}
		return salamanderCounter;
	}

	//------------
	// Mod-Added
	//------------
	sirenScore(): number {
		let sirenCounter: number = 0;
		if (this.faceType == 4 && this.tailType == 7 && this.wingType == WING_TYPE_FEATHERED_LARGE && this.armType == ARM_TYPE_HARPY) sirenCounter += 4;
		if (this.hasVagina())
			sirenCounter++;
		//if (hasCock() && findFirstCockType(CockTypesEnum.ANEMONE) >= 0)
		//	sirenCounter++;
		return sirenCounter;
	}

	pigScore(): number {
		let pigCounter: number = 0;
		if (this.earType == EARS_PIG) pigCounter++;
		if (this.tailType == TAIL_TYPE_PIG) pigCounter++;
		if (this.faceType == FACE_PIG || FACE_BOAR) pigCounter++;
		if (this.lowerBody == LOWER_BODY_TYPE_CLOVEN_HOOFED) pigCounter += 2;
		if (this.countCocksOfType(CockTypesEnum.PIG) > 0)
			pigCounter++;
		return pigCounter;
	}

	satyrScore(): number {
		let satyrCounter: number = 0;
		if (this.lowerBody == LOWER_BODY_TYPE_CLOVEN_HOOFED) satyrCounter++;
		if (this.tailType == TAIL_TYPE_GOAT) satyrCounter++;
		if (satyrCounter >= 2) {
			if (this.earType == EARS_ELFIN) satyrCounter++;
			if (this.faceType == FACE_HUMAN) satyrCounter++;
			if (this.countCocksOfType(CockTypesEnum.HUMAN) > 0)
				satyrCounter++;
			if (this.balls > 0 && this.ballSize >= 3) satyrCounter++;
		}
		return satyrCounter;
	}

	rhinoScore(): number {
		let rhinoCounter: number = 0;
		if (this.earType == EARS_RHINO) rhinoCounter++;
		if (this.tailType == TAIL_TYPE_RHINO) rhinoCounter++;
		if (this.faceType == FACE_RHINO) rhinoCounter++;
		if (this.hornType == HORNS_RHINO) rhinoCounter++;
		if (rhinoCounter >= 2 && this.skinTone == "gray") rhinoCounter++;
		if (rhinoCounter >= 2 && this.hasCock() && this.countCocksOfType(CockTypesEnum.RHINO) > 0)
			rhinoCounter++;
		return rhinoCounter;
	}

	echidnaScore(): number {
		let echidnaCounter: number = 0;
		if (this.earType == EARS_ECHIDNA) echidnaCounter++;
		if (this.tailType == TAIL_TYPE_ECHIDNA) echidnaCounter++;
		if (this.faceType == FACE_ECHIDNA) echidnaCounter++;
		if (this.tongueType == TONGUE_ECHIDNA) echidnaCounter++;
		if (this.lowerBody == LOWER_BODY_TYPE_ECHIDNA) echidnaCounter++;
		if (echidnaCounter >= 2 && this.hasFur())
			echidnaCounter++;
		if (echidnaCounter >= 2 && this.countCocksOfType(CockTypesEnum.ECHIDNA) > 0)
			echidnaCounter++;
		return echidnaCounter;
	}

	deerScore(): number {
		let deerCounter: number = 0;
		if (this.earType == EARS_DEER) deerCounter++;
		if (this.tailType == TAIL_TYPE_DEER) deerCounter++;
		if (this.faceType == FACE_DEER) deerCounter++;
		if (this.lowerBody == LOWER_BODY_TYPE_CLOVEN_HOOFED || this.lowerBody == LOWER_BODY_TYPE_DEERTAUR) deerCounter++;
		if (this.hornType == HORNS_ANTLERS && this.horns >= 4) deerCounter++;
		if (deerCounter >= 2 && this.hasFur())
			deerCounter++;
		if (deerCounter >= 3 && this.countCocksOfType(CockTypesEnum.HORSE) > 0)
			deerCounter++;
		return deerCounter;
	}

	//Dragonne
	dragonneScore(): number {
		let dragonneCounter: number = 0;
		if (this.faceType == FACE_CAT) dragonneCounter++;
		if (this.earType == EARS_CAT) dragonneCounter++;
		if (this.tailType == TAIL_TYPE_CAT) dragonneCounter++;
		if (this.tongueType == TONGUE_DRACONIC) dragonneCounter++;
		if (this.hasDragonWings())
			dragonneCounter++;
		if (this.lowerBody == LOWER_BODY_TYPE_CAT) dragonneCounter++;
		if (this.hasReptileScales() && dragonneCounter > 0)
			dragonneCounter++;
		return dragonneCounter;
	}

	//Manticore
	manticoreScore(): number {
		let catCounter: number = 0;
		if (this.faceType == FACE_CAT) catCounter++;
		if (this.earType == EARS_CAT) catCounter++;
		if (this.tailType == TAIL_TYPE_SCORPION) catCounter += 2;
		if (this.lowerBody == LOWER_BODY_TYPE_CAT) catCounter++;
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
	}

	bimboScore(): number {
		let bimboCounter: number = 0;
		if (this.hasVagina()) {
			bimboCounter += 2;
			if (this.vaginas[0].vaginalWetness >= VAGINA_WETNESS_SLICK) bimboCounter++;
		}
		if (this.hasCock())
			bimboCounter -= 2;
		if (this.armorName == "bimbo skirt") bimboCounter += 1;
		if (this.findPerk("BimboBrains") >= 0)
			bimboCounter += 2;
		if (this.findPerk("BimboBody") >= 0)
			bimboCounter += 2;
		if (kGAMECLASS.flags[kFLAGS.BIMBOSKIRT_MINIMUM_LUST] > 25) bimboCounter++;
		if (kGAMECLASS.flags[kFLAGS.BIMBOSKIRT_MINIMUM_LUST] > 10) bimboCounter++;
		if (this.biggestTitSize() >= 5)
			bimboCounter++;
		else bimboCounter += this.biggestTitSize() / 5.0;

		if (this.biggestTitSize() >= 10)
			bimboCounter++;
		else bimboCounter += this.biggestTitSize() / 10.0;

		if (this.hipRating >= 8) bimboCounter++;
		else bimboCounter += this.hipRating / 8.0;

		if (this.buttRating > 8) bimboCounter++;
		else bimboCounter += this.buttRating / 8.0;

		if (this.tone < 15) bimboCounter++;
		if (this.femininity > 80) bimboCounter++;
		else if (this.femininity < 20) bimboCounter--;
		else bimboCounter += (this.femininity - 50.0) / 30.0;

		if (this.hairColor == "platinum blonde") bimboCounter++;
		if (this.hairLength > 10) bimboCounter++;
		if (this.inte < 20) bimboCounter++;
		if (bimboCounter < 0) bimboCounter = 0;
		if (bimboCounter > 20) bimboCounter = 20;

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
	}

	lactationQ(): number {
		if (this.biggestLactation() < 1)
			return 0;
		//(Milk production TOTAL= breastSize x 10 * lactationMultiplier * breast total * milking-endurance (1- default, maxes at 2.  Builds over time as milking as done)
		//(Small – 0.01 mLs – Size 1 + 1 Multi)
		//(Large – 0.8 - Size 10 + 4 Multi)
		//(HUGE – 2.4 - Size 12 + 5 Multi + 4 tits)

		let total: number = 0;

		let breastRows      = this.breastRows;
		let counter: number = breastRows.length;
		while (counter > 0) {
			counter--;
			total += 10 * breastRows[counter].breastRating * breastRows[counter].lactationMultiplier * breastRows[counter].breasts;

		}
		if (this.findPerk("MilkMaid") >= 0)
			total += 200 + (this.perkv1("MilkMaid") * 100);
		if (this.statusEffectv1("LactationReduction") >= 48)
			total = total * 1.5;
		if (total > Number.MAX_VALUE) total = Number.MAX_VALUE;
		return total;
	}

	isLactating(): Boolean {
		return this.lactationQ() > 0;

	}

	race(): string {
		//Determine race type:
		let race                                      = "human";
		let isTaur                                    = this.isTaur();
		let {hornType, wingType, faceType, lowerBody} = this;
		if (this.catScore() >= 4) {
			if (isTaur && lowerBody == LOWER_BODY_TYPE_CAT) {
				race = this.isLoliShota("kitten-taur", "cat-taur");
				if (faceType == 0) race = "sphinx-morph"; // no way to be fully feral anyway
			}
			else {
				race = this.isLoliShota("kitten-morph", "cat-morph");
				if (faceType == 0) race = this.isLoliShota("kitten-", "cat-") + this.mf("boy", "girl");
			}
		}
		if (this.lizardScore() >= 4) {
			if (this.hasDragonWingsAndFire())
				race = this.isBasilisk() ? "dracolisk" : "dragonewt";
			else race = this.isBasilisk() ? "basilisk" : "lizan";
			if (isTaur) race += "-taur";
			if (this.lizardScore() >= 9)
				return race; // High lizardScore? always return lizan-race
		}
		if (this.dragonScore() >= 6) {
			race = "dragon-morph";
			if (faceType == 0) race = "dragon-" + this.mf("man", "girl");
			if (isTaur) race = "dragon-taur";
		}
		if (this.raccoonScore() >= 4) {
			race = "raccoon-morph";
			if (this.balls > 0 && this.ballSize > 5) race = "tanuki-morph";
			if (isTaur) race = "raccoon-taur";
		}
		if (this.dogScore() >= 4) {
			if (isTaur && lowerBody == LOWER_BODY_TYPE_DOG) race = this.isLoliShota("puppy", "dog");
			else {
				race = this.isLoliShota("puppy-morph", "dog-morph");
				if (faceType == 0) race = this.isLoliShota("puppy-" + this.mf("boy", "girl"), "dog-" + this.mf("man", "girl"));
			}
		}
		let hasFur = this.hasFur();
		if (this.foxScore() >= 4) {
			if (isTaur && lowerBody == LOWER_BODY_TYPE_FOX) race = "fox-taur";
			else if (hasFur) race = "fox-morph";
			else race = "fox-" + this.mf("morph", "girl");
		}
		if (this.ferretScore() >= 4) {
			if (hasFur) race = "ferret-morph";
			else race = "ferret-" + this.mf("morph", "girl");
		}
		if (this.kitsuneScore() >= 4) {
			race = "kitsune";
		}
		if (this.horseScore() >= 3) {
			if (isTaur) race = "centaur-morph";
			else if (hornType == HORNS_UNICORN) {
				if (wingType == WING_TYPE_FEATHERED_LARGE) race = "alicorn";
				else race = "unicorn-morph";
			} else {
				if (wingType == WING_TYPE_FEATHERED_LARGE) race = "pegasus";
				else race = "equine-morph";
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
			if (this.gender >= 2) race = "harpy";
			else race = "avian";
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
			if (faceType != 16) race = "mouse-" + this.mf("boy", "girl");
			else race = "mouse-morph";
		}
		if (this.salamanderScore() >= 4) {
			if (isTaur) race = "salamander-taur";
			else race = "salamander-" + this.mf("boy", "girl");
		}
		//<mod>
		if (this.pigScore() >= 4) {
			race = "pig-morph";
			if (faceType == 0) race = "pig-" + this.mf("boy", "girl");
			if (faceType == 20) race = "boar-morph";
		}
		if (this.satyrScore() >= 4) {
			race = "satyr";
		}
		if (this.rhinoScore() >= 4) {
			race = "rhino-morph";
			if (faceType == 0) race = "rhino-" + this.mf("man", "girl");
		}
		if (this.echidnaScore() >= 4) {
			race = "echidna-morph";
			if (faceType == 0) race = "echidna-" + this.mf("boy", "girl");
		}
		if (this.deerScore() >= 4) {
			if (isTaur) race = "deer-taur";
			else {
				race = "deer-morph";
				if (faceType == 0) race = "deer-" + this.mf("morph", "girl");
			}
		}
		//Special, bizarre races
		if (this.dragonneScore() >= 6) {
			if (isTaur) race = "dragonne-taur";
			else {
				race = "dragonne-morph";
				if (faceType == 0) race = "dragonne-" + this.mf("man", "girl");
			}
		}
		if (this.manticoreScore() >= 6) {
			race = "manticore-morph";
			if (faceType == 0) race = "manticore-" + this.mf("man", "girl");
		}
		if (this.sirenScore() >= 4) {
			race = "siren";
		}
		//</mod>
		if (lowerBody == 3) race = "naga";

		if (lowerBody == LOWER_BODY_TYPE_HOOFED && isTaur) {
			if (wingType == WING_TYPE_FEATHERED_LARGE) {
				if (hornType == HORNS_UNICORN) race = "alicorn-taur";
				else race = "pegataur";
			} else {
				if (hornType == HORNS_UNICORN) race = "unicorn-taur";
				else {
					if (this.horseScore() >= 5)
						race = "equitaur";
					else if (this.minoScore() >= 4)
						race = "mino-centaur";
					else race = "centaur";
				}
			}
		}

		if (lowerBody == LOWER_BODY_TYPE_PONY) race = "pony-kin";

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
	}

}
