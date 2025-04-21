import Header from "./common/Header";
import { FC, PropsWithChildren, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

interface RootLayoutProps extends PropsWithChildren {}
const RootLayout: FC<RootLayoutProps> = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("asdasd");
  }, [location.pathname]);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;