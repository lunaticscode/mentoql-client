import Calendar from "../components/common/Calendar";
import Page from "../components/common/Page";
import PageTitle from "../components/common/PageTitle";
import { useToast } from "../components/common/Toast";
import HomeDashboard from "../components/pages/home/Dashboard";

const HomePage = () => {
  const toast = useToast();

  return (
    <Page>
      <button onClick={() => toast("asdasdasd")}>toast</button>
      <PageTitle>HomePage</PageTitle>
      <Calendar.Root defaultDate={new Date()}>
        <Calendar.Body />
      </Calendar.Root>
      <HomeDashboard />
    </Page>
  );
};
export default HomePage;
