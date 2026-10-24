"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/constant/projects";
import { AnimatedSection } from "@/components/ui/animated-section";
import { LiquidWave } from "@/components/ui/liquid-wave";

const ProjectsPage = () => {
  return (
    <section id="projects" className="py-24 transition-colors duration-300 min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16" delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on that demonstrate my
            technical skills and problem-solving abilities.
          </p>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          {projects?.map((project, index) => {
            const isExternalLink = project.link && project.link !== "#";
            const isGithub = project.github && project.github !== "#";

            return (
              <AnimatedSection
                key={project.title}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                delay={0.1 * index}
                direction="up"
              >
                <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute top-[15%] left-0 w-[85%] aspect-[16/10] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] -rotate-2 group-hover:-rotate-3 group-hover:scale-105 z-10">
                      <div className="w-full h-full bg-card rounded-xl p-3 border border-border group-hover:border-primary/50 transition-colors">
                        <div className="w-full h-full rounded-lg overflow-hidden relative bg-background">
                          {project.image.startsWith("/") ? (
                            <Image
                              src={project.image}
                              alt={`${project.title} desktop view`}
                              fill
                              sizes="(max-width: 1024px) 80vw, 500px"
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-sm font-mono text-muted-foreground">
                              {project.title}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {project.mobileImage && project.mobileImage.startsWith("/") && (
                      <div className="absolute right-6 top-[30%] w-[28%] aspect-[6/11] transition-all rotate-6 duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-8 group-hover:scale-105 z-20">
                        <div className="w-full h-full bg-card rounded-xl p-2 border border-border">
                          <div className="w-full h-full rounded-lg overflow-hidden relative bg-background">
                            <Image
                              src={project.mobileImage}
                              alt={`${project.title} mobile view`}
                              fill
                              sizes="(max-width: 1024px) 25vw, 180px"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-2">
                    {isExternalLink && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-xs py-2.5 px-6 rounded-lg transition-all duration-300 group cursor-pointer hover:scale-105 active:scale-95"
                      >
                        <LiquidWave color="foreground" />
                        <span className="relative z-10 flex items-center gap-2 text-primary-foreground group-hover:text-background transition-colors duration-300">
                          <span>Visit Project</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </a>
                    )}
                    {isGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden inline-flex items-center gap-2 bg-card border border-border text-muted-foreground font-medium text-xs py-2.5 px-6 rounded-lg transition-all duration-300 group cursor-pointer hover:border-foreground/30 hover:scale-105 active:scale-95"
                      >
                        <LiquidWave color="foreground" />
                        <span className="relative z-10 flex items-center gap-2 text-muted-foreground group-hover:text-background transition-colors duration-300">
                          <span>GitHub</span>
                          <Github className="w-3.5 h-3.5" />
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
