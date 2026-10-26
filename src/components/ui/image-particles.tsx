"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ImageParticlesProps {
  src: string;
  alt?: string;
  className?: string;
  gap?: number;
  particleSize?: number;
  repulsionRadius?: number;
  repulsionStrength?: number;
  springStiffness?: number;
  damping?: number;
  shockwaveStrength?: number;
  fit?: "contain" | "cover";
  children?: React.ReactNode;
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
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
  strength: number;
  active: boolean;
}

export function ImageParticles({
  src,
  alt = "",
  className,
  gap = 4,
  particleSize = 1.8,
  repulsionRadius = 65,
  repulsionStrength = 0.9,
  springStiffness = 0.09,
  damping = 0.84,
  shockwaveStrength = 16,
  fit = "contain",
  children,
}: ImageParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const particlesRef = useRef<Particle[]>([]);
  const shockwavesRef = useRef<Shockwave[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const animFrameRef = useRef<number | null>(null);

  const initParticles = useCallback(
    (width: number, height: number, img: HTMLImageElement) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = width;
      offscreen.height = height;
      const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;

      const scale = fit === "cover"
        ? Math.max(width / img.naturalWidth, height / img.naturalHeight)
        : Math.min(width / img.naturalWidth, height / img.naturalHeight);
      const drawWidth = Math.round(img.naturalWidth * scale);
      const drawHeight = Math.round(img.naturalHeight * scale);
      const offsetX = Math.round((width - drawWidth) / 2);
      const offsetY = Math.round((height - drawHeight) / 2);

      offCtx.clearRect(0, 0, width, height);
      offCtx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      const imageData = offCtx.getImageData(0, 0, width, height);
      const data = imageData.data;
      const newParticles: Particle[] = [];

      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const px = Math.floor(x);
          const py = Math.floor(y);
          if (px >= width || py >= height) continue;
          const index = (py * width + px) * 4;
          const a = data[index + 3];

          if (a > 30) {
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];
            const color = `rgba(${r},${g},${b},${(a / 255).toFixed(2)})`;

            newParticles.push({
              x: px,
              y: py,
              originX: px,
              originY: py,
              vx: (Math.random() - 0.5) * 1.5,
              vy: (Math.random() - 0.5) * 1.5,
              size: particleSize,
              color,
            });
          }
        }
      }

      particlesRef.current = newParticles;
      setIsLoaded(true);
    },
    [gap, particleSize, fit]
  );

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let destroyed = false;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    const setup = () => {
      if (destroyed) return;
      const rect = container.getBoundingClientRect();
      const width = Math.floor(rect.width);
      const height = Math.floor(rect.height);

      if (width === 0 || height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      initParticles(width, height, img);
    };

    if (img.complete && img.naturalWidth > 0) {
      setup();
    } else {
      img.onload = setup;
    }

    const resizeObserver = new ResizeObserver(() => {
      if (img.complete && img.naturalWidth > 0) {
        setup();
      }
    });

    resizeObserver.observe(container);

    return () => {
      destroyed = true;
      resizeObserver.disconnect();
    };
  }, [src, initParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const mouse = mouseRef.current;
      const particles = particlesRef.current;
      const shockwaves = shockwavesRef.current;

      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        sw.radius += sw.speed;
        if (sw.radius >= sw.maxRadius) {
          shockwaves.splice(s, 1);
        }
      }

      const pLen = particles.length;
      for (let i = 0; i < pLen; i++) {
        const p = particles[i];

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          const repSq = repulsionRadius * repulsionRadius;

          if (distSq < repSq && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / repulsionRadius) * repulsionStrength;
            p.vx += (dx / dist) * force * 12;
            p.vy += (dy / dist) * force * 12;
          }
        }

        for (let s = 0; s < shockwaves.length; s++) {
          const sw = shockwaves[s];
          const sdx = p.x - sw.x;
          const sdy = p.y - sw.y;
          const sDist = Math.sqrt(sdx * sdx + sdy * sdy);
          const diff = Math.abs(sDist - sw.radius);

          if (diff < 22 && sDist > 0) {
            const decay = Math.max(0, 1 - sw.radius / sw.maxRadius);
            const waveForce = (1 - diff / 22) * decay * sw.strength;
            p.vx += (sdx / sDist) * waveForce;
            p.vy += (sdy / sDist) * waveForce;
          }
        }

        const homeDx = p.originX - p.x;
        const homeDy = p.originY - p.y;
        p.vx += homeDx * springStiffness;
        p.vy += homeDy * springStiffness;

        p.vx *= damping;
        p.vy *= damping;

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [repulsionRadius, repulsionStrength, springStiffness, damping]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  const handlePointerLeave = () => {
    mouseRef.current = { x: -9999, y: -9999, active: false };
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const maxRadius = Math.max(rect.width, rect.height) * 0.9;

    shockwavesRef.current.push({
      x,
      y,
      radius: 0,
      maxRadius,
      speed: 7,
      strength: shockwaveStrength,
      active: true,
    });
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden cursor-crosshair select-none touch-none",
        className
      )}
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-contain transition-opacity duration-700 pointer-events-none absolute inset-0",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
      />
      <canvas
        ref={canvasRef}
        className={cn(
          "absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      />
      {children && (
        <div className="relative z-10 pointer-events-none w-full h-full">
          {children}
        </div>
      )}
    </div>
  );
}
