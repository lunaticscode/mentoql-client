import { globalStyle, createThemeContract } from "@vanilla-extract/css";

export const themeVars = createThemeContract({
  color: {
    primary: null,
    secondary: null,
    ghost: null,
    white: null,
    black: null,
    text: null,
    muted: null,
  },
  font: {
    family: null,
    size: {
      sm: null,
      base: null,
      md: null,
      lg: null,
      xl: null,
    },
    weight: {
      regular: null,
      medium: null,
      bold: null,
    },
  },
  spacing: {
    none: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
    full: null,
  },
});

globalStyle("body", {
  padding: 0,
  margin: 0,
  backgroundColor: themeVars.color.white,
  color: themeVars.color.black,
  fontFamily: themeVars.font.family,
});

globalStyle("h1, h2, h3", {
  margin: 0,
  padding: 0,
});
