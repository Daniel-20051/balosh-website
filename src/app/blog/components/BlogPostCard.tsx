"use client";

import React from "react";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Featured Image */}
      <div className="relative h-40 md:h-48 lg:h-64 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={250}
          className="w-full h-40 md:h-48 lg:h-64 object-cover rounded-t-lg"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        {/* Title */}
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3 hover:text-orange-600 transition-colors duration-200 cursor-pointer">
          {post.title}
        </h2>

        {/* Metadata */}
        <div className="flex items-center text-xs md:text-sm text-gray-500 mb-2 md:mb-3">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>by {post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Category Tag */}
        <div className="mb-3 md:mb-4">
          <span className="inline-block px-2 md:px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs md:text-sm font-medium">
            {post.category}
          </span>
        </div>

        {/* Excerpt */}
        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4">{post.excerpt}</p>

        {/* Read More Link */}
        <a
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-200 text-sm md:text-base"
        >
          Read More →
        </a>
      </div>
    </article>
  );
}
