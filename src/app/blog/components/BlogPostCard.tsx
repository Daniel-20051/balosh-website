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
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover rounded-t-lg"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors duration-200 cursor-pointer">
          {post.title}
        </h2>

        {/* Metadata */}
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>by {post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Category Tag */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>

        {/* Excerpt */}
        <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>

        {/* Read More Link */}
        <a
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-200"
        >
          Read More →
        </a>
      </div>
    </article>
  );
}
