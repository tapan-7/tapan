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
    title: "Chai Pe Gaane",
    description:
      "A retro-themed audio web radio broadcasting classic Odia and Hindi songs from the golden cassette era. Features a persistent floating player, live YouTube audio streaming, and curated nostalgic playlists.",
    tech: ["JavaScript", "Tailwind CSS", "YouTube API", "Web Audio"],
    github: "https://github.com/tapan-7/chai-pe-gaane",
    link: "https://chai-pe-gaane.vercel.app",
    image: "/projects/chai-pe-gaane.png",
    mobileImage: "/projects/chai-pe-gaane-mobile.png",
  },
  {
    title: "Interactive 404",
    description:
      "An arcade-inspired playable 404 error experience built with HTML5 canvas physics, responsive keyboard controls, retro pixel typography, and synthesized audio effects.",
    tech: ["Next.js", "React", "TypeScript", "HTML5 Canvas", "Tailwind CSS"],
    github: "https://github.com/tapan-7/interactive-404",
    link: "https://interactive-404.vercel.app/",
    image: "/projects/interactive-404.png",
    mobileImage: "/projects/interactive-404-mobile.png",
  },
  {
    title: "BingeBox",
    description:
      "A modern movie exploration and streaming interface where users can browse trending titles, watch official trailers, view cast details, and explore curated watchlists.",
    tech: ["React", "Next.js", "TypeScript", "Movie API", "Tailwind CSS"],
    github: "https://github.com/tapan-7/bingebox",
    link: "https://bingebox-new.vercel.app/",
    image: "/projects/bingebox.png",
    mobileImage: "/projects/bingebox-mobile.png",
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
