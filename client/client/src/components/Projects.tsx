import { useState } from "react";
import { Section } from "./Section";
import { useProjects } from "@/hooks/use-portfolio";
import { Github, ExternalLink, Folder, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Projects() {
  const { data: projects } = useProjects();
  const [showMore, setShowMore] = useState(false);

  if (!projects) return null;

  const displayedProjects = showMore ? projects : projects.slice(0, 6);

  return (
    <Section id="projects" number="03" title="Some Things I've Built">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 flex flex-col"
            >
              <div className="flex justify-between items-center mb-6">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-4">
                  {project.githubLink && project.githubLink !== "#" && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.link && project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <div className="text-muted-foreground mb-6 text-sm leading-relaxed flex-grow">
                {project.description}
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.techStack?.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-muted-foreground/80">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {projects.length > 6 && (
        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowMore(!showMore)}
            className="font-mono text-sm hover:bg-primary/10 transition-all group"
          >
            {showMore ? (
              <>
                Show Less <ChevronUp className="ml-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </Button>
        </div>
      )}
    </Section>
  );
}
