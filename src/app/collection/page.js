'use client'

import { useState } from 'react';
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion';

// Dummy data for the items
const items = [
  {
    id: 1,
    image: 'https://placehold.co/600x400',
    title: 'Item 1',
    price: '$10.00',
    description: 'Description for Item 1. This is a great product that you will love!',
  },
  {
    id: 2,
    image: 'https://placehold.co/600x400',
    title: 'Item 2',
    price: '$20.00',
    description: 'Description for Item 2. This is another great product that you should check out!',
  },
  {
    id: 3,
    image: 'https://placehold.co/600x400',
    title: 'Item 3',
    price: '$30.00',
    description: 'Description for Item 3. This product is simply amazing!',
  },
];

export default function Collection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleModal = (item) => {
    setSelectedItem(item);
    setIsOpen(!isOpen);
  };

  return (
    <div className='p-12 pt-36 space-y-12'>
      {/* Title and Description */}
      <div className="space-y-1">
        <h1>Collection</h1>
        <p>This page contains collection page contents.</p>
      </div>
      {/* All items */}
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <button
            key={item.id}
            className="hover:bg-stone-900/30 border border-transparent hover:border hover:border-stone-800/50 p-6 rounded-2xl space-y-3 transition duration-300 ease-in-out"
            onClick={() => toggleModal(item)}
          >
            <div className="relative h-[25rem]">
              <img src={item.image} alt={item.title} className="absolute object-cover w-full h-full rounded-lg" />
            </div>
            <div className="flex justify-between items-center">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          </button>
        ))}
      </div>
      {/* Drawer Modal */}
      <AnimatePresence>
        {isOpen && selectedItem && (
          <div className='relative'>
            <motion.div
              className="fixed inset-0 bg-stone-950/90 backdrop-blur-3xl top-[7.6rem] mx-8 rounded-t-3xl border border-stone-800/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close Button */}
              <button
                className="absolute -top-12 right-0 size-9 flex justify-center items-center hover:bg-stone-800/70 hover:text-stone-100 text-stone-300 rounded-full transition duration-300 ease-in-out"
                onClick={toggleModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Content */}
              <div className='grid grid-cols-2 gap-12 w-full h-full p-8'>
                <div className="relative h-full">
                  <img src={selectedItem.image} alt={selectedItem.title} className="absolute object-cover w-full h-full rounded-lg" />
                </div>
                <div className=''>
                  <h2 className="leading-none text-2xl font-bold">{selectedItem.title}</h2>
                  <p className="">{selectedItem.description}</p>
                  <Link href={{
                    pathname: '/purchase',
                    query: {
                      image: selectedItem.image,
                      title: selectedItem.title,
                      description: selectedItem.description,
                      price: selectedItem.price,
                    }
                  }}>
                    Get
                  </Link>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
