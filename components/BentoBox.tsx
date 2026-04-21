'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoBoxProps {
  children: React.ReactNode;
  className?: string;
  isChaosMode?: boolean;
}

const BentoBox = ({ children, className, isChaosMode }: BentoBoxProps) => {
  return (
    <motion.div
      // Scroll Spring Entry
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
      
      // Hover & Click Pops
      whileHover={{ 
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}

      // Chaos Mode (Physics Toy)
      drag={isChaosMode}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.8}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/10 dark:bg-zinc-900/50 dark:border-zinc-800/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/80 shadow-lg",
        isChaosMode && "cursor-grab active:cursor-grabbing z-50",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default BentoBox;
