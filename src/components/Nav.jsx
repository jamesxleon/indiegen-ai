import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import NavItem from './NavItem.jsx';

export default function Nav({ navItems, activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <AiOutlineClose className="w-6 h-6 text-graphite" />
        ) : (
          <AiOutlineMenu className="w-6 h-6 text-graphite" />
        )}
      </button>

      {/* Left rail navigation */}
      <motion.nav
        className={`fixed left-0 top-0 h-full w-16 flex flex-col items-center py-8 gap-8 z-40 bg-offwhite/80 backdrop-blur-sm transition-all duration-300 md:translate-x-0 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        initial={{ x: 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-offwhite to-offwhite/50 w-16"></div>
        <div className="relative z-10 flex flex-col items-center h-full justify-center">
          <ul className="flex flex-col items-center">
            {navItems.map(item => (
              <NavItem
                key={item.id}
                href={`#${item.id}`}
                isActive={activeSection === item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </NavItem>
            ))}
          </ul>
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-inti/30 to-transparent"></div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
