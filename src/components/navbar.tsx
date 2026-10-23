"use client";

import React, { useEffect, useState, useId } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portfolioData from "@/constant/portfolio-data.json";
import { AnimatedThemeToggler } from "./animated-theme-toggler";

interface NavPreviewItem {
  id: string;
  num: string;
  name: string;
  href: string;
  tag: string;
}

const MENU_ITEMS: NavPreviewItem[] = [
  {
    id: "about",
    num: "01",
    name: "About",
    href: "#about",
    tag: "Biography",
  },
  {
    id: "experience",
    num: "02",
    name: "Experience",
    href: "#experience",
    tag: "HyScaler",
  },
  {
    id: "projects",
    num: "03",
    name: "Projects",
    href: "#projects",
    tag: "BingeBox",
  },
  {
    id: "skills",
    num: "04",
    name: "Skills",
    href: "#skills",
    tag: "Full-Stack",
  },
  {
    id: "writing",
    num: "05",
    name: "Writing",
    href: "#writing",
    tag: "Dev.to",
  },
  {
    id: "contact",
    num: "06",
    name: "Contact",
    href: "#contact",
    tag: "Direct",
  },
];

const SKILL_TRAIL = [
  { name: "React", src: "/icons/react.svg" },
  { name: "Next.js", src: "/icons/nextjs.svg", invertDark: true },
  { name: "TypeScript", src: "/icons/typescript.svg" },
  { name: "NestJS", src: "/icons/nestjs.svg" },
  { name: "PostgreSQL", src: "/icons/postgresql.svg" },
  { name: "Docker", src: "/icons/docker.svg" },
  { name: "Redis", src: "/icons/redis.svg" },
];

function AboutCard() {
  return (
    <div className="relative w-[300px] sm:w-[340px] h-[380px] sm:h-[420px] rounded-2xl overflow-hidden bg-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] select-none">
      <Image
        src="/profile.jpeg"
        alt={portfolioData.profile.name}
        fill
        sizes="340px"
        className="object-cover object-top"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-5 left-5 right-5 text-white">
        <h3 className="text-2xl font-bold tracking-tight text-white leading-tight">
          {portfolioData.profile.name}
        </h3>
        <p className="text-xs font-mono text-white/80 mt-1">
          {portfolioData.profile.email}
        </p>
      </div>
    </div>
  );
}

function ExperienceCard() {
  return (
    <div className="relative w-[300px] sm:w-[340px] h-[380px] sm:h-[420px] rounded-2xl overflow-hidden bg-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] select-none flex flex-col justify-end">
      <Image
        src="/hyscaler-banner.webp"
        alt="HyScaler"
        fill
        sizes="340px"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      <div className="relative z-10 p-5 text-white">
        <h3 className="text-2xl font-bold tracking-tight text-white leading-tight">
          HyScaler
        </h3>
        <p className="text-xs font-mono text-white/80 mt-1">
          Nettantra Technologies
        </p>
      </div>
    </div>
  );
}

function ProjectsCard() {
  return (
    <div className="relative w-[300px] sm:w-[340px] h-[380px] sm:h-[420px] rounded-2xl overflow-hidden bg-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] select-none flex flex-col justify-end">
      <Image
        src="/projects/bingebox.png"
        alt="BingeBox"
        fill
        sizes="340px"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 p-5 text-white">
        <h3 className="text-2xl font-bold tracking-tight text-white leading-tight">
          BingeBox
        </h3>
      </div>
    </div>
  );
}

function WritingCard() {
  const blog = portfolioData.blogs[0];
  return (
    <div className="relative w-[300px] sm:w-[340px] h-[380px] sm:h-[420px] rounded-2xl overflow-hidden bg-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] select-none flex flex-col justify-end">
      <Image
        src={blog.image}
        alt={blog.title}
        fill
        sizes="340px"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      <div className="relative z-10 p-5 text-white">
        <h3 className="text-xl font-bold tracking-tight text-white leading-snug">
          {blog.title}
        </h3>
      </div>
    </div>
  );
}

