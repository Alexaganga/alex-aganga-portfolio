
export type Project = {
  id: number;
  name: string;
  category: string;
  status: string;
  description: string;
  features: string[];
  technologies: string[];
  link?: string;
  terminalCommand?: string;
  uptime?: string;
  latency?: string;
};

export const projects: Project[] = [
  {
    id: 1,

    name: "Portflow OS",

    category: "Full-Stack Platform",

    status: "Live",

    description:
      "A cloud operations dashboard for monitoring digital services, automating workflows, and managing infrastructure health in one place.",

    features: [
      "Real-time service monitoring",
      "Automated incident triage",
      "Operations reporting and dashboards",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
    ],

    terminalCommand: "inspect --project --portflow",
  },

  {
    id: 2,

    name: "Cipher Grid",

    category: "Cybersecurity",

    status: "Building",

    description:
      "A security analytics workspace for identifying vulnerabilities, surfacing weak points, and helping teams prioritize remediation.",

    features: [
      "Security posture summaries",
      "Audit-ready detection workflows",
      "Policy alignment tracking",
    ],

    technologies: [
      "React",
      "Node.js",
      "Python",
      "Linux",
    ],

    terminalCommand: "scan --environment --cipher-grid",
  },

  {
    id: 3,

    name: "Signal Forge",

    category: "AI Research",

    status: "Research",

    description:
      "A research platform exploring intelligent automation workflows, model evaluation loops, and prompt-based product experimentation.",

    features: [
      "Experiment tracking",
      "Prompt orchestration",
      "Evaluation dashboards",
    ],

    technologies: [
      "Python",
      "TypeScript",
      "Docker",
      "PostgreSQL",
    ],

    terminalCommand: "run --research --signal-forge",
  },
];
