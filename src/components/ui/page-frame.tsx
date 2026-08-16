import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function PageFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <main className={cn("pt-[4.25rem]", className)}>{children}</main>;
}
