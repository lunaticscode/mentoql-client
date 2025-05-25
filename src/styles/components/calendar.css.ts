import { style } from "@vanilla-extract/css";
import { themeVars } from "../theme/index.css.ts";

export const calendarContainer = style({
  width: "100%",
  height: "auto",
});
export const calendarBody = style({
  width: "100%",
  height: "auto",
});

export const calendarWeekContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  height: "auto",
  columnGap: "5px",
  selectors: {
    "&:last-of-type": {
      borderBottom: `1px solid ${themeVars.color.ghost}`,
    },
  },
});
export const calendarDateContainer = style({
  minHeight: "80px",
  maxWidth: "200px",
  width: "100%",
  borderTop: `2px solid ${themeVars.color.primary}`,
});

export const calendarDate = style({
  width: "100%",
  height: "100%",
  cursor: "pointer",
});

export const calendarDateLabel = style({
  display: "inline-block",
  color: themeVars.color.black,
  width: "20px",
  height: "20px",
  padding: "5px",
  textAlign: "center",
  selectors: {
    [`${calendarDate}[data-today='true'] &`]: {
      backgroundColor: themeVars.color.ghost,
      color: themeVars.color.primary,
      marginTop: "3px",
      marginRight: "3px",
      borderRadius: "50%",
    },
    [`${calendarDate}[data-selected='true'] &`]: {
      backgroundColor: themeVars.color.primary,
      color: themeVars.color.white,
      marginTop: "3px",
      marginRight: "3px",
      borderRadius: "50%",
    },
  },
});
