"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { AnimatedContent } from "@/components/react-bits/animated-content";
import { LiquidWave } from "@/components/ui/liquid-wave";
import portfolioData from "@/constant/portfolio-data.json";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-6 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container max-w-4xl mx-auto text-center">
        <SectionHeading
          eyebrow={portfolioData.sections.contact.eyebrow}
          badge
          align="center"
          title={portfolioData.sections.contact.title}
          gradientText={portfolioData.sections.contact.gradientText}
          description={portfolioData.sections.contact.description}
          className="mb-12"
        />

        <AnimatedContent distance={25} direction="vertical" delay={0.35}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href={`mailto:${profile.email}`}
              className="relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 group cursor-pointer hover:scale-105 active:scale-95"
            >
              <LiquidWave color="foreground" />
              <span className="relative z-10 flex items-center gap-2.5 text-primary-foreground group-hover:text-background transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>{profile.email}</span>
              </span>
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              aria-label="Copy email address"
              className="relative overflow-hidden inline-flex items-center gap-2 px-5 py-4 rounded-full bg-secondary border border-border/70 text-foreground text-sm font-mono transition-all duration-300 group cursor-pointer hover:border-foreground/30 hover:scale-105 active:scale-95"
            >
              <LiquidWave color="foreground" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-background transition-colors duration-300">
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-primary group-hover:text-background transition-colors duration-300" />
                    <span className="text-xs text-primary group-hover:text-background transition-colors duration-300">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-muted-foreground group-hover:text-background transition-colors duration-300" />
                    <span className="text-xs text-muted-foreground group-hover:text-background transition-colors duration-300">Copy</span>
                  </>
                )}
              </span>
            </button>

            <a
              href="/resume.pdf"
              download
              className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-4 rounded-full bg-card text-foreground border border-border/70 font-medium text-sm transition-all duration-300 group cursor-pointer hover:border-foreground/30 hover:scale-105 active:scale-95"
            >
              <LiquidWave color="foreground" />
              <span className="relative z-10 flex items-center gap-2 text-foreground group-hover:text-background transition-colors duration-300">
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </span>
            </a>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={20} direction="vertical" delay={0.45}>
          <div className="pt-12 border-t border-border/40 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors group"
            >
              <Github className="w-4 h-4 text-primary" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <span className="w-1 h-1 rounded-full bg-border" />

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors group"
            >
              <Linkedin className="w-4 h-4 text-primary" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <span className="w-1 h-1 rounded-full bg-border" />

            <a
              href="https://dev.to/tapan-7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors font-mono text-xs group"
            >
              <span>DEV.TO</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
