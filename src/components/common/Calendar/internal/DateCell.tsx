import { FC, useMemo } from "react";
import { getMemorizedRule, renderDisplayDateByMode } from "../utils";
import { CalendarMode } from "../types";
import { useCalendarContext } from "../Root";

interface CalendarDateCellProps {
  date: Date;
  mode: CalendarMode;
}

const DateCell: FC<CalendarDateCellProps> = (props) => {
  const { handleChangeDate } = useCalendarContext();
  const { date, mode } = props;
  const dateCell = useMemo(
    () => renderDisplayDateByMode(date, mode, "datecell"),
    [mode, getMemorizedRule(date, mode)]
  );
  const handleClickDateCell = () => {
    handleChangeDate(date);
  };
  return <div onClick={handleClickDateCell}>{dateCell}</div>;
};
export default DateCell;
