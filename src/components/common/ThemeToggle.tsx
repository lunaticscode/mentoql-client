import { useEffect, useState } from "react";
import {
  switchContainer,
  switchKnob,
  switchActive,
} from "../../styles/layout/header.css.ts";
import { lightThemeClass } from "../../styles/theme/light.css";
import { darkThemeClass } from "../../styles/theme/dark.css";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return document.body.classList.contains(darkThemeClass);
  });

  useEffect(() => {
    const nextTheme = isDark ? darkThemeClass : lightThemeClass;

    document.body.classList.remove(darkThemeClass, lightThemeClass);
    document.body.classList.add(nextTheme);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div
      className={`${switchContainer} ${isDark ? switchActive : ""}`}
      onClick={toggleTheme}
    >
      <div className={switchKnob} />
    </div>
  );
};

export default ThemeToggle;
