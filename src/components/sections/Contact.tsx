'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus({
        type: 'success',
        message: 'Your message has been sent! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section 
      ref={ref}
      id="contact" 
      className="min-h-screen flex items-center justify-center py-20 px-4 relative"
    >
      <div className="container mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          <motion.div variants={item} className="mb-4">
            <span className="section-label">Get In Touch</span>
          </motion.div>
          
          <motion.h2 variants={item} className="mb-6">
            Let's Build Something Amazing
          </motion.h2>
          
          <motion.p className="max-w-2xl mx-auto" variants={item}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
          variants={item}
        >
          {status.message && (
            <div
              className={`mb-6 p-4 rounded-lg ${status.type === 'success' ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}
            >
              <p className={`${status.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                {status.message}
              </p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent outline-none transition-all"
                required
              />
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-neon-cyan to-inti-gold text-white font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </motion.div>

        <motion.div
          className="mt-16 text-center text-graphite text-sm"
          variants={item}
        >
          <p>© {new Date().getFullYear()} James. All rights reserved.</p>
          <p className="mt-2">
            Built with ❤️ and modern web technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
}
