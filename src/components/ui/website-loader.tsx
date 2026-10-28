"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WebsiteLoader() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathRef = useRef<SVGPathElement>(null);
  const percentTextRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const startTime = performance.now();
    const duration = 4200;
    const width = 800;
    const height = 250;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const raw = Math.min(1, elapsed / duration);

      const ease =
        raw < 0.5
          ? 2 * raw * raw
          : 1 - Math.pow(-2 * raw + 2, 2) / 2;

      const progress = Math.min(100, Math.round(ease * 100));
      const phase = (now / 1000) * 3.6;

      if (percentTextRef.current) {
        percentTextRef.current.textContent = `loading... ${progress} %`;
      }

      if (pathRef.current) {
        const targetY = (height + 35) - (progress / 100) * (height + 60);
        const dampening = progress > 92 ? Math.max(0, (100 - progress) / 8) : 1;
        
        let d = `M 0 ${height + 40} L 0 ${targetY}`;
        const step = 10;
        for (let x = 0; x <= width; x += step) {
          const w1 = Math.sin(x * 0.016 + phase) * 9.5 * dampening;
          const w2 = Math.cos(x * 0.027 + phase * 1.25) * 5 * dampening;
          const y = targetY + w1 + w2;
          d += ` L ${x} ${y.toFixed(2)}`;
        }
        d += ` L ${width} ${height + 40} Z`;
        pathRef.current.setAttribute("d", d);
      }

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setIsCompleted(true);
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = "";
        }, 750);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = "";
    };
  }, []);

  const width = 800;
  const height = 250;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[99999] bg-[#f8f9fa] dark:bg-[#0c0d10] flex items-center justify-center p-4 select-none pointer-events-auto transition-colors duration-300"
        >
          <div className="relative w-full max-w-[850px] flex flex-col items-center justify-center">
            <motion.div
              animate={
                isCompleted
                  ? {
                      scale: 2.35,
                      opacity: 0,
                      transition: {
                        duration: 0.9,
                        ease: [0.76, 0, 0.24, 1],
                        delay: 0.18,
                      },
                    }
                  : {
                      scale: 1,
                      opacity: 1,
                    }
              }
              className="relative w-full flex items-center justify-center"
            >
              <svg
                viewBox={`0 0 ${width} ${height}`}
                className="w-full h-auto select-none overflow-visible"
              >
                <defs>
                  <clipPath id="tapan-liquid-mask">
                    <path
                      ref={pathRef}
                      d={`M 0 ${height + 40} L 0 ${height + 35} L ${width} ${height + 35} L ${width} ${height + 40} Z`}
                    />
                  </clipPath>
                </defs>

                <text
                  x="50%"
                  y="56%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-[#e2e4e8] dark:fill-[#26282e] font-black text-[175px] sm:text-[195px] md:text-[210px] transition-colors duration-300"
                  style={{
                    fontFamily:
                      "var(--font-montserrat), -apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                  }}
                >
                  Tapan
                </text>

                <g clipPath="url(#tapan-liquid-mask)">
                  <text
                    x="50%"
                    y="56%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-[#090a0f] dark:fill-white font-black text-[175px] sm:text-[195px] md:text-[210px] transition-colors duration-300"
                    style={{
                      fontFamily:
                        "var(--font-montserrat), -apple-system, BlinkMacSystemFont, sans-serif",
                      fontWeight: 900,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    Tapan
                  </text>
                </g>
              </svg>
            </motion.div>

            <motion.div
              animate={{
                opacity: isCompleted ? 0 : 1,
              }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-[560px] sm:max-w-[640px] flex justify-end pr-2 sm:pr-4 mt-1"
            >
              <span
                ref={percentTextRef}
                className="font-mono text-xs sm:text-sm text-[#090a0f]/80 dark:text-white/90 tracking-wider"
              >
                loading... 0 %
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WebsiteLoader;
