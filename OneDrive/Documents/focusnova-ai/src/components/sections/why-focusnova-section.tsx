import { Container, SectionTitle } from "@/components/ui";
import type { HomePageContent } from "@/types";

type WhyFocusNovaSectionProps = {
  content: HomePageContent["why"];
};

export function WhyFocusNovaSection({ content }: WhyFocusNovaSectionProps) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionTitle {...content} align="center" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {content.points.map((point) => (
            <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6" key={point.id}>
              <h3 className="text-base font-semibold text-white">{point.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{point.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
