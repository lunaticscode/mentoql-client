import { style, keyframes } from "@vanilla-extract/css";
import { themeVars } from "../theme/index.css.ts";

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});
export const pageContainer = style({
  width: "calc(100% - 40px)",
  height: "calc(100vh - 100px)",
  marginTop: "60px",
  backgroundColor: themeVars.color.white,
  padding: 20,
  transition: "opacity 0.3s ease",
  animation: `${fadeIn} 0.3s ease`,
});

export const pageTitle = style({
  display: "flex",
  columnGap: 5,
  alignItems: " center",
  marginBottom: "20px",
  fontSize: 40,
});
export const pageTitleSvgIcon = style({
  width: 40,
  stroke: themeVars.color.primary,
});
