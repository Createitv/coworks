"use client";

import { useState } from "react";
import { Github, Loader2, LogIn, Shield, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";

type SocialProvider = "google" | "github";

const providers: Array<{
  id: SocialProvider;
  label: string;
  description: string;
  accent: string;
}> = [
  {
    id: "google",
    label: "Continue with Google",
    description: "Use your Google Workspace identity to unlock Skills Atlas.",
    accent: "from-white via-[#f5d399] to-[#c6923c] text-black",
  },
  {
    id: "github",
    label: "Continue with GitHub",
    description: "Perfect for engineering and automation teams.",
    accent: "from-[#050505] via-[#0f0f0f] to-[#232323] text-white",
  },
];

export function LoginForm() {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [pendingProvider, setPendingProvider] = useState<SocialProvider | null>(null);

  const callbackUrl = searchParams.get("callbackUrl") ?? "/";

  const handleSocialSignIn = async (provider: SocialProvider) => {
    try {
      setError(null);
      setPendingProvider(provider);
      await authClient.signIn.social({
        provider,
        callbackURL: callbackUrl,
      });
    } catch (err) {
      console.error(err);
      setError("Unable to start the Better Auth flow. Double-check the provider credentials.");
      setPendingProvider(null);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-[#050505] to-[#1a1209] px-4 py-16">
      <Card className="w-full max-w-xl border border-white/5 bg-black/70 text-white shadow-[0_45px_90px_rgba(0,0,0,0.65)] backdrop-blur">
        <CardHeader className="space-y-4 pb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/60">
            <Sparkles className="h-4 w-4 text-[#f7d793]" />
            Better Auth
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Sign in to curate Claude Skills securely</h1>
            <CardDescription className="text-base text-white/70">
              We rely on Better Auth to handle every OAuth detail. Pick Google or GitHub and get redirected back
              to a polished dashboard in seconds.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-[#f7d793]">
              <Shield className="h-4 w-4" />
              Security stack
            </div>
            <p className="mt-2 text-base text-white">
              Token storage, cookie refresh, and organization guardrails are handled by Better Auth so you never juggle
              manual passwords again.
            </p>
          </div>

          <div className="space-y-3">
            {providers.map((provider) => (
              <button
                type="button"
                key={provider.id}
                onClick={() => handleSocialSignIn(provider.id)}
                disabled={Boolean(pendingProvider)}
                className={clsx(
                  "flex w-full items-center justify-between rounded-2xl bg-gradient-to-r px-5 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 disabled:cursor-not-allowed disabled:opacity-70",
                  provider.accent
                )}
              >
                <div className="flex items-center gap-3">
                  {provider.id === "github" ? (
                    <Github className="h-5 w-5" />
                  ) : (
                    <LogIn className="h-5 w-5" />
                  )}
                  <div>
                    <p className="text-lg font-semibold leading-tight">{provider.label}</p>
                    <p className="text-sm opacity-80">{provider.description}</p>
                  </div>
                </div>
                {pendingProvider === provider.id ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Shield className="h-5 w-5 opacity-80" />
                )}
              </button>
            ))}
          </div>

          {error && (
            <p className="rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          )}

          <p className="text-center text-xs text-white/50">
            OAuth redirect is powered by Better Auth. You will remain signed in until you disconnect from Google or GitHub.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
