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
  name: string;
  href: string;
}

const MENU_ITEMS: NavPreviewItem[] = [
  {
    id: "about",
    name: "About",
    href: "#about",
  },
  {
    id: "experience",
    name: "Experience",
    href: "#experience",
  },
  {
    id: "projects",
    name: "Projects",
    href: "#projects",
  },
  {
    id: "skills",
    name: "Skills",
    href: "#skills",
  },
  {
    id: "writing",
    name: "Writing",
    href: "#writing",
  },
  {
    id: "contact",
    name: "Contact",
    href: "#contact",
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

function DynamicCardPreview({ hoveredId }: { hoveredId: string }) {
  if (hoveredId === "experience") return <ExperienceCard />;
  if (hoveredId === "projects") return <ProjectsCard />;
  if (hoveredId === "writing") return <WritingCard />;
  if (hoveredId === "about") return <AboutCard />;
  return null;
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

  const skillsX = useMotionValue(0);
  const skillsY = useMotionValue(0);
  const smoothSkillsX = useSpring(skillsX, {
    stiffness: 450,
    damping: 30,
    mass: 0.3,
  });
  const smoothSkillsY = useSpring(skillsY, {
    stiffness: 450,
    damping: 30,
    mass: 0.3,
  });

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

  const handleMouseMove = (
    clientX: number,
    clientY: number,
    targetId?: string,
  ) => {
    if (typeof window === "undefined") return;
    const currentTarget = targetId || hoveredId;
    if (currentTarget === "skills") {
      skillsX.set(clientX + 24);
      skillsY.set(clientY);
      return;
    }
    if (currentTarget === "contact") {
      return;
    }
    const padX = 180;
    const padY = 220;
    const clampedX = Math.max(
      padX,
      Math.min(window.innerWidth - padX, clientX),
    );
    const clampedY = Math.max(
      padY,
      Math.min(window.innerHeight - padY, clientY),
    );
    mouseX.set(clampedX);
    mouseY.set(clampedY);
  };

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
            onMouseMove={(e) => handleMouseMove(e.clientX, e.clientY)}
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.65, 0.05, 0, 1] }}
            className="fixed inset-0 z-[65] bg-background/95 backdrop-blur-2xl overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-14 pt-24 sm:pt-28"
          >
            <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col items-center justify-center min-h-0">
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
                          handleMouseMove(e.clientX, e.clientY, item.id);
                          if (item.id === "skills") {
                            skillsX.jump(e.clientX + 24);
                            skillsY.jump(e.clientY);
                          } else if (item.id !== "contact" && !isHovering) {
                            const padX = 180;
                            const padY = 220;
                            const clampedX = Math.max(
                              padX,
                              Math.min(window.innerWidth - padX, e.clientX),
                            );
                            const clampedY = Math.max(
                              padY,
                              Math.min(window.innerHeight - padY, e.clientY),
                            );
                            cursorX.jump(clampedX);
                            cursorY.jump(clampedY);
                          }
                          setIsHovering(true);
                          setHoveredId(item.id);
                        }}
                        onFocus={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const cx = rect.left + rect.width / 2;
                          const cy = rect.top + rect.height / 2;
                          handleMouseMove(cx, cy, item.id);
                          if (item.id === "skills") {
                            skillsX.jump(cx + 24);
                            skillsY.jump(cy);
                          } else if (item.id !== "contact" && !isHovering) {
                            const padX = 180;
                            const padY = 220;
                            const clampedX = Math.max(
                              padX,
                              Math.min(window.innerWidth - padX, cx),
                            );
                            const clampedY = Math.max(
                              padY,
                              Math.min(window.innerHeight - padY, cy),
                            );
                            cursorX.jump(clampedX);
                            cursorY.jump(clampedY);
                          }
                          setIsHovering(true);
                          setHoveredId(item.id);
                        }}
                        className={`group relative flex items-center justify-center w-full px-6 py-3.5 sm:py-5 rounded-2xl text-center transition-colors duration-150 ${
                          isHovered
                            ? "bg-secondary text-foreground"
                            : isActive
                              ? "bg-secondary/50 text-foreground"
                              : "text-foreground/80 hover:bg-secondary/30 hover:text-foreground"
                        }`}
                      >
                        <span
                          className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight transition-colors ${
                            isHovered || isActive
                              ? "text-foreground"
                              : "text-foreground/80"
                          }`}
                        >
                          {item.name}
                        </span>
                      </a>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={
                    shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: shouldReduceMotion ? 0 : 0.04 * MENU_ITEMS.length,
                  }}
                  className="pt-6 border-t border-border/40 mt-4 flex flex-wrap items-center justify-center gap-8 px-4"
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

            <div className="fixed inset-0 pointer-events-none overflow-hidden z-[80] hidden md:block">
              <AnimatePresence>
                {isHovering && hoveredId === "skills" && (
                  <motion.div
                    style={{
                      position: "absolute",
                      left: smoothSkillsX,
                      top: smoothSkillsY,
                      transform: "translateY(-50%)",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="pointer-events-none flex items-center gap-3 z-[85]"
                  >
                    {SKILL_TRAIL.map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 6, scale: 0.7 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        transition={{
                          duration: 0.2,
                          delay: idx * 0.025,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Image
                          src={skill.src}
                          alt={skill.name}
                          width={34}
                          height={34}
                          className={`w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)] ${
                            skill.invertDark ? "dark:invert" : ""
                          }`}
                          unoptimized
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                style={{
                  position: "absolute",
                  left: cursorX,
                  top: cursorY,
                  rotateX: smoothRotateX,
                  rotateY: smoothRotateY,
                  perspective: 1000,
                }}
              >
                <div className="-translate-x-1/2 -translate-y-1/2">
                  <AnimatePresence mode="wait">
                    {isHovering &&
                      hoveredId &&
                      hoveredId !== "skills" &&
                      hoveredId !== "contact" && (
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
