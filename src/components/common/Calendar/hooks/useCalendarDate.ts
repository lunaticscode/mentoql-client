import { useMemo } from "react";
import { getCalendarDates, getMemorizedRule } from "../utils";
import { useCalendarContext } from "../Root";

const useCalendarDate = () => {
  const { currentDate, currentMode } = useCalendarContext();
  const dates = useMemo(
    () => getCalendarDates(currentDate, currentMode),
    [getMemorizedRule(currentDate, currentMode), currentMode]
  );
  return { dates };
};
export default useCalendarDate;
