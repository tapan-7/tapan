"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function HomePage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Glossy Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent dark:from-slate-900/5" />
        <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-blue-50/50 to-transparent dark:from-blue-900/20 blur-3xl" />

        <motion.div
          className="absolute w-60 h-60 rounded-full bg-gradient-to-tr from-blue-100 to-transparent dark:from-blue-900/20 dark:to-transparent -left-20 top-[20%] opacity-50 dark:opacity-30"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.02, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 30,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-blue-100 to-transparent dark:from-blue-900/20 dark:to-transparent -right-20 top-[10%] opacity-50 dark:opacity-30"
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 40,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 5,
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-blue-100 to-transparent dark:from-blue-900/20 dark:to-transparent top-[5%] left-[30%] opacity-40 dark:opacity-30"
          animate={{
            scale: [1, 1.03, 1],
            rotate: [0, 10, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 35,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 10,
          }}
        />
      </div>

      <motion.div
        style={{ y }}
        className="relative z-10 container mx-auto px-6 text-center max-w-3xl"
      >
        <motion.div initial="hidden" animate={controls} className="space-y-8">
          <motion.p
            custom={0}
            variants={itemVariants}
            className="text-blue-600 dark:text-blue-400 font-medium tracking-wide uppercase text-sm bg-blue-50 dark:bg-blue-900/30 px-8 rounded-full inline-block"
          >
            <TypingAnimation
              words={[
                "Software Development Engineer",
                "Web Developer",
                "Mobile Developer",
                "Tech Enthusiast",
                "Open Source Contributor",
                "Lifelong Learner",
              ]}
              cursorStyle="underscore"
              loop
            />
          </motion.p>

          <motion.h1
            custom={1}
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight"
          >
            <span className="text-blue-600 dark:text-blue-400">Tapan </span>
            Kumar Swain
          </motion.h1>

          <motion.p
            custom={2}
            variants={itemVariants}
            className="text-lg line-clamp-4 md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting beautiful, high-performance web and mobile applications
            with React and Next.js. Currently expanding my skills into backend
            development.
          </motion.p>

          <motion.div
            custom={3}
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-8 py-6 rounded-lg font-medium group"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <a href="/resume.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-6 rounded-lg transition-all duration-300 font-medium group"
              >
                <Download className="w-5 h-5 mr-2 transition-transform group-hover:-translate-y-1" />
                Download Resume
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Interactive 3D card effect */}
        <motion.div
          custom={4}
          variants={itemVariants}
          className="mt-20 relative w-full max-w-xl mx-auto perspective"
          animate={controls}
        >
          <div className="w-full h-20 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950/30 dark:to-transparent rounded-lg relative">
            <motion.div
              className="absolute inset-0 border border-blue-200 dark:border-blue-800 rounded-lg z-40"
              animate={{
                rotateX: [0, 2, 0, -2, 0],
                rotateY: [0, -2, 0, 2, 0],
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <code className="text-slate-500 dark:text-slate-400 font-mono text-sm">
                  const developer = new SoftwareEngineer("Tapan");
                </code>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
