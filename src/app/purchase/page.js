'use client';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import PurchaseForm from '../components/PurchaseForm';
import { GetInTouch } from '../components/GetInTouch';

import useLenis from '../hooks/useLenis';

export default function Purchase() {
  useLenis()
  const searchParams = useSearchParams();
  const image = searchParams.get('image');
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const techs = searchParams.get('techs');
  const price = searchParams.get('price');

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:p-12 p-6 space-y-24'
    >
      <div className='lg:px-24 md:px-16 pt-36'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-12'>
          {/* Left Content */}
          <div className='lg:order-1 order-2 space-y-4'>
            <div className="relative md:h-[25rem] h-[14rem]">
              {image && <img src={image} alt={title} className="absolute object-cover w-full h-full rounded-lg" />}
            </div>
            <div className='space-y-5'>
              <div className='flex justify-between items-start'>
                <h4 className='md:text-xl text-base text-start'>{title}</h4>
                <p className="text-stone-300 text-base">₱{price}.00</p>
              </div>
              <div className='p-4 border border-stone-800/80 rounded-lg'>
                <p className='mb-2.5'>Details:</p>
                <p><span className='text-stone-300'>Description:</span> {description}</p>
                <p><span className='text-stone-300'>Technologies:</span> {techs}</p>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className='lg:order-2 order-1 self-start'>
            <PurchaseForm />
          </div>
        </div>
      </div>
      <GetInTouch />
    </motion.section>
  );
}
