import { motion } from 'framer-motion';

export default function SkillBadge({ label, index = 0 }: { label: string; index?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        transition: {
          delay: index * 0.05,
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="m-1 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground/90 transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
    >
      {label}
    </motion.span>
  );
}