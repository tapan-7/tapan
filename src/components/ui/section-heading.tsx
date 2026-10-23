"use client";

import React from "react";
import { AnimatedContent } from "@/components/react-bits/animated-content";
import { BlurText } from "@/components/react-bits/blur-text";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowIcon?: React.ReactNode;
  badge?: boolean;
  title: string;
  gradientText?: string;
  description?: string;
  align?: "left" | "center";
  variant?: "default" | "compact";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  eyebrowIcon,
  badge = false,
  title,
  gradientText,
  description,
  align = "left",
  variant = "default",
  as: Component = "h2",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isCompact = variant === "compact";

  return (
    <div
      className={cn(
        "flex flex-col",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <AnimatedContent distance={15} direction="vertical" delay={0.05}>
          {badge ? (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border/70 text-xs font-mono text-primary mb-6">
              {eyebrowIcon ?? (
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              )}
              <span>{eyebrow}</span>
            </div>
          ) : (
            <div
              className={cn(
                "flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-primary",
                isCompact ? "mb-2" : "mb-4",
                isCenter ? "justify-center" : "justify-start"
              )}
            >
              {eyebrowIcon ?? (
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              )}
              <span>{eyebrow}</span>
            </div>
          )}
        </AnimatedContent>
      )}

      <Component
        className={cn(
          "font-extrabold tracking-tight text-foreground",
          isCompact
            ? "text-2xl sm:text-3xl md:text-4xl leading-tight"
            : "text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08]",
          gradientText ? "mb-2" : ""
        )}
      >
        <BlurText text={title} animateBy="words" delay={0.06} />
        {gradientText && (
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/90 to-primary/80">
            {gradientText}
          </span>
        )}
      </Component>

      {description && (
        <AnimatedContent distance={20} direction="vertical" delay={0.2}>
          <p
            className={cn(
              "text-muted-foreground font-light leading-relaxed",
              isCompact
                ? "text-xs sm:text-sm max-w-lg mt-1"
                : "text-base sm:text-lg max-w-2xl mt-4",
              isCenter ? "mx-auto" : ""
            )}
          >
            {description}
          </p>
        </AnimatedContent>
      )}
    </div>
  );
}

export interface SubHeadingProps {
  eyebrow?: string;
  eyebrowIcon?: React.ReactNode;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h2" | "h3" | "h4";
  className?: string;
}

export function SubHeading({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  align = "left",
  as: Component = "h3",
  className = "",
}: SubHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <AnimatedContent distance={15} direction="vertical" delay={0.05}>
          <div
            className={cn(
              "flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-primary mb-2.5",
              isCenter ? "justify-center" : "justify-start"
            )}
          >
            {eyebrowIcon}
            <span>{eyebrow}</span>
          </div>
        </AnimatedContent>
      )}

      <Component className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
        <BlurText text={title} animateBy="words" delay={0.06} />
      </Component>

      {description && (
        <AnimatedContent distance={20} direction="vertical" delay={0.2}>
          <p
            className={cn(
              "text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-lg mt-3",
              isCenter ? "mx-auto" : ""
            )}
          >
            {description}
          </p>
        </AnimatedContent>
      )}
    </div>
  );
}
