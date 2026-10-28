"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  showSymbol?: boolean;
  showName?: boolean;
  name?: string;
}

export function Logo({
  size = "md",
  showSymbol = true,
  showName = false,
  name = "tapan",
  className,
  ...props
}: LogoProps) {
  const fontSizes = {
    sm: "text-sm gap-1.5",
    md: "text-base sm:text-lg gap-2",
    lg: "text-lg sm:text-xl gap-2.5",
  };

  const symbolSizes = {
    sm: "text-xs sm:text-sm",
    md: "text-sm sm:text-base",
    lg: "text-base sm:text-lg",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center select-none group transition-colors",
        fontSizes[size],
        className,
      )}
      {...props}
    >
      {showSymbol && (
        <span
          className={cn(
            "inline-flex items-center font-mono font-bold tracking-normal",
            symbolSizes[size],
          )}
        >
          <span className="text-primary transition-transform duration-200 group-hover:-translate-x-0.5">
            &lt;
          </span>
          <span className="text-foreground transition-colors group-hover:text-primary px-0.5">
            t
          </span>
          <span className="text-primary transition-transform duration-200 group-hover:translate-x-0.5">
            &gt;
          </span>
        </span>
      )}

      {showName && (
        <span className="font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {name}
        </span>
      )}
    </div>
  );
}

export default Logo;
