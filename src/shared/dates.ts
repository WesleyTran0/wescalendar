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

/** Maps Month Index to Month name. Uses 0-indexing where month 0 is January*/
export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** Maps Month Index to shortened Month name. Uses 0-indexing where month 0 is January*/
export const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// TODO: do this to be used in Month to create the weeks
export function getWeekRange(date: Date): [Date, Date] {
  const startDate: Date = getStartOfWeek(date);
  const endDate: Date = getEndOfWeek(date);

  return [startDate, endDate];
}

/** Returns the first date of viewing week that the given Date is in. */
export function getStartOfWeek(date: Date): Date {
  if (date.getDate() != 1 && date.getDate() < 7) {
    const prevMonthEnd = getPreviousMonthEnd(date);
    return offsetDate(prevMonthEnd, -prevMonthEnd.getDay());
  } else {
    return offsetDate(date, -date.getDay());
  }
}

/** Returns the last date of the viewing week that the given Date is in. */
function getEndOfWeek(date: Date): Date {
  const monthEnd = getMonthEnd(date).getDate();

  if (date.getDate() + 7 > monthEnd) {
    const nextMonthStart = getNextMonthStart(date);
    return offsetDate(nextMonthStart, 7 - 1 - nextMonthStart.getDay());
  }

  return offsetDate(date, 7 - 1 - date.getDay());
}

/** Returns the number of weeks in month of the given Date */
export function getNumWeeksInMonth(date: Date): number {
  const firstSatOfMonthDate: number = offsetDate(
    date,
    7 - 1 - date.getDay(),
  ).getDate();
  const endOfMonth = getMonthEnd(date).getDate();
  let numWeeks = 1;

  numWeeks = numWeeks + Math.ceil((endOfMonth - firstSatOfMonthDate) / 7);
  return numWeeks;
}

/** Returns a the date that is dayOffset away from the given date*/
export function offsetDate(date: Date, dayOffset: number): Date {
  const copyDate = new Date(date);
  copyDate.setDate(copyDate.getDate() + dayOffset);
  return copyDate;
}
