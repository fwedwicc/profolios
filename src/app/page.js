'use client'
import { motion } from 'framer-motion';
import useLenis from '../hooks/useLenis';
import { GetInTouch } from '../components/GetInTouch';
import { Hero } from '../components/Hero';

export default function Home() {
  useLenis()
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:p-12 p-6 space-y-24'
    >
      <Hero />
      <GetInTouch />
    </motion.section>
  );
}
