"use client";

import { CartDrawer } from "@/components/commerce/cart-drawer";
import { SearchPalette } from "@/components/discovery/search-palette";
import { cn } from "@/lib/cn";
import { getAllSpecies } from "@/lib/catalog";
import { nav, site } from "@/content/site";
import { useStore } from "@/lib/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const collectionsMega = [
  { href: "/collections/the-archive", label: "The Archive", dek: "Specimens held for rarity and character." },
  { href: "/collections/birthstones", label: "Birthstones", dek: "The modern calendar, told with restraint." },
  { href: "/collections/navaratna", label: "Navaratna", dek: "Nine gems of a classical planetary system." },
];

const meaningMega = [
  { href: "/astrology", label: "Meaning", dek: "Symbolism as culture, not as science." },
  { href: "/astrology/zodiac-gemstones", label: "Zodiac", dek: "Stones traditionally associated with each sign." },
  { href: "/astrology/birthstones", label: "Birth months", dek: "A date, a stone, a long convention." },
  { href: "/astrology/vedic", label: "Vedic", dek: "Planetary gems of the navaratna." },
  { href: "/discover", label: "Find your stone", dek: "A private consultation in six questions." },
];

export function Header() {
  const path = usePathname();
  const darkHero = path === "/";
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const { cart, wishlist, setCartOpen, setSearchOpen } = useStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [menuFor, setMenuFor] = useState(path);
  if (menuFor !== path) {
    setMenuFor(path);
    setMobile(false);
    setOpenMega(null);
  }

  const inverted = darkHero && !scrolled && !mobile;
  const bar = inverted
    ? "text-ivory"
    : "text-ink bg-ivory/90 backdrop-blur-md";

  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
          bar,
          scrolled && !inverted && "border-b border-ink/10",
          inverted && "border-b border-transparent",
        )}
        onMouseLeave={() => setOpenMega(null)}
      >
        <div className="mx-auto flex h-[4.25rem] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <button
            type="button"
            className="caption lg:hidden"
            aria-expanded={mobile}
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? "Close" : "Menu"}
          </button>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 font-display text-[1.35rem] tracking-[0.22em] lg:static lg:translate-x-0"
          >
            {site.name}
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {nav.primary.map((item) => (
              <div key={item.href} onMouseEnter={() => setOpenMega(item.mega ?? null)}>
                <Link
                  href={item.href}
                  className={cn(
                    "caption py-5 transition-opacity hover:opacity-70",
                    inverted ? "text-ivory/80" : "text-ink",
                  )}
                  onFocus={() => setOpenMega(item.mega ?? null)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <button
              type="button"
              className="caption"
              onClick={() => setSearchOpen(true)}
            >
              Search
            </button>
            <Link href="/wishlist" className="caption hidden sm:inline">
              Saved{wishlist.length ? ` ${wishlist.length}` : ""}
            </Link>
            <button type="button" className="caption" onClick={() => setCartOpen(true)}>
              Tray{cart.length ? ` ${cart.length}` : ""}
            </button>
          </div>
        </div>

        {openMega ? (
          <Mega
            inverted={inverted}
            kind={openMega}
            onClose={() => setOpenMega(null)}
          />
        ) : null}

        {mobile ? <MobileMenu inverted={inverted} /> : null}
      </header>
      <CartDrawer />
      <SearchPalette />
    </>
  );
}

function Mega({
  kind,
  inverted,
  onClose,
}: {
  kind: string;
  inverted: boolean;
  onClose: () => void;
}) {
  const panel = inverted
    ? "bg-ink/95 text-ivory border-t border-ivory/10"
    : "bg-ivory text-ink border-t border-ink/10";

  return (
    <div className={cn("hidden lg:block", panel)}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-8 px-12 py-10">
        {kind === "archive" ? (
          <>
            <div className="col-span-3">
              <p className="caption mb-3 opacity-60">The Archive</p>
              <p className="font-display text-2xl leading-snug">
                Each stone is a specimen, not a SKU.
              </p>
              <Link href="/gemstones" className="caption mt-6 inline-block" onClick={onClose}>
                View all stones →
              </Link>
            </div>
            <ul className="col-span-9 grid grid-cols-4 gap-x-6 gap-y-3">
              {getAllSpecies().map((stone) => (
                <li key={stone.id}>
                  <Link
                    href={`/gemstones/${stone.slug}`}
                    className="flex items-center gap-3 py-1 text-sm hover:opacity-70"
                    onClick={onClose}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: stone.palette.mid }}
                    />
                    {stone.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {kind === "collections" ? (
          <ul className="col-span-12 grid grid-cols-3 gap-10">
            {collectionsMega.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={onClose} className="block">
                  <p className="font-display text-2xl">{item.label}</p>
                  <p className="mt-2 text-sm opacity-70">{item.dek}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
        {kind === "meaning" ? (
          <ul className="col-span-12 grid grid-cols-5 gap-8">
            {meaningMega.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={onClose} className="block">
                  <p className="font-display text-xl">{item.label}</p>
                  <p className="mt-2 text-sm opacity-70">{item.dek}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

function MobileMenu({ inverted }: { inverted: boolean }) {
  return (
    <div
      className={cn(
        "border-t lg:hidden",
        inverted ? "border-ivory/10 bg-ink text-ivory" : "border-ink/10 bg-ivory text-ink",
      )}
    >
      <nav className="flex flex-col gap-1 px-5 py-8">
        {[...nav.primary, { href: "/consult", label: "Consult" }, { href: "/about", label: "The House" }].map(
          (item) => (
            <Link key={item.href} href={item.href} className="font-display py-3 text-3xl">
              {item.label}
            </Link>
          ),
        )}
      </nav>
    </div>
  );
}
