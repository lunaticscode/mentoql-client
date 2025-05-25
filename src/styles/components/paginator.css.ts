import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "../theme/index.css.ts";

export const paginatorContainer = style({
  width: "100%",
  height: "auto",
  display: "flex",
  position: "relative",
  alignItems: "center",
});

export const paginatorPageButtonContainer = style({
  height: "auto",
  display: "flex",
});

// basic(not user custom) style
export const paginatorPageButton = style({
  background: "none",
  cursor: "pointer",
  outline: "none",
  border: "none",
  fontSize: themeVars.font.size.md,
  color: themeVars.color.black,
  selectors: {
    ["[data-active='true'] &"]: {
      color: "red",
    },
  },
});

export const paginatorNavigatorContainer = style({
  display: "flex",
  columnGap: "5px",
  alignItems: "center",
});

// basic(not user custom) style
export const paginatorNavigator = style({
  cursor: "pointer",
  background: "none",
  outline: "none",
  border: "none",
  fontSize: themeVars.font.size.md,
  color: themeVars.color.black,
  borderRadius: "5px",
  padding: "5px 8px",
  backgroundColor: themeVars.color.secondary,
});

globalStyle(`.${paginatorPageButton}[data-active='true'] `, {
  color: themeVars.color.primary,
});
