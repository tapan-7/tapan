'use client';

import { motion } from 'framer-motion';

interface StaggeredTextProps {
  text: string;
  className?: string;
  delayPerChar?: number;
  staggerDelay?: number;
}

export const StaggeredText = ({
  text,
  className = '',
  delayPerChar = 0.02,
  staggerDelay = 0.2,
}: StaggeredTextProps) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: delayPerChar, delayChildren: i * staggerDelay }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { 
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <motion.div
      style={{ display: 'inline-block' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-200px" }}
      className={className}
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};