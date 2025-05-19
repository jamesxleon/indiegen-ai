'use client';
import dynamic from 'next/dynamic';
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false });
export default Projects;
