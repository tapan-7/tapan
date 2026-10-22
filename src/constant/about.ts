import {
  Music,
  Gamepad2,
  Plane,
  Book,
  Utensils,
  HeartHandshake,
  LucideIcon,
} from "lucide-react";

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

export const aboutPillars: Pillar[] = [
  {
    num: "01",
    title: "Frontend Engineering",
    tagline: "Architecture & Scalability",
    desc: "Architecting modular, type-safe web systems using React 18, Next.js App Router, and modern CSS with strict performance benchmarks.",
  },
  {
    num: "02",
    title: "Mobile Applications",
    tagline: "Native Fluidity & Real-Time",
    desc: "Building native-grade iOS & Android applications in React Native with real-time VideoSDK, Health Connect, and telemetry.",
  },
  {
    num: "03",
    title: "State & Architecture",
    tagline: "Predictable Data Flow",
    desc: "Structuring clean, testable state flows, robust API layers, and reusable component libraries that scale effortlessly.",
  },
  {
    num: "04",
    title: "Interaction Ergonomics",
    tagline: "Precision & Micro-Interactions",
    desc: "Obsessing over smooth frame rates, tactile feedback, responsive ergonomics, and uncompromising accessibility standards.",
  },
];

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
