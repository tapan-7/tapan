"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  padZero?: boolean;
}

export function CountUp({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  className = "",
  prefix = "",
  suffix = "",
  padZero = false,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(from);

  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        motionValue.set(to);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, motionValue, to, delay]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const rounded = Math.round(latest);
        const formatted =
          padZero && rounded < 10 && rounded >= 0
            ? `0${rounded}`
            : rounded.toString();
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [springValue, prefix, suffix, padZero]);

  const initialText = `${prefix}${
    padZero && from < 10 && from >= 0 ? `0${from}` : from
  }${suffix}`;

  return (
    <span ref={ref} className={className}>
      {initialText}
    </span>
  );
}
