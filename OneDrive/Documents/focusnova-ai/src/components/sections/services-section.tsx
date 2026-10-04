import { ServiceCard } from "@/components/cards";
import { Container, SectionHeader } from "@/components/ui";
import type { SectionIntro, Service } from "@/types";

type ServicesSectionProps = {
  content: SectionIntro;
  services: Service[];
};

export function ServicesSection({ content, services }: ServicesSectionProps) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader {...content} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
