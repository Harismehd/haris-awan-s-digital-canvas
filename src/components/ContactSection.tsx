import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "nbook0911@gmail.com",
      href: "mailto:nbook0911@gmail.com",
      description: "Drop me an email for collaboration or inquiries",
      color: "from-red-500/20 to-pink-500/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Haris Mehmood",
      href: "https://www.linkedin.com/in/haris-mehmood-b07790335/",
      description: "Connect with me on LinkedIn",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Harismehd",
      href: "https://github.com/Harismehd",
      description: "Check out my projects and contributions",
      color: "from-slate-500/20 to-slate-600/20",
    },
  ];

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Have an exciting project, collaboration opportunity, or just want to chat? I'd love to hear from you! 
            Reach out via email for the quickest response, or connect with me on LinkedIn to stay updated with my latest work and insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map(({ icon: Icon, label, value, href, description, color }, index) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group glass-card p-6 hover:border-primary/50 hover:glow-cyan transition-all duration-500 cursor-pointer bg-gradient-to-br ${color}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {label}
              </h3>
              <p className="text-primary text-sm font-mono mb-3">
                {value}
              </p>
              <p className="text-muted-foreground text-sm">
                {description}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 md:p-12 text-center bg-gradient-to-r from-primary/5 via-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-500"
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to build something <span className="text-gradient">amazing</span>?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Whether you have a groundbreaking SaaS idea, need a full-stack developer, or want to discuss AI/ML applications, 
            I'm always excited to collaborate with talented individuals and teams. Let's make something exceptional together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:nbook0911@gmail.com"
              className="glow-btn bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              <Mail size={18} /> Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/haris-mehmood-b07790335/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-8 py-3 rounded-lg font-semibold text-foreground hover:border-primary/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Linkedin size={18} /> Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
