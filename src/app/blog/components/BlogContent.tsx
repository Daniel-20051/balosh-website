"use client";

import React, { useMemo, useState } from "react";
import BlogPostCard from "./BlogPostCard";

// Format dates deterministically (no locale/timezone differences between server and client)
function formatDateUTC(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = d.getUTCDate().toString().padStart(2, "0");
  const month = months[d.getUTCMonth()];
  const year = d.getUTCFullYear();
  return `${month} ${day}, ${year}`;
}

interface ApiBlogItem {
  _id: string;
  title: string;
  excerpt: string;
  autoExcerpt?: string;
  featuredImage: string;
  category?: { name?: string } | null;
  author?: { firstName?: string; lastName?: string } | null;
  createdAt?: string;
  readTime?: number;
  slug?: string;
}

interface BlogContentProps {
  posts: ApiBlogItem[];
  pagination?: {
    currentPage: number;
    totalPages: number;
    hasNext?: boolean;
    hasPrev?: boolean;
  };
}

const categories = [
  "All Categories",
  "Technology",
  "Digital Transformation",
  "Security",
  "AI",
  "Cloud",
];

export default function BlogContent({ posts, pagination }: BlogContentProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const normalized = useMemo(() => {
    return posts.map((b) => ({
      id: b._id,
      slug: b.slug,
      title: b.title,
      excerpt: b.excerpt || b.autoExcerpt || "",
      image: b.featuredImage,
      category: b.category?.name || "General",
      author:
        `${b.author?.firstName ?? ""} ${b.author?.lastName ?? ""}`.trim() ||
        "Admin",
      date: formatDateUTC(b.createdAt),
      readTime: b.readTime ? `${b.readTime} min read` : "",
    }));
  }, [posts]);

  const filtered = useMemo(() => {
    return normalized.filter((p) => {
      const matchesCategory =
        selectedCategory === "All Categories" ||
        p.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [normalized, selectedCategory, searchQuery]);

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-between bg-gray-50 p-3 md:p-4 rounded-lg">
        <div className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base"
          />
        </div>

        <div className="flex-shrink-0">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-sm md:text-base"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2 flex-wrap">
          {["AI", "Cloud", "Security", "Analytics"].map((tag) => (
            <button
              key={tag}
              className="px-2 md:px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs md:text-sm hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6 md:space-y-8">
        {filtered.map((post) => (
          <BlogPostCard key={post.id} post={post as any} />
        ))}
      </div>

      {pagination && pagination.totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 pt-6 md:pt-8">
          <a
            href={`?page=${Math.max(1, pagination.currentPage - 1)}`}
            aria-disabled={pagination.currentPage <= 1}
            className={`px-3 md:px-4 py-2 text-sm md:text-base ${
              pagination.currentPage <= 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            ← Previous
          </a>

          <div className="flex space-x-1">
            {Array.from({ length: pagination.totalPages }).map((_, i) => {
              const pageNum = i + 1;
              const isActive = pageNum === pagination.currentPage;
              return (
                <a
                  key={pageNum}
                  href={`?page=${pageNum}`}
                  className={`px-2 md:px-3 py-2 rounded-lg text-sm md:text-base ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {pageNum}
                </a>
              );
            })}
          </div>

          <a
            href={`?page=${Math.min(
              pagination.totalPages,
              pagination.currentPage + 1
            )}`}
            aria-disabled={pagination.currentPage >= pagination.totalPages}
            className={`px-3 md:px-4 py-2 text-sm md:text-base ${
              pagination.currentPage >= pagination.totalPages
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Next →
          </a>
        </div>
      )}
    </div>
  );
}
