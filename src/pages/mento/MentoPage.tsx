import React from 'react';//* by-auto-react-import
typeof React;//* by-auto-react-import
import Page from "../../components/common/Page";
import PageTitle from "../../components/common/PageTitle";
import WithAuth from "../../hocs/WithAuth";

const MentoPage = () => {
  return (
    <Page>
      <PageTitle>MentoPage</PageTitle>
      <div></div>
    </Page>
  );
};
export default WithAuth(MentoPage);