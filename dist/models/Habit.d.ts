import { Checkins } from "./IPeriodicHabit";
export declare class Habit {
    id: string;
    name: string;
    description: string;
    category: string;
    dateCreated: Date;
    type: string;
    period: string;
    status: string;
    penalty: number;
    archivedDate?: Date;
    constructor(id: string, name: string, description: string, category: string, dateCreated: Date, type: string, period: string, status: string, penalty: number, archivedDate?: Date);
    getPeriodStartDate(date: Date): Date;
    protected calculateCheckinTotalForPeriod: (checkins: Checkins) => number;
    protected retrieveTodaysCheckinValue: (checkins: Checkins) => number;
}
