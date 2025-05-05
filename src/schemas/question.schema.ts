import { z } from "zod";

const createQuestionInputSchema = z.object({
  queryRoomId: z.string(),
  content: z.string().min(10),
});

const createQuestionOutputSchema = z.object({ questionId: z.string() });

const questionOutputSchema = z.object({
  _id: z.string(),
  queryRoomId: z.string(),
  owner: z.string(),
  content: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

type CreateQuestionInput = z.infer<typeof createQuestionInputSchema>;
type CreateQuestionOutput = z.infer<typeof createQuestionOutputSchema>;
type QuestionOutput = z.infer<typeof questionOutputSchema>;

export {
  createQuestionInputSchema,
  createQuestionOutputSchema,
  questionOutputSchema,
};
export type { CreateQuestionInput, CreateQuestionOutput, QuestionOutput };
