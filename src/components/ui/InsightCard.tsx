import React from "react";
import Image from "next/image";

interface InsightCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  category?: string;
  readTime?: string;
}

export default function InsightCard({
  image,
  title,
  description,
  href,
  category = "Technology",
  readTime = "5 min read",
}: InsightCardProps) {
  return (
    <article className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
        {/* Read Time */}
        <div className="absolute top-4 right-4">
          <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">
            {readTime}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Read More Link */}
        <a
          href={href}
          className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors duration-200 group/link text-sm md:text-base"
        >
          Read More
          <svg
            className="w-3 h-3 md:w-4 md:h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}
