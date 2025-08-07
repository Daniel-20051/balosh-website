"use client";

import { useEffect, useRef, useState } from "react";
import Badge from "./ui/Badge";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const ref = sectionRef.current;
    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto bg-gray-50 py-10 md:py-20 overflow-hidden"
    >
      {/* Blur inset background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/8 right-1/8 w-64 h-64 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/8 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      <div
        className={`max-w-7xl mx-auto px-4 text-center relative z-10 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* About Balosh Button */}
        <div className="mb-8">
          <Badge
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 9v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9l-10-7zM12 4.5L20 10v10H4V10l8-5.5z" />
                <path d="M9 14h2v4H9v-4zm4 0h2v4h-2v-4z" />
              </svg>
            }
            text="About Balosh"
          />
        </div>

        {/* Main Heading */}
        <h2 className="text-xl md:text-5xl font-bold text-gray-900 mb-4 ">
          Welcome to Balosh Integrated Services
        </h2>

        {/* Primary Line */}
        <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>

        {/* First Paragraph */}
        <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
          Balosh Integrated Services is the leading access control company in
          Nigeria, proudly serving clients since 2005. With a strong emphasis on
          the commercial sector, we have established ourselves as the most
          experienced and innovative provider in the industry. Our success is
          driven by our ability to understand the unique requirements of each
          client and our commitment to delivering unparalleled service and
          workmanship.
        </p>

        {/* Second Paragraph */}
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          At Balosh, we believe that integrity and customer satisfaction are
          paramount. Our core values—
          <span className="text-primary font-semibold">
            customer-centricity
          </span>
          , <span className="text-primary font-semibold">innovation</span>,{" "}
          <span className="text-primary font-semibold">excellence</span>, and{" "}
          <span className="text-primary font-semibold">teamwork</span>
          —guide our operations and interactions, ensuring that we consistently
          exceed client expectations. Over the years, we have secured numerous
          high-profile contracts, enhancing our reputation as a trusted partner
          in access control solutions.
        </p>
      </div>
    </section>
  );
}
