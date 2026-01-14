import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { prisma } from "@/lib/prisma";

const baseURL =
  process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const secret =
  process.env.BETTER_AUTH_SECRET ||
  "dev-only-secret-use-env-var-in-production-1234567890abcd";

export const auth = betterAuth({
  appName: "SkillsMap",
  baseURL,
  secret,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
    transaction: true,
  }),
  experimental: {
    joins: true,
  },
  plugins: [nextCookies()],
  emailAndPassword: {
    enabled: false,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    },
  },
});
