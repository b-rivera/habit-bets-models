// Export Models
export * from "./models/Habit";
export * from "./models/IPeriodicHabit";
export * from "./models/DailyHabit";
export * from "./models/HourlyHabit";
export * from "./models/IPeriodicHabit";
export * from "./models/OneTimeHabit";
export * from "./models/PeriodicHabit";
export * from "./models/habitFactory";
export * from "./models/User";

// Export Utilities
import * as dparsing from "./utilities/dateParsing";

const utilities = {
    getDateString: dparsing.getDateString,
    addDays: dparsing.addDays,
    getDateKeyString: dparsing.getDateKeyString,
    getFirstDayOfTheWeek: dparsing.getFirstDayOfTheWeek,
    getLastDayOfTheWeek: dparsing.getLastDayOfTheWeek
  }

export {utilities}