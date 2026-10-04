import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/config";
import { footerContent, footerNavigation, mobileMenuLabels, navigationCta, primaryNavigation } from "@/data";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <Navbar
        brandMark={siteConfig.brandMark}
        brandName={siteConfig.name}
        cta={navigationCta}
        links={primaryNavigation}
        mobileMenuLabels={mobileMenuLabels}
      />
      <div className="flex min-h-screen flex-1 flex-col">{children}</div>
      <Footer
        brandName={siteConfig.name}
        copyright={footerContent.copyright}
        description={footerContent.description}
        links={footerNavigation}
        socialLabel={footerContent.socialLabel}
        socialLinks={siteConfig.social.links}
      />
    </>
  );
}
