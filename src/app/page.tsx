"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
  Briefcase,
  Cloud,
  Code2,
  Crosshair,
  Download,
  ExternalLink,
  GraduationCap,
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
   SITE CONFIGURATION
========================================================= */

const EMAIL = "alexagangamoustapha430@gmail.com";
const EMAIL_CONFIGURED = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(EMAIL);
const PORTFOLIO_URL = "https://alex-aganga-portfolio.vercel.app";
const CV_URL = "/Alex_Aganga_CV.pdf";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
  { label: "Stack", href: "#technology" },
  { label: "Education", href: "#education" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(href: string): void {
  if (typeof window === "undefined") return;

  const id = href.startsWith("#") ? href.slice(1) : href;
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

  const section = document.getElementById(id);
  if (!section) return;

  const heading = section.querySelector<HTMLElement>(".section-label") ?? section;
  // The desktop header has a brand/action row and a separate navigation row.
  // Measure the whole fixed header so section headings never land underneath it.
  const siteHeader = document.querySelector<HTMLElement>(".site-header");
  const headerHeight = siteHeader?.getBoundingClientRect().height ?? 82;
  const targetTop =
    window.scrollY + heading.getBoundingClientRect().top - headerHeight - 16;

  if (window.location.hash !== href) {
    window.history.pushState(null, "", href);
  }

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}

/* =========================================================
   PROJECTS
========================================================= */

type PortfolioProject = {
  id: number;
  name: string;
  category: string;
  status: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  link: string;
};

const projects: PortfolioProject[] = [
  {
    id: 1,
    name: "Nairobi Feast",
    category: "FOOD & HOSPITALITY",
    status: "LIVE PRODUCTION",
    image: "/images/nairobi-feast.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI Engine", "Vercel"],
    description:
      "Nairobi's restaurant discovery guide. Browse restaurants by area and cuisine, explore dining options, and discover recommendations for different budgets and occasions.",
    features: [
      "Restaurant discovery across Nairobi.",
      "Browse by location, area, and cuisine.",
      "Restaurant information and table-booking journey.",
      "AI-assisted dining recommendations.",
    ],
    link: "https://www.nairobifeast.com/",
  },
  {
    id: 2,
    name: "Agropests",
    category: "AGRITECH / E-COMMERCE",
    status: "LIVE PRODUCTION",
    image: "/images/agropests.png",
    technologies: ["E-Commerce", "PHP / MySQL", "JavaScript", "Payments"],
    description:
      "An agritech e-commerce storefront connecting farmers with farm inputs, crop nutrition products, pesticides, and agricultural supplies.",
    features: [
      "Online storefront for farm-input products.",
      "Product discovery and catalogue browsing.",
      "Centralized distributor ordering journey.",
      "Agricultural product categories and information.",
    ],
    link: "https://agropests.com/",
  },
  {
    id: 3,
    name: "Crypto Compass (MPRAIM)",
    category: "FINTECH / AI ANALYTICS",
    status: "LIVE PRODUCTION",
    image: "/images/crypto-compass.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Crypto APIs"],
    description:
      "A crypto portfolio tracking and analytics interface designed to bring multi-asset portfolio information and AI-assisted market insights into one dashboard.",
    features: [
      "Centralized crypto portfolio dashboard.",
      "Portfolio metrics and investment tracking.",
      "AI-assisted portfolio and market insights.",
      "Responsive interface for monitoring digital assets.",
    ],
    link: "https://crypto-compass-ui.vercel.app/",
  },
  {
    id: 4,
    name: "LinuxLeap",
    category: "EDUCATION / DEV PLATFORM",
    status: "LIVE PRODUCTION",
    image: "/images/linux-leap.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Linux"],
    description:
      "A beginner-friendly learning resource that helps Windows users understand and plan a move to Linux through practical guidance and migration resources.",
    features: [
      "Guidance for moving from Windows to Linux.",
      "Beginner-oriented Linux explanations.",
      "Migration planning and preparation resources.",
      "A practical starting point for new Linux users.",
    ],
    link: "https://linux-leap.vercel.app/",
  },
  {
    id: 5,
    name: "Ebook Corner",
    category: "DIGITAL COMMERCE",
    status: "LIVE PRODUCTION",
    image: "/images/ebook-corner.png",
    technologies: ["React", "JavaScript", "WhatsApp Ordering", "Tailwind CSS"],
    description:
      "An online bookstore where readers can explore ebooks and contact the store to place orders through WhatsApp.",
    features: [
      "Online ebook catalogue.",
      "Book discovery and product browsing.",
      "WhatsApp-based order handoff.",
      "Direct customer-to-store communication.",
    ],
    link: "https://ebookcorner.netlify.app/",
  },
  {
    id: 6,
    name: "MacAgutu Hotel",
    category: "HOSPITALITY / WEB PLATFORM",
    status: "LIVE PRODUCTION",
    image: "/images/macagutu-hotel.png",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Netlify"],
    description:
      "A hotel website presenting accommodation options, hotel services, and information for guests planning a stay.",
    features: [
      "Hotel and accommodation presentation.",
      "Room information for prospective guests.",
      "Hotel services and hospitality content.",
      "Booking and guest enquiry information.",
    ],
    link: "https://macagutuhotel.netlify.app/",
  },
  {
    id: 7,
    name: "Kool Afrika",
    category: "E-COMMERCE / CRAFTS",
    status: "LIVE PRODUCTION",
    image: "/images/kool-afrika.png",
    technologies: ["E-Commerce", "Brand Identity", "Online Store"],
    description:
      "An online storefront for handcrafted African leather goods, showcasing products and providing a digital shopping experience.",
    features: [
      "Online catalogue for handcrafted leather goods.",
      "Product presentation and discovery.",
      "Digital shopping and checkout journey.",
      "Branded storefront for an artisan product range.",
    ],
    link: "https://koolafrika.com/",
  },
];

/* =========================================================
   CAREER EXPERIENCE & EDUCATION
   Wording and dates are based on the supplied CV.
========================================================= */

type WorkExperience = {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
  stack: string[];
};

