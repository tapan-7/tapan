"use client";

import React from "react";
import { experience } from "@/constant/experience";
import { Calendar, MapPin as LocationIcon } from "lucide-react";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  return (
    <section id="experience" className="py-24 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Experience
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            I LIKE BUILDING THINGS
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative pl-12 border-l-[3px] border-slate-300 dark:border-slate-600 py-8 ${
                index === 0 ? "pt-0" : ""
              } ${index === experience.length - 1 ? "pb-0" : ""}`}
            >
              <div className="absolute left-[-2px] top-8 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 border-4 border-white dark:border-slate-800 shadow-md flex items-center justify-center z-10 transform -translate-x-1/2">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>

              <div className="mb-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-slate-500 dark:text-slate-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <LocationIcon className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-3">
                {exp.description}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="ml-5"
              >
                <h4 className="text-slate-900 dark:text-white font-semibold mb-3 text-base">
                  Key Achievements:
                </h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: 0.25 + i * 0.05 }}
                      className="flex items-start gap-3 text-slate-700 dark:text-slate-300 leading-relaxed"
                    >
                      <div className="w-2.5 h-2.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">
                        {achievement}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
