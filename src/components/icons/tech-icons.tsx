import React from "react";
import Image from "next/image";

export interface TechIconProps {
  className?: string;
  size?: number;
}

interface IconConfig {
  src: string;
  alt: string;
  invertDark?: boolean;
}

export const TECH_ICON_CONFIGS: Record<string, IconConfig> = {
  JavaScript: { src: "/icons/javascript.svg", alt: "JavaScript" },
  TypeScript: { src: "/icons/typescript.svg", alt: "TypeScript" },
  HTML: { src: "/icons/html5.svg", alt: "HTML5" },
  HTML5: { src: "/icons/html5.svg", alt: "HTML5" },
  CSS: { src: "/icons/css3.svg", alt: "CSS3" },
  CSS3: { src: "/icons/css3.svg", alt: "CSS3" },
  React: { src: "/icons/react.svg", alt: "React" },
  "React.js": { src: "/icons/react.svg", alt: "React" },
  "Next.js": { src: "/icons/nextjs.svg", alt: "Next.js", invertDark: true },
  "React Native": { src: "/icons/react.svg", alt: "React Native" },
  "Tailwind CSS": { src: "/icons/tailwind.svg", alt: "Tailwind CSS" },
  "shadcn/ui": { src: "/icons/shadcn.svg", alt: "shadcn/ui", invertDark: true },
  Bootstrap: { src: "/icons/bootstrap.svg", alt: "Bootstrap" },
  "Node.js": { src: "/icons/nodejs.svg", alt: "Node.js" },
  NestJS: { src: "/icons/nestjs.svg", alt: "NestJS" },
  "REST APIs": { src: "/icons/restapi.svg", alt: "REST APIs" },
  WebSockets: { src: "/icons/websocket.svg", alt: "WebSockets", invertDark: true },
  MongoDB: { src: "/icons/mongodb.svg", alt: "MongoDB" },
  MySQL: { src: "/icons/mysql.svg", alt: "MySQL" },
  PostgreSQL: { src: "/icons/postgresql.svg", alt: "PostgreSQL" },
  "Prisma ORM": { src: "/icons/prisma.svg", alt: "Prisma", invertDark: true },
  Prisma: { src: "/icons/prisma.svg", alt: "Prisma", invertDark: true },
  Docker: { src: "/icons/docker.svg", alt: "Docker" },
  AWS: { src: "/icons/aws.svg", alt: "AWS" },
  "AWS S3": { src: "/icons/aws.svg", alt: "AWS S3" },
  Vercel: { src: "/icons/vercel.svg", alt: "Vercel", invertDark: true },
  Linux: { src: "/icons/linux.svg", alt: "Linux" },
  GraphQL: { src: "/icons/graphql.svg", alt: "GraphQL" },
  Redis: { src: "/icons/redis.svg", alt: "Redis" },
  BullMQ: { src: "/icons/bullmq.svg", alt: "BullMQ", invertDark: true },
  "Salesforce API": { src: "/icons/salesforce.svg", alt: "Salesforce" },
  "Google Drive API": { src: "/icons/googledrive.svg", alt: "Google Drive" },
  Git: { src: "/icons/git.svg", alt: "Git" },
  GitHub: { src: "/icons/github.svg", alt: "GitHub", invertDark: true },
  GitLab: { src: "/icons/gitlab.svg", alt: "GitLab" },
  Postman: { src: "/icons/postman.svg", alt: "Postman" },
  "VS Code": { src: "/icons/vscode.svg", alt: "VS Code" },
};

