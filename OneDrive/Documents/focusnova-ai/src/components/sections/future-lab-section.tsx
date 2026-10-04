import { FutureProductCard } from "@/components/cards";
import { Container, SectionTitle } from "@/components/ui";
import type { FutureLabProduct, SectionIntro } from "@/types";

type FutureLabSectionProps = {
  content: SectionIntro;
  products: FutureLabProduct[];
};

export function FutureLabSection({ content, products }: FutureLabSectionProps) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.18),transparent_32rem),linear-gradient(to_bottom,rgba(15,23,42,0.5),rgba(2,6,23,1))]" />
      <Container>
        <div className="text-white">
          <SectionTitle
            badge={content.badge}
            description={content.description}
            title={content.title}
          />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <FutureProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
