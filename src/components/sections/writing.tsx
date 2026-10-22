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
    <section id="writing" className="py-28 px-6 border-t border-border/60 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>05 // Publication</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              <BlurText text="Technical writing" animateBy="words" delay={0.06} />
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-md">
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
                className="group flex flex-col justify-between h-full rounded-2xl bg-card border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span className="font-mono text-primary bg-muted px-2.5 py-1 rounded-md border border-border">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>
                </div>

                <div className="pt-6 mt-6 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="group-hover:text-foreground transition-colors">Read on Dev.to</span>
                  <div className="w-7 h-7 rounded-full bg-secondary border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-all">
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
