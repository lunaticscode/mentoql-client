import { z } from "zod";
import { commonResponseSchema } from "./common.schema";

const insertMentoSeedInputSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const insertMentoSeedResponseShcmea = commonResponseSchema.merge(z.object({}));

type InsertMentoSeedInput = z.infer<typeof insertMentoSeedInputSchema>;
type InsertMentoSeedResponse = z.infer<typeof insertMentoSeedResponseShcmea>;

export { insertMentoSeedInputSchema, insertMentoSeedResponseShcmea };
export type { InsertMentoSeedInput, InsertMentoSeedResponse };
