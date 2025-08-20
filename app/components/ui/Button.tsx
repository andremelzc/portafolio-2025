import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right" | "top" | "bottom";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  onClick,
  className = "",
  icon,
  iconPosition = "left",
  rounded = "lg",
}: ButtonProps) {
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  };
  const baseClasses = `inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer ${roundedClasses[rounded]}`;

  const variantClasses = {
    primary: "bg-foreground text-background hover:opacity-90 focus:ring-accent",
    secondary: "bg-muted text-foreground hover:opacity-80 focus:ring-muted",
    outline:
      "border border-border text-foreground hover:bg-muted focus:ring-accent",
    ghost:
      "text-foreground hover:bg-muted hover:bg-opacity-50 focus:ring-muted",
  };

  // Padding vertical extra si el ícono está en top o bottom
  const verticalPad =
    icon && (iconPosition === "top" || iconPosition === "bottom")
      ? {
          sm: "py-3",
          md: "py-4",
          lg: "py-6",
          xl: "py-10",
        }[size]
      : undefined;
  const sizeClasses = {
    sm: `px-4 ${verticalPad || "py-2"} text-sm`,
    md: `px-6 ${verticalPad || "py-3"} text-base`,
    lg: `px-8 ${verticalPad || "py-4"} text-lg`,
    xl: `px-10 ${verticalPad || "py-6"} text-xl`,
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  // Layout para ícono y contenido
  const isVertical = iconPosition === "top" || iconPosition === "bottom";
  const flexDir = isVertical ? "flex-col" : "flex-row";
  const gap = size === "sm" ? "gap-1" : size === "lg" ? "gap-3" : "gap-2";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      <span
        className={`flex ${flexDir} items-center justify-center ${gap} w-full`}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : null}
        {/* Ícono y contenido según posición */}
        {icon && (iconPosition === "left" || iconPosition === "top") && (
          <span>{icon}</span>
        )}
        {children}
        {icon && (iconPosition === "right" || iconPosition === "bottom") && (
          <span>{icon}</span>
        )}
      </span>
    </button>
  );
}
