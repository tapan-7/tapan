"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { LiquidWave } from "./ui/liquid-wave";

type Props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: Props) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const isTransitioningRef = useRef(false);

  const changeTheme = async () => {
    buttonRef.current?.blur();
    if (isTransitioningRef.current) return;

    const current = resolvedTheme || theme;
    const nextTheme = current === "dark" ? "light" : "dark";

    if (
      !buttonRef.current ||
      typeof document === "undefined" ||
      !("startViewTransition" in document) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    isTransitioningRef.current = true;

    try {
      const { top, left, width, height } =
        buttonRef.current.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const right = window.innerWidth - left;
      const bottom = window.innerHeight - top;
      const maxRadius = Math.hypot(
        Math.max(left, right),
        Math.max(top, bottom),
      );

      const doc = document as Document & {
        startViewTransition: (callback: () => void) => {
          ready: Promise<void>;
          finished: Promise<void>;
        };
      };

      const isDark = nextTheme === "dark";

      const transition = doc.startViewTransition(() => {
        if (isDark) {
          document.documentElement.classList.remove("light");
          document.documentElement.classList.add("dark");
          document.documentElement.style.colorScheme = "dark";
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.add("light");
          document.documentElement.style.colorScheme = "light";
        }
        setTheme(nextTheme);
      });

      await transition.ready;

      const animation = document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );

      await animation.finished;
    } catch {
      setTheme(nextTheme);
    } finally {
      isTransitioningRef.current = false;
    }
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      ref={buttonRef}
      onClick={changeTheme}
      className={cn(
        "relative overflow-hidden w-12 h-12 rounded-full border border-border/80 flex items-center justify-center transition-all duration-300 group cursor-pointer hover:border-foreground/30 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <LiquidWave />
      <span className="relative z-10 flex items-center justify-center text-foreground group-hover:text-background group-data-[wave-active=true]:text-background transition-colors duration-300 pointer-events-none">
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 ease-in-out dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100" />
      </span>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
