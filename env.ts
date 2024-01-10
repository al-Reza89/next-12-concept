import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.number().int().positive(),
  THIRD_PARTY_API_KEY: z.string().min(1),
});

// export the env variables
export const parsedEnv = envSchema.parse(process.env);
