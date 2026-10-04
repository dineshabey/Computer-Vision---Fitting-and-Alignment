import { Badge } from "@/components/ui";
import type { FutureLabProduct } from "@/types";

type FutureProductCardProps = {
  product: FutureLabProduct;
};

export function FutureProductCard({ product }: FutureProductCardProps) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.04] p-6 text-white shadow-xl shadow-black/25 backdrop-blur transition-colors hover:border-secondary/45">
      <Badge>{product.status}</Badge>
      <h3 className="mt-5 text-xl font-semibold">{product.name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{product.summary}</p>
    </article>
  );
}
