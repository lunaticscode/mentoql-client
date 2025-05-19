import { useCallback, useEffect, useRef, useState } from "react";
const useControlledValue = <T>(controlledValue: T, defaultValue: T) => {
  const { current: isControlled } = useRef(controlledValue !== undefined);
  const [uncontrolledValue, setUncontrolledValue] = useState<T>(defaultValue);

  const value =
    controlledValue !== undefined ? controlledValue : uncontrolledValue;

  const setValue = useCallback(
    (newValue: T) => {
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
    },
    [isControlled]
  );

  useEffect(() => {
    if (!isControlled && controlledValue !== undefined) {
      console.error(
        `(!)Cannot controll the uncontrolled-component. https://reactjs.org/link/controlled-components`
      );
    }
  }, [controlledValue, isControlled]);
  return { value, setValue };
};

export default useControlledValue;
