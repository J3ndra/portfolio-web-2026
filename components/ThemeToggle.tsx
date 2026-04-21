'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-14 w-14" />;

  const toggleTheme = (event: React.MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Support for modern View Transitions API
    if (!document.startViewTransition) {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      return;
    }

    const transition = document.startViewTransition(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      
      document.documentElement.animate(
        {
          clipPath: theme === 'dark' ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-in-out',
          pseudoElement: theme === 'dark' 
            ? '::view-transition-old(root)' 
            : '::view-transition-new(root)',
        }
      );
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-zinc-200 bg-white text-zinc-900 transition-all duration-300 hover:border-indigo-500 hover:text-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
      aria-label="Toggle Theme"
    >
      <div className="relative h-6 w-6">
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="absolute inset-0"
            >
              <Moon className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="absolute inset-0"
            >
              <Sun className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
}
