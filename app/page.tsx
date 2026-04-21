'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Code2, 
  Terminal, 
  Zap,
  Bomb,
  Undo2
} from 'lucide-react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaXTwitter 
} from 'react-icons/fa6';
import BentoBox from '@/components/BentoBox';
import { ThemeToggle } from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';

export default function Home() {
  const [isChaosMode, setIsChaosMode] = useState(false);

  const toggleChaosMode = () => {
    setIsChaosMode(!isChaosMode);
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-12 md:px-8 lg:py-20">
      {/* Header / Intro */}
      <div className="mb-12 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-zinc-900 dark:text-zinc-100">
            Kohendru
          </h1>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
            Backend Engineer & Builder of Robust Systems
          </p>
        </div>
        
        {/* Toggles */}
        <div className="flex gap-4">
          <ThemeToggle />
          <button
            onClick={toggleChaosMode}
            className={cn(
              "group relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 transition-all duration-300",
              isChaosMode 
                ? "border-red-500 bg-red-500/10 text-red-500 hover:bg-red-500/20" 
                : "border-zinc-200 bg-white text-zinc-900 hover:border-indigo-500 hover:text-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
            )}
            title={isChaosMode ? "Restore Order" : "Release Chaos"}
          >
            {isChaosMode ? (
              <Undo2 className="h-6 w-6 animate-pulse" />
            ) : (
              <Bomb className="h-6 w-6 group-hover:animate-bounce" />
            )}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {isChaosMode ? "Fix it!" : "Don't click this"}
            </span>
          </button>
        </div>
      </div>

      {/* The Bento Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-4">
        
        {/* Hero / About - Wide */}
        <BentoBox 
          isChaosMode={isChaosMode}
          className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent"
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <Terminal className="mb-4 h-8 w-8 text-indigo-500" />
              <h2 className="text-2xl font-bold mb-4">Crafting the digital backbone</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I specialize in building high-performance APIs, distributed systems, and scalable infrastructure. 
                Whether it&apos;s optimizing SQL queries or architecting microservices, I love making complex backend 
                logic feel simple and elegant.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <a href="https://github.com" className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:text-indigo-500 transition-colors">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:text-indigo-500 transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:text-indigo-500 transition-colors">
                <FaXTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </BentoBox>

        {/* Tech Stack - Large */}
        <BentoBox 
          isChaosMode={isChaosMode}
          className="md:col-span-2 lg:col-span-1"
        >
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Code2 className="h-4 w-4 text-emerald-500" />
            Stack
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {['Go', 'Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS'].map((tech) => (
              <div key={tech} className="flex items-center gap-2 rounded-lg bg-zinc-100/50 px-3 py-2 text-sm dark:bg-zinc-800/50">
                <Zap className="h-3 w-3 text-emerald-500" />
                {tech}
              </div>
            ))}
          </div>
        </BentoBox>

        {/* Experience / Status - Small */}
        <BentoBox 
          isChaosMode={isChaosMode}
          className="lg:col-span-1"
        >
          <h3 className="text-lg font-bold mb-2">Status</h3>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Available for new projects
          </div>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Currently deep-diving into Rust and High-Frequency Trading systems.
          </p>
        </BentoBox>

        {/* Contact Me - Wide & Repositioned */}
        <BentoBox 
          isChaosMode={isChaosMode}
          className="md:col-span-2 border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-500/10"
        >
          <div className="flex h-full flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Let&apos;s build something epic.</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                I&apos;m always open to discussing new systems and architecture.
              </p>
            </div>
            <div className="flex">
              <a 
                href="mailto:hello@example.com" 
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/40 active:scale-95"
              >
                <Mail className="h-5 w-5 transition-transform group-hover:-rotate-12" />
                Say Hi
              </a>
            </div>
          </div>
        </BentoBox>

      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Kohendru. Built with Next.js, Framer Motion, and a bit of chaos.</p>
      </footer>
    </main>
  );
}
