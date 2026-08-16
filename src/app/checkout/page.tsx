"use client";

import { GemPlate } from "@/components/editorial/gem-plate";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { Field, Input, Select } from "@/components/ui/field";
import { PageFrame } from "@/components/ui/page-frame";
import { getProductById, getSpecies } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { useStore } from "@/lib/store";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart } = useStore();
  const [reserved, setReserved] = useState(false);
  const items = cart
    .map((line) => {
      const product = getProductById(line.productId);
      const stone = product ? getSpecies(product.gemstoneId) : undefined;
      return product && stone ? { product, stone } : null;
    })
    .filter((item) => item !== null);

  const subtotal = items.reduce((sum, item) => sum + item.product.priceInr, 0);
  const paymentsReady = Boolean(process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID);

  if (items.length === 0 && !reserved) {
    return (
      <PageFrame>
        <Container className="py-16">
          <EmptyState
            title="Nothing to reserve"
            body="Add a specimen to the tray first."
            action={{ href: "/gemstones", label: "Enter the Archive" }}
          />
        </Container>
      </PageFrame>
    );
  }

  if (reserved) {
    return (
      <PageFrame>
        <Container className="py-20">
          <p className="caption">Received</p>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl">Your reservation is with the house.</h1>
          <p className="mt-6 max-w-xl text-lg text-stone-dark">
            Payment is completed when Razorpay keys are connected. Until then, a person confirms availability and the next step by email.
          </p>
          <div className="mt-10">
            <Button href="/gemstones" variant="ghost">
              Return to the Archive
            </Button>
          </div>
        </Container>
      </PageFrame>
    );
  }

  return (
    <PageFrame>
      <Container className="grid gap-16 py-12 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-7">
          <p className="caption">Checkout</p>
          <h1 className="mt-4 font-display text-4xl">Reserve with care</h1>
          <p className="mt-4 max-w-lg text-stone-dark">
            {paymentsReady
              ? "Secure payment via Razorpay. Stones remain unique until confirmed."
              : "Online charging is not yet connected. This form reserves your interest — we will not pretend a payment succeeded."}
          </p>
          <form
            className="mt-10 space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              setReserved(true);
            }}
          >
            <Field label="Full name">
              <Input name="name" required autoComplete="name" />
            </Field>
            <Field label="Email">
              <Input name="email" type="email" required autoComplete="email" />
            </Field>
            <Field label="Phone">
              <Input name="phone" type="tel" required autoComplete="tel" />
            </Field>
            <Field label="Country">
              <Select name="country" defaultValue="IN">
                <option value="IN">India</option>
                <option value="other">Elsewhere</option>
              </Select>
            </Field>
            <Field label="Address">
              <Input name="address" required autoComplete="street-address" />
            </Field>
            <Button type="submit">
              {paymentsReady ? "Pay securely" : "Request reservation"}
            </Button>
            <p className="text-[0.65rem] uppercase tracking-[0.16em] text-stone-dark">
              Secure checkout · Unique specimens · Tracked delivery
            </p>
          </form>
        </div>
        <aside className="lg:col-span-5">
          <div className="border border-ink/10 p-6 lg:p-8">
            <p className="caption">Order</p>
            <ul className="mt-6 space-y-5">
              {items.map(({ product, stone }) => (
                <li key={product.id} className="flex gap-4">
                  <div className="w-20 shrink-0">
                    <GemPlate
                      palette={stone.palette}
                      cut={product.specs.cut}
                      name={`${product.slug}-co`}
                      size="sm"
                      className="h-20"
                      glow={false}
                    />
                  </div>
                  <div>
                    <p className="font-display text-lg">{product.name}</p>
                    <p className="text-sm text-stone-dark">{formatPrice(product.priceInr)}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between border-t border-ink/10 pt-4 text-sm">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-3 text-xs text-stone-dark">
              Shipping and any duties are confirmed before payment is captured.
            </p>
          </div>
        </aside>
      </Container>
    </PageFrame>
  );
}
