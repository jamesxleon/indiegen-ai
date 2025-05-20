'use client';
import dynamic from 'next/dynamic';
const Craft = dynamic(() => import('./Craft'), { ssr: false });
export default Craft;
