import { motion } from 'framer-motion';
import { AiOutlineLink } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ title, description, tags, image, link, github }) {
  return (
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
        </a>
      </div>
    </motion.div>
  );
}
