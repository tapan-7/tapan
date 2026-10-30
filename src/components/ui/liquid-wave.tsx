"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiquidWaveProps {
  color?: "foreground" | "primary" | "primary-foreground";
  wave1ClassName?: string;
  wave2ClassName?: string;
  wave3ClassName?: string;
  className?: string;
}

export function LiquidWave({
  color,
  wave1ClassName,
  wave2ClassName,
  wave3ClassName,
  className,
}: LiquidWaveProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [touchPos, setTouchPos] = useState<{ x: number; y: number } | null>(null);
  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({ w: 48, h: 48 });
  const [isHovered, setIsHovered] = useState(false);

  const isHoveredRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const parent = container.parentElement;
    if (!parent) return;

    let touchTimeout: NodeJS.Timeout | null = null;

    const updateDims = () => {
      const rect = parent.getBoundingClientRect();
      setDimensions({ w: rect.width, h: rect.height });
    };

    updateDims();

    const onMouseEnter = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      setDimensions({ w: rect.width, h: rect.height });
      setTouchPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      isHoveredRef.current = true;
      setIsHovered(true);
      parent.setAttribute("data-wave-active", "true");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isHoveredRef.current) {
        const rect = parent.getBoundingClientRect();
        setDimensions({ w: rect.width, h: rect.height });
        setTouchPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        isHoveredRef.current = true;
        setIsHovered(true);
        parent.setAttribute("data-wave-active", "true");
      }
    };

    const onMouseLeave = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      setTouchPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      isHoveredRef.current = false;
      setIsHovered(false);
      parent.removeAttribute("data-wave-active");
    };

    const onFocus = () => {
      try {
        if (!parent.matches(":focus-visible")) return;
      } catch {}
      const rect = parent.getBoundingClientRect();
      setDimensions({ w: rect.width, h: rect.height });
      setTouchPos({
        x: rect.width / 2,
        y: rect.height / 2,
      });
      isHoveredRef.current = true;
      setIsHovered(true);
      parent.setAttribute("data-wave-active", "true");
    };

    const onBlur = () => {
      isHoveredRef.current = false;
      setIsHovered(false);
      parent.removeAttribute("data-wave-active");
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        if (touchTimeout) clearTimeout(touchTimeout);
        const rect = parent.getBoundingClientRect();
        setDimensions({ w: rect.width, h: rect.height });
        setTouchPos({
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        });
        isHoveredRef.current = true;
        setIsHovered(true);
        parent.setAttribute("data-wave-active", "true");
      }
    };

    const onTouchEnd = () => {
      if (touchTimeout) clearTimeout(touchTimeout);
      touchTimeout = setTimeout(() => {
        isHoveredRef.current = false;
        setIsHovered(false);
        parent.removeAttribute("data-wave-active");
        if (document.activeElement === parent) {
          (parent as HTMLElement).blur();
        }
      }, 550);
    };

    const onClick = () => {
      if (touchTimeout) clearTimeout(touchTimeout);
      touchTimeout = setTimeout(() => {
        isHoveredRef.current = false;
        setIsHovered(false);
        parent.removeAttribute("data-wave-active");
        if (document.activeElement === parent) {
          (parent as HTMLElement).blur();
        }
      }, 550);
    };

    parent.addEventListener("mouseenter", onMouseEnter);
    parent.addEventListener("mousemove", onMouseMove);
    parent.addEventListener("mouseleave", onMouseLeave);
    parent.addEventListener("focus", onFocus, true);
    parent.addEventListener("blur", onBlur, true);
    parent.addEventListener("touchstart", onTouchStart, { passive: true });
    parent.addEventListener("touchend", onTouchEnd, { passive: true });
    parent.addEventListener("click", onClick, { passive: true });

    return () => {
      if (touchTimeout) clearTimeout(touchTimeout);
      parent.removeAttribute("data-wave-active");
      parent.removeEventListener("mouseenter", onMouseEnter);
      parent.removeEventListener("mousemove", onMouseMove);
      parent.removeEventListener("mouseleave", onMouseLeave);
      parent.removeEventListener("focus", onFocus, true);
      parent.removeEventListener("blur", onBlur, true);
      parent.removeEventListener("touchstart", onTouchStart);
      parent.removeEventListener("touchend", onTouchEnd);
      parent.removeEventListener("click", onClick);
    };
  }, []);

  const originX = touchPos ? touchPos.x : dimensions.w / 2;
  const originY = touchPos ? touchPos.y : dimensions.h / 2;

  const dx = Math.max(originX, dimensions.w - originX);
  const dy = Math.max(originY, dimensions.h - originY);
  const maxCornerDist = Math.sqrt(dx * dx + dy * dy);
  const blobSize = Math.max(maxCornerDist * 2.35, 100);

  const isPrimary =
    color === "primary" ||
    (wave2ClassName ? wave2ClassName.includes("bg-primary") && !wave2ClassName.includes("primary-foreground") : false);

  const isPrimaryForeground =
    color === "primary-foreground" ||
    (wave2ClassName ? wave2ClassName.includes("primary-foreground") : false);

  const defaultWave1 = isPrimary
    ? "bg-primary/20"
    : isPrimaryForeground
      ? "bg-primary-foreground/20"
      : "bg-foreground/15";

  const defaultWave2 = isPrimary
    ? "bg-primary/50"
    : isPrimaryForeground
      ? "bg-primary-foreground/50"
      : "bg-foreground/45";

  const defaultWave3 = isPrimary
    ? "bg-primary"
    : isPrimaryForeground
      ? "bg-primary-foreground"
      : "bg-foreground";

  const layer1Class = wave1ClassName || defaultWave1;
  const layer2Class = wave2ClassName && !wave1ClassName ? defaultWave2 : (wave1ClassName || defaultWave2);
  const layer3Class = wave3ClassName || (wave2ClassName && wave2ClassName.startsWith("bg-") ? wave2ClassName : defaultWave3);

  return (
    <span
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none z-0",
        className,
      )}
    >
      <motion.span
        aria-hidden="true"
        className={cn(
          "absolute pointer-events-none",
          layer1Class,
        )}
        style={{
          width: blobSize * 1.06,
          height: blobSize * 1.06,
          left: originX,
          top: originY,
          x: "-50%",
          y: "-50%",
        }}
        initial={false}
        animate={{
          scale: isHovered ? 1 : 0,
          rotate: isHovered ? 230 : 0,
          opacity: isHovered ? 1 : 0,
          borderRadius: isHovered
            ? ["43%", "35%", "46%", "39%", "43%"]
            : "43%",
        }}
        transition={{
          scale: {
            duration: isHovered ? 0.7 : 0.35,
            ease: [0.2, 0.9, 0.3, 1],
          },
          rotate: {
            duration: isHovered ? 0.8 : 0.35,
            ease: "easeOut",
          },
          borderRadius: {
            duration: 0.7,
            ease: "easeInOut",
          },
          opacity: {
            duration: isHovered ? 0.08 : 0.28,
          },
        }}
      />

      <motion.span
        aria-hidden="true"
        className={cn(
          "absolute pointer-events-none",
          layer2Class,
        )}
        style={{
          width: blobSize * 0.98,
          height: blobSize * 0.98,
          left: originX,
          top: originY,
          x: "-50%",
          y: "-50%",
        }}
        initial={false}
        animate={{
          scale: isHovered ? 1 : 0,
          rotate: isHovered ? -170 : 0,
          opacity: isHovered ? 1 : 0,
          borderRadius: isHovered
            ? ["38%", "45%", "36%", "44%", "38%"]
            : "38%",
        }}
        transition={{
          scale: {
            duration: isHovered ? 0.65 : 0.35,
            delay: isHovered ? 0.03 : 0,
            ease: [0.2, 0.9, 0.3, 1],
          },
          rotate: {
            duration: isHovered ? 0.75 : 0.35,
            delay: isHovered ? 0.03 : 0,
            ease: "easeOut",
          },
          borderRadius: {
            duration: 0.65,
            delay: isHovered ? 0.03 : 0,
            ease: "easeInOut",
          },
          opacity: {
            duration: isHovered ? 0.08 : 0.28,
          },
        }}
      />

      <motion.span
        aria-hidden="true"
        className={cn(
          "absolute pointer-events-none",
          layer3Class,
        )}
        style={{
          width: blobSize * 0.92,
          height: blobSize * 0.92,
          left: originX,
          top: originY,
          x: "-50%",
          y: "-50%",
        }}
        initial={false}
        animate={{
          scale: isHovered ? 1 : 0,
          rotate: isHovered ? 250 : 0,
          opacity: isHovered ? 1 : 0,
          borderRadius: isHovered
            ? ["40%", "37%", "43%", "38%", "40%"]
            : "40%",
        }}
        transition={{
          scale: {
            duration: isHovered ? 0.58 : 0.35,
            delay: isHovered ? 0.06 : 0,
            ease: [0.2, 0.9, 0.3, 1],
          },
          rotate: {
            duration: isHovered ? 0.7 : 0.35,
            delay: isHovered ? 0.06 : 0,
            ease: "easeOut",
          },
          borderRadius: {
            duration: 0.58,
            delay: isHovered ? 0.06 : 0,
            ease: "easeInOut",
          },
          opacity: {
            duration: isHovered ? 0.08 : 0.28,
          },
        }}
      />
    </span>
  );
}