const experiences: WorkExperience[] = [
  {
    period: "04/2026 – PRESENT",
    role: "Senior Full-Stack Developer",
    company: "Elimn",
    location: "Nairobi, Kenya",
    highlights: [
      "Architected the core SaaS platform using React, Node.js, and PostgreSQL, and helped establish engineering practices across the team.",
      "Designed RESTful and GraphQL APIs supporting more than 10,000 monthly active users, with sub-200 ms p95 response times under load.",
      "Built webhook and scheduled-job data integrations that reduced manual data entry by 60%.",
      "Led a four-engineer squad, including code reviews, pair programming, and developer mentoring.",
      "Owned Docker and GitHub Actions CI/CD workflows, reducing deployment time from 45 minutes to under 8 minutes.",
      "Integrated M-Pesa Daraja STK Push and C2B payments and implemented application security improvements.",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Docker", "M-Pesa Daraja", "GraphQL", "GitHub Actions"],
  },
  {
    period: "11/2023 – 05/2026",
    role: "Software Developer & IT Administrator",
    company: "CoffeeBee Processors",
    location: "Nairobi, Kenya",
    highlights: [
      "Co-developed enterprise web applications using Laravel and Vue.js within Agile delivery cycles.",
      "Built and tested REST APIs for web-to-mobile integrations, including authentication, pagination, and error handling.",
      "Managed servers, end-user systems, LAN/WAN networks, routers, and firewalls.",
      "Maintained backup and disaster-recovery processes to support data integrity and business continuity.",
    ],
    stack: ["Laravel", "Vue.js", "PHP", "MySQL", "Linux", "Networking", "REST APIs"],
  },
  {
    period: "08/2021 – 07/2023",
    role: "Systems Support Officer / IT Administrator",
    company: "Samsoft Technologies",
    location: "Kisii, Kenya",
    highlights: [
      "Administered user accounts, access rights, and security policies while supporting ERP connectivity.",
      "Maintained LAN/WAN infrastructure, server backups, and IT documentation.",
      "Configured and supported routers, switches, firewalls, and VPN connectivity.",
    ],
    stack: ["IT Administration", "ERP Support", "LAN/WAN", "Firewalls", "VPN", "Backups"],
  },
  {
    period: "02/2021 – 08/2021",
    role: "Software Developer",
    company: "Sendy Ltd",
    location: "Nairobi, Kenya",
    highlights: [
      "Built and maintained Flutter modules for last-mile logistics, driver task tracking, and delivery confirmation.",
      "Connected internal dispatch workflows to a WhatsApp Business API bot using Node.js webhooks and ManyChat.",
      "Integrated M-Pesa Daraja for rider payouts, replacing a manual disbursement process.",
      "Worked with Firebase Authentication and Firestore to support role-based access control.",
    ],
    stack: ["Flutter", "Dart", "Node.js", "M-Pesa", "WhatsApp Business API", "Firebase"],
  },
  {
    period: "08/2020 – 02/2021",
    role: "Full-Stack Developer",
    company: "Zumi Africa (now Autochek Kenya)",
    location: "Nairobi, Kenya",
    highlights: [
      "Contributed React and Node.js features to a consumer vehicle marketplace across three product releases.",
      "Connected lead-capture pages to Zoho CRM and supported lead assignment workflows.",
      "Built and documented REST APIs for mobile clients, including vehicle listings and financing tools.",
      "Implemented analytics event flows on key conversion pages.",
    ],
    stack: ["React", "Node.js", "Zoho CRM API", "Google Analytics", "REST APIs"],
  },
  {
    period: "PROJECT-BASED",
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed / Various Clients",
    location: "Nairobi, Kenya",
    highlights: [
      "Designed and deployed business websites and e-commerce platforms using React, Laravel, MySQL, and Flutter.",
      "Integrated M-Pesa payment flows and WhatsApp customer-response workflows for client projects.",
      "Handled requirements, design, development, hosting, and post-launch support.",
    ],
    stack: ["React", "Laravel", "MySQL", "Flutter", "M-Pesa", "WhatsApp API"],
  },
];

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  location: string;
};

const educationList: EducationItem[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Jomo Kenyatta University of Agriculture & Technology (JKUAT)",
    period: "2021 – 2025",
    location: "Kenya",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Jomo Kenyatta University of Agriculture & Technology (JKUAT)",
    period: "2017 – 2019",
    location: "Kenya",
  },
];

type TrainingItem = {
  name: string;
  provider?: string;
};

const trainingItems: TrainingItem[] = [
  { name: "AWS Cloud Practitioner" },
  { name: "Artificial Intelligence & Machine Learning" },
  { name: "Google Analytics Individual Qualification (GAIQ)", provider: "Google" },
  { name: "Meta Blueprint — Digital Marketing Associate", provider: "Meta" },
  { name: "Flutter & Dart — The Complete Guide", provider: "Udemy" },
  { name: "Node.js, Express, MongoDB & More: The Complete Bootcamp", provider: "Udemy" },
];

/* =========================================================
   SOCIAL PROFILES & TECHNOLOGY STACK
========================================================= */

type SocialProfile = {
  name: string;
  href: string;
  description: string;
  color: string;
  Icon: IconType;
};

const socialProfiles: SocialProfile[] = [
  { name: "GitHub", href: "https://github.com/Alexaganga", description: "Code, repositories and engineering projects", color: "#FFFFFF", Icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/alex-aganga-a5459a272/", description: "Professional profile and network", color: "#0A66C2", Icon: FaLinkedin },
  { name: "X", href: "https://x.com/AgangaAlex", description: "Technology conversations and updates", color: "#FFFFFF", Icon: RiTwitterXFill },
  { name: "TikTok", href: "https://www.tiktok.com/@alexmoustapha?lang=en", description: "Creative technology content", color: "#FE2C55", Icon: FaTiktok },
  { name: "WhatsApp", href: "https://wa.me/254741138844", description: "Direct contact", color: "#25D366", Icon: FaWhatsapp },
  { name: "Telegram", href: "https://t.me/Moustapha705", description: "Connect on Telegram", color: "#0088CC", Icon: FaTelegram },
];

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
  { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Linux", Icon: SiLinux, color: "#FCC624" },
  { name: "Grafana", Icon: SiGrafana, color: "#F46800" },
  { name: "Prometheus", Icon: SiPrometheus, color: "#E6522C" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
];

const expertise = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description: "Modern web applications, backend services, APIs, and business software built for practical use.",
  },
  {
    icon: ShieldCheck,
    title: "Application Security",
    description: "Secure development practices, authentication architecture, and application security testing.",
  },
  {
    icon: Workflow,
    title: "DevSecOps & CI/CD",
    description: "Automated development workflows, testing pipelines, and reliable deployment processes.",
  },
  {
    icon: Cloud,
    title: "Infrastructure & Cloud",
    description: "Linux environments, containerized applications, and infrastructure operations.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Intelligent Systems",
    description: "AI integrations, automation systems, and intelligent software solutions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile application development and connected digital experiences.",
  },
];

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

const metrics = [
  { value: "06+", label: "YEARS OF EXPERIENCE" },
  { value: "07", label: "FEATURED PROJECTS" },
  { value: "24", label: "TOOLS & TECHNOLOGIES" },
  { value: "10K+", label: "API USER SCALE / MAU" },
];

/* =========================================================
   HEADER & RESPONSIVE NAVIGATION
========================================================= */

