import { useState } from "react";
import Page from "../components/common/Page";
import Paginator from "../components/common/Paginator";

const SchedulePage = () => {
  const [page, setPage] = useState<number>(1);
  const handleChangePage = (page: number) => {
    setPage(page);
  };
  return (
    <Page.Container>
      <Page.Title>SchedulePage</Page.Title>
      <Paginator.Root
        page={page}
        onChangePage={handleChangePage}
        itemCount={376}
      >
        <Paginator.Buttons />
        <Paginator.Navigator>
          {(prev, next) => (
            <div>
              <span onClick={prev}>이전</span>
              <span onClick={next}>다음</span>
            </div>
          )}
        </Paginator.Navigator>
      </Paginator.Root>
    </Page.Container>
  );
};
export default SchedulePage;
