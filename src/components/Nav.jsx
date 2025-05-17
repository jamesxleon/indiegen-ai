import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import NavItem from './NavItem.jsx';

export default function Nav({ navItems, activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll to update nav appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu animation variants with 0.5s transition per spec
  const menuVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <>
      {/* Mobile menu button with glow effect on scroll */}
      <motion.button
        className={`fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md transition-all duration-500 ease-in-out md:hidden
          ${scrolled ? 'bg-white/80 shadow-elevation-2' : 'bg-white/60'}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FiX className="w-5 h-5 text-primary-300" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FiMenu className="w-5 h-5 text-primary-300" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Left rail navigation - exactly 60px per spec */}
      <motion.nav
        className={`left-rail w-left-rail bg-canvas/80 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
        initial={{ x: 0 }}
      >
        {/* Stylish semi-transparent backdrop with glass effect */}
        <div className="absolute inset-0 glass-effect backdrop-blur-md border-r border-white/10 w-left-rail"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-accent-1-500/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-accent-2-500/5 to-transparent"></div>
        
        {/* Navigation content */}
        <div className="relative z-10 flex flex-col items-center h-full justify-center py-4">
          {/* Logo or small brand element at top */}
          <div className="absolute top-6 w-8 h-8">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-accent-1-400/20 to-accent-1-600/30 flex items-center justify-center">
              <span className="text-xs font-bold text-accent-1-500">JL</span>
            </div>
          </div>
          
          {/* Nav items with stagger animation */}
          <motion.ul 
            className="flex flex-col items-center gap-8" // Using 8px rhythm
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item, i) => (
              <NavItem
                key={item.id}
                href={`#${item.id}`}
                isActive={activeSection === item.id}
                index={i}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </NavItem>
            ))}
          </motion.ul>
          
          {/* Gold "Maki" chevron divider at bottom */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-8">
            <div className="w-full h-4 bg-maki-chevron opacity-70"></div>
          </div>
          
          {/* Decorative line with glowing effect */}
          <div className="absolute inset-y-0 left-1/2 w-px">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-accent-1-400/30 to-transparent opacity-60"></div>
            <div className="absolute top-1/2 left-0 w-1 h-1 rounded-full bg-accent-1-400 transform -translate-x-1/2 shadow-accent-1-glow"></div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay with improved backdrop blur */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // Updated to 0.5s per spec
            className="fixed inset-0 bg-primary-400/10 backdrop-blur-md z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
