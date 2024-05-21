import { z } from "zod";

export const studentValidationSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(
    z.object({
      type: z.string(),
      value: z.string(),
    })
  ),
  inventory: z.object({
    quantity: z.number(),
    inStock: z.boolean(),
  }),
});
