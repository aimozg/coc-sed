declare class TimeModel {
	minutes: number;
	hours: number;
	days: number;
}
declare class GameModel {
	readonly time: TimeModel;
}
declare class Measurements {
	footInchOrMetres(n: number): string;
}
declare class PrisonCaptor {
	captorTitle: string;
	captorName: string;
	captorPronoun1: string;
	captorPronoun2: string;
	captorPronoun3: string;
}
declare class PrisonClass {
	readonly prisonCaptor: PrisonCaptor;
}
declare namespace kFLAGS {
	const GOO_NAME: number;
	const MILK_NAME: number;
}
