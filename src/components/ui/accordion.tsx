"use client";

import { useState, type ReactNode } from "react";

export function Accordion({
  items,
}: {
  items: { title: string; body: ReactNode }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title}>
            <button
              type="button"
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-2xl">{item.title}</span>
              <span className="caption">{isOpen ? "Close" : "Open"}</span>
            </button>
            {isOpen ? (
              <div className="pb-6 text-[1.02rem] leading-relaxed text-stone-dark">
                {item.body}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
