import React from "react";
import { skills } from "@/constant/skills";

const SkillsPage = () => {
  return (
    <section
      id="skills"
      className="py-24 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="mb-6"
            >
              <div className="flex justify-between mb-3">
                <span className="text-slate-900 dark:text-white font-semibold">
                  {skill.name}
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  style={{ width: `${skill.level}%` }}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-500 dark:to-blue-400 h-2 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
