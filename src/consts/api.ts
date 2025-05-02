const API_PROXY_PATH = "/api";

const API_PATH = {
  CREATE_MENTO_SEED: "/mento/seed",
  CREATE_QUERY_ROOM: "/query-room",
  GET_QUERY_ROOM_LIST: "/query-room",
  CREATE_QUESTION: "/question",
  GET_QUERY_ROOM_BY_ID: (roomId: string) => `/mento/query-room/${roomId}`,
};

export { API_PROXY_PATH, API_PATH };
