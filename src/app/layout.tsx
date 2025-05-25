
import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, Teko } from 'next/font/google';
import './globals.css';
import NavigationClient from '@/components/layout/NavigationClient';
import CursorHaloClient from '@/components/animation/CursorHaloClient';
import LenisProvider from '@/components/layout/LenisProvider';
import ThemeToggle from '@/components/layout/ThemeToggle';
import { Provider as JotaiProvider } from 'jotai';

// Font definitions
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const teko = Teko({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-teko',
});

// Add a fallback font for the heading
const headingFont = {
  variable: '--font-heading',
  className: 'font-sans', // Fallback to Inter
};



export const viewport: Viewport = {
  themeColor: '#0a0020',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'James - Kichwa-born builder of intelligent systems',
  description: 'Portfolio of James, a Kichwa-born builder of intelligent systems. Showcasing projects, skills, and journey in tech.',
  keywords: ['portfolio', 'developer', 'Kichwa', 'indiegen.ai', 'react', 'next.js', 'three.js'],
  openGraph: {
    title: 'James - Kichwa Builder',
    description: 'Kichwa-born builder of intelligent systems',
    url: 'https://indiegen.ai',
    siteName: 'James Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'James - Kichwa Builder',
    description: 'Kichwa-born builder of intelligent systems',
    creator: '@yourtwitter',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${spaceGrotesk.variable} ${teko.variable} ${headingFont.variable} scroll-smooth`}
    >
      <head>
        {/* Preload fonts */}
        {/* Font preload removed as file is missing */}
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <JotaiProvider>
          <LenisProvider>
            {/* Custom cursor halo effect */}
            <CursorHaloClient />
            
            {/* Navigation */}
            <NavigationClient />
            
            {/* Theme toggle in fixed position - positioned to avoid navigation */}
            <div className="fixed right-6 top-6 z-50 md:right-8 md:top-8">
              <ThemeToggle />
            </div>
            
            {/* Main content */}
            <div className="pt-20">
              {children}
            </div>
          </LenisProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
