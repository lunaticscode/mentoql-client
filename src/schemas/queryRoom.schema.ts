import { z } from "zod";
import { questionOutputSchema } from "./question.schema";

const createQueryRoomInputSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(10),
  startDate: z.date(),
  endDate: z.date(),
});

const createQueryRoomOutputSchema = z.object({ roomId: z.string() });

type CreateQueryRoomInput = z.infer<typeof createQueryRoomInputSchema>;
type CreateQueryRoomOutput = z.infer<typeof createQueryRoomOutputSchema>;

const queryRoomModelSchema = createQueryRoomInputSchema.extend({
  startDate: z.string(),
  endDate: z.string(),
  roomId: z.string(),
  owner: z.string(),
});

const queryRoomDetailModelSchema = queryRoomModelSchema.extend({
  questions: z.array(questionOutputSchema),
});

const getQueryRoomListInputSchema = z.object({
  page: z.number().min(1),
  size: z.number().min(10),
});

const getQueryRoomListOutputSchema = z.object({
  rooms: z.array(queryRoomModelSchema),
});

const getQueryRoomOutputSchema = z.object({
  queryRoom: queryRoomDetailModelSchema,
});

type GetQueryRoomListInput = z.infer<typeof getQueryRoomListInputSchema>;
type GetQueryRoomListOutput = z.infer<typeof getQueryRoomListOutputSchema>;
type GetQueryRoomOutput = z.infer<typeof getQueryRoomOutputSchema>;

export {
  createQueryRoomInputSchema,
  createQueryRoomOutputSchema,
  getQueryRoomListInputSchema,
  getQueryRoomListOutputSchema,
  getQueryRoomOutputSchema,
};

export type {
  CreateQueryRoomInput,
  CreateQueryRoomOutput,
  GetQueryRoomListInput,
  GetQueryRoomListOutput,
  GetQueryRoomOutput,
};
