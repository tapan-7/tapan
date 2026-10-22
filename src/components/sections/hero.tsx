"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { BlurText } from "@/components/react-bits/blur-text";

export function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-16 px-6 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#7c3aed]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141418] border border-[#27272a] text-xs font-medium text-[#a1a1aa] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a78bfa] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a78bfa]" />
          </span>
          <span>Available for Frontend & SDE Opportunities</span>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f4f4f5] leading-[1.08] mb-6">
          <span className="block mb-2">
            <BlurText text="Engineering digital" animateBy="words" delay={0.06} />
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f4f4f5] via-[#c4b5fd] to-[#a78bfa]">
            <BlurText text="products with precision." animateBy="words" delay={0.08} />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="space-y-3 mb-10 max-w-2xl"
        >
          <p className="text-lg md:text-xl font-medium text-[#f4f4f5]">
            I&apos;m <span className="text-[#a78bfa]">Tapan Kumar Swain</span>, a Software Development Engineer.
          </p>
          <p className="text-sm md:text-base text-[#a1a1aa] leading-relaxed">
            Specializing in high-performance web applications and fluid mobile architectures using React, Next.js, and React Native. Focused on clean frontend systems, UI/UX refinement, and scalable delivery.
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f4f4f5] text-[#09090b] font-medium text-sm hover:bg-[#a78bfa] transition-all duration-200 shadow-md hover:shadow-purple-500/20"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141418] text-[#f4f4f5] border border-[#27272a] font-medium text-sm hover:border-[#a78bfa]/50 hover:bg-[#18181b] transition-all duration-200"
          >
            <span>Contact Me</span>
          </a>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-transparent text-[#a1a1aa] hover:text-[#f4f4f5] text-sm font-medium transition-colors border border-transparent hover:border-[#27272a]"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center gap-5 text-[#a1a1aa]"
        >
          <a
            href="https://github.com/tapankumarswain"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2.5 rounded-full hover:bg-[#141418] hover:text-[#f4f4f5] border border-transparent hover:border-[#27272a] transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/tapankumarswain"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2.5 rounded-full hover:bg-[#141418] hover:text-[#f4f4f5] border border-transparent hover:border-[#27272a] transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@example.com"
            aria-label="Send Email"
            className="p-2.5 rounded-full hover:bg-[#141418] hover:text-[#f4f4f5] border border-transparent hover:border-[#27272a] transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
          <span className="w-px h-4 bg-[#27272a]" />
          <a
            href="https://dev.to/tapan-7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono tracking-wider hover:text-[#a78bfa] flex items-center gap-1 transition-colors"
          >
            <span>DEV.TO</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-16 flex flex-col items-center gap-2 text-[#a1a1aa] text-xs font-mono tracking-widest uppercase"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-3 rounded-full bg-[#a78bfa]"
        />
      </motion.div>
    </section>
  );
}
