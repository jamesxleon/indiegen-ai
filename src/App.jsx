import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { AiOutlineMail, AiFillGithub, AiOutlineMenu, AiOutlineClose, AiOutlineLink } from 'react-icons/ai';
import { FaWhatsapp, FaArrowUp, FaGithub } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

// Components
const NavItem = ({ href, children, isActive, onClick }) => (
  <li className="mb-6 last:mb-0">
    <a
      href={href}
      onClick={onClick}
      className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
        isActive ? 'bg-neon scale-125' : 'bg-inti/50 hover:bg-inti hover:scale-110'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      <span className="sr-only">{children}</span>
    </a>
  </li>
);

const SectionTitle = ({ children, subtitle, className = '' }) => (
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

const ProjectCard = ({ title, description, tags, image, link, github }) => (
  <motion.div
    className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
    whileHover={{ y: -8 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.5 }}
  >
    <div className="h-48 bg-gradient-to-br from-inti/10 to-neon/10 overflow-hidden relative">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-inti/5 to-neon/5">
          <span className="text-4xl">📁</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div className="flex gap-3">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/90 text-graphite flex items-center justify-center hover:bg-neon hover:text-white transition-colors"
              aria-label="View project"
            >
              <AiOutlineLink className="w-5 h-5" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/90 text-graphite flex items-center justify-center hover:bg-graphite hover:text-white transition-colors"
              aria-label="View on GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-2xl font-bold mb-2 text-graphite">{title}</h3>
      <p className="text-graphite/80 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-teko tracking-wider text-magenta border border-inti/30 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <a href={link} className="inline-flex items-center text-neon font-medium group">
        View Project
        <BsArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </div>
  </motion.div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Parallax for hero skyline
  const heroRef = useRef(null);
  const { scrollY } = useScroll({ target: heroRef });
  const yMountain = useTransform(scrollY, [0, 600], [0, -120]);
  const yCity = useTransform(scrollY, [0, 600], [0, -60]);

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
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
      {/* Mobile menu button */}
      <button
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <AiOutlineClose className="w-6 h-6 text-graphite" /> : <AiOutlineMenu className="w-6 h-6 text-graphite" />}
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
                onClick={() => scrollToSection(item.id)}
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

      {/* Main content */}
      <div className="md:pl-16 transition-all duration-300">
        {/* Hero Section */}
        {/* ... hero code omitted for brevity ... */}

        {/* Craft Section */}
        {/* ... craft code omitted for brevity ... */}

        {/* Projects Section */}
        {/* ... projects code omitted for brevity ... */}

        {/* Roots Section */}
        <section id="roots" className="min-h-screen flex flex-col justify-center px-8 md:px-24 py-20 bg-gradient-to-b from-offwhite to-inti/10 snap-start">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-display text-graphite mb-12 text-center">
              My <span className="text-inti">Journey</span>
            </h2>
            <div className="relative before:absolute before:left-1/2 before:h-full before:w-1 before:bg-gradient-to-b before:from-neon before:to-inti before:transform before:-translate-x-1/2">
              {[
                { year: "1998", title: "The Beginning", description: "Born in the heart of the Andes, immersed in Kichwa traditions and a deep connection to nature.", icon: "👶" },
                { year: "2015", title: "First Lines of Code", description: "Discovered the power of programming and started building simple applications.", icon: "💻" },
                { year: "2020", title: "University Graduate", description: "Earned a degree in Computer Science with honors, focusing on AI and machine learning.", icon: "🎓" },
                { year: "2023", title: "First Startup", description: "Co-founded a tech startup focused on sustainable solutions for local communities.", icon: "🚀" },
                { year: "2025", title: "Present Day", description: "Building the future of AI while staying true to my roots and values.", icon: "🌱" }
              ].map((item, index) => (
                <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'pl-16 text-right' : 'ml-auto pr-16 text-left'}`}>
                  <div className="p-6 bg-white rounded-xl shadow-md relative">
                    <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-inti rounded-full flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <time className="text-neon font-cond text-lg tracking-wider">{item.year}</time>
                    <h3 className="text-xl font-semibold text-graphite mt-1">{item.title}</h3>
                    <p className="text-graphite/80 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* ... contact code omitted for brevity ... */}

        <footer className="py-6 text-center text-xs text-graphite/60">
          &copy; {new Date().getFullYear()} indiegen.ai — crafted with <span className="text-magenta">&hearts;</span> & <span className="text-neon">code</span>
        </footer>
      </div>
    </div>
  );
}
