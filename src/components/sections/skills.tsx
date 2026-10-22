"use client";

import React from "react";
import { AnimatedContent } from "@/components/react-bits/animated-content";
import { BlurText } from "@/components/react-bits/blur-text";
import portfolioData from "@/constant/portfolio-data.json";

export function Skills() {
  const { skills } = portfolioData;

  const categories = [
    {
      num: "01",
      title: "Core Languages",
      items: skills.Languages,
      description: "Foundational languages used across production applications.",
    },
    {
      num: "02",
      title: "Frameworks & Mobile",
      items: skills["Frameworks & Libraries"],
      description: "Modern UI engines, client runtimes, and state ecosystems.",
    },
    {
      num: "03",
      title: "Databases & Storage",
      items: skills.Databases,
      description: "Data persistence, cloud object storage, and memory caches.",
    },
    {
      num: "04",
      title: "Tools & Platforms",
      items: skills["Tools & Platforms"],
      description: "Containerization, developer tooling, and deployment pipelines.",
    },
  ];

  return (
    <section id="skills" className="py-28 md:py-36 px-6 border-t border-border/40 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 lg:mb-28 gap-4">
          <div>
            <AnimatedContent distance={15} direction="vertical" delay={0.05}>
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-primary mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>04 // CAPABILITIES & TOOLKIT</span>
              </div>
            </AnimatedContent>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
              <BlurText text="Technical competencies." animateBy="words" delay={0.06} />
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-md font-light leading-relaxed">
            Production-tested toolkit applied across modular frontend architectures, mobile clients, and distributed APIs.
          </p>
        </div>

        <div className="divide-y divide-border/40">
          {categories.map((category, index) => (
            <AnimatedContent
              key={category.title}
              distance={20}
              direction="vertical"
              delay={0.08 * index}
            >
              <div className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group">
                <div className="lg:col-span-4 space-y-1.5">
                  <span className="text-xs font-mono text-primary uppercase tracking-widest block">
                    {category.num} &bull; CATEGORY
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-light pt-1">
                    {category.description}
                  </p>
                </div>

                <div className="lg:col-span-8 flex flex-wrap gap-2.5 sm:gap-3">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-secondary/80 border border-border/70 text-xs sm:text-sm font-mono text-foreground hover:border-primary/60 hover:text-primary hover:bg-secondary transition-all duration-200 cursor-default select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
