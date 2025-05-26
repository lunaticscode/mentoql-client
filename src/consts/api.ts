const API_PROXY_PATH = "/api";
const MOCK_API_PROXY_PATH = "http://localhost:8000";
const API_PATH = {
  CREATE_MENTO_SEED: "/mento/seed",
  CREATE_QUERY_ROOM: "/query-room",
  GET_QUERY_ROOM_LIST: "/query-room",
  CREATE_QUESTION: "/question",
  GET_QUERY_ROOM_BY_ID: (roomId: string) => `/mento/query-room/${roomId}`,
};

const API_TOAST_MESSAGE = {
  CREATE_MENTO_SEED: {
    success: "",
    error: "",
  },
  CREATE_QUERY_ROOM: {
    success: "",
    error: "",
  },
  GET_QUERY_ROOM_LIST: {
    success: "",
    error: "",
  },
  CREATE_QUESTION: {
    success: "",
    error: "",
  },
  GET_QUERY_ROOM_BY_ID: {
    success: "",
    error: "",
  },
};

export { API_PROXY_PATH, API_PATH, MOCK_API_PROXY_PATH, API_TOAST_MESSAGE };
