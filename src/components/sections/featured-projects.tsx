"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedContent } from "@/components/react-bits/animated-content";
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
    ["0%", `-${(featured.length - 1) * 78}%`]
  );

  return (
    <section id="projects" className="relative border-t border-border/40">
      <div className="pt-28 pb-10 px-6 container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <AnimatedContent distance={15} direction="vertical" delay={0.05}>
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-primary mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>03 // SHOWCASE & CREATIONS</span>
              </div>
            </AnimatedContent>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
              <BlurText text="Featured work." animateBy="words" delay={0.06} />
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-md font-light leading-relaxed">
            Interactive applications and mobile architectures built for real-world reliability and impact.
          </p>
        </div>
      </div>

      <div className="hidden md:block">
        <div ref={containerRef} className="h-[280vh] relative">
          <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
            <motion.div style={{ x }} className="flex gap-8 pl-10 pr-24 w-max">
              {featured.map((project, index) => {
                const isExternalLink = project.link && project.link !== "#";
                const isGithub = project.github && project.github !== "#";

                return (
                  <div
                    key={project.title}
                    className="w-[74vw] max-w-[960px] h-[70vh] max-h-[580px] rounded-3xl bg-card border border-border/70 p-8 lg:p-10 flex flex-col justify-between shrink-0 shadow-2xl relative overflow-hidden group hover:border-primary/50 transition-colors duration-300"
                  >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none -z-0" />

                    <div className="relative z-10 flex items-center justify-between border-b border-border/60 pb-5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-primary bg-secondary px-2.5 py-1 rounded-md border border-border">
                          0{index + 1}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                          Featured Project
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {isGithub && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
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
                            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90 transition-opacity shadow-md"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-center">
                      <div className="lg:col-span-5 space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tech.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md bg-secondary border border-border/60 text-xs font-mono text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-7 h-[260px] sm:h-[300px] rounded-2xl bg-background border border-border/60 overflow-hidden relative group/img">
                        {project.image.startsWith("/") ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 1200px) 50vw, 600px"
                            className="object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-secondary/50 to-background p-6 text-center">
                            <span className="text-2xl sm:text-3xl font-bold text-foreground/40 font-mono mb-2">
                              {project.title}
                            </span>
                            <span className="text-xs text-muted-foreground font-mono">
                              Interactive Platform Preview
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="relative z-10 pt-4 flex items-center justify-between text-xs text-muted-foreground font-mono border-t border-border/60">
                      <span>Scroll to navigate &rarr;</span>
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

      <div className="block md:hidden px-6 pb-20 space-y-8">
        {featured.map((project, index) => {
          const isExternalLink = project.link && project.link !== "#";
          const isGithub = project.github && project.github !== "#";

          return (
            <div
              key={project.title}
              className="rounded-2xl bg-card border border-border p-6 space-y-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-primary bg-secondary px-2.5 py-1 rounded-md border border-border">
                  0{index + 1}
                </span>
                <div className="flex gap-2">
                  {isGithub && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-secondary border border-border text-muted-foreground"
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
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground font-medium text-xs"
                    >
                      <span>Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="h-44 rounded-xl bg-background border border-border overflow-hidden relative">
                {project.image.startsWith("/") ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="90vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm font-mono text-muted-foreground">
                    {project.title}
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-secondary border border-border text-[11px] font-mono text-muted-foreground"
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
