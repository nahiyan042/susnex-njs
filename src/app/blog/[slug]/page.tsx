import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { pageSeo, blogPostJsonLd } from "@/lib/seo";
import { blogPosts } from "@/lib/content/blog";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return pageSeo({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-heading text-3xl font-bold">Post Not Found</h1>
        <Link
          href="/blog"
          className="mt-6 inline-block text-sm font-medium text-[var(--color-green)] hover:underline"
        >
          &larr; Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostJsonLd(post.title, post.excerpt, post.slug, post.date, post.image),
          ),
        }}
      />

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
        <div className="relative flex h-full items-end pb-10 lg:pb-14">
          <div className="mx-auto w-full max-w-3xl px-6">
            <div className="flex items-center gap-3 text-sm text-white/70">
              <time dateTime={post.date}>{post.date}</time>
              <span>·</span>
              <span>{post.author}</span>
            </div>
            <h1 className="mt-3 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <div
          className="blog-prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-12 border-t border-border pt-8">
          <Link
            href="/blog"
            className="text-sm font-medium text-[var(--color-green)] hover:underline"
          >
            &larr; Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
}
