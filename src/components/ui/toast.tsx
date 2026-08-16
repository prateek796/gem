"use client";

import { cn } from "@/lib/cn";

export function Toast({
  message,
  tone = "default",
}: {
  message: string;
  tone?: "default" | "error";
}) {
  return (
    <div
      role="status"
      className={cn(
        "fixed bottom-6 right-6 z-50 border bg-ivory px-5 py-3 text-sm shadow-lg",
        tone === "error" ? "border-red-800 text-red-900" : "border-ink/15 text-ink",
      )}
    >
      {message}
    </div>
  );
}
