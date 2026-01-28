import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useProfile } from "@/hooks/use-portfolio";
import Typewriter from "typewriter-effect";

export function Hero() {
  const { data: profile } = useProfile();

  if (!profile) return null;

  const socialLinks = profile.socialLinks as { github?: string; linkedin?: string; email?: string };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 lg:px-24 relative overflow-hidden bg-background">
      <div className="container mx-auto pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="font-mono text-primary text-base md:text-lg mb-2 block">Hi, my name is</span>
          <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-2 tracking-tight">
            {profile.name}.
          </h1>
          <div className="text-3xl md:text-6xl font-bold text-muted-foreground mb-6 min-h-[1.2em] flex items-center leading-tight">
            <Typewriter
              options={{
                strings: ["Software Engineer", "Data Engineer", "AI/ML Engineer"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
                wrapperClassName: "text-muted-foreground/80",
                cursorClassName: "text-primary ml-2"
              }}
            />
          </div>
          
          <div className="text-base md:text-xl text-muted-foreground/90 max-w-2xl mb-8 leading-relaxed space-y-3 font-medium">
            <p>
              I build production-grade scalable SaaS platforms and ML system. Backend, Data, and AI engineer specializing in end-to-end pipelines from ingestion to deployment. I turn research-grade ideas into robust APIs, workflows, and user-facing applications that perform in the real world.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-16 mb-8">
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-100}
              className="px-10 py-5 bg-transparent border border-primary text-primary font-mono text-lg rounded hover:bg-primary/10 transition-all duration-300 cursor-pointer group"
            >
              Check out my resume!
            </ScrollLink>
            
            <div className="flex items-center gap-6">
              {socialLinks.github && (
                <a href="https://github.com/vinod-vk17" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
                  <Github className="w-8 h-8" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
                  <Linkedin className="w-8 h-8" />
                </a>
              )}
              {socialLinks.email && (
                <a href="mailto:vinodkumar.prakash17@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
                  <Mail className="w-8 h-8" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Side Links */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="fixed bottom-0 left-10 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-muted-foreground/30"
      >
        <div className="flex flex-col gap-6 mb-4">
          <a 
            href="https://github.com/vinod-vk17" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/vinod-kumar-prakash/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
      {/* Side Email */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="fixed bottom-0 right-10 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-muted-foreground/30"
      >
        <a 
          href="mailto:vinodkumar.prakash@stonybrook.edu" 
          className="text-xs font-mono text-muted-foreground hover:text-primary transition-all tracking-widest hover:-translate-y-1"
          style={{ writingMode: 'vertical-rl' }}
        >
          vinodkumar.prakash@stonybrook.edu
        </a>
      </motion.div>
    </section>
  );
}
