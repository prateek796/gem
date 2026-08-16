"use client";

import { ProductCard } from "@/components/commerce/product-card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { PageFrame } from "@/components/ui/page-frame";
import { getProductById } from "@/lib/catalog";
import { useStore } from "@/lib/store";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useStore();
  const items = wishlist
    .map((id) => getProductById(id))
    .filter((item) => item !== undefined);

  return (
    <PageFrame>
      <Container className="py-12 lg:py-16">
        <p className="caption">Saved</p>
        <h1 className="mt-4 font-display text-4xl sm:text-6xl">A private tray</h1>
        {items.length === 0 ? (
          <EmptyState
            title="Nothing saved"
            body="When a specimen stays with you after the tab is closed, it belongs here."
            action={{ href: "/gemstones", label: "Enter the Archive" }}
          />
        ) : (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
                {product.availability === "sold" ? (
                  <p className="mt-2 text-sm text-stone-dark">This specimen has been placed.</p>
                ) : null}
                <button
                  type="button"
                  className="caption mt-3"
                  onClick={() => toggleWishlist(product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        {items.length > 0 ? (
          <div className="mt-12">
            <Button href="/compare" variant="ghost">
              Compare saved stones
            </Button>
          </div>
        ) : null}
      </Container>
    </PageFrame>
  );
}
