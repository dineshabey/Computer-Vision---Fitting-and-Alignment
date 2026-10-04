import type { CallToAction, LinkItem, MobileMenuLabels } from "@/types";

export const primaryNavigation: LinkItem[] = [
  { label: "Services", href: "/services", description: "AI automation capabilities" },
  { label: "Solutions", href: "/solutions", description: "Business outcomes and workflows" },
  { label: "Industries", href: "/industries", description: "SME vertical use cases" },
  { label: "Future Lab", href: "/future-lab", description: "Upcoming FocusNova AI products" },
  { label: "Insights", href: "/blog", description: "AI strategy and implementation notes" },
  { label: "Contact", href: "/contact", description: "Start a conversation" },
];

export const footerNavigation: LinkItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

export const navigationCta: CallToAction = {
  label: "Book a Strategy Call",
  href: "/contact",
};

export const mobileMenuLabels: MobileMenuLabels = {
  open: "Open navigation menu",
  close: "Close navigation menu",
  title: "Navigation",
};
