"use client";

import React from "react";
import portfolioData from "@/constant/portfolio-data.json";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";

const ResumePage = () => {
  const { profile, experience, education, skills } = portfolioData;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen selection:bg-blue-100 dark:selection:bg-blue-900/30">

      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[100px] opacity-50 dark:opacity-20"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-400/20 blur-[100px] opacity-50 dark:opacity-20"></div>
      </div>

      <main className="container max-w-6xl mx-auto px-6 py-20 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
          className="mb-16"
        >
          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">
            {profile.name}
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-6">
            {profile.title}
          </p>

          {/* Socials & Download Row */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <Link
              href={profile.github}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              GitHub
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              LinkedIn
            </Link>

            {/* Download Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors shadow-sm ml-auto sm:ml-0"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Summary */}
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {profile.summary}
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white shrink-0">
              Experience
            </h2>
            <div className="h-px bg-slate-200 dark:bg-slate-800 w-full mt-1"></div>
          </div>

          <div className="space-y-16">
            {experience.map((job, idx) => (
              <div key={idx} className="group">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {job.company}
                  </h3>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                    {job.period}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                    {job.title}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 flex items-center gap-1 mt-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {job.location}
                  </p>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {job.description}
                </p>

                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0 opacity-70"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white shrink-0">
              Skills
            </h2>
            <div className="h-px bg-slate-200 dark:bg-slate-800 w-full mt-1"></div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="">
                <h3 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(items as string[]).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1.5 bg-transparent dark:bg-slate-800 text-blue-500 dark:text-slate-300 rounded-lg text-xs border border-blue-200 dark:border-slate-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white shrink-0">
              Education
            </h2>
            <div className="h-px bg-slate-200 dark:bg-slate-800 w-full mt-1"></div>
          </div>

          <div className="space-y-10">
            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {edu.period}
                  </span>
                </div>
                <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {edu.degree}
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl">
                  {edu.description}
                </p>
                {edu.gpa && (
                  <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
                    GPA: {edu.gpa}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.section>

      </main>

      {/* Decorative Footer Element */}
      <div className="flex justify-center pb-20 opacity-30">
        <div className="w-3 h-3 rotate-45 bg-blue-500"></div>
      </div>

    </div>
  );
};

export default ResumePage;