import { API_PATH } from "../../consts/api";
import {
  CreateQuestionInput,
  CreateQuestionOutput,
  createQuestionOutputSchema,
} from "../../schemas/question.schema";
import { usePostApi } from "./common";

const useCreateQuestion = () => {
  return usePostApi<CreateQuestionInput, CreateQuestionOutput>(
    API_PATH.CREATE_QUESTION,
    createQuestionOutputSchema
  );
};

export { useCreateQuestion };
