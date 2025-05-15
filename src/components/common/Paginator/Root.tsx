import { createContext, FC, PropsWithChildren, useMemo, useState } from "react";
import useUIContext from "../../../hooks/useUIContext";
import useDeviceSize from "../../../hooks/useDeviceSize";

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
}

const PaginatorContext = createContext<PaginatorContextProps | null>(null);
export const usePaginatorContext = () =>
  useUIContext<PaginatorContextProps | null>(PaginatorContext, "Paginator");

const PaginatorRoot: FC<PaginatorRootProps> = (props) => {
  const { page, itemCount, itemCountPerPage = 10 } = props;
  const [currentPage, setCurrentPage] = useState<number>(page);

  const handleChangePage = (changedPage: number) => {
    setCurrentPage(changedPage);
  };

  const contextValue: PaginatorContextProps = useMemo(
    () => ({
      currentPage,
      handleChangePage,
      itemCount,
      itemCountPerPage,
    }),
    [currentPage, itemCount]
  );

  return (
    <PaginatorContext.Provider value={contextValue}></PaginatorContext.Provider>
  );
};

export default PaginatorRoot;
