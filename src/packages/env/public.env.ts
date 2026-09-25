import { z } from "zod";
import { STYLES_THEME_NAMES } from "../configs/styles.config";
import { parseEnv } from "../utils/parse-env";

// Public Environment Schema
const publicEnvSchema = z.object({
  // App
  NEXT_PUBLIC_APP_NAME: z.string().trim().min(1).default("@frenzzofficial"),

  NEXT_PUBLIC_APP_VERSION: z.string().trim().min(1).default("2.0.0"),

  NEXT_PUBLIC_APP_DESCRIPTION: z
    .string()
    .trim()
    .min(1)
    .default(
      "Future-ready 2026 frontend template for creating robust, enterprise-level web applications.",
    ),

  // Site
  NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),

  NEXT_PUBLIC_SITE_TITLE: z
    .string()
    .trim()
    .min(1)
    .default("Top 1% Frontend Template of 2026"),

  NEXT_PUBLIC_LOGO_URL: z.string().trim().min(1).default("/logo.png"),

  NEXT_PUBLIC_OG_IMAGE_URL: z.string().trim().optional(),

  // Theme
  NEXT_PUBLIC_ACTIVE_STYLE: z
    .enum(STYLES_THEME_NAMES)
    .default("cyantrix-theme"),

  // Theme
  NEXT_PUBLIC_ACTIVE_THEME: z
    .enum(["system", "light", "dark"])
    .default("system"),

  // Social
  NEXT_PUBLIC_TWITTER: z
    .string()
    .trim()
    .default("https://twitter.com/frenzzofficial"),

  NEXT_PUBLIC_GITHUB: z
    .string()
    .trim()
    .default("https://github.com/frenzzofficial"),

  NEXT_PUBLIC_LINKEDIN: z
    .string()
    .trim()
    .default("https://www.linkedin.com/company/frenzz/"),

  // Author
  NEXT_PUBLIC_AUTHOR_NAME: z.string().trim().min(1).default("frenzzofficial"),

  NEXT_PUBLIC_AUTHOR_HANDLE: z.string().trim().min(1).default("frenzzofficial"),

  NEXT_PUBLIC_AUTHOR_EMAIL: z.email().default("contact@frenzz.in"),

  // Google Verification
  NEXT_PUBLIC_GOOGLE_VERIFICATION: z
    .string()
    .trim()
    .min(1)
    .default("google-verification-code"),
});

// Validated Public Environment
const publicEnv = parseEnv(publicEnvSchema, "public");

// Public Application Config
export const envPublicConfig = Object.freeze({
  // App
  APP_NAME: publicEnv.NEXT_PUBLIC_APP_NAME,
  APP_VERSION: publicEnv.NEXT_PUBLIC_APP_VERSION,
  APP_DESCRIPTION: publicEnv.NEXT_PUBLIC_APP_DESCRIPTION,

  // Site
  SITE_URL: publicEnv.NEXT_PUBLIC_SITE_URL,
  SITE_TITLE: publicEnv.NEXT_PUBLIC_SITE_TITLE,
  LOGO_URL: publicEnv.NEXT_PUBLIC_LOGO_URL,
  OG_IMAGE_URL: publicEnv.NEXT_PUBLIC_OG_IMAGE_URL,

  // Theme
  ACTIVE_STYLE: publicEnv.NEXT_PUBLIC_ACTIVE_STYLE,
  ACTIVE_THEME: publicEnv.NEXT_PUBLIC_ACTIVE_THEME,

  // Social
  TWITTER: publicEnv.NEXT_PUBLIC_TWITTER,
  LINKEDIN: publicEnv.NEXT_PUBLIC_LINKEDIN,
  GITHUB: publicEnv.NEXT_PUBLIC_GITHUB,

  // Author
  AUTHOR_NAME: publicEnv.NEXT_PUBLIC_AUTHOR_NAME,
  AUTHOR_HANDLE: publicEnv.NEXT_PUBLIC_AUTHOR_HANDLE,
  AUTHOR_EMAIL: publicEnv.NEXT_PUBLIC_AUTHOR_EMAIL,

  // Google Verification
  GOOGLE_VERIFICATION: publicEnv.NEXT_PUBLIC_GOOGLE_VERIFICATION,
});

export type EnvPublicConfig = typeof envPublicConfig;
