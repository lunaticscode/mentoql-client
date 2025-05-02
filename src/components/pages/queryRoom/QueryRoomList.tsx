import { useGetQueryRoomList } from "../../../hooks/api/queryRoom.api";

const QueryRoomListLoading = () => {
  return <h3>QueryRoomList Loading....</h3>;
};

const QueryRoomList = () => {
  const { result, request } = useGetQueryRoomList();
  const handleClickTest = () => {
    request({ page: 2, size: 10 });
  };
  return (
    <>
      {result?.isError && <div>Error</div>}
      {!result?.isError &&
        result?.rooms.map((room, index) => (
          <div key={`query-room-key-${index}`}>{room?.title}</div>
        ))}
      <button onClick={handleClickTest}>test</button>
    </>
  );
};

export { QueryRoomListLoading };
export default QueryRoomList;
