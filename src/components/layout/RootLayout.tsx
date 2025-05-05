import NavMenus from "./NavMenus";
import { FC, PropsWithChildren, useEffect, useMemo, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SEO from "../common/SEO";
import Wave from "../animate/Wave";

interface RootLayoutProps extends PropsWithChildren {}
const RootLayout: FC<RootLayoutProps> = () => {
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  useEffect(() => {
    if (location.state?.fromSigninSuccess) {
      window.history.replaceState(location.state, "", "/");
    }
  }, [location.state]);
  const isHomePage = useMemo(
    () => location.pathname === "/",
    [location.pathname]
  );

  return (
    <>
      <SEO />
      <Wave />
      <main>
        <NavMenus />
        <div
          ref={contentWrapperRef}
          className={`page-wrapper ${!isHomePage ? "with-blur" : ""}`.trim()}
        >
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default RootLayout;
