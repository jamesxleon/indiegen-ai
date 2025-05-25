'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { navItems } from '@/config/site';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  // Handle navigation click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu
    
    if (href.startsWith('/#')) {
      // Section link - handle differently based on current page
      if (pathname === '/') {
        // Already on home page, scroll to section
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState({}, '', href);
        }
      } else {
        // On different page, navigate to home page with hash
        router.push(href);
      }
    } else {
      // Regular page navigation
      router.push(href);
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
            href="/"
            className="text-2xl font-bold flex items-center"
            onClick={(e) => handleNavClick(e, '/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`mr-2 ${isScrolled ? 'text-white' : 'text-primary'}`}>J</span>
            <span className={`${isScrolled ? 'text-white' : 'text-primary'}`}>ames</span>
          </motion.a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                  (pathname === '/' && activeSection === item.href) || pathname === item.href
                    ? 'text-primary font-semibold' 
                    : isScrolled 
                      ? 'text-white hover:text-primary'
                      : 'text-foreground/80 hover:text-primary'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {((pathname === '/' && activeSection === item.href) || pathname === item.href) && (
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
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
              href="/resume"
              onClick={(e) => handleNavClick(e, '/resume')}
              className={`ml-4 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md ${
                pathname === '/resume'
                  ? 'bg-primary text-primary-foreground shadow-primary/25'
                  : 'bg-primary/90 text-primary-foreground hover:bg-primary hover:shadow-lg hover:shadow-primary/25'
              }`}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </div>
          
          {/* Mobile menu button */}
          <motion.button 
            className={`md:hidden p-2 ${isScrolled ? 'text-white' : 'text-foreground'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-border/50 shadow-lg"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2 text-lg font-medium transition-colors rounded-lg ${
                      (pathname === '/' && activeSection === item.href) || pathname === item.href
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                {/* Resume Button for Mobile */}
                <motion.a
                  href="/resume"
                  onClick={(e) => handleNavClick(e, '/resume')}
                  className={`px-4 py-2 text-lg font-medium rounded-lg transition-colors ${
                    pathname === '/resume'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-primary/90 text-primary-foreground hover:bg-primary'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
