"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import portfolioData from "@/constant/portfolio-data.json";
import { TechIcon } from "@/components/icons/tech-icons";

type CloudItem =
  | { type: "empty" }
  | { type: "skill"; name: string; category: string };

interface CloudRow {
  direction: "left" | "right";
  duration: number;
  items: CloudItem[];
}

const CLOUD_ROWS: CloudRow[] = [
  {
    direction: "left",
    duration: 38,
    items: [
      { type: "skill", name: "React.js", category: "Frontend Architecture" },
      { type: "skill", name: "Next.js", category: "Full Stack Framework" },
      { type: "empty" },
      { type: "skill", name: "TypeScript", category: "Type-Safe Development" },
      { type: "empty" },
      { type: "skill", name: "JavaScript", category: "Core Language" },
      { type: "skill", name: "Tailwind CSS", category: "UI & Design System" },
      { type: "empty" },
      { type: "skill", name: "React Native", category: "Cross-Platform Mobile" },
      { type: "empty" },
      { type: "skill", name: "HTML5", category: "Semantic Markup" },
      { type: "skill", name: "CSS3", category: "Modern Styling" },
      { type: "empty" },
    ],
  },
  {
    direction: "right",
    duration: 46,
    items: [
      { type: "empty" },
      { type: "skill", name: "Node.js", category: "JavaScript Runtime" },
      { type: "skill", name: "NestJS", category: "Scalable Backend" },
      { type: "empty" },
      { type: "skill", name: "REST APIs", category: "API Architecture" },
      { type: "empty" },
      { type: "skill", name: "WebSockets", category: "Real-time Telemetry" },
      { type: "skill", name: "GraphQL", category: "Data Querying" },
      { type: "empty" },
      { type: "skill", name: "Redis", category: "Cache & Pub/Sub" },
      { type: "empty" },
      { type: "skill", name: "BullMQ", category: "Background Job Queues" },
      { type: "skill", name: "Salesforce API", category: "Enterprise Integrations" },
    ],
  },
  {
    direction: "left",
    duration: 42,
    items: [
      { type: "skill", name: "PostgreSQL", category: "Relational Database" },
      { type: "empty" },
      { type: "skill", name: "Prisma ORM", category: "Database ORM" },
      { type: "skill", name: "MongoDB", category: "Document Database" },
      { type: "empty" },
      { type: "skill", name: "MySQL", category: "Relational Database" },
      { type: "empty" },
      { type: "skill", name: "Docker", category: "Containerization" },
      { type: "skill", name: "AWS S3", category: "Cloud Storage" },
      { type: "empty" },
      { type: "skill", name: "AWS", category: "Cloud Infrastructure" },
      { type: "skill", name: "Vercel", category: "Edge Cloud Platform" },
      { type: "empty" },
    ],
  },
  {
    direction: "right",
    duration: 50,
    items: [
      { type: "empty" },
      { type: "skill", name: "Git", category: "Version Control" },
      { type: "skill", name: "GitHub", category: "Code Collaboration" },
      { type: "empty" },
      { type: "skill", name: "GitLab", category: "DevOps & CI/CD" },
      { type: "empty" },
      { type: "skill", name: "Linux", category: "System Environment" },
      { type: "skill", name: "VS Code", category: "Development IDE" },
      { type: "empty" },
      { type: "skill", name: "Postman", category: "API Design & Testing" },
      { type: "empty" },
      { type: "skill", name: "VideoSDK", category: "WebRTC Audio/Video" },
      { type: "skill", name: "Google Drive API", category: "Cloud API Integration" },
    ],
  },
];

