import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/common/Toast.tsx";
import { darkThemeClass } from "./styles/theme/dark.css.ts";
import { lightThemeClass } from "./styles/theme/light.css.ts";

const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const matchedTheme = isDarkMode ? darkThemeClass : lightThemeClass;
document.body.classList.add(matchedTheme);
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
);