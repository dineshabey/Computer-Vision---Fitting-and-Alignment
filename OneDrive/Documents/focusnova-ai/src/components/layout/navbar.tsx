import Link from "next/link";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { Button, Container } from "@/components/ui";
import type { CallToAction, LinkItem, MobileMenuLabels } from "@/types";

type NavbarProps = {
  brandMark: string;
  brandName: string;
  cta: CallToAction;
  links: LinkItem[];
  mobileMenuLabels: MobileMenuLabels;
};

export function Navbar({ brandMark, brandName, cta, links, mobileMenuLabels }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl">
      <Container className="relative flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-white">
          <span className="flex size-8 items-center justify-center rounded-xl bg-primary text-xs font-bold text-white shadow-lg shadow-blue-950/30">
            {brandMark}
          </span>
          <span>{brandName}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label={mobileMenuLabels.title}>
          {links.map((item) => (
            <Link
              className="rounded-xl px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={cta.href} size="sm">
            {cta.label}
          </Button>
        </div>

        <MobileMenu cta={cta} labels={mobileMenuLabels} links={links} />
      </Container>
    </header>
  );
}
