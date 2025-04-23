import { useLocation, useNavigate } from "react-router-dom";
import { MouseEvent, useRef } from "react";

const navMenus: { path: string; label: string }[] = [
  { path: "/", label: "Home" },
  { path: "/mento", label: "Mento" },
  { path: "/schedule", label: "Schedule" },
];

const NavMenus = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navRef = useRef<HTMLElement>(null);

  const handleMouseOverNavMenu = (e: MouseEvent, path: string) => {
    if (location.pathname === path) return;
    e.currentTarget.classList.add("mouse-hover");
    e.currentTarget.classList.remove("mouse-out");
  };
  const handleMouseLeaveNavMenu = (e: MouseEvent, path: string) => {
    if (location.pathname === path) return;
    e.currentTarget.classList.add("mouse-out");
    e.currentTarget.classList.remove("mouse-hover");
  };

  return (
    <aside>
      <nav ref={navRef}>
        {navMenus.map(({ path, label }, index) => (
          <div
            className={`nav-menu ${
              location.pathname === path ? "current-path" : ""
            }`}
            onMouseLeave={(e) => handleMouseLeaveNavMenu(e, path)}
            onMouseOver={(e) => handleMouseOverNavMenu(e, path)}
            onClick={() => navigate(path)}
            key={`nav-menu-key-${index}`}
          >
            {label}
          </div>
        ))}
      </nav>
    </aside>
  );
};
export default NavMenus;
