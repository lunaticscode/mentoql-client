import { style } from "@vanilla-extract/css";
import { themeVars } from "../theme/index.css";

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
  boxShadow: `0px 0px 2px ${themeVars.color.black}`,
});
export const headerLogo = style({
  marginLeft: "10px",
  padding: "5px 10px",
  //   backgroundColor: themeVars.color.primary,
  fontWeight: themeVars.font.weight.bold,
  fontSize: themeVars.font.size.xl,
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
