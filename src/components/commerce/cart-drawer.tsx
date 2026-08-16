"use client";

import { Drawer } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { GemPlate } from "@/components/editorial/gem-plate";
import { getProductById, getSpecies } from "@/lib/catalog";
import { formatCarat, formatPrice } from "@/lib/format";
import { useStore } from "@/lib/store";
import Link from "next/link";

export function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, toggleWishlist } = useStore();
  const items = cart
    .map((line) => {
      const product = getProductById(line.productId);
      const stone = product ? getSpecies(product.gemstoneId) : undefined;
      return product && stone ? { line, product, stone } : null;
    })
    .filter((item) => item !== null);

  const subtotal = items.reduce((sum, item) => sum + item.product.priceInr, 0);

  return (
    <Drawer open={cartOpen} onClose={() => setCartOpen(false)} title="Your selection">
      {items.length === 0 ? (
        <EmptyState
          eyebrow="The tray is empty"
          title="No stones selected"
          body="A specimen remains here until you are ready. Begin in the archive."
          action={{ href: "/gemstones", label: "Enter the Archive" }}
        />
      ) : (
        <div className="flex h-full flex-col">
          <ul className="space-y-6">
            {items.map(({ product, stone }) => (
              <li key={product.id} className="flex gap-4 border-b border-ink/10 pb-6">
                <Link
                  href={`/gemstones/${stone.slug}/${product.slug}`}
                  className="block w-24 shrink-0"
                  onClick={() => setCartOpen(false)}
                >
                  <GemPlate
                    palette={stone.palette}
                    cut={product.specs.cut}
                    name={`${product.slug}-cart`}
                    size="sm"
                    className="h-24"
                    glow={false}
                  />
                </Link>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-lg leading-tight">{product.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-stone-dark">
                    {stone.name} · {formatCarat(product.specs.weightCarat)}
                  </p>
                  <p className="mt-2 text-sm">{formatPrice(product.priceInr)}</p>
                  <div className="mt-3 flex gap-4">
                    <button
                      type="button"
                      className="caption hover:text-ink"
                      onClick={() => toggleWishlist(product.id)}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="caption hover:text-ink"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-auto border-t border-ink/10 pt-6">
            <div className="flex justify-between text-sm">
              <span className="text-stone-dark">Estimated total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-stone-dark">
              Shipping is quoted at reservation. Duties, if any, are calculated for your destination.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button href="/checkout" onClick={() => setCartOpen(false)}>
                Continue to checkout
              </Button>
              <p className="text-center text-[0.65rem] uppercase tracking-[0.16em] text-stone-dark">
                Secure checkout · Tracked delivery · Individually packed
              </p>
            </div>
          </div>
        </div>
      )}
    </Drawer>
  );
}
