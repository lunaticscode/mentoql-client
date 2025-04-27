const API_PROXY_PATH = "/api";
const SERVER_BASE_URL =
  process.env.NODE_ENV === "production"
    ? (globalThis as any).VITE_SERVER_BASE_URL ?? // build-time
      import.meta.env.VITE_SERVER_BASE_URL // run-time
    : import.meta.env.VITE_SERVER_BASE_URL ?? "http://localhost:8080";

export { API_PROXY_PATH, SERVER_BASE_URL };
