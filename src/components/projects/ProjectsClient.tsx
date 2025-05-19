'use client';

import dynamic from 'next/dynamic';

// Import the Projects component with SSR disabled
const Projects = dynamic(() => import('./Projects'), { ssr: false });

export default function ProjectsClient() {
  return <Projects />;
}
