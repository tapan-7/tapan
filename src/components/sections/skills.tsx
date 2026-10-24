"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
  useSpring,
  MotionValue,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories, CategoryData } from "@/constant/skills";

interface SkillListColumnProps {
  category: CategoryData;
  index: number;
  total: number;
  smoothProgress: MotionValue<number>;
  width: number;
  marginRight: number;
  onSelect: () => void;
}

function SkillListColumn({
  category,
  index,
  total,
  smoothProgress,
  width,
  marginRight,
  onSelect,
}: SkillListColumnProps) {
  const centerP = total > 1 ? index / (total - 1) : 0;
  const step = total > 1 ? 1 / (total - 1) : 1;

  const opacity = useTransform(
    smoothProgress,
    [
      centerP - step * 1.5,
      centerP - step,
      centerP,
      centerP + step,
      centerP + step * 1.5,
    ],
    [0.2, 0.38, 1, 0.38, 0.2],
    { clamp: true },
  );

  const scale = useTransform(
    smoothProgress,
    [centerP - step, centerP, centerP + step],
    [0.96, 1, 0.96],
    { clamp: true },
  );

  return (
    <motion.div
      style={{
        width: `${width}px`,
        marginRight: `${marginRight}px`,
        opacity,
        scale,
      }}
      onClick={onSelect}
      className="shrink-0 select-none cursor-pointer will-change-transform"
    >
      <div className="flex flex-col w-full">
        {category.skills.map((skill, sIdx) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="group flex items-center justify-between py-4 sm:py-4.5 px-2 transition-all duration-200 hover:pl-3"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <Icon />
                </div>
                <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const listWidth = Math.min(560, Math.max(320, windowWidth * 0.44));
  const gap = Math.min(72, Math.max(40, windowWidth * 0.05));
  const step = listWidth + gap;
  const totalTravel = (skillCategories.length - 1) * step;
  const initialOffset = Math.max(24, (windowWidth - listWidth) / 2);

  const containerHeight = Math.max(1700, totalTravel + 800);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    mass: 0.2,
  });

  const rawX = useTransform(smoothProgress, [0, 1], [0, -totalTravel]);
  const trackX = shouldReduceMotion ? 0 : rawX;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      const idx = Math.min(
        skillCategories.length - 1,
        Math.max(0, Math.round(v * (skillCategories.length - 1))),
      );
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  const scrollToCategory = (targetIdx: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const scrollDistance = containerHeight - window.innerHeight;
    const targetScroll =
      containerTop +
      (targetIdx / (skillCategories.length - 1)) * scrollDistance;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const activeCategory = skillCategories[activeIndex] || skillCategories[0];

  return (
    <section id="skills" className="relative">
      <div className="hidden md:block">
        <div
          ref={containerRef}
          style={{ height: `${containerHeight}px` }}
          className="relative"
        >
          <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-10 sm:py-12">
            <div className="container max-w-6xl mx-auto px-6 shrink-0">
              <div className="border-b border-border/40 pb-6">
                <SectionHeading
                  eyebrow="04 // CAPABILITIES & TOOLKIT"
                  title="Technical competencies."
                  description="A comprehensive inventory of frameworks, databases, cloud architecture, and development tooling."
                />
              </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center shrink-0 my-auto">
              <div className="relative w-full max-w-2xl h-24 flex items-center justify-center text-center px-4 mb-8">
                <AnimatePresence>
                  <motion.div
                    key={activeCategory.title}
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                  >
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
                      {activeCategory.title}
                    </h3>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="w-full overflow-visible relative">
                <motion.div
                  style={{
                    x: trackX,
                    paddingLeft: `${initialOffset}px`,
                  }}
                  className="flex items-center will-change-transform"
                >
                  {skillCategories.map((cat, idx) => (
                    <SkillListColumn
                      key={cat.title}
                      category={cat}
                      index={idx}
                      total={skillCategories.length}
                      smoothProgress={smoothProgress}
                      width={listWidth}
                      marginRight={gap}
                      onSelect={() => scrollToCategory(idx)}
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="container max-w-6xl mx-auto px-6 shrink-0 flex items-center justify-center text-xs font-mono text-muted-foreground pt-4">
              <div className="w-36 h-1.5 bg-secondary rounded-full overflow-hidden self-center">
                <motion.div
                  style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden px-6 pt-20 pb-20 space-y-8">
        <div className="border-b border-border/40 pb-6">
          <SectionHeading
            eyebrow="04 // CAPABILITIES & TOOLKIT"
            title="Technical competencies."
            description="A comprehensive inventory of frameworks, databases, cloud architecture, and development tooling."
          />
        </div>

        <div className="relative min-h-[4.5rem] flex flex-col items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="text-center"
            >
              <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-1">
                {activeCategory.num} / 0{skillCategories.length}
              </span>
              <h3 className="text-3xl font-extrabold text-foreground tracking-tight">
                {activeCategory.title}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          ref={mobileScrollRef}
          onScroll={(e) => {
            const el = e.currentTarget;
            const scrollLeft = el.scrollLeft;
            const itemWidth = el.clientWidth * 0.82 + 24;
            const idx = Math.min(
              skillCategories.length - 1,
              Math.max(0, Math.round(scrollLeft / itemWidth)),
            );
            setActiveIndex(idx);
          }}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 -mx-6 px-6 no-scrollbar"
        >
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className={`w-[82vw] shrink-0 snap-center transition-all duration-300 ${
                idx === activeIndex
                  ? "opacity-100 scale-100"
                  : "opacity-35 scale-[0.96]"
              }`}
            >
              <div className="flex flex-col divide-y divide-border/30 w-full">
                {cat.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between py-3.5 px-1"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-7 h-7 flex items-center justify-center shrink-0">
                          <Icon />
                        </div>
                        <span className="font-mono text-base font-bold text-foreground">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
