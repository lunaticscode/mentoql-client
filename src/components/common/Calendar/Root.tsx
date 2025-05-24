import { createContext, FC, PropsWithChildren, useMemo } from "react";
import useUIContext from "../../../hooks/useUIContext";
import { CalendarMode } from "./types";
import { isEqualByMode } from "./utils";
import useControlledValue from "../../../hooks/useControlledValue";
import { calendarContainer } from "../../../styles/components/calendar.css.ts";
interface CalendarContextProps {
  currentMode: CalendarMode;
  handleChangeMode?: (mode: CalendarMode) => void;
  currentDate: Date;
  handleChangeDate: (date: Date) => void;
}

const CalendarContext = createContext<CalendarContextProps | null>(null);
export const useCalendarContext = () =>
  useUIContext(CalendarContext, "Calendar");

interface CalendarRootProps extends PropsWithChildren {
  defaultMode?: CalendarMode;
  mode?: CalendarMode;
  onChangeMode?: (mode: CalendarMode) => void;
  defaultDate?: Date;
  date?: Date;
  onChangeDate?: (date: Date) => void;
}

const Root: FC<CalendarRootProps> = (props) => {
  const {
    defaultMode = "month",
    mode = "month",
    onChangeMode,
    date,
    defaultDate,
    onChangeDate,
    children,
  } = props;

  const { value: currentMode = "month", setValue: setCurrentMode } =
    useControlledValue(mode, defaultMode);

  const { value: currentDate = new Date(), setValue: setCurrentDate } =
    useControlledValue(date, defaultDate);

  const handleChangeDate = (changedDate: Date) => {
    if (isEqualByMode(currentDate, changedDate, currentMode)) return;
    setCurrentDate(changedDate);
    onChangeDate?.(changedDate);
  };

  const handleChangeMode = (changedMode: CalendarMode) => {
    setCurrentMode(changedMode);
    onChangeMode?.(changedMode);
  };

  const contextValue: CalendarContextProps = useMemo(
    () => ({
      currentMode,
      handleChangeMode,
      currentDate,
      handleChangeDate,
    }),
    [mode, currentDate]
  );
  return (
    <CalendarContext.Provider value={contextValue}>
      <div className={calendarContainer}>{children}</div>
    </CalendarContext.Provider>
  );
};
export default Root;
