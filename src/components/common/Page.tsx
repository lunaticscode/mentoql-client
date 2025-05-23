import { FC, PropsWithChildren } from "react";
import { pageContainer } from "../../styles/layout/page.css";

interface PageProps extends PropsWithChildren {}
const Page: FC<PageProps> = ({ children }) => {
  return <div className={pageContainer}>{children}</div>;
};
export default Page;
