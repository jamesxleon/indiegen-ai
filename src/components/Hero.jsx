import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll({ target: heroRef });
  const yMountain = useTransform(scrollY, [0, 600], [0, -120]);
  const yCity = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center snap-start overflow-hidden bg-gradient-to-b from-midnight to-offwhite"
    >
      <motion.img
        src="/mountain.svg"
        alt="mountain silhouette"
        className="absolute inset-x-0 bottom-0 w-full text-inti"
        style={{ y: yMountain }}
      />
      <motion.img
        src="/skyline.svg"
        alt="Quito skyline"
        className="absolute inset-x-0 bottom-0 w-full text-neon opacity-70"
        style={{ y: yCity }}
      />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(#1b1b1b_1px,transparent_1px)_0_0/60px_60px]"></div>
      <motion.h1
        initial={{ opacity: 0, letterSpacing: '0.6em' }}
        animate={{ opacity: 1, letterSpacing: '0.05em' }}
        transition={{ duration: 1 }}
        className="relative z-10 font-display text-7xl md:text-9xl text-neon neon-glow"
      >
        James
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 mt-4 text-xl md:text-2xl"
      >
        Kichwa-born builder of intelligent systems.
      </motion.p>
      <div className="absolute top-4 left-4 text-xs font-mono animate-pulse-slow text-neon">
        indiegen.ai
      </div>
    </section>
  );
}
