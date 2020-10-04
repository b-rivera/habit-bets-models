import { Habit } from "./Habit";
export declare class OneTimeHabit extends Habit {
    deadline: Date;
    completed: boolean;
    constructor(id: string, name: string, description: string, category: string, dateCreated: Date, type: string, period: string, status: string, penalty: number, deadline: Date, completed: boolean, archivedDate?: Date);
    isDueThisWeek: () => boolean;
}
