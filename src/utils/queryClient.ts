import { QueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";

const retryableStatusCodes = [408, 429, 502, 503, 504];
const appQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (isAxiosError(error)) {
          const status = error.status ?? error.response?.status;
          if (!status) {
            return false;
          }
          if (retryableStatusCodes.includes(status)) {
            return failureCount < 3;
          }
        }
        return false;
      },
    },
    mutations: {
      retry: false,
    },
  },
});
export default appQueryClient;
