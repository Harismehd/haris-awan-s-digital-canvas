import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = ["Full-Stack Developer", "SaaS Architect", "Real-Time Systems Engineer", "Exploring AI & ML"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let charIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const animateText = () => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex));
        charIndex++;
        timeoutId = setTimeout(animateText, 80);
      } else {
        // Hold the text for 3 seconds, then transition
        timeoutId = setTimeout(() => {
          charIndex = currentRole.length;
          const deleteText = () => {
            if (charIndex > 0) {
              charIndex--;
              setDisplayText(currentRole.substring(0, charIndex));
              timeoutId = setTimeout(deleteText, 40);
            } else {
              setRoleIndex((prev) => (prev + 1) % roles.length);
            }
          };
          deleteText();
        }, 3000);
      }
    };

    animateText();
    return () => clearTimeout(timeoutId);
  }, [roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative section-padding">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-mono text-sm md:text-base mb-4 tracking-widest"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="text-gradient">Haris Awan</span>
        </motion.h1>

        {/* Advanced Animated Text Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-xl md:text-2xl mb-10 h-12 flex items-center justify-center"
        >
          <div className="relative inline-block">
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 -z-10 blur-xl"
              animate={{
                background: [
                  "linear-gradient(90deg, #00d4ff 0%, #0066ff 100%)",
                  "linear-gradient(90deg, #0066ff 0%, #a855f7 100%)",
                  "linear-gradient(90deg, #a855f7 0%, #00d4ff 100%)",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ opacity: 0.3 }}
            />

            {/* Main text with shimmer effect */}
            <motion.span
              className="font-mono text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
              animate={{
                backgroundPosition: ["0% center", "200% center"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              {displayText}
            </motion.span>

            {/* Advanced cursor with glow */}
            <motion.span
              className="ml-1 inline-block relative"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              <span className="text-cyan-400 font-bold text-2xl md:text-3xl">▎</span>
              <motion.div
                className="absolute inset-0 rounded-full blur-md"
                style={{
                  background: "radial-gradient(circle, rgba(0, 212, 255, 0.4), transparent)",
                  width: "30px",
                  height: "30px",
                  left: "-5px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            </motion.span>

            {/* Particle effects on role change */}
            {displayText.length === roles[roleIndex].length && (
              <>
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full pointer-events-none"
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                    }}
                    animate={{
                      x: Math.cos((i / 8) * Math.PI * 2) * 60,
                      y: Math.sin((i / 8) * Math.PI * 2) * 60,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </>
            )}
          </div>
        </motion.div>

        {/* Role indicator dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex gap-2 justify-center mb-8"
        >
          {roles.map((_, i) => (
            <motion.div
              key={i}
              className={`h-1.5 rounded-full ${
                i === roleIndex ? "bg-cyan-400" : "bg-muted-foreground/30"
              }`}
              animate={{
                width: i === roleIndex ? 24 : 8,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed mb-10"
        >
          Full-stack Developer building production-grade SaaS platforms, real-time
          systems, and AI-powered applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="glow-btn bg-primary text-primary-foreground px-7 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02]"
          >
            Explore Work
          </a>
          <a
            href="#contact"
            className="glass-card px-7 py-3 rounded-lg font-medium text-foreground hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] text-center"
          >
            Contact Me
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
