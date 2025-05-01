import { FC, PropsWithChildren } from "react";

interface PageTitleProps extends PropsWithChildren {}
const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return <h2 className={"page-title"}>{children}</h2>;
};
export default PageTitle;