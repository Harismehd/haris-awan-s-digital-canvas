import { motion } from "framer-motion";
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
              I'm a passionate Full Stack Developer and UI Designer based in Pakistan, 
              crafting beautiful digital experiences that blend aesthetics with functionality. 
              With expertise in modern web technologies, I turn ideas into polished, 
              high-performance applications.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              As a freelancer, I've worked with startups and businesses worldwide, 
              delivering pixel-perfect interfaces and robust backend solutions. 
              I believe great design is invisible — it just works.
            </p>
            <div className="flex gap-8 justify-center md:justify-start">
              {[
                { value: "3+", label: "Years Exp." },
                { value: "50+", label: "Projects" },
                { value: "30+", label: "Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
