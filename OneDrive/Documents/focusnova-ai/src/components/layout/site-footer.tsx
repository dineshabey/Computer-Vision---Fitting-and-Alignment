import { siteConfig } from "@/config";
import { Footer } from "@/components/layout/footer";
import { footerContent, footerNavigation } from "@/data";

type SiteFooterProps = {
  brandName: string;
};

export function SiteFooter({ brandName }: SiteFooterProps) {
  return (
    <Footer
      brandName={brandName}
      copyright={footerContent.copyright}
      description={footerContent.description}
      links={footerNavigation}
      socialLabel={footerContent.socialLabel}
      socialLinks={siteConfig.social.links}
    />
  );
}
