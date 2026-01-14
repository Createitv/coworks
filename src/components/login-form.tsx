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
      description: "Use your Google Workspace identity to unlock Claude Cowork.",
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
  const [signingOut, setSigningOut] = useState(false);
  const { data: session, isLoading: sessionLoading } = authClient.useSession();

  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  const isSignedIn = Boolean(session?.user);

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

  const handleSignOut = async () => {
    try {
      setError(null);
      setSigningOut(true);
      await authClient.signOut();
    } catch (err) {
      console.error(err);
      setError("Unable to sign out right now. Please try again.");
    } finally {
      setSigningOut(false);
    }
  };

  const disableSignInButtons = Boolean(pendingProvider) || signingOut || sessionLoading || isSignedIn;

  return (
    <Card className="w-full rounded-[32px] border border-white/10 bg-gradient-to-br from-black via-[#050505] to-[#151515] text-white shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
      <CardHeader className="space-y-4 pb-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Sign in to Claude Cowork</h1>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {isSignedIn && (
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Already signed in</p>
              <p className="text-base text-white">
                {session?.user?.name || session?.user?.email || "Current account"}
              </p>
            </div>
            <button
              type="button"
              onClick={handleSignOut}
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 disabled:opacity-60"
              disabled={signingOut}
            >
              {signingOut ? "Signing out..." : "Sign out to switch account"}
            </button>
          </div>
        )}

        <div className="space-y-3">
          {providers.map((provider) => (
            <button
              type="button"
              key={provider.id}
              onClick={() => handleSocialSignIn(provider.id)}
              disabled={disableSignInButtons}
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
          OAuth redirect is powered by Security Auth. Stay signed in until you disconnect from Google or GitHub.
        </p>
      </CardContent>
    </Card>
  );
}
