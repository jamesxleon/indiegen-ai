'use client';
import dynamic from 'next/dynamic';
const Roots = dynamic(() => import('@/components/Roots'), { ssr: false });
export default Roots;
