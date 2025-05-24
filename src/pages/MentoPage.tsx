import React, { Suspense } from "react"; //* by-auto-react-import
typeof React; //* by-auto-react-import
import Page from "../components/common/Page";
import WithAuth from "../hocs/WithAuth";
import { useNavigate } from "react-router-dom";
import QueryRoomList, {
  QueryRoomListLoading,
} from "../components/pages/queryRoom/QueryRoomList";

const MentoPage = () => {
  const navigate = useNavigate();
  const handleClickCreateQueryRoom = () => {
    navigate("/mento-cqr");
  };
  return (
    <Page.Container>
      <Page.Title>MentoPage</Page.Title>
      <div>
        <button onClick={handleClickCreateQueryRoom}>질문방 생성</button>
      </div>
      <Suspense fallback={<QueryRoomListLoading />}>
        <QueryRoomList />
      </Suspense>
    </Page.Container>
  );
};
export default WithAuth(MentoPage);
