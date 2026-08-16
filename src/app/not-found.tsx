import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col justify-center py-24 pt-32">
      <p className="caption">404</p>
      <h1 className="mt-4 font-display text-4xl sm:text-6xl">This page is not in the cabinet.</h1>
      <p className="mt-4 max-w-md text-stone-dark">
        It may have been moved, or it may never have been a stone.
      </p>
      <div className="mt-10 flex gap-4">
        <Button href="/">Home</Button>
        <Button href="/gemstones" variant="ghost">
          The Archive
        </Button>
      </div>
      <p className="mt-8 text-sm">
        <Link href="/consult" className="caption">
          Or write to the house →
        </Link>
      </p>
    </Container>
  );
}
