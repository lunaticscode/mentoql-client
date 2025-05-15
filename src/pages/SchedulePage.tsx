import Page from "../components/common/Page";
import PageTitle from "../components/common/PageTitle";
import Paginator from "../components/common/Paginator";

const SchedulePage = () => {
  const handleChangePage = () => {};
  return (
    <Page>
      <PageTitle>SchedulePage</PageTitle>
      <Paginator.Root
        page={0}
        onChangePage={handleChangePage}
        itemCount={10}
      ></Paginator.Root>
    </Page>
  );
};
export default SchedulePage;
