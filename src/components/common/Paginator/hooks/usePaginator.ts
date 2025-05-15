import { useMemo } from "react";
import useDeviceSize from "../../../../hooks/useDeviceSize";
import { usePaginatorContext } from "../Root";

const STANDARD_BLOCK_SIZE = 10;
const MOBILE_BLOCK_SIZE = 5;
const usePaginator = () => {
  const { mobile } = useDeviceSize();
  const isMobile = useMemo(() => mobile, [mobile]);
  const maxBlockSize = useMemo(
    () => (isMobile ? MOBILE_BLOCK_SIZE : STANDARD_BLOCK_SIZE),
    [isMobile]
  );
  const { currentPage, itemCount, itemCountPerPage } = usePaginatorContext();

  const pageLength = useMemo(
    () => Math.ceil(itemCount / itemCountPerPage),
    [itemCount, itemCountPerPage]
  );

  const startBlockIndex = useMemo(
    () => Math.floor((currentPage - 1) / maxBlockSize) * 10 + 1,
    [currentPage, maxBlockSize]
  );

  const lastBlockIndex = useMemo(
    () =>
      startBlockIndex - 1 + maxBlockSize >= pageLength
        ? pageLength
        : startBlockIndex - 1 + maxBlockSize,
    [startBlockIndex, maxBlockSize, pageLength]
  );

  const isLastPage = useMemo(
    () => currentPage === pageLength,
    [currentPage, pageLength]
  );
  const isFirstPage = useMemo(() => currentPage === 1, [currentPage]);

  // ui에 직접 그리는 데이터
  // currentPage에는 직접적으로 의존하지 않게끔.
  const pages = useMemo(
    () =>
      Array.from(
        { length: lastBlockIndex - startBlockIndex + 1 },
        (_, index) => startBlockIndex + index
      ),
    [startBlockIndex, lastBlockIndex]
  );

  return { pages, isLastPage, isFirstPage };
};
export default usePaginator;
