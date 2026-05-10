import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/posts";
import { categories, getCategoryName } from "@/lib/categories";
import ArticleCard from "@/components/ArticleCard";
import AdUnit from "@/components/AdUnit";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.name} — America Insider`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const categoryPosts = getPostsByCategory(category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <AdUnit slot="leaderboard" className="mb-8 hidden md:flex" />

      {/* Category header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <a href="/" className="hover:text-red-600">Home</a>
          <span>/</span>
          <span>{cat.name}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900">{cat.name}</h1>
        <p className="text-gray-600 mt-2">{cat.description}</p>
        <div className="w-12 h-1 bg-red-600 rounded-full mt-3" />
      </div>

      {categoryPosts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No articles in this category yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {categoryPosts[0] && (
              <div className="mb-8">
                <ArticleCard post={categoryPosts[0]} variant="featured" />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categoryPosts.slice(1, 5).map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>

            {categoryPosts.length > 5 && (
              <>
                <AdUnit slot="rectangle" className="my-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {categoryPosts.slice(5).map((post) => (
                    <ArticleCard key={post.slug} post={post} />
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="space-y-6">
            <AdUnit slot="rectangle" />

            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Other Categories</h3>
              <ul className="space-y-2">
                {categories
                  .filter((c) => c.slug !== category)
                  .map((c) => (
                    <li key={c.slug}>
                      <a
                        href={`/category/${c.slug}`}
                        className="text-sm text-gray-600 hover:text-red-600 font-medium"
                      >
                        {c.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            <AdUnit slot="sidebar" />
          </aside>
        </div>
      )}
    </div>
  );
}
