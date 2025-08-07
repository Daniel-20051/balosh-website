import Badge from "./Badge";

interface SectionHeaderProps {
  badgeIcon?: React.ReactNode;
  badgeText: string;
  title: string;
  titleHighlight?: string;
  description: string;
  className?: string;
}

export default function SectionHeader({
  badgeIcon,
  badgeText,
  title,
  titleHighlight,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`text-center mb-16 flex flex-col items-center gap-3 ${className}`}
    >
      <Badge className="mb-6" icon={badgeIcon} text={badgeText} />
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
        {title}
        {titleHighlight && (
          <span className="text-orange-500"> {titleHighlight}</span>
        )}
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
    </div>
  );
}
