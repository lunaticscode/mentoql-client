import { z } from "zod";
import { commonResponseSchema } from "./common.schema";

const createQuestionInputSchema = z.object({
  queryRoomId: z.string(),
  content: z.string().min(10),
});

const createQuestionOutputSchema = z.union([
  commonResponseSchema.extend({
    isError: z.literal(false),
  }),
  commonResponseSchema.extend({
    isError: z.literal(true),
  }),
]);

type CreateQuestionInput = z.infer<typeof createQuestionInputSchema>;
type CreateQuestionOutput = z.infer<typeof createQuestionOutputSchema>;

export { createQuestionInputSchema, createQuestionOutputSchema };
export type { CreateQuestionInput, CreateQuestionOutput };
