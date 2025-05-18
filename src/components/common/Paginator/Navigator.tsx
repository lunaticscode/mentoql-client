import { FC, ReactNode } from "react";
import { usePaginatorContext } from "./Root";
import NavigatorButton from "./internal/NavigatorButton";

interface PaginatorNavigatorProps {
  children?: (prev: () => void, next: () => void) => ReactNode;
}

const Navigator: FC<PaginatorNavigatorProps> = (props) => {
  const { children } = props;
  const { handleNavigate } = usePaginatorContext();
  const handleNavigatePrev = () => {
    handleNavigate(-1);
  };
  const handleNavigateNext = () => {
    handleNavigate(1);
  };

  if (children && typeof children === "function") {
    return children(handleNavigatePrev, handleNavigateNext);
  }

  return (
    <>
      <NavigatorButton direction="prev" onClick={handleNavigatePrev} />
      <NavigatorButton direction="next" onClick={handleNavigateNext} />
    </>
  );
};
export default Navigator;
