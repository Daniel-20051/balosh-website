"use client";

import React, { useState } from "react";
import BlogPostCard from "./BlogPostCard";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Solutions",
    excerpt:
      "Discover how artificial intelligence is revolutionizing enterprise operations and what businesses need to know to stay competitive.",
    image: "https://picsum.photos/600/300?random=1",
    category: "Technology",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Cloud Migration Best Practices for 2024",
    excerpt:
      "Learn the essential strategies and best practices for successful cloud migration, including planning, execution, and post-migration optimization.",
    image: "https://picsum.photos/600/300?random=2",
    category: "Digital Transformation",
    author: "Michael Chen",
    date: "March 12, 2024",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Cybersecurity Trends Every Business Should Know",
    excerpt:
      "Stay ahead of the curve with the latest cybersecurity trends, threats, and protective measures that every organization should implement.",
    image: "https://picsum.photos/600/300?random=3",
    category: "Security",
    author: "Emily Rodriguez",
    date: "March 10, 2024",
    readTime: "6 min read",
  },
];

const categories = [
  "All Categories",
  "Technology",
  "Digital Transformation",
  "Security",
  "AI",
  "Cloud",
];

export default function BlogContent() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-between bg-gray-50 p-3 md:p-4 rounded-lg">
        {/* Search Input */}
        <div className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base"
          />
        </div>

        {/* Category Dropdown */}
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

        {/* Filter Tags */}
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

      {/* Blog Posts */}
      <div className="space-y-6 md:space-y-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 pt-6 md:pt-8">
        <button className="px-3 md:px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm md:text-base">
          ← Previous
        </button>

        <div className="flex space-x-1">
          <button className="px-2 md:px-3 py-2 bg-orange-500 text-white rounded-lg text-sm md:text-base">
            1
          </button>
          <button className="px-2 md:px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm md:text-base">
            2
          </button>
          <button className="px-2 md:px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm md:text-base">
            3
          </button>
          <span className="px-2 md:px-3 py-2 text-gray-600 text-sm md:text-base">...</span>
          <button className="px-2 md:px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm md:text-base">
            12
          </button>
        </div>

        <button className="px-3 md:px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm md:text-base">
          Next →
        </button>
      </div>
    </div>
  );
}
