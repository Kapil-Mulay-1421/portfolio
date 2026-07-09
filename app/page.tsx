"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NodeEyebrow, Waveform } from "@/components/signal";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Download,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

type Domain = "software" | "systems";

const domainLabel: Record<Domain, string> = {
  software: "Software",
  systems: "Systems / RTL",
};

const getProjectBadgeLabel = (projectTitle: string, domain: Domain) => {
  switch (projectTitle) {
    case "NeuroGAN":
      return "Machine Learning";
    case "HydroSense":
      return "IoT & Embedded";
    case "Grabbit":
      return "Full-Stack Engineering";
    case "Maze Solver":
      return "Embedded Robotics";
    case "ZenoVerse":
      return "Blockchain + Computer Vision";
    case "Prompt Forge":
      return "Agentic AI";
    default:
      return domainLabel[domain];
  }
};

// Copper reads as literal metal/PCB traces -> bare-metal systems work.
// Teal reads as a scope/screen glow -> software.
const domainTone: Record<Domain, { text: string; bg: string; border: string }> = {
  software: { text: "text-teal", bg: "bg-teal", border: "hover:border-teal/50" },
  systems: {
    text: "text-primary",
    bg: "bg-primary",
    border: "hover:border-primary/50",
  },
};

const projects: {
  title: string;
  domain: Domain;
  period?: string;
  description: string;
  bullets: string[];
  tech: string[];
  links: { label: string; href: string }[];
}[] = [

  {
    title: "NeuroGAN",
    domain: "software",
    period: "Jan 2026 — May 2026",
    description:
      "A DCGAN trained on 10,000+ brain-MRI images to synthesize tumor-positive scans, with an interactive explorer for the generator's latent space using linear (LERP) and spherical (SLERP) interpolation.",
    bullets: [
      "Convolutional DCGAN generator trained on 10,000+ brain MRI images",
      "LERP/SLERP latent-space interpolation with an interactive explorer UI",
      "FastAPI + Next.js app deployed to Hugging Face Spaces and Vercel, CI/CD via GitHub Actions",
    ],
    tech: ["PyTorch", "FastAPI", "Next.js", "Hugging Face Spaces"],
    links: [
      { label: "GitHub", href: "https://github.com/Kapil-Mulay-1421/NeuroGAN" },
      { label: "Demo", href: "https://neurogan.vercel.app/" },
    ],
  },
  {
    title: "HydroSense",
    domain: "software",
    period: "Jan 2026 — May 2026",
    description:
      "A cloud-native IoT platform for water-quality monitoring — from sensor to dashboard. Electrochemical sensor nodes located at the water source publish live readings over MQTT to the nearest server, eliminating the need for manual sampling.",
    bullets: [
      "Data pipeline: ESP32 sensor node → MQTT (HiveMQ Cloud) → ML Model → MongoDB Atlas via Prisma",
      "ML model for water-potability prediction from real-time sensor readings and a Next.js frontend for visualization.",
      "Automated deployment to Hugging Face Spaces through GitHub Actions CI/CD",
    ],
    tech: ["TypeScript", "Next.js", "MQTT", "MongoDB Atlas", "Prisma", "ESP32"],
    links: [
      { label: "GitHub", href: "https://github.com/Kapil-Mulay-1421/water-quality-monitoring" },
      { label: "Live site", href: "https://huggingface.co/spaces/mockingjay-7/HydroSense" },
    ],
  },
  {
    title: "5-Stage Pipelined MIPS32 Processor",
    domain: "systems",
    period: "Feb 2026 — Jul 2026",
    description:
      "A 5-stage pipelined MIPS32-style CPU written from scratch in Verilog. Contains the datapath, control path, 32x32-bit register bank and 4KB instruction/data memory, and is capable of processing several assembly language instructions in parallel.",
    bullets: [
      "Full datapath and control path, with immediate generation and branch handling",
      "5-stage pipeline (IF · ID · EX · MEM · WB) for arithmetic, load/store, and branch instructions",
      "Custom Verilog testbench for RTL verification, debugged with GTKWave waveforms",
    ],
    tech: ["Verilog HDL", "RTL Design", "GTKWave", "Computer Architecture"],
    links: [
      { label: "GitHub", href: "https://github.com/Kapil-Mulay-1421/RISC-Processor/tree/main/MIPS32" },
    ],
  },
  {
    title: "Grabbit",
    domain: "software",
    period: "2022 — 2023",
    description:
      "A production-ready e-commerce platform covering the whole purchase loop — user authentication, email verification, catalog browsing, inventory management, order processing workflows, and payment gateways. This full-stack web app also supports store-preference selection by the customer.",
    bullets: [
      "Relational MySQL schema for Users, Products, Orders, and Transactions",
      "Razorpay checkout with automated confirmation and notification emails",
      "Auth, email verification and store-preference selection before checkout",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Razorpay", "Vite"],
    links: [
      { label: "GitHub", href: "https://github.com/Kapil-Mulay-1421/Grabbit_Laravel" },
      { label: "Live site", href: "https://grabbit-production-zdvnck.laravel.cloud/" },
    ],
  },
  {
    title: "Maze Solver",
    domain: "software",
    period: "Apr 2025 — Sep 2025",
    description:
      "An autonomous micromouse that maps and solves a maze in real time with Flood-Fill, rerouting live as it discovers walls. A multi-run strategy — explore, return, optimize — picks the fastest final path.",
    bullets: [
      "Flood-Fill navigation in Python and C++ with real-time rerouting, on ESP32 + ROS2",
      "Multi-run traversal: loop removal, diagonal path compression, regression-based feasibility scoring",
      "Represented IIT Ropar in the maze-solver challenge at Technoxian 2025, Noida",
    ],
    tech: ["Python", "C++", "ROS2", "ESP32"],
    links: [
      { label: "GitHub", href: "https://github.com/Kapil-Mulay-1421/maze-solver" },
      {
        label: "Simulation",
        href: "https://drive.google.com/file/d/1zm0uVR6LOGfDtEM9Dml3PBmY42T3CcDc/view?usp=sharing",
      },
    ],
  },
  {
    title: "ZenoVerse",
    domain: "software",
    period: "Jul 2025 — Feb 2026",
    description:
      "A collaborative Web3 project, built with IIT Ropar's Software Community, that mints verified night-sky observations as NFTs — a computer-vision check confirms a capture is genuine before it's minted on-chain.",
    bullets: [
      "EfficientNet-based CV pipeline verifies a capture is a genuine night-sky observation before minting",
      "ERC-721 smart contracts (OpenZeppelin, Hardhat) handle minting, metadata, and ownership on Ethereum",
      "Next.js + Ethers.js frontend for a seamless mint-and-manage experience",
    ],
    tech: ["Solidity", "Hardhat", "Ethers.js", "Next.js", "EfficientNet"],
    links: [
      { label: "GitHub", href: "https://github.com/software-community/ZenoVerse" },
    ],
  },
  {
    title: "Prompt Forge",
    domain: "software",
    description:
      "A multi-agent system that simulates business negotiations and courtroom cases from user-defined system prompts, with each agent's turns streamed live.",
    bullets: [
      "Orchestrated multiple LLM agents (via Groq) to role-play structured negotiation and courtroom scenarios",
      "Streamed agent-to-agent exchanges to the client live over Server-Sent Events (SSE)",
      "Persisted scenarios and transcripts with Prisma; built the interface in Next.js",
    ],
    tech: ["Next.js", "Prisma", "Groq", "SSE"],
    links: [
      { label: "GitHub", href: "https://github.com/Kapil-Mulay-1421/promptforge" },
    ],
  },
];

const experience = {
  role: "Junior Developer",
  org: "Dhananjay Lab for Education Design, IIT Ropar",
  mentor: "under Dr. Sudarshan Iyengar",
  period: "Nov 2024 — Jan 2025",
  bullets: [
    "Implemented a research paper on background-authenticity detection using CNNs and classical feature extraction",
    "Trained a real-vs-fake background classifier and converted it to TFLite for deployment",
    "Built a React + Vite + TypeScript frontend for real-time in-browser inference, integrating YOLO and MediaPipe",
    "Packaged the full application for distribution with Inno Setup",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/Kapil-Mulay-1421/virtual_background_detection" },
    {
      label: "Certificate",
      href: "https://drive.google.com/file/d/11Y1GtzOoJcDIVWGvtTtiUKAgBxrLgoW-/view?usp=sharing",
    },
  ],
};

const skills: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["C/C++", "Python", "JavaScript", "TypeScript", "PHP", "Solidity", "Verilog HDL"],
  },
  {
    title: "Web & Backend",
    items: ["Next.js", "React", "FastAPI", "Laravel", "Node.js", "REST & MQTT", "Prisma", "MongoDB", "MySQL"],
  },
  {
    title: "AI / ML",
    items: ["TensorFlow", "PyTorch", "GANs", "Computer Vision", "YOLO & MediaPipe"],
  },
  {
    title: "Systems & Embedded",
    items: ["RTL Design", "GTKWave", "ESP32", "ROS2", "Computer Architecture", "Control Theory"],
  },
];

