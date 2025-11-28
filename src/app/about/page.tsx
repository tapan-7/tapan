import React from "react";
import { Calendar, Github, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PixelImage } from "@/components/ui/pixel-image";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="py-24 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div
          className="max-w-6xl mx-auto"
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="mx-auto">
              <PixelImage
                src="/profile.jpeg"
                customGrid={{ rows: 8, cols: 8 }}
                grayscaleAnimation
                animate={true}
              />
            </div>

            {/* Bio */}
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-normal">
                I’m a results-driven{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Software Development Engineer
                </span>{" "}
                with over 2 years of experience building scalable web and mobile
                applications using modern frontend technologies.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-normal">
                Currently at{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  HYSCALER NETTANTRA TECHNOLOGIES (INDIA) PRIVATE LIMITED
                </span>
                , I focus on <span className="font-medium">Next.js</span> and{" "}
                <span className="font-medium">React Native</span> development —
                crafting interactive dashboards, modular systems, and seamless
                integrations for projects like{" "}
                <span className="font-medium">Drishti</span>.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-normal">
                I’ve also contributed to healthcare platforms such as{" "}
                <span className="font-medium">Doctegrity</span> and{" "}
                <span className="font-medium">CareNuance</span>, focusing on
                real-time consultations and secure patient management. I value
                clean, maintainable code and collaboration that drives
                meaningful user experiences.
              </p>

              {/* Meta Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-slate-700 dark:text-slate-300">
                    Bhubaneswar, Odisha
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-slate-700 dark:text-slate-300">
                    2+ Years Experience
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white"
                >
                  <a href="mailto:tapankumarswain353@gmail.com">
                    <Mail className="mr-2 w-4 h-4" />
                    Get In Touch
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <a
                    href="https://github.com/tapan-7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 w-4 h-4" />
                    View GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
