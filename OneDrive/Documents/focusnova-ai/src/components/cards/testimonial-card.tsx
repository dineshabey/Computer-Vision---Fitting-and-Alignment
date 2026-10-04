import type { Testimonial } from "@/types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="rounded-xl border border-white/10 bg-card p-6 shadow-xl shadow-black/20 backdrop-blur">
      <blockquote className="text-base leading-7 text-slate-200">{testimonial.quote}</blockquote>
      <figcaption className="mt-5 border-t border-white/10 pt-4">
        <p className="text-sm font-semibold text-white">{testimonial.author}</p>
        <p className="mt-1 text-sm text-slate-400">
          {testimonial.role}, {testimonial.company}
        </p>
      </figcaption>
    </figure>
  );
}
