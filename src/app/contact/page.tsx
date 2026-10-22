import React from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const ContactPage = () => {
  return (
    <section id="contact" className="py-24 transition-colors duration-300 min-h-screen bg-[#09090b] text-[#f4f4f5] flex items-center">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto" delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#f4f4f5]">
            Let&apos;s Work Together
          </h1>
          <div className="w-20 h-1 bg-[#a78bfa] mx-auto mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg text-[#a1a1aa] mb-12 leading-relaxed">
            I&apos;m always interested in discussing new opportunities and
            challenging projects. Let&apos;s connect and build something great
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-2.5 bg-[#a78bfa] hover:bg-[#c4b5fd] text-[#09090b] px-7 py-3.5 rounded-full transition-all duration-200 font-semibold text-sm shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Send Message</span>
            </a>
            <a
              download
              href="/resume.pdf"
              className="flex items-center gap-2.5 border border-[#27272a] text-[#f4f4f5] hover:bg-[#18181b] px-7 py-3.5 rounded-full transition-all duration-200 font-medium text-sm bg-[#141418]"
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
              className="flex items-center justify-center w-11 h-11 bg-[#141418] border border-[#27272a] hover:border-[#a78bfa] text-[#a1a1aa] hover:text-[#f4f4f5] rounded-full transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/tapankumarswain"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-11 h-11 bg-[#141418] border border-[#27272a] hover:border-[#a78bfa] text-[#a1a1aa] hover:text-[#f4f4f5] rounded-full transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              aria-label="Email"
              className="flex items-center justify-center w-11 h-11 bg-[#141418] border border-[#27272a] hover:border-[#a78bfa] text-[#a1a1aa] hover:text-[#f4f4f5] rounded-full transition-all duration-200"
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
