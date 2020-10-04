export function getDateString(date?:Date){
  if (!date) return undefined;
  if (date instanceof Date && isNaN(date.getTime())) return undefined;

  const monthNames =["Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep", "Oct","Nov","Dec"];

  let day = date.getDate();
  let monthName = monthNames[date.getMonth()];
  let year = date.getFullYear();
  
  return `${day}-${monthName}-${year}`;
}

export function addDays(date: Date, days: number):Date {
  if (date instanceof Date && isNaN(date.getTime())) return date;
  if (days===0) return date;
  
  var result = new Date(date.getTime());
  result.setDate(result.getDate() + days);
  return result;
}

export function getDateKeyString(date?:Date):string{
  if (!date) return '';
  if (date instanceof Date && isNaN(date.getTime())) return '';
  
  return date.getFullYear() + '-' 
      + ('0' + (date.getMonth() + 1)).slice(-2) + '-' 
      + ('0' + date.getDate()).slice(-2);
}

export function getFirstDayOfTheWeek(date:Date):Date {
  // Get day of the week as number
  let day = date.getDay();
  // Get new day of the month
  // subtract day from month day, then add 1 to make it monday
  // or subtract 6 to make it previous monday if sunday
  let diff = date.getDate() - day + (day == 0 ? -6:1); // will need to adjust when day is sunday
  return new Date(date.setDate(diff));
}

export function getLastDayOfTheWeek(date:Date):Date {
  // Get day of the week as number
  let dayTillSunday = (date.getDay() > 0) ? 6 - date.getDay() + 1 : 0;
  // Get new day of the month
  // subtract day from month day, then add 1 to make it monday
  // or subtract 6 to make it previous monday if sunday
  let diff = date.getDate() + dayTillSunday; // will need to adjust when day is sunday
  return new Date(date.setDate(diff));
}

// const utility = {
//   getDateString: getDateString,
//   addDays: addDays,
//   getDateKeyString: getDateKeyString,
//   getFirstDayOfTheWeek: getFirstDayOfTheWeek,
//   getLastDayOfTheWeek: getLastDayOfTheWeek
// }

// export {utility}
