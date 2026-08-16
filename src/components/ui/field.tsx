import { cn } from "@/lib/cn";
import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const field =
  "w-full border border-ink/15 bg-transparent px-4 py-3 text-sm text-ink placeholder:text-stone outline-none transition-colors focus:border-ink/40";

export function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="caption mb-2 block">{label}</span>
      {children}
      {hint && !error ? (
        <span className="mt-2 block text-xs text-stone-dark">{hint}</span>
      ) : null}
      {error ? (
        <span className="mt-2 block text-xs text-red-800">{error}</span>
      ) : null}
    </label>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(field, props.className)} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea {...props} className={cn(field, "min-h-32 resize-y", props.className)} />
  );
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn(field, props.className)} />;
}
