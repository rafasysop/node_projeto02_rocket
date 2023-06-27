import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
  DB_STRING: z.string(),
  PORT: z.string().default("3332").nullable(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("Invalid enviorment variables!", _env.error.format());
  throw new Error("Invalid enviorment variables!");
}

export const env = envSchema.parse(process.env);
