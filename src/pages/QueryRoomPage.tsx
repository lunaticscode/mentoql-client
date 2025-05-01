import { useParams } from "react-router-dom";
import NotFoundaPage from "./NotFoundPage";
import { Suspense } from "react";
import Page from "../components/common/Page";
import PageTitle from "../components/common/PageTitle";
import QueryRoomContainer from "../components/pages/queryRoom/QueryRoomContainer";

const QueryRoomLoading = () => {
  return <h2>QueryRoom Loading...</h2>;
};

const QueryRoomPage = () => {
  const { id: roomId = "" } = useParams();
  if (!roomId) {
    return <NotFoundaPage />;
  }
  return (
    <Page>
      <PageTitle>QueryRoom: {roomId}</PageTitle>
      <Suspense fallback={<QueryRoomLoading />}>
        <QueryRoomContainer roomId={roomId} />
      </Suspense>
    </Page>
  );
};
export default QueryRoomPage;
