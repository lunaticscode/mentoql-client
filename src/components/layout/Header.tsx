import { useLocation, useNavigate } from "react-router-dom";
import {
  headerContainer,
  headerLogo,
  headerNavMenusContainer,
  headerNavMenu,
} from "../../styles/layout/header.css.ts";
import { lightThemeClass } from "../../styles/theme/light.css.ts";
import { darkThemeClass } from "../../styles/theme/dark.css.ts";

const navMenus: { path: string; label: string }[] = [
  { path: "/", label: "Home" },
  { path: "/mento", label: "Mento" },
  { path: "/schedule", label: "Schedule" },
];

const Header = () => {
  const handleClickChangeTheme = () => {
    const currentThemeClass = document.body.classList[0];
    document.body.classList.remove(currentThemeClass);
    if (currentThemeClass.includes("dark")) {
      document.body.classList.add(lightThemeClass);
    } else {
      document.body.classList.add(darkThemeClass);
    }
  };
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className={headerContainer}>
      <div className={headerLogo} onClick={() => navigate("/")}>
        MentoQL
      </div>
      <nav className={headerNavMenusContainer}>
        {navMenus.map(({ path, label }, index) => (
          <div
            className={headerNavMenu}
            data-active={
              path === "/"
                ? location.pathname === "/"
                : location.pathname.includes(path)
            }
            onClick={() => navigate(path)}
            key={`nav-menu-key-${index}`}
          >
            {label}
          </div>
        ))}
      </nav>
      <button onClick={handleClickChangeTheme}>toggle</button>
    </header>
  );
};

export default Header;
