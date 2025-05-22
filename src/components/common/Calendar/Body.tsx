import { FC, useCallback } from "react";
import useCalendarDate from "./hooks/useCalendarDate";
import DateCell from "./internal/DateCell";
import { useCalendarContext } from "./Root";
import { CalendarMode } from "./types";

const isTwoDimsTable = (mode: CalendarMode) => {
  const twoDimsModes: CalendarMode[] = ["month", "year"];
  return twoDimsModes.includes(mode);
};

interface CalendarBodyProps {}
const Body: FC<CalendarBodyProps> = () => {
  const { currentMode } = useCalendarContext();
  const { dates } = useCalendarDate();
  const isTwoDims = isTwoDimsTable(currentMode);

  const renderTwoDimsCalendar = useCallback(() => {
    return (dates as Date[][]).map((week, weekIndex) => (
      <div key={`calendar-week-key-${weekIndex}`}>
        {week.map((date, dateIndex) => (
          <div key={`calendar-date-key-${dateIndex}`}>
            <DateCell date={date} mode={currentMode} />
          </div>
        ))}
      </div>
    ));
  }, [dates, currentMode]);

  const renderOneDimsCalendar = useCallback(() => {
    return (dates as Date[]).map((date, dateIndex) => (
      <div key={`calendar-date-key-${dateIndex}`}>
        <DateCell date={date} mode={currentMode} />
      </div>
    ));
  }, [dates, currentMode]);

  return (
    <div>{isTwoDims ? renderTwoDimsCalendar() : renderOneDimsCalendar()}</div>
  );
};
export default Body;
