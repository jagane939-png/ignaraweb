import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variants = {
  primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25",
  ghost: "bg-white/8 hover:bg-white/12 text-white border border-white/10",
  outline: "border border-blue-500/50 hover:border-blue-500 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-xl",
  lg: "px-7 py-3.5 text-base rounded-xl",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  icon = false,
  className = "",
  external = false,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight size={14} className="opacity-70" aria-hidden="true" />}
    </>
  );

  if (href) {
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <Link href={href} className={classes} {...externalProps}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}
