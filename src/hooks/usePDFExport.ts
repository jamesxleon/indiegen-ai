'use client';
import React, { useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import ResumePDF from '@/components/resume/ResumePDF';

export function usePDFExport(filename = 'james-leon-resume.pdf') {
  return useCallback(async () => {
    try {
      // Import dependencies dynamically to avoid build issues
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');

      // Create a temporary container for the PDF component
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.width = '210mm';
      tempContainer.style.background = 'white';
      document.body.appendChild(tempContainer);

      // Render the PDF component
      const root = createRoot(tempContainer);
      
      // Create a promise that resolves when rendering is complete
      await new Promise<void>((resolve) => {
        root.render(React.createElement(ResumePDF));
        // Wait a bit for the component to render
        setTimeout(resolve, 1000);
      });

      const element = tempContainer.querySelector('#pdf-resume-content') as HTMLElement;
      if (!element) {
        console.error('PDF resume content element not found');
        document.body.removeChild(tempContainer);
        return;
      }

      // Configure canvas for optimal PDF quality
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        allowTaint: false,
        foreignObjectRendering: false,
        width: element.offsetWidth,
        height: element.offsetHeight,
        onclone: (clonedDoc: Document) => {
          // Ensure all fonts are loaded
          const clonedElement = clonedDoc.querySelector('#pdf-resume-content') as HTMLElement;
          if (clonedElement) {
            clonedElement.style.fontFamily = 'Arial, sans-serif';
          }
        }
      });

      // Create PDF with exact A4 dimensions
      const pdf = new jsPDF({
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
        compress: true
      });

      // A4 dimensions in mm
      const pageWidth = 210;
      const pageHeight = 297;
      
      // Convert canvas to image
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      
      // Calculate dimensions to fit A4 without margins
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      // Handle multi-page content
      if (imgHeight <= pageHeight) {
        // Single page - center vertically if smaller than page
        const yPosition = imgHeight < pageHeight ? (pageHeight - imgHeight) / 2 : 0;
        pdf.addImage(imgData, 'JPEG', 0, yPosition, imgWidth, imgHeight);
      } else {
        // Multi-page
        let remainingHeight = imgHeight;
        let sourceY = 0;
        let pageNumber = 1;

        while (remainingHeight > 0) {
          const currentPageHeight = Math.min(pageHeight, remainingHeight);
          const sourceHeight = (currentPageHeight * canvas.height) / imgHeight;

          if (pageNumber > 1) {
            pdf.addPage();
          }

          // Create a canvas for this page section
          const pageCanvas = document.createElement('canvas');
          const pageCtx = pageCanvas.getContext('2d');
          
          if (pageCtx) {
            pageCanvas.width = canvas.width;
            pageCanvas.height = sourceHeight;
            
            pageCtx.drawImage(
              canvas,
              0, sourceY,
              canvas.width, sourceHeight,
              0, 0,
              canvas.width, sourceHeight
            );
            
            const pageImgData = pageCanvas.toDataURL('image/jpeg', 0.95);
            pdf.addImage(pageImgData, 'JPEG', 0, 0, imgWidth, currentPageHeight);
          }

          sourceY += sourceHeight;
          remainingHeight -= currentPageHeight;
          pageNumber++;
        }
      }

      // Clean up
      root.unmount();
      document.body.removeChild(tempContainer);

      // Save the PDF
      pdf.save(filename);
      
    } catch (error) {
      console.error('Failed to export PDF:', error);
      alert('Failed to export PDF. Please try again.');
    }
  }, [filename]);
}