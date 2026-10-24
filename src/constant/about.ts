import {
  Music,
  Gamepad2,
  Plane,
  Book,
  Utensils,
  HeartHandshake,
  LucideIcon,
} from "lucide-react";

import portfolioData from "@/constant/portfolio-data.json";

export interface Pillar {
  num: string;
  title: string;
  tagline: string;
  desc: string;
}

export interface Hobby {
  name: string;
  icon: LucideIcon;
  desc: string;
}

export const aboutPillars: Pillar[] = portfolioData.about.pillars;

export const aboutHobbies: Hobby[] = [
  {
    name: "Gaming Enthusiast",
    icon: Gamepad2,
    desc: "Die-hard fan of story-driven RPGs and competitive FPS games. Never misses a gaming weekend.",
  },
  {
    name: "Travel & Exploration",
    icon: Plane,
    desc: "Love discovering new places, cultures, and creating unforgettable memories.",
  },
  {
    name: "Culinary Explorer",
    icon: Utensils,
    desc: "Food lover with special appreciation for Indian home-style cooking and street food.",
  },
  {
    name: "Community Helper",
    icon: HeartHandshake,
    desc: "Believe in giving back to society by helping those in need whenever possible.",
  },
  {
    name: "Teaching & Mentoring",
    icon: Book,
    desc: "Passionate about teaching underprivileged kids and sharing knowledge.",
  },
  {
    name: "Music Lover",
    icon: Music,
    desc: "Finding focus and inspiration through Lo-fi beats and instrumental tracks.",
  },
];
