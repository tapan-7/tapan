"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatedContent } from "@/components/react-bits/animated-content";
import { BlurText } from "@/components/react-bits/blur-text";
import { CountUp } from "@/components/react-bits/count-up";
import portfolioData from "@/constant/portfolio-data.json";
import { aboutPillars } from "@/constant/about";
import { SectionHeading, SubHeading } from "@/components/ui/section-heading";

export function About() {
  const { profile } = portfolioData;
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6 relative overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="mb-24 lg:mb-32">
          <SectionHeading
            eyebrow="01 // THE PERSON BEHIND THE CODE"
            title="More than just code."
            gradientText="I build digital experiences where engineering meets thoughtful design."
            description="From frontend architecture to mobile experiences, I enjoy turning complex problems into interfaces that feel simple and intuitive."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 lg:mb-32">
          <div className="lg:col-span-5">
            <AnimatedContent distance={30} direction="vertical" delay={0.1}>
              <div className="relative group max-w-md mx-auto lg:max-w-none">
                <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-muted">
                  <Image
                    src="/profile.jpeg"
                    alt={profile.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 420px"
                    className="object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-primary mb-1">
                        Software Development Engineer
                      </p>
                      <p className="text-lg font-bold text-foreground">
                        {profile.name}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">
                      IND
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
                  TAPAN KUMAR SWAIN
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Engineer by craft. <br className="hidden sm:inline" />
                  <span className="text-muted-foreground">
                    Designer by curiosity.
                  </span>
                </h3>
              </div>
            </AnimatedContent>

            <AnimatedContent distance={20} direction="vertical" delay={0.3}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Over the past three years, I&apos;ve contributed to enterprise
                legal-tech platforms, public education systems, and digital
                healthcare at{" "}
                <span className="text-foreground font-semibold">
                  HyScaler Nettantra Technologies Pvt. Ltd.
                </span>
                .
              </p>
            </AnimatedContent>

            <AnimatedContent distance={20} direction="vertical" delay={0.4}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                My approach combines architectural discipline with design
                sensitivity. From building interactive dashboards and custom
                dynamic form builders to integrating real-time telemetry like
                VideoSDK and Health Connect, I strive to make software feel
                swift, intuitive, and resilient.
              </p>
            </AnimatedContent>
          </div>
        </div>

        <AnimatedContent distance={25} direction="vertical" delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 mb-28 border-y border-border/50">
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono text-primary tracking-tight">
                <CountUp to={3} padZero duration={1.8} suffix="+" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-2">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono text-foreground tracking-tight">
                Web
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-2">
                Frontend Architecture
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono text-foreground tracking-tight">
                Mobile
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-2">
                Cross-Platform Apps
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono text-foreground tracking-tight">
                <CountUp to={100} duration={2} suffix="%" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-2">
                Quality & Delivery
              </div>
            </div>
          </div>
        </AnimatedContent>

        <div className="pt-4">
          <SubHeading
            eyebrow="WHAT I CARE ABOUT"
            title="Performance. Precision. People."
            description="The technical and human details that make software feel effortless."
            className="mb-12 pb-6 border-b border-border/50"
          />

          <div className="divide-y divide-border/40">
            {aboutPillars.map((pillar, index) => {
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
