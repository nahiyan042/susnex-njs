import Link from "next/link";
import Image from "next/image";

import { pageSeo } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { blogPosts } from "@/lib/content/blog";

export const metadata = pageSeo({
  title: "Blog & News",
  description:
    "Latest insights, news, and articles on sustainability, ESG reporting, and environmental management from SusNex.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main className="bg-bg-primary">
      <PageHeader
        title="Blog & News"
        description="Insights and updates from the world of sustainability."
      />
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-2xl border border-border bg-bg-card transition-all hover:border-[var(--color-green)]/30 hover:shadow-lg"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="relative block aspect-[16/9] overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="rounded-full bg-bg-secondary px-2 py-0.5 text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <h2 className="mt-3 font-heading text-xl font-bold tracking-tight">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-text-primary transition-colors hover:text-[var(--color-green)]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-bg-secondary px-3 py-1 text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
