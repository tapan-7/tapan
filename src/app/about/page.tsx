"use client";

import React from "react";
import Image from "next/image";
import {
  Music,
  Gamepad2,
  Plane,
  Book,
  Utensils,
  HeartHandshake,
} from "lucide-react";
import portfolioData from "@/constant/portfolio-data.json";
import { AnimatedSection } from "@/components/ui/animated-section";

const AboutPage = () => {
  const { profile, experience, skills } = portfolioData;

  const hobbies = [
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

  return (
    <section id="about" className="py-24 transition-colors duration-300 min-h-screen bg-[#09090b] text-[#f4f4f5]">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection className="text-center mb-20" delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#f4f4f5]">
            About Me
          </h1>
          <div className="w-20 h-1 bg-[#a78bfa] mx-auto rounded-full"></div>
        </AnimatedSection>

        <AnimatedSection
          className="grid md:grid-cols-2 gap-16 items-center mb-32"
          delay={0.2}
          direction="up"
        >
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl font-bold text-[#f4f4f5] mb-4">
              My Story
            </h2>
            <div className="space-y-4 text-[#a1a1aa] leading-relaxed text-base sm:text-lg">
              <p>
                Hello! I&apos;m{" "}
                <span className="font-semibold text-[#a78bfa]">
                  {profile.name}
                </span>
                . I am currently working as a{" "}
                <span className="font-medium text-[#f4f4f5]">{profile.title}</span> at{" "}
                <span className="font-medium text-[#f4f4f5]">
                  {experience[0].company}
                </span>
                .
              </p>
              <p>
                My focus is on building scalable frontend architectures and
                seamless user experiences using modern web technologies. I enjoy
                solving complex problems and collaborating with cross-functional
                teams to deliver high-quality software solutions.
              </p>
              <p>
                When I&apos;m not pushing code, I&apos;m usually exploring new tools,
                optimizing performance, or mentoring junior developers to help
                them grow in their careers.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-72 h-80 rounded-2xl overflow-hidden border border-[#27272a] bg-[#141418] shadow-2xl">
              <Image
                src="/profile.jpeg"
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-32" delay={0.3} direction="up">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-[#f4f4f5]">
              Experience
            </h2>
          </div>

          <div className="space-y-12">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="relative pl-8 border-l-2 border-[#27272a]"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#a78bfa] border-4 border-[#09090b]"></div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#f4f4f5]">
                    {job.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[#a1a1aa] mt-1 text-sm">
                    <span className="font-medium text-[#a78bfa]">
                      {job.company}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span>{job.period}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{job.location}</span>
                  </div>
                </div>

                <p className="text-[#a1a1aa] mb-4 leading-relaxed">
                  {job.description}
                </p>

                <ul className="space-y-2">
                  {job.achievements.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-[#a1a1aa]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] mt-2 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-32" delay={0.4} direction="up">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#f4f4f5] mb-4">
              Skills & Expertise
            </h2>
            <p className="text-[#a1a1aa]">
              A collection of technologies I&apos;m proficient with, from languages
              to frameworks and tools.
            </p>
          </div>

          <div className="space-y-10">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-bold text-[#f4f4f5] mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {(items as string[]).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#141418] border border-[#27272a] text-[#f4f4f5] hover:border-[#a78bfa] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-20" delay={0.5} direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#f4f4f5] mb-4">
              When I&apos;m Not Coding
            </h2>
            <p className="text-[#a1a1aa] max-w-2xl mx-auto">
              Here&apos;s what keeps me passionate and engaged with life outside of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbies.map((hobby, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 bg-[#141418] border border-[#27272a] hover:border-[#a78bfa]/50 hover:shadow-xl group"
              >
                <div className="mb-6 text-[#a78bfa] transform group-hover:scale-110 transition-transform duration-300">
                  <hobby.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-[#f4f4f5] mb-3">
                  {hobby.name}
                </h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  {hobby.desc}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutPage;
