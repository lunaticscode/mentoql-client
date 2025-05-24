// import Calendar from "../components/common/Calendar";

// import PageTitle from "../components/common/PageTitle";
// import { useToast } from "../components/common/Toast";
import Page from "../components/common/Page";
import HomeDashboard from "../components/pages/home/Dashboard";

const HomePage = () => {
  // const toast = useToast();

  return (
    <Page.Container>
      {/* <button onClick={() => toast("asdasdasd")}>toast</button>
      <PageTitle>HomePage</PageTitle>
      <Calendar.Root defaultDate={new Date()}>
        <Calendar.Body />
      </Calendar.Root> */}
      <Page.Title>Dashboard</Page.Title>
      <HomeDashboard />
    </Page.Container>
  );
};
export default HomePage;
