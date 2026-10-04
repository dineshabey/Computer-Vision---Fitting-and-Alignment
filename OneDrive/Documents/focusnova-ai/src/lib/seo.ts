import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export function createPageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}
