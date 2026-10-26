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
import { NAV_LINKS } from "@/constant/navigation";
import { AnimatedThemeToggler } from "./animated-theme-toggler";
import { LiquidWave } from "@/components/ui/liquid-wave";

interface PreviewData {
  image: string;
  title: string;
  subtitle?: string;
  imageClass?: string;
}

function NavPreviewCard({ data }: { data: PreviewData }) {
  return (
    <div className="relative w-[300px] sm:w-[340px] h-[380px] sm:h-[420px] rounded-2xl overflow-hidden bg-scrim shadow-2xl select-none flex flex-col justify-end">
      <Image
        src={data.image}
        alt={data.title}
        fill
        sizes="340px"
        className={`object-cover ${data.imageClass || ""}`}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-scrim/85 via-scrim/25 to-transparent" />
      <div className="relative z-10 p-5 text-scrim-foreground">
        <h3 className="text-2xl font-bold tracking-tight text-scrim-foreground leading-tight">
          {data.title}
        </h3>
        {data.subtitle && (
          <p className="text-xs font-mono text-scrim-muted mt-1">
            {data.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

function getPreviewData(id: string): PreviewData | null {
  if (id === "about") {
    return {
      image: portfolioData.profile.avatar || "/profile-outline.png",
      title: portfolioData.profile.name,
      subtitle: portfolioData.profile.email,
      imageClass: "object-top",
    };
  }
  if (id === "experience") {
    const exp = portfolioData.experience[0];
    return {
      image: exp.banner || "/hyscaler-banner.webp",
      title: exp.shortCompany || exp.company,
      subtitle: exp.subCompany,
    };
  }
  if (id === "projects") {
    const project = portfolioData.projects[0];
    return {
      image: project.image,
      title: project.title,
    };
  }
  if (id === "writing") {
    const blog = portfolioData.blogs[0];
    return {
      image: blog.image,
      title: blog.title,
    };
  }
  return null;
}

function DynamicCardPreview({ hoveredId }: { hoveredId: string }) {
  const data = getPreviewData(hoveredId);
  if (!data) return null;
  return <NavPreviewCard data={data} />;
}

function NavMenuItem({
  item,
  index,
  isHovered,
  isActive,
  shouldReduceMotion,
  onNavigate,
  onHoverStart,
  onFocusStart,
}: {
  item: { name: string; href: string };
  index: number;
  isHovered: boolean;
  isActive: boolean;
  shouldReduceMotion: boolean | null;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  onHoverStart: (clientX: number, clientY: number, id: string) => void;
  onFocusStart: (cx: number, cy: number, id: string) => void;
}) {
  const [touchPos, setTouchPos] = useState<{ x: number; y: number } | null>(
    null,
  );
  const id = item.href.replace("#", "").toLowerCase();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: shouldReduceMotion ? 0 : 0.04 * index,
        ease: [0.65, 0.05, 0, 1],
      }}
      className="relative w-full"
    >
      <a
        href={item.href}
        onClick={(e) => onNavigate(e, item.href)}
        onMouseEnter={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setTouchPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
          onHoverStart(e.clientX, e.clientY, id);
        }}
        onMouseMove={(e) => {
          if (!touchPos) {
            const rect = e.currentTarget.getBoundingClientRect();
            setTouchPos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          }
        }}
        onMouseLeave={() => {
          setTouchPos(null);
        }}
        onFocus={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          setTouchPos({
            x: rect.width / 2,
            y: rect.height / 2,
          });
          onFocusStart(cx, cy, id);
        }}
        onBlur={() => {
          setTouchPos(null);
        }}
        className="group relative flex items-center justify-center w-full px-6 py-3.5 sm:py-5 text-center overflow-hidden select-none"
      >
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 bg-foreground pointer-events-none z-0"
          initial={false}
          animate={{
            clipPath:
              isHovered && touchPos
                ? `circle(150% at ${touchPos.x}px ${touchPos.y}px)`
                : `circle(0% at ${touchPos?.x ?? 50}% ${touchPos?.y ?? 50}%)`,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            clipPath: {
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            },
            opacity: {
              duration: isHovered ? 0.05 : 0.25,
            },
          }}
        />

        <span
          className={`relative z-10 text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight transition-colors duration-200 ${
            isHovered
              ? "text-background"
              : isActive
                ? "text-foreground"
                : "text-foreground/80"
          }`}
        >
          {item.name}
        </span>
      </a>
    </motion.div>
  );
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
    if (!isOpen) return;
    const preventScroll = (e: TouchEvent | WheelEvent) => {
      e.preventDefault();
    };
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [isOpen]);

  const handleMouseMove = (
    clientX: number,
    clientY: number,
    targetId?: string,
  ) => {
    if (typeof window === "undefined") return;
    const currentTarget = targetId || hoveredId;
    if (currentTarget === "skills" || currentTarget === "contact") {
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
            <span>{portfolioData.profile.nickname}</span>
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
              <LiquidWave />

              <div className="relative z-10 flex flex-col items-center justify-center gap-1.5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: [0.65, 0.05, 0, 1] }}
                  className="w-5 h-[2px] bg-foreground group-hover:bg-background group-data-[wave-active=true]:bg-background transition-colors duration-300 origin-center block rounded-full"
                />
                <motion.span
                  animate={
                    isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }
                  }
                  transition={{ duration: 0.15 }}
                  className="w-5 h-[2px] bg-foreground group-hover:bg-background group-data-[wave-active=true]:bg-background transition-colors duration-300 origin-center block rounded-full"
                />
                <motion.span
                  animate={
                    isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.25, ease: [0.65, 0.05, 0, 1] }}
                  className="w-5 h-[2px] bg-foreground group-hover:bg-background group-data-[wave-active=true]:bg-background transition-colors duration-300 origin-center block rounded-full"
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
            <div className="w-full mx-auto flex-1 flex flex-col items-center justify-center min-h-0">
              <nav
                onMouseLeave={() => {
                  setIsHovering(false);
                  setHoveredId(null);
                }}
                className="w-full flex flex-col space-y-1.5 sm:space-y-2 select-none"
              >
                {NAV_LINKS.map((item, index) => {
                  const id = item.href.replace("#", "").toLowerCase();
                  const isHovered = hoveredId === id;
                  const isActive = activeSection === id;

                  return (
                    <NavMenuItem
                      key={id}
                      item={item}
                      index={index}
                      isHovered={isHovered}
                      isActive={isActive}
                      shouldReduceMotion={shouldReduceMotion}
                      onNavigate={handleNavigate}
                      onHoverStart={(clientX, clientY, itemId) => {
                        handleMouseMove(clientX, clientY, itemId);
                        if (
                          itemId !== "skills" &&
                          itemId !== "contact" &&
                          !isHovering
                        ) {
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
                          cursorX.jump(clampedX);
                          cursorY.jump(clampedY);
                        }
                        setIsHovering(true);
                        setHoveredId(itemId);
                      }}
                      onFocusStart={(cx, cy, itemId) => {
                        handleMouseMove(cx, cy, itemId);
                        if (
                          itemId !== "skills" &&
                          itemId !== "contact" &&
                          !isHovering
                        ) {
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
                        setHoveredId(itemId);
                      }}
                    />
                  );
                })}

                <motion.div
                  initial={
                    shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: shouldReduceMotion ? 0 : 0.04 * NAV_LINKS.length,
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
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {portfolioData.profile.email}
                </a>
              </div>

              <div className="flex items-center gap-5">
                {[
                  { label: "GitHub", href: portfolioData.profile.github },
                  { label: "LinkedIn", href: portfolioData.profile.linkedin },
                  { label: "Dev.to", href: portfolioData.profile.devto },
                  { label: "Twitter", href: portfolioData.profile.twitter },
                ]
                  .filter((link) => Boolean(link.href))
                  .map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
              </div>
            </div>

            <div className="fixed inset-0 pointer-events-none overflow-hidden z-[80] hidden md:block">
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
