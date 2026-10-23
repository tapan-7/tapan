import React from "react";
import portfolioData from "@/constant/portfolio-data.json";
import { getTechIcon, TechIconProps } from "@/components/icons";

export interface SkillItem {
  name: string;
  icon: React.FC<TechIconProps>;
  base: { x: number; y: number };
  entry: { x: number; y: number };
}

export interface CategoryData {
  num: string;
  title: string;
  skills: SkillItem[];
}

export interface StageRange {
  enterStart: number;
  enterEnd: number;
  exitStart: number;
  exitEnd: number;
}

const skillCoordinates: Record<
  string,
  {
    base: { x: number; y: number };
    entry: { x: number; y: number };
  }
> = {
  "React.js": { base: { x: -360, y: -90 }, entry: { x: -520, y: -190 } },
  React: { base: { x: -360, y: -90 }, entry: { x: -520, y: -190 } },
  "Next.js": { base: { x: 220, y: -100 }, entry: { x: 440, y: -210 } },
  "React Native": { base: { x: 320, y: 15 }, entry: { x: 500, y: 30 } },
  TypeScript: { base: { x: -280, y: 85 }, entry: { x: -440, y: 180 } },
  JavaScript: { base: { x: 190, y: 95 }, entry: { x: 400, y: 190 } },

  NestJS: { base: { x: -300, y: -70 }, entry: { x: -480, y: -150 } },
  "Node.js": { base: { x: 280, y: -70 }, entry: { x: 470, y: -150 } },
  "REST APIs": { base: { x: -280, y: 75 }, entry: { x: -460, y: 160 } },
  WebSockets: { base: { x: 270, y: 80 }, entry: { x: 470, y: 160 } },

  PostgreSQL: { base: { x: -290, y: -70 }, entry: { x: -470, y: -150 } },
  "Prisma ORM": { base: { x: 280, y: -70 }, entry: { x: 470, y: -150 } },
  Prisma: { base: { x: 280, y: -70 }, entry: { x: 470, y: -150 } },
  MongoDB: { base: { x: -280, y: 75 }, entry: { x: -460, y: 160 } },
  "Mongo DB": { base: { x: -280, y: 75 }, entry: { x: -460, y: 160 } },
  MySQL: { base: { x: 280, y: 75 }, entry: { x: 470, y: 160 } },

  Docker: { base: { x: -310, y: -70 }, entry: { x: -500, y: -150 } },
  "AWS S3": { base: { x: 270, y: -70 }, entry: { x: 470, y: -150 } },
  AWS: { base: { x: 270, y: -70 }, entry: { x: 470, y: -150 } },
  Vercel: { base: { x: -280, y: 75 }, entry: { x: -470, y: 160 } },
  GitHub: { base: { x: 280, y: 80 }, entry: { x: 470, y: 170 } },
  GitLab: { base: { x: 280, y: 80 }, entry: { x: 470, y: 170 } },
  Linux: { base: { x: -350, y: 0 }, entry: { x: -520, y: 0 } },

  Redis: { base: { x: -260, y: 0 }, entry: { x: -460, y: -20 } },
  BullMQ: { base: { x: 260, y: 0 }, entry: { x: 460, y: 20 } },

  "Salesforce API": { base: { x: -300, y: -45 }, entry: { x: -480, y: -110 } },
  "Google Drive API": { base: { x: 280, y: -45 }, entry: { x: 480, y: -110 } },
  VideoSDK: { base: { x: 0, y: 105 }, entry: { x: 0, y: 210 } },

  Git: { base: { x: -300, y: -45 }, entry: { x: -480, y: -110 } },
  Postman: { base: { x: 280, y: -45 }, entry: { x: 480, y: -110 } },
  "VS Code": { base: { x: 0, y: 110 }, entry: { x: 0, y: 220 } },
};

export function resolveSkillItem(name: string, index: number, total: number): SkillItem {
  const icon = getTechIcon(name);
  if (skillCoordinates[name]) {
    return {
      name,
      icon,
      base: skillCoordinates[name].base,
      entry: skillCoordinates[name].entry,
    };
  }
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const radiusX = 320;
  const radiusY = 130;
  return {
    name,
    icon,
    base: {
      x: Math.round(Math.cos(angle) * radiusX),
      y: Math.round(Math.sin(angle) * radiusY),
    },
    entry: {
      x: Math.round(Math.cos(angle) * (radiusX + 180)),
      y: Math.round(Math.sin(angle) * (radiusY + 120)),
    },
  };
}

export const skillCategories: CategoryData[] = Object.entries(portfolioData.skills).map(
  ([categoryTitle, skillNames], idx) => ({
    num: `0${idx + 1}`,
    title: categoryTitle,
    skills: (skillNames as string[]).map((name, sIdx) =>
      resolveSkillItem(name, sIdx, skillNames.length)
    ),
  })
);

export function getStageRanges(count: number): StageRange[] {
  const slice = 1 / count;
  const ramp = Math.min(0.05, slice * 0.25);
  return Array.from({ length: count }, (_, i) => ({
    enterStart: i * slice,
    enterEnd: i * slice + ramp,
    exitStart: (i + 1) * slice - ramp,
    exitEnd: (i + 1) * slice,
  }));
}
