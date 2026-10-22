"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { MobileNav } from "./mobile-nav";
import { AnimatedThemeToggler } from "./animated-theme-toggler";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Writing", href: "#writing" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "experience", "projects", "skills", "writing", "contact"];
      const scrollPosition = window.scrollY + 200;

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

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/80 backdrop-blur-md border-b border-[#27272a]/80 py-3 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-[#f4f4f5] hover:text-[#a78bfa] transition-colors flex items-center gap-1 group"
        >
          <span className="text-[#a78bfa] font-mono text-sm group-hover:-translate-x-0.5 transition-transform">
            &lt;
          </span>
          <span>tapan</span>
          <span className="text-[#a78bfa] font-mono text-sm group-hover:translate-x-0.5 transition-transform">
            /&gt;
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors rounded-full ${
                  isActive
                    ? "text-[#f4f4f5]"
                    : "text-[#a1a1aa] hover:text-[#f4f4f5]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-[#18181b] border border-[#27272a] rounded-full -z-10 shadow-inner"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}

          <Link
            href="/resume"
            className="flex items-center gap-1 px-3.5 py-1.5 text-sm font-medium text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold rounded-full bg-[#18181b] text-[#f4f4f5] border border-[#27272a] hover:border-[#a78bfa]/60 hover:text-[#a78bfa] transition-all duration-200"
          >
            Contact
          </a>
          <AnimatedThemeToggler />
          <MobileNav />
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#a78bfa] to-transparent origin-left"
        style={{ scaleX }}
      />
    </header>
  );
}
