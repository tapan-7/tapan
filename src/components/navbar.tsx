"use client";

import React, { useEffect, useState, useId } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
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
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

const MENU_ITEMS: NavPreviewItem[] = [
  {
    id: "about",
    num: "01",
    name: "About",
    href: "#about",
    eyebrow: "THE PERSON BEHIND THE CODE",
    title: "More than just code.",
    description:
      "Software Development Engineer combining architectural discipline with design sensitivity.",
    image: "/profile.jpeg",
    tag: "Biography",
  },
  {
    id: "experience",
    num: "02",
    name: "Experience",
    href: "#experience",
    eyebrow: "CAREER TRAJECTORY",
    title: "Building at scale.",
    description:
      "Enterprise legal-tech, Salesforce integrations, and real-time WebSocket telemetry at HyScaler.",
    image: "/profile.jpeg",
    tag: "Enterprise",
  },
  {
    id: "projects",
    num: "03",
    name: "Projects",
    href: "#projects",
    eyebrow: "SHOWCASE & CREATIONS",
    title: "Featured work.",
    description:
      "Production web and mobile applications built for real-world reliability and impact.",
    image: "/projects/bingebox.png",
    tag: "Showcase",
  },
  {
    id: "skills",
    num: "04",
    name: "Skills",
    href: "#skills",
    eyebrow: "CAPABILITIES & TOOLKIT",
    title: "Technical competencies.",
    description:
      "Full-stack stack spanning Next.js, React Native, NestJS, PostgreSQL, Redis, and AWS S3.",
    image: "/profile.jpeg",
    tag: "Toolkit",
  },
  {
    id: "writing",
    num: "05",
    name: "Writing",
    href: "#writing",
    eyebrow: "PUBLICATIONS & GUIDES",
    title: "Technical writing.",
    description:
      "Verified deep-dives into Google Drive OAuth, VideoSDK S3 pipelines, and Android Health Connect.",
    image:
      "https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fkwxy1dnx5wiy8521hs9u.png",
    tag: "Dev.to",
  },
  {
    id: "contact",
    num: "06",
    name: "Contact",
    href: "#contact",
    eyebrow: "INITIATE COLLABORATION",
    title: "Let's build something exceptional.",
    description:
      "Available for Software Development Engineer roles, frontend architecture, and engineering teams.",
    image: "/profile.jpeg",
    tag: "Collaboration",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredId, setHoveredId] = useState("about");
  const shouldReduceMotion = useReducedMotion();
  const navDialogId = useId();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
            if (!isOpen) {
              setHoveredId(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

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
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  };

  const currentPreview =
    MENU_ITEMS.find((item) => item.id === hoveredId) || MENU_ITEMS[0];

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
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.65, 0.05, 0, 1] }}
            className="fixed inset-0 z-[65] bg-background/95 backdrop-blur-2xl overflow-y-auto flex flex-col justify-between p-6 sm:p-10 md:p-16 pt-24 sm:pt-28"
          >
            <div className="container max-w-6xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="hidden lg:block lg:col-span-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPreview.id}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, scale: 0.96 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, scale: 0.96 }
                    }
                    transition={{ duration: 0.25, ease: [0.65, 0.05, 0, 1] }}
                    className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-card border border-border/80 flex flex-col justify-end p-8 group"
                  >
                    <Image
                      src={currentPreview.image}
                      alt={currentPreview.title}
                      fill
                      sizes="480px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-95" />

                    <div className="relative z-10 space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-md border border-border/80 text-[11px] font-mono text-primary w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span>{currentPreview.eyebrow}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground leading-tight">
                        {currentPreview.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed max-w-md">
                        {currentPreview.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-center">
                <nav className="flex flex-col space-y-2 sm:space-y-3">
                  {MENU_ITEMS.map((item, index) => {
                    const isHovered = hoveredId === item.id;
                    const isActive = activeSection === item.id;

                    return (
                      <motion.div
                        key={item.id}
                        initial={
                          shouldReduceMotion
                            ? { opacity: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: shouldReduceMotion ? 0 : 0.05 * index,
                          ease: [0.65, 0.05, 0, 1],
                        }}
                      >
                        <a
                          href={item.href}
                          onClick={(e) => handleNavigate(e, item.href)}
                          onMouseEnter={() => setHoveredId(item.id)}
                          onFocus={() => setHoveredId(item.id)}
                          className="group relative inline-flex items-baseline gap-4 py-1.5 transition-all duration-300 w-fit"
                        >
                          <span className="text-xs sm:text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors">
                            {item.num}
                          </span>

                          <span
                            className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight transition-all duration-300 ${
                              isHovered
                                ? "text-primary translate-x-2"
                                : isActive
                                  ? "text-foreground"
                                  : "text-foreground/80 group-hover:text-foreground"
                            }`}
                          >
                            {item.name}
                          </span>

                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-primary" />
                          )}
                        </a>
                      </motion.div>
                    );
                  })}

                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: shouldReduceMotion ? 0 : 0.05 * MENU_ITEMS.length,
                    }}
                    className="pt-6 border-t border-border/40 mt-4 flex flex-wrap items-center gap-6"
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
            </div>

            <div className="container max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/40 text-xs font-mono text-muted-foreground">
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
