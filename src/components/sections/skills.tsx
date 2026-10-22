"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import { AnimatedContent } from "@/components/react-bits/animated-content";
import { BlurText } from "@/components/react-bits/blur-text";

interface SkillItem {
  name: string;
  icon: React.ComponentType;
  base: { x: number; y: number };
  entry: { x: number; y: number };
}

interface CategoryData {
  num: string;
  title: string;
  skills: SkillItem[];
}

const JavaScriptIcon = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#F7DF1E" />
    <path
      d="M7.5 18c-.8 0-1.4-.4-1.7-1l1.4-.8c.2.3.4.5.8.5.5 0 .8-.3.8-.9V9.5h1.7v6.3c0 1.4-.9 2.2-2 2.2zm7.2-.2c-1.3 0-2.2-.8-2.5-1.8l1.4-.7c.2.6.6 1 1.2 1 .5 0 .9-.3.9-.7 0-.5-.3-.7-1-.9l-.6-.2c-1.3-.4-1.9-1.2-1.9-2.2 0-1.3 1-2.2 2.4-2.2 1.1 0 1.8.5 2.2 1.4l-1.3.8c-.2-.4-.5-.7-.9-.7-.5 0-.8.3-.8.6 0 .4.3.6.9.8l.6.2c1.4.5 2 1.2 2 2.3-.1 1.4-1.1 2.2-2.5 2.2z"
      fill="#000"
    />
  </svg>
);

const TypeScriptIcon = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path
      d="M4 10.5h6V12H7.8v6H6.2v-6H4v-1.5zm13.7 7.3c-1.3 0-2.2-.8-2.5-1.8l1.4-.7c.2.6.6 1 1.2 1 .5 0 .9-.3.9-.7 0-.5-.3-.7-1-.9l-.6-.2c-1.3-.4-1.9-1.2-1.9-2.2 0-1.3 1-2.2 2.4-2.2 1.1 0 1.8.5 2.2 1.4l-1.3.8c-.2-.4-.5-.7-.9-.7-.5 0-.8.3-.8.6 0 .4.3.6.9.8l.6.2c1.4.5 2 1.2 2 2.3-.1 1.4-1.1 2.2-2.5 2.2z"
      fill="#fff"
    />
  </svg>
);

const Html5Icon = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#E34F26" />
    <path d="M12 4.5v15.7l5.2-1.6 1.3-14.1H12z" fill="#EF652A" />
    <path
      d="M8.5 8h7l-.2 2.2H8.7l.2 2.2h6.2l-.5 5.5-2.6.8-2.6-.8-.2-2h-2l.3 3.5 4.5 1.4 4.5-1.4.6-7.2H8.3L8.5 8z"
      fill="#fff"
    />
  </svg>
);

const Css3Icon = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#1572B6" />
    <path d="M12 4.5v15.7l5.2-1.6 1.3-14.1H12z" fill="#33A9DC" />
    <path
      d="M15.5 8H8.5l.2 2.2h6.6l-.3 3.2H8.9l.2 2.2h5.7l-.4 4.3-2.4.7-2.4-.7-.1-1.6h-2l.3 3.1 4.2 1.3 4.2-1.3.6-7.7H8.7"
      fill="#fff"
    />
  </svg>
);

const ReactIcon = () => (
  <svg className="w-8 h-8 shrink-0 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
  </svg>
);

const NextjsIcon = () => (
  <svg className="w-8 h-8 shrink-0 text-foreground" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 7.5v9h2.2v-4.8l4.3 4.8h2V7.5h-2.2v4.8L11 7.5H9z" />
  </svg>
);

