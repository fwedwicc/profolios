'use client'
import { motion } from 'framer-motion';
import useLenis from '../hooks/useLenis';

export default function Pricing() {
  useLenis()
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='p-12 pt-36'
    >
      <h1>Pricing</h1>
      <p>This page contains pricing page contents.</p>
    </motion.section>
  );
}
