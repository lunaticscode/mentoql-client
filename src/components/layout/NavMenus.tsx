import React from "react"; //* by-auto-react-import
typeof React; //* by-auto-react-import
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

  const mouseOverTimer = useRef<NodeJS.Timeout>(null);
  const mouseLeaveTimer = useRef<NodeJS.Timeout>(null);

  const handleMouseOverNavMenu = (e: MouseEvent, path: string) => {
    if (location.pathname === path) return;
    if (mouseOverTimer.current) {
      clearTimeout(mouseOverTimer.current);
    }
    mouseOverTimer.current = setTimeout(() => {
      (e.target as HTMLElement).classList.add("mouse-hover");
      (e.target as HTMLElement).classList.remove("mouse-out");
    }, 200);
  };

  const handleMouseLeaveNavMenu = (e: MouseEvent, path: string) => {
    if (location.pathname === path) return;

    if (mouseLeaveTimer.current) {
      clearTimeout(mouseLeaveTimer.current);
    }
    mouseLeaveTimer.current = setTimeout(() => {
      (e.target as HTMLElement).classList.add("mouse-out");
      (e.target as HTMLElement).classList.remove("mouse-hover");
    }, 200);
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
