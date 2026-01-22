'use client';

import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  once?: boolean;
  triggerOnce?: boolean;
}

export const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  once = true,  // Changed to true by default to prevent re-animations when scrolling back up
  triggerOnce = true,
}: AnimatedSectionProps) => {
  const getTranslateValues = () => {
    switch (direction) {
      case 'up':
        return { y: [20, 0] };
      case 'down':
        return { y: [-20, 0] };
      case 'left':
        return { x: [-20, 0] };
      case 'right':
        return { x: [20, 0] };
      default:
        return { y: [20, 0] };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getTranslateValues() }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.215, 0.61, 0.355, 1],
        }
      }}
      viewport={{ once, margin: "100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};