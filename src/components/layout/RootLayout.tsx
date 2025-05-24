import { FC, PropsWithChildren, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SEO from "../common/SEO";
import Header from "./Header";

interface RootLayoutProps extends PropsWithChildren {}
const RootLayout: FC<RootLayoutProps> = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.fromSigninSuccess) {
      window.history.replaceState(location.state, "", "/");
    }
  }, [location.state]);

  return (
    <>
      <SEO />
      <Header />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default RootLayout;
