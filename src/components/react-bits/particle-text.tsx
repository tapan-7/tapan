"use client";

import React, { useRef, useEffect } from "react";
import { MotionValue } from "framer-motion";
import { useTheme } from "next-themes";

interface ParticleTextProps {
  line1: string;
  line2: string;
  xLeft?: MotionValue<number>;
  xRight?: MotionValue<number>;
  opacity?: MotionValue<number>;
}

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  lineIndex: number;
}

export function ParticleText({
  line1,
  line2,
  xLeft,
  xRight,
  opacity,
}: ParticleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, radius: 45 };

    const checkIsLight = () => {
      if (typeof document === "undefined") return false;
      return (
        document.documentElement.classList.contains("light") ||
        (!document.documentElement.classList.contains("dark") &&
          resolvedTheme === "light")
      );
    };

    const getPalettes = (isLight: boolean) => {
      if (isLight) {
        return {
          line1: ["hsl(240, 10%, 4%)", "hsl(240, 10%, 15%)"],
          line2: [
            "hsl(263, 75%, 45%)",
            "hsl(255, 80%, 50%)",
            "hsl(190, 90%, 35%)",
          ],
        };
      }
      return {
        line1: ["hsl(240, 5%, 98%)", "hsl(240, 5%, 90%)"],
        line2: [
          "hsl(255, 92%, 78%)",
          "hsl(263, 75%, 68%)",
          "hsl(180, 85%, 65%)",
        ],
      };
    };

    const updateColors = (isLight: boolean) => {
      const palettes = getPalettes(isLight);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.color =
          p.lineIndex === 0
            ? palettes.line1[Math.floor(Math.random() * palettes.line1.length)]
            : palettes.line2[Math.floor(Math.random() * palettes.line2.length)];
      }
    };

    const initParticles = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      const width = Math.floor(rect.width);
      const fontSize = Math.min(Math.max(Math.floor(width / 11), 34), 84);
      const height = Math.floor(fontSize * 2.5);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const font = `900 ${fontSize}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;

      const offscreen = document.createElement("canvas");
      offscreen.width = width;
      offscreen.height = height;
      const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;

      offCtx.font = font;
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";

      const centerY = Math.floor(height / 2);
      const y1 = Math.floor(centerY - fontSize * 0.55);
      const y2 = Math.floor(centerY + fontSize * 0.55);
      const centerX = Math.floor(width / 2);

      offCtx.fillStyle = "#ffffff";
      offCtx.fillText(line1, centerX, y1);
      offCtx.fillText(line2, centerX, y2);

      const imgData = offCtx.getImageData(0, 0, width, height);
      const data = imgData.data;

      const isLight = checkIsLight();
      const palettes = getPalettes(isLight);

      particles = [];
      const step = 3;

      for (let y = 0; y < height; y += step) {
        const rowOffset = y * width;
        for (let x = 0; x < width; x += step) {
          const index = (rowOffset + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 120) {
            const lineIndex = y < centerY ? 0 : 1;
            const color =
              lineIndex === 0
                ? palettes.line1[
                    Math.floor(Math.random() * palettes.line1.length)
                  ]
                : palettes.line2[
                    Math.floor(Math.random() * palettes.line2.length)
                  ];

            particles.push({
              x: x + (Math.random() - 0.5) * 20,
              y: y + (Math.random() - 0.5) * 20,
              originX: x,
              originY: y,
              vx: 0,
              vy: 0,
              size: Math.random() * 1.4 + 1.2,
              color,
              lineIndex,
            });
          }
        }
      }
    };

    initParticles();

    const observer = new MutationObserver(() => {
      updateColors(checkIsLight());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const handleResize = () => {
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    const render = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.floor(canvas.width / dpr);
      const height = Math.floor(canvas.height / dpr);

      ctx.clearRect(0, 0, width, height);

      time += 0.02;

      const currentXLeft = xLeft ? xLeft.get() : 0;
      const currentXRight = xRight ? xRight.get() : 0;
      const currentOpacity = opacity ? opacity.get() : 1;

      ctx.globalAlpha = Math.max(0, Math.min(1, currentOpacity));

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const splitX = p.lineIndex === 0 ? currentXLeft : currentXRight;
        const targetX = p.originX + splitX;
        const targetY = p.originY;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 6;
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force;
          p.vy -= Math.sin(angle) * force;
        }

        const floatY = Math.sin(time + p.originX * 0.05) * 0.35;

        p.vx += (targetX - p.x) * 0.08;
        p.vy += (targetY + floatY - p.y) * 0.08;

        p.vx *= 0.84;
        p.vy *= 0.84;

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [line1, line2, xLeft, xRight, opacity, resolvedTheme]);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto my-2">
      <h1 className="sr-only">
        {line1} {line2}
      </h1>
      <canvas
        ref={canvasRef}
        className="block mx-auto pointer-events-auto cursor-default will-change-transform"
      />
    </div>
  );
}
