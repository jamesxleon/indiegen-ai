import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import Hero from './components/Hero.jsx';
import Nav from './components/Nav.jsx';
import Craft from './components/Craft.jsx';
import Projects from './components/Projects.jsx';
import Roots from './components/Roots.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

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
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'craft', label: 'Craft' },
    { id: 'projects', label: 'Projects' },
    { id: 'roots', label: 'Roots' },
    { id: 'contact', label: 'Contact' },
  ];

  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of the project and the technologies used.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '/project1.jpg',
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'Another project with a different tech stack and purpose.',
      tags: ['Next.js', 'Tailwind', 'GraphQL'],
      image: '/project2.jpg',
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'A third project showing diverse skills and experience.',
      tags: ['TypeScript', 'Express', 'PostgreSQL'],
      image: '/project3.jpg',
      link: '#',
    },
  ];

  const skills = [
    { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django'] },
    { name: 'Design', items: ['Figma', 'Adobe XD', 'UI/UX', 'Motion Design'] },
    { name: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'] },
  ];

  return (
    <div className="bg-offwhite text-graphite font-sans selection:bg-neon/30 min-h-screen relative">
      <Nav navItems={navItems} activeSection={activeSection} scrollToSection={scrollToSection} />

      <div className="md:pl-16 transition-all duration-300">
        <Hero />
        <Craft skills={skills} />
        <Projects projects={projects} />
        <Roots />
        <Contact />
        <footer className="py-6 text-center text-xs text-graphite/60">
          &copy; {new Date().getFullYear()} indiegen.ai — crafted with <span className="text-magenta">&hearts;</span> &amp; <span className="text-neon">code</span>
        </footer>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-neon text-graphite shadow-neon-glow"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
