'use client';
import dynamic from 'next/dynamic';
const About = dynamic(() => import('@/components/About'), { ssr: false });
export default About;