const ReactNativeIcon = () => (
  <svg className="w-8 h-8 shrink-0 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.2" />
    <ellipse cx="12" cy="12" rx="5" ry="2" />
    <ellipse cx="12" cy="12" rx="5" ry="2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="5" ry="2" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const TailwindIcon = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="#38BDF8">
    <path d="M12 6c-2.4 0-4 1.2-4.8 3.6 1-.8 2.2-1.1 3.6-.8 1 .2 1.8 1 2.6 1.8 1.4 1.4 3 3 6.6 3 2.4 0 4-1.2 4.8-3.6-1 .8-2.2 1.1-3.6.8-1-.2-1.8-1-2.6-1.8-1.4-1.4-3-3-6.6-3zM4.8 12C2.4 12 .8 13.2 0 15.6c1-.8 2.2-1.1 3.6-.8 1 .2 1.8 1 2.6 1.8 1.4 1.4 3 3 6.6 3 2.4 0 4-1.2 4.8-3.6-1 .8-2.2 1.1-3.6.8-1-.2-1.8-1-2.6-1.8-1.4-1.4-3-3-6.6-3z" />
  </svg>
);

const ShadcnIcon = () => (
  <svg className="w-8 h-8 shrink-0 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M4 4l16 16M4 20L20 4" strokeOpacity="0.3" strokeWidth="1.5" />
    <path d="M5 19L19 5" strokeWidth="2.5" />
  </svg>
);

const BootstrapIcon = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="5" fill="#7952B3" />
    <path
      d="M7.5 6.5h4.6c1.8 0 2.9.9 2.9 2.3 0 1-.6 1.8-1.5 2.1 1.2.3 1.9 1.2 1.9 2.4 0 1.6-1.3 2.7-3.2 2.7H7.5V6.5zm2.3 3.6h2c.7 0 1.2-.4 1.2-1 0-.6-.5-1-1.2-1h-2v2zm0 4.1h2.3c.8 0 1.3-.4 1.3-1.1 0-.7-.5-1.1-1.3-1.1h-2.3v2.2z"
      fill="#fff"
    />
  </svg>
);

const NodejsIcon = () => (
  <svg className="w-8 h-8 shrink-0 text-[#5FA04E]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.4L5.2 8.3v7.4L12 19.6l6.8-3.9V8.3L12 4.4z" />
    <path d="M12 7.5l4.5 2.6v5.2L12 17.9 7.5 15.3v-5.2L12 7.5z" opacity="0.6" />
  </svg>
);

const MongodbIcon = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C12 2 6 7.5 6 13.5c0 3.6 2.7 6.7 6 7.5 3.3-.8 6-3.9 6-7.5C18 7.5 12 2 12 2z"
      fill="#47A248"
    />
    <path
      d="M12 2v19c-.3 0-.6-.1-.9-.2C8.2 19.8 6 16.9 6 13.5 6 8.5 10.8 3.5 12 2z"
      fill="#499D4A"
      opacity="0.8"
    />
    <path d="M12 3.5v16.5c.2 0 .4-.1.6-.2 2.9-1 5.4-3.9 5.4-6.3 0-5-4.8-10-6-10z" fill="#52B555" />
    <path d="M12 13.5v7.5c-.2 0-.4-.1-.5-.2-1.5-.7-2.5-2.1-2.5-3.8 0-2.5 2.5-3.5 3-3.5z" fill="#fff" opacity="0.6" />
  </svg>
);

