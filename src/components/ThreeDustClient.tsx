'use client';

import dynamic from 'next/dynamic';

// In Next.js 15, we need to be more careful about dynamic imports with ssr:false
const ThreeDustComponent = dynamic(
  () => import('@/components/ThreeDust').then(mod => ({ default: mod.default })),
  { ssr: false }
);

export default function ThreeDustClient() {
  return <ThreeDustComponent />;
}
