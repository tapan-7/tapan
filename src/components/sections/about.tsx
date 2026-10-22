"use client";

import React from "react";
import Image from "next/image";
import { AnimatedContent } from "@/components/react-bits/animated-content";
import { BlurText } from "@/components/react-bits/blur-text";
import { Code2, Smartphone, Layers, Sparkles } from "lucide-react";
import portfolioData from "@/constant/portfolio-data.json";

export function About() {
  const { profile } = portfolioData;

  const keyFocus = [
    {
      icon: Code2,
      title: "Frontend Engineering",
      desc: "Architecting modular, type-safe web systems using React 18, Next.js App Router, and Tailwind CSS.",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      desc: "Building native-grade iOS & Android applications in React Native with real-time video and device telemetry.",
    },
    {
      icon: Layers,
      title: "State & Architecture",
      desc: "Structuring clean, testable state flows, robust API layers, and reusable UI library ecosystems.",
    },
    {
      icon: Sparkles,
      title: "User Experience",
      desc: "Obsessing over frame rates, subtle micro-interactions, responsive ergonomics, and strict accessibility standards.",
    },
  ];

  return (
    <section id="about" className="py-28 px-6 border-t border-border/60 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-primary uppercase mb-3">
              01 // Background
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              <BlurText text="Crafting modern interfaces" animateBy="words" delay={0.06} />
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-md">
            Bridging technical precision with human-centered product aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5 flex justify-center">
            <AnimatedContent distance={30} direction="vertical" delay={0.1}>
              <div className="relative group">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-accent to-primary opacity-25 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border border-border bg-card">
                  <Image
                    src="/profile.jpeg"
                    alt={profile.name}
                    fill
                    sizes="(max-width: 768px) 256px, 288px"
                    className="object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-background/80 backdrop-blur-md border border-border/60 text-xs">
                    <p className="font-semibold text-foreground">{profile.name}</p>
                    <p className="text-muted-foreground">{profile.title}</p>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <AnimatedContent distance={20} direction="vertical" delay={0.2}>
              <h3 className="text-2xl font-bold text-foreground">
                Frontend Engineer dedicated to building polished, scalable products.
              </h3>
            </AnimatedContent>

            <AnimatedContent distance={20} direction="vertical" delay={0.3}>
              <p className="text-base text-muted-foreground leading-relaxed">
                Over the past two years, I&apos;ve contributed to large-scale web and mobile systems across public education and digital healthcare at <span className="text-foreground font-medium">Hyscaler Nettantra Technologies</span>.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={20} direction="vertical" delay={0.4}>
              <p className="text-base text-muted-foreground leading-relaxed">
                My approach combines architectural discipline with design sensitivity. From building interactive dashboards and custom dynamic form builders to integrating real-time telemetry like VideoSDK and Health Connect, I strive to make software feel swift, intuitive, and resilient.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={20} direction="vertical" delay={0.5}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-border">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary font-mono">2+</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground font-mono">3+</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Production Apps</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground font-mono">100%</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Commitment</div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {keyFocus.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedContent
                key={item.title}
                distance={20}
                direction="vertical"
                delay={0.1 * index}
              >
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center text-primary mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
