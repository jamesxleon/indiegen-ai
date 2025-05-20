'use client';

import dynamic from 'next/dynamic';

// Import the CursorHalo component with SSR disabled
const CursorHalo = dynamic(() => import('./CursorHalo'), { ssr: false });

export default function CursorHaloClient() {
  return <CursorHalo />;
}
