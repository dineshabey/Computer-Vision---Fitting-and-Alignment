import { IndustryCard } from "@/components/cards";
import { Container, SectionTitle } from "@/components/ui";
import type { Industry, SectionIntro } from "@/types";

type IndustriesSectionProps = {
  content: SectionIntro;
  industries: Industry[];
};

export function IndustriesSection({ content, industries }: IndustriesSectionProps) {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-24 sm:py-32">
      <Container>
        <SectionTitle {...content} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard industry={industry} key={industry.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}
