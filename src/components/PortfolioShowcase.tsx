'use client';

import { useEffect, useState } from 'react';
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Cpu,
  ExternalLink,
  Layers,
  Menu,
  Server,
  Terminal,
  X,
  Zap,
} from 'lucide-react';

import { projects } from '@/data/projects';

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'Java',
  'Laravel',
  'Flutter',
  'Docker',
  'PostgreSQL',
  'Linux',
  'Git',
];

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Contact', href: '#contact' },
];

const pad = (value: number) => String(value).padStart(2, '0');

export default function PortfolioShowcase() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projectCount = projects.length;

  // Keep the selection valid if the project list ever shrinks.
  const activeIndex =
    projectCount > 0 ? Math.min(selectedProjectIndex, projectCount - 1) : 0;
  const currentProject = projects[activeIndex] ?? null;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <main className="portfolio-shell min-h-screen bg-[#050914] text-slate-100">
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-[120px]" />
        <div className="absolute -right-40 top-[35%] h-[450px] w-[450px] rounded-full bg-violet-500/[0.08] blur-[140px]" />
        <div className="absolute bottom-0 left-[30%] h-96 w-96 rounded-full bg-blue-500/[0.07] blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-10">
        {/* Navigation */}
        <header className="sticky top-4 z-50 mb-12">
          <nav
            aria-label="Primary"
            className="site-nav flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0a1221]/85 px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur-2xl"
          >
            <a
              href="#home"
              className="flex items-center gap-3"
              aria-label="Alex Aganga home"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 font-mono text-sm font-bold text-cyan-300">
                AA
              </span>

              <span className="leading-tight">
                <span className="block text-sm font-bold tracking-wide text-white">
                  ALEX<span className="text-cyan-400">.OS</span>
                </span>
                <span className="block text-[10px] tracking-[0.18em] text-slate-500">
                  DIGITAL ENGINEERING
                </span>
              </span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2.5 text-xs font-semibold text-cyan-300 transition-all hover:border-cyan-300/60 hover:bg-cyan-400/20 sm:flex"
            >
              Let&apos;s Connect
              <ArrowUpRight size={15} />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition-colors hover:bg-white/5 md:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {mobileMenuOpen && (
            <div
              id="mobile-menu"
              className="mt-2 rounded-2xl border border-white/10 bg-[#0a1221]/95 p-4 shadow-xl backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="rounded-xl px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Hero */}
        <section
          id="home"
          className="grid scroll-mt-28 gap-6 lg:grid-cols-12"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#101d32]/95 via-[#0b1425]/90 to-[#080e1b] p-7 shadow-2xl shadow-black/20 sm:p-10 lg:col-span-8 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/[0.07] blur-[90px]"
            />

            <div className="relative">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-2 font-mono text-[11px] text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                SOFTWARE ENGINEERING & DIGITAL SOLUTIONS
              </div>

              <p className="mb-3 font-mono text-sm text-cyan-400">
                Hello, world. I&apos;m
              </p>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Alex Aganga
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Nyokwoyo.
                </span>
              </h1>

              <h2 className="mt-6 text-lg font-semibold text-slate-200 sm:text-xl">
                Full-Stack Developer | IT Professional
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                I build digital solutions that simplify life. My interests
                span full-stack and mobile development, intelligent
                applications, infrastructure, and cybersecurity. I enjoy
                turning complex ideas into practical, reliable technology.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 hover:shadow-cyan-500/30"
                >
                  Explore My Work
                  <ArrowUpRight size={17} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-400/40 hover:bg-white/[0.08]"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.08] pt-6 text-xs text-slate-500">
                <span className="flex items-center gap-2">
                  <Code2 size={15} className="text-cyan-400" />
                  Software Development
                </span>
                <span className="flex items-center gap-2">
                  <Server size={15} className="text-violet-400" />
                  IT Infrastructure
                </span>
                <span className="flex items-center gap-2">
                  <Cpu size={15} className="text-emerald-400" />
                  Emerging Technology
                </span>
              </div>
            </div>
          </div>

          {/* Profile information panel */}
          <aside className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0b1424]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 lg:col-span-4">
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                  Developer Profile
                </span>
                <Activity size={18} className="text-cyan-400" />
              </div>

              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-2xl font-black text-cyan-300">
                  AA
                </div>
                <div>
                  <p className="font-bold text-white">Alex Aganga</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Software & IT Professional
                  </p>
                </div>
              </div>

              <dl className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] pb-3">
                  <dt className="text-slate-500">Focus</dt>
                  <dd className="text-right text-cyan-300">
                    Full-Stack Development
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] pb-3">
                  <dt className="text-slate-500">Interests</dt>
                  <dd className="text-right text-violet-300">
                    AI / Cybersecurity
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] pb-3">
                  <dt className="text-slate-500">Infrastructure</dt>
                  <dd className="text-right text-emerald-300">
                    Linux / Docker
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <dt className="text-slate-500">Approach</dt>
                  <dd className="text-right text-amber-300">
                    Practical Engineering
                  </dd>
                </div>
              </dl>
            </div>

            <a
              href="https://github.com/Alexaganga"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <Code2 size={17} />
              Explore GitHub
              <ArrowUpRight size={15} />
            </a>
          </aside>
        </section>

        {/* Technology section */}
        <section id="expertise" className="scroll-mt-28 pt-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl border border-violet-400/20 bg-violet-400/10 p-2.5 text-violet-300">
              <Cpu size={19} />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Technical toolkit
              </p>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Technologies I Work With
              </h2>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {technologies.map((technology) => (
              <li
                key={technology}
                className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0b1424]/70 px-4 py-4 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
                />
                <span className="text-xs font-medium text-slate-300 transition-colors group-hover:text-cyan-300 sm:text-sm">
                  {technology}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-28 pt-16">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                {`Selected work / ${pad(1)}—${pad(projectCount)}`}
              </p>
              <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Projects & Systems
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                A selection of digital products, platforms, and development
                work.
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-slate-400">
              <Layers size={14} className="text-cyan-400" />
              {projectCount} {projectCount === 1 ? 'project' : 'projects'}
            </span>
          </div>

          {projectCount === 0 || !currentProject ? (
            <div className="rounded-2xl border border-white/10 bg-[#0b1424]/70 p-10 text-center">
              <Layers className="mx-auto mb-4 text-slate-500" size={30} />
              <h3 className="font-semibold text-white">
                Projects are being updated
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Please check back soon.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 lg:grid-cols-12">
              {/* Project selector */}
              <div className="space-y-3 lg:col-span-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    Project directory
                  </span>
                  <span className="font-mono text-[10px] text-slate-600">
                    SELECT TO INSPECT
                  </span>
                </div>

                {projects.map((project, index) => {
                  const isSelected = activeIndex === index;

                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => setSelectedProjectIndex(index)}
                      aria-pressed={isSelected}
                      className={`group flex w-full items-center justify-between gap-3 rounded-2xl border p-4 text-left transition-all duration-200 ${
                        isSelected
                          ? 'border-cyan-400/40 bg-gradient-to-r from-cyan-400/[0.10] to-blue-500/[0.04] shadow-lg shadow-cyan-950/20'
                          : 'border-white/[0.08] bg-[#0b1424]/65 hover:border-white/20 hover:bg-white/[0.04]'
                      }`}
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border font-mono text-xs ${
                            isSelected
                              ? 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300'
                              : 'border-white/10 bg-white/[0.03] text-slate-500'
                          }`}
                        >
                          {pad(index + 1)}
                        </span>

                        <span className="min-w-0">
                          <span
                            className={`block truncate text-sm font-bold ${
                              isSelected ? 'text-cyan-300' : 'text-slate-200'
                            }`}
                          >
                            {project.name}
                          </span>
                          <span className="mt-1 block truncate text-xs text-slate-500">
                            {project.category}
                          </span>
                        </span>
                      </span>

                      <span className="flex shrink-0 items-center gap-2">
                        <span className="hidden rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[9px] text-slate-400 sm:inline">
                          {project.status}
                        </span>
                        <ArrowUpRight
                          size={16}
                          aria-hidden="true"
                          className={`transition-colors ${
                            isSelected
                              ? 'text-cyan-300'
                              : 'text-slate-600 group-hover:text-cyan-300'
                          }`}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Project details */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#101b2d] to-[#080e1b] lg:col-span-7">
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-52 w-52 rounded-full bg-cyan-400/[0.06] blur-[80px]"
                />

                <div className="relative flex h-full flex-col">
                  {/* Terminal header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black/20 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                      <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                      <span className="ml-2 flex items-center gap-2 font-mono text-[11px] text-slate-400">
                        <Terminal size={14} className="text-cyan-400" />
                        project_inspector
                      </span>
                    </div>

                    <span className="rounded-md border border-cyan-400/20 bg-cyan-400/[0.06] px-2.5 py-1 font-mono text-[10px] text-cyan-300">
                      {`MODULE_${pad(activeIndex + 1)}`}
                    </span>
                  </div>

                  <div className="flex-1 space-y-7 p-6 sm:p-8">
                    <div>
                      <p className="mb-3 font-mono text-xs text-emerald-400">
                        <span className="mr-2">$</span>
                        inspect --project
                      </p>

                      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                          {currentProject.name}
                        </h3>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] text-slate-400">
                          {currentProject.category}
                        </span>
                      </div>

                      <p className="text-sm leading-7 text-slate-400 sm:text-base">
                        {currentProject.description}
                      </p>
                    </div>

                    {currentProject.features &&
                      currentProject.features.length > 0 && (
                        <div>
                          <h4 className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                            <Zap size={13} className="text-cyan-400" />
                            Key capabilities
                          </h4>

                          <ul className="grid gap-2 sm:grid-cols-2">
                            {currentProject.features.map((feature, index) => (
                              <li
                                key={`${feature}-${index}`}
                                className="flex items-start gap-2 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 text-xs leading-5 text-slate-300"
                              >
                                <CheckCircle2
                                  size={14}
                                  aria-hidden="true"
                                  className="mt-0.5 shrink-0 text-cyan-400"
                                />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    <div>
                      <h4 className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                        Technologies
                      </h4>

                      <ul className="flex flex-wrap gap-2">
                        {(currentProject.technologies ?? []).map(
                          (technology, index) => (
                            <li
                              key={`${technology}-${index}`}
                              className="rounded-lg border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1.5 font-mono text-[11px] text-cyan-200"
                            >
                              {technology}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/[0.08] pt-5 font-mono text-[11px] text-slate-500">
                      <span>
                        STATUS:{' '}
                        <span className="text-emerald-300">
                          {currentProject.status}
                        </span>
                      </span>

                      {currentProject.uptime && (
                        <span>
                          UPTIME:{' '}
                          <span className="text-slate-300">
                            {currentProject.uptime}
                          </span>
                        </span>
                      )}

                      {currentProject.latency && (
                        <span>
                          LATENCY:{' '}
                          <span className="text-slate-300">
                            {currentProject.latency}
                          </span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-black/20 px-6 py-5">
                    <span className="flex items-center gap-2 text-xs text-slate-500">
                      <Activity size={14} className="text-emerald-400" />
                      Project overview
                    </span>

                    {currentProject.link ? (
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-3 text-xs font-bold text-slate-950 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20"
                      >
                        View Project
                        <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="rounded-xl border border-white/10 px-4 py-3 text-xs text-slate-500">
                        Project link unavailable
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-28 pb-10 pt-16">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#102039] via-[#0b1527] to-[#090f1c] p-7 sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/[0.08] blur-[90px]"
            />

            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                  Start a conversation
                </p>

                <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Have an idea?
                  <span className="block text-cyan-300">
                    Let&apos;s build it.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  I&apos;m interested in meaningful technology projects,
                  software development opportunities, and collaborations.
                  Let&apos;s connect.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <a
                  href="mailto:alexagangamoustapha430@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-cyan-300"
                >
                  Email Me
                  <ArrowUpRight size={17} />
                </a>

                <a
                  href="https://www.linkedin.com/in/alex-aganga-a5459a272/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  LinkedIn
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] py-7 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[11px] text-slate-500">
            © {new Date().getFullYear()} Alex Aganga Nyokwoyo
          </p>

          <p className="flex items-center gap-2 text-[11px] text-slate-600">
            Built with purpose
            <span aria-hidden="true" className="text-cyan-400">✦</span>
            Technology should simplify life.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-xs text-slate-500 transition-colors hover:text-cyan-300"
          >
            Back to top
            <ArrowDown size={13} className="rotate-180" aria-hidden="true" />
          </a>
        </footer>
      </div>
    </main>
  );
}