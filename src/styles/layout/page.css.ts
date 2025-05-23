import { style } from "@vanilla-extract/css";
import { themeVars } from "../theme/index.css";

export const pageContainer = style({
  width: "calc(100% - 40px)",
  height: "calc(100vh - 100px)",
  marginTop: "60px",
  backgroundColor: themeVars.color.white,
  padding: 20,
});

export const pageTitle = style({
  marginBottom: "20px",
});
