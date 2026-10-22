"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 border-t border-border bg-background text-muted-foreground text-xs">
      <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="font-semibold text-foreground">Tapan Kumar Swain</span>
          <span className="hidden sm:inline text-border">•</span>
          <span>Software Development Engineer</span>
          <span className="hidden sm:inline text-border">•</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#writing" className="hover:text-foreground transition-colors">
            Writing
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all ml-2"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
