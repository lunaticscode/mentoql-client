import Header from "@components/common/Header";
import { FC, PropsWithChildren } from "react";

interface RootLayoutProps extends PropsWithChildren {}
const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
export default RootLayout;
