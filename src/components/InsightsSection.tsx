import InsightCard from "./ui/InsightCard";
import Link from "next/link";

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

interface Insight {
  id: string;
  image: string;
  title: string;
  description: string;
  href: string;
  category: string;
  readTime: string;
}

interface InsightsSectionProps {
  insights?: ApiBlogItem[];
}

export default function InsightsSection({
  insights = [],
}: InsightsSectionProps) {
  // Transform API data to insights format
  const transformedInsights: Insight[] = insights.map((blog) => ({
    id: blog._id,
    image:
      blog.featuredImage ||
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
    title: blog.title,
    description:
      blog.excerpt || blog.autoExcerpt || "Read more about this topic...",
    href: `/blog/${blog.slug || blog._id}`,
    category: blog.category?.name || "Technology",
    readTime: blog.readTime ? `${blog.readTime} min read` : "5 min read",
  }));

  // Hide the entire section if no insights are available
  if (transformedInsights.length === 0) {
    return null;
  }

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
          {transformedInsights.map((insight) => (
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
          <Link
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
          </Link>
        </div>
      </div>
    </section>
  );
}
