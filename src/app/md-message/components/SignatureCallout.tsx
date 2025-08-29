"use client";

import React from "react";
import useReveal from "./useReveal";

export default function SignatureCallout() {
  const { ref, isVisible } = useReveal();
  return (
    <section ref={ref} className="relative py-4 md:py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div
          className={`mt-4 md:mt-6 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          } transition-all duration-700`}
        >
          <div className="h-px w-16 bg-orange-500 mb-4" />
          <h4 className="text-xl md:text-2xl font-bold text-gray-900">
            Roy Femi Oshinbolu
          </h4>
          <p className="uppercase tracking-widest text-gray-500 mt-1">
            Managing Director
          </p>
        </div>

        <div
          className={`mt-10 md:mt-12 ${
            isVisible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-700`}
        >
          <div className="rounded-2xl border border-gray-100 bg-[linear-gradient(to_right,_#FFFFFF_0%,_#F9FAFB_100%)] p-6 md:p-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h5 className="text-gray-900 font-semibold text-lg">
                  Committed to Excellence
                </h5>
                <p className="text-gray-600 mt-1">
                  We continuously improve our solutions to deliver reliable
                  outcomes for our clients.
                </p>
              </div>
              <a
                href="/our-people"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 text-white px-5 py-3 font-medium shadow-md hover:shadow-lg hover:bg-orange-600 transition-all duration-300"
              >
                Meet Our Team
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
