import { z } from "zod";

export const transactionSchema = z.object({
  family_id: z.string().uuid(),
  amount: z.number().nonnegative(),
  type: z.enum(["income", "expense"]),
  date: z.string(),
  business_id: z.string().uuid().optional(),
});
