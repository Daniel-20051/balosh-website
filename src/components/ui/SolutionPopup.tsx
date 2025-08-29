"use client";

import { useEffect, useRef, useState } from "react";

interface Solution {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
  iconBgColor: string;
}

interface SolutionPopupProps {
  solution: Solution | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SolutionPopup({
  solution,
  isOpen,
  onClose,
}: SolutionPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  // Handle smooth close with animation
  const handleClose = () => {
    setIsClosing(true);
    // Wait for animation to complete before actually closing
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300); // Match the animation duration
  };

  // Reset closing state when opening
  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  if (!isOpen || !solution) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
        isClosing ? "animate-out fade-out" : "animate-in fade-in"
      }`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Modal Content - Centered in viewport */}
      <div
        ref={popupRef}
        className={`relative bg-white rounded-3xl shadow-2xl transform transition-all duration-300 overflow-hidden max-w-4xl w-full max-h-[80vh] overflow-y-auto ${
          isClosing
            ? "animate-out slide-out-to-bottom-4"
            : "animate-in slide-in-from-bottom-4"
        }`}
        style={{ margin: "auto" }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute cursor-pointer top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
        >
          <svg
            className="w-5 h-5 text-gray-600"
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

        {/* Header */}
        <div className="flex items-start mb-6 p-6">
          <div
            className={`w-12 md:w-16 h-12 md:h-16 ${solution.iconBgColor} rounded-2xl flex items-center justify-center mr-6 shadow-lg`}
          >
            <div className="w-6 md:w-8 h-6 md:h-8 text-white">
              {solution.icon}
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {solution.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {solution.description}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-8 px-6">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {solution.features.map((feature: string, index: number) => (
              <div
                key={index}
                className="flex items-center p-3 bg-gray-50 rounded-lg"
              >
                <div
                  className={`w-2 h-2 ${solution.iconBgColor} rounded-full mr-3`}
                ></div>
                <span className="text-sm md:text-base text-gray-700 font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 px-6 pb-6">
          <button
            onClick={handleClose}
            className="flex-1 cursor-pointer px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
