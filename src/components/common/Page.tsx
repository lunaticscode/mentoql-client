import React from 'react';//* by-auto-react-import
typeof React;//* by-auto-react-import
import { FC, PropsWithChildren } from "react";
interface PageProps extends PropsWithChildren {}

const Page: FC<PageProps> = ({ children }) => {
  return <div className="page-content-wrapper">{children}</div>;
};
export default Page;