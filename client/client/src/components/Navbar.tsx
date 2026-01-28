import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer group relative flex items-center justify-center w-12 h-12"
        >
          <div className="absolute inset-0 border-2 border-primary/20 rounded-full" />
          <div 
            className="absolute inset-0 border-2 border-primary rounded-full" 
            style={{ 
              clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 70%)',
              transform: 'rotate(-10deg)'
            }} 
          />
          <span className="text-2xl font-bold text-primary relative z-10">V</span>
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-sm font-mono text-muted-foreground hover:text-primary cursor-pointer transition-colors"
              activeClass="!text-primary font-bold text-glow"
            >
              <span className="text-primary/60 mr-1">0{i + 1}.</span>
              {link.name}
            </ScrollLink>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 text-sm font-mono border border-primary text-primary rounded hover:bg-primary/10 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link, i) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-mono text-muted-foreground hover:text-primary cursor-pointer"
                >
                  <span className="text-primary mr-2">0{i + 1}.</span>
                  {link.name}
                </ScrollLink>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                className="mt-4 px-4 py-3 text-center text-sm font-mono border border-primary text-primary rounded hover:bg-primary/10"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
