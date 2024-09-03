'use client'
import { motion } from 'framer-motion';

export default function Guide() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='p-12 pt-36'
    >
      <h1>Guide</h1>
      <p>This page contains guide page contents.</p>
    </motion.section>
  );
}
