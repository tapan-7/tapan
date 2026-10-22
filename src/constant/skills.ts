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
  JavaScript: { base: { x: -360, y: -90 }, entry: { x: -500, y: -180 } },
  TypeScript: { base: { x: 220, y: -95 }, entry: { x: 440, y: -200 } },
  HTML: { base: { x: -340, y: 95 }, entry: { x: -480, y: 190 } },
  HTML5: { base: { x: -340, y: 95 }, entry: { x: -480, y: 190 } },
  CSS: { base: { x: 230, y: 90 }, entry: { x: 450, y: 180 } },
  CSS3: { base: { x: 230, y: 90 }, entry: { x: 450, y: 180 } },

  React: { base: { x: -380, y: -110 }, entry: { x: -520, y: -200 } },
  "Next.js": { base: { x: 200, y: -115 }, entry: { x: 420, y: -210 } },
  "React Native": { base: { x: 310, y: 5 }, entry: { x: 500, y: 20 } },
  "Tailwind CSS": { base: { x: -370, y: 95 }, entry: { x: -500, y: 190 } },
  "shadcn/ui": { base: { x: -60, y: 135 }, entry: { x: -60, y: 250 } },
  Bootstrap: { base: { x: 230, y: 110 }, entry: { x: 440, y: 210 } },

  "Node.js": { base: { x: -280, y: -30 }, entry: { x: -480, y: -60 } },
  NestJS: { base: { x: 280, y: 30 }, entry: { x: 480, y: 60 } },

  MongoDB: { base: { x: -270, y: -30 }, entry: { x: -460, y: -60 } },
  MySQL: { base: { x: 270, y: 30 }, entry: { x: 460, y: 60 } },

  Docker: { base: { x: -400, y: -110 }, entry: { x: -550, y: -200 } },
  AWS: { base: { x: 240, y: -110 }, entry: { x: 440, y: -200 } },
  Linux: { base: { x: -420, y: 10 }, entry: { x: -580, y: 10 } },
  GraphQL: { base: { x: 320, y: 10 }, entry: { x: 500, y: 10 } },
  Git: { base: { x: -350, y: 115 }, entry: { x: -500, y: 220 } },
  GitHub: { base: { x: -40, y: 140 }, entry: { x: -40, y: 260 } },
  GitLab: { base: { x: 240, y: 115 }, entry: { x: 440, y: 220 } },
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
