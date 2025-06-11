import {
  getYear,
  getYearStart,
  getYearEnd,
  getMonth as getMonthIdx,
  getMonthStart,
  getPreviousMonthStart,
  getNextMonthStart,
  getMonthEnd,
  getPreviousMonthEnd,
  getMonthRange,
  getDayStart,
  getDayEnd,
  getDayRange,
} from "@wojtekmaj/date-utils";

const test = new Date("04/02/2025");
console.log(new Date("06/01/2025").getDay());
// Allows to get the day of the week idx
// console.log("getMonth output: " + getMonthStart(test).getDay());

export function getCurWeekRange(date: Date): [Date, Date] { }

// FIX: garbage function to be replaced with the one above lmao
export function getStartOfViewWeek(date: Date): Date {
  const weekDate = date.getDay();
  if (weekDate == 0) {
    return new Date(date);
  }

  const prevMonthEnd = getPreviousMonthEnd(date).getDate();
  return new Date(date.setDate(prevMonthEnd - weekDate + 1));
}

export function getNumWeeksInMonth(date: Date): number {
  const startOfMonth = getMonthStart(date);
  const satOfWeekOne = 7 - startOfMonth.getDay();
  const endOfMonth = getMonthEnd(date).getDate();

  return Math.ceil((endOfMonth - satOfWeekOne) / 7);
}
