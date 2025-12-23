"use client";
import React from "react";
import { MobileNav } from "./mobile-nav";
import { AnimatedThemeToggler } from "./animated-theme-toggler";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = React.useState<string | null>(null);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 dark:text-white hover:opacity-80 transition-opacity">
          <Link href="/">&lt; tapan &gt;</Link>
        </div>

        {/* Desktop Navigation */}
        <div
          className="hidden md:flex space-x-2 items-center"
          onMouseLeave={() => setHoveredPath(null)}
        >
          {navLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${isActive
                  ? "text-blue-700 dark:text-blue-300"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                onMouseEnter={() => setHoveredPath(item.href)}
              >
                {/* Sliding Hover Pill */}
                {hoveredPath === item.href && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-slate-100 dark:bg-slate-800/80 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                )}

                {/* Active Indicator (More prominent now) */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-blue-100/50 dark:bg-blue-900/30 rounded-full -z-10 border border-blue-200/50 dark:border-blue-800/50"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {item.name}
              </Link>
            );
          })}

          <div className="pl-2 ml-2 border-l border-slate-200 dark:border-slate-800 flex items-center">
            <AnimatedThemeToggler />
          </div>
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
