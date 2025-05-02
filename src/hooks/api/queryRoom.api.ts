import useSuspenseFetch from "../useSuspenseFetch";
import { API_PATH } from "../../consts/api";
import {
  CreateQueryRoomInput,
  CreateQueryRoomOutput,
  createQueryRoomOutputSchema,
  GetQueryRoomOutput,
  GetQueryRoomListInput,
  GetQueryRoomListOutput,
  getQueryRoomListOutputSchema,
} from "../../schemas/queryRoom.schema";

import { useGetApi, usePostApi } from "./common";

export const useCreateQueryRoom = () => {
  return usePostApi<CreateQueryRoomInput, CreateQueryRoomOutput>(
    API_PATH.CREATE_QUERY_ROOM,
    createQueryRoomOutputSchema
  );
};

export const useGetQueryRoomList = (
  initParams: GetQueryRoomListInput = { page: 1, size: 10 },
  shouldFetch: boolean = true
) => {
  return useGetApi<GetQueryRoomListInput, GetQueryRoomListOutput>(
    API_PATH.GET_QUERY_ROOM_LIST,
    initParams,
    getQueryRoomListOutputSchema,
    shouldFetch
  );
};

export const useGetQueryRoom = (roomId: string) => {
  return useSuspenseFetch<GetQueryRoomOutput>(`/query-room/${roomId}`);
};
