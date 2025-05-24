import { ChangeEvent, useState } from "react";
import Page from "../../components/common/Page";

import { convertDateToString } from "../../utils/date";
import { useCreateQueryRoom } from "../../hooks/api/queryRoom.api";

import { useToast } from "../../components/common/Toast";
import {
  CreateQueryRoomInput,
  createQueryRoomInputSchema,
} from "../../schemas/queryRoom.schema";

const CreateQueryRoom = () => {
  const toast = useToast();
  const { mutateAsync: createQueryRoom, isPending: isLoading } =
    useCreateQueryRoom();
  const [queryRoomInput, setQueryRoomInput] = useState<CreateQueryRoomInput>({
    title: "",
    description: "",
    startDate: new Date(),
    endDate: new Date(new Date().getTime() + 3600 * 1000 * 24),
  });
  const handleClickCreate = async () => {
    const parsed = createQueryRoomInputSchema.safeParse(queryRoomInput);
    if (parsed?.error) {
      return;
    }
    try {
      const createResult = await createQueryRoom(parsed.data);
      if (!createResult?.roomId) {
        toast("(!) Failed to create query-room");
      } else {
        const roomId = createResult.roomId;
        toast(`Success to create query-room :: ${roomId}`);
      }
    } catch (err) {
      console.error(err);
      toast("(!) Failed to create query-room");
    }
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setQueryRoomInput((prev) => ({ ...prev, title }));
  };
  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const description = e.target.value;
    setQueryRoomInput((prev) => ({ ...prev, description }));
  };

  const handleChangeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    const startDate = new Date(e.target.value);
    setQueryRoomInput((prev) => ({ ...prev, startDate }));
  };
  const handleChangeEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    const endDate = new Date(e.target.value);
    setQueryRoomInput((prev) => ({ ...prev, endDate }));
  };

  const inputErrorFormat = createQueryRoomInputSchema
    .safeParse(queryRoomInput)
    .error?.format();
  return (
    <Page.Container>
      <Page.Title>Create Query-Room</Page.Title>
      <input value={queryRoomInput.title} onChange={handleChangeTitle} />
      <div>{inputErrorFormat?.title?._errors?.[0]}</div>
      <textarea
        value={queryRoomInput.description}
        onChange={handleChangeDescription}
      />
      <div>{inputErrorFormat?.description?._errors?.[0]}</div>
      <input
        type={"date"}
        value={convertDateToString(queryRoomInput.startDate)}
        onChange={handleChangeStartDate}
      />
      <div>{inputErrorFormat?.startDate?._errors?.[0]}</div>
      <input
        type={"date"}
        value={convertDateToString(queryRoomInput.endDate)}
        onChange={handleChangeEndDate}
      />
      <div>{inputErrorFormat?.endDate?._errors?.[0]}</div>
      <button disabled={isLoading} onClick={handleClickCreate}>
        Create
      </button>
    </Page.Container>
  );
};
export default CreateQueryRoom;
