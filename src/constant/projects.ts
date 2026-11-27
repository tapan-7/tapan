import { LucideIcon, Server, ShieldCheck, Zap } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  link: string;
  image: string;
  mobileImage?: string;
}

export interface SecondaryProject {
  num: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  metric: string;
}

export const projects: Project[] = [
  {
    title: "Inversion",
    description:
      "A 2D atmospheric pixel-art puzzle-platformer across two intertwined dimensions. Built with custom arcade physics, dimension-shifting mechanics, responsive controls, and procedural audio synthesis.",
    tech: ["Next.js", "React", "TypeScript", "Phaser 3", "Tailwind CSS"],
    github: "https://github.com/tapan-7/inversion",
    link: "https://inversion-sand.vercel.app/",
    image: "/projects/inversion.webp",
    mobileImage: "/projects/inversion-mobile.webp",
  },
  {
    title: "Chai Pe Gaane",
    description:
      "A retro-themed audio web radio broadcasting classic Odia and Hindi songs from the golden cassette era. Features a persistent floating player, live YouTube audio streaming, and curated nostalgic playlists.",
    tech: ["JavaScript", "Tailwind CSS", "YouTube API", "Web Audio"],
    github: "https://github.com/tapan-7/chai-pe-gaane",
    link: "https://chai-pe-gaane.vercel.app",
    image: "/projects/chai-pe-gaane.webp",
    mobileImage: "/projects/chai-pe-gaane-mobile.webp",
  },
  {
    title: "SpeedType",
    description:
      "A clean, distraction-free typing speed and accuracy practice platform with real-time WPM telemetry, multiple test modes, an interactive virtual keyboard, and customizable themes.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "Recharts",
      "Tailwind CSS",
    ],
    github: "https://github.com/tapan-7/SpeedType",
    link: "https://speedtypepro.vercel.app/",
    image: "/projects/speedtype.webp",
    mobileImage: "/projects/speedtype-mobile.webp",
  },
  {
    title: "Interactive 404",
    description:
      "An arcade-inspired playable 404 error experience built with HTML5 canvas physics, responsive keyboard controls, retro pixel typography, and synthesized audio effects.",
    tech: ["Next.js", "React", "TypeScript", "HTML5 Canvas", "Tailwind CSS"],
    github: "https://github.com/tapan-7/interactive-404",
    link: "https://interactive-404.vercel.app/",
    image: "/projects/interactive-404.webp",
    mobileImage: "/projects/interactive-404-mobile.webp",
  },
];

import portfolioData from "@/constant/portfolio-data.json";

const ICON_MAP: Record<string, LucideIcon> = {
  Server,
  Zap,
  ShieldCheck,
};

export const secondaryProjects: SecondaryProject[] = (
  portfolioData.secondaryProjects || []
).map((item) => ({
  num: item.num,
  title: item.title,
  category: item.category,
  description: item.description,
  tech: item.tech,
  metric: item.metric,
  icon: ICON_MAP[item.iconName] || Server,
}));
