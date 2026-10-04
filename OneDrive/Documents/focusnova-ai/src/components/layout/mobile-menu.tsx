"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui";
import { cn } from "@/lib";
import type { CallToAction, LinkItem, MobileMenuLabels } from "@/types";

type MobileMenuProps = {
  cta: CallToAction;
  labels: MobileMenuLabels;
  links: LinkItem[];
};

export function MobileMenu({ cta, labels, links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? labels.close : labels.open}
        className="inline-flex size-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/15"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span className="relative block h-4 w-5" aria-hidden="true">
          <span
            className={cn(
              "absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform",
              isOpen && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity",
              isOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-transform",
              isOpen && "-translate-y-[7px] -rotate-45",
            )}
          />
        </span>
      </button>

      <div
        className={cn(
          "absolute inset-x-0 top-full border-b border-white/10 bg-background/95 shadow-2xl shadow-black/40 backdrop-blur-xl transition-[opacity,transform]",
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
        id="mobile-navigation"
      >
        <div className="mx-auto max-w-7xl px-6 py-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">{labels.title}</p>
          <nav className="mt-4 grid gap-1">
            {links.map((item) => (
              <Link
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button className="mt-4 w-full" href={cta.href}>
            {cta.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
