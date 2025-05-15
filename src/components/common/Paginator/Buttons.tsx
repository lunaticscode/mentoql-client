import { useId } from "react";
import usePaginator from "./hooks/usePaginator";
import PageButton from "./internal/PageButton";
import { usePaginatorContext } from "./Root";

const Buttons = () => {
  const _componentId = useId();
  const { currentPage, handleChangePage } = usePaginatorContext();
  const { pages } = usePaginator();

  const onClickPageButton = (page: number) => {
    handleChangePage(page);
  };
  return (
    <div className={"paginator-page-buttons"}>
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
