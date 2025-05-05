import { useNavigate } from "react-router-dom";
import { useGetQueryRoomList } from "../../../hooks/api/queryRoom.api";

const QueryRoomListLoading = () => {
  return <h3>QueryRoomList Loading....</h3>;
};

const QueryRoomList = () => {
  const { result, request } = useGetQueryRoomList();
  const navigate = useNavigate();
  const handleClickTest = () => {
    request({ page: 2, size: 10 });
  };
  const handleClickQueryRoomTitle = (roomId: string) => {
    navigate(`/query-room/${roomId}`);
  };
  return (
    <>
      {!result?.rooms && <div>Error</div>}
      {result?.rooms.map((room, index) => (
        <div
          onClick={() => handleClickQueryRoomTitle(room.roomId)}
          key={`query-room-key-${index}`}
        >
          {room?.title}
        </div>
      ))}
      <button onClick={handleClickTest}>test</button>
    </>
  );
};

export { QueryRoomListLoading };
export default QueryRoomList;
