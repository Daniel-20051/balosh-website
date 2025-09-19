import Image from "next/image";

interface MarketCardProps {
  icon?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  description: string;
}

export default function MarketCard({
  icon,
  imageSrc,
  imageAlt,
  title,
  description,
}: MarketCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 overflow-hidden">
      {/* Visual */}
      {imageSrc ? (
        <div className="relative h-40 md:h-48 w-full">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 384px, 100vw"
            priority={false}
          />
        </div>
      ) : (
        <div className="p-6 md:p-8">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
            <div className="w-6 h-6 md:w-7 md:h-7 text-orange-600">{icon}</div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-gray-800 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}
