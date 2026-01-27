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
  const getInitialTranslateValues = () => {
    switch (direction) {
      case 'up':
        return { y: 20 };
      case 'down':
        return { y: -20 };
      case 'left':
        return { x: -20 };
      case 'right':
        return { x: 20 };
      default:
        return { y: 20 };
    }
  };

  const getAnimateTranslateValues = () => {
    return { x: 0, y: 0 };
  };

  // Define initial and animate variants separately to satisfy TypeScript
  const initialVariant = { opacity: 0, ...getInitialTranslateValues() };
  const animateVariant = {
    opacity: 1,
    ...getAnimateTranslateValues(),
    transition: {
      duration,
      delay,
      ease: [0.215, 0.61, 0.355, 1] as const,
    }
  };

  return (
    <motion.div
      initial={initialVariant}
      whileInView={animateVariant}
      viewport={{ once, margin: "100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};