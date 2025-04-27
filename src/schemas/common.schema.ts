import { z } from "zod";
const commonResponseSchema = z.object({
  isError: z.boolean(),
});

export { commonResponseSchema };
