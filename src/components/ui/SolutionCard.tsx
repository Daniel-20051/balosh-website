interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
  iconBgColor: string;
  linkColor: string;
  hoverBorderColor: string;
}

export default function SolutionCard({
  icon,
  title,
  description,
  features,
  href,
  iconBgColor,
  linkColor,
  hoverBorderColor,
}: SolutionCardProps) {
  return (
    <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 overflow-hidden h-full flex flex-col">
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
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
          {title}
        </h3>

        {/* Description with improved readability */}
        <p className="text-gray-600 mb-8 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>

        {/* Features list with enhanced styling */}
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors duration-300">
                <svg
                  className="w-3 h-3 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
