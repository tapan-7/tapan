"use client";
import React from "react";
import { MobileNav } from "./mobile-nav";
import { AnimatedThemeToggler } from "./animated-theme-toggler";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 dark:text-white">
          <Link href="/">&lt; tapan &gt;</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {["About", "Projects", "Resume", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
              >
                {item}
              </Link>
            )
          )}
          <AnimatedThemeToggler />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-4">
          <AnimatedThemeToggler />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
