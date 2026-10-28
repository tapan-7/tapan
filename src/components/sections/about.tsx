"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatedContent } from "@/components/react-bits/animated-content";
import { CountUp } from "@/components/react-bits/count-up";
import portfolioData from "@/constant/portfolio-data.json";
import { SectionHeading, SubHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { ImageParticles } from "@/components/ui/image-particles";

export function About() {
  const { profile, about } = portfolioData;
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6 relative overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="mb-24 lg:mb-32">
          <SectionHeading
            eyebrow={about.heading.eyebrow}
            title={about.heading.title}
            gradientText={about.heading.gradientText}
            description={about.heading.description}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 lg:mb-32">
          <div className="lg:col-span-5">
            <AnimatedContent distance={30} direction="vertical" delay={0.1}>
              <div className="relative group max-w-md mx-auto lg:max-w-none">
                <ImageParticles
                  src="/profile-outline.png"
                  alt={profile.name}
                  fit="contain"
                  gap={3}
                  particleSize={1.5}
                  repulsionRadius={75}
                  repulsionStrength={0.95}
                  className="relative aspect-square w-full max-w-[420px] mx-auto"
                />
                <div className="flex items-center justify-between pt-4 px-2">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-primary mb-1">
                      {about.bio.role || profile.title}
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {profile.name}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-muted-foreground bg-secondary/80 px-2.5 py-0.5 rounded-full border border-border">
                      {about.bio.countryCode}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:pt-4">
            <AnimatedContent distance={20} direction="vertical" delay={0.2}>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-primary block mb-2">
                  {about.bio.nameLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {about.bio.title} <br className="hidden sm:inline" />
                  <span className="text-muted-foreground">
                    {about.bio.subtitle}
                  </span>
                </h3>
              </div>
            </AnimatedContent>

            {about.bio.paragraphs.map((paragraph, idx) => (
              <AnimatedContent
                key={idx}
                distance={20}
                direction="vertical"
                delay={0.3 + idx * 0.1}
              >
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              </AnimatedContent>
            ))}
          </div>
        </div>

        <AnimatedContent distance={25} direction="vertical" delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 mb-28 border-y border-border/50">
            {about.stats.map((stat, idx) => (
              <div key={stat.label}>
                <div
                  className={cn(
                    "text-4xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight",
                    idx === 0 ? "text-primary" : "text-foreground",
                  )}
                >
                  {stat.isCountUp ? (
                    <CountUp
                      to={Number(stat.value)}
                      padZero={Boolean(stat.padZero)}
                      duration={stat.duration || 2}
                      suffix={stat.suffix || ""}
                    />
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedContent>

        <div className="pt-4">
          <SubHeading
            eyebrow={about.pillarsHeading.eyebrow}
            title={about.pillarsHeading.title}
            description={about.pillarsHeading.description}
            className="mb-12 pb-6 border-b border-border/50"
          />

          <div className="divide-y divide-border/40">
            {about.pillars.map((pillar, index) => {
              const isHovered = hoveredPillar === index;
              return (
                <AnimatedContent
                  key={pillar.num}
                  distance={15}
                  direction="vertical"
                  delay={0.08 * index}
                >
                  <div
                    onMouseEnter={() => setHoveredPillar(index)}
                    onMouseLeave={() => setHoveredPillar(null)}
                    className="group py-8 sm:py-10 transition-colors duration-300 flex flex-col md:flex-row md:items-baseline justify-between gap-4 cursor-default"
                  >
                    <div className="flex items-baseline gap-6 md:gap-10 md:w-1/2">
                      <span className="text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors duration-300 w-8">
                        {pillar.num}
                      </span>
                      <div>
                        <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary group-hover:translate-x-1.5 transition-all duration-300">
                          {pillar.title}
                        </h4>
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1 block">
                          {pillar.tagline}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-6 md:w-1/2 pl-14 md:pl-0">
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                        {pillar.desc}
                      </p>
                      <ArrowUpRight
                        className={`w-5 h-5 text-muted-foreground transition-all duration-300 flex-shrink-0 ${
                          isHovered
                            ? "text-primary translate-x-1 -translate-y-1 rotate-45"
                            : "opacity-40"
                        }`}
                      />
                    </div>
                  </div>
                </AnimatedContent>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
