'use client';
import dynamic from 'next/dynamic';
const Craft = dynamic(() => import('@/components/Craft'), { ssr: false });
export default Craft;
