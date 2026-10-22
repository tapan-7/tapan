"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 border-t border-[#27272a] bg-[#09090b] text-[#a1a1aa] text-xs">
      <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="font-semibold text-[#f4f4f5]">Tapan Kumar Swain</span>
          <span className="hidden sm:inline text-[#27272a]">•</span>
          <span>Software Development Engineer</span>
          <span className="hidden sm:inline text-[#27272a]">•</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-[#f4f4f5] transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-[#f4f4f5] transition-colors">
            Projects
          </a>
          <a href="#writing" className="hover:text-[#f4f4f5] transition-colors">
            Writing
          </a>
          <a href="#contact" className="hover:text-[#f4f4f5] transition-colors">
            Contact
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-8 h-8 rounded-full bg-[#141418] border border-[#27272a] flex items-center justify-center hover:border-[#a78bfa] hover:text-[#a78bfa] transition-all ml-2"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
