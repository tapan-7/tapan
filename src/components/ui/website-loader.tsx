"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WebsiteLoader() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathRef = useRef<SVGPathElement>(null);
  const percentTextRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const nSpanRef = useRef<SVGTSpanElement>(null);
  const hatFrontRef = useRef<SVGGElement>(null);
  const hatBehindRef = useRef<SVGGElement>(null);
  const shadowRef = useRef<SVGGElement>(null);
  const contactShadowRef = useRef<SVGGElement>(null);
  const trailPathRef = useRef<SVGPathElement>(null);
  const sparklesRef = useRef<SVGGElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const startTime = performance.now();
    const duration = 4400;
    const width = 800;
    const height = 250;

    let targetX = 630;
    let targetY = 104;
    let measuredTarget = false;

    const trail: { x: number; y: number }[] = [];

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
        const liquidTargetY = (height + 35) - (progress / 100) * (height + 60);
        const dampening = progress > 92 ? Math.max(0, (100 - progress) / 8) : 1;

        let d = `M 0 ${height + 40} L 0 ${liquidTargetY}`;
        const step = 10;
        for (let x = 0; x <= width; x += step) {
          const w1 = Math.sin(x * 0.016 + phase) * 9.5 * dampening;
          const w2 = Math.cos(x * 0.027 + phase * 1.25) * 5 * dampening;
          const y = liquidTargetY + w1 + w2;
          d += ` L ${x} ${y.toFixed(2)}`;
        }
        d += ` L ${width} ${height + 40} Z`;
        pathRef.current.setAttribute("d", d);
      }

      if (!measuredTarget && nSpanRef.current && typeof nSpanRef.current.getBBox === "function") {
        try {
          const bbox = nSpanRef.current.getBBox();
          if (bbox && bbox.width > 0 && bbox.height > 0) {
            targetX = bbox.x + bbox.width * 0.52;
            targetY = bbox.y + bbox.height * 0.20;
            measuredTarget = true;
          }
        } catch {
          targetX = 630;
          targetY = 104;
        }
      }

      const cx = 400;
      const cy = 135;

      let x = targetX;
      let y = targetY;
      let z = 0;
      let roll = -12;
      let pitch = 14;
      let yaw = 0;
      let bounce = 0;
      let e = 1;

      if (raw < 0.88) {
        const w = raw / 0.88;

        const phi = w * 2.88 * Math.PI;

        let entryX = 0;
        let entryY = 0;
        if (w < 0.22) {
          const pIn = (0.22 - w) / 0.22;
          const inEase = pIn * pIn * pIn;
          entryX = -650 * inEase;
          entryY = 100 * inEase;
        }

        e = 0;
        if (w > 0.55) {
          const k = (w - 0.55) / 0.45;
          e = k * k * (3 - 2 * k);
        }

        const rx = 350 * (1 - e);
        const ry = 55 * (1 - e);
        const rz = 130 * (1 - e);

        const midX = cx + (targetX - cx) * e;
        const midY = cy + (targetY - cy) * e;

        x = midX - rx * Math.cos(phi) + entryX;
        y = midY - ry * Math.sin(phi) + entryY;
        z = rz * Math.sin(phi);

        const bankFlight = Math.sin(phi) * 18;
        roll = (1 - e) * bankFlight + e * -12;
        pitch = (1 - e) * (14 + Math.cos(phi) * 12) + e * 14;
        yaw = Math.sin(phi) * 0.35 * (1 - e);
      } else {
        const tSettle = (raw - 0.88) / 0.12;
        bounce = Math.sin(tSettle * 2.5 * Math.PI) * Math.exp(-tSettle * 5.2) * 2.5;

        x = targetX;
        y = targetY - bounce;
        z = 0;
        roll = -12 + bounce * 0.4;
        pitch = 14;
        yaw = 0;
      }

      const focal = 600;
      const scale3d = focal / (focal - z);

      const radPitch = (pitch * Math.PI) / 180;
      const viewScaleY = Math.cos(radPitch) * 0.78 + 0.22;
      const squashX = scale3d * (1 - Math.abs(Math.sin(yaw)) * 0.15) * (raw >= 0.88 ? 1 + bounce * 0.015 : 1);
      const scaleY = scale3d * viewScaleY * (raw >= 0.88 ? 1 - bounce * 0.02 : 1);

      const hatTransform = `translate(${x.toFixed(1)}, ${y.toFixed(1)}) rotate(${roll.toFixed(1)}) scale(${squashX.toFixed(3)}, ${scaleY.toFixed(3)})`;

      if (z < 0) {
        if (hatBehindRef.current) {
          hatBehindRef.current.style.opacity = "1";
          hatBehindRef.current.setAttribute("transform", hatTransform);
        }
        if (hatFrontRef.current) {
          hatFrontRef.current.style.opacity = "0";
        }
      } else {
        if (hatBehindRef.current) {
          hatBehindRef.current.style.opacity = "0";
        }
        if (hatFrontRef.current) {
          hatFrontRef.current.style.opacity = "1";
          hatFrontRef.current.setAttribute("transform", hatTransform);
        }
      }

      if (shadowRef.current) {
        const sx = x + z * 0.05;
        const groundY = Math.min(220, y + 20 + Math.max(0, 140 - y) * 0.35);
        const finalShadowY = targetY + 6;
        const sy = (1 - e) * groundY + e * finalShadowY;
        const sScale = (1 - e) * Math.max(0.4, Math.min(1.05, (1 - (groundY - y) * 0.005) * scale3d)) + e * 0.90;
        const sOpacity = (1 - e) * Math.max(0.1, Math.min(0.45, 0.42 - (groundY - y) * 0.003)) + e * 0.50;
        shadowRef.current.setAttribute(
          "transform",
          `translate(${sx.toFixed(1)}, ${sy.toFixed(1)}) scale(${sScale.toFixed(2)})`
        );
        shadowRef.current.style.opacity = sOpacity.toFixed(2);
      }

      if (contactShadowRef.current) {
        if (raw >= 0.84) {
          const cp = Math.min(1, (raw - 0.84) / 0.06);
          const cpEase = cp * cp * (3 - 2 * cp);
          contactShadowRef.current.style.opacity = (cpEase * 0.85).toFixed(2);
          contactShadowRef.current.setAttribute(
            "transform",
            `translate(${targetX.toFixed(1)}, ${(targetY + 1).toFixed(1)}) rotate(${roll.toFixed(1)})`
          );
        } else {
          contactShadowRef.current.style.opacity = "0";
        }
      }

      trail.push({ x, y });
      if (trail.length > 8) trail.shift();

      if (trailPathRef.current) {
        if (raw < 0.86 && trail.length > 1) {
          let d = `M ${trail[0].x.toFixed(1)} ${trail[0].y.toFixed(1)}`;
          for (let i = 1; i < trail.length; i++) {
            d += ` L ${trail[i].x.toFixed(1)} ${trail[i].y.toFixed(1)}`;
          }
          trailPathRef.current.setAttribute("d", d);
          const trailFade = raw < 0.68 ? 1 : Math.max(0, 1 - (raw - 0.68) / 0.18);
          const trailOpacity = 0.75 * trailFade;
          trailPathRef.current.style.opacity = trailOpacity.toFixed(2);
          trailPathRef.current.setAttribute("stroke-width", `${Math.max(2, 3.2 * scale3d).toFixed(1)}`);
        } else {
          trailPathRef.current.style.opacity = "0";
        }
      }

      if (sparklesRef.current) {
        if (raw >= 0.88 && raw <= 0.98) {
          const sp = (raw - 0.88) / 0.10;
          const sparkleOpacity = Math.sin(sp * Math.PI);
          const sparkleScale = 0.6 + sp * 0.8;
          sparklesRef.current.style.opacity = sparkleOpacity.toFixed(2);
          sparklesRef.current.setAttribute(
            "transform",
            `translate(${targetX.toFixed(1)}, ${(targetY - 14).toFixed(1)}) scale(${sparkleScale.toFixed(2)})`
          );
        } else {
          sparklesRef.current.style.opacity = "0";
        }
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
                  <filter id="luffy-blur-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" />
                  </filter>

                  <filter id="luffy-contact-blur" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" />
                  </filter>

                  <radialGradient id="luffy-brim-grad" cx="48%" cy="26%" r="65%">
                    <stop offset="0%" stopColor="#f5c754" />
                    <stop offset="30%" stopColor="#df971b" />
                    <stop offset="68%" stopColor="#c4780a" />
                    <stop offset="90%" stopColor="#9a5205" />
                    <stop offset="100%" stopColor="#753802" />
                  </radialGradient>

                  <radialGradient id="luffy-dome-grad" cx="40%" cy="24%" r="68%">
                    <stop offset="0%" stopColor="#fad46a" />
                    <stop offset="32%" stopColor="#df971b" />
                    <stop offset="72%" stopColor="#b86d08" />
                    <stop offset="100%" stopColor="#824203" />
                  </radialGradient>

                  <linearGradient id="luffy-ribbon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b1111" />
                    <stop offset="18%" stopColor="#c52222" />
                    <stop offset="48%" stopColor="#dc2828" />
                    <stop offset="78%" stopColor="#c52222" />
                    <stop offset="100%" stopColor="#6e0b0b" />
                  </linearGradient>

                  <linearGradient id="luffy-trail-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d97706" stopOpacity="0" />
                    <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.85" />
                  </linearGradient>

                  <clipPath id="tapan-liquid-mask">
                    <path
                      ref={pathRef}
                      d={`M 0 ${height + 40} L 0 ${height + 35} L ${width} ${height + 35} L ${width} ${height + 40} Z`}
                    />
                  </clipPath>

                  <g id="luffy-straw-hat-artwork">
                    <ellipse
                      cx="0"
                      cy="0"
                      rx="44"
                      ry="9"
                      fill="url(#luffy-brim-grad)"
                    />
                    <path
                      d="M -24 -2 C -24 -32, 24 -32, 24 -2 Z"
                      fill="url(#luffy-dome-grad)"
                    />
                    <path
                      d="M -20 -15 C -20 -27, 20 -27, 20 -15"
                      stroke="#8c4402"
                      strokeWidth="0.8"
                      strokeDasharray="2.5 1.5"
                      fill="none"
                      opacity="0.45"
                    />
                    <path
                      d="M -22 -9 C -22 -21, 22 -21, 22 -9"
                      stroke="#8c4402"
                      strokeWidth="0.8"
                      strokeDasharray="2.5 1.5"
                      fill="none"
                      opacity="0.4"
                    />
                    <ellipse
                      cx="-7"
                      cy="-21"
                      rx="8"
                      ry="4"
                      fill="#fae085"
                      opacity="0.4"
                      transform="rotate(-15 -7 -21)"
                    />
                    <path
                      d="M -24.5 -2 C -14 -5, 14 -5, 24.5 -2 L 24.2 -11 C 14 -14, -14 -14, -24.2 -11 Z"
                      fill="url(#luffy-ribbon-grad)"
                    />
                    <path
                      d="M -24.2 -11 C -14 -14, 14 -14, 24.2 -11"
                      stroke="#5c0909"
                      strokeWidth="0.8"
                      fill="none"
                    />
                    <path
                      d="M -24.5 -2 C -14 -5, 14 -5, 24.5 -2"
                      stroke="#5c0909"
                      strokeWidth="0.8"
                      fill="none"
                    />
                    <path
                      d="M -6 -12.5 C -2 -13, 2 -13, 6 -12.5 L 6 -3.5 C 2 -4, -2 -4, -6 -3.5 Z"
                      fill="#e02828"
                      opacity="0.45"
                    />
                    <ellipse
                      cx="0"
                      cy="0"
                      rx="38"
                      ry="7"
                      stroke="#8c4402"
                      strokeWidth="0.75"
                      strokeDasharray="2.5 1.5"
                      fill="none"
                      opacity="0.45"
                    />
                    <ellipse
                      cx="0"
                      cy="0"
                      rx="43"
                      ry="8.5"
                      stroke="#a65d08"
                      strokeWidth="0.75"
                      strokeDasharray="1.5 1"
                      fill="none"
                      opacity="0.6"
                    />
                    <path
                      d="M -42 1 C -28 9, 28 9, 42 1"
                      stroke="#fae085"
                      strokeWidth="1.1"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.75"
                    />
                    <path
                      d="M -16 2 Q 0 14 16 2"
                      stroke="#1f2937"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.8"
                    />
                    <circle cx="0" cy="13" r="1.5" fill="#a65d08" />
                  </g>
                </defs>

                <path
                  ref={trailPathRef}
                  fill="none"
                  stroke="url(#luffy-trail-grad)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  opacity="0"
                />

                <g ref={shadowRef} opacity="0" pointerEvents="none" style={{ mixBlendMode: "multiply" }}>
                  <ellipse
                    cx="0"
                    cy="0"
                    rx="38"
                    ry="10"
                    fill="rgba(15, 12, 10, 0.55)"
                    filter="url(#luffy-blur-shadow)"
                  />
                </g>

                <g ref={hatBehindRef} opacity="0" pointerEvents="none">
                  <use href="#luffy-straw-hat-artwork" />
                </g>

                <text
                  ref={textRef}
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
                  Tapa<tspan ref={nSpanRef}>n</tspan>
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
                    Tapa<tspan>n</tspan>
                  </text>
                </g>

                <g
                  ref={contactShadowRef}
                  opacity="0"
                  pointerEvents="none"
                  style={{ mixBlendMode: "multiply" }}
                >
                  <ellipse
                    cx="0"
                    cy="1"
                    rx="26"
                    ry="4"
                    fill="rgba(0, 0, 0, 0.85)"
                    filter="url(#luffy-contact-blur)"
                  />
                </g>

                <g ref={hatFrontRef} opacity="0" pointerEvents="none">
                  <use href="#luffy-straw-hat-artwork" />
                </g>

                <g ref={sparklesRef} opacity="0" pointerEvents="none">
                  <path
                    d="M 0 -8 L 2 -2 L 8 0 L 2 2 L 0 8 L -2 2 L -8 0 L -2 -2 Z"
                    fill="#df971b"
                    transform="translate(18, -12) scale(0.9)"
                  />
                  <path
                    d="M 0 -7 L 1.5 -1.5 L 7 0 L 1.5 1.5 L 0 7 L -1.5 1.5 L -7 0 L -1.5 -1.5 Z"
                    fill="#f5c754"
                    transform="translate(-20, -10) scale(0.8)"
                  />
                  <path
                    d="M 0 -6 L 1.2 -1.2 L 6 0 L 1.2 1.2 L 0 6 L -1.2 1.2 L -6 0 L -1.2 -1.2 Z"
                    fill="#d97706"
                    transform="translate(26, 6) scale(0.7)"
                  />
                  <path
                    d="M 0 -6 L 1.2 -1.2 L 6 0 L 1.2 1.2 L 0 6 L -1.2 1.2 L -6 0 L -1.2 -1.2 Z"
                    fill="#fad46a"
                    transform="translate(-24, 8) scale(0.7)"
                  />
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
