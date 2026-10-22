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
    title: "Memory Match",
    description:
      "A fun card matching game built with Expo and TypeScript. Features clean UI, sound effects, and responsive design for an engaging user experience.",
    tech: ["Expo", "TypeScript", "React Native", "Sound Effects"],
    github: "#",
    link: "https://expo.dev/preview/update?message=feat%3A+Implement+a+visual+refresh+for+the+game+UI%2C+introducing+new+assets%2C+responsive+card+sizing%2C+and+updated+component+layouts.&updateRuntimeVersion=1.0.0&createdAt=2025-12-29T09%3A47%3A50.615Z&slug=exp&projectId=33913963-16e7-49b8-88b8-6748494919ad&group=8cd3cdde-39fd-46a9-8df9-4a3fcc5f5f09",
    image: "https://placehold.co/1200x800.png",
    mobileImage: "https://placehold.co/400x800.png",
  },
  {
    title: "BINGEBOX",
    description:
      "A movie website where users can browse movies and watch trailers for specific films. Features a clean interface with responsive design.",
    tech: ["React", "Next.js", "TypeScript", "Movie API"],
    github: "#",
    link: "https://bingebox-new.vercel.app/#",
    image: "/projects/bingebox.png",
    mobileImage: "/projects/bingebox-mobile.png",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    github: "#",
    link: "#",
    image: "https://placehold.co/1200x800.png",
    mobileImage: "https://placehold.co/400x800.png",
  },
  {
    title: "Task Management System",
    description:
      "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    github: "#",
    link: "#",
    image: "https://placehold.co/1200x800.png",
    mobileImage: "https://placehold.co/400x800.png",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization, real-time metrics, and automated reporting capabilities.",
    tech: ["React", "Chart.js", "Express.js", "MySQL", "Redis"],
    github: "#",
    link: "#",
    image: "https://placehold.co/1200x800.png",
    mobileImage: "https://placehold.co/400x800.png",
  },
  {
    title: "API Gateway Service",
    description:
      "Microservices API gateway with rate limiting, authentication, and request routing for scalable applications.",
    tech: ["Node.js", "Express", "Docker", "AWS", "Redis"],
    github: "#",
    link: "#",
    image: "https://placehold.co/1200x800.png",
    mobileImage: "https://placehold.co/400x800.png",
  },
];

export const secondaryProjects: SecondaryProject[] = [
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
