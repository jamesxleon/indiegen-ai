import { motion } from 'framer-motion';

export type EducationItemProps = {
  degree: string;
  institution: string;
  period: string;
  description?: string;
};

export default function EducationItem({ degree, institution, period, description }: EducationItemProps) {
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
        <span className="inline-flex w-fit items-center rounded-full bg-secondary/20 px-3 py-1 text-sm font-medium text-secondary-foreground">
          {period}
        </span>
        
        <h3 className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
          {degree}
        </h3>
        
        <h4 className="text-lg font-semibold text-primary/80">
          {institution}
        </h4>
        
        {description && (
          <p className="mt-3 leading-relaxed text-foreground/80">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}