import { createTheme } from "@vanilla-extract/css";
import { themeVars } from "./index.css.ts";

export const lightThemeClass = createTheme(themeVars, {
  color: {
    primary: "#2ed21d",
    secondary: "#7C3AED",
    ghost: "#F3F4F6",
    white: "#FFFFFF",
    black: "#000000",
    text: "#111827",
    muted: "#6B7280",
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
