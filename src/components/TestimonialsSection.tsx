"use client";

import React, { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  rating: number;
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "Balosh Integrated Services have been managing our parking facilities since 2010, my experience with them has been a good on. Our customers have feedback to us that they are happy with the service they are receiving this mirrors my view of Balosh as well. I find them easy to communicate with and would recommend them as a car park management company to any business in need of their services",
      name: "Tokumbo Omisore",
      title: "(RIBA, FINA, PAUA)",
      company: "Metropolitan Airport",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Balosh Integrated Services have been providing paid parking services to The Palms Lekki. We are very pleased with their work, as the company is very responsive and quick to act. They are efficient and provide top-notch quality services.	",
      name: "Bola Sobande (Mrs.)",
      title: "Centre Manager",
      company: "Global Tech Corp",
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="relative bg-white py-10 md:py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from satisfied clients across different industries
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="max-w-4xl mx-auto">
          {/* Single Testimonial Display */}
          <div className="relative">
            <div
              key={testimonials[currentIndex].id}
              className="bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 md:top-8 left-6 md:left-8 text-orange-200">
                <svg
                  className="w-8 h-8 md:w-12 md:h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex justify-center mb-4 md:mb-6"></div>

                {/* Quote */}
                <blockquote
                  key={`quote-${currentIndex}`}
                  className="text-lg md:text-2xl text-gray-700 text-center mb-6 md:mb-8 leading-relaxed italic animate-slideIn"
                >
                  &quot;{testimonials[currentIndex].quote}&quot;
                </blockquote>

                {/* Author Info */}
                <div
                  key={`author-${currentIndex}`}
                  className="text-center animate-slideIn"
                >
                  <div className="font-bold text-gray-900 text-base md:text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    {testimonials[currentIndex].title}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute cursor-pointer -left-4 md:-left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 z-20"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute cursor-pointer -right-4 md:-right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 z-20"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
