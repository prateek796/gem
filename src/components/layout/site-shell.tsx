import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StoreProvider } from "@/lib/store";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <Header />
      <div id="content" className="flex-1">
        {children}
      </div>
      <Footer />
    </StoreProvider>
  );
}