const leadership = [
  {
    role: "Assistant Internship Coordinator (SDE)",
    org: "Career Development & Placement Cell, IIT Ropar",
    period: "May 2026 — Present",
  },
  {
    role: "Deputy Contingent Lead",
    org: "Inter IIT Tech Meet 15.0",
    period: "May 2026 — Present",
  },
  {
    role: "Coordinator, AI Club & Software Community",
    org: "Board of Science and Technology, IIT Ropar",
    period: "May 2025 — May 2026",
  },
  {
    role: "UG Mentor",
    org: "ISMP, IIT Ropar",
    period: "May 2025 — May 2026",
  },
];

const achievements = [
  {
    title: "Top 7% Merit",
    org: "IIT Ropar",
    period: "2025",
    note: "Awarded in the 2nd and 3rd semesters.",
  },
  {
    title: "Inter IIT 14.0",
    org: "IIT Patna",
    period: "2025",
    note: "10th and 11th place, ISRO (AI) and Adobe problem statements. Represented IIT Ropar at the Engineer's Conclave.",
  },
  {
    title: "Technoxian 2025",
    org: "Noida",
    period: "2025",
    note: "Represented IIT Ropar in the maze-solver challenge, Noida Stadium.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function PortfolioPage() {
  const [showScrollHint, setShowScrollHint] = useState(false);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const footerRef = useRef<HTMLElement | null>(null);

  const setSectionRef = (index: number) => (node: HTMLElement | null) => {
    sectionRefs.current[index] = node;
  };

  const getCurrentSectionIndex = () => {
    const viewportTop = 140;

    for (let index = 0; index < sectionRefs.current.length; index += 1) {
      const section = sectionRefs.current[index];
      if (!section) continue;

      const rect = section.getBoundingClientRect();
      if (rect.top <= viewportTop && rect.bottom > viewportTop) {
        return index;
      }
    }

    for (let index = 0; index < sectionRefs.current.length; index += 1) {
      const section = sectionRefs.current[index];
      if (!section) continue;

      const rect = section.getBoundingClientRect();
      if (rect.top >= 0) {
        return index;
      }
    }

    return sectionRefs.current.length - 1;
  };

  const handleScrollHintClick = () => {
    const currentSectionIndex = getCurrentSectionIndex();
    const nextSectionIndex = currentSectionIndex + 1;

    if (nextSectionIndex === 5) {
      footerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const nextSection = sectionRefs.current[nextSectionIndex];
    if (!nextSection) {
      footerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const topOffset = 96;
    const elementPosition = nextSection.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - topOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  useEffect(() => {
    const updateHintVisibility = () => {
      const scrollable = document.documentElement.scrollHeight > window.innerHeight + 1;
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      setShowScrollHint(scrollable && !nearBottom);
    };

    updateHintVisibility();
    window.addEventListener("scroll", updateHintVisibility, { passive: true });
    window.addEventListener("resize", updateHintVisibility);

    return () => {
      window.removeEventListener("scroll", updateHintVisibility);
      window.removeEventListener("resize", updateHintVisibility);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {showScrollHint && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={handleScrollHintClick}
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 cursor-pointer"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/90 px-3.5 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.32)] backdrop-blur dark:border-white/50 dark:bg-white/95">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/90 dark:text-black">
              Scroll
            </span>
            <ChevronDown className="h-4 w-4 text-teal" />
          </div>
        </motion.button>
      )}

      <div className="mx-auto max-w-5xl px-6 md:px-10 py-16 md:py-24">
        {/* Hero */}
        <section
          ref={setSectionRef(0)}
          className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center"
        >
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground"
            >
              Software Engineer · Systems & Embedded Design
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-balance"
            >
              Kapil Mulay
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-xl md:text-2xl font-medium text-foreground/90 text-balance"
            >
              I build software across several layers, from modern ML and full-stack web applications to embedded systems and processor design.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-muted-foreground max-w-xl leading-relaxed"
            >
              I've built a generative AI application, a cloud-native IoT platform, 
              a deployment-ready e-commerce website, and more. I've represented IIT Ropar 
              at Inter IIT Tech Meet and Technoxian's National Micromouse Challenge. 
              Most recently, I designed a 5-stage pipelined MIPS32 processor — 
              the layer just beneath the software I usually write.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href="https://github.com/Kapil-Mulay-1421/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
              </a>
              <a
                href="/kapil-mulay-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/kapil-mulay-b16335245/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Button>
              </a>
              <a href="mailto:krmulay@gmail.com">
                <Button variant="outline">
                  <Mail className="mr-2 h-4 w-4" /> Contact me
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6"
            >
              <Waveform className="h-10 w-full max-w-sm text-muted-foreground" />
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-64 md:w-72"
          >
            <div className="relative rounded-3xl border border-border bg-card p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
              <img
                src="/me_large.png"
                alt="Kapil Mulay"
                className="w-full aspect-square rounded-2xl object-cover"
              />
              {/* corner pin ticks — a small nod to a component on a board */}
              <span className="absolute -top-1 left-8 h-3 w-px bg-primary/60" />
              <span className="absolute -top-1 right-8 h-3 w-px bg-teal/60" />
              <span className="absolute -bottom-1 left-8 h-3 w-px bg-primary/60" />
              <span className="absolute -bottom-1 right-8 h-3 w-px bg-teal/60" />
              <span className="absolute top-8 -left-1 w-3 h-px bg-primary/60" />
              <span className="absolute bottom-8 -left-1 w-3 h-px bg-teal/60" />
              <span className="absolute top-8 -right-1 w-3 h-px bg-primary/60" />
              <span className="absolute bottom-8 -right-1 w-3 h-px bg-teal/60" />
            </div>
          </motion.div>
        </section>

        {/* Experience */}
        <motion.section {...fadeUp} ref={setSectionRef(1)} className="mt-28 md:mt-36">
          <NodeEyebrow tone="teal">Experience</NodeEyebrow>
          <div className="mt-8 relative pl-6 border-l border-border">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-teal" />
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide">
              {experience.period}
            </p>
            <h3 className="font-display text-xl md:text-2xl font-semibold mt-1">
              {experience.role}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {experience.org} · {experience.mentor}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/85">
              {experience.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-teal shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-4">
              {experience.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section {...fadeUp} ref={setSectionRef(2)} className="mt-28 md:mt-36">
          <NodeEyebrow tone="copper">Projects</NodeEyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4">
            Things I&apos;ve built
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
              >
                <Card
                  className={`h-full transition-colors group ${domainTone[project.domain].border}`}
                >
                  <CardContent className="p-6 md:p-7 space-y-4 h-full flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span
                          className={`font-mono text-[11px] tracking-[0.15em] uppercase ${domainTone[project.domain].text}`}
                        >
                          {getProjectBadgeLabel(project.title, project.domain)}
                        </span>
                        <h3 className="font-display text-lg md:text-xl font-semibold mt-1">
                          {project.title}
                        </h3>
                      </div>
                      {project.period && (
                        <span className="font-mono text-xs text-muted-foreground whitespace-nowrap pt-1">
                          {project.period}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <ul className="space-y-1.5 text-sm text-foreground/85">
                      {project.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span
                            className={`mt-1.5 h-1 w-1 rounded-full shrink-0 ${domainTone[project.domain].bg}`}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex-1" />

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-1">
                      {project.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                        >
                          {l.label} <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section {...fadeUp} ref={setSectionRef(3)} className="mt-28 md:mt-36">
          <NodeEyebrow tone="copper">Skills</NodeEyebrow>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <Card key={skill.title}>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-display font-semibold">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Leadership & Achievements */}
        <motion.section {...fadeUp} ref={setSectionRef(4)} className="mt-28 md:mt-36 grid md:grid-cols-2 gap-12">
          <div>
            <NodeEyebrow tone="teal">Leadership</NodeEyebrow>
            <div className="mt-8 relative pl-6 border-l border-border space-y-7">
              {leadership.map((item) => (
                <div key={item.role} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-teal" />
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide">
                    {item.period}
                  </p>
                  <h4 className="font-medium mt-1">{item.role}</h4>
                  <p className="text-sm text-muted-foreground">{item.org}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <NodeEyebrow tone="copper">Achievements</NodeEyebrow>
            <div className="mt-8 relative pl-6 border-l border-border space-y-7">
              {achievements.map((item) => (
                <div key={item.title} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide">
                    {item.period}
                  </p>
                  <h4 className="font-medium mt-1">
                    {item.title} <span className="text-muted-foreground font-normal">— {item.org}</span>
                  </h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.note}</p>
                </div>
              ))}
              <div className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide">
                  2024 — 2028
                </p>
                <h4 className="font-medium mt-1 flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-primary" /> 9.16 CGPA
                </h4>
                <p className="text-sm text-muted-foreground mt-0.5">
                  B.Tech, Engineering Physics — IIT Ropar
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer
          ref={footerRef}
          className="mt-28 md:mt-36 pt-10 border-t border-border text-sm text-muted-foreground flex flex-col md:flex-row justify-between gap-4"
        >
          <p>© 2026 Kapil Mulay. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              className="hover:text-primary transition-colors"
              href="https://github.com/Kapil-Mulay-1421"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="https://www.linkedin.com/in/kapil-mulay-b16335245/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="mailto:2024epb1266@iitrpr.ac.in"
            >
              Email
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
