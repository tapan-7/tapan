"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Briefcase, MapPin } from "lucide-react";
import { AnimatedContent } from "@/components/react-bits/animated-content";
import { BlurText } from "@/components/react-bits/blur-text";
import portfolioData from "@/constant/portfolio-data.json";

export function Experience() {
  const { experience } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-28 md:py-36 px-6 relative overflow-hidden">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 lg:mb-28 gap-4">
          <div>
            <AnimatedContent distance={15} direction="vertical" delay={0.05}>
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-primary mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>02 // TRAJECTORY & EXPERIENCE</span>
              </div>
            </AnimatedContent>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              <BlurText text="Building at scale." animateBy="words" delay={0.06} />
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-sm font-light leading-relaxed">
            Proven track record delivering reliable frontend systems and high-impact mobile architectures.
          </p>
        </div>

        <div ref={containerRef} className="relative pl-6 sm:pl-10 md:pl-48">
          <div className="absolute left-2 sm:left-4 md:left-36 top-2 bottom-2 w-[1px] bg-border/40" />

          <motion.div
            style={{ scaleY }}
            className="absolute left-2 sm:left-4 md:left-36 top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-primary via-accent to-primary origin-top shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
          />

          <div className="space-y-20 md:space-y-28">
            {experience.map((job, index) => {
              const isCurrent = job.period.includes("Present");

              return (
                <div key={job.title + index} className="relative group">
                  <div className="absolute -left-[21px] sm:-left-[29px] md:-left-[55px] top-1.5 w-3.5 h-3.5 rounded-full bg-background border-2 border-primary group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_hsl(var(--primary)/0.5)] z-10" />

                  <div className="hidden md:block absolute -left-48 top-1 w-32 text-right">
                    <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors block">
                      {job.period.split("–")[0].trim()}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-widest block mt-0.5">
                      {isCurrent ? "Active Role" : "Completed"}
                    </span>
                  </div>

                  <AnimatedContent
                    distance={20}
                    direction="vertical"
                    delay={0.1 * index}
                  >
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <div className="inline-flex md:hidden items-center text-xs font-mono text-primary">
                          {job.period}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5 font-medium text-foreground">
                          <Briefcase className="w-3.5 h-3.5 text-primary" />
                          {job.company}
                        </span>
                        <span className="text-border">•</span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                        <span className="hidden md:inline text-border">•</span>
                        <span className="hidden md:inline font-mono text-xs text-primary">
                          {job.period}
                        </span>
                      </div>

                      <p className="text-base text-muted-foreground leading-relaxed pt-2 max-w-3xl">
                        {job.description}
                      </p>

                      <ul className="pt-3 space-y-2.5 max-w-3xl">
                        {job.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed group/item"
                          >
                            <span className="text-primary font-mono select-none mt-0.5 text-xs">
                              —
                            </span>
                            <span className="group-hover/item:text-foreground transition-colors">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedContent>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
