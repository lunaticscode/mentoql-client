import { style } from "@vanilla-extract/css";
import { themeVars } from "../theme/index.css.ts";

export const headerContainer = style({
  backgroundColor: themeVars.color.white,
  display: "flex",
  height: "60px",
  alignItems: "center",
  columnGap: "20px",
  position: "fixed",
  width: "100%",
  zIndex: 100,
  top: 0,
  left: 0,
  borderBottom: `1px solid ${themeVars.color.ghost}`,
});
export const headerLogo = style({
  marginLeft: "10px",
  padding: "5px 10px",
  //   backgroundColor: themeVars.color.primary,
  fontWeight: themeVars.font.weight.bold,
  fontSize: themeVars.font.size.xl,
});
export const headerSpot = style({
  color: themeVars.color.primary,
  fontSize: themeVars.font.size.xl,
  fontWeight: themeVars.font.weight.bold,
});

export const headerNavMenusContainer = style({
  display: "flex",
  columnGap: "16px",
});

export const headerNavMenu = style({
  color: themeVars.color.muted,
  cursor: "pointer",
  selectors: {
    "&[data-active='true']": {
      fontWeight: themeVars.font.weight.bold,
      color: themeVars.color.primary,
    },
    "&:hover": {
      color: themeVars.color.black,
    },
    "&[data-active='true']:hover": {
      color: themeVars.color.primary,
    },
  },
});

export const switchContainer = style({
  width: "36px",
  height: "18px",
  borderRadius: "999px",
  backgroundColor: "#ccc",
  display: "flex",
  alignItems: "center",
  padding: "4px",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  position: "relative",
});

export const switchActive = style({
  backgroundColor: "#4f46e5",
});

export const switchKnob = style({
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  position: "absolute",
  left: "4px",
  transition: "left 0.25s ease",
  selectors: {
    [`${switchContainer}.${switchActive} &`]: {
      left: "24px",
    },
  },
});
