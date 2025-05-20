'use client';

import dynamic from 'next/dynamic';

// In Next.js 15, we need to be more careful about dynamic imports with ssr:false
const NavigationComponent = dynamic(
  () => import('./Navigation').then(mod => ({ default: mod.default })),
  { ssr: false }
);

export default function NavigationClient() {
  return <NavigationComponent />;
}
