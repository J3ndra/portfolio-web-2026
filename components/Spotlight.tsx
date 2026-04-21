'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

export default function Spotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isVisible]);

  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.1), transparent 80%)`
  );

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
    >
      <motion.div
        className="absolute inset-0 h-full w-full"
        style={{ background }}
      />
    </motion.div>
  );
}
