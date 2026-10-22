"use client";

import React from "react";
import { AnimatedContent } from "@/components/react-bits/animated-content";
import { BlurText } from "@/components/react-bits/blur-text";
import { ArrowUpRight, Download, Github, Linkedin, Mail, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-border/60 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container max-w-4xl mx-auto text-center">
        <AnimatedContent distance={20} direction="vertical" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border text-xs font-mono text-primary mb-6">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>06 // Connect</span>
          </div>
        </AnimatedContent>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          <BlurText text="Let's build something" animateBy="words" delay={0.06} />
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary/80 to-primary">
            <BlurText text="exceptional together." animateBy="words" delay={0.08} />
          </span>
        </h2>

        <AnimatedContent distance={20} direction="vertical" delay={0.3}>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            I&apos;m currently open to frontend engineering opportunities, mobile client architectures, and ambitious collaborative ventures.
          </p>
        </AnimatedContent>

        <AnimatedContent distance={25} direction="vertical" delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Send an Email</span>
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-card text-foreground border border-border font-medium text-sm hover:border-primary/50 hover:bg-secondary transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={20} direction="vertical" delay={0.5}>
          <div className="pt-10 border-t border-border/80 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://github.com/tapankumarswain"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <span className="w-1 h-1 rounded-full bg-border" />

            <a
              href="https://linkedin.com/in/tapankumarswain"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <span className="w-1 h-1 rounded-full bg-border" />

            <a
              href="https://dev.to/tapan-7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors font-mono text-xs"
            >
              <span>DEV.TO</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
