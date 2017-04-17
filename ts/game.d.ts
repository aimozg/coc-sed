declare class TimeModel {
	minutes: number;
	hours: number;
	days: number;
}
declare class GameModel {
	readonly time: TimeModel;
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
