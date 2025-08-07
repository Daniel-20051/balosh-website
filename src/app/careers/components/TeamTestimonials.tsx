import React from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Balosh has given me the opportunity to work on challenging projects while maintaining an excellent work-life balance. The team is incredibly supportive and collaborative.",
    name: "Sarah Chen",
    title: "Senior Product Designer",
    image: "https://picsum.photos/60/60?random=11",
  },
  {
    quote:
      "The learning opportunities here are endless. I've grown more in my two years at Balosh than in my entire previous career. The mentorship and growth culture is exceptional.",
    name: "Marcus Rodriguez",
    title: "Frontend Engineer",
    image: "https://picsum.photos/60/60?random=12",
  },
  {
    quote:
      "Working at Balosh means being part of something bigger. We're not just building products; we're solving real problems and making a meaningful impact.",
    name: "Emily Johnson",
    title: "Marketing Director",
    image: "https://picsum.photos/60/60?random=13",
  },
];

export default function TeamTestimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          What Our Team Says
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
            >
              <blockquote className="text-gray-600 leading-relaxed mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
