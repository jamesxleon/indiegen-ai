'use client';
import dynamic from 'next/dynamic';
const Roots = dynamic(() => import('./Roots'), { ssr: false });
export default Roots;
