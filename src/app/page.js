'use client'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='p-12 pt-36'
    >
      <h1>Home</h1>
      <p>This page contains home page contents.</p>
    </motion.section>
  );
}
