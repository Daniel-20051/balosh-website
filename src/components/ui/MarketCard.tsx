interface MarketCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function MarketCard({
  icon,
  title,
  description,
}: MarketCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
      {/* Icon */}
      <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <div className="w-7 h-7 text-orange-600">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
}