function CloudTile({
  item,
  isAriaHidden = false,
  isActive = false,
  onHover,
}: {
  item: CloudItem;
  isAriaHidden?: boolean;
  isActive?: boolean;
  onHover?: (item: CloudItem | null) => void;
}) {
  if (item.type === "empty") {
    return (
      <div
        aria-hidden="true"
        className="w-[var(--tile)] h-[var(--tile)] shrink-0 rounded-[0.875rem] bg-muted/40 dark:bg-muted/15 border border-border/30 dark:border-white/5 shadow-inner blur-[0.5px]"
      />
    );
  }

  return (
    <div
      tabIndex={isAriaHidden ? -1 : 0}
      aria-label={item.name}
      title={`${item.name} (${item.category})`}
      onMouseEnter={() => onHover?.(item)}
      onMouseLeave={() => onHover?.(null)}
      onFocus={() => onHover?.(item)}
      onBlur={() => onHover?.(null)}
      className={`group relative flex w-[var(--tile)] h-[var(--tile)] shrink-0 items-center justify-center rounded-[0.875rem] p-3 sm:p-3.5 bg-card border transition-all duration-200 cursor-pointer select-none ${
        isActive
          ? "border-primary bg-card shadow-[0_0_20px_hsl(var(--primary)/0.22)]"
          : "border-border/60 dark:border-white/10 shadow-sm hover:border-primary/60 hover:bg-card/90 hover:shadow-[0_0_15px_hsl(var(--primary)/0.15)]"
      }`}
    >
      <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110">
        <TechIcon name={item.name} size={32} />
      </div>
    </div>
  );
}

export function Skills() {
  const [activeSkill, setActiveSkill] = useState<{
    name: string;
    category: string;
  } | null>(null);

  const handleHover = (item: CloudItem | null) => {
    if (item && item.type === "skill") {
      setActiveSkill({ name: item.name, category: item.category });
    } else {
      setActiveSkill(null);
    }
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative z-10 flex flex-col items-center justify-center overflow-x-clip py-20 sm:py-28"
    >
      <div className="container max-w-6xl mx-auto px-6 mb-6 sm:mb-8">
        <SectionHeading
          align="center"
          eyebrow={portfolioData.sections.skills.eyebrow}
          title={portfolioData.sections.skills.title}
          description={portfolioData.sections.skills.description}
        />
      </div>

      <div className="flex items-center justify-center min-h-[2.5rem] mb-6 sm:mb-8 px-4">
        {activeSkill ? (
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-secondary/80 border border-border/80 text-xs font-mono text-foreground animate-in fade-in zoom-in-95 duration-150">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-semibold text-primary">{activeSkill.name}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{activeSkill.category}</span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono text-muted-foreground/60">
            <span>Hover or tap any technology to inspect</span>
          </div>
        )}
      </div>

      <div
        aria-label="Technical skills and tools"
        className="relative flex w-full flex-col overflow-hidden py-4 [--gap:0.625rem] [--tile:3.25rem] sm:[--gap:0.75rem] sm:[--tile:3.85rem] lg:[--gap:0.875rem] lg:[--tile:4.4rem] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 lg:w-36 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 lg:w-36 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex flex-col gap-[var(--gap)]">
          {CLOUD_ROWS.map((row, rowIdx) => (
            <div key={rowIdx} className="overflow-hidden group/row">
              <div
                className={`flex w-max ${
                  row.direction === "left"
                    ? "animate-marquee-left"
                    : "animate-marquee-right"
                } group-hover/row:[animation-play-state:paused] group-active/row:[animation-play-state:paused]`}
                style={
                  {
                    "--marquee-duration": `${row.duration}s`,
                    animationDuration: `${row.duration}s`,
                  } as React.CSSProperties
                }
              >
                <div className="flex shrink-0 items-center gap-[var(--gap)] pr-[var(--gap)]">
                  {row.items.map((item, itemIdx) => (
                    <CloudTile
                      key={`t1-${rowIdx}-${itemIdx}`}
                      item={item}
                      isActive={
                        item.type === "skill" &&
                        activeSkill?.name === item.name
                      }
                      onHover={handleHover}
                    />
                  ))}
                </div>
                <div
                  aria-hidden="true"
                  className="flex shrink-0 items-center gap-[var(--gap)] pr-[var(--gap)]"
                >
                  {row.items.map((item, itemIdx) => (
                    <CloudTile
                      key={`t2-${rowIdx}-${itemIdx}`}
                      item={item}
                      isAriaHidden
                      isActive={
                        item.type === "skill" &&
                        activeSkill?.name === item.name
                      }
                      onHover={handleHover}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
