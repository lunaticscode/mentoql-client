import React from "react"; //* by-auto-react-import
typeof React; //* by-auto-react-import
import Page from "../../components/common/Page";
import PageTitle from "../../components/common/PageTitle";
import WithAuth from "../../hocs/WithAuth";
import { useNavigate } from "react-router-dom";

const MentoPage = () => {
  const navigate = useNavigate();
  const handleClickCreateQueryRoom = () => {
    navigate("/mento-cqr");
  };
  return (
    <Page>
      <PageTitle>MentoPage</PageTitle>
      <div>
        <button onClick={handleClickCreateQueryRoom}>질문방 생성</button>
      </div>
    </Page>
  );
};
export default WithAuth(MentoPage);
