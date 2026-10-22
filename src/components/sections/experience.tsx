"use client";

import React from "react";
import { AnimatedContent } from "@/components/react-bits/animated-content";
import { BlurText } from "@/components/react-bits/blur-text";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import portfolioData from "@/constant/portfolio-data.json";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-28 px-6 border-t border-border/60 relative">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-primary uppercase mb-3">
              02 // Trajectory
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              <BlurText text="Professional experience" animateBy="words" delay={0.06} />
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-sm">
            Proven track record delivering reliable frontend systems and mobile products.
          </p>
        </div>

        <div className="relative border-l border-border ml-4 md:ml-32 pl-8 md:pl-12 space-y-16">
          {experience.map((job, index) => (
            <AnimatedContent
              key={index}
              distance={25}
              direction="vertical"
              delay={0.15 * index}
              className="relative group"
            >
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-card border-2 border-primary group-hover:scale-125 transition-transform duration-300" />

              <div className="hidden md:block absolute -left-44 top-1 w-28 text-right font-mono text-xs text-muted-foreground">
                {job.period.split("–")[0].trim()}
              </div>

              <div className="p-7 rounded-2xl bg-card border border-border group-hover:border-primary/40 transition-all duration-300 shadow-md shadow-black/10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="md:hidden inline-flex items-center gap-1.5 text-xs font-mono text-primary px-2.5 py-1 rounded-full bg-muted border border-border">
                    <Calendar className="w-3 h-3" />
                    <span>{job.period}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground mb-5">
                  <span className="flex items-center gap-1.5 font-medium text-foreground">
                    <Briefcase className="w-3.5 h-3.5 text-primary" />
                    {job.company}
                  </span>
                  <span className="hidden sm:inline text-border">•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                  <span className="hidden md:inline text-border">•</span>
                  <span className="hidden md:inline font-mono text-xs text-primary">
                    {job.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-normal">
                  {job.description}
                </p>

                <div className="space-y-2.5 border-t border-border/60 pt-5">
                  {job.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </div>
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
