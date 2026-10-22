"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { BlurText } from "@/components/react-bits/blur-text";
import { projects } from "@/constant/projects";

export function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const featured = projects.slice(0, 4);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["2%", `-${(featured.length - 1) * 72}%`]
  );

  return (
    <section id="projects" className="relative border-t border-[#27272a]/60">
      <div className="pt-24 pb-8 px-6 container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#a78bfa] uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 // Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f4f4f5]">
              <BlurText text="Featured creations" animateBy="words" delay={0.06} />
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#a1a1aa] max-w-md">
            Interactive applications and mobile architectures built for real-world impact.
          </p>
        </div>
      </div>

      <div className="hidden md:block">
        <div ref={containerRef} className="h-[320vh] relative">
          <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
            <motion.div style={{ x }} className="flex gap-8 pl-12 pr-24 w-max">
              {featured.map((project, index) => {
                const isExternalLink = project.link && project.link !== "#";
                const isGithub = project.github && project.github !== "#";

                return (
                  <div
                    key={project.title}
                    className="w-[72vw] max-w-[940px] h-[72vh] max-h-[580px] rounded-3xl bg-[#141418] border border-[#27272a] p-8 lg:p-10 flex flex-col justify-between shrink-0 shadow-2xl relative overflow-hidden group hover:border-[#a78bfa]/50 transition-colors duration-300"
                  >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#7c3aed]/10 rounded-full blur-[100px] pointer-events-none -z-0" />

                    <div className="relative z-10 flex items-center justify-between border-b border-[#27272a] pb-5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#a78bfa] bg-[#1e1e24] px-2.5 py-1 rounded-md border border-[#27272a]">
                          0{index + 1}
                        </span>
                        <span className="text-xs font-medium uppercase tracking-wider text-[#a1a1aa]">
                          Featured Project
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {isGithub && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-[#18181b] border border-[#27272a] text-[#a1a1aa] hover:text-[#f4f4f5] hover:border-[#a78bfa]/40 transition-all"
                            aria-label={`GitHub source for ${project.title}`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {isExternalLink && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#a78bfa] text-[#09090b] font-semibold text-xs hover:bg-[#c4b5fd] transition-colors"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-center">
                      <div className="lg:col-span-5 space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#f4f4f5] group-hover:text-[#a78bfa] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[#a1a1aa] leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tech.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-xs font-mono text-[#a1a1aa]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-7 h-[260px] sm:h-[300px] rounded-2xl bg-[#0e0e11] border border-[#27272a] overflow-hidden relative group/img">
                        {project.image.startsWith("/") ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 1200px) 50vw, 600px"
                            className="object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#18181b] to-[#0e0e11] p-6 text-center">
                            <span className="text-3xl font-bold text-[#27272a] font-mono mb-2">
                              {project.title}
                            </span>
                            <span className="text-xs text-[#a1a1aa] font-mono">
                              Interactive Platform Preview
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="relative z-10 pt-4 flex items-center justify-between text-xs text-[#a1a1aa] font-mono border-t border-[#27272a]">
                      <span>Scroll to explore &rarr;</span>
                      <span>
                        0{index + 1} / 0{featured.length}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="md:hidden px-6 pb-20 space-y-8">
        {featured.map((project, index) => {
          const isExternalLink = project.link && project.link !== "#";
          const isGithub = project.github && project.github !== "#";

          return (
            <div
              key={project.title}
              className="rounded-2xl bg-[#141418] border border-[#27272a] p-6 space-y-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#a78bfa] bg-[#1e1e24] px-2 py-0.5 rounded border border-[#27272a]">
                  0{index + 1}
                </span>
                <div className="flex gap-2">
                  {isGithub && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-[#18181b] border border-[#27272a] text-[#a1a1aa]"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {isExternalLink && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#a78bfa] text-[#09090b] font-medium text-xs"
                    >
                      <span>Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="h-44 rounded-xl bg-[#0e0e11] border border-[#27272a] overflow-hidden relative">
                {project.image.startsWith("/") ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="90vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm font-mono text-[#a1a1aa]">
                    {project.title}
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#f4f4f5] mb-2">{project.title}</h3>
                <p className="text-xs text-[#a1a1aa] leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#18181b] border border-[#27272a] text-[11px] font-mono text-[#a1a1aa]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
