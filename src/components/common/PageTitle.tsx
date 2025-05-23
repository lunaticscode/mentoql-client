import { FC, PropsWithChildren } from "react";
import { pageTitle } from "../../styles/layout/page.css";

interface PageTitleProps extends PropsWithChildren {}
const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return <h2 className={pageTitle}>{children}</h2>;
};
export default PageTitle;
