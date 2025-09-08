"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Navigation Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-60 bg-background shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <span className="text-xl font-bold text-gray-900">Menu</span>
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 p-6">
            <div className="space-y-0">
              <div className="border-b-2 border-gray-300">
                <Link
                  href="/"
                  className={`block text-lg font-medium py-3 transition-colors duration-200 ${
                    pathname === "/"
                      ? "underline text-primary"
                      : "text-gray-900 hover:text-orange-500"
                  }`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </div>
              <div className="border-b-2 border-gray-300">
                <button
                  type="button"
                  className="w-full flex items-center justify-between text-left text-lg font-medium py-3 text-gray-900 hover:text-orange-500"
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  aria-expanded={isAboutOpen}
                  aria-controls="about-submenu"
                >
                  <span>About Us</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isAboutOpen ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {isAboutOpen && (
                  <div id="about-submenu" className="space-y-0 pl-4">
                    <div className="border-t border-gray-300">
                      <Link
                        href="/about-us"
                        className={`block text-base py-3 transition-colors duration-200 ${
                          pathname === "/about-us"
                            ? "underline text-primary"
                            : "text-gray-900 hover:text-orange-500"
                        }`}
                        onClick={toggleMenu}
                      >
                        Overview
                      </Link>
                    </div>
                    <div className="border-t border-gray-300">
                      <Link
                        href="/md-message"
                        className={`block text-base py-3 transition-colors duration-200 ${
                          pathname === "/md-message"
                            ? "underline text-primary"
                            : "text-gray-900 hover:text-orange-500"
                        }`}
                        onClick={toggleMenu}
                      >
                        MD&apos;s Message
                      </Link>
                    </div>
                    <div className="border-t border-gray-300">
                      <Link
                        href="/our-people"
                        className={`block text-base py-3 transition-colors duration-200 ${
                          pathname === "/our-people"
                            ? "underline text-primary"
                            : "text-gray-900 hover:text-orange-500"
                        }`}
                        onClick={toggleMenu}
                      >
                        Our People
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="border-b-2 border-gray-300">
                <Link
                  href="/solutions"
                  className={`block text-lg font-medium py-3 transition-colors duration-200 ${
                    pathname === "/solutions"
                      ? "underline text-primary"
                      : "text-gray-900 hover:text-orange-500"
                  }`}
                  onClick={toggleMenu}
                >
                  Solutions
                </Link>
              </div>
              <div className="border-b-2 border-gray-300">
                <Link
                  href="/blog"
                  className={`block text-lg font-medium py-3 transition-colors duration-200 ${
                    pathname === "/blog"
                      ? "underline text-primary"
                      : "text-gray-900 hover:text-orange-500"
                  }`}
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
              </div>
              <div className="border-b-2 border-gray-300">
                <Link
                  href="/careers"
                  className={`block text-lg font-medium py-3 transition-colors duration-200 ${
                    pathname === "/careers"
                      ? "underline text-primary"
                      : "text-gray-900 hover:text-orange-500"
                  }`}
                  onClick={toggleMenu}
                >
                  Careers
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile CTA Button */}
          <div className="p-6 border-t border-gray-200">
            <Link
              href="/request-demo"
              className="w-full bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors duration-200 font-medium text-center block"
              onClick={toggleMenu}
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
