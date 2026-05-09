import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { posts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { getCategoryName } from "@/lib/categories";
import ArticleCard from "@/components/ArticleCard";
import AdUnit from "@/components/AdUnit";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Leaderboard ad */}
      <AdUnit slot="leaderboard" className="mb-8 hidden md:flex" />
      <AdUnit slot="mobile-banner" className="mb-6 md:hidden" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Article */}
        <article className="lg:col-span-2">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <span>/</span>
            <Link href={`/category/${post.category}`} className="hover:text-red-600">
              {getCategoryName(post.category)}
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-6">
            <Link
              href={`/category/${post.category}`}
              className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 hover:bg-red-700"
            >
              {getCategoryName(post.category)}
            </Link>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <time dateTime={post.date}>{post.date}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Hero image */}
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-6">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>

          {/* Ad below first image */}
          <AdUnit slot="rectangle" className="mb-6" />

          {/* Article content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:mt-8 prose-h3:text-xl prose-h3:mt-6 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Below article ad */}
          <AdUnit slot="leaderboard" className="mt-8 hidden md:flex" />
          <AdUnit slot="rectangle" className="mt-6 md:hidden" />
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          <AdUnit slot="rectangle" />

          {related.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                More In {getCategoryName(post.category)}
              </h3>
              <div className="space-y-4">
                {related.map((rp) => (
                  <ArticleCard key={rp.slug} post={rp} variant="compact" />
                ))}
              </div>
            </div>
          )}

          <AdUnit slot="sidebar" />

          <div className="bg-red-50 border border-red-100 rounded-xl p-5">
            <h3 className="text-sm font-bold text-red-800 mb-1">About Canada Insider</h3>
            <p className="text-xs text-gray-600 mb-3">
              Trusted health, finance, and lifestyle stories written for Canadians.
            </p>
            <Link
              href="/about"
              className="text-xs font-semibold text-red-700 hover:underline"
            >
              Learn more →
            </Link>
          </div>
        </aside>
      </div>

      {/* Related posts below */}
      {related.length > 0 && (
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((rp) => (
              <ArticleCard key={rp.slug} post={rp} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
