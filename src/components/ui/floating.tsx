'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  yRange?: number;
  delay?: number;
}

export const Floating = ({
  children,
  className = '',
  duration = 4,
  yRange = 10,
  delay = 0,
}: FloatingProps) => {
  return (
    <motion.div
      className={cn('floating flex items-center justify-center', className)}
      animate={{
        y: [0, -yRange, 0],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};