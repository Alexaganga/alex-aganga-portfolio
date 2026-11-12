"use client";
import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import {
  AnimatePresence,
  MotionConfig,
  motion,
} from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Crosshair,
  ExternalLink,
  Mail,
  Menu,
  Minus,
  Plus,
  ShieldCheck,
  Smartphone,
  Workflow,
  X,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import {
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithubactions,
  SiGrafana,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

/* =========================================================
   ALEX AGANGA — PERSONAL ENGINEERING PORTFOLIO
========================================================= */
/* ================= CONTACT CONFIGURATION ================= */

const EMAIL = "alexagangamoustapha430@gmail.com";

const EMAIL_CONFIGURED =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(EMAIL.trim()) &&
  EMAIL.trim().toLowerCase() !== "your_email@example.com";
const PORTFOLIO_URL =
  "https://alex-aganga-portfolio.vercel.app";
/* ================= NAVIGATION ================= */

const navItems = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

/**
 * Scrolls to the visible heading of a section while accounting for the
 * fixed header. This avoids the oversized blank gap caused by scrolling
 * to the padded top of a section.
 */

function scrollToSection(href: string): void {
  if (typeof window === "undefined") return;
  const id = href.startsWith("#") ? href.slice(1) : href;
  const section = document.getElementById(id);
  if (!section) return;
  if (id === "home") {
    if (window.location.hash !== href) {
      window.history.pushState(null, "", href);
    }
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
    return;
  }
  const visibleHeading =
    section.querySelector<HTMLElement>(".section-label") ?? section;
  // Select the header's first content row, not the expanding mobile menu.
  const headerRow = document.querySelector<HTMLElement>(
    ".site-header > div:nth-of-type(2)"
  );
  const headerHeight = headerRow?.getBoundingClientRect().height ?? 82;
  const top =
    window.scrollY +
    visibleHeading.getBoundingClientRect().top -
    headerHeight -
    14;
  if (window.location.hash !== href) {
    window.history.pushState(null, "", href);
  }
  window.scrollTo({
    top: Math.max(0, top),
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}

/* =========================================================
   PROJECT DATA
========================================================= */

type PortfolioProject = {
  id: number;
  name: string;
  category: string;
  status: string;
  description: string;
  features: string[];
  tags: string[];
  link: string;
};

const projects: PortfolioProject[] = [
  {
    id: 1,
    name: "Nairobi Feast",
    category: "FOOD & HOSPITALITY",
    status: "LIVE PROJECT",
    description:
      "Nairobi's restaurant guide. Browse more than 100 restaurants by area and cuisine, book a table, and discover AI-powered recommendations for your budget and occasion.",
    features: [
      "Browse more than 100 restaurants across Nairobi.",
      "Discover restaurants by location, area and cuisine.",
      "Explore a table-booking journey from the restaurant guide.",
      "Get AI-powered restaurant suggestions based on budget and occasion.",
    ],
    tags: [
      "Restaurant discovery",
      "100+ restaurants",
      "Table booking",
      "AI recommendations",
    ],
    link: "https://www.nairobifeast.com/",
  },
  {
    id: 2,
    name: "Agropests",
    category: "AGRITECH / E-COMMERCE",
    status: "LIVE PROJECT",
    description:
      "An online agrovet store for farm inputs, allowing farmers to browse agricultural products and place orders through one distributor.",
    features: [
      "Online storefront for agricultural and farm-input products.",
      "Product browsing for farmers looking for farm supplies.",
      "A centralised ordering experience through one distributor.",
      "A digital channel for discovering available agricultural products.",
    ],
    tags: [
      "Agricultural products",
      "Online storefront",
      "Product catalogue",
      "Ordering",
    ],
    link: "https://agropests.com/",
  },
  {
    id: 3,
    name: "Crypto Compass (MPRAIM)",
    category: "FINTECH / AI",
    status: "LIVE PROJECT",
    description:
      "An AI-powered crypto portfolio dashboard with real-time analytics to help users track and manage their investments in one place.",
    features: [
      "A central dashboard for viewing a crypto portfolio.",
      "Real-time portfolio analytics and investment tracking.",
      "AI-powered insights for understanding portfolio information.",
      "A consolidated interface for monitoring crypto investments.",
    ],
    tags: [
      "Crypto portfolio",
      "AI-powered insights",
      "Real-time analytics",
      "Dashboard",
    ],
    link: "https://crypto-compass-ui.vercel.app/",
  },
  {
    id: 4,
    name: "LinuxLeap",
    category: "EDUCATION / LINUX",
    status: "LIVE PROJECT",
    description:
      "A beginner-friendly, step-by-step guide for people switching from Windows to Linux, with a focus on making the transition easier to understand and plan.",
    features: [
      "Step-by-step guidance for moving from Windows to Linux.",
      "Beginner-oriented explanations of the transition process.",
      "Guidance for planning a Linux migration more safely.",
      "A learning resource for people new to Linux.",
    ],
    tags: [
      "Linux education",
      "Beginner guide",
      "Windows migration",
      "Learning resource",
    ],
    link: "https://linux-leap.vercel.app/",
  },
  {
    id: 5,
    name: "Ebook Corner",
    category: "E-COMMERCE / BOOKS",
    status: "LIVE PROJECT",
    description:
      "An online bookshop where readers can browse ebooks and place orders directly through WhatsApp.",
    features: [
      "Online storefront for browsing available ebooks.",
      "A book discovery experience for readers.",
      "WhatsApp-based order handoff.",
      "Direct communication between customers and the bookshop.",
    ],
    tags: [
      "Online bookshop",
      "Ebooks",
      "Product browsing",
      "WhatsApp ordering",
    ],
    link: "https://ebookcorner.netlify.app/",
  },
  {
    id: 6,
    name: "MacAgutu Hotel",
    category: "HOSPITALITY / WEB",
    status: "LIVE PROJECT",
    description:
      "A hotel website built with React, presenting rooms, services and information on how guests can book a stay.",
    features: [
      "Hotel website built with React.",
      "Room presentation for prospective guests.",
      "Information about hotel services.",
      "A booking information journey for people planning a stay.",
    ],
    tags: [
      "React website",
      "Hotel rooms",
      "Hospitality",
      "Booking information",
    ],
    link: "https://macagutuhotel.netlify.app/",
  },
  {
    id: 7,
    name: "Kool Afrika",
    category: "E-COMMERCE / CRAFTS",
    status: "LIVE PROJECT",
    description:
      "An online store for handcrafted leather goods, giving customers a digital storefront with secure checkout.",
    features: [
      "Online storefront for handcrafted leather products.",
      "Product browsing for customers.",
      "Digital shopping experience for handcrafted goods.",
      "Secure checkout through the store.",
    ],
    tags: [
      "Handcrafted leather",
      "Online store",
      "Product catalogue",
      "Secure checkout",
    ],
    link: "https://payhip.com/koolafrika",
  },
];

/* =========================================================
   PREMIUM ANIMATED HUD HEADER
========================================================= */

function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  /* Identify the section currently in the visitor's view. */
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return;
    }
    const sectionIds = [
      "home",
      ...navItems.map((item) => item.href.slice(1)),
    ];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(
        (element): element is HTMLElement => element !== null
      );
    if (sections.length === 0) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );
        const current = visibleSections[0];
        if (current) {
          setActiveSection(`#${current.target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  /* Close the mobile menu when Escape is pressed. */
  useEffect(() => {
    if (!menuOpen) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);
  const handleNavigation = (href: string) => {
    setActiveSection(href);
    setMenuOpen(false);
    scrollToSection(href);
  };
  return (
    <motion.header
      className="site-header w-full"
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4965FF] to-transparent opacity-80" />
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1440px] items-center justify-between gap-3 px-4 sm:min-h-[82px] sm:px-7 lg:gap-4 lg:px-10">
        {/* BRAND */}
        <motion.a
          href="#home"
          aria-label="Alex Aganga home"
          onClick={(event) => { event.preventDefault(); handleNavigation("#home"); }}
          whileHover={{ scale: 1.035 }}
          whileTap={{ scale: 0.96 }}
          className="group flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="grid h-9 w-9 shrink-0 place-items-center border border-[#C8FF00]/50 bg-[#C8FF00]/5 text-[#C8FF00] shadow-[0_0_20px_rgba(200,255,0,0.08)] transition-all duration-300 group-hover:border-[#C8FF00] group-hover:shadow-[0_0_25px_rgba(200,255,0,0.25)] sm:h-11 sm:w-11"
          >
            <Crosshair size={21} />
          </motion.span>
          <span
            className="whitespace-nowrap text-[13px] font-bold tracking-[0.055em] text-white sm:text-lg lg:text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ALEX AGANGA
          </span>
        </motion.a>
        {/* DESKTOP NAVIGATION */}
        <nav
          className="hidden items-center gap-0.5 lg:flex xl:gap-1"
          aria-label="Main navigation"
        >
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(event) => { event.preventDefault(); handleNavigation(item.href); }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                aria-current={isActive ? "location" : undefined}
                className={`group relative flex min-h-[48px] items-center px-2.5 text-[12px] font-semibold uppercase tracking-[0.055em] transition-colors duration-300 xl:px-3 xl:text-[13px] ${
                  isActive
                    ? "text-[#C8FF00]"
                    : "text-slate-300 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span
                    className={`text-[9px] font-medium transition-colors ${
                      isActive
                        ? "text-[#C8FF00]"
                        : "text-[#64708F] group-hover:text-[#4965FF]"
                    }`}
                    style={{ fontFamily: "var(--font-code)" }}
                  >
                    0{index + 1}
                  </span>
                  {item.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="alex-active-nav"
                    className="absolute bottom-1 left-2.5 right-2.5 h-[2px] bg-[#C8FF00] shadow-[0_0_12px_rgba(200,255,0,0.85)]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <motion.span
                  className="absolute bottom-1 left-2.5 right-2.5 h-[2px] origin-left bg-[#4965FF]"
                  initial={false}
                  animate={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25 }}
                />
              </motion.a>
            );
          })}
        </nav>
        {/* DESKTOP STATUS */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <div className="flex items-center gap-2">
            <motion.span
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.85, 1.15, 0.85],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-[#C8FF00] shadow-[0_0_12px_#C8FF00]"
            />
            <span
              className="whitespace-nowrap text-[9px] font-semibold tracking-[0.06em] text-[#C8FF00]"
              style={{ fontFamily: "var(--font-code)" }}
            >
              AVAILABLE FOR WORK
            </span>
          </div>
        </div>
        {/* DESKTOP CONTACT BUTTON */}
        <motion.a
          href="#contact"
          onClick={(event) => { event.preventDefault(); handleNavigation("#contact"); }}
          whileHover={{
            y: -3,
            boxShadow: "0 0 30px rgba(200,255,0,0.3)",
          }}
          whileTap={{ scale: 0.96 }}
          className="hidden min-h-[46px] shrink-0 items-center justify-center gap-2 border border-[#C8FF00] bg-[#C8FF00] px-4 text-[11px] font-bold uppercase tracking-[0.08em] !text-[#04060F] transition-colors duration-300 hover:bg-[#DAFF4A] xl:flex"
          style={{
            fontFamily: "var(--font-code)",
            color: "#04060F",
            clipPath:
              "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
          }}
        >
          <span style={{ color: "#04060F" }}>
            LET&apos;S TALK
          </span>
          <ArrowUpRight size={17} color="#04060F" />
        </motion.a>
        {/* TABLET AND MOBILE MENU BUTTON */}
        <motion.button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          whileTap={{ scale: 0.9 }}
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
          aria-controls="alex-mobile-navigation"
          className={`relative grid h-11 w-11 shrink-0 place-items-center border transition-all duration-300 lg:hidden ${
            menuOpen
              ? "border-[#C8FF00] bg-[#C8FF00]/10 text-[#C8FF00] shadow-[0_0_20px_rgba(200,255,0,0.15)]"
              : "border-[#4965FF]/50 bg-[#4965FF]/10 text-white hover:border-[#C8FF00]/60 hover:text-[#C8FF00]"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "menu"}
              initial={{
                opacity: 0,
                rotate: -90,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: 90,
                scale: 0.7,
              }}
              transition={{ duration: 0.18 }}
              className="absolute"
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>
      {/* TABLET AND MOBILE NAVIGATION */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            id="alex-mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-[#4965FF]/25 bg-[#04060F]/[0.98] lg:hidden"
          >
            <div className="mx-auto w-full max-w-[1440px] px-4 pb-6 pt-5 sm:px-8">
              <div className="mb-5 flex items-center justify-between">
                <span
                  className="text-[11px] font-semibold tracking-[0.2em] text-[#C8FF00]"
                  style={{ fontFamily: "var(--font-code)" }}
                >
                  NAVIGATION / MENU
                </span>
                <span
                  className="text-[10px] text-slate-500"
                  style={{ fontFamily: "var(--font-code)" }}
                >
                  AA-001
                </span>
              </div>
              <div className="grid gap-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(event) => { event.preventDefault(); handleNavigation(item.href); }}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.045,
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex min-h-[54px] items-center justify-between border px-4 transition-all duration-300 ${
                        isActive
                          ? "border-[#C8FF00]/60 bg-[#C8FF00]/[0.06] text-[#C8FF00]"
                          : "border-[#4965FF]/20 bg-[#0A1021] text-slate-300 hover:border-[#4965FF] hover:bg-[#0D1730] hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-4">
                        <span
                          className="text-[11px] font-medium text-[#C8FF00]/70"
                          style={{ fontFamily: "var(--font-code)" }}
                        >
                          0{index + 1}
                        </span>
                        <span
                          className="text-[13px] font-semibold uppercase tracking-[0.1em]"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {item.label}
                        </span>
                      </span>
                      <motion.span
                        animate={{
                          x: isActive ? 0 : -4,
                          opacity: isActive ? 1 : 0.55,
                        }}
                        className="text-[#C8FF00]"
                      >
                        <ArrowUpRight size={18} />
                      </motion.span>
                    </motion.a>
                  );
                })}
              </div>
              <motion.a
                href="#contact"
                onClick={(event) => { event.preventDefault(); handleNavigation("#contact"); }}
                whileTap={{ scale: 0.97 }}
                className="mt-5 flex min-h-[54px] items-center justify-between bg-[#C8FF00] px-5 text-[12px] font-bold uppercase tracking-[0.12em] !text-[#04060F]"
                style={{
                  fontFamily: "var(--font-code)",
                  color: "#04060F",
                  clipPath:
                    "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                }}
              >
                <span style={{ color: "#04060F" }}>
                  LET&apos;S TALK
                </span>
                <ArrowUpRight size={20} color="#04060F" />
              </motion.a>
              <div className="mt-5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#C8FF00] shadow-[0_0_10px_#C8FF00]" />
                <span
                  className="text-[9px] tracking-[0.1em] text-slate-400"
                  style={{ fontFamily: "var(--font-code)" }}
                >
                  SYSTEM ONLINE / AVAILABLE FOR SELECTED WORK
                </span>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* =========================================================
   SOCIAL MEDIA PROFILES
========================================================= */

type SocialProfile = {
  name: string;
  href: string;
  description: string;
  color: string;
  Icon: IconType;
};

const socialProfiles: SocialProfile[] = [
  {
    name: "GitHub",
    href: "https://github.com/Alexaganga",
    description: "Code, repositories and engineering projects",
    color: "#FFFFFF",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alex-aganga-a5459a272/",
    description: "Professional profile and network",
    color: "#0A66C2",
    Icon: FaLinkedin,
  },
  {
    name: "X",
    href: "https://x.com/AgangaAlex",
    description: "Updates and technology conversations",
    color: "#FFFFFF",
    Icon: RiTwitterXFill,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@alexmoustapha?lang=en",
    description: "Creative technology content",
    color: "#FE2C55",
    Icon: FaTiktok,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/254741138844",
    description: "Let's talk directly",
    color: "#25D366",
    Icon: FaWhatsapp,
  },
  {
    name: "Telegram",
    href: "https://t.me/Moustapha705",
    description: "Connect with me on Telegram",
    color: "#0088CC",
    Icon: FaTelegram,
  },
];

/* =========================================================
   TECHNOLOGY STACK
   Each technology uses its own Simple Icon and brand color.
========================================================= */

type Technology = {
  name: string;
  Icon: IconType;
  color: string;
};

const skills: Technology[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Redis", Icon: SiRedis, color: "#FF4438" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  {
    name: "GitHub Actions",
    Icon: SiGithubactions,
    color: "#2088FF",
  },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Linux", Icon: SiLinux, color: "#FCC624" },
  { name: "Grafana", Icon: SiGrafana, color: "#F46800" },
  { name: "Prometheus", Icon: SiPrometheus, color: "#E6522C" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
];

/* =========================================================
   EXPERTISE
========================================================= */

const expertise = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description:
      "Modern web applications, backend services, APIs and business software built for practical use.",
  },
  {
    icon: ShieldCheck,
    title: "Application Security",
    description:
      "Secure development practices, authentication architecture and application security testing.",
  },
  {
    icon: Workflow,
    title: "DevSecOps & CI/CD",
    description:
      "Automated development workflows, testing pipelines and deployment processes.",
  },
  {
    icon: Cloud,
    title: "Infrastructure & Cloud",
    description:
      "Linux environments, containerised applications and infrastructure operations.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Intelligent Systems",
    description:
      "AI integrations, automation systems and intelligent software solutions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile application development and connected digital experiences.",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  "Custom Web Application Development",
  "Backend & API Engineering",
  "Mobile Application Development",
  "DevOps & CI/CD Automation",
  "Application Security Reviews",
  "Cloud & Infrastructure Setup",
  "Business Process Automation",
  "AI Integration & Intelligent Workflows",
];

/* =========================================================
   PORTFOLIO METRICS
========================================================= */

const metrics = [
  {
    value: String(projects.length).padStart(2, "0"),
    label: "FEATURED BUILDS",
  },
  {
    value: String(skills.length).padStart(2, "0"),
    label: "TOOLS & TECHNOLOGIES",
  },
  {
    value: String(expertise.length).padStart(2, "0"),
    label: "ENGINEERING DOMAINS",
  },
  {
    value: String(services.length).padStart(2, "0"),
    label: "SERVICE AREAS",
  },
];

const previewBars = [35, 52, 43, 69, 58, 88, 71, 96, 65, 82];

/* =========================================================
   MAIN PORTFOLIO PAGE
========================================================= */

export default function Home() {
  const [expandedProject, setExpandedProject] =
    useState<number | null>(null);
  /*
   * Start at the home section when the portfolio is opened
   * or refreshed. This prevents restoring an old scroll
   * position such as the Services section.
   */
  useEffect(() => {
    const previousRestoration =
      window.history.scrollRestoration;
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    window.history.scrollRestoration = "manual";
    root.style.scrollBehavior = "auto";
    const resetScroll = () => {
      if (window.location.hash) {
        window.history.replaceState(
          window.history.state,
          "",
          `${window.location.pathname}${window.location.search}`
        );
      }
      window.scrollTo(0, 0);
    };
    resetScroll();
    const frame = window.requestAnimationFrame(resetScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.history.scrollRestoration = previousRestoration;
      root.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);
  const toggleProject = (id: number) => {
    setExpandedProject((current) =>
      current === id ? null : id
    );
  };
  return (
    <MotionConfig reducedMotion="user">
      <main
        className="site-root w-full max-w-full overflow-x-clip"
        id="top"
      >
        <style jsx global>{`
          .site-root {
            font-size: 17px !important;
            -webkit-text-size-adjust: 100%;
            text-size-adjust: 100%;
          }

          .site-root h1,
          .site-root h2,
          .site-root h3,
          .site-root h4 {
            font-weight: 850 !important;
            line-height: 1.16;
          }

          .site-root .hero-title {
            font-size: clamp(2.65rem, 7.3vw, 6.25rem) !important;
            font-weight: 900 !important;
            line-height: 1.06 !important;
            letter-spacing: -0.045em;
          }

          .site-root .hero-description,
          .site-root .about-copy p,
          .site-root .section-description,
          .site-root .expertise-card p,
          .site-root .project-description,
          .site-root .project-expanded p,
          .site-root .project-expanded li,
          .site-root .contact-copy > p {
            font-size: clamp(1.02rem, 1.15vw, 1.2rem) !important;
            line-height: 1.8 !important;
          }

          .site-root .hero-kicker,
          .site-root .hero-topline,
          .site-root .section-label {
            font-size: clamp(0.82rem, 0.9vw, 0.96rem) !important;
            font-weight: 750 !important;
            line-height: 1.5;
          }

          .site-root .hero-scroll,
          .site-root .orb-badge,
          .site-root .orb-readout,
          .site-root .preview-toolbar small,
          .site-root .preview-caption,
          .site-root .card-index {
            font-size: 0.78rem !important;
            line-height: 1.5;
          }

          .site-root .section-heading {
            font-size: clamp(2rem, 4.1vw, 3.45rem) !important;
            font-weight: 900 !important;
            line-height: 1.13 !important;
            letter-spacing: -0.025em;
          }

          .site-root .about-statement {
            font-size: clamp(2rem, 4.3vw, 3.7rem) !important;
            font-weight: 900 !important;
            line-height: 1.14 !important;
          }

          .site-root .expertise-card h3,
          .site-root .project-main > h3,
          .site-root #contact h3 {
            font-size: clamp(1.25rem, 1.65vw, 1.6rem) !important;
            font-weight: 850 !important;
            line-height: 1.3 !important;
          }

          .site-root .project-category,
          .site-root .project-number,
          .site-root .project-status,
          .site-root .service-number,
          .site-root .stat-label {
            font-size: 0.82rem !important;
            font-weight: 750 !important;
            line-height: 1.5;
          }

          .site-root .project-tech-list span {
            font-size: 0.85rem !important;
            line-height: 1.5;
          }

          .site-root .project-link,
          .site-root .project-expand {
            font-size: 0.86rem !important;
            font-weight: 750 !important;
            line-height: 1.4;
          }

          .site-root .project-expanded h4 {
            font-size: 0.95rem !important;
            font-weight: 850 !important;
            line-height: 1.5;
          }

          .site-root .tools-track .tool-item {
            font-size: 1.04rem !important;
            font-weight: 700 !important;
          }

          .site-root .tools-track .tool-item svg {
            width: 22px;
            height: 22px;
          }

          .site-root .service-name {
            font-size: clamp(1.05rem, 1.35vw, 1.28rem) !important;
            font-weight: 700 !important;
            line-height: 1.5;
          }

          .site-root .stat-value {
            font-size: clamp(2rem, 3.3vw, 3rem) !important;
            font-weight: 900 !important;
          }

          .site-root .quote-panel p {
            font-size: clamp(1.2rem, 2vw, 1.7rem) !important;
            font-weight: 850 !important;
            line-height: 1.35;
          }

          .site-root .contact-copy h2 {
            font-size: clamp(2rem, 4.2vw, 3.55rem) !important;
            font-weight: 900 !important;
            line-height: 1.13 !important;
          }

          .site-root .contact-list .contact-row {
            font-size: 1rem !important;
            font-weight: 750 !important;
            line-height: 1.5;
          }

          .site-root .contact-email-address {
            overflow-wrap: anywhere;
          }

          .site-root #contact .group h4 {
            font-size: 1.05rem !important;
            font-weight: 850 !important;
          }

          .site-root #contact .group p {
            font-size: 0.96rem !important;
            line-height: 1.6 !important;
          }

          .site-root .qr-label {
            font-size: 0.88rem !important;
            font-weight: 800 !important;
          }

          .site-root .qr-subtitle {
            font-size: 0.82rem !important;
          }

          .site-root .footer-inner span,
          .site-root .footer-inner a {
            font-size: clamp(0.95rem, 1.15vw, 1.15rem) !important;
            font-weight: 900 !important;
            line-height: 1.6;
          }

          .site-root .site-header nav[aria-label="Main navigation"] a {
            font-size: 0.88rem !important;
            font-weight: 750 !important;
          }

          .site-root .site-header nav[aria-label="Mobile navigation"] a {
            font-size: 1rem !important;
            font-weight: 750 !important;
          }

          @media (max-width: 640px) {
            .site-root {
              font-size: 16px !important;
            }

            .site-root .hero-title {
              font-size: clamp(2.45rem, 10.8vw, 3.7rem) !important;
              line-height: 1.08 !important;
            }

            .site-root .section-heading {
              font-size: clamp(1.85rem, 8.2vw, 2.6rem) !important;
            }

            .site-root .about-statement,
            .site-root .contact-copy h2 {
              font-size: clamp(1.85rem, 8vw, 2.65rem) !important;
            }

            .site-root .hero-description,
            .site-root .about-copy p,
            .site-root .section-description,
            .site-root .expertise-card p,
            .site-root .project-description,
            .site-root .project-expanded p,
            .site-root .project-expanded li,
            .site-root .contact-copy > p {
              font-size: 1rem !important;
              line-height: 1.75 !important;
            }

            .site-root .hero-topline {
              font-size: 0.72rem !important;
              flex-wrap: wrap;
            }

            .site-root .project-tech-list span {
              font-size: 0.8rem !important;
            }

            .site-root .footer-inner {
              text-align: center;
              justify-content: center;
            }

            .site-root .footer-inner span,
            .site-root .footer-inner a {
              font-size: 0.92rem !important;
            }
          }

          @media (min-width: 641px) and (max-width: 1023px) {
            .site-root .hero-title {
              font-size: clamp(3.1rem, 7.2vw, 5rem) !important;
            }

            .site-root .section-heading {
              font-size: clamp(2.1rem, 4.6vw, 3rem) !important;
            }
          }
        `}</style>
        {/* ACCESSIBILITY */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {/* HEADER */}
        <PortfolioHeader />
        <div id="main-content" tabIndex={-1} />
        {/* =================================================
            HERO SECTION
        ================================================= */}
        <section id="home" className="hero-section">
          <div className="hero-grid-overlay" />
          <div className="container-hud w-full min-w-0">
            <div className="hero-topline">
              <Crosshair size={14} />
              DIGITAL ENGINEERING / SYSTEM INTERFACE
              <span>AA-001</span>
            </div>
            <div className="hero-layout">
              <motion.div
                className="hero-copy min-w-0"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="hero-kicker">
                  <Activity size={16} />
                  SOFTWARE ENGINEERING / DEVSECOPS
                </p>
                <h1 className="hero-title font-extrabold" style={{ fontWeight: 900 }}>
                  BUILDING
                  <br />
                  <span className="accent">
                    INTELLIGENT.
                  </span>
                  <br />
                  <span className="hero-outline">
                    SECURE SYSTEMS.
                  </span>
                </h1>
                <p className="hero-description">
                  I&apos;m Alex Aganga, a software engineering
                  professional focused on{" "}
                  <strong>full-stack development</strong>,{" "}
                  <strong>AI-driven solutions</strong>,{" "}
                  <strong>application security</strong> and{" "}
                  <strong>DevSecOps</strong>. I turn complex
                  technical challenges into practical digital
                  solutions.
                </p>
                <div className="hero-actions">
                  <a
                    href="#projects"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection("#projects");
                    }}
                    className="hud-button hud-button-lime"
                  >
                    EXPLORE MY WORK
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    href="#contact"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection("#contact");
                    }}
                    className="hud-button"
                  >
                    INITIATE CONTACT
                    <ArrowRight size={16} />
                  </a>
                </div>
                <div className="hero-socials flex flex-wrap items-center gap-4">
                  {socialProfiles.map((profile) => {
                    const Icon = profile.Icon;
                    return (
                      <a
                        key={profile.name}
                        href={profile.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${profile.name} profile`}
                        title={profile.name}
                      >
                        <Icon size={19} color={profile.color} />
                      </a>
                    );
                  })}
                  {EMAIL_CONFIGURED && (
                    <a
                      href={`mailto:${EMAIL}`}
                      aria-label="Send email"
                      title="Send email"
                    >
                      <Mail size={19} />
                    </a>
                  )}
                </div>
              </motion.div>
              {/* HOLOGRAPHIC GLOBE */}
              <motion.div
                className="hero-visual min-w-0"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.2 }}
              >
                <div
                  className="orb-stage"
                  role="img"
                  aria-label="Animated blue holographic wireframe globe"
                >
                  <div className="orb-light" />
                  <div className="orb-halo orb-halo-one" />
                  <div className="orb-halo orb-halo-two" />
                  <div className="orb-halo orb-halo-three" />
                  <div className="orb-orbit" />
                  <div className="orb-orbit orb-orbit-two" />
                  <svg
                    className="orb-svg"
                    viewBox="0 0 420 420"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <defs>
                      <radialGradient id="globeFill">
                        <stop
                          offset="0%"
                          stopColor="#315CFF"
                          stopOpacity=".28"
                        />
                        <stop
                          offset="75%"
                          stopColor="#07122F"
                          stopOpacity=".72"
                        />
                        <stop
                          offset="100%"
                          stopColor="#04060F"
                          stopOpacity=".2"
                        />
                      </radialGradient>
                      <linearGradient
                        id="globeStroke"
                        x1="0"
                        y1="0"
                        x2="420"
                        y2="420"
                      >
                        <stop stopColor="#8CA1FF" />
                        <stop offset="1" stopColor="#2F4BFF" />
                      </linearGradient>
                      <clipPath id="globeClip">
                        <circle cx="210" cy="210" r="143" />
                      </clipPath>
                    </defs>
                    <circle
                      cx="210"
                      cy="210"
                      r="150"
                      fill="url(#globeFill)"
                      stroke="url(#globeStroke)"
                      strokeWidth="1.3"
                    />
                    <g
                      clipPath="url(#globeClip)"
                      stroke="#6684FF"
                      strokeOpacity=".55"
                      strokeWidth="1"
                    >
                      <ellipse cx="210" cy="210" rx="143" ry="47" />
                      <ellipse cx="210" cy="210" rx="143" ry="93" />
                      <ellipse cx="210" cy="210" rx="143" ry="121" />
                      <ellipse cx="210" cy="210" rx="53" ry="143" />
                      <ellipse cx="210" cy="210" rx="103" ry="143" />
                      <ellipse cx="210" cy="210" rx="143" ry="143" />
                      <path d="M65 170 Q210 80 355 170" />
                      <path d="M65 250 Q210 340 355 250" />
                      <path d="M67 210 H353" />
                      <path d="M210 67 V353" />
                    </g>
                    <circle
                      cx="210"
                      cy="210"
                      r="157"
                      stroke="#C8FF00"
                      strokeOpacity=".28"
                      strokeDasharray="2 12"
                    />
                    <path
                      d="M210 47 V29 M210 391 V373 M47 210 H29 M391 210 H373"
                      stroke="#C8FF00"
                      strokeWidth="2"
                    />
                    <circle
                      cx="210"
                      cy="210"
                      r="4"
                      fill="#C8FF00"
                    />
                    <path
                      d="M210 185 V235 M185 210 H235"
                      stroke="#C8FF00"
                      strokeOpacity=".8"
                    />
                  </svg>
                  <div className="orb-badge">
                    <span>ENGINEER / CREATE / INNOVATE</span>
                  </div>
                  <div className="orb-readout">
                    <div>
                      CORE STATUS / <strong>ACTIVE</strong>
                    </div>
                    <div>MODE / INTELLIGENT SYSTEMS</div>
                    <div>
                      NODE / <strong>AA-001</strong>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <a
            href="#about"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("#about");
            }}
            className="hero-scroll"
          >
            SCROLL TO DISCOVER
          </a>
        </section>
        <div className="section-divider" />
        {/* =================================================
            ABOUT SECTION
        ================================================= */}
        <section id="about" className="section-block scroll-mt-24">
          <div className="container-hud w-full min-w-0">
            <p className="section-label">
              01 / ABOUT THE ENGINEER
            </p>
            <div
              className="about-grid"
              style={{ marginTop: 38 }}
            >
              <motion.h2
                className="about-statement font-extrabold"
                style={{ fontWeight: 900 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                ENGINEERING TECHNOLOGY THAT{" "}
                <span>SOLVES REAL PROBLEMS.</span>
              </motion.h2>
              <div className="about-copy">
                <p>
                  I work across software development,
                  infrastructure and technology operations,
                  with an interest in building systems that
                  are practical, secure and maintainable.
                </p>
                <p>
                  My technical interests span frontend
                  engineering, backend architecture, mobile
                  development, cybersecurity, automation and
                  cloud infrastructure.
                </p>
                <p>
                  I value thoughtful architecture, continuous
                  learning, collaboration and technology that
                  delivers meaningful outcomes to people and
                  businesses.
                </p>
                <div className="about-signature">
                  TECHNOLOGY SHOULD SIMPLIFY LIFE.
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-divider" />
        {/* =================================================
            EXPERTISE SECTION
        ================================================= */}
        <section
          id="expertise"
          className="section-block scroll-mt-24"
        >
          <div className="container-hud w-full min-w-0">
            <p className="section-label">
              02 / ENGINEERING DOMAINS
            </p>
            <h2 className="section-heading font-extrabold" style={{ fontWeight: 850 }}>
              ENGINEER ACROSS THE DIGITAL ECOSYSTEM.
            </h2>
            <p className="section-description">
              From application architecture and development
              to infrastructure, security and intelligent
              automation.
            </p>
            <div className="expertise-grid">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    className="expertise-card hud-panel min-w-0"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="expertise-icon">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-extrabold" style={{ fontWeight: 800 }}>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="card-index">
                      DOMAIN / {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
        <div className="section-divider" />
        {/* =================================================
            PROJECTS SECTION
        ================================================= */}
        <section
          id="projects"
          className="section-block scroll-mt-24"
        >
          <div className="container-hud w-full min-w-0">
            <p className="section-label">
              03 / SELECTED WORK
            </p>
            <h2 className="section-heading font-extrabold" style={{ fontWeight: 850 }}>
              PROJECTS & ENGINEERING EXPERIMENTS.
            </h2>
            <p className="section-description">
              A selection of digital products, platforms and
              practical software solutions. Open any project
              to learn more about what it offers.
            </p>
            <div className="projects-grid">
              {projects.map((project, index) => {
                const isExpanded =
                  expandedProject === project.id;
                const projectUrl = project.link.trim();
                const projectHasLink =
                  /^https:\/\//i.test(projectUrl);
                const detailsId =
                  `project-details-${project.id}`;
                return (
                  <motion.article
                    key={project.id}
                    className="project-card min-w-0"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                  >
                    <div className="project-heading">
                      <span className="project-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="project-category">
                        {project.category}
                      </span>
                    </div>
                    {/* CONCEPTUAL PROJECT PREVIEW */}
                    <div
                      className="project-preview"
                      role="img"
                      aria-label={`Concept interface preview for ${project.name}`}
                    >
                      <div className="preview-toolbar">
                        <div className="preview-dots">
                          <i />
                          <i />
                          <i />
                        </div>
                        <small>
                          ALEX AGANGA / PROJECT INTERFACE
                        </small>
                      </div>
                      <div className="preview-body">
                        <div className="preview-sidebar">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="preview-content">
                          <div className="preview-title-bars">
                            <i />
                            <i />
                          </div>
                          <div className="preview-kpis">
                            <i />
                            <i />
                            <i />
                          </div>
                          <div className="preview-chart">
                            {previewBars.map((height, barIndex) => (
                              <i
                                key={barIndex}
                                style={{ height: `${height}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="preview-caption">
                        CONCEPT VISUAL / NOT A LIVE SCREENSHOT
                      </span>
                    </div>
                    <div className="project-main min-w-0">
                      <h3 style={{ fontWeight: 800 }}>{project.name}</h3>
                      <div className="project-status">
                        <span className="status-dot" />
                        {project.status}
                      </div>
                      <p className="project-description">
                        {project.description}
                      </p>
                      <div className="project-tech-list">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <div className="project-actions flex flex-wrap items-center gap-3">
                        {projectHasLink ? (
                          <a
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            VIEW PROJECT
                            <ExternalLink size={13} />
                          </a>
                        ) : (
                          <span className="project-link project-link-disabled">
                            CASE STUDY / UPON REQUEST
                          </span>
                        )}
                        <button
                          type="button"
                          className="project-expand inline-flex min-h-11 items-center justify-center gap-2 px-3"
                          onClick={() => toggleProject(project.id)}
                          aria-label={
                            isExpanded
                              ? `Hide ${project.name} details`
                              : `Show more about ${project.name}`
                          }
                          aria-expanded={isExpanded}
                          aria-controls={detailsId}
                        >
                          <span className="text-[10px] font-semibold tracking-wider">
                            {isExpanded ? "LESS INFO" : "MORE INFO"}
                          </span>
                          {isExpanded ? (
                            <Minus size={18} />
                          ) : (
                            <Plus size={18} />
                          )}
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            id={detailsId}
                            className="project-expanded"
                            initial={{
                              opacity: 0,
                              height: 0,
                              marginTop: 0,
                            }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                              marginTop: 18,
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                              marginTop: 0,
                            }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: "hidden" }}
                          >
                            <h4>PROJECT OVERVIEW</h4>
                            <p className="mb-4 text-sm leading-7 text-slate-300">
                              {project.description}
                            </p>
                            <h4>PROJECT FEATURES</h4>
                            <ul>
                              {project.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                              ))}
                            </ul>
                            {projectHasLink && (
                              <a
                                href={projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#C8FF00] transition-colors hover:text-white"
                              >
                                EXPLORE THE LIVE PROJECT
                                <ArrowUpRight size={15} />
                              </a>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
        {/* =================================================
            STATISTICS BAND
        ================================================= */}
        <section
          className="section-block"
          style={{ paddingTop: 0 }}
        >
          <div className="container-hud w-full min-w-0">
            <div className="stats-layout">
              <div className="stats-panel hud-panel">
                {metrics.map((metric) => (
                  <div
                    className="stat-item"
                    key={metric.label}
                  >
                    <div className="stat-value">
                      {metric.value}
                    </div>
                    <div className="stat-label">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="quote-panel">
                <p>
                  TECHNOLOGY SHOULD SIMPLIFY LIFE.
                </p>
                <span>
                  ENGINEERING PHILOSOPHY / AA-001
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="section-divider" />
        {/* =================================================
            TECHNOLOGY STACK
        ================================================= */}
        <section
          id="technology"
          className="section-block scroll-mt-24"
        >
          <div className="container-hud w-full min-w-0">
            <p className="section-label">
              04 / TECHNOLOGY ECOSYSTEM
            </p>
            <h2 className="section-heading font-extrabold" style={{ fontWeight: 850 }}>
              TOOLS OF MY CRAFT.
            </h2>
            <p className="section-description">
              Technologies and engineering tools across
              my development and infrastructure interests.
              Each icon uses its own brand identity and color.
            </p>
            <p className="sr-only">
              Technology stack:{" "}
              {skills.map((skill) => skill.name).join(", ")}
            </p>
          </div>
          <div
            className="tools-marquee"
            aria-hidden="true"
          >
            <div className="tools-track">
              {[...skills, ...skills].map((skill, index) => {
                const Icon = skill.Icon;
                return (
                  <span
                    className="tool-item"
                    key={`${skill.name}-${index}`}
                  >
                    <Icon
                      size={18}
                      color={skill.color}
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        filter: "drop-shadow(0 0 5px currentColor)",
                      }}
                    />
                    <span>{skill.name}</span>
                    <span className="tool-separator">+</span>
                  </span>
                );
              })}
            </div>
          </div>
        </section>
        <div className="section-divider" />
        {/* =================================================
            SERVICES
        ================================================= */}
        <section
          id="services"
          className="section-block scroll-mt-24"
        >
          <div className="container-hud w-full min-w-0">
            <p className="section-label">
              05 / CAPABILITIES
            </p>
            <h2 className="section-heading font-extrabold" style={{ fontWeight: 850 }}>
              TURNING IDEAS INTO DIGITAL SOLUTIONS.
            </h2>
            <p className="section-description">
              From a new digital product to improving an
              existing technology environment, I help
              translate business needs into practical
              technical solutions.
            </p>
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  className="service-row"
                  whileHover={{ x: 4 }}
                >
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="service-name">
                    {service}
                  </span>
                  <ArrowUpRight size={16} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <div className="section-divider" />
        {/* =================================================
            CONTACT SECTION
        ================================================= */}
        <section
          id="contact"
          className="section-block scroll-mt-24"
        >
          <div className="container-hud w-full min-w-0">
            <p className="section-label">
              06 / ESTABLISH CONNECTION
            </p>
            <div className="contact-grid hud-panel min-w-0">
              <div className="contact-copy min-w-0">
                <h2 style={{ fontWeight: 900 }}>
                  DO YOU WANT TO CODE YOUR DREAMS INTO{" "}
                  <span>A REALITY?</span>
                </h2>
                <p>
                  Whether you&apos;re hiring an engineer,
                  developing a digital product or looking
                  for a technical collaborator, let&apos;s
                  explore what we can build.
                </p>
                <div className="contact-list">
                  <a
                    className="contact-row"
                    href="https://github.com/Alexaganga"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      color="#F4F4F4"
                      size={19}
                    />
                    GITHUB PROFILE
                    <ArrowUpRight size={13} />
                  </a>
                  {EMAIL_CONFIGURED ? (
                    <a
                      className="contact-row"
                      href={`mailto:${EMAIL}`}
                      aria-label={`Send an email to ${EMAIL}`}
                      title={`Email ${EMAIL}`}
                    >
                      <Mail size={18} />
                      <span className="contact-email-address">{EMAIL}</span>
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <span
                      className="contact-row contact-pending"
                      title="Configure your public email address before publishing"
                    >
                      <Mail />
                      EMAIL / CONFIGURATION REQUIRED
                    </span>
                  )}
                </div>
              </div>
              {/* ANIMATED 3D CUBE */}
              <div
                className="cube-stage"
                role="img"
                aria-label="Animated futuristic wireframe cube with orbital rings"
              >
                <div className="cube-orbit" />
                <div className="cube-orbit cube-orbit-two" />
                <div className="cube-core">
                  <div className="cube-face cube-front" />
                  <div className="cube-face cube-back" />
                  <div className="cube-face cube-left" />
                  <div className="cube-face cube-right" />
                  <div className="cube-face cube-top" />
                  <div className="cube-face cube-bottom" />
                </div>
              </div>
              {/* PORTFOLIO QR CODE */}
              <div className="qr-panel">
                <div className="qr-label">
                  SCAN TO ACCESS
                </div>
                <div className="qr-frame">
                  <QRCodeSVG
                    value={PORTFOLIO_URL}
                    size={148}
                    level="H"
                    bgColor="#C8FF00"
                    fgColor="#04060F"
                    marginSize={4}
                    title="Scan to open Alex Aganga's portfolio"
                  />
                </div>
                <div className="qr-label">
                  ALEX AGANGA / ONLINE
                </div>
                <p className="qr-subtitle">
                  DIGITAL PORTFOLIO ACCESS
                </p>
              </div>
            </div>
            {/* SOCIAL NETWORK */}
            <div className="mt-14">
              <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="section-label">
                    07 / SOCIAL NETWORK
                  </p>
                  <h3 className="mt-4 font-mono text-2xl font-extrabold uppercase tracking-wider text-white">
                    LET&apos;S CONNECT.
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Find me across my social platforms.
                  </p>
                </div>
                <span className="mono text-xs tracking-widest text-[#C8FF00]">
                  SIX CONNECTION CHANNELS
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {socialProfiles.map((profile) => {
                  const Icon = profile.Icon;
                  const cardClassName =
                    "group relative flex min-h-[140px] min-w-0 flex-col justify-between overflow-hidden border border-[rgba(109,132,255,0.2)] bg-[#0A1021]/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#4965FF] hover:bg-[#0D1730] hover:shadow-[0_14px_36px_rgba(47,75,255,0.16)]";
                  const content = (
                    <>
                      <div className="flex items-center justify-between">
                        <Icon
                          size={31}
                          color={profile.color}
                          aria-hidden={true}
                          style={
                            profile.name === "TikTok"
                              ? {
                                  filter:
                                    "drop-shadow(-2px 0 #25F4EE) drop-shadow(2px 0 #FE2C55)",
                                }
                              : undefined
                          }
                        />
                        <ArrowUpRight
                          size={19}
                          className="text-slate-500 transition-colors group-hover:text-[#C8FF00]"
                        />
                      </div>
                      <div>
                        <h4 className="font-mono text-sm font-bold uppercase tracking-widest text-white">
                          {profile.name}
                        </h4>
                        <p className="mt-2 text-xs text-slate-400">
                          {profile.description}
                        </p>
                      </div>
                      <span
                        className="absolute bottom-0 left-0 h-[2px] w-full"
                        style={{
                          backgroundColor: profile.color,
                          opacity: 0.65,
                        }}
                      />
                    </>
                  );
                  return (
                    <motion.div
                      key={profile.name}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href={profile.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit my ${profile.name} profile`}
                        className={cardClassName}
                      >
                        {content}
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* =================================================
            FOOTER TICKER
        ================================================= */}
        <div
          className="footer-ticker"
          aria-label="Technology should simplify life"
        >
          <div
            className="footer-ticker-track"
            aria-hidden="true"
          >
            {Array.from({ length: 4 }, (_, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 27,
                }}
              >
                <span>ENGINEER THE FUTURE</span>
                <span className="ticker-star">✳</span>
                <span>BUILD WITH PURPOSE</span>
                <span className="ticker-star">✳</span>
                <span>TECHNOLOGY SHOULD SIMPLIFY LIFE</span>
                <span className="ticker-star">✳</span>
              </div>
            ))}
          </div>
        </div>
        {/* =================================================
            FOOTER
        ================================================= */}
        <footer className="site-footer">
          <div className="container-hud footer-inner flex flex-wrap items-center justify-between gap-4">
            <span
              className="font-extrabold tracking-wide"
              style={{ fontSize: "clamp(0.9rem, 1.35vw, 1.1rem)", fontWeight: 900 }}
            >
              © {new Date().getFullYear()} ALEX AGANGA. CODING YOUR DREAMS INTO A REALITY.
            </span>
            <a
              href="#home"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("#home");
              }}
              className="font-extrabold tracking-wider"
              style={{ fontSize: "clamp(0.9rem, 1.25vw, 1.05rem)", fontWeight: 900 }}
            >
              BACK TO TOP ↑
            </a>
            <span
              className="font-extrabold tracking-wide"
              style={{ fontSize: "clamp(0.9rem, 1.25vw, 1.05rem)", fontWeight: 900 }}
            >
              ALEX AGANGA / SYSTEM ONLINE
            </span>
          </div>
        </footer>
      </main>
    </MotionConfig>
  );
}
