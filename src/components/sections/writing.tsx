"use client";

import React from "react";
import { AnimatedContent } from "@/components/react-bits/animated-content";
import { BlurText } from "@/components/react-bits/blur-text";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import portfolioData from "@/constant/portfolio-data.json";

export function Writing() {
  const { blogs } = portfolioData;

  if (!blogs || blogs.length === 0) return null;

  return (
    <section id="writing" className="py-28 px-6 border-t border-[#27272a]/60 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#a78bfa] uppercase mb-3 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>05 // Publication</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f4f4f5]">
              <BlurText text="Technical writing" animateBy="words" delay={0.06} />
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#a1a1aa] max-w-md">
            Sharing practical engineering deep-dives, mobile SDK integrations, and cloud storage workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((article, index) => (
            <AnimatedContent
              key={article.title}
              distance={25}
              direction="vertical"
              delay={0.12 * index}
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between h-full rounded-2xl bg-[#141418] border border-[#27272a] p-6 hover:border-[#a78bfa]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#a1a1aa] mb-4">
                    <span className="font-mono text-[#a78bfa] bg-[#1e1e24] px-2.5 py-1 rounded-md border border-[#27272a]">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#f4f4f5] group-hover:text-[#a78bfa] transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>
                </div>

                <div className="pt-6 mt-6 border-t border-[#27272a] flex items-center justify-between text-xs font-mono text-[#a1a1aa]">
                  <span className="group-hover:text-[#f4f4f5] transition-colors">Read on Dev.to</span>
                  <div className="w-7 h-7 rounded-full bg-[#18181b] border border-[#27272a] flex items-center justify-center group-hover:border-[#a78bfa] group-hover:text-[#a78bfa] transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
