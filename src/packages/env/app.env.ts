import { z } from "zod";
import { parseEnv } from "../utils/parse-env";

// Server Environment Schema
const serverEnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  PORT: z.coerce
    .number()
    .int("PORT must be an integer")
    .min(1, "PORT must be greater than 0")
    .max(65535, "PORT must be less than or equal to 65535")
    .default(3000),
});

// Validated Server Environment
const serverEnv = parseEnv(serverEnvSchema, "server");

// Application Environment Config
export const envAppConfig = Object.freeze({
  NODE_ENV: serverEnv.NODE_ENV,
  port: serverEnv.PORT,

  isDevelopment: serverEnv.NODE_ENV === "development",
  isProduction: serverEnv.NODE_ENV === "production",
  isTest: serverEnv.NODE_ENV === "test",
});

export type EnvAppConfig = typeof envAppConfig;
