import { motion } from 'framer-motion';

export type ExperienceItemProps = {
  period: string;
  title: string;
  company?: string;
  description: string;
};

export default function ExperienceItem({ period, title, company, description }: ExperienceItemProps) {
  return (
    <motion.div
      variants={{ 
        hidden: { opacity: 0, y: 40 }, 
        show: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        } 
      }}
      className="group mb-8 rounded-2xl border border-border/50 bg-card/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between print-experience-header">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary print-date">
            {period}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary print-position">
          {title}
        </h3>
        
        {company && (
          <h4 className="text-lg font-semibold text-primary/80 print-company">
            {company}
          </h4>
        )}
        
        <p className="mt-3 leading-relaxed text-foreground/80 print-description">
          {description}
        </p>
      </div>
    </motion.div>
  );
}