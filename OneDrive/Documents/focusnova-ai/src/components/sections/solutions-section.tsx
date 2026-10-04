import { SolutionCard } from "@/components/cards";
import { Container, SectionTitle } from "@/components/ui";
import type { SectionIntro, Solution } from "@/types";

type SolutionsSectionProps = {
  content: SectionIntro;
  solutions: Solution[];
};

export function SolutionsSection({ content, solutions }: SolutionsSectionProps) {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-24 sm:py-32">
      <Container>
        <SectionTitle {...content} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
      </Container>
    </section>
  );
}
