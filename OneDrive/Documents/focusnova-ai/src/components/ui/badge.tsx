import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: "neutral" | "accent";
};

const variants = {
  neutral: "border-white/10 bg-white/5 text-slate-300",
  accent: "border-secondary/30 bg-secondary/10 text-cyan-100 shadow-sm shadow-cyan-950/20",
};

export function Badge({ children, className, variant = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
