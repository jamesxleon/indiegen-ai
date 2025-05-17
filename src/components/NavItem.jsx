import { motion } from 'framer-motion';

export default function NavItem({ href, children, isActive, onClick, index }) {
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        delay: index ? index * 0.1 : 0,
        duration: 0.3,
      }
    }
  };

  // Dot indicator animation
  const dotVariants = {
    inactive: { 
      scale: 1,
      background: 'rgba(255, 182, 0, 0.5)' 
    },
    active: { 
      scale: 1.3,
      background: 'rgb(0, 234, 255)' 
    },
    hover: { 
      scale: 1.1,
      background: isActive ? 'rgb(0, 234, 255)' : 'rgb(255, 182, 0)'
    },
  };

  // Label animation for tooltip effect
  const labelVariants = {
    hidden: { opacity: 0, x: 10, pointerEvents: 'none' },
    visible: { 
      opacity: 1, 
      x: 0,
      pointerEvents: 'auto',
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.li 
      className="relative"
      variants={itemVariants}
    >
      <div className="group relative flex items-center py-1.5 pl-7 pr-1 -ml-7">
        {/* Dot indicator with animations */}
        <motion.a
          href={href}
          onClick={onClick}
          className="relative z-10 block w-3 h-3 rounded-full"
          initial="inactive"
          animate={isActive ? 'active' : 'inactive'}
          whileHover="hover"
          variants={dotVariants}
          transition={{ duration: 0.2 }}
          aria-current={isActive ? 'page' : undefined}
        >
          {isActive && (
            <motion.div 
              className="absolute inset-0 rounded-full bg-neon-400/30 animate-ping"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
            />
          )}
          
          {/* Accessible text for screen readers */}
          <span className="sr-only">{children}</span>
        </motion.a>
        
        {/* Label tooltip that appears on hover */}
        <motion.div
          className="absolute left-7 pointer-events-none"
          initial="hidden"
          whileHover="visible"
          animate="hidden"
          variants={{}}
        >
          <motion.div 
            className="ml-2 px-3 py-1 rounded-r-md bg-white/90 backdrop-blur-sm shadow-elevation-1 text-xs font-medium text-graphite-300 whitespace-nowrap"
            variants={labelVariants}
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </motion.li>
  );
}
