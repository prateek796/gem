import { Container } from "@/components/ui/container";
import { PageFrame } from "@/components/ui/page-frame";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export function PolicyPage({
  title,
  dek,
  children,
}: {
  title: string;
  dek?: string;
  children: ReactNode;
}) {
  return (
    <PageFrame>
      <Container className="py-12 lg:py-16">
        <h1 className="max-w-3xl font-display text-4xl sm:text-6xl">{title}</h1>
        {dek ? <p className="mt-5 max-w-xl text-lg text-stone-dark">{dek}</p> : null}
        <div className="prose-kalpa mt-12 max-w-2xl">{children}</div>
      </Container>
    </PageFrame>
  );
}

export const policyMeta = (title: string, description: string): Metadata => ({
  title,
  description,
});
