'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ExternalLink, 
  Bomb,
  Undo2
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import BentoBox from '@/components/BentoBox';
import { ThemeToggle } from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProjectsClient({ projects }: { projects: any[] }) {
  const [isChaosMode, setIsChaosMode] = useState(false);

  const toggleChaosMode = () => {
    setIsChaosMode(!isChaosMode);
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-12 md:px-8 lg:py-20">
      {/* Header */}
      <div className="mb-16 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <Link 
            href="/" 
            className="group flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-zinc-200 bg-white text-zinc-900 transition-all hover:border-indigo-500 hover:text-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
          >
            <ArrowLeft className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
          </Link>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
              Projects
            </h1>
            <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
              A collection of systems, tools, and technical explorations.
            </p>
          </div>
        </div>

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
          </button>
        </div>
      </div>

      {/* Projects Bento Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-4 md:grid-cols-4"
      >
        {projects.map((project, index) => (
          <BentoBox 
            key={project.id}
            isChaosMode={isChaosMode}
            className={cn(
              "flex flex-col justify-between border-zinc-200/50 dark:border-zinc-800/50",
              project.size === "large" && "md:col-span-2 md:row-span-2 bg-indigo-500/5",
              project.size === "wide" && "md:col-span-2",
              project.size === "small" && "md:col-span-1"
            )}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {project.type}
                </span>
                <div className="flex gap-2">
                  <FaGithub className="h-4 w-4 text-zinc-400" />
                  <ExternalLink className="h-4 w-4 text-zinc-400" />
                </div>
              </div>
              
              <h3 className={cn(
                "font-bold text-zinc-900 dark:text-zinc-100 mb-2",
                project.size === "large" ? "text-3xl" : "text-xl"
              )}>
                {project.title}
              </h3>
              
              <div className="prose prose-sm dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                <ReactMarkdown>{project.content}</ReactMarkdown>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((t: string) => (
                  <span key={t} className="rounded-lg bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
              
              {project.size === "large" && (
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Explore Source Code <ChevronRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </BentoBox>
        ))}
      </motion.div>

      <footer className="mt-20 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Kohendru. Journeying through the backend.</p>
      </footer>
    </main>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}
