import React from "react";

export interface TechIconProps {
  className?: string;
}

export const JavaScriptIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#F7DF1E" />
    <path
      d="M7.5 18c-.8 0-1.4-.4-1.7-1l1.4-.8c.2.3.4.5.8.5.5 0 .8-.3.8-.9V9.5h1.7v6.3c0 1.4-.9 2.2-2 2.2zm7.2-.2c-1.3 0-2.2-.8-2.5-1.8l1.4-.7c.2.6.6 1 1.2 1 .5 0 .9-.3.9-.7 0-.5-.3-.7-1-.9l-.6-.2c-1.3-.4-1.9-1.2-1.9-2.2 0-1.3 1-2.2 2.4-2.2 1.1 0 1.8.5 2.2 1.4l-1.3.8c-.2-.4-.5-.7-.9-.7-.5 0-.8.3-.8.6 0 .4.3.6.9.8l.6.2c1.4.5 2 1.2 2 2.3-.1 1.4-1.1 2.2-2.5 2.2z"
      fill="#000"
    />
  </svg>
);

export const TypeScriptIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path
      d="M4 10.5h6V12H7.8v6H6.2v-6H4v-1.5zm13.7 7.3c-1.3 0-2.2-.8-2.5-1.8l1.4-.7c.2.6.6 1 1.2 1 .5 0 .9-.3.9-.7 0-.5-.3-.7-1-.9l-.6-.2c-1.3-.4-1.9-1.2-1.9-2.2 0-1.3 1-2.2 2.4-2.2 1.1 0 1.8.5 2.2 1.4l-1.3.8c-.2-.4-.5-.7-.9-.7-.5 0-.8.3-.8.6 0 .4.3.6.9.8l.6.2c1.4.5 2 1.2 2 2.3-.1 1.4-1.1 2.2-2.5 2.2z"
      fill="#fff"
    />
  </svg>
);

export const Html5Icon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#E34F26" />
    <path d="M12 4.5v15.7l5.2-1.6 1.3-14.1H12z" fill="#EF652A" />
    <path
      d="M8.5 8h7l-.2 2.2H8.7l.2 2.2h6.2l-.5 5.5-2.6.8-2.6-.8-.2-2h-2l.3 3.5 4.5 1.4 4.5-1.4.6-7.2H8.3L8.5 8z"
      fill="#fff"
    />
  </svg>
);

export const Css3Icon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#1572B6" />
    <path d="M12 4.5v15.7l5.2-1.6 1.3-14.1H12z" fill="#33A9DC" />
    <path
      d="M15.5 8H8.5l.2 2.2h6.6l-.3 3.2H8.9l.2 2.2h5.7l-.4 4.3-2.4.7-2.4-.7-.1-1.6h-2l.3 3.1 4.2 1.3 4.2-1.3.6-7.7H8.7"
      fill="#fff"
    />
  </svg>
);

export const ReactIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0 text-[#61DAFB]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
  </svg>
);

export const NextjsIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0 text-foreground" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 7.5v9h2.2v-4.8l4.3 4.8h2V7.5h-2.2v4.8L11 7.5H9z" />
  </svg>
);

export const ReactNativeIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0 text-[#61DAFB]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.2" />
    <ellipse cx="12" cy="12" rx="5" ry="2" />
    <ellipse cx="12" cy="12" rx="5" ry="2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="5" ry="2" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const TailwindIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#38BDF8">
    <path d="M12 6c-2.4 0-4 1.2-4.8 3.6 1-.8 2.2-1.1 3.6-.8 1 .2 1.8 1 2.6 1.8 1.4 1.4 3 3 6.6 3 2.4 0 4-1.2 4.8-3.6-1 .8-2.2 1.1-3.6.8-1-.2-1.8-1-2.6-1.8-1.4-1.4-3-3-6.6-3zM4.8 12C2.4 12 .8 13.2 0 15.6c1-.8 2.2-1.1 3.6-.8 1 .2 1.8 1 2.6 1.8 1.4 1.4 3 3 6.6 3 2.4 0 4-1.2 4.8-3.6-1 .8-2.2 1.1-3.6.8-1-.2-1.8-1-2.6-1.8-1.4-1.4-3-3-6.6-3z" />
  </svg>
);

