import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative shrink-0"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/30 glow-cyan">
              <img
                src={profilePhoto}
                alt="Haris Awan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-3 rounded-full border border-primary/10 animate-pulse-glow" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I am a Full-stack developer with a passion for deploying production
              applications, including multi-tenant SaaS and real-time communication
              platforms. I focus on clean architecture and performance, while
              continually striving to enhance my skills in ML and AI.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              My expertise spans across a variety of languages and tools, empowering
              me to ship fast and effectively. I take pride in my ability to work
              independently and deliver high-quality solutions.
            </p>
            <div className="flex gap-8 justify-center md:justify-start mb-8">
              {[
                { value: "6+", label: "Production Apps" },
                { value: "SaaS", label: "Multi-Tenant" },
                { value: "AI/ML", label: "Focus" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <motion.a
              href="https://drive.google.com/file/d/1BMo2TF-vetso1ge91d7CGL9njHhGgrwJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 glow-cyan"
            >
              <FileText className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
