'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import {
  resumeProfile,
  education,
  experience,
  skills,
  awards,
  projectsAndResearch,
  references,
  certifications,
} from '@/config/resume';
import ExperienceItem from '@/components/resume/ExperienceItem';
import EducationItem from '@/components/resume/EducationItem';
import SkillBadge from '@/components/resume/SkillBadge';
import { usePDFExport } from '@/hooks/usePDFExport';

export default function ResumeClient() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const { exportPDF, printRef } = usePDFExport();
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      await exportPDF();
    } catch (error) {
      console.error('PDF export failed:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  };

  return (
    <section id="resume" ref={sectionRef} className="container mx-auto px-4 py-20 md:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        {/* Header & Download button */}
        <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row">
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              Curriculum Vitae
            </p>
            <h1 className="mb-2 text-4xl font-bold text-foreground md:text-5xl">
              {resumeProfile.fullName}
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              {resumeProfile.title}
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>{resumeProfile.location}</span>
              <span>•</span>
              <a 
                href={`mailto:${resumeProfile.email}`}
                className="hover:text-primary transition-colors"
              >
                {resumeProfile.email}
              </a>
              <span>•</span>
              <span>{resumeProfile.phone}</span>
            </div>
          </motion.div>

          <motion.button
            variants={itemVariants}
            onClick={handleExportPDF}
            disabled={isExporting}
            className="no-print group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary/80 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 disabled:opacity-50"
          >
            <span className="relative z-10 flex items-center gap-2">
              {isExporting ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Generating PDF...
                </>
              ) : (
                <>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-white/20 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-[100%]" />
          </motion.button>
        </div>

        {/* Printable content wrapper */}
        <div ref={printRef} id="resume-content" className="space-y-16 bg-background">
          {/* Profile Summary with Photo */}
          <motion.div 
            variants={itemVariants}
            className="rounded-2xl border border-border/50 bg-card/80 p-8 shadow-lg backdrop-blur-sm"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-start">
              <div className="flex-shrink-0">
                <div className="relative h-48 w-48 mx-auto md:mx-0 overflow-hidden rounded-2xl border-4 border-primary/20">
                  <Image
                    src={resumeProfile.photoPlaceholder}
                    alt={resumeProfile.fullName}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0Q5RDlEOSIvPgo8cGF0aCBkPSJNNTAgMTUwQzUwIDEyNS45IDY5LjkgMTA2IDk0IDEwNkgxMDZDMTMwLjEgMTA2IDE1MCAxMjUuOSAxNTAgMTUwVjE4MEg1MFYxNTBaIiBmaWxsPSIjRDlEOUQ5Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTkwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5OTk5IiBmb250LXNpemU9IjEyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiI+UGhvdG8gUGxhY2Vob2xkZXI8L3RleHQ+Cjwvc3ZnPg==';
                    }}
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="mb-4 text-2xl font-bold text-primary">Professional Summary</h3>
                <p className="leading-relaxed text-foreground/80 text-lg">
                  {resumeProfile.summary}
                </p>
                
                <div className="mt-6 flex flex-wrap gap-4">
                  {resumeProfile.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                    >
                      {link.label}
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants}>
            <h2 className="mb-10 text-3xl font-bold text-primary">Professional Experience</h2>
            <div className="space-y-6">
              {experience.map((item, idx) => (
                <ExperienceItem key={idx} {...item} />
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants}>
            <h2 className="mb-10 text-3xl font-bold text-primary">Education</h2>
            <div className="space-y-6">
              {education.map((item, idx) => (
                <EducationItem key={idx} {...item} />
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants}>
            <h2 className="mb-10 text-3xl font-bold text-primary">Technical Skills</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {Object.entries(skills).map(([category, list]) => (
                <div key={category} className="rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm">
                  <h3 className="mb-4 text-xl font-semibold capitalize text-foreground">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="flex flex-wrap">
                    {list.map((skill, index) => (
                      <SkillBadge key={skill} label={skill} index={index} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Projects & Research */}
          <motion.div variants={itemVariants}>
            <h2 className="mb-10 text-3xl font-bold text-primary">Projects & Research</h2>
            <div className="space-y-6">
              {projectsAndResearch.map((project, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.link ? (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            {project.name}
                          </a>
                        ) : (
                          project.name
                        )}
                      </h3>
                      {project.description && (
                        <p className="mt-2 text-foreground/80">{project.description}</p>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h2 className="mb-10 text-3xl font-bold text-primary">Certifications</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-semibold text-foreground">{cert.name}</h3>
                  <p className="text-primary/80">{cert.issuer}</p>
                  {cert.date && <p className="text-sm text-muted-foreground">{cert.date}</p>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div variants={itemVariants}>
            <h2 className="mb-10 text-3xl font-bold text-primary">Awards & Recognition</h2>
            <div className="rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm">
              <ul className="space-y-3">
                {awards.map((award, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground/80">{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* References */}
          <motion.div variants={itemVariants}>
            <h2 className="mb-10 text-3xl font-bold text-primary">References</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {references.map((ref, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-semibold text-foreground">{ref.name}</h3>
                  <p className="text-primary/80">{ref.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{ref.contact}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}