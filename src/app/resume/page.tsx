import ResumeClient from '@/components/sections/ResumeClient';
import ThreeDustClient from '@/components/animation/ThreeDustClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume — James León',
  description: 'Detailed curriculum vitae of James León, AI-driven full-stack developer & entrepreneur specializing in artificial intelligence, machine learning, and natural language processing.',
  keywords: ['resume', 'CV', 'curriculum vitae', 'James León', 'AI developer', 'machine learning', 'full-stack developer', 'Ecuador'],
  openGraph: {
    title: 'Resume — James León',
    description: 'Detailed curriculum vitae of James León, AI-driven full-stack developer & entrepreneur.',
    url: 'https://indiegen.ai/resume',
    siteName: 'James Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume — James León',
    description: 'Detailed curriculum vitae of James León, AI-driven full-stack developer & entrepreneur.',
    creator: '@yourtwitter',
  },
};

export default function ResumePage() {
  return (
    <main className="relative min-h-screen">
      {/* Three.js Dust Background */}
      <div className="fixed inset-0 -z-10">
        <ThreeDustClient />
      </div>
      
      {/* Resume Content */}
      <div className="relative z-10">
        <ResumeClient />
      </div>
    </main>
  );
}