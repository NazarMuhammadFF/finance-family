import { z } from "zod";

export const businessSchema = z.object({
  family_id: z.string().uuid(),
  name: z.string().min(1),
  category: z.string().optional(),
  description: z.string().optional(),
});
