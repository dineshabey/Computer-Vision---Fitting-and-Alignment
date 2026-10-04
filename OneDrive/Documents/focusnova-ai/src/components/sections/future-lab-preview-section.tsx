import { Badge, Button, Container } from "@/components/ui";
import type { HomePageContent } from "@/types";

type FutureLabPreviewSectionProps = {
  content: HomePageContent["futureLabSpotlight"];
};

export function FutureLabPreviewSection({ content }: FutureLabPreviewSectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <Badge>{content.badge}</Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-normal text-white sm:text-3xl">{content.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">{content.description}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
            <p className="text-sm text-slate-400">{content.productName}</p>
            <Button className="mt-4" href="/future-lab" variant="secondary">
              {content.badge}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
