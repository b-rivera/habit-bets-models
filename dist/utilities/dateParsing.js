"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastDayOfTheWeek = exports.getFirstDayOfTheWeek = exports.getDateKeyString = exports.addDays = exports.getDateString = void 0;
function getDateString(date) {
    if (!date)
        return undefined;
    if (date instanceof Date && isNaN(date.getTime()))
        return undefined;
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var day = date.getDate();
    var monthName = monthNames[date.getMonth()];
    var year = date.getFullYear();
    return day + "-" + monthName + "-" + year;
}
exports.getDateString = getDateString;
function addDays(date, days) {
    if (date instanceof Date && isNaN(date.getTime()))
        return date;
    if (days === 0)
        return date;
    var result = new Date(date.getTime());
    result.setDate(result.getDate() + days);
    return result;
}
exports.addDays = addDays;
function getDateKeyString(date) {
    if (!date)
        return '';
    if (date instanceof Date && isNaN(date.getTime()))
        return '';
    return date.getFullYear() + '-'
        + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
        + ('0' + date.getDate()).slice(-2);
}
exports.getDateKeyString = getDateKeyString;
function getFirstDayOfTheWeek(date) {
    // Get day of the week as number
    var day = date.getDay();
    // Get new day of the month
    // subtract day from month day, then add 1 to make it monday
    // or subtract 6 to make it previous monday if sunday
    var diff = date.getDate() - day + (day == 0 ? -6 : 1); // will need to adjust when day is sunday
    return new Date(date.setDate(diff));
}
exports.getFirstDayOfTheWeek = getFirstDayOfTheWeek;
function getLastDayOfTheWeek(date) {
    // Get day of the week as number
    var dayTillSunday = (date.getDay() > 0) ? 6 - date.getDay() + 1 : 0;
    // Get new day of the month
    // subtract day from month day, then add 1 to make it monday
    // or subtract 6 to make it previous monday if sunday
    var diff = date.getDate() + dayTillSunday; // will need to adjust when day is sunday
    return new Date(date.setDate(diff));
}
exports.getLastDayOfTheWeek = getLastDayOfTheWeek;
// const utility = {
//   getDateString: getDateString,
//   addDays: addDays,
//   getDateKeyString: getDateKeyString,
//   getFirstDayOfTheWeek: getFirstDayOfTheWeek,
//   getLastDayOfTheWeek: getLastDayOfTheWeek
// }
// export {utility}
