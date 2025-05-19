'use client';

import dynamic from 'next/dynamic';

// Import the GlobeScene component with SSR disabled to avoid issues with three.js
const GlobeScene = dynamic(() => import('./GlobeScene'), { ssr: false });

export default function GlobeSceneClient() {
  return <GlobeScene />;
}
