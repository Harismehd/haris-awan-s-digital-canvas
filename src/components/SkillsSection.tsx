import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "Node.js", "PostgreSQL", "FastAPI", "Python",
  "Tailwind", "WebSocket", "Supabase", "Machine Learning", "AI/ML", "WebRTC",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Tech <span className="text-gradient">Stack</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Technologies I use to ship production-grade systems.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="glass-card px-5 py-6 text-center cursor-default group hover:border-primary/40 transition-all duration-300 hover:glow-cyan"
            >
              <span className="text-sm md:text-base font-medium text-foreground group-hover:text-gradient transition-all">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
