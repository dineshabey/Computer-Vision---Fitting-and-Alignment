import { Badge, Button, Container } from "@/components/ui";
import type { HomePageContent } from "@/types";

type FinalCtaSectionProps = {
  content: HomePageContent["cta"];
};

export function FinalCtaSection({ content }: FinalCtaSectionProps) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-12 text-white backdrop-blur sm:px-10 lg:px-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(37,99,235,0.25),transparent_24rem),radial-gradient(circle_at_90%_80%,rgba(6,182,212,0.18),transparent_22rem)]" />
          <Badge>{content.badge}</Badge>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">{content.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">{content.description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href={content.primaryCta.href}>
                {content.primaryCta.label}
              </Button>
              <Button href={content.secondaryCta.href} variant="secondary">
                {content.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
