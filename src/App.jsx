import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import Hero from './components/Hero.jsx';
import Nav from './components/Nav.jsx';
import Craft from './components/Craft.jsx';
import Projects from './components/Projects.jsx';
import Roots from './components/Roots.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  
  // Mark page as loaded after initial render
  useEffect(() => {
    setPageLoaded(true);
  }, []);

  // Handle scroll to update active section and show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      const sections = ['home', 'craft', 'projects', 'roots', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to section function with smooth behavior
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add some offset for better positioning
      const yOffset = -50;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'craft', label: 'Craft' },
    { id: 'projects', label: 'Projects' },
    { id: 'roots', label: 'Roots' },
    { id: 'contact', label: 'Contact' },
  ];

  // Enhanced project data with more detailed information
  const projects = [
    {
      title: 'AI-Powered Translation',
      description: 'A machine learning platform that preserves cultural context in indigenous language translation, built with React and TensorFlow.',
      tags: ['Featured', 'React', 'TensorFlow', 'NLP'],
      image: '/project1.jpg',
      link: '#',
      github: 'https://github.com/example/project1',
    },
    {
      title: 'Cultural Heritage Archive',
      description: 'Digital preservation system for Kichwa cultural heritage using blockchain for authentication and provenance tracking.',
      tags: ['Next.js', 'Blockchain', 'AWS'],
      image: '/project2.jpg',
      link: '#',
      github: 'https://github.com/example/project2',
    },
    {
      title: 'Smart Agriculture Platform',
      description: 'IoT platform combining traditional farming knowledge with modern sensing technology to optimize sustainable farming practices.',
      tags: ['TypeScript', 'IoT', 'PostgreSQL'],
      image: '/project3.jpg',
      link: '#',
      github: 'https://github.com/example/project3',
    },
  ];

  // Enhanced skills data
  const skills = [
    { 
      name: 'Frontend', 
      icon: '🎨',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] 
    },
    { 
      name: 'Backend', 
      icon: '⚙️',
      items: ['Node.js', 'Express', 'Python', 'Django', 'GraphQL'] 
    },
    { 
      name: 'AI & ML', 
      icon: '🧠',
      items: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'LLMs'] 
    },
    { 
      name: 'DevOps', 
      icon: '🚀',
      items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform'] 
    },
  ];

  // Social media links
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/jamesleon', label: 'GitHub' },
    { icon: <FiTwitter />, url: 'https://twitter.com/jamesleon', label: 'Twitter' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/jamesleon', label: 'LinkedIn' },
  ];

  return (
    <div className="bg-offwhite text-graphite font-sans selection:bg-neon-400/30 min-h-screen relative">
      {/* Initial page load animation */}
      <AnimatePresence>
        {!pageLoaded && (
          <motion.div 
            className="fixed inset-0 bg-midnight-400 z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-display text-neon-400 flex items-center"
            >
              indiegen<span className="text-inti-400">.ai</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Navigation */}
      <Nav navItems={navItems} activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Main content with responsive padding */}
      <div className="md:pl-20 transition-all duration-300">
        {/* Page sections */}
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Craft skills={skills} />
          <Projects projects={projects} />
          <Roots />
          <Contact />
        </motion.div>
        
        {/* Enhanced footer with social links */}
        <footer className="py-12 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Top section with links */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
              {/* Logo */}
              <div className="font-display text-2xl">
                <span className="gradient-text-neon">indiegen</span>
                <span className="gradient-text-inti">.ai</span>
              </div>
              
              {/* Social links */}
              <div className="flex gap-6">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/90 text-graphite-300 hover:text-neon-500 hover:shadow-neon-glow transition-all duration-300"
                    aria-label={link.label}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Divider */}
            <div className="maki-divider opacity-30 my-8"></div>
            
            {/* Copyright and credits */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-graphite-200/60">
              <div>
                &copy; {new Date().getFullYear()} indiegen.ai — All rights reserved.
              </div>
              <div className="mt-3 md:mt-0">
                Crafted with <span className="text-magenta-400">&hearts;</span> & <span className="text-neon-400">code</span> in Ecuador
              </div>
            </div>
          </div>
          
          {/* Background decorative element */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-400/20 to-transparent"></div>
        </footer>
      </div>

      {/* Scroll to top button with enhanced animation */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3.5 rounded-full glass-effect backdrop-blur-md text-graphite-300 hover:text-neon-500 hover:shadow-neon-glow-lg border border-white/20 hover:border-neon-400/30 transition-all duration-200 z-40"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
