import { Habit } from "./Habit";
import { getFirstDayOfTheWeek, getLastDayOfTheWeek } from "../utilities/dateParsing";

export class OneTimeHabit extends Habit{
    deadline:Date;
    completed:boolean;

    constructor(id:string, name:string, description:string, category:string, 
        dateCreated:Date, type:string, period:string, status:string, penalty:number, 
        deadline:Date, completed:boolean, archivedDate?:Date){
        super(id, name, description, category, dateCreated, type, period, status, 
            penalty, archivedDate);
        this.deadline = new Date(deadline.getVarDate());
        this.completed = completed;
    }

    isDueThisWeek = ():boolean => {
        let _today = new Date();
        let _start = getFirstDayOfTheWeek(_today).getTime();
        let _last = getLastDayOfTheWeek(_today).getTime();
        let _deadline = this.deadline.getTime();

        // console.log("Deadline: " + this.deadline);
        // console.log("Start: " + getFirstDayOfTheWeek(_today));
        // console.log("Last: " + getLastDayOfTheWeek(_today));
        
        return (_deadline <= _last && _deadline >= _start) ? true : false;
    }
}