"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Writing", href: "#writing" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/resume" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        className="p-2 text-[#a1a1aa] hover:text-[#f4f4f5] rounded-lg border border-[#27272a] bg-[#141418]"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-x-0 top-[65px] bg-[#09090b]/95 backdrop-blur-xl border-b border-[#27272a] p-6 shadow-2xl z-50"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault();
                        handleLinkClick(item.href);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className="flex items-center justify-between py-2 text-lg font-medium text-[#a1a1aa] hover:text-[#a78bfa] transition-colors border-b border-[#27272a]/40"
                  >
                    <span>{item.name}</span>
                    {item.href.startsWith("/") && (
                      <ArrowUpRight className="w-4 h-4 opacity-60" />
                    )}
                  </a>
                </motion.div>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#contact");
                  }}
                  className="block w-full text-center py-3 rounded-lg font-medium bg-[#a78bfa] text-[#09090b] hover:bg-[#c4b5fd] transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
