import { TestimonialCard } from "@/components/cards";
import { Container, SectionTitle } from "@/components/ui";
import type { SectionIntro, Testimonial } from "@/types";

type TestimonialsSectionProps = {
  content: SectionIntro;
  testimonials: Testimonial[];
};

export function TestimonialsSection({ content, testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionTitle {...content} align="center" />
        <div className="mx-auto mt-12 grid max-w-3xl gap-5">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
