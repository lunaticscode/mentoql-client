import { FC, PropsWithChildren, useState } from "react";

type CalendarModes = "month" | "week" | "year";

interface CalendarRootProps extends PropsWithChildren {
  mode?: CalendarModes;
  value: Date;
  onChange: (date: Date) => void;
}

const Root: FC<CalendarRootProps> = (props) => {
  const { mode = "month", value, onChange } = props;
  const [currentDate, setCurrentDate] = useState<Date>(value);

  const handleSelectDate = () => {

  }
  
  return <></>;
};
export default Root;
