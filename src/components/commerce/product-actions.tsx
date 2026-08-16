"use client";

import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/cn";

export function ProductActions({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, wishlist, toggleCompare, compare } =
    useStore();
  const available = product.availability === "available";
  const saved = wishlist.includes(product.id);
  const compared = compare.includes(product.id);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          className="flex-1"
          disabled={!available}
          onClick={() => addToCart(product)}
        >
          {available ? "Add to tray" : product.availability === "sold" ? "Placed" : "Reserved"}
        </Button>
        <Button variant="ghost" className="flex-1" href="/consult">
          Ask about this stone
        </Button>
      </div>
      <div className="flex gap-6">
        <button
          type="button"
          className={cn("caption", saved && "text-ink")}
          onClick={() => toggleWishlist(product.id)}
        >
          {saved ? "Saved" : "Save"}
        </button>
        <button
          type="button"
          className={cn("caption", compared && "text-ink")}
          onClick={() => toggleCompare(product.id)}
        >
          {compared ? "In compare" : "Compare"}
        </button>
      </div>
    </div>
  );
}

export function WishlistButton({ productId }: { productId: string }) {
  const { toggleWishlist, wishlist } = useStore();
  const saved = wishlist.includes(productId);
  return (
    <button type="button" className="caption" onClick={() => toggleWishlist(productId)}>
      {saved ? "Saved" : "Save"}
    </button>
  );
}
