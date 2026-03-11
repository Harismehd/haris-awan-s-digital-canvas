import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory, Stripe payments, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "from-neon-cyan/20 to-neon-purple/20",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization, role-based access, and custom reporting.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "D3.js"],
    color: "from-neon-purple/20 to-neon-cyan/20",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app powered by OpenAI with smart suggestions and conversation history.",
    tags: ["React", "OpenAI", "Socket.io", "Redis"],
    color: "from-neon-cyan/20 to-neon-purple/20",
  },
  {
    title: "Portfolio Generator",
    description: "Drag-and-drop portfolio builder with custom themes, SEO optimization, and one-click deploy.",
    tags: ["Vue.js", "Firebase", "Tailwind", "Vercel"],
    color: "from-neon-purple/20 to-neon-cyan/20",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15 }}
    whileHover={{ scale: 1.03, rotateY: 2 }}
    className="glass-card p-6 md:p-8 min-w-[320px] md:min-w-[400px] shrink-0 group cursor-pointer"
    style={{ perspective: "1000px" }}
  >
    <div className={`h-48 rounded-lg bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center`}>
      <span className="text-4xl font-bold text-gradient opacity-30 group-hover:opacity-60 transition-opacity">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
      {project.title}
    </h3>
    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground border border-border"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="flex gap-3">
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm hover:bg-primary/20 transition-colors">
        <ExternalLink size={14} /> Live Demo
      </button>
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm hover:text-foreground transition-colors">
        <Github size={14} /> GitHub
      </button>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        <p className="text-center text-muted-foreground text-sm mb-12">
          ← Drag or scroll horizontally →
        </p>
      </div>

      <motion.div
        ref={scrollRef}
        className="flex gap-6 px-6 md:px-20 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={scrollRef}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
