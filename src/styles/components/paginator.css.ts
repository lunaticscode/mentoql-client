import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "../theme/index.css";

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

// export const calendarDateContainer = style({
//   minHeight: "80px",
//   maxWidth: "200px",
//   width: "100%",
//   borderTop: `2px solid ${themeVars.color.primary}`,
// });

// export const calendarDate = style({
//   width: "100%",
//   height: "100%",
//   cursor: "pointer",
// });

// export const calendarDateLabel = style({
//   display: "inline-block",
//   color: themeVars.color.black,
//   width: "20px",
//   height: "20px",
//   padding: "5px",
//   textAlign: "center",
//   selectors: {
//     [`${calendarDate}[data-today='true'] &`]: {
//       backgroundColor: themeVars.color.ghost,
//       color: themeVars.color.primary,
//       marginTop: "3px",
//       marginRight: "3px",
//       borderRadius: "50%",
//     },
//     [`${calendarDate}[data-selected='true'] &`]: {
//       backgroundColor: themeVars.color.primary,
//       color: themeVars.color.white,
//       marginTop: "3px",
//       marginRight: "3px",
//       borderRadius: "50%",
//     },
//   },
// });
