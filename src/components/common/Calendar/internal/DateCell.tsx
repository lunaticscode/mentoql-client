import { FC, useMemo } from "react";
import {
  getMemorizedRule,
  isEqualByMode,
  renderDisplayDateByMode,
} from "../utils";
import { CalendarMode } from "../types";
import { useCalendarContext } from "../Root";
import {
  calendarDate,
  calendarDateLabel,
} from "../../../../styles/components/calendar.css.ts";
interface CalendarDateCellProps {
  date: Date;
  mode: CalendarMode;
}

const DateCell: FC<CalendarDateCellProps> = (props) => {
  const { handleChangeDate, currentDate } = useCalendarContext();
  const { date, mode } = props;
  const dateCell = useMemo(
    () => renderDisplayDateByMode(date, mode, "datecell"),
    [mode, getMemorizedRule(date, mode)]
  );
  const handleClickDateCell = () => {
    handleChangeDate(date);
  };
  const isToday = isEqualByMode(date, new Date(), mode);
  const isSelected = isEqualByMode(date, currentDate, mode);
  return (
    <div
      data-today={isToday}
      data-selected={isSelected}
      className={calendarDate}
      onClick={handleClickDateCell}
    >
      <div className={calendarDateLabel}>{dateCell}</div>
    </div>
  );
};
export default DateCell;
