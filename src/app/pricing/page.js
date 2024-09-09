'use client'
import { motion } from 'framer-motion';
import useLenis from '../../hooks/useLenis';
import { GetInTouch } from '../../components/GetInTouch';

export default function Pricing() {
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
        <h1>Pricing</h1>
        <p>This page contains pricing page contents.</p>
        <div className='grid grid-cols-1 gap-3'>
          <div className='border flex items-center justify-center'>
            <div className='border w-full max-w-lg'>
              ss
            </div>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1'>
            <div className='border flex items-center justify-center'>
              <div className='border w-full max-w-lg'>
                ss
              </div>
            </div>
            <div className='border flex items-center justify-center'>
              <div className='border w-full max-w-lg'>
                ss
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </motion.section>
  );
}
