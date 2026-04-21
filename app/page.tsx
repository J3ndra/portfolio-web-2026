'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Code2, 
  Server, 
  Database, 
  Cpu, 
  ExternalLink,
  Bomb,
  Undo2,
  Terminal,
  Zap
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
          className="md:col-span-2 md:row-span-2 bg-linear-to-br from-indigo-500/10 via-transparent to-transparent"
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

        {/* Featured Project - Long */}
        <BentoBox 
          isChaosMode={isChaosMode}
          className="md:col-span-2 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">Featured Project</span>
              <ExternalLink className="h-4 w-4 text-zinc-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">HyperScale Gateway</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              A lightning-fast API gateway built with Go, processing over 100k requests per second with sub-millisecond latency.
            </p>
          </div>
          <div className="mt-4 h-24 w-full rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            <Server className="h-8 w-8 text-indigo-500/50" />
          </div>
        </BentoBox>

        {/* Project 2 */}
        <BentoBox 
          isChaosMode={isChaosMode}
        >
          <h3 className="font-bold mb-2 text-sm">CacheMaster</h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            Distributed Redis caching layer with intelligent invalidation.
          </p>
          <div className="mt-4 flex gap-1">
            <div className="h-1.5 flex-1 rounded-full bg-amber-500" />
            <div className="h-1.5 flex-1 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-1.5 flex-1 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </BentoBox>

        {/* Project 3 */}
        <BentoBox 
          isChaosMode={isChaosMode}
        >
          <h3 className="font-bold mb-2 text-sm">LogStream</h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            Real-time log processing and alerting pipeline.
          </p>
          <div className="mt-4 flex justify-center">
            <Database className="h-8 w-8 text-emerald-500/30" />
          </div>
        </BentoBox>

        {/* Contact Me - Wide */}
        <BentoBox 
          isChaosMode={isChaosMode}
          className="md:col-span-4 lg:col-span-2 border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-500/10"
        >
          <div className="flex h-full flex-col justify-between sm:flex-row sm:items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Let&apos;s build something epic.</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                I&apos;m always open to discussing new systems and architecture.
              </p>
            </div>
            <a 
              href="mailto:hello@example.com" 
              className="group flex items-center gap-3 rounded-2xl bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/40 active:scale-95"
            >
              <Mail className="h-5 w-5 transition-transform group-hover:-rotate-12" />
              Say Hi
            </a>
          </div>
        </BentoBox>

        {/* Final Small Box */}
        <BentoBox 
          isChaosMode={isChaosMode}
          className="flex items-center justify-center"
        >
          <Cpu className="h-10 w-10 text-zinc-400 opacity-20" />
        </BentoBox>

        {/* Hiring Badge */}
        <BentoBox 
          isChaosMode={isChaosMode}
          className="flex items-center justify-center overflow-hidden bg-linear-to-br from-indigo-600 to-violet-700 p-0 border-none"
        >
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#fff_25%,transparent_25%,transparent_50%,#fff_50%,#fff_75%,transparent_75%,transparent)] bg-size-[20px_20px]" />
          <span className="relative text-3xl font-black tracking-tighter text-white uppercase italic">Hiring?</span>
        </BentoBox>

      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Kohendru. Built with Next.js, Framer Motion, and a bit of chaos.</p>
      </footer>
    </main>
  );
}
