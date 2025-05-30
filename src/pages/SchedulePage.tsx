import { useState } from "react";
import Page from "../components/common/Page";
import Paginator from "../components/common/Paginator";
import Calendar from "../components/common/Calendar";
import { CalendarIcon } from "../components/icons";
import { pageTitleSvgIcon } from "../styles/layout/page.css";

const SchedulePage = () => {
  const [page, setPage] = useState<number>(1);
  const handleChangePage = (page: number) => {
    setPage(page);
  };
  return (
    <Page.Container>
      <Page.Title icon={<CalendarIcon className={pageTitleSvgIcon} />}>
        Schedule
      </Page.Title>
      <Calendar.Root>
        <Calendar.Header />
        <Calendar.Body />
      </Calendar.Root>
      <Paginator.Root
        page={page}
        onChangePage={handleChangePage}
        itemCount={376}
      >
        <Paginator.Navigator />
        <Paginator.Buttons />
      </Paginator.Root>
    </Page.Container>
  );
};
export default SchedulePage;