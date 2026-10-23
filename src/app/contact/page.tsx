import React from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

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
              className="flex items-center gap-2.5 bg-primary hover:opacity-90 text-primary-foreground px-7 py-3.5 rounded-full transition-all duration-200 font-semibold text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Send Message</span>
            </a>
            <a
              download
              href="/resume.pdf"
              className="flex items-center gap-2.5 border border-border text-foreground hover:bg-secondary px-7 py-3.5 rounded-full transition-all duration-200 font-medium text-sm bg-card"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="flex justify-center items-center gap-5">
            <a
              href="https://github.com/tapankumarswain"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-11 h-11 bg-card border border-border hover:border-primary text-muted-foreground hover:text-foreground rounded-full transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/tapankumarswain"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-11 h-11 bg-card border border-border hover:border-primary text-muted-foreground hover:text-foreground rounded-full transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              aria-label="Email"
              className="flex items-center justify-center w-11 h-11 bg-card border border-border hover:border-primary text-muted-foreground hover:text-foreground rounded-full transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactPage;
