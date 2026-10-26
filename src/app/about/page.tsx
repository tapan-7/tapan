"use client";

import React from "react";
import portfolioData from "@/constant/portfolio-data.json";
import { AnimatedSection } from "@/components/ui/animated-section";
import { aboutHobbies } from "@/constant/about";
import { ImageParticles } from "@/components/ui/image-particles";

const AboutPage = () => {
  const { profile, experience, skills } = portfolioData;

  return (
    <section id="about" className="py-24 transition-colors duration-300 min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection className="text-center mb-20" delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Me
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </AnimatedSection>

        <AnimatedSection
          className="grid md:grid-cols-2 gap-16 items-center mb-32"
          delay={0.2}
          direction="up"
        >
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              My Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
              <p>
                Hello! I&apos;m{" "}
                <span className="font-semibold text-primary">
                  {profile.name}
                </span>
                . I am currently working as a{" "}
                <span className="font-medium text-foreground">{profile.title}</span> at{" "}
                <span className="font-medium text-foreground">
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
            <ImageParticles
              src="/profile.jpeg"
              alt={profile.name}
              gap={3.5}
              particleSize={1.8}
              repulsionRadius={65}
              repulsionStrength={0.9}
              className="relative w-72 h-80 rounded-2xl overflow-hidden border border-border bg-card shadow-xl"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-32" delay={0.3} direction="up">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Experience
            </h2>
          </div>

          <div className="space-y-12">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="relative pl-8 border-l-2 border-border"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {job.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mt-1 text-sm">
                    <span className="font-medium text-primary">
                      {job.company}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span>{job.period}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{job.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {job.description}
                </p>

                <ul className="space-y-2">
                  {job.achievements.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {"technologies" in job && Array.isArray(job.technologies) && (
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-secondary/80 text-muted-foreground border border-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-32" delay={0.4} direction="up">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground">
              A collection of technologies I&apos;m proficient with, from languages
              to frameworks and tools.
            </p>
          </div>

          <div className="space-y-10">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {(items as string[]).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-card border border-border text-foreground hover:border-primary transition-colors"
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
            <h2 className="text-3xl font-bold text-foreground mb-4">
              When I&apos;m Not Coding
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here&apos;s what keeps me passionate and engaged with life outside of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutHobbies.map((hobby, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 bg-card border border-border hover:border-primary/50 group"
              >
                <div className="mb-6 text-primary transform group-hover:scale-110 transition-transform duration-300">
                  <hobby.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {hobby.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