function ContactCard() {
  return (
    <div className="relative w-[300px] sm:w-[340px] h-[380px] sm:h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 via-neutral-900 to-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] select-none flex flex-col justify-end p-6 text-white border border-white/10">
      <div>
        <h3 className="text-2xl font-bold tracking-tight text-white leading-tight">
          Get In Touch
        </h3>
        <p className="text-sm font-mono text-emerald-300 mt-2 select-all break-all">
          {portfolioData.profile.email}
        </p>
      </div>
    </div>
  );
}

function DynamicCardPreview({ hoveredId }: { hoveredId: string }) {
  if (hoveredId === "experience") return <ExperienceCard />;
  if (hoveredId === "projects") return <ProjectsCard />;
  if (hoveredId === "writing") return <WritingCard />;
  if (hoveredId === "contact") return <ContactCard />;
  return <AboutCard />;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const navDialogId = useId();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { stiffness: 320, damping: 28, mass: 0.5 });
  const cursorY = useSpring(mouseY, { stiffness: 320, damping: 28, mass: 0.5 });

  const cardRotateX = useTransform(mouseY, (val) => {
    if (typeof window === "undefined") return 0;
    const center = window.innerHeight / 2;
    return -((val - center) / center) * 10;
  });
  const cardRotateY = useTransform(mouseX, (val) => {
    if (typeof window === "undefined") return 0;
    const center = window.innerWidth / 2;
    return ((val - center) / center) * 12;
  });
  const smoothRotateX = useSpring(cardRotateX, { stiffness: 200, damping: 25 });
  const smoothRotateY = useSpring(cardRotateY, { stiffness: 200, damping: 25 });

  const trailOffsets = [-150, -100, -50, 0, 50, 100, 150];
  const targetX0 = useTransform(mouseX, (x) => x + trailOffsets[0]);
  const targetX1 = useTransform(mouseX, (x) => x + trailOffsets[1]);
  const targetX2 = useTransform(mouseX, (x) => x + trailOffsets[2]);
  const targetX3 = useTransform(mouseX, (x) => x + trailOffsets[3]);
  const targetX4 = useTransform(mouseX, (x) => x + trailOffsets[4]);
  const targetX5 = useTransform(mouseX, (x) => x + trailOffsets[5]);
  const targetX6 = useTransform(mouseX, (x) => x + trailOffsets[6]);

  const targetY0 = useTransform(mouseY, (y) => y - 36);
  const targetY1 = useTransform(mouseY, (y) => y - 36);
  const targetY2 = useTransform(mouseY, (y) => y - 36);
  const targetY3 = useTransform(mouseY, (y) => y - 36);
  const targetY4 = useTransform(mouseY, (y) => y - 36);
  const targetY5 = useTransform(mouseY, (y) => y - 36);
  const targetY6 = useTransform(mouseY, (y) => y - 36);

  const springX0 = useSpring(targetX0, { stiffness: 450, damping: 28, mass: 0.4 });
  const springX1 = useSpring(targetX1, { stiffness: 370, damping: 26, mass: 0.5 });
  const springX2 = useSpring(targetX2, { stiffness: 300, damping: 24, mass: 0.6 });
  const springX3 = useSpring(targetX3, { stiffness: 240, damping: 22, mass: 0.7 });
  const springX4 = useSpring(targetX4, { stiffness: 180, damping: 20, mass: 0.8 });
  const springX5 = useSpring(targetX5, { stiffness: 130, damping: 18, mass: 0.9 });
  const springX6 = useSpring(targetX6, { stiffness: 90, damping: 16, mass: 1.0 });

  const springY0 = useSpring(targetY0, { stiffness: 450, damping: 28, mass: 0.4 });
  const springY1 = useSpring(targetY1, { stiffness: 370, damping: 26, mass: 0.5 });
  const springY2 = useSpring(targetY2, { stiffness: 300, damping: 24, mass: 0.6 });
  const springY3 = useSpring(targetY3, { stiffness: 240, damping: 22, mass: 0.7 });
  const springY4 = useSpring(targetY4, { stiffness: 180, damping: 20, mass: 0.8 });
  const springY5 = useSpring(targetY5, { stiffness: 130, damping: 18, mass: 0.9 });
  const springY6 = useSpring(targetY6, { stiffness: 90, damping: 16, mass: 1.0 });

  const trailSprings = [
    { x: springX0, y: springY0 },
    { x: springX1, y: springY1 },
    { x: springX2, y: springY2 },
    { x: springX3, y: springY3 },
    { x: springX4, y: springY4 },
    { x: springX5, y: springY5 },
    { x: springX6, y: springY6 },
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    }
  }, [isOpen, mouseX, mouseY]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "experience",
        "projects",
        "skills",
        "writing",
        "contact",
      ];
      const scrollPosition = window.scrollY + 260;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavigate = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsOpen(false);
      setIsHovering(false);
      setHoveredId(null);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 160);
    } else {
      setIsOpen(false);
      setIsHovering(false);
      setHoveredId(null);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[70] pointer-events-none">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-5 sm:py-7 flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="pointer-events-auto text-base sm:text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors flex items-center gap-1 group hover:bg-background px-4 py-2 rounded-full"
          >
            <span className="text-primary font-mono text-sm group-hover:-translate-x-0.5 transition-transform">
              &lt;
            </span>
            <span>tapan</span>
            <span className="text-primary font-mono text-sm group-hover:translate-x-0.5 transition-transform">
              /&gt;
            </span>
          </Link>

          <div className="pointer-events-auto flex items-center gap-3">
            <AnimatedThemeToggler />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              aria-controls={navDialogId}
              className="nav-ham relative overflow-hidden w-12 h-12 rounded-full border border-border/80 flex flex-col items-center justify-center transition-all duration-300 group hover:scale-105 active:scale-95 cursor-pointer hover:border-foreground/30"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                <span className="absolute -left-1/2 top-full w-[200%] h-[200%] rounded-[42%] bg-primary/25 transition-all duration-700 ease-out group-hover:-top-1/2 group-hover:rotate-180" />
                <span className="absolute -left-1/2 top-full w-[200%] h-[200%] rounded-[40%] bg-foreground transition-all duration-500 ease-out delay-75 group-hover:-top-1/2 group-hover:rotate-[240deg]" />
              </span>

              <div className="relative z-10 flex flex-col items-center justify-center gap-1.5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: [0.65, 0.05, 0, 1] }}
                  className="w-5 h-[2px] bg-foreground group-hover:bg-background transition-colors duration-300 origin-center block rounded-full"
                />
                <motion.span
                  animate={
                    isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }
                  }
                  transition={{ duration: 0.15 }}
                  className="w-5 h-[2px] bg-foreground group-hover:bg-background transition-colors duration-300 origin-center block rounded-full"
                />
                <motion.span
                  animate={
                    isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.25, ease: [0.65, 0.05, 0, 1] }}
                  className="w-5 h-[2px] bg-foreground group-hover:bg-background transition-colors duration-300 origin-center block rounded-full"
                />
              </div>
            </button>
          </div>
        </div>

        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
          style={{ scaleX }}
        />
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={navDialogId}
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
            onMouseMove={(e) => {
              mouseX.set(e.clientX);
              mouseY.set(e.clientY);
            }}
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.65, 0.05, 0, 1] }}
            className="fixed inset-0 z-[65] bg-background/95 backdrop-blur-2xl overflow-y-auto flex flex-col justify-between p-6 sm:p-10 md:p-14 pt-24 sm:pt-28"
          >
            <div className="w-full max-w-4xl mx-auto my-auto flex flex-col items-center justify-center">
              <nav
                onMouseLeave={() => {
                  setIsHovering(false);
                  setHoveredId(null);
                }}
                className="w-full flex flex-col space-y-1.5 sm:space-y-2 select-none"
              >
                {MENU_ITEMS.map((item, index) => {
                  const isHovered = hoveredId === item.id;
                  const isActive = activeSection === item.id;

                  return (
                    <motion.div
                      key={item.id}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, y: 15 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: shouldReduceMotion ? 0 : 0.04 * index,
                        ease: [0.65, 0.05, 0, 1],
                      }}
                      className="relative"
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleNavigate(e, item.href)}
                        onMouseEnter={(e) => {
                          mouseX.set(e.clientX);
                          mouseY.set(e.clientY);
                          setIsHovering(true);
                          setHoveredId(item.id);
                        }}
                        onFocus={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          mouseX.set(rect.left + rect.width / 2);
                          mouseY.set(rect.top + rect.height / 2);
                          setIsHovering(true);
                          setHoveredId(item.id);
                        }}
                        className={`group relative flex items-center justify-between w-full px-5 sm:px-8 py-3.5 sm:py-5 rounded-2xl transition-colors duration-150 ${
                          isHovered
                            ? "bg-secondary text-foreground"
                            : isActive
                              ? "bg-secondary/50 text-foreground"
                              : "text-foreground/80 hover:bg-secondary/30 hover:text-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-4 sm:gap-8 min-w-0">
                          <span
                            className={`text-sm sm:text-base font-mono font-bold tracking-wider transition-colors ${
                              isHovered || isActive ? "text-primary" : "text-muted-foreground"
                            }`}
                          >
                            {item.num}
                          </span>

                          <span
                            className={`text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight transition-colors ${
                              isHovered || isActive
                                ? "text-foreground"
                                : "text-foreground/80"
                            }`}
                          >
                            {item.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-4">
                          <span
                            className={`hidden sm:inline-block text-xs font-mono tracking-wider transition-colors uppercase ${
                              isHovered || isActive ? "text-primary font-semibold" : "text-muted-foreground"
                            }`}
                          >
                            {item.tag}
                          </span>

                          <ArrowUpRight
                            className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                              isHovered
                                ? "text-primary opacity-100"
                                : "text-muted-foreground opacity-30"
                            }`}
                          />
                        </div>
                      </a>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 15 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: shouldReduceMotion ? 0 : 0.04 * MENU_ITEMS.length,
                  }}
                  className="pt-6 border-t border-border/40 mt-4 flex flex-wrap items-center justify-between gap-6 px-4"
                >
                  <Link
                    href="/resume"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors group"
                  >
                    <span>Resume</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>

                  <a
                    href="#contact"
                    onClick={(e) => handleNavigate(e, "#contact")}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary hover:underline"
                  >
                    <span>Direct Contact &rarr;</span>
                  </a>
                </motion.div>
              </nav>
            </div>

            <div className="container max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/40 text-xs font-mono text-muted-foreground">
              <div className="flex flex-wrap items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-foreground font-medium">
                  Available for SDE Roles
                </span>
                <span className="text-border">•</span>
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {portfolioData.profile.email}
                </a>
              </div>

              <div className="flex items-center gap-5">
                <a
                  href={portfolioData.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={portfolioData.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://dev.to/tapan-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Dev.to
                </a>
                <a
                  href={portfolioData.profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>

            <AnimatePresence>
              {isHovering && hoveredId === "skills" && (
                <div className="hidden md:block pointer-events-none">
                  {SKILL_TRAIL.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      style={{
                        position: "fixed",
                        left: trailSprings[idx].x,
                        top: trailSprings[idx].y,
                        transform: "translate(-50%, -50%)",
                      }}
                      initial={{ opacity: 0, scale: 0, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0, y: -15 }}
                      transition={{ duration: 0.18 }}
                      className="pointer-events-none z-[80] flex flex-col items-center"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-card/95 border border-border/80 shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl flex items-center justify-center p-3">
                        <Image
                          src={skill.src}
                          alt={skill.name}
                          width={28}
                          height={28}
                          className={`w-7 h-7 object-contain ${skill.invertDark ? "dark:invert" : ""}`}
                          unoptimized
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>

            <motion.div
              className="fixed pointer-events-none z-[80] hidden md:block"
              style={{
                left: cursorX,
                top: cursorY,
                rotateX: smoothRotateX,
                rotateY: smoothRotateY,
                perspective: 1000,
              }}
            >
              <div className="-translate-x-1/2 -translate-y-1/2">
                <AnimatePresence mode="wait">
                  {isHovering && hoveredId && hoveredId !== "skills" && (
                    <motion.div
                      key={hoveredId}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 26,
                      }}
                    >
                      <DynamicCardPreview hoveredId={hoveredId} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
