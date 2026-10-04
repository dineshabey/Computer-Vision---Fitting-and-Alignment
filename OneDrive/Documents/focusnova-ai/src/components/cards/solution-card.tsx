import type { Solution } from "@/types";

type SolutionCardProps = {
  solution: Solution;
};

export function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <article className="rounded-xl border border-white/10 bg-card p-6 shadow-xl shadow-black/20 backdrop-blur transition-colors hover:border-primary/45">
      <h3 className="text-lg font-semibold text-white">{solution.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{solution.summary}</p>
      <ul className="mt-5 grid gap-2">
        {solution.outcomes.map((outcome) => (
          <li className="flex gap-2 text-sm text-slate-300" key={outcome}>
            <span className="mt-2 size-1.5 rounded-full bg-secondary" aria-hidden="true" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
