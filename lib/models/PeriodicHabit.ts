import { Habit } from "./Habit";
import { IPeriodicHabit, Checkins } from "./IPeriodicHabit";

export class PeriodicHabit extends Habit implements IPeriodicHabit{
    numRequired:number;    
    checkins:Checkins;

    constructor(id:string, name:string, description:string, category:string, 
        dateCreated:Date, type:string, period:string, status:string, penalty:number, 
        numRequired:number, checkins:Checkins, archivedDate?:Date){
        super(id, name, description, category, dateCreated, type, period, status, 
            penalty, archivedDate);
        this.numRequired = numRequired;
        this.checkins = checkins;
    }
    
    getCheckinTotalForPeriod=()=>{
        return this.calculateCheckinTotalForPeriod(this.checkins);
    }

    getTodaysCheckinValue=()=>{
        return this.retrieveTodaysCheckinValue(this.checkins);
    }
}