import { useParams } from "react-router-dom";
import NotFoundaPage from "../NotFoundPage";
import { useGetQueryRoom } from "../../hooks/api/mento.api";
import { FC, Suspense } from "react";
import Page from "../../components/common/Page";
import PageTitle from "../../components/common/PageTitle";

const QueryRoomLoading = () => {
  return <h2>QueryRoom Loading...</h2>;
};

interface QueryRoomContainerProps {
  roomId: string;
}
const QueryRoomContainer: FC<QueryRoomContainerProps> = ({ roomId }) => {
  const { result } = useGetQueryRoom(`${roomId}`);
  console.log(result);
  return <div>{JSON.stringify(result)}</div>;
};

const QueryRoom = () => {
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
export default QueryRoom;
