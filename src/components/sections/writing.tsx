"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { AnimatedContent } from "@/components/react-bits/animated-content";
import { BlurText } from "@/components/react-bits/blur-text";
import portfolioData from "@/constant/portfolio-data.json";

export function Writing() {
  const { blogs } = portfolioData;

  if (!blogs || blogs.length === 0) return null;

  const featuredPost = blogs[0];
  const otherPosts = blogs.slice(1);

  return (
    <section id="writing" className="py-28 md:py-36 px-6 border-t border-border/40 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 lg:mb-28 gap-4">
          <div>
            <AnimatedContent distance={15} direction="vertical" delay={0.05}>
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-primary mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>05 // WRITING & PUBLICATIONS</span>
              </div>
            </AnimatedContent>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
              <BlurText text="Technical writing." animateBy="words" delay={0.06} />
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-md font-light leading-relaxed">
            Practical deep-dives into cloud storage pipelines, WebRTC video integrations, and Android telemetry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <AnimatedContent distance={20} direction="vertical" delay={0.1}>
              <a
                href={featuredPost.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block space-y-6"
              >
                <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-muted border border-border/60">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 680px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border text-xs font-mono text-primary">
                      Featured Publication
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                    <span className="text-primary">{featuredPost.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {featuredPost.title}
                  </h3>

                  <div className="pt-2 flex items-center gap-2 text-sm font-semibold text-primary">
                    <span>Read on Dev.to</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </a>
            </AnimatedContent>
          </div>

          <div className="lg:col-span-5 space-y-8 divide-y divide-border/40">
            {otherPosts.map((article, index) => (
              <AnimatedContent
                key={article.title}
                distance={20}
                direction="vertical"
                delay={0.15 * (index + 1)}
              >
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block pt-8 first:pt-0 space-y-3"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span className="text-primary">{article.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h4>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors pt-1">
                    <span>Read article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              </AnimatedContent>
            ))}

            <div className="pt-8">
              <a
                href="https://dev.to/tapan-7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                <span>View all articles on Dev.to</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