function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [pendingMobileNavigation, setPendingMobileNavigation] = useState<string | null>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const sectionIds = ["home", ...navItems.map((item) => item.href.slice(1))];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (current) setActiveSection(`#${current.target.id}`);
      },
      {
        rootMargin: "-18% 0px -68% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPendingMobileNavigation(null);
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleNavigation = (href: string, fromMobileMenu = false) => {
    setActiveSection(href);

    if (fromMobileMenu) {
      setPendingMobileNavigation(href);
      setMenuOpen(false);
      return;
    }

    scrollToSection(href);
  };

  const finishMobileNavigation = () => {
    if (!pendingMobileNavigation) return;

    const destination = pendingMobileNavigation;
    setPendingMobileNavigation(null);

    // Wait for the menu's exit animation and layout change to finish first.
    window.requestAnimationFrame(() => scrollToSection(destination));
  };

  return (
    <motion.header
      className="site-header w-full"
      initial={{ opacity: 0, y: -48 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4965FF] to-transparent opacity-80" />

      <div className="site-header-inner mx-auto w-full max-w-[1440px] px-4 sm:px-7 lg:px-10">
        {/* Top row: identity, availability, and primary actions. */}
        <div className="site-header-toprow flex min-h-[76px] items-center justify-between gap-3 sm:min-h-[82px]">
          <motion.a
            href="#home"
            aria-label="Alex Aganga home"
            onClick={(event) => {
              event.preventDefault();
              handleNavigation("#home");
            }}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.97 }}
            className="group flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="grid h-9 w-9 shrink-0 place-items-center border border-[#C8FF00]/50 bg-[#C8FF00]/5 text-[#C8FF00] shadow-[0_0_20px_rgba(200,255,0,0.08)] transition-all duration-300 group-hover:border-[#C8FF00] group-hover:shadow-[0_0_25px_rgba(200,255,0,0.25)] sm:h-11 sm:w-11"
            >
              <Crosshair size={21} />
            </motion.span>
            <span
              className="site-brand-name whitespace-nowrap text-[12px] font-extrabold tracking-[0.045em] text-white sm:text-lg lg:text-xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ALEX AGANGA
            </span>
          </motion.a>

          <div className="site-header-right flex min-w-0 shrink-0 items-center justify-end gap-2 sm:gap-3">
            {/* The full label is shown on larger phones and desktops. */}
            <div
              className="availability-pill"
              aria-label="Available for work"
              title="Available for work"
            >
              <motion.span
                aria-hidden="true"
                animate={{ opacity: [0.55, 1, 0.55], scale: [0.88, 1.12, 0.88] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="availability-indicator"
              />
              <span className="availability-label-full">AVAILABLE FOR WORK</span>
              <span className="availability-label-short">AVAILABLE</span>
            </div>

            {/* Kept beside the brand on desktop, never squeezed into the nav row. */}
            <div className="site-header-actions hidden xl:flex">
              <a
                href={CV_URL}
                download="Alex_Aganga_Nyokwoyo_CV.pdf"
                className="portfolio-action portfolio-action-secondary"
              >
                <Download size={15} />
                <span>CV / RESUME</span>
              </a>
              <motion.a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigation("#contact");
                }}
                whileHover={{ y: -2, boxShadow: "0 0 26px rgba(200,255,0,0.28)" }}
                whileTap={{ scale: 0.96 }}
                className="portfolio-action portfolio-action-primary"
              >
                LET&apos;S TALK <ArrowUpRight size={16} />
              </motion.a>
            </div>

            <motion.button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              whileTap={{ scale: 0.9 }}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="alex-mobile-navigation"
              className={`mobile-navigation-toggle relative grid h-11 w-11 shrink-0 place-items-center border transition-all duration-300 xl:hidden ${
                menuOpen
                  ? "border-[#C8FF00] bg-[#C8FF00]/10 text-[#C8FF00] shadow-[0_0_20px_rgba(200,255,0,0.15)]"
                  : "border-[#4965FF]/50 bg-[#4965FF]/10 text-white hover:border-[#C8FF00]/60 hover:text-[#C8FF00]"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                  className="absolute"
                >
                  {menuOpen ? <X size={23} /> : <Menu size={23} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Separate desktop navigation row prevents links from colliding with actions. */}
        <nav
          className="site-header-desktop-nav hidden xl:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigation(item.href);
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95, y: 1 }}
                aria-current={isActive ? "location" : undefined}
                className={`relative flex min-h-[46px] items-center justify-center px-3 text-[12px] font-extrabold uppercase tracking-[0.07em] transition-colors duration-200 2xl:px-4 ${
                  isActive ? "text-[#C8FF00]" : "text-slate-300 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="alex-active-nav"
                    className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#C8FF00] shadow-[0_0_12px_rgba(200,255,0,0.85)] 2xl:left-4 2xl:right-4"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>
      </div>

      {/* Tablet and mobile navigation: scrollable on short screens and easy to tap. */}
      <AnimatePresence initial={false} onExitComplete={finishMobileNavigation}>
        {menuOpen && (
          <motion.nav
            id="alex-mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="site-header-mobile-menu overflow-y-auto border-t border-[#4965FF]/25 bg-[#04060F]/[0.98] xl:hidden"
          >
            <div className="mx-auto w-full max-w-[1440px] px-4 pb-6 pt-5 sm:px-7">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-[#C8FF00] sm:text-xs">
                  NAVIGATION / MENU
                </span>
                <span className="font-mono text-[10px] text-slate-500">AA-001</span>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;

                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(event) => {
                        event.preventDefault();
                        handleNavigation(item.href, true);
                      }}
                      whileHover={{ x: 3, borderColor: "rgba(200,255,0,0.65)" }}
                      whileTap={{
                        scale: 0.975,
                        backgroundColor: "rgba(200,255,0,0.14)",
                        boxShadow: "0 0 22px rgba(200,255,0,0.18)",
                      }}
                      aria-current={isActive ? "location" : undefined}
                      className={`flex min-h-[54px] items-center justify-between border px-5 text-[14px] font-extrabold uppercase tracking-[0.09em] transition-colors ${
                        isActive
                          ? "border-[#C8FF00]/60 bg-[#C8FF00]/[0.06] text-[#C8FF00]"
                          : "border-[#4965FF]/20 bg-[#0A1021] text-slate-300 hover:border-[#4965FF] hover:bg-[#0D1730] hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={18} className="shrink-0 text-[#C8FF00]" />
                    </motion.a>
                  );
                })}
              </div>

              <a
                href={CV_URL}
                download="Alex_Aganga_Nyokwoyo_CV.pdf"
                className="portfolio-action portfolio-action-secondary mt-4 min-h-[52px] w-full justify-between"
              >
                <span className="flex items-center gap-2">
                  <Download size={16} /> DOWNLOAD CV / RESUME
                </span>
                <ArrowUpRight size={18} />
              </a>

              <motion.a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigation("#contact", true);
                }}
                whileHover={{ boxShadow: "0 0 28px rgba(200,255,0,0.35)" }}
                whileTap={{ scale: 0.97, boxShadow: "0 0 30px rgba(200,255,0,0.4)" }}
                className="portfolio-action portfolio-action-primary mt-3 min-h-[54px] w-full justify-between"
              >
                LET&apos;S TALK <ArrowUpRight size={19} />
              </motion.a>

              <p className="mt-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.08em] text-slate-400">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#C8FF00] shadow-[0_0_10px_#C8FF00]" />
                AVAILABLE FOR WORK / OPEN TO SELECTED OPPORTUNITIES
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* =========================================================
   REUSABLE PROJECT CARD
========================================================= */

type ProjectCardProps = {
  project: PortfolioProject;
  index: number;
  expanded: boolean;
  onToggle: (id: number) => void;
  onOpenScreenshot: (project: PortfolioProject) => void;
};

function ProjectCard({ project, index, expanded, onToggle, onOpenScreenshot }: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const detailsId = `project-details-${project.id}`;
  const projectHost = project.link.replace(/^https?:\/\//i, "").replace(/\/$/, "");

  return (
    <motion.article
      className="project-card project-card-premium min-w-0"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.045, 0.2) }}
    >
      <div className="project-heading">
        <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="project-category">{project.category}</span>
      </div>

      <div className="project-browser-frame">
        <div className="project-browser-toolbar">
          <div className="preview-dots" aria-hidden="true">
            <i className="browser-dot-red" />
            <i className="browser-dot-yellow" />
            <i className="browser-dot-green" />
          </div>
          <span className="project-browser-url" title={project.link}>{projectHost}</span>
          <span className="project-browser-live"><i /> LIVE</span>
        </div>

        <button
          type="button"
          className={`project-image-button ${imageFailed ? "project-image-button-placeholder" : ""}`}
          onClick={() => {
            if (!imageFailed) onOpenScreenshot(project);
          }}
          disabled={imageFailed}
          aria-label={imageFailed ? `${project.name} screenshot not available` : `Enlarge ${project.name} screenshot`}
        >
          {!imageFailed ? (
            <Image
              src={project.image}
              alt={`${project.name} website screenshot`}
              fill
              sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
              className="project-real-screenshot"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="project-screenshot-pending">
              <span className="pending-kicker">PROJECT PREVIEW</span>
              <strong>{project.name}</strong>
              <span className="pending-line" />
              <span className="pending-message">SCREENSHOT TO BE ADDED</span>
              <span className="pending-host">{projectHost}</span>
            </div>
          )}
          {!imageFailed && <span className="project-image-hint">CLICK TO ENLARGE</span>}
        </button>
      </div>

      <div className="project-main min-w-0">
        <h3>{project.name}</h3>
        <div className="project-status"><span className="status-dot" />{project.status}</div>
        <p className="project-description">{project.description}</p>

        <div className="project-tech-list">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>

        <div className="project-actions project-actions-premium">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
            VIEW PROJECT <ExternalLink size={14} />
          </a>
          <button
            type="button"
            className="project-expand"
            onClick={() => onToggle(project.id)}
            aria-label={expanded ? `Hide ${project.name} details` : `Show ${project.name} details`}
            aria-expanded={expanded}
            aria-controls={detailsId}
          >
            {expanded ? "LESS INFO" : "MORE INFO"}
            {expanded ? <Minus size={17} /> : <Plus size={17} />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={detailsId}
              className="project-expanded"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 18 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.28 }}
              style={{ overflow: "hidden" }}
            >
              <h4>PROJECT OVERVIEW</h4>
              <p>{project.description}</p>
              <h4>PROJECT FEATURES</h4>
              <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-detail-link">
                EXPLORE LIVE PROJECT <ArrowUpRight size={15} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN PORTFOLIO PAGE
========================================================= */

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [selectedScreenshot, setSelectedScreenshot] = useState<PortfolioProject | null>(null);

  useEffect(() => {
    if (!selectedScreenshot) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedScreenshot(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedScreenshot]);

  const toggleProject = (id: number) => {
    setExpandedProject((current) => current === id ? null : id);
  };

  return (
    <MotionConfig reducedMotion="user">
      <main className="site-root w-full max-w-full overflow-x-clip" id="top">
        <style jsx global>{`
          .site-root { font-size: 17px !important; -webkit-text-size-adjust: 100%; text-size-adjust: 100%; }
          .site-root h1, .site-root h2, .site-root h3, .site-root h4 { font-weight: 850 !important; line-height: 1.16; }
          .site-root .hero-title { font-size: clamp(2.65rem, 7.3vw, 6.25rem) !important; font-weight: 900 !important; line-height: 1.06 !important; letter-spacing: -0.045em; }
          .site-root .hero-description, .site-root .about-copy p, .site-root .section-description, .site-root .expertise-card p, .site-root .project-description, .site-root .project-expanded p, .site-root .project-expanded li, .site-root .contact-copy > p { font-size: clamp(1.02rem, 1.15vw, 1.2rem) !important; line-height: 1.8 !important; }
          .site-root .hero-kicker, .site-root .hero-topline, .site-root .section-label { font-size: clamp(0.82rem, 0.9vw, 0.96rem) !important; font-weight: 750 !important; line-height: 1.5; }
          .site-root .section-heading { font-size: clamp(2rem, 4.1vw, 3.45rem) !important; font-weight: 900 !important; line-height: 1.13 !important; letter-spacing: -0.025em; }
          .site-root .about-statement { font-size: clamp(2rem, 4.3vw, 3.7rem) !important; font-weight: 900 !important; line-height: 1.14 !important; }
          .site-root .expertise-card h3, .site-root .project-main > h3, .site-root #contact h3 { font-size: clamp(1.25rem, 1.65vw, 1.6rem) !important; font-weight: 850 !important; line-height: 1.3 !important; }
          .site-root .service-name { font-size: clamp(1.05rem, 1.35vw, 1.28rem) !important; font-weight: 700 !important; line-height: 1.5; }
          .site-root .stat-value { font-size: clamp(2rem, 3.3vw, 3rem) !important; font-weight: 900 !important; }
          .site-root .quote-panel p { font-size: clamp(1.2rem, 2vw, 1.7rem) !important; font-weight: 850 !important; line-height: 1.35; }
          .site-root .contact-copy h2 { font-size: clamp(2rem, 4.2vw, 3.55rem) !important; font-weight: 900 !important; line-height: 1.13 !important; }
          .site-root .contact-list .contact-row { font-size: 1rem !important; font-weight: 750 !important; line-height: 1.5; }
          .site-root .contact-email-address { color: #E2E8F0 !important; font-family: var(--font-body) !important; font-size: 0.96rem !important; font-weight: 750 !important; letter-spacing: 0 !important; text-transform: lowercase !important; overflow-wrap: anywhere; }
          .site-root .footer-inner span, .site-root .footer-inner a { font-size: clamp(0.95rem, 1.15vw, 1.15rem) !important; font-weight: 900 !important; line-height: 1.6; }
          .site-root .site-header nav[aria-label="Main navigation"] a { font-size: 0.78rem !important; font-weight: 800 !important; }
          .site-root .site-header nav[aria-label="Mobile navigation"] a { font-size: 0.98rem !important; font-weight: 800 !important; }
          .site-root .site-header a:focus-visible, .site-root .site-header button:focus-visible, .site-root a:focus-visible, .site-root button:focus-visible { outline: 2px solid #C8FF00; outline-offset: 4px; }
          .site-root .tools-track .tool-item { font-size: 1.04rem !important; font-weight: 700 !important; }
          .site-root .tools-track .tool-item svg { width: 22px; height: 22px; }
          .site-root .project-card-premium { display: flex; height: 100%; flex-direction: column; padding: clamp(17px, 1.8vw, 25px); border: 1px solid rgba(93, 115, 185, 0.3); background: linear-gradient(155deg, rgba(9, 17, 37, .98), rgba(5, 10, 24, .98)); box-shadow: inset 0 1px 0 rgba(255,255,255,.018); }
          .site-root .project-card-premium:hover { border-color: rgba(91, 119, 255, .7); box-shadow: 0 18px 45px rgba(0,0,0,.25), 0 0 26px rgba(73,101,255,.08); }
          .site-root .project-card-premium::after { top: 8px; right: 10px; font-size: 15px; }
          .site-root .project-card-premium .project-heading { min-height: 28px; margin-bottom: 14px; }
          .site-root .project-card-premium .project-number { color: #C8FF00; font-size: 0.92rem; font-weight: 800; }
          .site-root .project-card-premium .project-category { max-width: 80%; color: #9BA8C5; font-size: clamp(.65rem, .8vw, .77rem); font-weight: 700; letter-spacing: .13em; }
          .site-root .project-browser-frame { overflow: hidden; border: 1px solid rgba(73,101,255,.34); background: #050914; box-shadow: 0 8px 24px rgba(0,0,0,.2); }
          .site-root .project-browser-toolbar { display: grid; height: 37px; grid-template-columns: 55px minmax(0,1fr) 52px; align-items: center; gap: 7px; padding: 0 10px; border-bottom: 1px solid rgba(73,101,255,.25); background: rgba(5,11,28,.98); }
          .site-root .project-browser-toolbar .preview-dots { gap: 5px; }
          .site-root .project-browser-toolbar .preview-dots i { width: 9px; height: 9px; border-radius: 50%; }
          .site-root .project-browser-toolbar .browser-dot-red { background: #F45C57; }
          .site-root .project-browser-toolbar .browser-dot-yellow { background: #F6BE3B; }
          .site-root .project-browser-toolbar .browser-dot-green { background: #27C45A; }
          .site-root .project-browser-url { overflow: hidden; color: #A7B4D4; font-family: var(--font-code); font-size: clamp(7px, .7vw, 10px); text-align: center; text-overflow: ellipsis; white-space: nowrap; }
          .site-root .project-browser-live { display: flex; align-items: center; justify-content: flex-end; gap: 5px; color: #C8FF00; font-family: var(--font-code); font-size: 9px; font-weight: 800; }
          .site-root .project-browser-live i { width: 7px; height: 7px; border-radius: 50%; background: #C8FF00; box-shadow: 0 0 9px rgba(200,255,0,.7); }
          .site-root .project-image-button { position: relative; display: block; width: 100%; aspect-ratio: 2.06 / 1; min-height: 150px; overflow: hidden; background: #050914; text-align: left; }
          .site-root .project-real-screenshot { object-fit: cover; object-position: top center; transition: transform .55s cubic-bezier(.2,.8,.2,1), filter .35s ease; }
          .site-root .project-card-premium:hover .project-real-screenshot { transform: scale(1.045); filter: saturate(1.08); }
          .site-root .project-image-hint { position: absolute; right: 9px; bottom: 9px; z-index: 2; padding: 5px 7px; border: 1px solid rgba(200,255,0,.38); background: rgba(4,6,15,.8); color: #D9F98A; font-family: var(--font-code); font-size: 8px; letter-spacing: .08em; opacity: 0; transform: translateY(4px); transition: .25s ease; }
          .site-root .project-image-button:hover .project-image-hint, .site-root .project-image-button:focus-visible .project-image-hint { opacity: 1; transform: translateY(0); }
          .site-root .project-screenshot-pending { display: flex; min-height: 180px; height: 100%; flex-direction: column; align-items: flex-start; justify-content: center; gap: 9px; padding: 22px; background: radial-gradient(circle at 80% 15%, rgba(73,101,255,.24), transparent 42%), linear-gradient(130deg, #0A1631, #060B19 70%); }
          .site-root .pending-kicker, .site-root .pending-message, .site-root .pending-host { color: #95A4C9; font-family: var(--font-code); font-size: 9px; letter-spacing: .13em; }
          .site-root .project-screenshot-pending strong { color: #F3F6FF; font-family: var(--font-display); font-size: clamp(1.15rem, 2vw, 1.8rem); font-weight: 800; }
          .site-root .pending-line { width: 44%; height: 3px; background: linear-gradient(90deg, #C8FF00, #4965FF); }
          .site-root .pending-message { color: #C8FF00; font-weight: 800; }
          .site-root .pending-host { color: #6D7A9D; letter-spacing: .04em; }
          .site-root .project-main { display: flex; flex: 1; flex-direction: column; padding: 22px 2px 0; }
          .site-root .project-main h3 { margin: 0; color: #F1F3FF; font-family: var(--font-display); font-size: clamp(1.45rem, 2vw, 2.05rem) !important; font-weight: 800 !important; line-height: 1.22 !important; letter-spacing: -.035em; }
          .site-root .project-status { margin-top: 10px; color: #C8FF00; font-size: .82rem; font-weight: 800; letter-spacing: .15em; }
          .site-root .project-description { min-height: 116px; margin-top: 15px; color: #A7B1C9; font-size: clamp(.96rem, 1.04vw, 1.08rem) !important; line-height: 1.8 !important; }
          .site-root .project-tech-list { gap: 7px; margin-top: 14px; }
          .site-root .project-tech-list span { padding: 5px 8px; border: 1px solid rgba(73,101,255,.28); background: rgba(73,101,255,.09); color: #B9C8F3; font-family: var(--font-code); font-size: .68rem !important; line-height: 1.5; }
          .site-root .project-actions-premium { justify-content: space-between; gap: 10px; margin-top: auto; padding-top: 18px; }
          .site-root .project-link, .site-root .project-expand { min-height: 44px; font-size: .78rem !important; font-weight: 800 !important; letter-spacing: .06em; }
          .site-root .project-link { display: inline-flex; align-items: center; gap: 8px; color: #C8FF00; }
          .site-root .project-expand { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 0 10px; border: 1px solid rgba(73,101,255,.38); background: rgba(73,101,255,.08); color: #E4E9F9; transition: .2s ease; }
          .site-root .project-expand:hover { border-color: #C8FF00; color: #C8FF00; box-shadow: 0 0 18px rgba(200,255,0,.1); }
          .site-root .project-expanded { padding-top: 3px; border-top: 1px solid rgba(73,101,255,.25); }
          .site-root .project-expanded h4 { margin: 12px 0 7px; color: #C8FF00; font-family: var(--font-code); font-size: .77rem !important; letter-spacing: .1em; }
          .site-root .project-expanded p, .site-root .project-expanded li { color: #B1BCD4; font-size: .94rem !important; line-height: 1.7 !important; }
          .site-root .project-expanded ul { display: grid; gap: 7px; padding-left: 19px; list-style: disc; }
          .site-root .project-expanded li::marker { color: #C8FF00; }
          .site-root .project-detail-link { display: inline-flex; align-items: center; gap: 7px; margin-top: 15px; color: #C8FF00; font-family: var(--font-code); font-size: .76rem; font-weight: 800; }
          .site-root .portfolio-action { display: inline-flex; min-height: 45px; align-items: center; justify-content: center; gap: 9px; padding: 0 14px; font-family: var(--font-code); font-size: 11px; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; transition: transform .18s ease, box-shadow .18s ease, background .18s ease, color .18s ease, border-color .18s ease; -webkit-tap-highlight-color: transparent; }
          .site-root .portfolio-action:active { transform: translateY(1px) scale(.97); box-shadow: 0 0 22px rgba(200,255,0,.2); }
          .site-root .portfolio-action-secondary { border: 1px solid rgba(73,101,255,.65); background: rgba(73,101,255,.1); color: #F1F4FF; }
          .site-root .portfolio-action-secondary:hover { border-color: #C8FF00; color: #C8FF00; background: rgba(73,101,255,.18); }
          .site-root .portfolio-action-primary { border: 1px solid #C8FF00; background: #C8FF00; color: #04060F; clip-path: polygon(0 0, calc(100% - 11px) 0, 100% 11px, 100% 100%, 11px 100%, 0 calc(100% - 11px)); }
          .site-root .portfolio-action-primary:hover { background: #DAFF4A; box-shadow: 0 0 25px rgba(200,255,0,.25); }
          .site-root .experience-card { border: 1px solid rgba(109,132,255,.24); background: linear-gradient(150deg, rgba(10,16,33,.94), rgba(6,11,25,.96)); }
          .site-root .experience-card:hover { border-color: rgba(73,101,255,.65); }
          .site-root .project-lightbox { position: fixed; inset: 0; z-index: 1000; display: grid; place-items: center; padding: 24px; background: rgba(2,4,12,.94); backdrop-filter: blur(12px); }
          .site-root .project-lightbox-panel { position: relative; width: min(1100px, 94vw); height: min(760px, 86vh); border: 1px solid rgba(111,137,255,.55); background: #050914; box-shadow: 0 30px 100px rgba(0,0,0,.55), 0 0 55px rgba(73,101,255,.14); }
          .site-root .project-lightbox-close { position: absolute; top: 12px; right: 12px; z-index: 3; display: grid; width: 42px; height: 42px; place-items: center; border: 1px solid rgba(200,255,0,.5); background: rgba(4,6,15,.9); color: #C8FF00; }
          @media (max-width: 1100px) { .site-root .projects-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; } .site-root .project-description { min-height: 0; } }
          @media (max-width: 680px) { .site-root { font-size: 16px !important; } .site-root .hero-title { font-size: clamp(2.45rem, 10.8vw, 3.7rem) !important; line-height: 1.08 !important; } .site-root .section-heading { font-size: clamp(1.85rem, 8.2vw, 2.6rem) !important; } .site-root .about-statement, .site-root .contact-copy h2 { font-size: clamp(1.85rem, 8vw, 2.65rem) !important; } .site-root .hero-description, .site-root .about-copy p, .site-root .section-description, .site-root .expertise-card p, .site-root .contact-copy > p { font-size: 1rem !important; line-height: 1.75 !important; } .site-root .hero-topline { font-size: .72rem !important; flex-wrap: wrap; } .site-root .projects-grid { grid-template-columns: minmax(0, 1fr); gap: 18px; margin-top: 32px; } .site-root .project-card-premium { padding: 16px; } .site-root .project-image-button { min-height: 175px; } .site-root .project-description { min-height: 0; font-size: 1rem !important; } .site-root .project-main h3 { font-size: clamp(1.5rem, 7vw, 2rem) !important; } .site-root .footer-inner { justify-content: center; text-align: center; } .site-root .footer-inner span, .site-root .footer-inner a { font-size: .9rem !important; } .site-root .project-lightbox { padding: 12px; } .site-root .project-lightbox-panel { width: 96vw; height: 76vh; } }
          @media (prefers-reduced-motion: reduce) { .site-root .project-real-screenshot, .site-root .project-image-hint, .site-root .portfolio-action { transition: none !important; } }
        `}</style>

        <a href="#main-content" className="skip-link">Skip to main content</a>
        <PortfolioHeader />
        <div id="main-content" tabIndex={-1} />

        {/* HERO */}
        <section id="home" className="hero-section">
          <div className="hero-grid-overlay" />
          <div className="container-hud w-full min-w-0">
            <div className="hero-topline"><Crosshair size={14} /> DIGITAL ENGINEERING / SYSTEM INTERFACE <span>AA-001</span></div>
            <div className="hero-layout">
              <motion.div className="hero-copy min-w-0" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }}>
                <p className="hero-kicker"><Activity size={16} /> SOFTWARE ENGINEERING / DEVSECOPS</p>
                <h1 className="hero-title font-extrabold" style={{ fontWeight: 900 }}>BUILDING<br /><span className="accent">INTELLIGENT.</span><br /><span className="hero-outline">SECURE SYSTEMS.</span></h1>
                <p className="hero-description">I&apos;m Alex Aganga, a software engineering professional focused on <strong>full-stack development</strong>, <strong>AI-driven solutions</strong>, <strong>application security</strong>, and <strong>DevSecOps</strong>. I turn complex technical challenges into practical digital solutions.</p>
                <div className="hero-actions flex flex-wrap gap-3">
                  <a href="#projects" onClick={(event) => { event.preventDefault(); scrollToSection("#projects"); }} className="hud-button hud-button-lime">EXPLORE MY WORK <ArrowUpRight size={16} /></a>
                  <a href={CV_URL} download="Alex_Aganga_Nyokwoyo_CV.pdf" className="hud-button border-[#4965FF]/60 bg-[#4965FF]/15 text-white hover:border-[#C8FF00] hover:text-[#C8FF00]"><Download size={16} /> DOWNLOAD CV</a>
                  <a href="#contact" onClick={(event) => { event.preventDefault(); scrollToSection("#contact"); }} className="hud-button">INITIATE CONTACT <ArrowRight size={16} /></a>
                </div>
                <div className="hero-socials flex flex-wrap items-center gap-4">
                  {socialProfiles.map((profile) => { const Icon = profile.Icon; return <a key={profile.name} href={profile.href} target="_blank" rel="noopener noreferrer" aria-label={`${profile.name} profile`} title={profile.name}><Icon size={19} color={profile.color} /></a>; })}
                  {EMAIL_CONFIGURED && <a href={`mailto:${EMAIL}`} aria-label="Send email" title="Send email"><Mail size={19} /></a>}
                </div>
              </motion.div>

              <motion.div className="hero-visual min-w-0" initial={{ opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .15 }}>
                <div className="orb-stage" role="img" aria-label="Animated blue holographic wireframe globe">
                  <div className="orb-light" /><div className="orb-halo orb-halo-one" /><div className="orb-halo orb-halo-two" /><div className="orb-halo orb-halo-three" /><div className="orb-orbit" /><div className="orb-orbit orb-orbit-two" />
                  <svg className="orb-svg" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                      <radialGradient id="globeFill"><stop offset="0%" stopColor="#315CFF" stopOpacity=".28" /><stop offset="75%" stopColor="#07122F" stopOpacity=".72" /><stop offset="100%" stopColor="#04060F" stopOpacity=".2" /></radialGradient>
                      <linearGradient id="globeStroke" x1="0" y1="0" x2="420" y2="420"><stop stopColor="#8CA1FF" /><stop offset="1" stopColor="#2F4BFF" /></linearGradient>
                      <clipPath id="globeClip"><circle cx="210" cy="210" r="143" /></clipPath>
                    </defs>
                    <circle cx="210" cy="210" r="150" fill="url(#globeFill)" stroke="url(#globeStroke)" strokeWidth="1.3" />
                    <g clipPath="url(#globeClip)" stroke="#6684FF" strokeOpacity=".55" strokeWidth="1">
                      <ellipse cx="210" cy="210" rx="143" ry="47" /><ellipse cx="210" cy="210" rx="143" ry="93" /><ellipse cx="210" cy="210" rx="143" ry="121" /><ellipse cx="210" cy="210" rx="53" ry="143" /><ellipse cx="210" cy="210" rx="103" ry="143" /><ellipse cx="210" cy="210" rx="143" ry="143" /><path d="M65 170 Q210 80 355 170" /><path d="M65 250 Q210 340 355 250" /><path d="M67 210 H353" /><path d="M210 67 V353" />
                    </g>
                    <circle cx="210" cy="210" r="157" stroke="#C8FF00" strokeOpacity=".28" strokeDasharray="2 12" />
                    <path d="M210 47 V29 M210 391 V373 M47 210 H29 M391 210 H373" stroke="#C8FF00" strokeWidth="2" /><circle cx="210" cy="210" r="4" fill="#C8FF00" /><path d="M210 185 V235 M185 210 H235" stroke="#C8FF00" strokeOpacity=".8" />
                  </svg>
                  <div className="orb-badge"><span>ENGINEER / CREATE / INNOVATE</span></div>
                  <div className="orb-readout"><div>CORE STATUS / <strong>ACTIVE</strong></div><div>MODE / INTELLIGENT SYSTEMS</div><div>NODE / <strong>AA-001</strong></div></div>
                </div>
              </motion.div>
            </div>
          </div>
          <a href="#about" onClick={(event) => { event.preventDefault(); scrollToSection("#about"); }} className="hero-scroll">SCROLL TO DISCOVER</a>
        </section>
        <div className="section-divider" />

        {/* ABOUT */}
        <section id="about" className="section-block scroll-mt-24">
          <div className="container-hud w-full min-w-0">
            <p className="section-label">01 / ABOUT THE ENGINEER</p>
            <div className="about-grid" style={{ marginTop: 38 }}>
              <motion.h2 className="about-statement font-extrabold" style={{ fontWeight: 900 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>ENGINEERING TECHNOLOGY THAT <span>SOLVES REAL PROBLEMS.</span></motion.h2>
              <div className="about-copy">
                <p>I work across software development, infrastructure, and technology operations, with an interest in building systems that are practical, secure, and maintainable.</p>
                <p>My technical interests span frontend engineering, backend architecture, mobile development, cybersecurity, automation, and cloud infrastructure.</p>
                <p>I value thoughtful architecture, continuous learning, collaboration, and technology that delivers meaningful outcomes to people and businesses.</p>
                <div className="about-signature">TECHNOLOGY SHOULD SIMPLIFY LIFE.</div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-divider" />

        {/* EXPERIENCE */}
        <section id="experience" className="section-block scroll-mt-24">
          <div className="container-hud w-full min-w-0">
            <p className="section-label">02 / CAREER TRAJECTORY & EXPERIENCE</p>
            <h2 className="section-heading">PRODUCTION IMPACT & ENGINEERING ROLES.</h2>
            <p className="section-description">A career spanning full-stack software development, mobile engineering, systems administration, and delivery of production software.</p>
            <div className="mt-10 space-y-5">
              {experiences.map((experience, index) => (
                <motion.article key={`${experience.company}-${experience.role}`} className="experience-card hud-panel p-5 sm:p-7" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .42, delay: Math.min(index * .04, .18) }}>
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3 border-b border-[rgba(109,132,255,0.18)] pb-4">
                    <div>
                      <div className="mb-1 flex items-center gap-2"><Briefcase size={18} className="text-[#C8FF00]" /><h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">{experience.role}</h3></div>
                      <p className="text-sm font-semibold text-cyan-300">{experience.company} <span className="text-slate-500">•</span> <span className="font-normal text-slate-400">{experience.location}</span></p>
                    </div>
                    <span className="border border-[#C8FF00]/40 bg-[#C8FF00]/10 px-3 py-1 font-mono text-xs font-bold tracking-wider text-[#C8FF00]">{experience.period}</span>
                  </div>
                  <ul className="mb-5 space-y-2.5">
                    {experience.highlights.map((highlight) => <li key={highlight} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"><span className="mt-1 shrink-0 font-mono text-[10px] text-[#C8FF00]">■</span><span>{highlight}</span></li>)}
                  </ul>
                  <div className="flex flex-wrap items-center gap-2 border-t border-[rgba(109,132,255,0.12)] pt-4"><span className="mr-1 font-mono text-[10px] font-bold tracking-wider text-slate-500">TECH STACK</span>{experience.stack.map((technology) => <span key={technology} className="border border-[#4965FF]/30 bg-[#4965FF]/10 px-2 py-1 font-mono text-[10px] text-slate-300">{technology}</span>)}</div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        <div className="section-divider" />

        {/* PROJECTS */}
        <section id="projects" className="section-block scroll-mt-24">
          <div className="container-hud w-full min-w-0">
            <p className="section-label">03 / SELECTED WORK</p>
            <h2 className="section-heading">PROJECTS & ENGINEERING EXPERIMENTS.</h2>
            <p className="section-description">A selection of digital products and practical software solutions. Open a project to see more detail, or visit the live website.</p>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  expanded={expandedProject === project.id}
                  onToggle={toggleProject}
                  onOpenScreenshot={setSelectedScreenshot}
                />
              ))}
            </div>
            <p className="mt-5 font-mono text-[10px] tracking-wide text-slate-500">NOTE: The first three project previews are taken from the supplied reference image. Add your own full-resolution screenshots for the remaining projects to replace their preview placeholders.</p>
          </div>
        </section>
        <div className="section-divider" />

        {/* PROJECT SCREENSHOT LIGHTBOX */}
        <AnimatePresence>
          {selectedScreenshot && (
            <motion.div className="project-lightbox" role="dialog" aria-modal="true" aria-label={`${selectedScreenshot.name} screenshot`} onClick={() => setSelectedScreenshot(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="project-lightbox-panel" onClick={(event) => event.stopPropagation()} initial={{ opacity: 0, scale: .96, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .97, y: 8 }} transition={{ duration: .2 }}>
                <button type="button" className="project-lightbox-close" onClick={() => setSelectedScreenshot(null)} aria-label="Close screenshot"><X size={22} /></button>
                <Image src={selectedScreenshot.image} alt={`${selectedScreenshot.name} enlarged website screenshot`} fill sizes="94vw" className="object-contain p-3" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* METRICS */}
        <section className="section-block" style={{ paddingTop: 0 }}>
          <div className="container-hud w-full min-w-0">
            <div className="stats-layout">
              <div className="stats-panel hud-panel">
                {metrics.map((metric) => <div className="stat-item" key={metric.label}><div className="stat-value">{metric.value}</div><div className="stat-label">{metric.label}</div></div>)}
              </div>
              <div className="quote-panel"><p>TECHNOLOGY SHOULD SIMPLIFY LIFE.</p><span>ENGINEERING PHILOSOPHY / AA-001</span></div>
            </div>
          </div>
        </section>
        <div className="section-divider" />

        {/* EXPERTISE */}
        <section id="expertise" className="section-block scroll-mt-24">
          <div className="container-hud w-full min-w-0">
            <p className="section-label">04 / ENGINEERING DOMAINS</p>
            <h2 className="section-heading">ENGINEER ACROSS THE DIGITAL ECOSYSTEM.</h2>
            <p className="section-description">From application architecture and development to infrastructure, security, and intelligent automation.</p>
            <div className="expertise-grid">
              {expertise.map((item, index) => { const Icon = item.icon; return <motion.article key={item.title} className="expertise-card hud-panel min-w-0" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .4, delay: index * .045 }} whileHover={{ y: -5 }}><div className="expertise-icon"><Icon size={24} /></div><h3>{item.title}</h3><p>{item.description}</p><span className="card-index">DOMAIN / {String(index + 1).padStart(2, "0")}</span></motion.article>; })}
            </div>
          </div>
        </section>
        <div className="section-divider" />

        {/* TECHNOLOGY */}
        <section id="technology" className="section-block scroll-mt-24">
          <div className="container-hud w-full min-w-0">
            <p className="section-label">05 / TECHNOLOGY ECOSYSTEM</p>
            <h2 className="section-heading">TOOLS OF MY CRAFT.</h2>
            <p className="section-description">Technologies and engineering tools across my development and infrastructure work.</p>
            <p className="sr-only">Technology stack: {skills.map((skill) => skill.name).join(", ")}</p>
          </div>
          <div className="tools-marquee" aria-hidden="true"><div className="tools-track">{[...skills, ...skills].map((skill, index) => { const Icon = skill.Icon; return <span className="tool-item" key={`${skill.name}-${index}`}><Icon size={20} color={skill.color} aria-hidden="true" style={{ flexShrink: 0, filter: "drop-shadow(0 0 5px currentColor)" }} /><span>{skill.name}</span><span className="tool-separator">+</span></span>; })}</div></div>
        </section>
        <div className="section-divider" />

        {/* EDUCATION & TRAINING */}
        <section id="education" className="section-block scroll-mt-24">
          <div className="container-hud w-full min-w-0">
            <p className="section-label">06 / ACADEMIC BACKGROUND & TRAINING</p>
            <h2 className="section-heading">CONTINUOUS LEARNING & FORMAL FOUNDATIONS.</h2>
            <p className="section-description">Formal education in Information Technology, supported by ongoing professional learning across cloud, AI, analytics, mobile, and backend development.</p>
            <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="mb-3 flex items-center gap-2"><GraduationCap className="text-[#C8FF00]" size={21} /><h3 className="font-mono text-lg font-extrabold uppercase tracking-wider text-white">Degrees & Diplomas</h3></div>
                {educationList.map((education) => <motion.article key={education.degree} className="hud-panel border border-[rgba(109,132,255,0.22)] bg-[#0A1021]/80 p-5 sm:p-6" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><div className="mb-2 flex flex-wrap items-center justify-between gap-2"><span className="font-mono text-xs font-bold text-[#C8FF00]">{education.period}</span><span className="font-mono text-[11px] text-slate-500">{education.location}</span></div><h4 className="mb-2 text-base font-extrabold text-white">{education.degree}</h4><p className="text-sm leading-relaxed text-slate-300">{education.institution}</p></motion.article>)}
              </div>
              <div className="space-y-4">
                <div className="mb-3 flex items-center gap-2"><GraduationCap className="text-cyan-400" size={21} /><h3 className="font-mono text-lg font-extrabold uppercase tracking-wider text-white">Trainings</h3></div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{trainingItems.map((training) => <motion.article key={training.name} className="flex min-h-[125px] flex-col justify-between border border-[rgba(109,132,255,0.2)] bg-[#0D1730]/70 p-4 transition-colors duration-300 hover:border-[#4965FF]/60 hover:bg-[#101B36]" initial={{ opacity: 0, scale: .97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}><div><span className="mb-2 inline-block border border-[#4965FF]/30 bg-[#4965FF]/15 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-cyan-300">Training</span><h4 className="text-sm font-extrabold leading-snug text-white">{training.name}</h4></div>{training.provider ? <p className="mt-3 font-mono text-[11px] text-slate-400">{training.provider}</p> : null}</motion.article>)}</div>
              </div>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">Training entries are presented as training and professional development, not as independently verified certifications.</p>
          </div>
        </section>
        <div className="section-divider" />

        {/* SERVICES */}
        <section id="services" className="section-block scroll-mt-24">
          <div className="container-hud w-full min-w-0">
            <p className="section-label">07 / CAPABILITIES & SERVICES</p>
            <h2 className="section-heading">TURNING IDEAS INTO DIGITAL SOLUTIONS.</h2>
            <p className="section-description">From a new digital product to improving an existing technology environment, I help translate business needs into practical technical solutions.</p>
            <div className="services-grid">{services.map((service, index) => <motion.div key={service} className="service-row" whileHover={{ x: 4 }}><span className="service-number">{String(index + 1).padStart(2, "0")}</span><span className="service-name">{service}</span><ArrowUpRight size={16} /></motion.div>)}</div>
          </div>
        </section>
        <div className="section-divider" />

        {/* CONTACT */}
        <section id="contact" className="section-block scroll-mt-24">
          <div className="container-hud w-full min-w-0">
            <p className="section-label">08 / ESTABLISH CONNECTION</p>
            <div className="contact-grid hud-panel min-w-0">
              <div className="contact-copy min-w-0">
                <h2>DO YOU WANT TO CODE YOUR DREAMS INTO <span>A REALITY?</span></h2>
                <p>Whether you&apos;re hiring an engineer, developing a digital product, or looking for a technical collaborator, let&apos;s explore what we can build.</p>
                <div className="contact-list">
                  <a className="contact-row" href="https://github.com/Alexaganga" target="_blank" rel="noopener noreferrer"><FaGithub color="#F4F4F4" size={19} /> GITHUB PROFILE <ArrowUpRight size={13} /></a>
                  {EMAIL_CONFIGURED && <a className="contact-row" href={`mailto:${EMAIL}`} aria-label={`Send an email to ${EMAIL}`} title={`Email ${EMAIL}`}><Mail size={18} /><span className="contact-email-address">{EMAIL}</span><ArrowUpRight size={15} /></a>}
                  <a className="contact-row" href={CV_URL} download="Alex_Aganga_Nyokwoyo_CV.pdf"><Download size={18} /> DOWNLOAD MY CV <ArrowUpRight size={15} /></a>
                </div>
              </div>
              <div className="cube-stage" role="img" aria-label="Animated futuristic wireframe cube with orbital rings"><div className="cube-orbit" /><div className="cube-orbit cube-orbit-two" /><div className="cube-core"><div className="cube-face cube-front" /><div className="cube-face cube-back" /><div className="cube-face cube-left" /><div className="cube-face cube-right" /><div className="cube-face cube-top" /><div className="cube-face cube-bottom" /></div></div>
              <div className="qr-panel"><div className="qr-label">SCAN TO ACCESS</div><div className="qr-frame"><QRCodeSVG value={PORTFOLIO_URL} size={148} level="H" bgColor="#C8FF00" fgColor="#04060F" marginSize={4} title="Scan to open Alex Aganga's portfolio" /></div><div className="qr-label">ALEX AGANGA / ONLINE</div><p className="qr-subtitle">DIGITAL PORTFOLIO ACCESS</p></div>
            </div>
            <div className="mt-14">
              <div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="section-label">09 / SOCIAL NETWORK</p><h3 className="mt-4 font-mono text-2xl font-extrabold uppercase tracking-wider text-white">LET&apos;S CONNECT.</h3><p className="mt-2 text-sm text-slate-400">Find me across my social platforms.</p></div><span className="mono text-xs tracking-widest text-[#C8FF00]">SIX CONNECTION CHANNELS</span></div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">{socialProfiles.map((profile) => { const Icon = profile.Icon; return <motion.a key={profile.name} href={profile.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit my ${profile.name} profile`} className="group relative flex min-h-[140px] min-w-0 flex-col justify-between overflow-hidden border border-[rgba(109,132,255,0.2)] bg-[#0A1021]/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#4965FF] hover:bg-[#0D1730] hover:shadow-[0_14px_36px_rgba(47,75,255,0.16)]"><div className="flex items-center justify-between"><Icon size={31} color={profile.color} aria-hidden="true" /><ArrowUpRight size={19} className="text-slate-500 transition-colors group-hover:text-[#C8FF00]" /></div><div><h4 className="font-mono text-sm font-bold uppercase tracking-widest text-white">{profile.name}</h4><p className="mt-2 text-xs text-slate-400">{profile.description}</p></div><span className="absolute bottom-0 left-0 h-[2px] w-full" style={{ backgroundColor: profile.color, opacity: .65 }} /></motion.a>; })}</div>
            </div>
          </div>
        </section>

        {/* FOOTER TICKER */}
        <div className="footer-ticker" aria-label="Technology should simplify life"><div className="footer-ticker-track" aria-hidden="true">{Array.from({ length: 4 }, (_, index) => <div key={index} style={{ display: "flex", alignItems: "center", gap: 27 }}><span>ENGINEER THE FUTURE</span><span className="ticker-star">✳</span><span>BUILD WITH PURPOSE</span><span className="ticker-star">✳</span><span>TECHNOLOGY SHOULD SIMPLIFY LIFE</span><span className="ticker-star">✳</span></div>)}</div></div>

        {/* FOOTER */}
        <footer className="site-footer"><div className="container-hud footer-inner flex flex-wrap items-center justify-between gap-4"><span className="font-extrabold tracking-wide">© {new Date().getFullYear()} ALEX AGANGA. CODING YOUR DREAMS INTO A REALITY.</span><div className="flex flex-wrap items-center gap-4"><a href={CV_URL} download="Alex_Aganga_Nyokwoyo_CV.pdf" className="footer-cv-link"><Download size={15} /> DOWNLOAD CV</a><a href="#home" onClick={(event) => { event.preventDefault(); scrollToSection("#home"); }} className="font-extrabold tracking-wider">BACK TO TOP ↑</a></div><span className="font-extrabold tracking-wide">ALEX AGANGA / SYSTEM ONLINE</span></div></footer>
      </main>
    </MotionConfig>
  );
}

