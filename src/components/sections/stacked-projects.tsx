"use client";

import React from "react";
import { Layers } from "lucide-react";
import portfolioData from "@/constant/portfolio-data.json";
import { secondaryProjects } from "@/constant/projects";
import { SubHeading } from "@/components/ui/section-heading";

export function StackedProjects() {
  const sectionData = portfolioData.sections.stackedProjects;

  return (
    <section className="py-20 md:py-28 px-6 relative">
      <div className="container max-w-4xl mx-auto">
        <SubHeading
          eyebrow={sectionData.eyebrow}
          eyebrowIcon={<Layers className="w-3.5 h-3.5" />}
          title={sectionData.title}
          description={sectionData.description}
          align="center"
          className="mb-20"
        />

        <div className="space-y-10 relative">
          {secondaryProjects.map((item, index) => {
            const Icon = item.icon;
            const stickyTop = 110 + index * 28;

            return (
              <div
                key={item.title}
                style={{ top: `${stickyTop}px` }}
                className="sticky rounded-3xl bg-card border border-border/80 p-8 sm:p-10 transition-all duration-300 hover:border-primary/50 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-border/60 pb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs font-mono text-primary mt-0.5">
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full border border-border w-fit">
                    {item.num}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border/40">
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-secondary border border-border/60 text-xs font-mono text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-primary/80">
                    {item.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
