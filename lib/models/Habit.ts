import { getDateKeyString, addDays, getFirstDayOfTheWeek } from "../utilities/dateParsing";
import { Checkins } from "./IPeriodicHabit";

export class Habit {
    id:string;
    name = "";
    description = "";
    category = "";
    dateCreated:Date;
    type = "";
    period = "";
    status = "";
    penalty = 0;
    archivedDate?: Date;

    constructor(id:string, name:string, description:string, category:string,
        dateCreated:Date, type:string, period:string, status:string, penalty:number, 
        archivedDate?:Date){
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.dateCreated = new Date(dateCreated.getVarDate());
        this.type = type;
        this.period = period;
        this.status = status;
        this.penalty = penalty;
        this.archivedDate = archivedDate ? new Date(archivedDate.getVarDate()) : undefined;
    }

    getPeriodStartDate(date:Date){        
        if (this.period = 'week'){ //Gets Monday
            return getFirstDayOfTheWeek(date);
        }
        else if (this.period = 'month'){
            return new Date(date.setDate(1));
        }
        else
            throw new Error("no date calculation for period: " + this.period);
    }

    protected calculateCheckinTotalForPeriod=(checkins:Checkins):number => {
        let hoursThisPeriod = 0;

        const endDate = new Date();
        const startDate = this.getPeriodStartDate(new Date());

        const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        for (let index = 0; index <= diffDays; index++) {
            let key = getDateKeyString(addDays(startDate, index));
            
            // Only count misses and checkins, don't subtract skips
            let hours = 0;            
            if (checkins[key] && checkins[key] > 0) hours = checkins[key];
            //let hours = checkins[key] || 0;
            hoursThisPeriod = hoursThisPeriod + hours;
        }

        return hoursThisPeriod;
    }

    protected retrieveTodaysCheckinValue=(checkins:Checkins):number => {
        let key = getDateKeyString(new Date());
        return checkins.hasOwnProperty(key) ? checkins[key] : 0;
    }
}