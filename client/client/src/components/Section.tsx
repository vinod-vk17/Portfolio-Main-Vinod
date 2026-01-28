import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  number?: string;
}

export function Section({ id, title, subtitle, children, className = "", number }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 relative ${className}`}>
      <div className="container mx-auto px-6">
        {title && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold flex items-baseline gap-3">
              {number && <span className="font-mono text-xl md:text-2xl text-primary font-normal">{number}.</span>}
              <span className="text-foreground">{title}</span>
            </h2>
            <div className="h-[1px] bg-white/10 flex-grow max-w-md ml-4" />
          </motion.div>
        )}
        
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground mb-12 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
