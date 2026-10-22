"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
}

export function BlurText({
  text,
  delay = 0.05,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });

  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  const defaultFrom =
    direction === "top"
      ? { filter: "blur(10px)", opacity: 0, y: -20 }
      : { filter: "blur(10px)", opacity: 0, y: 20 };

  const defaultTo = {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
  };

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          initial={defaultFrom}
          animate={inView ? defaultTo : defaultFrom}
          transition={{
            duration: 0.5,
            delay: index * delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
        >
          {segment}
          {animateBy === "words" && index < elements.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}
