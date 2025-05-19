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
    srcDate.getMonth(),
    srcDate.getDate(),
  ];
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

const renderDateCellByMode = (date: Date, mode: CalendarMode): string => {
  const mapDateStringToMode: Record<CalendarMode, () => string> = {
    month: () => {
      return `${date.getDate()}`;
    },
    week: () => {
      return `${date.getDate()}`;
    },
    year: () => {
      return `${date.getMonth() + 1}`;
    },
  };
  return mapDateStringToMode[mode]();
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

export { isEqualByMode, renderDateCellByMode, getMemorizedRule };
