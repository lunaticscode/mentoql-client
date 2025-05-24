import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetQueryRoomList } from "../../../hooks/api/queryRoom.api";
import { useMemo } from "react";

const QueryRoomListLoading = () => {
  return <h3>QueryRoomList Loading....</h3>;
};

const QueryRoomList = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, size] = useMemo(
    () => [
      Number(searchParams.get("page")) || 1,
      Number(searchParams.get("size")) || 10,
    ],
    [searchParams]
  );
  console.log(page, size);
  const { data, getQueryRoomList } = useGetQueryRoomList({ page, size }, true);

  const handleClickNextPage = () => {
    const nextPage = page + 1;
    // getQueryRoomList({ page: nextPage, size });
    getQueryRoomList();
    setSearchParams({ page: nextPage.toString(), size: size.toString() });
  };
  const handleClickQueryRoomTitle = (roomId: string) => {
    navigate(`/query-room/${roomId}`);
  };
  return (
    <>
      {data?.rooms.map((room, index) => (
        <div
          onClick={() => handleClickQueryRoomTitle(room.roomId)}
          key={`query-room-key-${index}`}
        >
          {room?.title}
        </div>
      ))}
      <button onClick={handleClickNextPage}>test</button>
    </>
  );
};

export { QueryRoomListLoading };
export default QueryRoomList;
