"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "@/constant/projects";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Floating } from "@/components/ui/floating";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge = ({ children, className = "" }: BadgeProps) => (
  <span className={`inline-block px-3 py-1.5 text-sm rounded-full ${className}`}>
    {children}
  </span>
);

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "default" | "primary" | "outline";
}

const Button = ({ children, href, className = "", variant = "default" }: ButtonProps) => {
  let buttonClasses = "inline-flex items-center justify-center gap-2";

  if (variant === "primary") {
    buttonClasses += " bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg";
  } else if (variant === "outline") {
    buttonClasses += " border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-medium py-3 px-8 rounded-lg transition-all duration-300";
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonClasses} ${className}`}
    >
      {children}
    </a>
  );
};

const ProjectsPage = () => {
  return (
    <section
      id="projects"
      className="py-24 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16" delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that demonstrate my
            technical skills and problem-solving abilities.
          </p>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          {projects?.map((project, index) => (
            <AnimatedSection
              key={index}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              delay={0.1 * index}
              direction="up"
            >
              {/* Left Section: Image Showcase - Overlapping desktop and mobile views */}
              <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                {!project.image ? (
                  <div className="text-4xl font-bold text-slate-400 dark:text-slate-600">
                    {project.title.split(" ")[0]}
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    {/* Desktop Image - positioned on the left with tilt and its own border */}
                    <div className="absolute top-[20%] left-0 w-[85%] aspect-[16/10] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] -rotate-2 group-hover:-rotate-3 group-hover:scale-105 z-10">
                      <div className="w-full h-full bg-slate-800 dark:bg-slate-900 rounded-xl p-3 shadow-2xl border-1 border-blue-700 dark:border-slate-600">
                        <div className="w-full h-full rounded-lg overflow-hidden">
                          <img
                            src={project.image}
                            alt={`${project.title} desktop view`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Mobile Image - positioned overlapping on the right with tilt and its own border */}
                    <div className="absolute right-12 top-[35%] translate-x-4 w-[25%] aspect-[6/10] transition-all rotate-6 duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-7 group-hover:scale-105 z-20">
                      <div className="w-full h-full bg-slate-800 dark:bg-slate-900 rounded-xl p-3 shadow-2xl border-1 border-blue-700 dark:border-slate-600">
                        <div className="w-full h-full rounded-lg overflow-hidden">
                          <img
                            src={project.mobileImage}
                            alt={`${project.title} mobile view`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                )}
              </div>

              {/* Right Section: Project Info */}
              <div className="flex flex-col gap-6">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Floating key={i} yRange={3} delay={0.2 * i}>
                      <Badge
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-medium"
                      >
                        {tech}
                      </Badge>
                    </Floating>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  <Button
                    href={project.link}
                    variant="primary"
                    className="hover:scale-105 transition-transform"
                  >
                    Visit Project
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  {project.github && (
                    <Button
                      href={project.github}
                      variant="outline"
                      className="hover:scale-105 transition-transform"
                    >
                      GitHub
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
