import type { Industry } from "@/types";

type IndustryCardProps = {
  industry: Industry;
};

export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <article className="rounded-xl border border-white/10 bg-card p-6 shadow-xl shadow-black/20 backdrop-blur transition-colors hover:border-accent/45">
      <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
      <ul className="mt-5 grid gap-2">
        {industry.useCases.map((useCase) => (
          <li className="text-sm leading-6 text-slate-400" key={useCase}>
            {useCase}
          </li>
        ))}
      </ul>
    </article>
  );
}
