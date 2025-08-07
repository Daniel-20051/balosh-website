"use client";

import React from "react";

export default function BlogHeader() {
  return (
    <section className="bg-[#F8F9FA] py-8 md:py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          Blog
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Insights, updates, and thought leadership on digital transformation,
          technology trends, and industry best practices.
        </p>
      </div>
    </section>
  );
}
