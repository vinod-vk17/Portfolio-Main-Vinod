import { useState } from "react";
import { Section } from "./Section";
import { useExperiences } from "@/hooks/use-portfolio";
import { motion, AnimatePresence } from "framer-motion";

export function Experience() {
  const { data: experiences } = useExperiences();
  const [activeTab, setActiveTab] = useState(0);

  if (!experiences || experiences.length === 0) return null;

  return (
    <Section id="experience" number="02" title="Where I've Worked">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 min-h-[400px]">
        {/* Tab List */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-white/10 w-full md:w-64 shrink-0">
          {experiences.map((job, index) => (
            <button
              key={job.id}
              onClick={() => setActiveTab(index)}
              className={`
                px-5 py-4 text-sm font-mono text-left whitespace-nowrap transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:-mb-0 md:-ml-[2px]
                ${activeTab === index 
                  ? "text-primary border-primary bg-primary/5" 
                  : "text-muted-foreground border-transparent hover:text-foreground hover:bg-white/5"
                }
              `}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Panel Content */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-1">
                {experiences[activeTab].title}{" "}
                <span className="text-primary">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-muted-foreground mb-6">
                {experiences[activeTab].duration} | {experiences[activeTab].location}
              </p>
              
              <ul className="space-y-4">
                {experiences[activeTab].description?.split('\n').filter(Boolean).map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5 text-xs">▹</span>
                    <span>{point.trim().replace(/^•\s*/, '')}</span>
                  </li>
                ))}
              </ul>
              
              {/* Skills section removed per user request */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
