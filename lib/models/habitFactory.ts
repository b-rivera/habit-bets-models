import { Habit } from "./Habit";
import { DailyHabit } from "./DailyHabit";
import { PeriodicHabit } from "./PeriodicHabit";
import { HourlyHabit } from "./HourlyHabit";
import { OneTimeHabit } from "./OneTimeHabit";

export class HabitFactory {  

  public createHabit(obj:any): Habit{
    if (!obj.hasOwnProperty('id')) throw "'id' property is required";
    if (!obj.hasOwnProperty('name')) throw "'name' property is required";
    if (!obj.hasOwnProperty('dateCreated')) throw "'dateCreated' property is required";
    if (!obj.hasOwnProperty('type')) throw "'type' property is required";
    if (!obj.hasOwnProperty('period')) throw "'period' property is required";
    if (!obj.hasOwnProperty('status')) throw "'status' property is required";
    if (!obj.hasOwnProperty('penalty')) throw "'penalty' property is required";

    // Parse dates if string (firebase need strings)
    if (obj.hasOwnProperty('dateCreated') && (typeof obj.dateCreated) == "string")
      obj.dateCreated = new Date(obj.dateCreated)
    if (obj.hasOwnProperty('deadline') && (typeof obj.deadline) == "string")
      obj.deadline = new Date(obj.deadline)
    if (obj.hasOwnProperty('archivedDate') && (typeof obj.archivedDate) == "string")
      obj.archivedDate = new Date(obj.archivedDate)

    switch(obj.type){
      case 'daily':
        return new DailyHabit(obj.id, obj.name, obj.description || "", obj.category || "", 
          obj.dateCreated, obj.type, obj.period, obj.status, obj.penalty, 
          obj.checkins || {}, obj.archivedDate || undefined);
      case 'periodic':
        return new PeriodicHabit(obj.id, obj.name, obj.description || "", obj.category || "", 
          obj.dateCreated, obj.type, obj.period, obj.status, obj.penalty, 
          obj.numRequired || 0, obj.checkins || {}, obj.archivedDate || undefined);
      case 'hourly':
        return new HourlyHabit(obj.id, obj.name, obj.description || "", obj.category || "", 
          obj.dateCreated, obj.type, obj.period, obj.status, obj.penalty, 
          obj.numRequired || 0, obj.checkins || {}, obj.archivedDate || undefined);
      case 'oneTime':
        if (!obj.hasOwnProperty('deadline')) throw "'deadline' property is required";
        return new OneTimeHabit(obj.id, obj.name, obj.description || "", obj.category || "", 
          obj.dateCreated, obj.type, obj.period, obj.status, obj.penalty, 
          obj.deadline, obj.completed, obj.archivedDate || undefined);
      default:
        return new Habit(obj.id, obj.name, obj.description || "", obj.category || "", 
          obj.dateCreated, obj.type, obj.period, obj.status, obj.penalty, 
          obj.archivedDate || undefined);
    }
  }
}