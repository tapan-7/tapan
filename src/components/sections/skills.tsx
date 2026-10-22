"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import { AnimatedContent } from "@/components/react-bits/animated-content";
import { BlurText } from "@/components/react-bits/blur-text";
import { skillCategories, getStageRanges, CategoryData } from "@/constant/skills";

const dynamicStageRanges = getStageRanges(skillCategories.length);

function CategoryStage({
  category,
  index,
  scrollProgress,
  shouldReduceMotion,
}: {
  category: CategoryData;
  index: number;
  scrollProgress: MotionValue<number>;
  shouldReduceMotion: boolean | null;
}) {
  const r = dynamicStageRanges[index];
  const progressRange = [r.enterStart, r.enterEnd, r.exitStart, r.exitEnd];

  const headerOpacity = useTransform(scrollProgress, progressRange, [0, 1, 1, 0]);
  const headerY = useTransform(scrollProgress, progressRange, [60, 0, 0, -45]);
  const headerScale = useTransform(scrollProgress, progressRange, [0.85, 1, 1, 0.9]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        style={{
          opacity: shouldReduceMotion ? 1 : headerOpacity,
          y: shouldReduceMotion ? 0 : headerY,
          scale: shouldReduceMotion ? 1 : headerScale,
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto z-10 w-full max-w-xl will-change-transform"
      >
        <span className="text-xs font-mono text-primary uppercase tracking-[0.25em] block mb-2">
          {category.num}
        </span>
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]">
          {category.title}.
        </h3>
      </motion.div>

      <div className="absolute inset-0 pointer-events-auto">
        {category.skills.map((skill, sIdx) => {
          const Icon = skill.icon;
          const driftX = -25 + (sIdx % 3) * 15;
          const driftY = -12 + (sIdx % 2) * 24;

          const skillOpacity = useTransform(scrollProgress, progressRange, [0, 1, 1, 0]);
          const skillScale = useTransform(scrollProgress, progressRange, [0.55, 1, 1, 0.8]);

          const skillX = useTransform(scrollProgress, progressRange, [
            skill.base.x + skill.entry.x * 0.7,
            skill.base.x,
            skill.base.x + driftX,
            skill.base.x + driftX * 2.2 + (skill.entry.x > 0 ? 80 : -80),
          ]);

          const skillY = useTransform(scrollProgress, progressRange, [
            skill.base.y + skill.entry.y * 0.7,
            skill.base.y,
            skill.base.y + driftY,
            skill.base.y + driftY * 2.2 - 40,
          ]);

          return (
            <motion.div
              key={skill.name}
              style={{
                left: "50%",
                top: "50%",
                x: shouldReduceMotion ? skill.base.x : skillX,
                y: shouldReduceMotion ? skill.base.y : skillY,
                scale: shouldReduceMotion ? 1 : skillScale,
                opacity: shouldReduceMotion ? 1 : skillOpacity,
              }}
              className="absolute will-change-transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex items-center gap-3.5 group cursor-default select-none py-1.5 px-2">
                <div className="w-8 h-8 shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                  <Icon />
                </div>
                <span className="font-mono text-base sm:text-lg lg:text-xl font-bold text-foreground/90 group-hover:text-primary transition-colors duration-200 tracking-tight whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const updateDimensions = () => {
      const vh = window.innerHeight;
      setContainerHeight(Math.max(3000, vh * 4.2));
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <section id="skills" className="relative border-t border-border/40">
      <div className="hidden md:block">
        <div
          ref={containerRef}
          style={{ height: containerHeight ? `${containerHeight}px` : "420vh" }}
          className="relative"
        >
          <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-20 pb-8">
            <div className="container max-w-6xl mx-auto px-6 shrink-0">
              <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <div>
                  <AnimatedContent distance={15} direction="vertical" delay={0.05}>
                    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-primary mb-1">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span>04 &bull; CAPABILITIES &amp; TOOLKIT</span>
                    </div>
                  </AnimatedContent>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                    <BlurText text="Technical competencies." animateBy="words" delay={0.06} />
                  </h2>
                </div>
              </div>
            </div>

            <div className="container max-w-6xl mx-auto px-6 my-auto relative h-[420px] lg:h-[460px] w-full">
              <div className="w-full h-full relative scale-[0.82] md:scale-[0.88] lg:scale-[0.95] xl:scale-100 origin-center">
                {skillCategories.map((cat, idx) => (
                  <CategoryStage
                    key={cat.title}
                    category={cat}
                    index={idx}
                    scrollProgress={scrollYProgress}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                ))}
              </div>
            </div>

            <div className="container max-w-6xl mx-auto px-6 shrink-0 flex items-center justify-between text-xs font-mono text-muted-foreground border-t border-border/40 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-primary font-semibold">&lt;&gt;</span>
                <span>Scroll vertically to traverse toolkit &rarr;</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Swarm Progress</span>
                <div className="w-36 h-1.5 bg-secondary rounded-full overflow-hidden border border-border/60">
                  <motion.div
                    style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden px-6 pt-24 pb-20 space-y-16">
        <div>
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>04 &bull; CAPABILITIES &amp; TOOLKIT</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
            Technical competencies.
          </h2>
        </div>

        <div className="space-y-14">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest">
                <span>{category.num}</span>
                <span>&bull;</span>
                <h3 className="text-2xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-5">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-7 h-7 shrink-0 flex items-center justify-center">
                        <Icon />
                      </div>
                      <span className="text-base font-bold text-foreground font-mono">
                        {skill.name}
                      </span>
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
