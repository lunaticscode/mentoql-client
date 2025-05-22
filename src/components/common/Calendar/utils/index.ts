import { CalendarMode } from "../types";

const isEqualByMode = (
  srcDate: Date,
  targetDate: Date,
  mode: CalendarMode
): boolean => {
  const [year1, month1, date1] = [
    srcDate.getFullYear(),
    srcDate.getMonth(),
    srcDate.getDate(),
  ];
  const [year2, month2, date2] = [
    targetDate.getFullYear(),
    targetDate.getMonth(),
    targetDate.getDate(),
  ];
  console.log(mode);
  const mapModeToEqaul: Record<CalendarMode, () => boolean> = {
    month: () => {
      return year1 === year2 && month1 === month2 && date1 === date2;
    },
    week: () => {
      return year1 === year2 && month1 === month2 && date1 === date2;
    },
    year: () => {
      return year1 === year2 && month1 === month2;
    },
  };
  return mapModeToEqaul[mode]();
};

const renderDisplayDateByMode = (
  date: Date,
  mode: CalendarMode,
  where: "datecell" | "header"
): string => {
  const mapDateStringToMode: Record<
    CalendarMode,
    { [where in "datecell" | "header"]: () => string }
  > = {
    month: {
      datecell: () => `${date.getDate()}`,
      header: () => {
        return `${date.getDate()}`;
      },
    },
    year: {
      datecell: () => `${date.getDate()}`,
      header: () => {
        return `${date.getDate()}`;
      },
    },
    week: {
      datecell: () => `${date.getDate()}`,
      header: () => {
        return `${date.getDate()}`;
      },
    },
  };
  return mapDateStringToMode[mode][where]();
};

const getMemorizedRule = (date: Date, mode: CalendarMode) => {
  const mapMemorizedToMode: Record<CalendarMode, () => string> = {
    month: () => {
      return `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;
    },
    week: () => {
      return `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;
    },
    year: () => {
      return `${date.getFullYear()}${date.getMonth()}`;
    },
  };
  return mapMemorizedToMode[mode]();
};

const getCalendarDates = (currentDate: Date, mode: CalendarMode) => {
  const mapModeToDates: {
    [key in CalendarMode]: key extends "month" | "year"
      ? () => Date[][]
      : () => Date[];
  } = {
    month: () => {
      const [currentYear, currentMonth] = [
        currentDate.getFullYear(),
        currentDate.getMonth(),
      ];

      const [firstDayOfMonth, lastDayOfMonth] = [
        new Date(currentYear, currentMonth, 1).getDay(),
        new Date(currentYear, currentMonth + 1, 0).getDay(),
      ];

      const [firstDateOfCalendar, lastDateOfCalendar] = [
        new Date(currentYear, currentMonth, 1 - firstDayOfMonth),
        new Date(currentYear, currentMonth + 1, 0 + 6 - lastDayOfMonth),
      ];

      const dateLength =
        (lastDateOfCalendar.getTime() - firstDateOfCalendar.getTime()) /
          (3600 * 1000 * 24) +
        1;

      const dates = Array.from({ length: dateLength / 7 }, (_, weekIndex) =>
        Array.from(
          { length: 7 },
          (_, dateIndex) =>
            new Date(
              firstDateOfCalendar.getTime() +
                3600 * 24 * 1000 * (weekIndex * 7 + dateIndex)
            )
        )
      );
      return dates;
    },
    week: () => {
      return [];
    },
    year: () => {
      return [];
    },
  };
  return mapModeToDates[mode]();
};

export {
  isEqualByMode,
  renderDisplayDateByMode,
  getMemorizedRule,
  getCalendarDates,
};
