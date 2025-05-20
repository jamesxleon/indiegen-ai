import { Metadata } from 'next';

// Import client components
import HeroClient from '@/components/sections/HeroClient';
import AboutClient from '@/components/sections/AboutClient';
import CraftClient from '@/components/sections/CraftClient';
import ProjectsClient from '@/components/sections/ProjectsClient';
import RootsClient from '@/components/sections/RootsClient';
import ContactClient from '@/components/sections/ContactClient';
import ThreeDustClient from '@/components/animation/ThreeDustClient';
import GlobeSceneClient from '@/components/globe/GlobeSceneClient';

export const metadata: Metadata = {
  title: 'James - Kichwa Builder',
  description: 'Kichwa-born builder of intelligent systems',
};

export default function Home() {
  return (
    <main className="relative">
      {/* Three.js Dust Background */}
      <div className="fixed inset-0 -z-10">
        <ThreeDustClient />
      </div>
      
      {/* Hero Globe Background */}
      <div className="fixed inset-0 z-0">
        <GlobeSceneClient />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeroClient />
        <AboutClient />
        <CraftClient />
        <ProjectsClient />
        <RootsClient />
        <ContactClient />
      </div>
    </main>
  );
}
