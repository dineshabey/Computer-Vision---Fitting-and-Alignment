import Link from "next/link";

import { Badge } from "@/components/ui";
import type { BlogPostPreview } from "@/types";

type BlogCardProps = {
  post: BlogPostPreview;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="rounded-xl border border-white/10 bg-card p-6 shadow-xl shadow-black/20 backdrop-blur transition-colors hover:border-primary/45">
      <Badge>{post.category}</Badge>
      <h3 className="mt-5 text-lg font-semibold text-white">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{post.excerpt}</p>
      <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">{post.publishedAt}</p>
    </article>
  );
}
