import { Habit } from "./Habit";
import { IPeriodicHabit, Checkins } from "./IPeriodicHabit";
export declare class DailyHabit extends Habit implements IPeriodicHabit {
    checkins: Checkins;
    constructor(id: string, name: string, description: string, category: string, dateCreated: Date, type: string, period: string, status: string, penalty: number, checkins: Checkins, archivedDate?: Date);
    getCheckinTotalForPeriod: () => number;
    getTodaysCheckinValue: () => number;
}
