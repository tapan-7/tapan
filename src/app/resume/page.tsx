"use client";

import React from "react";
import portfolioData from "@/constant/portfolio-data.json";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ArrowUpRight } from "lucide-react";
import { LiquidWave } from "@/components/ui/liquid-wave";

const ResumePage = () => {
  const { profile, experience, education, skills } = portfolioData;

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <main className="container max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
          className="mb-14"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
                {profile.name}
              </h1>
              <p className="text-lg font-medium text-primary">
                {profile.title}
              </p>
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full transition-all duration-300 group cursor-pointer hover:scale-105 active:scale-95 w-fit"
            >
              <LiquidWave color="foreground" />
              <span className="relative z-10 flex items-center gap-2 text-primary-foreground group-hover:text-background transition-colors duration-300">
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground mb-6">
            <Link
              href={profile.github}
              target="_blank"
              className="hover:text-foreground flex items-center gap-1 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
            <span>•</span>
            <Link
              href={profile.linkedin}
              target="_blank"
              className="hover:text-foreground flex items-center gap-1 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
            <span>•</span>
            <a
              href="mailto:contact@example.com"
              className="hover:text-foreground transition-colors"
            >
              contact@example.com
            </a>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
            {profile.summary}
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xl font-bold text-foreground shrink-0">
              Professional Experience
            </h2>
            <div className="h-px bg-border w-full"></div>
          </div>

          <div className="space-y-10">
            {experience.map((job, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {job.company}
                  </h3>
                  <span className="text-xs font-mono text-primary">
                    {job.period}
                  </span>
                </div>

                <div className="text-sm font-semibold text-muted-foreground mb-3">
                  {job.title} • {job.location}
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                  {job.description}
                </p>

                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xl font-bold text-foreground shrink-0">
              Technical Skills
            </h2>
            <div className="h-px bg-border w-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="p-5 rounded-xl bg-card border border-border">
                <h3 className="text-xs font-mono font-semibold text-primary uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(items as string[]).map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-secondary text-foreground rounded-md text-xs font-mono border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xl font-bold text-foreground shrink-0">
              Education
            </h2>
            <div className="h-px bg-border w-full"></div>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-card border border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    {edu.degree}
                  </h3>
                  <div className="text-xs text-muted-foreground">{edu.institution}</div>
                </div>
                <span className="text-xs font-mono text-primary">{edu.period}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default ResumePage;
