import { Habit } from "./Habit";
import { IPeriodicHabit, Checkins } from "./IPeriodicHabit";
export declare class PeriodicHabit extends Habit implements IPeriodicHabit {
    numRequired: number;
    checkins: Checkins;
    constructor(id: string, name: string, description: string, category: string, dateCreated: Date, type: string, period: string, status: string, penalty: number, numRequired: number, checkins: Checkins, archivedDate?: Date);
    getCheckinTotalForPeriod: () => number;
    getTodaysCheckinValue: () => number;
}
