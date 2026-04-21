'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Briefcase, 
  Bomb,
  Undo2
} from 'lucide-react';
import { motion } from 'framer-motion';
import BentoBox from '@/components/BentoBox';
import { ThemeToggle } from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';

const EXPERIENCES = [
  {
    role: "Senior Backend Engineer",
    company: "TechFlow Systems",
    period: "2022 - Present",
    description: "Architected and maintained high-throughput microservices in Go. Optimized database performance for millions of concurrent users.",
    tech: ["Go", "PostgreSQL", "Redis", "Kafka"]
  },
  {
    role: "Backend Developer",
    company: "CloudScale Inc.",
    period: "2020 - 2022",
    description: "Developed REST and gRPC APIs. Implemented automated CI/CD pipelines and infrastructure as code using Terraform.",
    tech: ["Node.js", "Python", "AWS", "Terraform"]
  },
  {
    role: "Junior Software Engineer",
    company: "StartupSeed",
    period: "2018 - 2020",
    description: "Contributed to the core backend engine of a fintech platform. Integrated third-party payment gateways and real-time notification systems.",
    tech: ["Python", "Django", "MySQL", "Docker"]
  }
];

export default function ExperiencePage() {
  const [isChaosMode, setIsChaosMode] = useState(false);

  const toggleChaosMode = () => {
    setIsChaosMode(!isChaosMode);
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-12 md:px-8 lg:py-20">
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
              Experience
            </h1>
            <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
              My professional journey through the digital backbone.
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

      {/* Vertical Timeline */}
      <div className="relative">
        {/* The Center Line */}
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-4 md:left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent"
        />

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div 
              key={index} 
              className="relative flex w-full items-center justify-between md:justify-normal"
            >
              {/* Timeline Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
                className="absolute left-4 md:left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-zinc-50 bg-indigo-500 dark:border-zinc-950"
              />

              {/* Experience Card */}
              <div className={cn(
                "w-full pl-12 md:pl-0 md:w-[calc(50%-2rem)]",
                index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
              )}>
                <BentoBox 
                  isChaosMode={isChaosMode}
                  className="w-full border-zinc-200/50 dark:border-zinc-800/50"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                          <Briefcase className="h-4 w-4" />
                          <span className="text-sm font-bold uppercase tracking-wider">{exp.period}</span>
                        </div>
                        <h3 className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-100">{exp.role}</h3>
                        <p className="text-lg font-medium text-zinc-500 dark:text-zinc-400">{exp.company}</p>
                      </div>
                    </div>
                    
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="rounded-lg bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </BentoBox>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Kohendru. Journeying through the backend.</p>
      </footer>
    </main>
  );
}
