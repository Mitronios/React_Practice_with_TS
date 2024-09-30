import { z } from "zod";

export const contacTypeOptions = [
  "Familiar",
  "work",
  "Friend",
  "Other",
] as const;
export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .min(3, { message: "Please type at least 3 characters." }),
  lastname: z
    .string()
    .min(1, { message: "Last Name is required." })
    .min(3, { message: "Please type at least 3 characters." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email("Invalid email"),
  type: z.enum(contacTypeOptions),
});

export type Contact = z.infer<typeof contactSchema> & { id: string };
