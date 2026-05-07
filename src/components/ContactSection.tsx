import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind? Let's build something exceptional together.
            </p>
            <a href="mailto:haris@example.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} className="text-primary" />
              <span>haris@example.com</span>
            </a>
            <a href="https://github.com/Harismehd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} className="text-primary" />
              <span>github.com/Harismehd</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} className="text-primary" />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="md:col-span-3 flex flex-col gap-4"
          >
            {(["name", "email", "message"] as const).map((field) => (
              <div key={field}>
                {field === "message" ? (
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "name" ? "Your Name" : "Your Email"}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                )}
                {errors[field] && (
                  <p className="text-destructive text-xs mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="glow-btn bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
