import { http, HttpResponse } from "msw";
import { GetQueryRoomListOutput } from "../schemas/queryRoom.schema";

export const handlers = [
  http.get("http://localhost:8000/health-check", async () => {
    return HttpResponse.json({
      message: "Don't worry, MSW already Activating",
    });
  }),

  http.get("http://localhost:8000/query-room", ({ request }) => {
    const searchParams = new URL(request.url).searchParams;
    const paramsEntry = searchParams.entries();
    console.log(Array.from(paramsEntry));
    return HttpResponse.json<GetQueryRoomListOutput>({
      rooms: [
        {
          title: "test-query-room-1",
          description: "test-query-room-description-1",
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          roomId: "test-id-1",
          owner: "test-owner",
        },
        {
          title: "test-query-room-2",
          description: "test-query-room-description-2",
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          roomId: "test-id-2",
          owner: "test-owner",
        },
        {
          title: "test-query-room-3",
          description: "test-query-room-description-3",
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          roomId: "test-id-3",
          owner: "test-owner",
        },
      ],
    });
  }),
];
