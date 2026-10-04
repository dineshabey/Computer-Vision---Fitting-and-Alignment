import {
  FinalCtaSection,
  FutureLabPreviewSection,
  HomeHeroSection,
  ServicesSection,
  WhyFocusNovaSection,
} from "@/components/sections";
import { homePage } from "@/data";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <HomeHeroSection content={homePage.hero} />
      <ServicesSection content={homePage.services} services={homePage.servicesPreview} />
      <WhyFocusNovaSection content={homePage.why} />
      <FutureLabPreviewSection content={homePage.futureLabSpotlight} />
      <FinalCtaSection content={homePage.cta} />
    </main>
  );
}
