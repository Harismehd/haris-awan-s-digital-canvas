import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Plus } from "lucide-react";

type Project = {
  title: string;
  tagline: string;
  type: string;
  stack: string[];
  github?: string;
  live?: string;
  details: string[];
};

const projects: Project[] = [
  {
    title: "Cognis",
    tagline: "Real-Time ML Diagnostic Engine",
    type: "Logic Lens / Personal",
    stack: ["Python", "LightGBM", "FastAPI", "scikit-learn", "NumPy"],
    live: "https://harisawan246-cognis.hf.space/dashboard",
    github: "https://github.com/Harismehd/Cognis",
    details: [
      "Designed and trained a 6-model LightGBM ensemble (risk, error type, intervention, tone, speak, action) on 87,300 synthetic examples covering 21 Python error categories.",
      "Applied isotonic calibration (CalibratedClassifierCV, 5-fold CV) to the error-type classifier, producing reliable confidence scores that gate tooltip display below 50% threshold.",
      "Engineered a mixed feature pipeline with char n-gram text features, one-hot student archetypes, cursor numerics, and compile-time features from Python's compiler.",
      "Achieved 100% holdout accuracy with 0.0% false positives on critical confusable error pairs.",
      "Served through FastAPI with <200ms end-to-end latency.",
    ],
  },
  {
    title: "Logic Lens",
    tagline: "Socratic Python Learning IDE",
    type: "Personal",
    stack: ["React 18", "Monaco Editor", "Pyodide", "FastAPI"],
    live: "https://harisawan246-logiclens.hf.space/",
    github: "https://github.com/Harismehd/LogicLens",
    details: [
      "Built a browser-based Python IDE with real-time ML-powered error diagnosis.",
      "Every keystroke triggers Cognis and renders personalized Socratic tooltips.",
      "Implemented LENS AGENT autonomous fix operator with character-by-character typing animations.",
      "Integrated Pyodide runtime traceback analysis.",
      "Built escalating hint systems, session tracking, and observability dashboard.",
    ],
  },
  {
    title: "Nexora",
    tagline: "Enterprise Gym Management SaaS",
    type: "Personal",
    stack: ["Node.js", "React", "PostgreSQL", "WebSocket", "Supabase"],
    live: "https://gymflowbyharis.vercel.app/",
    details: [
      "Multi-tenant SaaS architecture with Row-Level Security isolation.",
      "Advanced payment reconciliation and fraud detection systems.",
      "Real-time dashboards via WebSocket.",
      "WhatsApp automation integrations.",
      "Production deployed with live users.",
    ],
  },
  {
    title: "Lens Assist Pro",
    tagline: "Real-Time Remote Support Platform",
    type: "Personal",
    stack: ["Node.js", "WebRTC", "Socket.io", "Tesseract.js"],
    github: "https://github.com/Harismehd/Lens-Assist-Pro",
    details: [
      "Real-time P2P video streaming with ultra-low latency.",
      "WebRTC architecture with Socket.io signaling.",
      "OCR text extraction from live video streams using Tesseract.js.",
    ],
  },
  {
    title: "NexusShield",
    tagline: "Open-Source Cybersecurity Tool",
    type: "Personal",
    stack: ["Full-stack"],
    github: "https://github.com/Harismehd/NexusShield",
    details: [
      "Open-source cybersecurity platform.",
      "Acquired real organic users through community engagement.",
      "Demonstrates practical product-market fit and real-world utility.",
    ],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, layout: { duration: 0.4, ease: "easeInOut" } }}
      className="glass-card p-6 md:p-8 group hover:border-primary/40 hover:glow-cyan transition-all duration-500"
    >
      <motion.button
        layout="position"
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between gap-4"
      >
        <div className="min-w-0">
          <p className="text-[11px] font-mono text-primary tracking-widest uppercase mb-2">
            {String(index + 1).padStart(2, "0")} — {project.type}
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-gradient transition-all">
            {project.title}
          </h3>
          {!open && (
            <p className="text-muted-foreground text-sm mt-2 truncate">
              {project.stack.slice(0, 4).join(" · ")}
            </p>
          )}
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center text-primary"
        >
          <Plus size={16} />
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-6 mt-6 border-t border-glass-border">
              <p className="text-muted-foreground mb-5 text-base">{project.tagline}</p>
              <ul className="space-y-3 mb-6">
                {project.details.map((d, i) => (
                  <li key={i} className="text-muted-foreground text-sm md:text-base leading-relaxed flex gap-3">
                    <span className="text-primary mt-1.5 shrink-0">▹</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm hover:bg-primary/20 transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-foreground text-sm hover:text-primary hover:border-primary/50 border border-border transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        <p className="text-center text-muted-foreground text-sm mb-12">
          Click any card to expand details
        </p>

        <div className="flex flex-col gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
