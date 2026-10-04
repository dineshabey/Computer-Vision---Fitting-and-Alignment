export type LinkItem = {
  label: string;
  href: string;
  description?: string;
};

export type CallToAction = {
  label: string;
  href: string;
};

export type MobileMenuLabels = {
  open: string;
  close: string;
  title: string;
};

export type Service = {
  id: string;
  title: string;
  summary: string;
  href: string;
};

export type Solution = {
  id: string;
  title: string;
  summary: string;
  outcomes: string[];
};

export type Industry = {
  id: string;
  name: string;
  useCases: string[];
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type FutureLabProduct = {
  id: string;
  name: string;
  status: string;
  summary: string;
};

export type BlogPostPreview = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
};

export type StatItem = {
  id: string;
  value: string;
  label: string;
};

export type ProcessStep = {
  id: string;
  step: string;
  title: string;
  description: string;
};

export type HomeHero = {
  badge: string;
  title: string;
  description: string;
  primaryCta: CallToAction;
  secondaryCta: CallToAction;
  trustText: string;
  visual: {
    label: string;
    title: string;
    description: string;
    items: string[];
  };
};

export type WhyPoint = {
  id: string;
  title: string;
  description: string;
};

export type SectionIntro = {
  badge?: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export type HomePageContent = {
  hero: HomeHero;
  services: SectionIntro;
  servicesPreview: Service[];
  why: SectionIntro & {
    points: WhyPoint[];
  };
  futureLabSpotlight: SectionIntro & {
    productName: string;
    description: string;
  };
  solutions: SectionIntro;
  process: SectionIntro & {
    steps: ProcessStep[];
  };
  industries: SectionIntro;
  futureLab: SectionIntro;
  testimonials: SectionIntro;
  insights: SectionIntro;
  cta: {
    badge: string;
    title: string;
    description: string;
    primaryCta: CallToAction;
    secondaryCta: CallToAction;
  };
};
