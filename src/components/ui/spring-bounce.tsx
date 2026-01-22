'use client';

import { motion } from 'framer-motion';

interface SpringBounceProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stiffness?: number;
  damping?: number;
}

export const SpringBounce = ({
  children,
  className = '',
  delay = 0,
  stiffness = 200,
  damping = 12,
}: SpringBounceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness,
        damping,
        delay,
      }}
      viewport={{ once: true, margin: "100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};