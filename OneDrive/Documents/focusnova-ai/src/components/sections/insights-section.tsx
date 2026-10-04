import { BlogCard } from "@/components/cards";
import { Container, SectionTitle } from "@/components/ui";
import type { BlogPostPreview, SectionIntro } from "@/types";

type InsightsSectionProps = {
  content: SectionIntro;
  posts: BlogPostPreview[];
};

export function InsightsSection({ content, posts }: InsightsSectionProps) {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-24 sm:py-32">
      <Container>
        <SectionTitle {...content} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
