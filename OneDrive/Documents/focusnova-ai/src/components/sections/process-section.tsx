import { Container, SectionTitle } from "@/components/ui";
import type { HomePageContent } from "@/types";

type ProcessSectionProps = {
  content: HomePageContent["process"];
};

export function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionTitle badge={content.badge} description={content.description} title={content.title} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step) => (
            <article className="rounded-xl border border-white/10 bg-card p-6 shadow-xl shadow-black/20 backdrop-blur" key={step.id}>
              <p className="text-sm font-semibold text-secondary">{step.step}</p>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
