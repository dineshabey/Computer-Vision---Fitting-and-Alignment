import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib";

type SectionTitleProps = {
  badge?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark";
};

export function SectionTitle({ align = "left", badge, description, eyebrow, title }: SectionTitleProps) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {badge ? (
        <Badge variant="accent">
          {badge}
        </Badge>
      ) : null}
      {eyebrow ? (
        <p
          className={cn(
            "mt-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-400",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
