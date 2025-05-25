'use client';
import { useCallback, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export function usePDFExport() {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'James-Leon-Resume',
    pageStyle: `
      @page {
        size: A4;
        margin: 15mm 20mm;
        background: white;
      }
      
      @media print {
        * {
          -webkit-print-color-adjust: exact !important;
          color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        
        body {
          font-family: 'Inter', 'Segoe UI', 'SF Pro Display', -apple-system, system-ui, sans-serif;
          font-size: 10pt;
          line-height: 1.4;
          color: #1a1a1a;
          background: white;
          margin: 0;
          padding: 0;
        }
        
        .no-print {
          display: none !important;
        }
        
        .print-page-break {
          page-break-before: always;
          break-before: page;
        }
        
        .print-avoid-break {
          page-break-inside: avoid;
          break-inside: avoid;
        }
        
        .print-header {
          border-bottom: 2px solid #2563eb;
          padding-bottom: 8pt;
          margin-bottom: 16pt;
        }
        
        .print-section {
          margin-bottom: 14pt;
        }
        
        .print-section-title {
          font-size: 12pt;
          font-weight: 700;
          color: #2563eb;
          margin-bottom: 8pt;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 3pt;
        }
        
        .print-item {
          margin-bottom: 8pt;
          page-break-inside: avoid;
        }
        
        .print-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16pt;
        }
        
        .print-skill-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8pt;
        }
        
        .print-skill-item {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 4pt;
          padding: 4pt 8pt;
          font-size: 9pt;
          text-align: center;
          margin: 2pt;
        }
        
        h1 {
          font-size: 16pt;
          font-weight: 800;
          color: #1e40af;
          margin: 0 0 3pt 0;
          page-break-after: avoid;
        }
        
        h2 {
          font-size: 12pt;
          font-weight: 700;
          color: #2563eb;
          margin: 12pt 0 6pt 0;
          page-break-after: avoid;
        }
        
        h3 {
          font-size: 12pt;
          font-weight: 600;
          color: #1f2937;
          margin: 8pt 0 4pt 0;
          page-break-after: avoid;
        }
        
        .print-subtitle {
          font-size: 13pt;
          color: #6b7280;
          margin: 0 0 8pt 0;
        }
        
        .print-contact {
          font-size: 10pt;
          color: #4b5563;
          display: flex;
          flex-wrap: wrap;
          gap: 12pt;
          margin-top: 6pt;
        }
        
        .print-date {
          font-size: 10pt;
          color: #6b7280;
          font-style: italic;
        }
        
        .print-summary {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-left: 3pt solid #2563eb;
          padding: 8pt;
          margin: 8pt 0;
          border-radius: 0 3pt 3pt 0;
        }
        
        .print-photo {
          width: 80pt;
          height: 80pt;
          border-radius: 6pt;
          border: 1pt solid #e5e7eb;
          object-fit: cover;
          margin: 0 auto 8pt auto;
          display: block;
        }
        
        .print-links {
          display: flex;
          flex-wrap: wrap;
          gap: 8pt;
          margin-top: 8pt;
        }
        
        .print-link {
          background: #eff6ff;
          color: #2563eb;
          padding: 3pt 8pt;
          border-radius: 12pt;
          font-size: 9pt;
          text-decoration: none;
          border: 1pt solid #bfdbfe;
        }
        
        .print-experience-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 6pt;
        }
        
        .print-company {
          font-weight: 600;
          color: #2563eb;
          font-size: 11pt;
        }
        
        .print-position {
          font-weight: 500;
          color: #1f2937;
          font-size: 11pt;
        }
        
        .print-description {
          font-size: 10pt;
          line-height: 1.4;
          color: #374151;
          margin-top: 4pt;
        }
        
        .print-two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20pt;
          page-break-inside: avoid;
        }
        
        img {
          max-width: 100% !important;
          height: auto !important;
        }
        
        ul {
          margin: 4pt 0;
          padding-left: 16pt;
        }
        
        li {
          margin-bottom: 3pt;
          font-size: 10pt;
          line-height: 1.4;
        }
        
        .print-reference {
          background: #f9fafb;
          border: 1pt solid #e5e7eb;
          border-radius: 4pt;
          padding: 8pt;
          margin-bottom: 8pt;
        }
        
        .print-certification {
          background: #fefce8;
          border-left: 3pt solid #eab308;
          padding: 8pt;
          margin-bottom: 6pt;
        }
        
        .print-award {
          display: flex;
          align-items: start;
          gap: 6pt;
          margin-bottom: 4pt;
        }
        
        .print-award-bullet {
          width: 4pt;
          height: 4pt;
          background: #2563eb;
          border-radius: 50%;
          margin-top: 6pt;
          flex-shrink: 0;
        }
      }
    `,
  });

  const exportPDF = useCallback(() => {
    if (!printRef.current) {
      alert('Resume content not ready. Please try again.');
      return Promise.resolve();
    }
    
    return new Promise<void>((resolve) => {
      handlePrint();
      resolve();
    });
  }, [handlePrint]);

  return { exportPDF, printRef };
}