import React from 'react';//* by-auto-react-import
typeof React;//* by-auto-react-import
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
      <HomeDashboard />
    </Page>
  );
};
export default HomePage;