export const ShadcnIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0 text-foreground" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M4 4l16 16M4 20L20 4" strokeOpacity="0.3" strokeWidth="1.5" />
    <path d="M5 19L19 5" strokeWidth="2.5" />
  </svg>
);

export const BootstrapIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="5" fill="#7952B3" />
    <path
      d="M7.5 6.5h4.6c1.8 0 2.9.9 2.9 2.3 0 1-.6 1.8-1.5 2.1 1.2.3 1.9 1.2 1.9 2.4 0 1.6-1.3 2.7-3.2 2.7H7.5V6.5zm2.3 3.6h2c.7 0 1.2-.4 1.2-1 0-.6-.5-1-1.2-1h-2v2zm0 4.1h2.3c.8 0 1.3-.4 1.3-1.1 0-.7-.5-1.1-1.3-1.1h-2.3v2.2z"
      fill="#fff"
    />
  </svg>
);

export const NodejsIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0 text-[#5FA04E]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.4L5.2 8.3v7.4L12 19.6l6.8-3.9V8.3L12 4.4z" />
    <path d="M12 7.5l4.5 2.6v5.2L12 17.9 7.5 15.3v-5.2L12 7.5z" opacity="0.6" />
  </svg>
);

export const NestjsIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#E0234E" />
    <path
      d="M17.8 7.2c-.3-.5-.9-.8-1.5-.7l-3.2.4c-.4.1-.8.3-1 .7l-2.2 3c-.3.4-.3.9-.1 1.3l.8 2.8-2.8-3.4c-.4-.5-.9-.8-1.5-.7l-2.6.4c-.6.1-1.1.6-1.2 1.2-.1.6.2 1.2.7 1.6l6.8 5.6c.4.3.9.4 1.4.2l3.8-2.2 1.2 3.6c.2.5.6.8 1.1.9.5.1 1.1-.1 1.4-.5l2.4-4.6c.3-.6.4-1.3.2-2l-1.5-6.5c-.1-.5-.5-.9-1-.1z"
      fill="#fff"
    />
  </svg>
);

export const MongodbIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
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

