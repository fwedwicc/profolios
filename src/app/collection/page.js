'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Collection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className='p-12 pt-36 space-y-12'>
      <div className="space-y-1">
        <h1>Collection</h1>
        <p>This page contains collection page contents.</p>
      </div>
      <div className="grid grid-cols-2">
        <button
          className="border p-6 rounded-lg space-y-3"
          onClick={toggleModal}
        >
          <div className="relative h-[25rem]">
            <img
              src='https://placehold.co/600x400'
              alt=''
              className="absolute object-cover w-full h-full"
            />
          </div>
          <div className="border flex justify-between items-center">
            <h2>ss</h2>
            <p>P499.00</p>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className='relative'>
            <motion.div
              className="fixed inset-0 bg-stone-950/90 backdrop-blur-3xl top-[7.6rem] mx-8 rounded-t-xl border z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal} // Close drawer when clicking outside
            >
              <button
                className="absolute -top-12 right-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={toggleModal}
              >
                X
              </button>
              <h2 className="text-2xl font-bold mb-4 text-white">Modal Title</h2>
              <p className="mb-6 text-white">This is the modal description with some dummy content.</p>
              asdf
            </motion.div>


          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
