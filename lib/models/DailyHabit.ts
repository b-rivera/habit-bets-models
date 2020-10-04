import { Habit } from "./Habit";
import { IPeriodicHabit, Checkins } from "./IPeriodicHabit";

export class DailyHabit extends Habit implements IPeriodicHabit{
    checkins:Checkins;

    constructor(id:string, name:string, description:string, category:string, 
        dateCreated:Date, type:string, period:string, status:string, 
        penalty:number, checkins:Checkins, archivedDate?:Date){
        super(id, name, description, category, dateCreated, type, period, status, 
            penalty, archivedDate);
        this.checkins = checkins;
    }

    getCheckinTotalForPeriod=()=>{
        return this.calculateCheckinTotalForPeriod(this.checkins);
    }    
    
    getTodaysCheckinValue=()=>{
        return this.retrieveTodaysCheckinValue(this.checkins);
    }
}