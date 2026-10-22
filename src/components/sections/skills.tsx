"use client";

import React from "react";
import { AnimatedContent } from "@/components/react-bits/animated-content";
import { BlurText } from "@/components/react-bits/blur-text";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { Cpu, Terminal, Layout, Database } from "lucide-react";
import portfolioData from "@/constant/portfolio-data.json";

export function Skills() {
  const { skills } = portfolioData;

  const categories = [
    {
      title: "Core Languages",
      icon: Terminal,
      items: skills.Languages,
    },
    {
      title: "Frameworks & Mobile",
      icon: Layout,
      items: skills["Frameworks & Libraries"],
    },
    {
      title: "Databases & Storage",
      icon: Database,
      items: skills.Databases,
    },
    {
      title: "Tools & Platforms",
      icon: Cpu,
      items: skills["Tools & Platforms"],
    },
  ];

  return (
    <section id="skills" className="py-28 px-6 border-t border-[#27272a]/60 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#a78bfa] uppercase mb-3">
              04 // Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f4f4f5]">
              <BlurText text="Technical competencies" animateBy="words" delay={0.06} />
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#a1a1aa] max-w-md">
            Production-tested toolkit applied across web architectures, mobile apps, and distributed systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <AnimatedContent
                key={category.title}
                distance={25}
                direction="vertical"
                delay={0.1 * index}
              >
                <SpotlightCard className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#27272a]">
                      <div className="w-10 h-10 rounded-xl bg-[#1e1e24] border border-[#27272a] flex items-center justify-center text-[#a78bfa]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-[#f4f4f5]">{category.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {category.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3.5 py-1.5 rounded-lg bg-[#18181b] border border-[#27272a] text-xs font-mono text-[#f4f4f5] hover:border-[#a78bfa] hover:text-[#a78bfa] transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#27272a]/40 flex items-center justify-between text-xs font-mono text-[#a1a1aa]">
                    <span>{category.items.length} tools</span>
                    <span className="text-[#a78bfa]">Ready for production</span>
                  </div>
                </SpotlightCard>
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
