import { AIWave } from "@/components/home";
import { Badge, Button, Container } from "@/components/ui";
import type { HomeHero } from "@/types";

type HomeHeroSectionProps = {
  content: HomeHero;
};

export function HomeHeroSection({ content }: HomeHeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.24),transparent_34rem),linear-gradient(to_bottom,rgba(15,23,42,0.7),rgba(2,6,23,0.96))]" />
      <AIWave />
      <Container className="relative z-10 grid min-h-[calc(100vh-3.75rem)] items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_0.78fr] lg:py-24">
        <div>
          <Badge variant="accent">{content.badge}</Badge>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{content.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
            <Button href={content.secondaryCta.href} variant="secondary">
              {content.secondaryCta.label}
            </Button>
          </div>
          <p className="mt-8 text-sm text-slate-400">{content.trustText}</p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle,rgba(6,182,212,0.18),rgba(139,92,246,0.1),transparent_70%)] blur-2xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-background/70 p-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-secondary">{content.visual.label}</p>
              <h2 className="mt-4 text-xl font-semibold text-white">{content.visual.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{content.visual.description}</p>
              <div className="mt-5 grid gap-3">
                {content.visual.items.map((item) => (
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3" key={item}>
                    <span className="size-2 rounded-full bg-secondary" aria-hidden="true" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
