"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/constant/projects";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerContentRef = useRef<HTMLDivElement>(null);

  const [travelDistance, setTravelDistance] = useState(0);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const [containerLeft, setContainerLeft] = useState(24);
  const shouldReduceMotion = useReducedMotion();

  const featured = projects.slice(0, 4);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const buffer = 200;
  const totalScroll = travelDistance > 0 ? travelDistance + buffer : 0;
  const endProgressRatio = totalScroll > 0 ? travelDistance / totalScroll : 1;

  const normalX = useTransform(
    scrollYProgress,
    [0, endProgressRatio, 1],
    [0, -travelDistance, -travelDistance]
  );

  const x = shouldReduceMotion ? 0 : normalX;

  useEffect(() => {
    const calculateDimensions = () => {
      if (!trackRef.current || !viewportRef.current) return;

      let leftOffset = 24;
      if (headerContentRef.current) {
        const rect = headerContentRef.current.getBoundingClientRect();
        if (rect.left > 0) {
          leftOffset = Math.round(rect.left);
        }
      }
      setContainerLeft(leftOffset);

      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = viewportRef.current.clientWidth;
      const viewportHeight = window.innerHeight;

      const distance = Math.max(0, trackWidth - viewportWidth);
      const total = distance > 0 ? distance + buffer : 0;

      setTravelDistance(distance);
      setContainerHeight(total > 0 ? viewportHeight + total : null);
    };

    calculateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      calculateDimensions();
    });

    if (trackRef.current) resizeObserver.observe(trackRef.current);
    if (viewportRef.current) resizeObserver.observe(viewportRef.current);
    if (headerContentRef.current) resizeObserver.observe(headerContentRef.current);

    window.addEventListener("resize", calculateDimensions);

    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(calculateDimensions).catch(() => {});
    }

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateDimensions);
    };
  }, [featured.length, buffer]);

  return (
    <section id="projects" className="relative border-t border-border/40">
      <div className="hidden md:block">
        <div
          ref={containerRef}
          style={{ height: containerHeight ? `${containerHeight}px` : "280vh" }}
          className="relative"
        >
          <div
            ref={viewportRef}
            className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-20 pb-8"
          >
            <div className="container max-w-6xl mx-auto px-6 shrink-0">
              <div ref={headerContentRef}>
                <SectionHeading
                  eyebrow="03 // SHOWCASE & CREATIONS"
                  title="Featured work."
                  description="Interactive applications and mobile architectures built for real-world reliability and impact."
                />
              </div>
            </div>

            <div className="w-full my-auto py-2">
              <motion.div
                ref={trackRef}
                style={{
                  x,
                  paddingLeft:
                    containerLeft > 24
                      ? `${containerLeft}px`
                      : "max(1.5rem, calc((100vw - 72rem) / 2 + 1.5rem))",
                  paddingRight:
                    containerLeft > 24
                      ? `${containerLeft}px`
                      : "max(1.5rem, calc((100vw - 72rem) / 2 + 1.5rem))",
                }}
                className="flex gap-8 w-max will-change-transform"
              >
                {featured.map((project, index) => {
                  const isExternalLink = project.link && project.link !== "#";
                  const isGithub = project.github && project.github !== "#";

                  return (
                    <div
                      key={project.title}
                      className="w-[70vw] max-w-[880px] h-[54vh] min-h-[390px] max-h-[480px] rounded-3xl bg-card border border-border/70 p-6 sm:p-8 flex flex-col justify-between shrink-0 shadow-2xl relative overflow-hidden group hover:border-primary/50 transition-colors duration-300"
                    >
                      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none -z-0" />

                      <div className="relative z-10 flex items-center justify-between border-b border-border/60 pb-3 sm:pb-4">
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

                      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
                        <div className="lg:col-span-5 space-y-3">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light line-clamp-3 sm:line-clamp-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                            {project.tech.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-0.5 sm:py-1 rounded-md bg-secondary border border-border/60 text-[11px] sm:text-xs font-mono text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="lg:col-span-7 h-[190px] sm:h-[220px] lg:h-[250px] rounded-2xl bg-background border border-border/60 overflow-hidden relative group/img">
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
                              <span className="text-xl sm:text-2xl font-bold text-foreground/40 font-mono mb-2">
                                {project.title}
                              </span>
                              <span className="text-xs text-muted-foreground font-mono">
                                Interactive Platform Preview
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="relative z-10 pt-3 flex items-center justify-between text-xs text-muted-foreground font-mono border-t border-border/60">
                        <span className="text-[11px] text-muted-foreground/80">
                          Engineering &bull; Production
                        </span>
                        <span>
                          0{index + 1} / 0{featured.length}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            <div className="container max-w-6xl mx-auto px-6 shrink-0 flex items-center justify-between text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-primary font-semibold">&lt;&gt;</span>
                <span>Scroll vertically to traverse projects &rarr;</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Showcase Progress</span>
                <div className="w-32 h-1.5 bg-secondary rounded-full overflow-hidden border border-border/60">
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

      <div className="block md:hidden px-6 pt-20 pb-16 space-y-8">
        <SectionHeading
          eyebrow="03 // SHOWCASE & CREATIONS"
          title="Featured work."
          description="Interactive applications and mobile architectures built for real-world reliability and impact."
        />

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
