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
import { LiquidWave } from "@/components/ui/liquid-wave";
import portfolioData from "@/constant/portfolio-data.json";

export function Hero() {
  const { profile, hero } = portfolioData;
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
      id="hero"
      ref={containerRef}
      className="relative min-h-screen min-h-[100dvh] flex flex-col justify-center items-center pt-20 pb-16 px-3 sm:px-6 w-full overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <motion.div
        style={{ scale: heroScale }}
        className="w-full max-w-6xl mx-auto flex flex-col items-center text-center my-auto px-1 sm:px-4"
      >
        <ParticleText
          line1={hero?.headline?.line1 || "Engineering digital"}
          line2={hero?.headline?.line2 || "products with precision."}
          xLeft={xLeft}
          xRight={xRight}
          opacity={heroOpacity}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="space-y-3 mb-8 max-w-2xl"
        >
          <p className="text-lg md:text-xl font-medium text-foreground">
            I&apos;m <span className="text-primary">{profile.name}</span>, a{" "}
            {profile.title}.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {hero?.tagline || profile.summary}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-10"
        >
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "#projects")}
            className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm transition-all duration-300 group cursor-pointer hover:scale-105 active:scale-95"
          >
            <LiquidWave color="primary" />
            <span className="relative z-10 flex items-center gap-2 text-background group-hover:text-primary-foreground transition-colors duration-300">
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card text-foreground border border-border font-medium text-sm transition-all duration-300 group cursor-pointer hover:border-foreground/30 hover:scale-105 active:scale-95"
          >
            <LiquidWave color="foreground" />
            <span className="relative z-10 flex items-center gap-2 text-foreground group-hover:text-background transition-colors duration-300">
              <span>Contact Me</span>
            </span>
          </a>

          <a
            href="/resume.pdf"
            download
            className="relative overflow-hidden inline-flex items-center gap-2 px-5 py-3 rounded-full bg-card/40 text-muted-foreground border border-border/70 text-sm font-medium transition-all duration-300 group cursor-pointer hover:border-foreground/30 hover:scale-105 active:scale-95"
          >
            <LiquidWave color="foreground" />
            <span className="relative z-10 flex items-center gap-2 text-muted-foreground group-hover:text-background transition-colors duration-300">
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center gap-5 text-muted-foreground"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="relative overflow-hidden p-2.5 rounded-full border border-border/70 bg-card/60 flex items-center justify-center transition-all duration-300 group cursor-pointer hover:border-foreground/30 hover:scale-105 active:scale-95"
          >
            <LiquidWave color="foreground" />
            <span className="relative z-10 flex items-center justify-center text-muted-foreground group-hover:text-background transition-colors duration-300">
              <Github className="w-5 h-5" />
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="relative overflow-hidden p-2.5 rounded-full border border-border/70 bg-card/60 flex items-center justify-center transition-all duration-300 group cursor-pointer hover:border-foreground/30 hover:scale-105 active:scale-95"
          >
            <LiquidWave color="foreground" />
            <span className="relative z-10 flex items-center justify-center text-muted-foreground group-hover:text-background transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
            </span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send Email"
            className="relative overflow-hidden p-2.5 rounded-full border border-border/70 bg-card/60 flex items-center justify-center transition-all duration-300 group cursor-pointer hover:border-foreground/30 hover:scale-105 active:scale-95"
          >
            <LiquidWave color="foreground" />
            <span className="relative z-10 flex items-center justify-center text-muted-foreground group-hover:text-background transition-colors duration-300">
              <Mail className="w-5 h-5" />
            </span>
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
