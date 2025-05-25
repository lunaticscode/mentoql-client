import { useLocation, useNavigate } from "react-router-dom";
import {
  headerContainer,
  headerLogo,
  headerNavMenusContainer,
  headerNavMenu,
  headerSpot,
} from "../../styles/layout/header.css";
import ThemeToggle from "../common/ThemeToggle.tsx";

const navMenus: { path: string; label: string }[] = [
  { path: "/", label: "Home" },
  { path: "/mento", label: "Mento" },
  { path: "/schedule", label: "Schedule" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className={headerContainer}>
      <div className={headerLogo} onClick={() => navigate("/")}>
        MENTO<span className={headerSpot}>.</span>QL
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
      <ThemeToggle />
    </header>
  );
};

export default Header;