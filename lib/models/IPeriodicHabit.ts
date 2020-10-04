export interface Checkins {[key: string]:number}
export interface IPeriodicHabit {   
    checkins:Checkins;
    getCheckinTotalForPeriod():number;
    getTodaysCheckinValue():number;
}