"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import portfolioData from "@/constant/portfolio-data.json";
import { LiquidWave } from "@/components/ui/liquid-wave";

export function Hero() {
  const { profile, hero } = portfolioData;
  const portraitRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const socialLinks = [
    { name: "GitHub", href: profile.github, icon: Github },
    { name: "LinkedIn", href: profile.linkedin, icon: Linkedin },
    ...(profile.twitter
      ? [{ name: "Twitter", href: profile.twitter, icon: Twitter }]
      : []),
    { name: "Email", href: `mailto:${profile.email}`, icon: Mail },
    ...(profile.devto
      ? [{ name: "DEV", href: profile.devto, label: "DEV" }]
      : []),
  ];

  const updateCursorPosition = (clientX: number, clientY: number) => {
    if (!portraitRef.current) return;
    const rect = portraitRef.current.getBoundingClientRect();
    setCursorPos({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updateCursorPosition(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 0) return;
    updateCursorPosition(e.touches[0].clientX, e.touches[0].clientY);
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsHovered(false), 600);
  };

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative isolate min-h-screen min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 pb-6 sm:pb-8 md:pb-10"
    >
      <div className="flex md:hidden flex-col items-center justify-between w-full h-[calc(100dvh-5.5rem)] min-h-[580px] px-4 pt-2 pb-6 z-20 pointer-events-auto">
        <div className="flex flex-col items-center text-center">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary mb-1">
            {hero?.subRole || "Software Engineer"}
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {hero?.role || "Full-Stack Developer"}
          </h2>
          {hero?.techStack && (
            <p className="text-[11px] font-mono text-muted-foreground mt-1">
              {hero?.techStack}
            </p>
          )}
        </div>

        <div className="relative w-full flex-1 flex items-center justify-center my-3 max-h-[380px]">
          <h1 className="absolute inset-0 flex items-center justify-center text-[23vw] font-black uppercase tracking-[0.08em] leading-none text-foreground/90 select-none z-10 pointer-events-none">
            {hero?.name || "TAPAN"}
          </h1>

          <motion.div
            initial={{ y: "40%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 flex items-end justify-center h-full w-full max-h-[340px]"
          >
            <Image
              src="/profile-outline.png"
              alt={profile.name}
              width={800}
              height={800}
              priority
              className="h-full w-auto max-h-[340px] aspect-square object-contain object-bottom filter grayscale contrast-[1.08] pointer-events-none"
            />
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-3.5 w-full">
          <div className="flex items-center gap-2.5">
            <a
              href={hero?.cta?.projectsHref || "#projects"}
              onClick={(e) =>
                handleScrollTo(e, hero?.cta?.projectsHref || "#projects")
              }
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-foreground text-background text-xs font-semibold shadow-md active:scale-95 transition-all"
            >
              <span>{hero?.cta?.projects || "View Projects"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={hero?.cta?.resumeHref || "/resume.pdf"}
              download
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-border/80 bg-card/90 backdrop-blur-md text-foreground text-xs font-medium active:scale-95 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{hero?.cta?.resume || "Resume"}</span>
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            {socialLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  item.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={item.name}
                whileTap={{ scale: 0.92 }}
                className="group relative overflow-hidden flex items-center justify-center w-9 h-9 rounded-full border border-border/80 bg-card/90 backdrop-blur-md text-muted-foreground active:scale-95 transition-all"
              >
                <LiquidWave />
                <span className="relative z-10 flex items-center justify-center">
                  {item.icon ? (
                    <item.icon className="w-4 h-4" />
                  ) : (
                    <span className="text-[10px] font-mono font-bold">
                      {item.label}
                    </span>
                  )}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute inset-0 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 flex items-center justify-center select-none pointer-events-none px-4">
          <h1 className="text-[14vw] xl:text-[15vw] font-black uppercase tracking-[0.14em] leading-none whitespace-nowrap font-header text-center select-none text-foreground transition-colors duration-300">
            {hero?.name || "TAPAN"}
          </h1>
        </div>

        <div
          ref={portraitRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex items-end justify-center h-full w-auto cursor-pointer"
        >
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}
            className="relative h-full flex items-end justify-center select-none"
          >
            <Image
              src="/profile-outline.png"
              alt={profile.name}
              width={800}
              height={800}
              priority
              className="h-full w-auto object-contain object-bottom filter grayscale contrast-[1.08] select-none pointer-events-none"
            />

            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-200"
              style={{
                opacity: isHovered ? 1 : 0,
                WebkitMaskImage: `radial-gradient(circle 140px at ${cursorPos.x}px ${cursorPos.y}px, black 30%, transparent 100%)`,
                maskImage: `radial-gradient(circle 140px at ${cursorPos.x}px ${cursorPos.y}px, black 30%, transparent 100%)`,
              }}
            >
              <Image
                src="/profile-outline.png"
                alt={profile.name}
                width={800}
                height={800}
                priority
                className="h-full w-auto object-contain object-bottom select-none pointer-events-none"
              />
            </div>

            {isHovered && (
              <div
                className="absolute pointer-events-none rounded-full blur-[40px] transition-opacity duration-300"
                style={{
                  left: cursorPos.x - 90,
                  top: cursorPos.y - 90,
                  width: 180,
                  height: 180,
                  background:
                    "radial-gradient(circle, rgba(168,85,247,0.45) 0%, rgba(249,115,22,0.25) 50%, transparent 70%)",
                  mixBlendMode: "screen",
                }}
              />
            )}
          </motion.div>
        </div>
      </div>

      <div className="hidden md:flex relative z-30 w-full mt-auto pb-6 sm:pb-8 md:pb-10 pointer-events-none">
        <div className="w-full px-6 sm:px-10 md:px-12 lg:px-16 flex items-end justify-between pointer-events-auto">
          <div className="flex flex-col gap-3 text-muted-foreground">
            {socialLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  item.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={item.name}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.94 }}
                className="group relative overflow-hidden flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-border/80 text-muted-foreground transition-all duration-300 cursor-pointer"
              >
                <LiquidWave />
                <span className="relative z-10 flex items-center justify-center group-hover:text-background group-data-[wave-active=true]:text-background transition-colors duration-200">
                  {item.icon ? (
                    <item.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-200 group-hover:scale-110" />
                  ) : (
                    <span className="text-[10px] font-mono font-bold transition-transform duration-200 group-hover:scale-110">
                      {item.label}
                    </span>
                  )}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col items-end text-right">
            <div className="space-y-0.5 sm:space-y-1">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground leading-[1.08]">
                {hero?.role}
              </p>
              {hero?.subRole && (
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-foreground/80 leading-[1.08]">
                  {hero?.subRole}
                </p>
              )}
            </div>

            {hero?.techStack && (
              <p className="text-xs sm:text-sm font-mono text-muted-foreground mt-3 sm:mt-4 hidden sm:block">
                {hero?.techStack}
              </p>
            )}

            <div className="flex items-center gap-2.5 mt-4 sm:mt-5">
              <a
                href={hero?.cta?.projectsHref || "#projects"}
                onClick={(e) =>
                  handleScrollTo(e, hero?.cta?.projectsHref || "#projects")
                }
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background text-xs sm:text-sm font-medium hover:scale-105 active:scale-95 transition-all duration-200 shadow-md group cursor-pointer"
              >
                <span>{hero?.cta?.projects || "View Projects"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={hero?.cta?.resumeHref || "/resume.pdf"}
                download
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-border/80 bg-card/80 text-muted-foreground hover:text-foreground hover:border-foreground/30 text-xs sm:text-sm font-medium hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">
                  {hero?.cta?.resume || "Resume"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
