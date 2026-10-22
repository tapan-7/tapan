"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { ParticleText } from "@/components/react-bits/particle-text";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const xLeft = useTransform(smoothProgress, [0, 1], [0, -75]);
  const xRight = useTransform(smoothProgress, [0, 1], [0, 75]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.75], [1, 0.25]);
  const heroScale = useTransform(smoothProgress, [0, 0.8], [1, 0.94]);

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
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-16 px-6 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <motion.div
        style={{ scale: heroScale }}
        className="container max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        <ParticleText
          line1="Engineering digital"
          line2="products with precision."
          xLeft={xLeft}
          xRight={xRight}
          opacity={heroOpacity}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="space-y-3 mb-10 max-w-2xl"
        >
          <p className="text-lg md:text-xl font-medium text-foreground">
            I&apos;m <span className="text-primary">Tapan Kumar Swain</span>, a
            Software Development Engineer.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Specializing in high-performance web applications and fluid mobile
            architectures using React, Next.js, and React Native. Focused on
            clean frontend systems, UI/UX refinement, and scalable delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-14"
        >
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "#projects")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-md"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card text-foreground border border-border font-medium text-sm hover:border-primary/50 hover:bg-secondary transition-all duration-200"
          >
            <span>Contact Me</span>
          </a>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-transparent text-muted-foreground hover:text-foreground text-sm font-medium transition-colors border border-transparent hover:border-border"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center gap-5 text-muted-foreground"
        >
          <a
            href="https://github.com/tapankumarswain"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2.5 rounded-full hover:bg-card hover:text-foreground border border-transparent hover:border-border transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/tapankumarswain"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2.5 rounded-full hover:bg-card hover:text-foreground border border-transparent hover:border-border transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@example.com"
            aria-label="Send Email"
            className="p-2.5 rounded-full hover:bg-card hover:text-foreground border border-transparent hover:border-border transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href="https://dev.to/tapan-7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono tracking-wider hover:text-primary flex items-center gap-1 transition-colors"
          >
            <span>DEV.TO</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
