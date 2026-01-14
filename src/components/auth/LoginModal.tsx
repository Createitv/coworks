"use client";

import { X } from "lucide-react";
import { LoginForm } from "@/components/login-form";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export function LoginModal({ open, onClose }: LoginModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        aria-hidden="true"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-2xl">
        <div className="absolute right-6 top-4 z-10 text-white/70">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/20 p-2 text-white transition hover:border-white/60"
            aria-label="Close login dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
