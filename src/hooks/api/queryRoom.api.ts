import { API_PATH } from "../../consts/api";
import {
  CreateQueryRoomInput,
  CreateQueryRoomOutput,
  createQueryRoomOutputSchema,
  GetQueryRoomOutput,
  GetQueryRoomListInput,
  GetQueryRoomListOutput,
  getQueryRoomListOutputSchema,
  getQueryRoomOutputSchema,
} from "../../schemas/queryRoom.schema";
import { useMutation, useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getApi, postApi } from "./common";

export const useCreateQueryRoom = () => {
  return useMutation({
    mutationKey: [API_PATH.CREATE_QUERY_ROOM],
    mutationFn: (data: CreateQueryRoomInput) =>
      postApi<CreateQueryRoomInput, CreateQueryRoomOutput>(
        API_PATH.CREATE_QUERY_ROOM,
        data,
        createQueryRoomOutputSchema
      ),
  });
};

export const useGetQueryRoomList = (
  initParams: GetQueryRoomListInput = { page: 1, size: 10 },
  shouldFetch: boolean = true
) => {
  const { refetch: getQueryRoomList, ...restProps } = useQuery({
    queryKey: [API_PATH.GET_QUERY_ROOM_LIST, initParams.page, initParams.size],
    queryFn: () =>
      getApi<GetQueryRoomListInput, GetQueryRoomListOutput>(
        API_PATH.GET_QUERY_ROOM_LIST,
        initParams,
        getQueryRoomListOutputSchema
      ),
    enabled: shouldFetch,
  });
  console.log(restProps.error);
  return {
    ...restProps,
    getQueryRoomList,
  };
};

export const useGetQueryRoom = (roomId: string) => {
  return useSuspenseQuery({
    queryKey: [`/query-room/${roomId}`],
    queryFn: () =>
      getApi<{}, GetQueryRoomOutput>(
        `/query-room/${roomId}`,
        {},
        getQueryRoomOutputSchema
      ),
  });
};
