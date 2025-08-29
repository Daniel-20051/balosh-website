"use client";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
  features: string[];
  href: string;
  linkColor: string;
  hoverBorderColor: string;
  onClick: () => void;
}

export default function SolutionCard({
  icon,
  title,
  description,
  iconBgColor,
  features,
  href,
  linkColor,
  hoverBorderColor,
  onClick,
}: SolutionCardProps) {
  return (
    <div
      className="group relative bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 overflow-hidden h-full flex flex-col cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
      onClick={onClick}
    >
      {/* Background gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-100/0 group-hover:from-orange-50/30 group-hover:to-orange-100/20 transition-all duration-500 rounded-3xl"></div>

      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-100/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        {/* Icon with enhanced styling */}
        <div className="relative mb-8">
          <div
            className={`w-16 h-16 ${iconBgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
          >
            <div className="w-8 h-8 text-white transform group-hover:rotate-12 transition-transform duration-500">
              {icon}
            </div>
          </div>
          {/* Subtle glow effect */}
          <div
            className={`absolute -inset-2 ${iconBgColor} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}
          ></div>
        </div>

        {/* Title with enhanced typography */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
          {title}
        </h3>

        {/* Description with improved readability */}
        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}
