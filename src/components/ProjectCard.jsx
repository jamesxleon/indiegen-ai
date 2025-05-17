import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';

export default function ProjectCard({ title, description, tags = [], image, link, github }) {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1] // Smooth cubic-bezier easing
      }
    },
    hover: { 
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.4
      }
    }
  };

  return (
    <motion.div
      className="group relative overflow-hidden h-full flex flex-col glass-card hover-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Card ribbon (optional) */}
      {tags.includes('Featured') && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-magenta-500 text-white text-xs font-medium py-1 px-3 rounded-bl-lg shadow-md transform rotate-0 origin-top-right">
            Featured
          </div>
        </div>
      )}

      {/* Image container */}
      <div className="h-52 overflow-hidden relative">
        {image ? (
          <div className="img-highlight w-full h-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover hover-scale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-300/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-inti-50/20 to-neon-50/20">
            <FiFolder className="text-5xl text-inti-400/70" />
          </div>
        )}

        {/* Project actions */}
        <div className="absolute inset-x-0 bottom-0 p-3 flex justify-end opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out z-10">
          <div className="flex gap-2">
            {link && (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass-effect backdrop-blur-md flex items-center justify-center text-graphite-200 hover:text-neon-500 hover:border-neon-300/50 transition-all duration-200 transform hover:scale-110"
                aria-label="View project"
                whileHover={{ y: -2 }}
              >
                <FiExternalLink className="w-4 h-4" />
              </motion.a>
            )}
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass-effect backdrop-blur-md flex items-center justify-center text-graphite-200 hover:text-magenta-500 hover:border-magenta-300/50 transition-all duration-200 transform hover:scale-110"
                aria-label="View on GitHub"
                whileHover={{ y: -2 }}
              >
                <FiGithub className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Content container */}
      <motion.div 
        className="p-6 flex-1 flex flex-col"
        variants={contentVariants}
      >
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-graphite-200 group-hover:text-graphite-300 transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-graphite-100/90 text-base mb-4 line-clamp-3">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto mb-4">
          {tags.filter(tag => tag !== 'Featured').map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-neon-100/10 to-neon-200/10 border border-neon-300/10 text-graphite-200 rounded-full transition-all duration-200 hover:border-neon-400/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Call to action */}
        {link && (
          <motion.a 
            href={link}
            className="mt-2 inline-flex items-center text-neon-500 font-medium group text-sm"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            View Project
            <svg 
              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
}
