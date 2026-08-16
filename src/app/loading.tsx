import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/empty-state";

export default function Loading() {
  return (
    <Container className="py-32">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="mt-6 h-16 w-2/3" />
      <Skeleton className="mt-8 h-64 w-full" />
    </Container>
  );
}
