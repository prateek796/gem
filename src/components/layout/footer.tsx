import { Container } from "@/components/ui/container";
import { footer, site } from "@/content/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ivory-deep/40">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-3xl tracking-[0.18em]">{site.name}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-dark">
              {site.tagline} A private house for gemstones with origin, character and meaning.
            </p>
            <Newsletter />
          </div>
          <FooterCol title="Shop" links={footer.shop} />
          <FooterCol title="Learn" links={footer.learn} />
          <FooterCol title="House" links={footer.house} />
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-ink/10 pt-8 text-[0.68rem] uppercase tracking-[0.16em] text-stone-dark sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}</p>
          <ul className="flex flex-wrap gap-5">
            {footer.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="lg:col-span-2 lg:col-start-auto">
      <p className="caption mb-4">{title}</p>
      <ul className="space-y-2.5 text-sm text-ink-mid">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Newsletter() {
  return (
    <form className="mt-8 max-w-sm" action="/api/newsletter" method="post">
      <label className="caption" htmlFor="newsletter-email">
        The Kalpa letter
      </label>
      <div className="mt-3 flex border-b border-ink/20">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="Email"
          className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-stone"
        />
        <button type="submit" className="caption shrink-0 px-2">
          Join
        </button>
      </div>
      <p className="mt-2 text-xs text-stone-dark">
        Occasional notes on stones, never a blast of discounts.
      </p>
    </form>
  );
}
