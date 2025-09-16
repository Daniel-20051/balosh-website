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
        className={`max-w-7xl mx-auto px-4 relative z-10 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 9v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9l-10-7zM12 4.5L20 10v10H4V10l8-5.5z" />
                <path d="M9 14h2v4H9v-4zm4 0h2v4h-2v-4z" />
              </svg>
            }
            text="About Balosh"
          />
          <h2 className="text-xl md:text-5xl font-bold text-gray-900 mt-8 mb-4">
            Balosh Integrated Services
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Main Introduction Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 md:col-span-2 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Leading Access Control Provider
              </h3>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Balosh Integrated Services is the leading access control company
              in Nigeria, proudly serving clients since 2005. With a strong
              emphasis on the commercial sector, we have established ourselves
              as the most experienced and innovative provider in the industry.
            </p>
          </div>

          {/* Our Approach Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Approach</h3>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Our success is driven by our ability to understand the unique
              requirements of each client and our commitment to delivering
              unparalleled service and workmanship.
            </p>
          </div>

          {/* Core Values Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Core Values</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.37988 12.0001L10.7899 14.4201L15.6199 9.58008"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.23988 6.20008C4.23988 5.14008 5.10988 4.27008 6.16988 4.27008H7.89988C8.29988 4.27008 8.85988 4.06008 9.15988 3.81008L10.7399 2.46008C11.4399 1.87008 12.5699 1.87008 13.2499 2.46008L14.8299 3.81008C15.1299 4.06008 15.6999 4.27008 16.0999 4.27008H17.7999C18.8599 4.27008 19.7299 5.14008 19.7299 6.20008V7.90008C19.7299 8.30008 19.9399 8.86008 20.1899 9.16008L21.5399 10.7401C22.1299 11.4401 22.1299 12.5701 21.5399 13.2501L20.1899 14.8301C19.9399 15.1301 19.7299 15.6901 19.7299 16.0901V17.7901C19.7299 18.8501 18.8599 19.7201 17.7999 19.7201H16.0999C15.6999 19.7201 15.1399 19.9301 14.8399 20.1801L13.2599 21.5301C12.5599 22.1201 11.4299 22.1201 10.7499 21.5301L9.16988 20.1801C8.86988 19.9301 8.29988 19.7201 7.90988 19.7201H6.16988C5.10988 19.7201 4.23988 18.8501 4.23988 17.7901V16.0801C4.23988 15.6901 4.03988 15.1201 3.78988 14.8301L2.43988 13.2401C1.85988 12.5501 1.85988 11.4301 2.43988 10.7401L2.99988 10.0801"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Integrity</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15M4.5 16.5h15M4.5 7.5h15"
                  />
                </svg>
                <span>Consistency</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <span>Customer Service</span>
              </div>
            </div>
          </div>

          {/* Trust & Reputation Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 md:col-span-2 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Trust & Reputation
              </h3>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              At Balosh, we believe that integrity and customer satisfaction are
              paramount. Our core values guide our operations and interactions,
              ensuring that we consistently exceed client expectations. Over the
              years, we have secured numerous high-profile contracts, enhancing
              our reputation as a trusted partner in access control solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
