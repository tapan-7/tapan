import React from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Floating } from "@/components/ui/floating";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="py-24 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <AnimatedSection
          className="text-center max-w-2xl mx-auto"
          delay={0.1}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
            I'm always interested in discussing new opportunities and
            challenging projects. Let's connect and build something great
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="mailto:luffy@example.com"
              className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium group"
            >
              <Mail className="w-5 h-5" />
              Send Message
              <ArrowRight className="w-5 h-5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </a>
            <a
              download
              href="resume.pdf"
              className="flex items-center gap-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-4 rounded-lg transition-all duration-300 font-medium"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <Floating delay={0.2}>
              <a
                href="https://github.com/tapan-7"
                className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors duration-300"
              >
                <Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </a>
            </Floating>
            <Floating delay={0.4}>
              <a
                href="https://www.linkedin.com/in/tapan-kumar-swain-b4b231318/"
                className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </a>
            </Floating>
            <Floating delay={0.6}>
              <a
                href="mailto:luffy@example.com"
                className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors duration-300"
              >
                <Mail className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </a>
            </Floating>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactPage;
