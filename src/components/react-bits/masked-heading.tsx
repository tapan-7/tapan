"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, MotionValue, useSpring } from "framer-motion";

interface MaskedHeadingProps {
  line1: string;
  line2: string;
  xLeft?: MotionValue<number>;
  xRight?: MotionValue<number>;
  opacity?: MotionValue<number>;
}

export function MaskedHeading({
  line1,
  line2,
  xLeft,
  xRight,
  opacity,
}: MaskedHeadingProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [isInside, setIsInside] = useState(false);

  const springConfig = { stiffness: 220, damping: 25 };
  const smoothX = useSpring(350, springConfig);
  const smoothY = useSpring(80, springConfig);

  const [currentPos, setCurrentPos] = useState({ x: 350, y: 80 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const unsubscribeX = smoothX.on("change", (latest) => {
      setCurrentPos((prev) => ({ ...prev, x: latest }));
    });
    const unsubscribeY = smoothY.on("change", (latest) => {
      setCurrentPos((prev) => ({ ...prev, y: latest }));
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      smoothX.set(x);
      smoothY.set(y);

      const isNear =
        e.clientX >= rect.left - 150 &&
        e.clientX <= rect.right + 150 &&
        e.clientY >= rect.top - 150 &&
        e.clientY <= rect.bottom + 150;

      setIsInside(isNear);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      unsubscribeX();
      unsubscribeY();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [smoothX, smoothY]);

  return (
    <h1
      ref={containerRef}
      className="relative text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[1.05] mb-6 w-full select-none"
    >
      <div className="relative">
        <motion.div
          style={{ x: xLeft, opacity }}
          className="block will-change-transform mb-2 text-muted-foreground/35"
        >
          {line1}
        </motion.div>
        <motion.div
          style={{ x: xRight, opacity }}
          className="block will-change-transform text-muted-foreground/30"
        >
          {line2}
        </motion.div>
      </div>

      <div
        style={{
          maskImage: `radial-gradient(380px circle at ${currentPos.x}px ${currentPos.y}px, currentColor 35%, transparent 85%)`,
          WebkitMaskImage: `radial-gradient(380px circle at ${currentPos.x}px ${currentPos.y}px, currentColor 35%, transparent 85%)`,
          opacity: isInside ? 1 : 0.75,
          transition: "opacity 0.3s ease",
        }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          style={{ x: xLeft, opacity }}
          className="block will-change-transform mb-2 text-transparent bg-clip-text bg-gradient-to-r from-highlight via-foreground to-primary"
        >
          {line1}
        </motion.div>
        <motion.div
          style={{ x: xRight, opacity }}
          className="block will-change-transform text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-glow"
        >
          {line2}
        </motion.div>
      </div>
    </h1>
  );
}
