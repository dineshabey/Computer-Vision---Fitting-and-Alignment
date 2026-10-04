import Link from "next/link";

import type { Service } from "@/types";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors hover:border-secondary/40">
      <h3 className="text-base font-semibold text-white">
        <Link href={service.href}>{service.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{service.summary}</p>
    </article>
  );
}
