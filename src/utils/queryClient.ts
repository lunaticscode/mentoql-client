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
      retryDelay: (failureCount, error) => {
        if (isAxiosError(error)) {
          const retryAfterHeader = error.response?.headers["retry-after"];
          // retry-after number, date 기준으로 처리
          if (retryAfterHeader) {
            const parsed = parseInt(retryAfterHeader, 10);
            if (!isNaN(parsed)) {
              return parsed * 1000;
            }
            const retryTimemillis = new Date(retryAfterHeader).getTime();
            if (!isNaN(retryTimemillis)) {
              const currentTime = new Date().getTime();
              return Math.max(retryTimemillis - currentTime, 0);
            }
          }
        }
        return Math.min(1000 * 2 ** failureCount, 30000);
      },
    },
    mutations: {
      retry: false,
    },
  },
});
export default appQueryClient;
