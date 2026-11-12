"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import portfolioData from "@/constant/portfolio-data.json";
import { LiquidWave } from "@/components/ui/liquid-wave";

export function Hero() {
  const { profile, hero } = portfolioData;
  const desktopAreaRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [textCursorPos, setTextCursorPos] = useState({ x: 0, y: 0 });

  const handleDesktopMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    if (textRef.current) {
      const textRect = textRef.current.getBoundingClientRect();
      setTextCursorPos({
        x: e.clientX - textRect.left,
        y: e.clientY - textRect.top,
      });
      setIsTextHovered(true);
    }

    if (portraitRef.current) {
      const pRect = portraitRef.current.getBoundingClientRect();
      const inPortrait =
        e.clientX >= pRect.left &&
        e.clientX <= pRect.right &&
        e.clientY >= pRect.top &&
        e.clientY <= pRect.bottom;

      if (inPortrait) {
        setIsHovered(true);
        setCursorPos({
          x: e.clientX - pRect.left,
          y: e.clientY - pRect.top,
        });
      } else {
        setIsHovered(false);
      }
    }
  };

  const handleDesktopMouseLeave = () => {
    setIsHovered(false);
    setIsTextHovered(false);
  };

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
      onMouseMove={handleDesktopMouseMove}
      onMouseLeave={handleDesktopMouseLeave}
      className="relative isolate min-h-screen min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 pb-6 sm:pb-8 md:pb-10"
    >
      <div className="flex md:hidden flex-col items-center w-full px-4 pt-1 sm:pt-3 z-30 pointer-events-auto">
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

        <div className="flex items-center gap-2.5 mt-3.5">
          <a
            href={hero?.cta?.projectsHref || "#projects"}
            onClick={(e) =>
              handleScrollTo(e, hero?.cta?.projectsHref || "#projects")
            }
            className="group relative overflow-hidden inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background text-xs font-semibold shadow-md cursor-pointer"
          >
            <LiquidWave color="primary" />
            <span className="relative z-10 flex items-center gap-1.5 group-hover:text-primary-foreground group-data-[wave-active=true]:text-primary-foreground transition-colors duration-200">
              <span>{hero?.cta?.projects || "View Projects"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
          <a
            href={hero?.cta?.resumeHref || "/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-border/80 bg-card/90 backdrop-blur-md text-foreground text-xs font-medium cursor-pointer"
          >
            <LiquidWave />
            <span className="relative z-10 flex items-center gap-1.5 group-hover:text-background group-data-[wave-active=true]:text-background transition-colors duration-200">
              <FileText className="w-3.5 h-3.5" />
              <span>{hero?.cta?.resume || "Resume"}</span>
            </span>
          </a>
        </div>

        <div className="flex items-center gap-2.5 mt-3">
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
              className="group relative overflow-hidden flex items-center justify-center w-8 h-8 rounded-full border border-border/80 bg-card/90 backdrop-blur-md text-muted-foreground active:scale-95 transition-all"
            >
              <LiquidWave />
              <span className="relative z-10 flex items-center justify-center">
                {item.icon ? (
                  <item.icon className="w-3.5 h-3.5" />
                ) : (
                  <span className="text-[9px] font-mono font-bold">
                    {item.label}
                  </span>
                )}
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="flex md:hidden absolute inset-0 items-center justify-center z-10 pointer-events-none select-none overflow-hidden">
        <h1 className="text-[25vw] font-black uppercase tracking-[0.08em] leading-none text-foreground/80 font-header text-center whitespace-nowrap">
          {hero?.name || "TAPAN"}
        </h1>
      </div>

      <div className="flex md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none items-end justify-center w-full h-[52vh] max-h-[480px]">
        <motion.div
          initial={{ y: "25%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full flex items-end justify-center select-none"
        >
          <Image
            src="/profile-outline.png"
            alt={profile.name}
            width={800}
            height={800}
            priority
            className="h-full w-auto aspect-square object-contain object-bottom filter grayscale contrast-[1.08] select-none pointer-events-none"
          />
        </motion.div>
      </div>

      <div
        ref={desktopAreaRef}
        onMouseMove={handleDesktopMouseMove}
        onMouseLeave={handleDesktopMouseLeave}
        className="hidden md:flex absolute inset-0 items-center justify-center overflow-hidden pointer-events-auto cursor-default"
      >
        <div
          ref={textRef}
          className="absolute inset-0 z-10 flex items-center justify-center select-none pointer-events-none px-4 overflow-hidden"
        >
          <h1 className="text-[14vw] xl:text-[15vw] font-black uppercase tracking-[0.14em] leading-none whitespace-nowrap font-header text-center select-none text-foreground transition-colors duration-300">
            {hero?.name || "TAPAN"}
          </h1>

          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
            style={{
              opacity: isTextHovered ? 1 : 0,
              WebkitMaskImage: `radial-gradient(circle 200px at ${textCursorPos.x}px ${textCursorPos.y}px, black 35%, transparent 100%)`,
              maskImage: `radial-gradient(circle 200px at ${textCursorPos.x}px ${textCursorPos.y}px, black 35%, transparent 100%)`,
            }}
          >
            <h1 className="text-[14vw] xl:text-[15vw] font-black uppercase tracking-[0.14em] leading-none whitespace-nowrap font-header text-center select-none text-primary drop-shadow-[0_0_50px_hsl(var(--primary)/0.5)]">
              {hero?.name || "TAPAN"}
            </h1>
          </div>
        </div>

        <div
          ref={portraitRef}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-end justify-center h-full w-auto select-none"
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
                WebkitMaskImage: `radial-gradient(circle 200px at ${cursorPos.x}px ${cursorPos.y}px, black 35%, transparent 100%)`,
                maskImage: `radial-gradient(circle 200px at ${cursorPos.x}px ${cursorPos.y}px, black 35%, transparent 100%)`,
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
          </motion.div>
        </div>
      </div>

      <div className="hidden md:flex relative z-30 w-full mt-auto pb-6 sm:pb-8 md:pb-10 pointer-events-none">
        <div className="w-full px-6 sm:px-10 md:px-12 lg:px-16 flex items-end justify-between pointer-events-none">
          <div className="flex flex-col gap-3 text-muted-foreground pointer-events-auto">
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

          <div className="flex flex-col items-end text-right pointer-events-auto">
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
                className="group relative overflow-hidden inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white text-xs sm:text-sm font-semibold shadow-md cursor-pointer"
              >
                <LiquidWave />
                <span className="relative z-10 flex items-center gap-1.5 group-hover:text-background group-data-[wave-active=true]:text-background transition-colors duration-200">
                  <span>{hero?.cta?.projects || "View Projects"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
              <a
                href={hero?.cta?.resumeHref || "/resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-border/80 bg-card/80 text-foreground text-xs sm:text-sm font-medium cursor-pointer"
              >
                <LiquidWave />
                <span className="relative z-10 flex items-center gap-1.5 group-hover:text-background group-data-[wave-active=true]:text-background transition-colors duration-200">
                  <FileText className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">
                    {hero?.cta?.resume || "Resume"}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
