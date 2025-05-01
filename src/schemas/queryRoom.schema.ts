import { z } from "zod";
import { commonResponseSchema } from "./common.schema";

const createQueryRoomInputSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(10),
  startDate: z.date(),
  endDate: z.date(),
});

const createQueryRoomOutputSchema = z.union([
  commonResponseSchema.extend({
    isError: z.literal(false),
    roomId: z.string(),
  }),
  commonResponseSchema.extend({
    isError: z.literal(true),
  }),
]);

type CreateQueryRoomInput = z.infer<typeof createQueryRoomInputSchema>;
type CreateQueryRoomOutput = z.infer<typeof createQueryRoomOutputSchema>;

const queryRoomModelSchema = createQueryRoomInputSchema
  .extend({
    startDate: z.string(),
    endDate: z.string(),
    roomId: z.string(),
    owner: z.string(),
  })
  .nullable();

const getQueryRoomOutputSchema = z.union([
  commonResponseSchema.extend({
    isError: z.literal(false),
    queryRoom: queryRoomModelSchema,
  }),
  commonResponseSchema.extend({
    isError: z.literal(true),
  }),
]);

type GetQueryRoomOutput = z.infer<typeof getQueryRoomOutputSchema>;

export {
  createQueryRoomInputSchema,
  createQueryRoomOutputSchema,
  getQueryRoomOutputSchema,
};
export type { CreateQueryRoomInput, CreateQueryRoomOutput, GetQueryRoomOutput };
