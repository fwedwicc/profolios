'use client'

import { useState } from 'react';
import Link from 'next/link'
import useLenis from '../hooks/useLenis';
import { motion, AnimatePresence } from 'framer-motion';
import itemsData from '../constants/data'

export default function Collection() {
  useLenis()
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleModal = (item) => {
    setSelectedItem(item);
    setIsOpen(!isOpen);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:p-12 p-6 md:px-36 md:pt-44 pt-36'
    >
      {/* Title and Description */}
      <div className="space-y-1 mb-12">
        <h1>Collection</h1>
        <p>This page contains collection page contents.</p>
      </div>
      {/* All items */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {itemsData.map((item) => (
          <button
            key={item.id}
            className="hover:bg-stone-900/30 border border-transparent hover:border hover:border-stone-800/50 md:p-6 p-3 rounded-2xl space-y-3 transition duration-300 ease-in-out"
            onClick={() => toggleModal(item)}
          >
            <div className="relative md:h-[25rem] h-[13rem]">
              <img src={item.image} alt={item.title} className="absolute object-cover w-full h-full rounded-lg" />
            </div>
            <div className="flex justify-between items-center">
              <h4>{item.title}</h4>
              <p className='text-lg'>{item.price}</p>
            </div>
          </button>
        ))}
      </div>
      {/* Drawer Modal */}
      <AnimatePresence>
        {isOpen && selectedItem && (
          <div className='relative'>
            <motion.div
              className="fixed inset-0 bg-stone-950/90 backdrop-blur-3xl md:top-[7.6rem] top-[9rem] md:mx-8 mx-4 rounded-t-3xl border border-stone-800/50 z-40"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* Close Button */}
              <button
                className="absolute md:-top-12 -top-10 right-0 size-9 z-50 flex justify-center items-center bg-stone-900/40 backdrop-blur-md hover:bg-stone-800/70 hover:text-stone-100 text-stone-300 rounded-full transition duration-300 ease-in-out"
                onClick={toggleModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:size-5 size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Content */}
              <div className='grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-4 w-full h-full md:p-8 p-5 overflow-auto'>
                {/* Image */}
                <div className="relative md:h-full h-[15rem]">
                  <img src={selectedItem.image} alt={selectedItem.title} className="absolute object-cover w-full h-full rounded-lg" />
                </div>
                <div>
                  {/* Title */}
                  <h2 className="leading-none md:text-3xl text-xl font-semibold">{selectedItem.title}</h2>
                  {/* Badge */}
                  <span className='inline-flex rounded-full px-2.5 py-1 md:text-xs text-[10px] text-indigo-400 border border-indigo-500/50 bg-indigo-700/10'>
                    Premium Site
                  </span>
                  {/* Price and Sold */}
                  <div className='flex items-center gap-3'>
                    <p className="text-stone-200 md:text-xl text-lg">{selectedItem.price}</p>
                    <p>(1 Sold)</p>
                  </div>
                  {/* Color Palette */}
                  <div>
                    <p className='mb-3'>Colors:</p>
                    <div className='flex items-center gap-3'>
                      <span class="flex size-3 bg-zinc-200 rounded-full"></span>
                      <span class="flex size-3 bg-indigo-200 rounded-full"></span>
                      <span class="flex size-3 bg-indigo-500 rounded-full"></span>
                    </div>
                  </div>
                  {/* 'Get this site' Button */}
                  <Link href={{
                    pathname: '/purchase',
                    query: {
                      image: selectedItem.image,
                      title: selectedItem.title,
                      description: selectedItem.description,
                      price: selectedItem.price,
                      features: JSON.stringify(selectedItem.features)
                    }
                  }}>
                    <button className="bg-stone-200 hover:bg-stone-300 text-stone-950 font-semibold py-2 px-4 rounded-md md:text-sm text-xs transition duration-300 ease-in-out active:scale-95">
                      Get this site
                    </button>
                  </Link>
                  {/* Features */}
                  <div className='space-y-3'>
                    <p>Features:</p>
                    <ul className='space-y-1'>
                      {selectedItem.features.map((feature, index) => (
                        <li key={index} className='md:text-sm text-xs text-stone-300 flex items-start gap-2.5'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 mt-[1.5px] md:mt-[2.5px]">
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Details */}
                  <div className='p-4 border border-stone-800/80 rounded-lg'>
                    <p className='mb-2.5'>Details</p>
                    <p><span className='text-stone-300'>Description:</span> {selectedItem.description}</p>
                    <p><span className='text-stone-300'>Technologies:</span> HTML, CSS, JavaScript, & Tailwind CSS.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )
        }
      </AnimatePresence >
    </motion.section >
  );
}
