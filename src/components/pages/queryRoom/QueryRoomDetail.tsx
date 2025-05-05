import { ChangeEvent, FC, useState } from "react";
import { useGetQueryRoom } from "../../../hooks/api/queryRoom.api";
import { useCreateQuestion } from "../../../hooks/api/question.api";
import NotFoundaPage from "../../../pages/NotFoundPage";
import {
  CreateQuestionInput,
  createQuestionInputSchema,
} from "../../../schemas/question.schema";

interface QueryRoomContainerProps {
  roomId: string;
}

const QueryRoomDetail: FC<QueryRoomContainerProps> = ({ roomId }) => {
  const { result } = useGetQueryRoom(roomId);
  const [questionInput, setQuestionInput] = useState<CreateQuestionInput>({
    queryRoomId: roomId,
    content: "",
  });
  const { request: createQuestion, isLoading } = useCreateQuestion();

  if (!result) return null;
  if (!result.queryRoom) {
    return <NotFoundaPage />;
  }
  const { title, description, startDate, endDate, questions } =
    result.queryRoom;

  const handleClickSubmitQuestion = async () => {
    const parsed = createQuestionInputSchema.safeParse(questionInput);
    if (parsed?.error) {
      return;
    }
    try {
      const createResult = await createQuestion(parsed.data);
      console.log(createResult);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangeQuestionContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const content = e.target.value;
    setQuestionInput((prev) => ({ ...prev, content }));
  };

  const inputErrorFormat = createQuestionInputSchema
    .safeParse(questionInput)
    .error?.format();

  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{startDate}</div>
      <div>{endDate}</div>

      <div>
        <div>Question Form</div>
        <textarea
          value={questionInput.content}
          onChange={handleChangeQuestionContent}
        />
        <div>{inputErrorFormat?.content?._errors[0]}</div>
        <button disabled={isLoading} onClick={handleClickSubmitQuestion}>
          Submit Question
        </button>
      </div>
      <div
        style={{
          height: "5px",
          display: "block",
          backgroundColor: "salmon",
          margin: "15px 0px",
        }}
      />
      <div>
        {questions?.map((question, index) => (
          <div style={{ marginBottom: "10px" }} key={`question-key-${index}`}>
            <div style={{ color: "white", backgroundColor: "black" }}>
              {question.content}
            </div>
            <div>{question.createdAt}</div>
            <div>{question.owner}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QueryRoomDetail;
