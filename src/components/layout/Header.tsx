import { useNavigate } from "react-router-dom";

const navMenus: { path: string; label: string }[] = [
  { path: "/", label: "Home" },
  { path: "/mento", label: "Mento" },
  { path: "/schedule", label: "Schedule" },
];
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={"header"}>
      <div className={"header-logo"}></div>
      <nav className={"nav-menus"}>
        {navMenus.map(({ path, label }, index) => (
          <div
            className={`nav-menu ${
              location.pathname === path ? "current-path" : ""
            }`}
            onClick={() => navigate(path)}
            key={`nav-menu-key-${index}`}
          >
            {label}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
