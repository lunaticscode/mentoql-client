import { z } from "zod";
import { commonResponseSchema } from "./common.schema";

const insertMentoSeedInputSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const insertMentoSeedResponseShcmea = commonResponseSchema.merge(z.object({}));

type InsertMentoSeedInput = z.infer<typeof insertMentoSeedInputSchema>;
type InsertMentoSeedResponse = z.infer<typeof insertMentoSeedResponseShcmea>;

const createMentoQueryRoomInputSchema = z.object({
  title: z.string(),
  mentoId: z.string(),
  startDate: z.date(),
  endDate: z.date(),
});

const createMentoQueryRoomResponseSchema = commonResponseSchema.merge(
  z.object({
    roomId: z.string(),
  })
);

type CreateMentoQueryRoomInput = z.infer<
  typeof createMentoQueryRoomInputSchema
>;
type CreateMentoQueryRoomResponse = z.infer<
  typeof createMentoQueryRoomResponseSchema
>;

export {
  insertMentoSeedInputSchema,
  insertMentoSeedResponseShcmea,
  createMentoQueryRoomInputSchema,
  createMentoQueryRoomResponseSchema,
};
export type {
  InsertMentoSeedInput,
  InsertMentoSeedResponse,
  CreateMentoQueryRoomInput,
  CreateMentoQueryRoomResponse,
};
