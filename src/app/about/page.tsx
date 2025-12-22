"use client";

import React from "react";
import { Briefcase, Music, Gamepad2, Plane, Book, Utensils, HeartHandshake } from "lucide-react";
import { PixelImage } from "@/components/ui/pixel-image";
import portfolioData from "@/constant/portfolio-data.json";
import { cn } from "@/lib/utils";

const AboutPage = () => {
  const { profile, experience, skills } = portfolioData;

  const hobbies = [
    {
      name: "Gaming Enthusiast",
      icon: Gamepad2,
      desc: "Die-hard fan of story-driven RPGs and competitive FPS games. Never misses a gaming weekend."
    },
    {
      name: "Travel & Exploration",
      icon: Plane,
      desc: "Love discovering new places, cultures, and creating unforgettable memories."
    },
    {
      name: "Culinary Explorer",
      icon: Utensils,
      desc: "Food lover with special appreciation for Indian home-style cooking and street food."
    },
    {
      name: "Community Helper",
      icon: HeartHandshake,
      desc: "Believe in giving back to society by helping those in need whenever possible."
    },
    {
      name: "Teaching & Mentoring",
      icon: Book,
      desc: "Passionate about teaching underprivileged kids and sharing knowledge."
    },
    {
      name: "Music Lover",
      icon: Music,
      desc: "Finding focus and inspiration through Lo-fi beats and instrumental tracks."
    },
  ];

  // Map skill names to Simple Icons slugs
  const getIconSlug = (skill: string) => {
    const s = skill.toLowerCase();
    if (s.includes("html")) return "html5";
    if (s.includes("css")) return "css";
    if (s.includes("javascript")) return "javascript";
    if (s.includes("typescript")) return "typescript";
    if (s.includes("react native")) return "react";
    if (s.includes("react")) return "react";
    if (s.includes("next")) return "nextdotjs";
    if (s.includes("node")) return "nodedotjs";
    if (s.includes("mongo")) return "mongodb";
    if (s.includes("git code")) return "git";
    if (s === "git") return "git";
    if (s.includes("github")) return "github";
    if (s.includes("gitlab")) return "gitlab";
    if (s.includes("docker")) return "docker";
    if (s.includes("python")) return "python";
    if (s.includes("mysql")) return "mysql";
    if (s.includes("linux")) return "linux";
    if (s.includes("graphql")) return "graphql";
    if (s.includes("tailwind")) return "tailwindcss";
    if (s.includes("shadcn")) return "shadcnui";
    if (s.includes("bootstrap")) return "bootstrap";
    if (s.includes("aws")) return "amazonaws";
    if (s.includes("php")) return "php";
    if (s.includes("postgres")) return "postgresql";
    return "";
  };

  const getSkillColor = (skill: string) => {
    const s = skill.toLowerCase();
    if (s.includes("html")) return "bg-[#E34F26] text-white";
    if (s.includes("css")) return "bg-[#1572B6] text-white";
    if (s.includes("javascript")) return "bg-[#F7DF1E] text-black";
    if (s.includes("typescript")) return "bg-[#3178C6] text-white";
    if (s.includes("react")) return "bg-[#61DAFB] text-black";
    if (s.includes("next")) return "bg-[#000000] text-white";
    if (s.includes("node")) return "bg-[#339933] text-white";
    if (s.includes("mongo")) return "bg-[#47A248] text-white";
    if (s.includes("git")) return "bg-[#F05032] text-white";
    if (s.includes("docker")) return "bg-[#2496ED] text-white";
    if (s.includes("python")) return "bg-[#3776AB] text-white";
    if (s.includes("mysql")) return "bg-[#4479A1] text-white";
    if (s.includes("linux")) return "bg-[#FCC624] text-black";
    if (s.includes("graphql")) return "bg-[#E10098] text-white";
    if (s.includes("tailwind")) return "bg-[#06B6D4] text-white";
    if (s.includes("shadcn")) return "bg-[#000000] text-white";
    if (s.includes("gitlab")) return "bg-[#FC6D26] text-white";
    if (s.includes("aws")) return "bg-[#FF9900] text-black";
    if (s.includes("php")) return "bg-[#777BB4] text-white";
    if (s.includes("bootstrap")) return "bg-[#810ffa] text-white";
    if (s.includes("postgres")) return "bg-[#336791] text-white";
    return "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300";
  };

  return (
    <section id="about" className="py-24 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white font-header">
            About Me
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* 1. My Story Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-header mb-4">
              My Story
            </h2>
            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 font-body leading-relaxed text-lg">
              <p>
                Hello! I'm <span className="font-semibold text-blue-600 dark:text-blue-400">{profile.name}</span>.
                I am currently working as a <span className="font-medium">{profile.title}</span> at <span className="font-medium text-slate-900 dark:text-white">{experience[0].company}</span>.
              </p>
              <p>
                My focus is on building scalable frontend architectures and seamless user experiences using modern web technologies. I enjoy solving complex problems and collaborating with cross-functional teams to deliver high-quality software solutions.
              </p>
              <p>
                When I'm not pushing code, I'm usually exploring new tools, optimizing performance, or mentoring junior developers to help them grow in their careers.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <PixelImage
              src="/profile.jpeg"
              customGrid={{ rows: 12, cols: 12 }}
              grayscaleAnimation
              animate={true}
            />
          </div>
        </div>

        {/* 2. Experience Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-header">
              Experience
            </h2>
          </div>

          <div className="space-y-12">
            {experience.map((job, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900"></div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-500 dark:text-slate-400 mt-1">
                    <span className="font-medium text-blue-600 dark:text-blue-400">{job.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{job.period}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{job.location}</span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed font-body">
                  {job.description}
                </p>

                <ul className="space-y-2">
                  {job.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Skills & Expertise Section */}
        <div className="mb-32">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-header mb-4">
              Skills & Expertise
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-body">
              A collection of technologies I'm proficient with, from languages to frameworks and tools.
            </p>
          </div>

          <div className="space-y-10">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4 font-header">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {(items as string[]).map((skill) => {
                    const slug = getIconSlug(skill);
                    const colorClasses = getSkillColor(skill);
                    // Determine if we need a dark icon or light icon based on background brightness
                    // Rough heuristic: yellow/cyan/white backgrounds need black text/icons
                    const isDarkText = colorClasses.includes("text-black") || colorClasses.includes("text-slate-900");
                    const iconColor = isDarkText ? "000000" : "FFFFFF";

                    return (
                      <span
                        key={skill}
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-sm font-semibold font-body flex items-center gap-2 shadow-sm transition-transform hover:scale-105 cursor-default",
                          colorClasses
                        )}
                      >
                        {slug && (
                          <img
                            src={`https://cdn.simpleicons.org/${slug}/${iconColor}`}
                            alt=""
                            className="w-4 h-4"
                            width={16}
                            height={16}
                          />
                        )}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. When I'm Not Coding */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-header mb-4">
              When I'm Not Coding
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-body max-w-2xl mx-auto">
              Here's what keeps me passionate and engaged with life outside of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbies.map((hobby, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 group",
                  "bg-white dark:bg-slate-900 border",
                  "border-slate-100 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl"
                )}
              >
                <div className="mb-6 text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-300">
                  <hobby.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 font-header">
                  {hobby.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-body leading-relaxed">
                  {hobby.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;
