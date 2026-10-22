"use client";

import React from "react";
import { BlurText } from "@/components/react-bits/blur-text";
import { Database, Server, BarChart3, Layers } from "lucide-react";

const secondaryProjects = [
  {
    title: "Analytics Dashboard",
    category: "Full-Stack Architecture",
    description:
      "Interactive enterprise analytics dashboard with real-time telemetry metrics, automated reporting, and modular Chart.js visualizations.",
    tech: ["React", "Express.js", "Chart.js", "MySQL", "Redis"],
    icon: BarChart3,
  },
  {
    title: "Microservices API Gateway",
    category: "Cloud & Backend Infrastructure",
    description:
      "Scalable API gateway featuring token authentication, sliding-window rate limiting, and dynamic reverse-proxy request routing for distributed services.",
    tech: ["Node.js", "Express", "Docker", "AWS", "Redis"],
    icon: Server,
  },
  {
    title: "District Education Infrastructure (Drishti)",
    category: "Next.js Enterprise System",
    description:
      "Frontend architecture powering dynamic survey collection, school infrastructure asset management, and offline-resilient task workflows.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    icon: Database,
  },
];

export function StackedProjects() {
  return (
    <section className="py-24 px-6 border-t border-border/60">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-mono tracking-widest text-primary uppercase mb-3 flex items-center justify-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture & Secondary Work</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            <BlurText text="Systems & Infrastructure" animateBy="words" delay={0.06} />
          </h3>
        </div>

        <div className="space-y-8 relative">
          {secondaryProjects.map((item, index) => {
            const Icon = item.icon;
            const topOffset = 100 + index * 24;

            return (
              <div
                key={item.title}
                style={{ top: `${topOffset}px` }}
                className="sticky rounded-2xl bg-card border border-border p-8 shadow-2xl transition-all duration-300 hover:border-primary/40"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center text-primary">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                      <p className="text-xs font-mono text-primary">{item.category}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-secondary px-2.5 py-1 rounded-md border border-border w-fit">
                    0{index + 1}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-secondary border border-border text-xs font-mono text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
