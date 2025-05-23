import { z } from "zod";

const insertMentoSeedInputSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const insertMentoSeedResponseShcmea = z.object({
  insertCnt: z.number(),
});

type InsertMentoSeedInput = z.infer<typeof insertMentoSeedInputSchema>;
type InsertMentoSeedResponse = z.infer<typeof insertMentoSeedResponseShcmea>;

export { insertMentoSeedInputSchema, insertMentoSeedResponseShcmea };
export type { InsertMentoSeedInput, InsertMentoSeedResponse };
