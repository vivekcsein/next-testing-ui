import { z } from "zod";
import { parseEnv } from "../utils/parse-env";

// Client Environment Schema
const clientEnvSchema = z.object({
  NEXT_PUBLIC_CLIENT_ORIGIN: z.url().trim().default("http://localhost:7164"),

  NEXT_PUBLIC_CLIENT_PREFIX: z.string().trim().default("/app"),
});

// Validated Client Environment
const clientEnv = parseEnv(clientEnvSchema, "client");

// Application Client Config
export const envClientConfig = Object.freeze({
  clientOrigin: clientEnv.NEXT_PUBLIC_CLIENT_ORIGIN,
  clientPrefix: clientEnv.NEXT_PUBLIC_CLIENT_PREFIX,
});

export type EnvClientConfig = typeof envClientConfig;
