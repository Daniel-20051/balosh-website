"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        className={`fixed top-0 right-0 h-full w-80 bg-background shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
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
            <div className="space-y-6">
              <Link
                href="/"
                className={`block text-lg font-medium py-2 transition-colors duration-200 ${
                  pathname === "/"
                    ? "underline text-primary"
                    : "text-gray-900 hover:text-orange-500"
                }`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className={`block text-lg font-medium py-2 transition-colors duration-200 ${
                  pathname === "/about-us"
                    ? "underline text-primary"
                    : "text-gray-900 hover:text-orange-500"
                }`}
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                href="/solutions"
                className={`block text-lg font-medium py-2 transition-colors duration-200 ${
                  pathname === "/solutions"
                    ? "underline text-primary"
                    : "text-gray-900 hover:text-orange-500"
                }`}
                onClick={toggleMenu}
              >
                Solutions
              </Link>
              <Link
                href="/blog"
                className={`block text-lg font-medium py-2 transition-colors duration-200 ${
                  pathname === "/blog"
                    ? "underline text-primary"
                    : "text-gray-900 hover:text-orange-500"
                }`}
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className={`block text-lg font-medium py-2 transition-colors duration-200 ${
                  pathname === "/careers"
                    ? "underline text-primary"
                    : "text-gray-900 hover:text-orange-500"
                }`}
                onClick={toggleMenu}
              >
                Careers
              </Link>
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
