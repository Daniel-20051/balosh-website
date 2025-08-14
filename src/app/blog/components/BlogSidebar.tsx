"use client";

import React from "react";
import Image from "next/image";

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

interface BlogPost {
  _id: string;
  title: string;
  slug?: string;
  featuredImage: string;
  createdAt: string;
}

interface BlogSidebarProps {
  recentPosts?: BlogPost[];
}

const fallbackTags = [
  "AI",
  "Cloud",
  "Security",
  "Analytics",
  "Machine Learning",
  "DevOps",
  "Innovation",
];

export default function BlogSidebar({ recentPosts = [] }: BlogSidebarProps) {
  return (
    <aside className="space-y-6 md:space-y-8">
      {/* Search Widget */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
          Search
        </h3>
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base"
        />
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
          Recent Posts
        </h3>
        <div className="space-y-3 md:space-y-4">
          {recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <div key={post._id} className="flex gap-3">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-15 md:h-15 rounded object-cover"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs md:text-sm font-medium text-gray-900 truncate hover:text-orange-600 transition-colors duration-200">
                    <a href={`/blog/${post.slug || post._id}`}>{post.title}</a>
                  </h4>
                  <p className="text-xs text-gray-500">
                    {formatDateUTC(post.createdAt)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No recent posts available</p>
          )}
        </div>
      </div>

      {/* Tags Widget */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {fallbackTags.map((tag) => (
            <a
              key={tag}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className="px-2 md:px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs md:text-sm hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription Widget */}
      <div className="bg-gray-800 p-4 md:p-6 rounded-lg text-white">
        <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
          Stay Updated
        </h3>
        <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4">
          Subscribe to our newsletter for the latest insights and updates.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-3 md:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base"
          />
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm md:text-base">
            Subscribe
          </button>
        </div>
      </div>
    </aside>
  );
}
