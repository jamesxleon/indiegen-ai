import { motion } from 'framer-motion';

export default function SectionTitle({ children, subtitle, className = '' }) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <motion.h2
        className="text-4xl md:text-6xl font-display mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-xl text-graphite/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
