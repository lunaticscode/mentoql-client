import { createTheme } from "@vanilla-extract/css";
import { themeVars } from "./index.css";

export const darkThemeClass = createTheme(themeVars, {
  color: {
    primary: "#60A5FA", // 밝은 blue
    secondary: "#C084FC",
    ghost: "#1F2937",
    white: "#121826",
    black: "#FFFFFF",
    text: "#F9FAFB",
    muted: "#9CA3AF",
  },
  font: {
    family: "system-ui, sans-serif",
    size: {
      sm: "12px",
      base: "14px",
      md: "16px",
      lg: "20px",
      xl: "24px",
    },
    weight: {
      regular: "400",
      medium: "500",
      bold: "700",
    },
  },
  spacing: {
    none: "0px",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    full: "9999px",
  },
});
