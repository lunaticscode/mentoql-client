import { FC, PropsWithChildren, ReactNode } from "react";
import { pageContainer, pageTitle } from "../../styles/layout/page.css.ts";

interface PageContainerProps extends PropsWithChildren {}
const Container: FC<PageContainerProps> = ({ children }) => {
  return <div className={pageContainer}>{children}</div>;
};

interface PageTitleProps extends PropsWithChildren {
  icon?: ReactNode;
}
const Title: FC<PageTitleProps> = ({ children, icon }) => {
  return (
    <h2 className={pageTitle}>
      {icon}
      {children}
    </h2>
  );
};

const Page = {
  Container,
  Title,
};

export default Page;
