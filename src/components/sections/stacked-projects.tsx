"use client";

import React from "react";
import { Layers, Server, ShieldCheck, Zap } from "lucide-react";
import { AnimatedContent } from "@/components/react-bits/animated-content";
import { BlurText } from "@/components/react-bits/blur-text";

const secondaryProjects = [
  {
    num: "01",
    title: "District Education Infrastructure (Drishti)",
    category: "Enterprise System & Dynamic Forms",
    description:
      "Frontend architecture powering dynamic survey collection, school infrastructure asset management, and offline-resilient task workflows across statewide administrative modules.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "REST APIs"],
    icon: Server,
    metric: "20% bug reduction • 25% faster feature delivery",
  },
  {
    num: "02",
    title: "Real-Time Telemedicine & Telemetry Client",
    category: "WebRTC & Mobile Infrastructure",
    description:
      "Cross-platform mobile application featuring encrypted physician video consultations via VideoSDK, real-time vitals telemetry, and automated cloud recording pipelines to AWS S3.",
    tech: ["React Native", "VideoSDK", "AWS S3", "Health Connect", "WebRTC"],
    icon: Zap,
    metric: "20% higher call reliability • Secure AWS S3 recording",
  },
  {
    num: "03",
    title: "Microservices Gateway & Edge Rate Limiter",
    category: "Cloud & Distributed Systems",
    description:
      "Scalable API gateway featuring sliding-window rate limiting, token authentication, dynamic reverse-proxy request routing, and resilient distributed error logging.",
    tech: ["Node.js", "Express", "Docker", "Redis", "AWS"],
    icon: ShieldCheck,
    metric: "Sliding-window throttling • High-throughput reverse proxy",
  },
];

export function StackedProjects() {
  return (
    <section className="py-28 md:py-36 px-6 border-t border-border/40 relative">
      <div className="container max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <AnimatedContent distance={15} direction="vertical" delay={0.05}>
            <div className="text-xs font-mono tracking-widest text-primary uppercase mb-4 flex items-center justify-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>SYSTEMS & INFRASTRUCTURE</span>
            </div>
          </AnimatedContent>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            <BlurText text="Architecture & scale." animateBy="words" delay={0.06} />
          </h3>
          <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto mt-4 font-light">
            Behind the UI: production-tested distributed systems, dynamic form engines, and real-time pipelines.
          </p>
        </div>

        <div className="space-y-10 relative">
          {secondaryProjects.map((item, index) => {
            const Icon = item.icon;
            const stickyTop = 110 + index * 28;

            return (
              <div
                key={item.title}
                style={{ top: `${stickyTop}px` }}
                className="sticky rounded-3xl bg-card border border-border/80 p-8 sm:p-10 shadow-2xl transition-all duration-300 hover:border-primary/50 group"
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
