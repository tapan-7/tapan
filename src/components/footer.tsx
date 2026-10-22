"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import portfolioData from "@/constant/portfolio-data.json";
import { NAV_LINKS } from "@/constant/navigation";

export default function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 border-t border-border/40 bg-background text-muted-foreground text-xs font-mono">
      <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="font-semibold text-foreground font-sans">{profile.name}</span>
          <span className="hidden sm:inline text-border">•</span>
          <span>{profile.title}</span>
          <span className="hidden sm:inline text-border">•</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}

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