const MysqlIcon = () => (
  <svg className="w-8 h-8 shrink-0 text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
    <ellipse cx="12" cy="7" rx="8" ry="3" fillOpacity="0.8" />
    <path d="M4 7v4c0 1.7 3.6 3 8 3s8-1.3 8-3V7" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 11v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 15v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const DockerIcon = () => (
  <svg className="w-8 h-8 shrink-0 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 11h2.5v2.2H4V11zm3.3 0h2.5v2.2H7.3V11zm3.3 0h2.5v2.2h-2.5V11zm3.3 0h2.5v2.2h-2.5V11zm-6.6-3h2.5v2.2H7.3V8zm3.3 0h2.5v2.2h-2.5V8zm3.3 0h2.5v2.2h-2.5V8zm3.3 0H20v2.2h-2.8V8zm-3.3-3h2.5v2.2h-2.5V5z" />
    <path d="M22.5 13c-.3-.2-1.3-.7-2.6-.5-.3-.9-.9-1.6-1.7-2-.2 1.3-1 2-1.7 2.4-2.8 0-4.3 1.2-5.4 2.3-1.6-.3-3.2-.3-4.8 0C3 15.5 1.5 17 1 18.5c2.4.9 5.8 1.5 9.5 1.5 6.6 0 11.5-2.5 12.5-6.2.2-.2.1-.6-.5-.8z" />
  </svg>
);

const LinuxIcon = () => (
  <svg className="w-8 h-8 shrink-0 text-[#FCC624]" viewBox="0 0 24 24" fill="currentColor">
    <ellipse cx="12" cy="14" rx="7" ry="8" fill="#fff" stroke="#333" strokeWidth="1.5" />
    <ellipse cx="12" cy="7" rx="4.5" ry="5" fill="#333" />
    <circle cx="10.5" cy="6.5" r="1" fill="#fff" />
    <circle cx="13.5" cy="6.5" r="1" fill="#fff" />
    <polygon points="12,8 10,10 14,10" fill="#FCC624" />
    <ellipse cx="7" cy="20" rx="3.5" ry="1.5" fill="#FCC624" />
    <ellipse cx="17" cy="20" rx="3.5" ry="1.5" fill="#FCC624" />
    <path d="M5 13c0 3 1.5 5 2.5 6" stroke="#333" strokeWidth="2" strokeLinecap="round" />
    <path d="M19 13c0 3-1.5 5-2.5 6" stroke="#333" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AwsIcon = () => (
  <svg className="w-8 h-8 shrink-0 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.5 11.5c0-.6.4-1.2 1-1.2h1.5v3.4H7.8c-.8 0-1.3-.4-1.3-1.2v-1zm-1.8 0c0 1.5 1 2.5 2.6 2.5H9v1.7h1.6V8.8H7.5c-1.7 0-2.8 1-2.8 2.7zm6.7 3.9h1.7l1.3-4.5 1.3 4.5h1.7l2.2-6.9h-1.6l-1.3 4.8-1.4-4.8h-1.5l-1.4 4.8-1.3-4.8h-1.7l2 6.9zm10-1.7c-.5.4-1.2.7-2 .7-1.1 0-1.7-.5-1.7-1.3 0-1.5 2-1.5 3.7-1.6v2.2zm0-3.3c-.6 0-1.3.1-1.8.3l.3 1.2c.4-.2.8-.3 1.3-.3.8 0 1.2.4 1.2 1v.3c-2.4.1-4.7.4-4.7 2.7 0 1.4 1 2.3 2.5 2.3 1 0 1.8-.4 2.3-1.1l.2 1h1.4v-5c-.1-1.6-1.1-2.4-2.7-2.4z" />
    <path d="M3.5 18.5c5.5 3 12 3 17 0 .4-.2.9.2.6.6-4.5 3.5-12 3.8-18.1.3-.4-.2-.1-.7.5-.9z" />
  </svg>
);

const GraphqlIcon = () => (
  <svg className="w-8 h-8 shrink-0 text-[#E10098]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polygon points="12,2 21.5,7.5 21.5,18.5 12,24 2.5,18.5 2.5,7.5" strokeWidth="1" />
    <polygon points="12,5 19,17.5 5,17.5" strokeWidth="1.2" />
    <circle cx="12" cy="2" r="1.8" fill="currentColor" />
    <circle cx="21.5" cy="7.5" r="1.8" fill="currentColor" />
    <circle cx="21.5" cy="18.5" r="1.8" fill="currentColor" />
    <circle cx="12" cy="24" r="1.8" fill="currentColor" />
    <circle cx="2.5" cy="18.5" r="1.8" fill="currentColor" />
    <circle cx="2.5" cy="7.5" r="1.8" fill="currentColor" />
  </svg>
);

const GitIcon = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="#F05032">
    <path d="M21.7 10.9L13.1 2.3c-.6-.6-1.6-.6-2.2 0l-2.2 2.2 2.8 2.8c.6-.2 1.4 0 1.9.5.5.5.7 1.3.5 1.9l2.7 2.7c.6-.2 1.4 0 1.9.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.6-.7-1.4-.4-2.1l-2.5-2.5v4.5c.2.2.4.6.4.9 0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8c0-.6.3-1.1.7-1.4V8.5c-.4-.3-.7-.8-.7-1.4 0-.6.3-1.1.7-1.4L8.7 3.6 2.3 10c-.6.6-.6 1.6 0 2.2l8.6 8.6c.6.6 1.6.6 2.2 0l8.6-8.6c.6-.6.6-1.6 0-2.3z" />
  </svg>
);

const categories: CategoryData[] = [
  {
    num: "01",
    title: "Core Languages",
    skills: [
      { name: "JavaScript", icon: JavaScriptIcon, base: { x: -380, y: -90 }, entry: { x: -550, y: -200 } },
      { name: "TypeScript", icon: TypeScriptIcon, base: { x: 200, y: -95 }, entry: { x: 450, y: -220 } },
      { name: "HTML5", icon: Html5Icon, base: { x: -350, y: 95 }, entry: { x: -520, y: 220 } },
      { name: "CSS3", icon: Css3Icon, base: { x: 220, y: 90 }, entry: { x: 460, y: 210 } },
    ],
  },
  {
    num: "02",
    title: "Frontend Engineering",
    skills: [
      { name: "React", icon: ReactIcon, base: { x: -390, y: -110 }, entry: { x: -550, y: -220 } },
      { name: "Next.js", icon: NextjsIcon, base: { x: 190, y: -115 }, entry: { x: 400, y: -230 } },
      { name: "React Native", icon: ReactNativeIcon, base: { x: 290, y: 5 }, entry: { x: 500, y: 20 } },
      { name: "Tailwind CSS", icon: TailwindIcon, base: { x: -380, y: 95 }, entry: { x: -540, y: 210 } },
      { name: "shadcn/ui", icon: ShadcnIcon, base: { x: -60, y: 130 }, entry: { x: -60, y: 260 } },
      { name: "Bootstrap", icon: BootstrapIcon, base: { x: 230, y: 110 }, entry: { x: 440, y: 230 } },
    ],
  },
  {
    num: "03",
    title: "Backend & Infrastructure",
    skills: [
      { name: "Node.js", icon: NodejsIcon, base: { x: -400, y: -115 }, entry: { x: -560, y: -230 } },
      { name: "MongoDB", icon: MongodbIcon, base: { x: -80, y: -135 }, entry: { x: -80, y: -260 } },
      { name: "MySQL", icon: MysqlIcon, base: { x: 240, y: -115 }, entry: { x: 440, y: -230 } },
      { name: "Docker", icon: DockerIcon, base: { x: -430, y: 5 }, entry: { x: -600, y: 10 } },
      { name: "AWS", icon: AwsIcon, base: { x: 320, y: 5 }, entry: { x: 520, y: 10 } },
      { name: "Linux", icon: LinuxIcon, base: { x: -390, y: 115 }, entry: { x: -550, y: 230 } },
      { name: "GraphQL", icon: GraphqlIcon, base: { x: -70, y: 135 }, entry: { x: -70, y: 260 } },
      { name: "Git & GitHub", icon: GitIcon, base: { x: 240, y: 115 }, entry: { x: 440, y: 230 } },
    ],
  },
];

function CategoryStage({
  category,
  index,
  scrollProgress,
  shouldReduceMotion,
}: {
  category: CategoryData;
  index: number;
  scrollProgress: MotionValue<number>;
  shouldReduceMotion: boolean | null;
}) {
  const isFirst = index === 0;
  const isSecond = index === 1;

  const headerOpacity = useTransform(
    scrollProgress,
    isFirst
      ? [0.0, 0.05, 0.22, 0.3]
      : isSecond
      ? [0.26, 0.33, 0.55, 0.63]
      : [0.59, 0.67, 0.92, 1.0],
    isFirst
      ? [0.3, 1, 1, 0]
      : isSecond
      ? [0, 1, 1, 0]
      : [0, 1, 1, 1]
  );

  const headerY = useTransform(
    scrollProgress,
    isFirst
      ? [0.0, 0.06, 0.22, 0.3]
      : isSecond
      ? [0.26, 0.34, 0.55, 0.63]
      : [0.59, 0.67, 0.92, 1.0],
    isFirst
      ? [24, 0, 0, -24]
      : isSecond
      ? [28, 0, 0, -24]
      : [28, 0, 0, 0]
  );

  const headerScale = useTransform(
    scrollProgress,
    isFirst
      ? [0.0, 0.06, 0.22, 0.3]
      : isSecond
      ? [0.26, 0.34, 0.55, 0.63]
      : [0.59, 0.67, 0.92, 1.0],
    isFirst
      ? [0.88, 1, 1, 0.92]
      : isSecond
      ? [0.88, 1, 1, 0.92]
      : [0.88, 1, 1, 1]
  );

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        style={{
          opacity: shouldReduceMotion ? 1 : headerOpacity,
          y: shouldReduceMotion ? 0 : headerY,
          scale: shouldReduceMotion ? 1 : headerScale,
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto z-10 w-full max-w-xl will-change-transform"
      >
        <span className="text-xs font-mono text-primary uppercase tracking-[0.25em] block mb-2">
          0{index + 1}
        </span>
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]">
          {category.title}.
        </h3>
      </motion.div>

      <div className="absolute inset-0 pointer-events-auto">
        {category.skills.map((skill, sIdx) => {
          const Icon = skill.icon;
          const driftX = -30 + (sIdx % 3) * 15;
          const driftY = -10 + (sIdx % 2) * 20;

          const skillOpacity = useTransform(
            scrollProgress,
            isFirst
              ? [0.0, 0.05, 0.22, 0.3]
              : isSecond
              ? [0.26, 0.32, 0.55, 0.63]
              : [0.59, 0.65, 0.92, 1.0],
            isFirst
              ? [0.3, 1, 1, 0]
              : isSecond
              ? [0, 1, 1, 0]
              : [0, 1, 1, 1]
          );

          const skillScale = useTransform(
            scrollProgress,
            isFirst
              ? [0.0, 0.06, 0.22, 0.3]
              : isSecond
              ? [0.26, 0.34, 0.55, 0.63]
              : [0.59, 0.67, 0.92, 1.0],
            isFirst
              ? [0.75, 1, 1, 0.85]
              : isSecond
              ? [0.65, 1, 1, 0.85]
              : [0.65, 1, 1, 1]
          );

          const skillX = useTransform(
            scrollProgress,
            isFirst
              ? [0.0, 0.06, 0.22, 0.3]
              : isSecond
              ? [0.26, 0.34, 0.55, 0.63]
              : [0.59, 0.67, 0.92, 1.0],
            isFirst
              ? [skill.base.x + skill.entry.x * 0.4, skill.base.x, skill.base.x + driftX, skill.base.x + driftX * 2.5]
              : isSecond
              ? [skill.base.x + skill.entry.x, skill.base.x, skill.base.x + driftX, skill.base.x + driftX * 2.5]
              : [skill.base.x + skill.entry.x, skill.base.x, skill.base.x + driftX, skill.base.x + driftX]
          );

          const skillY = useTransform(
            scrollProgress,
            isFirst
              ? [0.0, 0.06, 0.22, 0.3]
              : isSecond
              ? [0.26, 0.34, 0.55, 0.63]
              : [0.59, 0.67, 0.92, 1.0],
            isFirst
              ? [skill.base.y + skill.entry.y * 0.4, skill.base.y, skill.base.y + driftY, skill.base.y + driftY * 2.5]
              : isSecond
              ? [skill.base.y + skill.entry.y, skill.base.y, skill.base.y + driftY, skill.base.y + driftY * 2.5]
              : [skill.base.y + skill.entry.y, skill.base.y, skill.base.y + driftY, skill.base.y + driftY]
          );

          return (
            <motion.div
              key={skill.name}
              style={{
                left: "50%",
                top: "50%",
                x: shouldReduceMotion ? skill.base.x : skillX,
                y: shouldReduceMotion ? skill.base.y : skillY,
                scale: shouldReduceMotion ? 1 : skillScale,
                opacity: shouldReduceMotion ? 1 : skillOpacity,
              }}
              className="absolute will-change-transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex items-center gap-3.5 group cursor-default select-none py-1.5 px-2">
                <div className="w-8 h-8 shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                  <Icon />
                </div>
                <span className="font-mono text-base sm:text-lg lg:text-xl font-bold text-foreground/90 group-hover:text-primary transition-colors duration-200 tracking-tight whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const updateDimensions = () => {
      const vh = window.innerHeight;
      setContainerHeight(Math.max(2400, vh * 3.4));
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <section id="skills" className="relative border-t border-border/40">
      <div className="hidden md:block">
        <div
          ref={containerRef}
          style={{ height: containerHeight ? `${containerHeight}px` : "340vh" }}
          className="relative"
        >
          <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-20 pb-8">
            <div className="container max-w-6xl mx-auto px-6 shrink-0">
              <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <div>
                  <AnimatedContent distance={15} direction="vertical" delay={0.05}>
                    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-primary mb-1">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span>04 &bull; CAPABILITIES &amp; TOOLKIT</span>
                    </div>
                  </AnimatedContent>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                    <BlurText text="Technical competencies." animateBy="words" delay={0.06} />
                  </h2>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono">
                  {categories.map((c, i) => {
                    const isFirst = i === 0;
                    const isSecond = i === 1;

                    const activeOpacity = useTransform(
                      scrollYProgress,
                      isFirst
                        ? [0.0, 0.05, 0.22, 0.3]
                        : isSecond
                        ? [0.26, 0.33, 0.55, 0.63]
                        : [0.59, 0.67, 0.92, 1.0],
                      isFirst
                        ? [0.5, 1, 1, 0.4]
                        : isSecond
                        ? [0.4, 1, 1, 0.4]
                        : [0.4, 1, 1, 1]
                    );

                    return (
                      <div key={c.title} className="flex items-center gap-2">
                        <motion.div
                          style={{ opacity: activeOpacity }}
                          className="px-3 py-1 rounded-full border border-border/60 bg-secondary/60 flex items-center gap-1.5"
                        >
                          <span className="text-primary font-bold">0{i + 1}</span>
                          <span className="text-foreground">{c.title}</span>
                        </motion.div>
                        {i < 2 && <span className="text-border">/</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="container max-w-6xl mx-auto px-6 my-auto relative h-[420px] lg:h-[460px] w-full">
              <div className="w-full h-full relative scale-[0.82] md:scale-[0.88] lg:scale-[0.95] xl:scale-100 origin-center">
                {categories.map((cat, idx) => (
                  <CategoryStage
                    key={cat.title}
                    category={cat}
                    index={idx}
                    scrollProgress={scrollYProgress}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                ))}
              </div>
            </div>

            <div className="container max-w-6xl mx-auto px-6 shrink-0 flex items-center justify-between text-xs font-mono text-muted-foreground border-t border-border/40 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-primary font-semibold">&lt;&gt;</span>
                <span>Scroll vertically to traverse toolkit &rarr;</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Swarm Progress</span>
                <div className="w-36 h-1.5 bg-secondary rounded-full overflow-hidden border border-border/60">
                  <motion.div
                    style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden px-6 pt-24 pb-20 space-y-16">
        <div>
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>04 &bull; CAPABILITIES &amp; TOOLKIT</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
            Technical competencies.
          </h2>
        </div>

        <div className="space-y-14">
          {categories.map((category) => (
            <div key={category.title} className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest">
                <span>{category.num}</span>
                <span>&bull;</span>
                <h3 className="text-2xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-5">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-7 h-7 shrink-0 flex items-center justify-center">
                        <Icon />
                      </div>
                      <span className="text-base font-bold text-foreground font-mono">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
