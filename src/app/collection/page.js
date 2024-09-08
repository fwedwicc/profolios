'use client'

import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import useLenis from '../../hooks/useLenis';
import { motion, AnimatePresence } from 'framer-motion';
import itemsData from '../../constants/data'
import { tabItems } from '../../constants/data';
import { GetInTouch } from '../../components/GetInTouch';

export default function Collection() {
  useLenis()
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleModal = (item) => {
    setSelectedItem(item);
    setIsOpen(!isOpen);
  };

  const [activeTab, setActiveTab] = useState('allItems');

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:p-12 p-6 space-y-24'
    >
      <div className='lg:px-24 md:px-16 pt-36'>
        {/* Title and Description */}
        <div className="space-y-1 mb-12">
          <h1>Collection</h1>
          <p>This page contains collection page contents.</p>
        </div>
        {/* Tab Buttons */}
        <div className='gap-3.5 flex flex-wrap'>
          {tabItems.map((item) => (
            <motion.button
              key={item.value}
              className={`flex justify-center md:text-sm text-xs items-center gap-2 px-4 py-2 rounded-md ${activeTab === item.value ? 'text-stone-800 bg-stone-200 font-semibold' : 'text-stone-300 bg-transparent hover:bg-stone-800/40 transition duration-300 ease-in-out'
                }`}
              onClick={() => setActiveTab(item.value)}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {item.icon}
            </motion.button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {['premiumItems', 'standardItems', 'basicItems', 'allItems'].includes(activeTab) && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='grid lg:grid-cols-2 grid-cols-1 gap-4'
              >
                {itemsData
                  .find((category) => category[activeTab])
                [activeTab].map((item) => (
                  <button
                    key={item.id}
                    className="self-start hover:bg-stone-900/30 border border-transparent hover:border hover:border-stone-800/50 md:p-6 p-3 rounded-2xl space-y-3 transition duration-300 ease-in-out"
                    onClick={() => toggleModal(item)}
                  >
                    <div className="relative lg:h-[25rem] md:h-[20rem] h-[13rem]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="fill" // Makes the image cover the container
                        objectFit="cover" // Ensures the image covers the container while maintaining its aspect ratio
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="md:text-xl text-base text-start">{item.title}</h4>
                      <p className="text-stone-300 text-base">₱{item.price}.00</p>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
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
                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-4 w-full h-full md:p-8 p-5 overflow-y-auto md:custom-scrollbar invisible-scrollbar'>
                  {/* Image */}
                  <div className="relative md:h-full h-[13rem]">
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      layout="fill" // Makes the image cover the container
                      objectFit="cover" // Ensures the image covers the container while maintaining its aspect ratio
                      className="rounded-lg"
                    />
                  </div>
                  <div className='space-y-4'>
                    {/* Title */}
                    <h2 className="leading-none md:text-3xl text-xl font-semibold">{selectedItem.title}</h2>
                    <div className='space-y-3'>
                      {/* Badge */}
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 md:text-xs text-[10px] border ${selectedItem.price === 799 ? 'text-yellow-400 border-yellow-500/50 bg-yellow-700/10' : selectedItem.price === 999 ? 'text-green-400 border-green-500/50 bg-green-700/10' : 'text-indigo-400 border-indigo-500/50 bg-indigo-700/10'}`}>
                        {selectedItem.price === 799 ? 'Basic Site' : selectedItem.price === 999 ? 'Standard Site' : 'Premium Site'}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
                          <path fillRule="evenodd" d={selectedItem.price === 799 ? 'M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z' : selectedItem.price === 999 ? 'M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z' : 'M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z'} clipRule="evenodd" />
                        </svg>
                      </span>
                      {/* Price and Sold */}
                      <div className='flex items-center gap-3'>
                        <p className="text-stone-200 md:text-xl text-lg">₱{selectedItem.price}.00</p>
                        <p>({selectedItem.sold} Sold)</p>
                      </div>
                      <div>
                        {/* 'Get this site' Button */}
                        <Link href={{
                          pathname: '/purchase',
                          query: {
                            image: selectedItem.image,
                            title: selectedItem.title,
                            description: selectedItem.description,
                            techs: selectedItem.techs,
                            price: selectedItem.price,
                            features: JSON.stringify(selectedItem.features)
                          }
                        }}>
                          <button className="bg-stone-200 hover:bg-stone-300 text-stone-950 font-semibold py-2 px-4 rounded-md md:text-sm text-xs transition duration-300 ease-in-out active:scale-95">
                            Get this site
                          </button>
                        </Link>
                      </div>
                    </div>
                    {/* Color Palette */}
                    <div>
                      <p className='mb-3'>Colors:</p>
                      <div className="flex items-center gap-3">
                        {selectedItem.colors.map((color, index) => (
                          <span key={index} className={`flex size-3 ${color} rounded-full`}></span>
                        ))}
                      </div>
                    </div>
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
                      <p className='mb-2.5'>Details:</p>
                      <p><span className='text-stone-300'>Description:</span> {selectedItem.description}</p>
                      <p><span className='text-stone-300'>Technologies:</span> {selectedItem.techs}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )
          }
        </AnimatePresence >
      </div>
      <GetInTouch />
    </motion.section >
  );
}
