import InsightCard from "./ui/InsightCard";

interface Insight {
  id: number;
  image: string;
  title: string;
  description: string;
  href: string;
  category: string;
  readTime: string;
}

export default function InsightsSection() {
  const insights: Insight[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=400&h=300&fit=crop",
      title: "Future of Transportation Technology",
      description:
        "Exploring emerging trends in smart transportation systems and their impact on urban mobility.",
      href: "/blog/future-transportation-technology",
      category: "Transportation",
      readTime: "6 min read",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop",
      title: "Airport Digital Innovation",
      description:
        "How digital solutions are revolutionizing passenger experience and operational efficiency.",
      href: "/blog/airport-digital-innovation",
      category: "Aviation",
      readTime: "8 min read",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      title: "Smart Retail Solutions",
      description:
        "The evolution of retail technology and its role in enhancing customer experience.",
      href: "/blog/smart-retail-solutions",
      category: "Retail",
      readTime: "5 min read",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-6 md:py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-6">
            Latest Insights
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends and innovations in technology
            and industry solutions
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {insights.map((insight) => (
            <InsightCard
              key={insight.id}
              image={insight.image}
              title={insight.title}
              description={insight.description}
              href={insight.href}
              category={insight.category}
              readTime={insight.readTime}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-6 md:mt-12">
          <a
            href="/blog"
            className="inline-flex items-center bg-primary text-white px-5 md:px-8 py-2 md:py-3 rounded-full hover:bg-orange-600 transition-colors duration-200 font-medium text-sm md:text-lg group"
          >
            View All Insights
            <svg
              className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 20 20"
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
    </section>
  );
}
