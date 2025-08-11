"use client";

import { useState, useEffect, useRef } from "react";

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    title: "Welcome to",
    subtitle: "Balosh",
    description:
      "Leading access control solutions that open important doors for your business",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    ctaText: "Explore Solutions",
    ctaLink: "/solutions",
  },
  {
    id: 2,
    title: "Innovation in",
    subtitle: "Security",
    description:
      "Cutting-edge technology that protects what matters most to your organization",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    ctaText: "View Case Studies",
    ctaLink: "/case-studies",
  },
  {
    id: 3,
    title: "Trusted by",
    subtitle: "Industry Leaders",
    description:
      "Serving Nigeria's top organizations with reliable access control since 2005",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    ctaText: "Learn More",
    ctaLink: "/about-us",
  },
  {
    id: 4,
    title: "Smart",
    subtitle: "Infrastructure",
    description:
      "Building the future with intelligent systems that adapt to your needs",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    ctaText: "Get Started",
    ctaLink: "/contact",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start new interval
    intervalRef.current = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
  };

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
    // Restart interval after manual navigation
    startInterval();
  };

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
      setIsAnimating(false);
    }, 300);
    // Restart interval after manual navigation
    startInterval();
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(
        (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
      );
      setIsAnimating(false);
    }, 300);
    // Restart interval after manual navigation
    startInterval();
  };

  const currentSlideData = carouselSlides[currentSlide];

  return (
    <section className="relative h-80 md:h-screen overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${currentSlideData.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
        <div
          className={`text-center text-white w-full transition-all duration-700 ease-in-out ${
            isAnimating
              ? "opacity-0 transform translate-y-4"
              : "opacity-100 transform translate-y-0"
          }`}
        >
          <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-7xl font-bold mb-2 md:mb-3 lg:mb-4 xl:mb-6">
            {currentSlideData.title}{" "}
            <span className="text-orange-400 font-handwriting">
              {currentSlideData.subtitle}
            </span>
          </h1>
          <p className="text-xs md:text-sm lg:text-lg xl:text-2xl mb-3 md:mb-4 lg:mb-6 xl:mb-8 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            {currentSlideData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 lg:gap-4 justify-center">
            <a
              href={currentSlideData.ctaLink}
              className="bg-orange-500 text-white px-3 md:px-4 lg:px-6 xl:px-8 py-1.5 md:py-2 lg:py-2.5 xl:py-3 rounded-full hover:bg-orange-600 transition-all duration-300 font-medium text-xs md:text-sm lg:text-base xl:text-lg transform hover:scale-105"
            >
              {currentSlideData.ctaText}
            </a>
            <a
              href="/about-us"
              className="border-2 border-white text-white px-3 md:px-4 lg:px-6 xl:px-8 py-1.5 md:py-2 lg:py-2.5 xl:py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-xs md:text-sm lg:text-base xl:text-lg transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-1.5 md:p-2 lg:p-3 transition-all duration-300 z-20 backdrop-blur-sm hover:scale-110"
        aria-label="Previous slide"
      >
        <svg
          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
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
        className="absolute right-2 md:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-1.5 md:p-2 lg:p-3 transition-all duration-300 z-20 backdrop-blur-sm hover:scale-110"
        aria-label="Next slide"
      >
        <svg
          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
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

      {/* Dots Indicator */}
      <div className="absolute bottom-2 md:bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1.5 md:space-x-2 z-20">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide
                ? "bg-orange-400 scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 md:h-1 bg-white/20 z-20">
        <div
          className="h-full bg-orange-400 transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / carouselSlides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
}
