'use client'
import { motion } from 'framer-motion';
import useLenis from './hooks/useLenis';
import { GetInTouch } from './components/GetInTouch';

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
      <div className='lg:px-24 md:px-16 pt-36'>
        <h1>Home</h1>
        <p>This page contains home page contents.</p>
      </div>
      <GetInTouch />
    </motion.section>
  );
}
