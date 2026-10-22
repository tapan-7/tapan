"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 border-t border-border/40 bg-background text-muted-foreground text-xs font-mono">
      <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="font-semibold text-foreground font-sans">Tapan Kumar Swain</span>
          <span className="hidden sm:inline text-border">•</span>
          <span>Software Development Engineer</span>
          <span className="hidden sm:inline text-border">•</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#writing" className="hover:text-primary transition-colors">
            Writing
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>

          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Back to top"
            className="w-8 h-8 rounded-full bg-secondary border border-border/60 flex items-center justify-center hover:border-primary/60 hover:text-primary transition-all ml-2 active:scale-95"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
