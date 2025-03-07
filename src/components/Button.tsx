
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "accent" | "outline";
  size?: "sm" | "default" | "lg";
  children: React.ReactNode;
  glowing?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", glowing = false, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "cyber-button",
          {
            "primary": variant === "primary",
            "accent": variant === "accent",
            "border-2 bg-transparent": variant === "outline",
            "py-2 px-4 text-sm": size === "sm",
            "py-4 px-8 text-lg": size === "lg",
            "animate-pulse-glow": glowing,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