export const MysqlIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0 text-[#00758F]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <ellipse cx="12" cy="7" rx="8" ry="3" fillOpacity="0.8" />
    <path d="M4 7v4c0 1.7 3.6 3 8 3s8-1.3 8-3V7" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 11v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 15v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const DockerIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0 text-[#2496ED]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 11h2.5v2.2H4V11zm3.3 0h2.5v2.2H7.3V11zm3.3 0h2.5v2.2h-2.5V11zm3.3 0h2.5v2.2h-2.5V11zm-6.6-3h2.5v2.2H7.3V8zm3.3 0h2.5v2.2h-2.5V8zm3.3 0h2.5v2.2h-2.5V8zm3.3 0H20v2.2h-2.8V8zm-3.3-3h2.5v2.2h-2.5V5z" />
    <path d="M22.5 13c-.3-.2-1.3-.7-2.6-.5-.3-.9-.9-1.6-1.7-2-.2 1.3-1 2-1.7 2.4-2.8 0-4.3 1.2-5.4 2.3-1.6-.3-3.2-.3-4.8 0C3 15.5 1.5 17 1 18.5c2.4.9 5.8 1.5 9.5 1.5 6.6 0 11.5-2.5 12.5-6.2.2-.2.1-.6-.5-.8z" />
  </svg>
);

export const LinuxIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0 text-[#FCC624]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
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

export const AwsIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0 text-[#FF9900]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.5 11.5c0-.6.4-1.2 1-1.2h1.5v3.4H7.8c-.8 0-1.3-.4-1.3-1.2v-1zm-1.8 0c0 1.5 1 2.5 2.6 2.5H9v1.7h1.6V8.8H7.5c-1.7 0-2.8 1-2.8 2.7zm6.7 3.9h1.7l1.3-4.5 1.3 4.5h1.7l2.2-6.9h-1.6l-1.3 4.8-1.4-4.8h-1.5l-1.4 4.8-1.3-4.8h-1.7l2 6.9zm10-1.7c-.5.4-1.2.7-2 .7-1.1 0-1.7-.5-1.7-1.3 0-1.5 2-1.5 3.7-1.6v2.2zm0-3.3c-.6 0-1.3.1-1.8.3l.3 1.2c.4-.2.8-.3 1.3-.3.8 0 1.2.4 1.2 1v.3c-2.4.1-4.7.4-4.7 2.7 0 1.4 1 2.3 2.5 2.3 1 0 1.8-.4 2.3-1.1l.2 1h1.4v-5c-.1-1.6-1.1-2.4-2.7-2.4z" />
    <path d="M3.5 18.5c5.5 3 12 3 17 0 .4-.2.9.2.6.6-4.5 3.5-12 3.8-18.1.3-.4-.2-.1-.7.5-.9z" />
  </svg>
);

export const GraphqlIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0 text-[#E10098]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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

export const GitIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#F05032">
    <path d="M21.7 10.9L13.1 2.3c-.6-.6-1.6-.6-2.2 0l-2.2 2.2 2.8 2.8c.6-.2 1.4 0 1.9.5.5.5.7 1.3.5 1.9l2.7 2.7c.6-.2 1.4 0 1.9.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.6-.7-1.4-.4-2.1l-2.5-2.5v4.5c.2.2.4.6.4.9 0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8c0-.6.3-1.1.7-1.4V8.5c-.4-.3-.7-.8-.7-1.4 0-.6.3-1.1.7-1.4L8.7 3.6 2.3 10c-.6.6-.6 1.6 0 2.2l8.6 8.6c.6.6 1.6.6 2.2 0l8.6-8.6c.6-.6.6-1.6 0-2.3z" />
  </svg>
);

export const GithubIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0 text-foreground" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const GitlabIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M22.65 14.39L20.6 8.08a.78.78 0 0 0-.29-.4.81.81 0 0 0-.5 0 .8.8 0 0 0-.39.29L17.7 13.1H6.3L4.58 7.97a.8.8 0 0 0-.39-.29.81.81 0 0 0-.5 0 .78.78 0 0 0-.29.4l-2.05 6.31a.84.84 0 0 0 .31.95l10.08 7.33a.57.57 0 0 0 .68 0L22.34 15.34a.84.84 0 0 0 .31-.95z" fill="#E24329" />
    <path d="M12 22.67l5.7-9.57H6.3l5.7 9.57z" fill="#E24329" />
    <path d="M12 22.67L17.7 13.1H22.65l-10.65 9.57z" fill="#FC6D26" />
    <path d="M22.65 14.39l-2.05-6.31a.8.8 0 0 0-1.18-.11L17.7 13.1h4.95a.84.84 0 0 1 .31.95l-.31.34z" fill="#FCA326" />
    <path d="M1.35 14.39l2.05-6.31a.8.8 0 0 1 1.18-.11L6.3 13.1H1.35a.84.84 0 0 0-.31.95l.31.34z" fill="#FCA326" />
    <path d="M12 22.67L6.3 13.1H1.35l10.65 9.57z" fill="#FC6D26" />
  </svg>
);

export const FallbackTechIcon: React.FC<TechIconProps> = ({ className = "w-8 h-8 shrink-0 text-primary" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const TECH_ICON_MAP: Record<string, React.FC<TechIconProps>> = {
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  HTML: Html5Icon,
  HTML5: Html5Icon,
  CSS: Css3Icon,
  CSS3: Css3Icon,
  React: ReactIcon,
  "Next.js": NextjsIcon,
  "React Native": ReactNativeIcon,
  "Tailwind CSS": TailwindIcon,
  "shadcn/ui": ShadcnIcon,
  Bootstrap: BootstrapIcon,
  "Node.js": NodejsIcon,
  NestJS: NestjsIcon,
  MongoDB: MongodbIcon,
  MySQL: MysqlIcon,
  Docker: DockerIcon,
  AWS: AwsIcon,
  Linux: LinuxIcon,
  GraphQL: GraphqlIcon,
  Git: GitIcon,
  GitHub: GithubIcon,
  GitLab: GitlabIcon,
};

export function getTechIcon(name: string): React.FC<TechIconProps> {
  return TECH_ICON_MAP[name] || FallbackTechIcon;
}
