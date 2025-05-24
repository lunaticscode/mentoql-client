import { FC, ReactNode, useId } from "react";
import usePaginator from "./hooks/usePaginator";
import PageButton from "./internal/PageButton";
import { usePaginatorContext } from "./Root";
import { paginatorPageButtonContainer } from "../../../styles/components/paginator.css.ts";

interface PaginatorButtonsProps {
  children?: (
    pages: number[],
    handleClickPage: (page: number) => void
  ) => ReactNode;
}
const Buttons: FC<PaginatorButtonsProps> = (props) => {
  const { children } = props;
  const _componentId = useId();
  const { currentPage, handleChangePage } = usePaginatorContext();
  const { pages } = usePaginator();

  const onClickPageButton = (page: number) => {
    handleChangePage(page);
  };
  if (children && typeof children === "function") {
    return children(pages, onClickPageButton);
  }
  return (
    <div className={paginatorPageButtonContainer}>
      {pages.map((page) => (
        <PageButton
          onClick={() => onClickPageButton(page)}
          active={currentPage === page}
          key={`${_componentId}-paginator-button-${page}`}
          page={page}
        />
      ))}
    </div>
  );
};
export default Buttons;
