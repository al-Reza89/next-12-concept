import { z } from "zod";

export const signUpSchema = z
  .object({
    // verity that the email is a valid email
    email: z.string().email(),
    password: z
      .string()
      .min(10, "password must be atleast 10 character")
      .max(100),
    confirmPassword: z.string().min(10).max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  });

export type TsignUpSchema = z.infer<typeof signUpSchema>;
