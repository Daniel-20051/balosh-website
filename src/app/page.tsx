"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import MarketsSection from "@/components/MarketsSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsSection from "@/components/InsightsSection";
import TrustedBy from "@/components/ui/TrustedBy";
import SolutionPopup from "@/components/ui/SolutionPopup";
import { getRecentBlogs } from "@/app/api";

interface Solution {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
  iconBgColor: string;
  linkColor: string;
  hoverBorderColor: string;
}

interface ApiBlogItem {
  _id: string;
  title: string;
  excerpt?: string;
  autoExcerpt?: string;
  featuredImage: string;
  category?: { name?: string } | null;
  readTime?: number;
  slug?: string;
}

export default function Home() {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(
    null
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [recentBlogs, setRecentBlogs] = useState<ApiBlogItem[]>([]);

  const handleSolutionClick = (solution: Solution) => {
    setSelectedSolution(solution);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedSolution(null);
  };

  // Fetch recent blogs for insights section
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getRecentBlogs(3);
        setRecentBlogs(data?.data?.blogs ?? []);
      } catch (error) {
        console.error("Error fetching recent blogs:", error);
        // Component will use fallback data
      }
    };

    fetchBlogs();
  }, []);

  const solutions = [
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
        </svg>
      ),
      title: "Access Control",
      description:
        "Advanced access control systems, biometric readers, RFID cards, barriers, and turnstiles for secure entry management across all facility types.",
      features: [
        "Biometric Access Control",
        "Smart Card Systems",
        "RFID Technology",
        "Barriers & Turnstiles",
      ],
      href: "/solutions/access-control",
      iconBgColor: "bg-orange-500",
      linkColor: "text-orange-500",
      hoverBorderColor: "border-orange-200",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
        </svg>
      ),
      title: "Car Parking",
      description:
        "Automated parking access, ticketing systems, boom barriers, and intelligent vehicle management solutions for efficient car park operations.",
      features: [
        "Automated Parking Access",
        "Ticketing Systems",
        "Boom Barriers",
        "Vehicle Management",
      ],
      href: "/solutions/car-parking",
      iconBgColor: "bg-blue-500",
      linkColor: "text-blue-500",
      hoverBorderColor: "border-blue-200",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      title: "Entrance Control",
      description:
        "Sliding doors, swing gates, roller shutters, and retractable bollards for seamless and secure entrance management.",
      features: [
        "Sliding Doors",
        "Swing Gates",
        "Roller Shutters",
        "Retractable Bollards",
      ],
      href: "/solutions/entrance-control",
      iconBgColor: "bg-green-500",
      linkColor: "text-green-500",
      hoverBorderColor: "border-green-200",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "Event Management",
      description:
        "Large-scale ticketing systems, crowd control solutions, and digital access management for major events and venues.",
      features: [
        "Digital Ticketing",
        "Crowd Control",
        "Access Management",
        "Event Analytics",
      ],
      href: "/solutions/event-management",
      iconBgColor: "bg-purple-500",
      linkColor: "text-purple-500",
      hoverBorderColor: "border-purple-200",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Maintenance Services",
      description:
        "24/7 technical support, preventive maintenance, system upgrades, and ongoing optimization to ensure optimal performance.",
      features: [
        "24/7 Support",
        "Preventive Maintenance",
        "System Upgrades",
        "Performance Optimization",
      ],
      href: "/solutions/maintenance",
      iconBgColor: "bg-red-500",
      linkColor: "text-red-500",
      hoverBorderColor: "border-red-200",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "Toll Roads and Traffic Management",
      description:
        "Automated toll collection systems, traffic flow management, and intelligent transportation solutions for modern infrastructure.",
      features: [
        "Automated Toll Collection",
        "Traffic Flow Management",
        "Intelligent Transportation",
        "Infrastructure Monitoring",
      ],
      href: "/solutions/toll-traffic",
      iconBgColor: "bg-indigo-500",
      linkColor: "text-indigo-500",
      hoverBorderColor: "border-indigo-200",
    },
  ];

  const markets = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full block"
        >
          <g clipPath="url(#clip0_4418_8877)">
            <path
              d="M22 21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H22C22.41 22.75 22.75 22.41 22.75 22C22.75 21.59 22.41 21.25 22 21.25Z"
              fill="currentColor"
            />
            <path
              d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2ZM10 17.25H7C6.59 17.25 6.25 16.91 6.25 16.5C6.25 16.09 6.59 15.75 7 15.75H10C10.41 15.75 10.75 16.09 10.75 16.5C10.75 16.91 10.41 17.25 10 17.25ZM10 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H10C10.41 11.25 10.75 11.59 10.75 12C10.75 12.41 10.41 12.75 10 12.75ZM10 8.25H7C6.59 8.25 6.25 7.91 6.25 7.5C6.25 7.09 6.59 6.75 7 6.75H10C10.41 6.75 10.75 7.09 10.75 7.5C10.75 7.91 10.41 8.25 10 8.25ZM17 17.25H14C13.59 17.25 13.25 16.91 13.25 16.5C13.25 16.09 13.59 15.75 14 15.75H17C17.41 15.75 17.75 16.09 17.75 16.5C17.75 16.91 17.41 17.25 17 17.25ZM17 12.75H14C13.59 12.75 13.25 12.41 13.25 12C13.25 11.59 13.59 11.25 14 11.25H17C17.41 11.25 17.75 11.59 17.75 12C17.75 12.41 17.41 12.75 17 12.75ZM17 8.25H14C13.59 8.25 13.25 7.91 13.25 7.5C13.25 7.09 13.59 6.75 14 6.75H17C17.41 6.75 17.75 7.09 17.75 7.5C17.75 7.91 17.41 8.25 17 8.25Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_4418_8877">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Commercial",
      description:
        "Office buildings, corporate headquarters, and business complexes with integrated access control and security systems.",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      title: "Industrial",
      description:
        "Manufacturing facilities, warehouses, and industrial parks with robust security and access management solutions.",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
        </svg>
      ),
      title: "Public Sector",
      description:
        "Government buildings, municipal facilities, and public institutions with secure access and visitor management.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full block"
          preserveAspectRatio="xMidYMid meet"
        >
          <g clipPath="url(#clip0_4418_8262)">
            <path
              d="M16.8301 15.6402C17.5001 15.2002 18.3801 15.6802 18.3801 16.4802V17.7702C18.3801 19.0402 17.3901 20.4002 16.2001 20.8002L13.0101 21.8602C12.4501 22.0502 11.5401 22.0502 10.9901 21.8602L7.80012 20.8002C6.60012 20.4002 5.62012 19.0402 5.62012 17.7702V16.4702C5.62012 15.6802 6.50012 15.2002 7.16012 15.6302L9.22012 16.9702C10.0101 17.5002 11.0101 17.7602 12.0101 17.7602C13.0101 17.7602 14.0101 17.5002 14.8001 16.9702L16.8301 15.6402Z"
              fill="currentColor"
            />
            <path
              d="M19.98 6.46055L13.99 2.53055C12.91 1.82055 11.13 1.82055 10.05 2.53055L4.03002 6.46055C2.10002 7.71055 2.10002 10.5405 4.03002 11.8005L5.63002 12.8405L10.05 15.7205C11.13 16.4305 12.91 16.4305 13.99 15.7205L18.38 12.8405L19.75 11.9405V15.0005C19.75 15.4105 20.09 15.7505 20.5 15.7505C20.91 15.7505 21.25 15.4105 21.25 15.0005V10.0805C21.65 8.79055 21.24 7.29055 19.98 6.46055Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_4418_8262">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Education",
      description:
        "Schools, universities, and educational institutions with smart campus security and student access systems.",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H9v-4h5v4zm3-8H7V7h10v2z" />
        </svg>
      ),
      title: "Leisure",
      description:
        "Hotels, resorts, and entertainment venues with guest access control and facility management systems.",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      ),
      title: "Retail",
      description:
        "Shopping centers, malls, and retail stores with integrated security and customer flow management.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full block"
          preserveAspectRatio="xMidYMid meet"
        >
          <g clipPath="url(#clip0_4418_8750)">
            <path
              d="M16.75 3.56V2C16.75 1.59 16.41 1.25 16 1.25C15.59 1.25 15.25 1.59 15.25 2V3.5H8.74999V2C8.74999 1.59 8.40999 1.25 7.99999 1.25C7.58999 1.25 7.24999 1.59 7.24999 2V3.56C4.54999 3.81 3.23999 5.42 3.03999 7.81C3.01999 8.1 3.25999 8.34 3.53999 8.34H20.46C20.75 8.34 20.99 8.09 20.96 7.81C20.76 5.42 19.45 3.81 16.75 3.56Z"
              fill="currentColor"
            />
            <path
              d="M20 9.83984H4C3.45 9.83984 3 10.2898 3 10.8398V16.9998C3 19.9998 4.5 21.9998 8 21.9998H16C19.5 21.9998 21 19.9998 21 16.9998V10.8398C21 10.2898 20.55 9.83984 20 9.83984ZM9.21 18.2098C9.16 18.2498 9.11 18.2998 9.06 18.3298C9 18.3698 8.94 18.3998 8.88 18.4198C8.82 18.4498 8.76 18.4698 8.7 18.4798C8.63 18.4898 8.57 18.4998 8.5 18.4998C8.37 18.4998 8.24 18.4698 8.12 18.4198C7.99 18.3698 7.89 18.2998 7.79 18.2098C7.61 18.0198 7.5 17.7598 7.5 17.4998C7.5 17.2398 7.61 16.9798 7.79 16.7898C7.89 16.6998 7.99 16.6298 8.12 16.5798C8.3 16.4998 8.5 16.4798 8.7 16.5198C8.76 16.5298 8.82 16.5498 8.88 16.5798C8.94 16.5998 9 16.6298 9.06 16.6698C9.11 16.7098 9.16 16.7498 9.21 16.7898C9.39 16.9798 9.5 17.2398 9.5 17.4998C9.5 17.7598 9.39 18.0198 9.21 18.2098ZM9.21 14.7098C9.02 14.8898 8.76 14.9998 8.5 14.9998C8.24 14.9998 7.98 14.8898 7.79 14.7098C7.61 14.5198 7.5 14.2598 7.5 13.9998C7.5 13.7398 7.61 13.4798 7.79 13.2898C8.07 13.0098 8.51 12.9198 8.88 13.0798C9.01 13.1298 9.12 13.1998 9.21 13.2898C9.39 13.4798 9.5 13.7398 9.5 13.9998C9.5 14.2598 9.39 14.5198 9.21 14.7098ZM12.71 18.2098C12.52 18.3898 12.26 18.4998 12 18.4998C11.74 18.4998 11.48 18.3898 11.29 18.2098C11.11 18.0198 11 17.7598 11 17.4998C11 17.2398 11.11 16.9798 11.29 16.7898C11.66 16.4198 12.34 16.4198 12.71 16.7898C12.89 16.9798 13 17.2398 13 17.4998C13 17.7598 12.89 18.0198 12.71 18.2098ZM12.71 14.7098C12.66 14.7498 12.61 14.7898 12.56 14.8298C12.5 14.8698 12.44 14.8998 12.38 14.9198C12.32 14.9498 12.26 14.9698 12.2 14.9798C12.13 14.9898 12.07 14.9998 12 14.9998C11.74 14.9998 11.48 14.8898 11.29 14.7098C11.11 14.5198 11 14.2598 11 13.9998C11 13.7398 11.11 13.4798 11.29 13.2898C11.38 13.1998 11.49 13.1298 11.62 13.0798C11.99 12.9198 12.43 13.0098 12.71 13.2898C12.89 13.4798 13 13.7398 13 13.9998C13 14.2598 12.89 14.5198 12.71 14.7098ZM16.21 18.2098C16.02 18.3898 15.76 18.4998 15.5 18.4998C15.24 18.4998 14.98 18.3898 14.79 18.2098C14.61 18.0198 14.5 17.7598 14.5 17.4998C14.5 17.2398 14.61 16.9798 14.79 16.7898C15.16 16.4198 15.84 16.4198 16.21 16.7898C16.39 16.9798 16.5 17.2398 16.5 17.4998C16.5 17.7598 16.39 18.0198 16.21 18.2098ZM16.21 14.7098C16.16 14.7498 16.11 14.7898 16.06 14.8298C16 14.8698 15.94 14.8998 15.88 14.9198C15.82 14.9498 15.76 14.9698 15.7 14.9798C15.63 14.9898 15.56 14.9998 15.5 14.9998C15.24 14.9998 14.98 14.8898 14.79 14.7098C14.61 14.5198 14.5 14.2598 14.5 13.9998C14.5 13.7398 14.61 13.4798 14.79 13.2898C14.89 13.1998 14.99 13.1298 15.12 13.0798C15.3 12.9998 15.5 12.9798 15.7 13.0198C15.76 13.0298 15.82 13.0498 15.88 13.0798C15.94 13.0998 16 13.1298 16.06 13.1698C16.11 13.2098 16.16 13.2498 16.21 13.2898C16.39 13.4798 16.5 13.7398 16.5 13.9998C16.5 14.2598 16.39 14.5198 16.21 14.7098Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_4418_8750">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Events",
      description:
        "Concert venues, stadiums, and event spaces with crowd control and ticketing management systems.",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
      title: "Residential",
      description:
        "Apartment complexes, gated communities, and residential developments with smart home security solutions.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full block"
          preserveAspectRatio="xMidYMid meet"
        >
          <g clipPath="url(#clip0_4418_4501)">
            <path
              opacity="0.4"
              d="M22.1801 13.66C22.0301 12.01 21.5901 10.25 18.3801 10.25H5.62009C2.41009 10.25 1.98009 12.01 1.82009 13.66L1.26009 19.75C1.19009 20.51 1.44009 21.27 1.96009 21.84C2.49009 22.42 3.24009 22.75 4.04009 22.75H5.92009C7.54009 22.75 7.85009 21.82 8.05009 21.21L8.25009 20.61C8.48009 19.92 8.54009 19.75 9.44009 19.75H14.5601C15.4601 19.75 15.4901 19.85 15.7501 20.61L15.9501 21.21C16.1501 21.82 16.4601 22.75 18.0801 22.75H19.9601C20.7501 22.75 21.5101 22.42 22.0401 21.84C22.5601 21.27 22.8101 20.51 22.7401 19.75L22.1801 13.66Z"
              fill="currentColor"
            />
            <path
              d="M21 7.25008H20C19.99 7.25008 19.99 7.25008 19.98 7.25008L19.6 5.44008C19.24 3.69008 18.49 2.08008 15.51 2.08008H12.75H11.25H8.49C5.51 2.08008 4.76 3.69008 4.4 5.44008L4.02 7.25008C4.01 7.25008 4.01 7.25008 4 7.25008H3C2.59 7.25008 2.25 7.59008 2.25 8.00008C2.25 8.41008 2.59 8.75008 3 8.75008H3.71L3.29 10.7501C3.83 10.4401 4.58 10.2501 5.62 10.2501H18.38C19.42 10.2501 20.17 10.4401 20.71 10.7501L20.29 8.75008H21C21.41 8.75008 21.75 8.41008 21.75 8.00008C21.75 7.59008 21.41 7.25008 21 7.25008Z"
              fill="currentColor"
            />
            <path
              d="M9 15.75H6C5.59 15.75 5.25 15.41 5.25 15C5.25 14.59 5.59 14.25 6 14.25H9C9.41 14.25 9.75 14.59 9.75 15C9.75 15.41 9.41 15.75 9 15.75Z"
              fill="currentColor"
            />
            <path
              d="M18 15.75H15C14.59 15.75 14.25 15.41 14.25 15C14.25 14.59 14.59 14.25 15 14.25H18C18.41 14.25 18.75 14.59 18.75 15C18.75 15.41 18.41 15.75 18 15.75Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_4418_4501">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Transport",
      description:
        "Airports, train stations, and transport hubs with passenger flow management and security systems.",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TrustedBy />
      <SolutionsSection
        solutions={solutions}
        onSolutionClick={handleSolutionClick}
      />
      <MarketsSection markets={markets} />
      <ImpactSection />
      <TestimonialsSection />
      <InsightsSection insights={recentBlogs} />

      {/* Solution Popup Modal - Now using separate component */}
      <SolutionPopup
        solution={selectedSolution}
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
    </div>
  );
}
