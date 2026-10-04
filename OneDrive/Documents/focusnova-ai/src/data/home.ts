import type { HomePageContent } from "@/types";

export const homePage: HomePageContent = {
  hero: {
    badge: "AI Automation for SMEs",
    title: "AI Automation for Growing Businesses",
    description:
      "We help SMEs automate workflows, reduce manual work, and scale faster with practical AI agents, document intelligence, and custom software solutions.",
    primaryCta: {
      label: "Book a Strategy Call",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Services",
      href: "/services",
    },
    trustText: "Built for SMEs • Secure AI systems • Custom automation",
    visual: {
      label: "Workflow Automation",
      title: "From manual tasks to AI-assisted operations",
      description: "A cleaner path to automate documents, decisions, agents, and internal tools.",
      items: ["Process mapping", "AI agents", "System integration"],
    },
  },
  services: {
    badge: "Services",
    title: "Core AI services for practical automation.",
    description:
      "Focused capabilities for SMEs that need useful systems, not experiments.",
  },
  servicesPreview: [
    {
      id: "ai-automation",
      title: "AI Automation",
      summary: "Automate repetitive workflows and operational handoffs.",
      href: "/services/ai-automation",
    },
    {
      id: "ai-agents",
      title: "AI Agents",
      summary: "Build focused agents for support, operations, and internal teams.",
      href: "/services/ai-agents",
    },
    {
      id: "document-intelligence",
      title: "Document Intelligence",
      summary: "Extract, validate, and route document data with AI.",
      href: "/services/intelligent-document-processing",
    },
    {
      id: "custom-software",
      title: "Custom Software",
      summary: "Create clean software around automation workflows.",
      href: "/services/custom-software-development",
    },
  ],
  why: {
    badge: "Why FocusNova AI",
    title: "Simple AI systems built around business outcomes.",
    description: "We keep automation clear, secure, and practical from strategy to implementation.",
    points: [
      {
        id: "practical",
        title: "Practical first",
        description: "We start with real workflow problems and measurable operational value.",
      },
      {
        id: "integrated",
        title: "Integrated delivery",
        description: "AI workflows are designed to connect with your tools, documents, and teams.",
      },
      {
        id: "maintainable",
        title: "Built to scale",
        description: "Clean architecture keeps systems easier to extend as your company grows.",
      },
    ],
  },
  futureLabSpotlight: {
    badge: "Future Lab",
    title: "Exploring the next generation of AI products.",
    description: "FocusNova AI is building toward product platforms beyond service delivery.",
    productName: "BrainBitX",
  },
  solutions: {
    badge: "Solutions",
    title: "Outcome-focused automation systems for real workflows.",
    description:
      "FocusNova AI combines strategy, implementation, and integration so AI becomes part of daily operations instead of a disconnected experiment.",
  },
  process: {
    badge: "Delivery Model",
    title: "From opportunity mapping to production-ready AI workflows.",
    description:
      "The homepage introduces a repeatable delivery path that can later expand into detailed methodology pages.",
    steps: [
      {
        id: "discover",
        step: "01",
        title: "Discover",
        description: "Identify business processes, bottlenecks, data sources, risks, and measurable automation opportunities.",
      },
      {
        id: "design",
        step: "02",
        title: "Design",
        description: "Shape the right AI workflow, agent behavior, integration pattern, and user experience before development starts.",
      },
      {
        id: "build",
        step: "03",
        title: "Build",
        description: "Create reusable automation systems with clear interfaces, maintainable components, and typed content foundations.",
      },
      {
        id: "integrate",
        step: "04",
        title: "Integrate",
        description: "Connect AI workflows with existing tools, ERP, CRM, documents, knowledge bases, and team processes.",
      },
    ],
  },
  industries: {
    badge: "Industries",
    title: "Built for SME teams with operational complexity.",
    description:
      "The architecture supports industry pages without a CMS, database, or backend by keeping each vertical as typed hardcoded content.",
  },
  futureLab: {
    badge: "Future Lab",
    title: "A product roadmap beyond service delivery.",
    description:
      "FocusNova AI can grow from an automation services website into a larger AI company platform with product families and research-led initiatives.",
  },
  testimonials: {
    badge: "Trust",
    title: "Prepared for customer proof as the company grows.",
    description:
      "Testimonials are data-backed placeholders today and can become a full customer evidence system later.",
  },
  insights: {
    badge: "Insights",
    title: "AI strategy content ready for expansion.",
    description:
      "Blog previews are separated from UI so future articles, categories, and featured posts can scale cleanly.",
  },
  cta: {
    badge: "Start With a Process",
    title: "Ready to map your first AI automation opportunity?",
    description:
      "FocusNova AI can help identify where automation will save time, improve consistency, and connect with the systems your team already uses.",
    primaryCta: {
      label: "Book a Strategy Call",
      href: "/contact",
    },
    secondaryCta: {
      label: "View Future Lab",
      href: "/future-lab",
    },
  },
};
