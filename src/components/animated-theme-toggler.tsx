"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, useId } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { LiquidWave } from "@/components/ui/liquid-wave";

type Props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: Props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const rawId = useId();
  const clipPathId = `theme-toggle-clip-${rawId.replace(/:/g, "")}`;

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = async () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    if (
      !buttonRef.current ||
      typeof document === "undefined" ||
      !("startViewTransition" in document) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    try {
      const { top, left, width, height } =
        buttonRef.current.getBoundingClientRect();
      const y = top + height / 2;
      const x = left + width / 2;
      const right = window.innerWidth - left;
      const bottom = window.innerHeight - top;
      const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

      const doc = document as Document & {
        startViewTransition: (callback: () => void) => {
          ready: Promise<void>;
          finished: Promise<void>;
        };
      };

      const transition = doc.startViewTransition(() => {
        flushSync(() => {
          setTheme(nextTheme);
        });
      });

      await transition.ready;

      const animation = document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRad}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 650,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );

      await animation.finished;
    } catch {
      setTheme(nextTheme);
    }
  };

  const isDark = mounted ? theme === "dark" : true;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      ref={buttonRef}
      className={cn(
        "relative overflow-hidden w-12 h-12 rounded-full border border-border/80 flex items-center justify-center transition-all duration-300 group cursor-pointer hover:border-foreground/30 hover:scale-105 active:scale-95",
        className,
      )}
      onClick={changeTheme}
    >
      <LiquidWave />

      <span className="relative z-10 flex items-center justify-center text-foreground group-hover:text-background transition-colors duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          strokeLinecap="round"
          viewBox="0 0 32 32"
          width="20"
          height="20"
        >
          <clipPath id={clipPathId}>
            <motion.path
              animate={{ y: isDark ? 10 : 0, x: isDark ? -12 : 0 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              d="M0-5h30a1 1 0 0 0 9 13v24H0Z"
            />
          </clipPath>
          <g clipPath={`url(#${clipPathId})`}>
            <motion.circle
              animate={{ r: isDark ? 10 : 8 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              cx="16"
              cy="16"
            />
            <motion.g
              animate={{
                rotate: isDark ? -100 : 0,
                scale: isDark ? 0.5 : 1,
                opacity: isDark ? 0 : 1,
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M16 5.5v-4" />
              <path d="M16 30.5v-4" />
              <path d="M1.5 16h4" />
              <path d="M26.5 16h4" />
              <path d="m23.4 8.6 2.8-2.8" />
              <path d="m5.7 26.3 2.9-2.9" />
              <path d="m5.8 5.8 2.8 2.8" />
              <path d="m23.4 23.4 2.9 2.9" />
            </motion.g>
          </g>
        </svg>
      </span>
    </button>
  );
};
