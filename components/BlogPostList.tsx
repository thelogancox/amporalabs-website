"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
};

type CategoryColor = { bg: string; text: string; border: string };

const POSTS_PER_PAGE = 12;

export default function BlogPostList({
  posts,
  thumbnails,
  categoryColors,
}: {
  posts: BlogPost[];
  thumbnails: Record<string, ReactNode>;
  categoryColors: Record<string, CategoryColor>;
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const categories = ["All", ...Object.keys(categoryColors)];

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const getColor = (category: string) =>
    categoryColors[category] || {
      bg: "bg-gray-600/30",
      text: "text-gray-300",
      border: "border-gray-500/30",
    };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(POSTS_PER_PAGE);
  };

  return (
    <section className="mb-16">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          const colors =
            category === "All"
              ? { bg: "bg-white/10", text: "text-white", border: "border-white/20" }
              : getColor(category);
          return (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                isActive
                  ? `${colors.bg} ${colors.text} border ${colors.border}`
                  : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Result Count */}
      <p className="text-sm text-white/40 mb-6">
        Showing {visiblePosts.length} of {filteredPosts.length} articles
        {activeCategory !== "All" && (
          <span>
            {" "}
            in <span className={getColor(activeCategory).text}>{activeCategory}</span>
          </span>
        )}
      </p>

      {/* Posts */}
      <div className="space-y-4">
        {visiblePosts.map((post) => {
          const colors = getColor(post.category);
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group flex flex-col md:flex-row md:items-center p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all border ${colors.border}`}
            >
              {/* Thumbnail */}
              <div className="w-full md:w-32 h-20 md:h-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-2 flex-shrink-0 mb-3 md:mb-0 md:mr-5">
                {thumbnails[post.slug]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`px-3 py-1 ${colors.bg} ${colors.text} text-xs font-medium rounded-full`}
                  >
                    {post.category}
                  </span>
                  <span className="text-white/40 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-purple-400 transition-colors line-clamp-1">
                  {post.title}
                </h3>
                <p className="text-white/60 text-sm mt-1 line-clamp-1 hidden md:block">
                  {post.description}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-3 md:mt-0 md:ml-4">
                <span className="text-white/40 text-sm">{post.date}</span>
                <span className={`${colors.text} text-sm font-medium whitespace-nowrap`}>
                  Read →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
            className="px-8 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors border border-white/10"
          >
            Load More Articles ({filteredPosts.length - visibleCount} remaining)
          </button>
        </div>
      )}
    </section>
  );
}
