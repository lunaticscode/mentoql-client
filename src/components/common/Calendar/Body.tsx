import { FC } from "react";
import useCalendarDate from "./hooks/useCalendarDate";
import DateCell from "./internal/DateCell";

interface CalendarBodyProps {}
const Body: FC<CalendarBodyProps> = () => {
  const { dates } = useCalendarDate();
  return (
    <>
      {dates.map((date, index) => (
        <DateCell key={`datecell-key-${index}`} date={date} />
      ))}
    </>
  );
};
export default Body;
