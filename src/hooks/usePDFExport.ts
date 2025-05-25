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
        margin: 20mm;
      }
      @media print {
        body {
          font-family: Arial, sans-serif;
          font-size: 12pt;
          line-height: 1.4;
          color: #000;
          background: #fff;
        }
        .no-print {
          display: none !important;
        }
        .print-page-break {
          page-break-before: always;
        }
        .print-avoid-break {
          page-break-inside: avoid;
        }
        h1, h2, h3 {
          page-break-after: avoid;
        }
        img {
          max-width: 100% !important;
          height: auto !important;
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