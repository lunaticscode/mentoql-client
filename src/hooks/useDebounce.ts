import { useEffect, useRef, useState } from "react";

const useDebounce = <T>(value: T, delay: number = 500) => {
  const timer = useRef<NodeJS.Timeout>(null);
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const cleanupTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  };

  const handleDebounce = () => {
    timer.current = setTimeout(() => {
      setDebouncedValue(value);
      cleanupTimer();
    }, delay);
  };

  useEffect(() => {
    if (value) {
      cleanupTimer();
      handleDebounce();
    }
    return () => {
      cleanupTimer();
    };
  }, [value]);
  return debouncedValue;
};
export default useDebounce;
