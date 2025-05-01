import useSuspenseFetch from "../useSuspenseFetch";
import { API_PATH } from "../../consts/api";
import {
  CreateQueryRoomInput,
  CreateQueryRoomOutput,
  createQueryRoomOutputSchema,
  GetQueryRoomOutput,
} from "../../schemas/queryRoom.schema";

import { usePostApi } from "./common";

export const useCreateQueryRoom = () => {
  return usePostApi<CreateQueryRoomInput, CreateQueryRoomOutput>(
    API_PATH.CREATE_QUERY_ROOM,
    createQueryRoomOutputSchema
  );
};

export const useGetQueryRoom = (roomId: string) => {
  return useSuspenseFetch<GetQueryRoomOutput>(`/query-room/${roomId}`);
};