export const FallbackTechIcon: React.FC<TechIconProps> = ({
  className = "w-8 h-8 shrink-0 text-primary",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const TechIcon: React.FC<TechIconProps & { name: string }> = ({
  name,
  className = "w-8 h-8 shrink-0",
  size = 32,
}) => {
  const config = TECH_ICON_CONFIGS[name];
  if (!config) {
    return <FallbackTechIcon className={className} />;
  }

  return (
    <Image
      src={config.src}
      alt={config.alt}
      width={size}
      height={size}
      className={`${className} object-contain ${config.invertDark ? "dark:invert" : ""}`}
      unoptimized
    />
  );
};

export const createIconComponent = (name: string): React.FC<TechIconProps> => {
  const Component: React.FC<TechIconProps> = (props) => (
    <TechIcon name={name} {...props} />
  );
  Component.displayName = `${name.replace(/[^a-zA-Z0-9]/g, "")}Icon`;
  return Component;
};

export const JavaScriptIcon = createIconComponent("JavaScript");
export const TypeScriptIcon = createIconComponent("TypeScript");
export const Html5Icon = createIconComponent("HTML5");
export const Css3Icon = createIconComponent("CSS3");
export const ReactIcon = createIconComponent("React");
export const NextjsIcon = createIconComponent("Next.js");
export const ReactNativeIcon = createIconComponent("React Native");
export const TailwindIcon = createIconComponent("Tailwind CSS");
export const ShadcnIcon = createIconComponent("shadcn/ui");
export const BootstrapIcon = createIconComponent("Bootstrap");
export const NodejsIcon = createIconComponent("Node.js");
export const NestjsIcon = createIconComponent("NestJS");
export const RestApiIcon = createIconComponent("REST APIs");
export const WebSocketIcon = createIconComponent("WebSockets");
export const MongodbIcon = createIconComponent("MongoDB");
export const MysqlIcon = createIconComponent("MySQL");
export const PostgresqlIcon = createIconComponent("PostgreSQL");
export const PrismaIcon = createIconComponent("Prisma");
export const DockerIcon = createIconComponent("Docker");
export const AwsIcon = createIconComponent("AWS");
export const AwsS3Icon = createIconComponent("AWS S3");
export const VercelIcon = createIconComponent("Vercel");
export const LinuxIcon = createIconComponent("Linux");
export const GraphqlIcon = createIconComponent("GraphQL");
export const RedisIcon = createIconComponent("Redis");
export const BullmqIcon = createIconComponent("BullMQ");
export const SalesforceIcon = createIconComponent("Salesforce API");
export const GoogleDriveIcon = createIconComponent("Google Drive API");
export const GitIcon = createIconComponent("Git");
export const GithubIcon = createIconComponent("GitHub");
export const GitlabIcon = createIconComponent("GitLab");
export const PostmanIcon = createIconComponent("Postman");
export const VscodeIcon = createIconComponent("VS Code");

export const TECH_ICON_MAP: Record<string, React.FC<TechIconProps>> = {
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  HTML: Html5Icon,
  HTML5: Html5Icon,
  CSS: Css3Icon,
  CSS3: Css3Icon,
  React: ReactIcon,
  "React.js": ReactIcon,
  "Next.js": NextjsIcon,
  "React Native": ReactNativeIcon,
  "Tailwind CSS": TailwindIcon,
  "shadcn/ui": ShadcnIcon,
  Bootstrap: BootstrapIcon,
  "Node.js": NodejsIcon,
  NestJS: NestjsIcon,
  "REST APIs": RestApiIcon,
  WebSockets: WebSocketIcon,
  MongoDB: MongodbIcon,
  MySQL: MysqlIcon,
  PostgreSQL: PostgresqlIcon,
  "Prisma ORM": PrismaIcon,
  Prisma: PrismaIcon,
  Docker: DockerIcon,
  AWS: AwsIcon,
  "AWS S3": AwsS3Icon,
  Vercel: VercelIcon,
  Linux: LinuxIcon,
  GraphQL: GraphqlIcon,
  Redis: RedisIcon,
  BullMQ: BullmqIcon,
  "Salesforce API": SalesforceIcon,
  "Google Drive API": GoogleDriveIcon,
  Git: GitIcon,
  GitHub: GithubIcon,
  GitLab: GitlabIcon,
  Postman: PostmanIcon,
  "VS Code": VscodeIcon,
};

export function getTechIcon(name: string): React.FC<TechIconProps> {
  return TECH_ICON_MAP[name] || FallbackTechIcon;
}
