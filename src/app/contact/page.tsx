import React from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { LiquidWave } from "@/components/ui/liquid-wave";

const ContactPage = () => {
  return (
    <section id="contact" className="py-24 transition-colors duration-300 min-h-screen bg-background text-foreground flex items-center">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto" delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Let&apos;s Work Together
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg text-muted-foreground mb-12 leading-relaxed">
            I&apos;m always interested in discussing new opportunities and
            challenging projects. Let&apos;s connect and build something great
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="mailto:contact@example.com"
              className="relative overflow-hidden inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 group cursor-pointer hover:scale-105 active:scale-95"
            >
              <LiquidWave color="foreground" />
              <span className="relative z-10 flex items-center gap-2.5 text-primary-foreground group-hover:text-background transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>Send Message</span>
              </span>
            </a>
            <a
              download
              href="/resume.pdf"
              className="relative overflow-hidden inline-flex items-center gap-2.5 border border-border text-foreground px-7 py-3.5 rounded-full font-medium text-sm bg-card transition-all duration-300 group cursor-pointer hover:border-foreground/30 hover:scale-105 active:scale-95"
            >
              <LiquidWave color="foreground" />
              <span className="relative z-10 flex items-center gap-2.5 text-foreground group-hover:text-background transition-colors duration-300">
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </span>
            </a>
          </div>

          <div className="flex justify-center items-center gap-5">
            <a
              href="https://github.com/tapankumarswain"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="relative overflow-hidden flex items-center justify-center w-11 h-11 bg-card border border-border rounded-full transition-all duration-300 group cursor-pointer hover:border-foreground/30 hover:scale-105 active:scale-95"
            >
              <LiquidWave color="foreground" />
              <span className="relative z-10 flex items-center justify-center text-muted-foreground group-hover:text-background transition-colors duration-300">
                <Github className="w-5 h-5" />
              </span>
            </a>
            <a
              href="https://linkedin.com/in/tapankumarswain"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="relative overflow-hidden flex items-center justify-center w-11 h-11 bg-card border border-border rounded-full transition-all duration-300 group cursor-pointer hover:border-foreground/30 hover:scale-105 active:scale-95"
            >
              <LiquidWave color="foreground" />
              <span className="relative z-10 flex items-center justify-center text-muted-foreground group-hover:text-background transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </span>
            </a>
            <a
              href="mailto:contact@example.com"
              aria-label="Email"
              className="relative overflow-hidden flex items-center justify-center w-11 h-11 bg-card border border-border rounded-full transition-all duration-300 group cursor-pointer hover:border-foreground/30 hover:scale-105 active:scale-95"
            >
              <LiquidWave color="foreground" />
              <span className="relative z-10 flex items-center justify-center text-muted-foreground group-hover:text-background transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactPage;
