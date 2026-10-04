import { siteConfig } from "@/config";
import { Navbar } from "@/components/layout/navbar";
import { mobileMenuLabels, navigationCta, primaryNavigation } from "@/data";

type SiteHeaderProps = {
  brandName: string;
};

export function SiteHeader({ brandName }: SiteHeaderProps) {
  return (
    <Navbar
      brandMark={siteConfig.brandMark}
      brandName={brandName}
      cta={navigationCta}
      links={primaryNavigation}
      mobileMenuLabels={mobileMenuLabels}
    />
  );
}
