"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedContentProps {
  children: React.ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  duration?: number;
  className?: string;
}

export function AnimatedContent({
  children,
  distance = 30,
  direction = "vertical",
  reverse = false,
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.15,
  delay = 0,
  duration = 0.6,
  className = "",
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });

  const getInitialPosition = () => {
    const value = reverse ? -distance : distance;
    return direction === "vertical" ? { y: value } : { x: value };
  };

  const initial = {
    ...getInitialPosition(),
    opacity: initialOpacity,
    scale: scale === 1 ? 1 : scale,
  };

  const animate = inView
    ? {
        x: 0,
        y: 0,
        opacity: animateOpacity ? 1 : initialOpacity,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.215, 0.61, 0.355, 1],
        },
      }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      className={className}
    >
      {children}
    </motion.div>
  );
}
