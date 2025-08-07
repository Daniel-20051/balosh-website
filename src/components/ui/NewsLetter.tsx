"use client";

import React, { useState, useEffect } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section
      className="relative bg-cover py-12 sm:py-16 md:py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(to right, #111111 0%, #111827 50%, #111111 100%)",
      }}
    >
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-5 right-1/2 w-40 h-40 sm:w-100 sm:h-100 bg-orange-500/10 rounded-full "></div>
        <div className="absolute -bottom-5 right-1/4 w-24 h-24 sm:w-60 sm:h-60 bg-orange-500/10 rounded-full "></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Newsletter Tag */}
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-primary/20 border border-primary/30 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Newsletter
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 sm:mb-8">
            Stay <span className="text-primary">Ahead</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#d1d5db] mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Get exclusive insights, industry updates, and the latest innovations
            delivered straight to your inbox.
          </p>

          {/* Newsletter Form */}
          <div className="max-w-lg mx-auto mb-5 px-4">
            <div className="bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 rounded-xl p-2 sm:p-2.5">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2 sm:gap-0"
              >
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-transparent text-white placeholder-gray-400 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-0 border-0 text-sm sm:text-base"
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md  shadow-md font-semibold hover:bg-orange-400 transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed text-[16px] sm:text-base"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Social Proof */}
          <div className="inline-block rounded-lg px-4 py-2 mb-12 sm:mb-16">
            <p className="text-[#d1d5db] text-xs sm:text-sm">
              Join 10,000+ professionals already subscribed
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="flex  items-center justify-center gap-3 sm:gap-8 lg:gap-12 px-4">
            {/* Industry Insights */}
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/0 rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <span className="text-white font-medium text-sm sm:text-base">
                Industry Insights
              </span>
            </div>

            {/* Innovation Updates */}
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/0 rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <span className="text-white font-medium text-sm sm:text-base">
                Innovation Updates
              </span>
            </div>

            {/* Expert Analysis */}
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/0 rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="text-white font-medium text-sm sm:text-base">
                Expert Analysis
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
