'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { navItems } from '@/config/site';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const router = useRouter();

  // Handle scroll effect for navbar
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 10);
    });
  }, [scrollY]);

  // Handle active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      document.querySelectorAll('section[id]').forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Smooth scroll to section
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL without page reload
      window.history.pushState({}, '', href);
    }
  };

  // Background animation
  const backgroundOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 0.9]
  );

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
      style={{
        background: isScrolled ? 'rgba(10, 0, 32, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#hero" 
            className="text-2xl font-bold text-neon flex items-center"
            onClick={(e) => scrollToSection(e, '#hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">J</span>
            <span className={`${isScrolled ? 'text-white' : 'text-graphite'}`}>ames</span>
          </motion.a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                  activeSection === item.href 
                    ? 'text-neon-cyan font-semibold' 
                    : isScrolled 
                      ? 'text-white hover:text-neon-cyan'
                      : 'text-violet-900 hover:text-neon-cyan'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-neon"
                    layoutId="nav-underline"
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
              </motion.a>
            ))}
            
            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-neon-cyan text-violet-900 font-bold rounded-md text-sm hover:bg-neon-cyan/90 transition-colors shadow-md hover:shadow-neon-cyan/30"
              whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0, 234, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </div>
          
          {/* Mobile menu button */}
          <motion.button 
            className={`md:hidden p-2 ${isScrolled ? 'text-white' : 'text-violet-900'}`}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu (to be implemented) */}
      {/* <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} /> */}
    </motion.nav>
  );
}
