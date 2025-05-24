import { useParams } from "react-router-dom";
import NotFoundaPage from "./NotFoundPage";
import { Suspense } from "react";
import Page from "../components/common/Page";
import QueryRoomDetail from "../components/pages/queryRoom/QueryRoomDetail";

const QueryRoomLoading = () => {
  return <h2>QueryRoom Loading...</h2>;
};

const QueryRoomPage = () => {
  const { id: roomId = "" } = useParams();
  if (!roomId) {
    return <NotFoundaPage />;
  }
  return (
    <Page.Container>
      <Page.Title>QueryRoom: {roomId}</Page.Title>
      <Suspense fallback={<QueryRoomLoading />}>
        <QueryRoomDetail roomId={roomId} />
      </Suspense>
    </Page.Container>
  );
};
export default QueryRoomPage;
