import { FC, useMemo } from "react";
import { useCalendarContext } from "../Root";
import { getMemorizedRule, renderDateCellByMode } from "../utils";

interface CalendarDateCellProps {
  date: Date;
}

const DateCell: FC<CalendarDateCellProps> = (props) => {
  const { currentMode } = useCalendarContext();
  const { date } = props;
  const dateCell = useMemo(
    () => renderDateCellByMode(date, currentMode),
    [currentMode, getMemorizedRule(date, currentMode)]
  );
  return <div>{dateCell}</div>;
};
export default DateCell;
