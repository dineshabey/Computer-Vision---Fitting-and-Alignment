import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md";
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  rel?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  type?: "button" | "submit" | "reset";
};

type ButtonProps = ButtonBaseProps;

const variants = {
  primary: "bg-primary text-white shadow-lg shadow-blue-950/30 hover:bg-blue-500",
  secondary: "border border-white/15 bg-white/10 text-white shadow-sm backdrop-blur hover:bg-white/15",
  ghost: "text-slate-300 hover:bg-white/10 hover:text-white",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
};

function getButtonClassName(
  className?: string,
  variant: ButtonBaseProps["variant"] = "primary",
  size: ButtonBaseProps["size"] = "md",
) {
  return cn(
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary",
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button(props: ButtonProps) {
  const { children, className, href, onClick, rel, size = "md", target, type = "button", variant = "primary" } = props;
  const buttonClassName = getButtonClassName(className, variant, size);

  if (href) {
    return (
      <Link className={buttonClassName} href={href} rel={rel} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClassName} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
