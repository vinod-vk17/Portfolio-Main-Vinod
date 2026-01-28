import { Section } from "./Section";
import { useSkills } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { 
  Brain, 
  Bot, 
  Database, 
  Server, 
  ShieldAlert, 
  FileText 
} from "lucide-react";

const iconMap: Record<string, any> = {
  'Core AI & Machine Learning Engineering': Brain,
  'GenAI, LLM Systems & Intelligent Agents': Bot,
  'Data Engineering & Distributed Pipelines': Database,
  'Backend Engineering & Distributed Systems': Server,
  'Intelligent Risk & Compliance (BFSI)': ShieldAlert,
  'NLP & Document Intelligence': FileText,
};

const descriptionMap: Record<string, string> = {
  'Core AI & Machine Learning Engineering': 'Architecting scalable, production‑grade ML systems that power classification, forecasting, and real‑time decision intelligence.',
  'GenAI, LLM Systems & Intelligent Agents': 'Delivering enterprise‑grade LLM architectures, retrieval‑augmented systems, and autonomous agents that streamline workflows.',
  'Data Engineering & Distributed Pipelines': 'Building mission‑critical data platforms that support analytics, ML, and operational workloads at enterprise scale.',
  'Backend Engineering & Distributed Systems': 'Engineering high‑throughput, fault‑tolerant backend systems that power regulated, latency‑sensitive workloads.',
  'Intelligent Risk & Compliance (BFSI)': 'Designing AI‑driven systems that enhance credit decisions, fraud prevention, and operational risk management.',
  'NLP & Document Intelligence': 'Transforming unstructured enterprise text into structured, decision‑ready intelligence for global platforms.',
};

export function Skills() {
  const { data: skills } = useSkills();

  if (!skills) return null;

  return (
    <Section id="skills" number="04" title="Technical Skills">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, index) => {
          const Icon = iconMap[category.category] || Brain;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-white/5 rounded-xl p-8 hover:border-primary/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {category.category}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {descriptionMap[category.category]}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-muted-foreground group-hover:text-primary transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
