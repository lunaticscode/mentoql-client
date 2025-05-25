import { createContext, FC, PropsWithChildren, useMemo, useState } from "react";
import useUIContext from "../../../hooks/useUIContext";
import { paginatorContainer } from "../../../styles/components/paginator.css";

interface PaginatorRootProps extends PropsWithChildren {
  page: number;
  onChangePage: (page: number) => void;
  itemCount: number;
  itemCountPerPage?: number;
}

interface PaginatorContextProps {
  currentPage: number;
  handleChangePage: (page: number) => void;
  itemCount: number;
  itemCountPerPage: number;
  handleNavigate: (direction: 1 | -1) => void;
  isFirst?: boolean;
  isLast?: boolean;
}

const PaginatorContext = createContext<PaginatorContextProps | null>(null);
export const usePaginatorContext = () =>
  useUIContext<PaginatorContextProps | null>(PaginatorContext, "Paginator");

const PaginatorRoot: FC<PaginatorRootProps> = (props) => {
  const {
    children,
    page,
    itemCount,
    itemCountPerPage = 10,
    onChangePage,
  } = props;
  const [currentPage, setCurrentPage] = useState<number>(page);
  const isFirst = useMemo(() => currentPage === 1, [currentPage]);
  const isLast = useMemo(
    () => currentPage === Math.ceil(itemCount / itemCountPerPage),
    [currentPage, itemCount, itemCountPerPage]
  );

  const handleChangePage = (changedPage: number) => {
    if (changedPage === currentPage) return;
    onChangePage(changedPage);
    setCurrentPage(changedPage);
  };

  const handleNavigate = (direction: 1 | -1) => {
    if (direction === -1 && isFirst) {
      return;
    }
    if (direction === 1 && isLast) {
      return;
    }
    const changedPage = direction + currentPage;
    handleChangePage(changedPage);
  };

  const contextValue: PaginatorContextProps = useMemo(
    () => ({
      currentPage,
      handleChangePage,
      itemCount,
      itemCountPerPage,
      handleNavigate,
    }),
    [currentPage, itemCount, itemCountPerPage]
  );

  return (
    <PaginatorContext.Provider value={contextValue}>
      <div className={paginatorContainer}>{children}</div>
    </PaginatorContext.Provider>
  );
};

export default PaginatorRoot;