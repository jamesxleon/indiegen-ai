'use client';
import React from 'react';
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

// This component is specifically designed for PDF generation
// It uses A4 dimensions and optimized styling for print
export default function ResumePDF() {
  return (
    <div 
      id="pdf-resume-content"
      className="bg-white text-black"
      style={{
        width: '210mm',
        minHeight: '297mm',
        padding: '20mm',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        fontSize: '11pt',
        lineHeight: '1.4',
        color: '#000000',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Header Section */}
      <div style={{ display: 'flex', marginBottom: '24px', alignItems: 'flex-start', gap: '24px' }}>
        {/* Photo */}
        <div style={{ flexShrink: 0 }}>
          <div 
            style={{
              width: '120px',
              height: '150px',
              border: '2px solid #e5e5e5',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#f5f5f5',
              position: 'relative'
            }}
          >
            <img 
              src="/images/profile.jpg"
              alt={resumeProfile.fullName}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              onError={(e) => {
                // Fallback if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; text-align: center; font-size: 10px; color: #666;">
                      <div>
                        <div style="font-size: 24px; margin-bottom: 8px;">👤</div>
                        <div>Photo</div>
                        <div>Not Found</div>
                      </div>
                    </div>
                  `;
                }
              }}
            />
          </div>
        </div>
        
        {/* Header Info */}
        <div style={{ flex: 1 }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            margin: '0 0 8px 0',
            color: '#1a1a1a'
          }}>
            {resumeProfile.fullName}
          </h1>
          <h2 style={{ 
            fontSize: '16px', 
            fontWeight: 'normal', 
            margin: '0 0 16px 0',
            color: '#4a4a4a'
          }}>
            {resumeProfile.title}
          </h2>
          
          <div style={{ fontSize: '10px', color: '#666', lineHeight: '1.6' }}>
            <div>{resumeProfile.location}</div>
            <div>{resumeProfile.email}</div>
            <div>{resumeProfile.phone}</div>
            <div style={{ marginTop: '8px' }}>
              {resumeProfile.links.map((link, idx) => (
                <span key={link.label} style={{ marginRight: '16px' }}>
                  {link.label}: {link.url}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <section style={{ marginBottom: '24px' }}>
        <h3 style={{ 
          fontSize: '14px', 
          fontWeight: 'bold', 
          margin: '0 0 12px 0',
          borderBottom: '1px solid #ddd',
          paddingBottom: '4px',
          color: '#1a1a1a'
        }}>
          PROFESSIONAL SUMMARY
        </h3>
        <p style={{ margin: '0', textAlign: 'justify' }}>
          {resumeProfile.summary}
        </p>
      </section>

      {/* Experience */}
      <section style={{ marginBottom: '24px' }}>
        <h3 style={{ 
          fontSize: '14px', 
          fontWeight: 'bold', 
          margin: '0 0 12px 0',
          borderBottom: '1px solid #ddd',
          paddingBottom: '4px',
          color: '#1a1a1a'
        }}>
          PROFESSIONAL EXPERIENCE
        </h3>
        {experience.map((exp, idx) => (
          <div key={idx} style={{ marginBottom: '16px', pageBreakInside: 'avoid' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '12px', fontWeight: 'bold', margin: '0', color: '#1a1a1a' }}>
                  {exp.title}
                </h4>
                {exp.company && (
                  <div style={{ fontSize: '11px', fontWeight: '600', color: '#4a4a4a', margin: '2px 0' }}>
                    {exp.company}
                  </div>
                )}
              </div>
              <div style={{ fontSize: '10px', color: '#666', textAlign: 'right' }}>
                {exp.period}
              </div>
            </div>
            <p style={{ fontSize: '10px', margin: '6px 0 0 0', lineHeight: '1.5' }}>
              {exp.description}
            </p>
          </div>
        ))}
      </section>

      {/* Education */}
      <section style={{ marginBottom: '24px' }}>
        <h3 style={{ 
          fontSize: '14px', 
          fontWeight: 'bold', 
          margin: '0 0 12px 0',
          borderBottom: '1px solid #ddd',
          paddingBottom: '4px',
          color: '#1a1a1a'
        }}>
          EDUCATION
        </h3>
        {education.map((edu, idx) => (
          <div key={idx} style={{ marginBottom: '12px', pageBreakInside: 'avoid' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '12px', fontWeight: 'bold', margin: '0', color: '#1a1a1a' }}>
                  {edu.degree}
                </h4>
                <div style={{ fontSize: '11px', color: '#4a4a4a', margin: '2px 0' }}>
                  {edu.institution}
                </div>
              </div>
              <div style={{ fontSize: '10px', color: '#666', textAlign: 'right' }}>
                {edu.period}
              </div>
            </div>
            {edu.description && (
              <p style={{ fontSize: '10px', margin: '4px 0 0 0', lineHeight: '1.5' }}>
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Skills */}
      <section style={{ marginBottom: '24px' }}>
        <h3 style={{ 
          fontSize: '14px', 
          fontWeight: 'bold', 
          margin: '0 0 12px 0',
          borderBottom: '1px solid #ddd',
          paddingBottom: '4px',
          color: '#1a1a1a'
        }}>
          TECHNICAL SKILLS
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} style={{ pageBreakInside: 'avoid' }}>
              <h4 style={{ 
                fontSize: '11px', 
                fontWeight: 'bold', 
                margin: '0 0 6px 0',
                textTransform: 'capitalize',
                color: '#1a1a1a'
              }}>
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h4>
              <div style={{ fontSize: '10px', lineHeight: '1.6' }}>
                {skillList.join(' • ')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects & Research */}
      <section style={{ marginBottom: '24px' }}>
        <h3 style={{ 
          fontSize: '14px', 
          fontWeight: 'bold', 
          margin: '0 0 12px 0',
          borderBottom: '1px solid #ddd',
          paddingBottom: '4px',
          color: '#1a1a1a'
        }}>
          PROJECTS & RESEARCH
        </h3>
        {projectsAndResearch.map((project, idx) => (
          <div key={idx} style={{ marginBottom: '10px', pageBreakInside: 'avoid' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '11px', fontWeight: 'bold', margin: '0', color: '#1a1a1a' }}>
                  {project.name}
                </h4>
                {project.description && (
                  <p style={{ fontSize: '10px', margin: '2px 0 0 0', lineHeight: '1.5' }}>
                    {project.description}
                  </p>
                )}
                {project.link && (
                  <div style={{ fontSize: '9px', color: '#666', margin: '2px 0 0 0' }}>
                    {project.link}
                  </div>
                )}
              </div>
              <div style={{ fontSize: '10px', color: '#666', textAlign: 'right' }}>
                {project.date}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section style={{ marginBottom: '24px' }}>
        <h3 style={{ 
          fontSize: '14px', 
          fontWeight: 'bold', 
          margin: '0 0 12px 0',
          borderBottom: '1px solid #ddd',
          paddingBottom: '4px',
          color: '#1a1a1a'
        }}>
          CERTIFICATIONS
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {certifications.map((cert, idx) => (
            <div key={idx} style={{ pageBreakInside: 'avoid' }}>
              <h4 style={{ fontSize: '11px', fontWeight: 'bold', margin: '0', color: '#1a1a1a' }}>
                {cert.name}
              </h4>
              <div style={{ fontSize: '10px', color: '#4a4a4a' }}>
                {cert.issuer}
              </div>
              {cert.date && (
                <div style={{ fontSize: '9px', color: '#666' }}>
                  {cert.date}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section style={{ marginBottom: '24px' }}>
        <h3 style={{ 
          fontSize: '14px', 
          fontWeight: 'bold', 
          margin: '0 0 12px 0',
          borderBottom: '1px solid #ddd',
          paddingBottom: '4px',
          color: '#1a1a1a'
        }}>
          AWARDS & RECOGNITION
        </h3>
        <ul style={{ margin: '0', paddingLeft: '16px', fontSize: '10px', lineHeight: '1.6' }}>
          {awards.map((award, idx) => (
            <li key={idx} style={{ marginBottom: '4px' }}>
              {award}
            </li>
          ))}
        </ul>
      </section>

      {/* References */}
      <section>
        <h3 style={{ 
          fontSize: '14px', 
          fontWeight: 'bold', 
          margin: '0 0 12px 0',
          borderBottom: '1px solid #ddd',
          paddingBottom: '4px',
          color: '#1a1a1a'
        }}>
          REFERENCES
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {references.map((ref, idx) => (
            <div key={idx} style={{ pageBreakInside: 'avoid' }}>
              <h4 style={{ fontSize: '11px', fontWeight: 'bold', margin: '0', color: '#1a1a1a' }}>
                {ref.name}
              </h4>
              <div style={{ fontSize: '10px', color: '#4a4a4a', margin: '2px 0' }}>
                {ref.role}
              </div>
              <div style={{ fontSize: '9px', color: '#666' }}>
                {ref.contact}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}