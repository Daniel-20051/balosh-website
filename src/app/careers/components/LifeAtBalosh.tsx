import React from "react";
import Image from "next/image";

const cultureCards = [
  {
    title: "Team Events",
    description:
      "Regular team building activities and company-wide celebrations that bring us together.",
    image: "https://picsum.photos/300/200?random=7",
  },
  {
    title: "Learning & Development",
    description:
      "Continuous learning opportunities with conferences, workshops, and skill development programs.",
    image: "https://picsum.photos/300/200?random=8",
  },
  {
    title: "Health & Wellness",
    description:
      "Comprehensive health benefits, mental health support, and wellness programs for work-life balance.",
    image: "https://picsum.photos/300/200?random=9",
  },
  {
    title: "Flexible Work",
    description:
      "Remote-first culture with flexible schedules and modern office spaces when you need them.",
    image: "https://picsum.photos/300/200?random=10",
  },
];

export default function LifeAtBalosh() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Life at Balosh
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cultureCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-t-lg"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
