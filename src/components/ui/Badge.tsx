import React from "react";

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
  background?: "default" | "secondary";
}

const Badge: React.FC<BadgeProps> = ({
  icon,
  text,
  className = "",
  background = "default",
}) => {
  const getBackgroundClass = () => {
    if (background === "secondary") {
      return "bg-[#374151]/50 border-[#4B5563] text-white";
    }
    return "bg-primary/10 border-primary/20 text-primary";
  };

  return (
    <div
      className={`inline-flex font-semibold items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full border-1 text-sm md:text-base ${getBackgroundClass()} ${className}`}
    >
      {icon}
      {text}
    </div>
  );
};

export default Badge;
