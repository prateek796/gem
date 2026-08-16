"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container className="flex min-h-[70vh] flex-col justify-center py-24 pt-32">
      <p className="caption">A fault</p>
      <h1 className="mt-4 font-display text-4xl sm:text-5xl">The page could not be composed.</h1>
      <p className="mt-4 max-w-md text-stone-dark">
        Try again. If it persists, write to the house — we would rather know than decorate the error.
      </p>
      <div className="mt-10">
        <Button type="button" onClick={reset}>
          Try again
        </Button>
      </div>
    </Container>
  );
}
