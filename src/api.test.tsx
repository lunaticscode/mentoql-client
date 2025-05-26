import { describe, expect, test } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useGetQueryRoomList } from "./hooks/api/queryRoom.api";
import { getQueryRoomListOutputSchema } from "./schemas/queryRoom.schema";

const wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider
      client={
        new QueryClient({
          defaultOptions: {
            queries: { retry: false, experimental_prefetchInRender: true },
          },
        })
      }
    >
      {children}
    </QueryClientProvider>
  );
};

describe("api hook test", async () => {
  test("[useGetQueryRoomList] test", async () => {
    const { result } = renderHook(() => useGetQueryRoomList(), {
      wrapper,
    });
    await waitFor(() => !result.current.isPending);
    const queryRooms = await result.current.promise.then((res) => res);
    const isParsed = getQueryRoomListOutputSchema.safeParse(queryRooms);
    expect(isParsed.success).toBe(true);
  });
});
