import Link from "next/link";

import { Container } from "@/components/ui";
import type { LinkItem } from "@/types";

type FooterProps = {
  brandName: string;
  copyright: string;
  description: string;
  links: LinkItem[];
  socialLabel: string;
  socialLinks: LinkItem[];
};

export function Footer({ brandName, copyright, description, links, socialLabel, socialLinks }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-background">
      <Container className="py-14">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div className="max-w-md">
            <Link href="/" className="text-sm font-semibold text-white">
              {brandName}
            </Link>
            <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
          </div>

          <div className="grid gap-4 sm:justify-items-end">
            <nav className="flex flex-wrap gap-x-5 gap-y-2">
              {links.map((item) => (
                <Link className="text-sm text-slate-400 hover:text-white" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <nav aria-label={socialLabel}>
              {socialLinks.map((item) => (
                <Link className="text-sm text-slate-400 hover:text-white" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">{copyright}</p>
      </Container>
    </footer>
  );
}
