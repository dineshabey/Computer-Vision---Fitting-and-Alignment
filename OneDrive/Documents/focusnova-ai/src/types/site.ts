export type SiteConfig = {
  name: string;
  brandMark: string;
  legalName: string;
  description: string;
  url: string;
  locale: string;
  social: {
    links: Array<{
      label: string;
      href: string;
    }>;
  };
};
