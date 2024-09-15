'use client'
import { motion } from 'framer-motion';
import Link from 'next/link'
import useLenis from '../../hooks/useLenis';
import { GetInTouch } from '../../components/GetInTouch';

const CardContent = ({ title, description, price, benefits = [] }) => {
  return (
    <div className='space-y-5'>
      {/* Badge */}
      <span className={`inline-flex items-center justify-center rounded-full size-10 border ${price === 799 ? 'text-yellow-400 border-yellow-500/50 bg-yellow-700/10' : price === 999 ? 'text-green-400 border-green-500/50 bg-green-700/10' : 'text-indigo-400 border-indigo-500/50 bg-indigo-700/10'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d={price === 799 ? 'M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z' : price === 999 ? 'M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z' : 'M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z'} clipRule="evenodd" />
        </svg>
      </span>
      <div className='space-y-2'>
        {/* Title */}
        <h3 className='leading-none md:text-3xl text-xl font-semibold'>{title}</h3>
        {/* Description */}
        <p>{description}</p>
      </div>
      {/* Price */}
      <div className='flex items-start md:gap-2 gap-1.5'>
        <p className={`${price === 799 ? 'text-yellow-500' : price === 999 ? 'text-green-500' : 'text-indigo-500'} md:text-2xl text-lg`}>₱</p>
        <h2 className='font-normal'>{price}.00</h2>
      </div>
      {/* Benefits */}
      <div className='space-y-3'>
        <p>Benefits:</p>
        <ul className='space-y-1'>
          {benefits.map((benefit, index) => (
            <li key={index} className='md:text-sm text-xs text-stone-300 flex items-start gap-2.5'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 mt-[1.5px] md:mt-[2.5px]">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
              </svg>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

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
        <div className='space-y-5'>
          <h1>Fair pricing for <br className='md:block hidden' /> your site.</h1>
          <p className='w-full max-w-lg'>Reprehenderit ea officia aliquip minim proident nulla et nisi ad. Anim ea non eiusmod nulla ad anim ullamco non consequat aute aute deserunt exercitation consequat. Tempor ut nisi esse aliqua eiusmod consequat. </p>
          <p>Ready to choose? Browse the <Link href='/collection' className='w-full max-w-lg md:text-sm text-xs text-stone-300 underline'>full collection here.</Link></p>
        </div>
        <div className='grid grid-cols-1 gap-9 mt-12'>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-9'>
            <div className='flex items-center md:justify-end justify-center'>
              {/* Basic Site Card */}
              <div className='border-stone-800/30 bg-stone-900/20 border rounded-3xl w-full max-w-lg md:p-8 p-6'>
                <CardContent
                  title='Basic Sites'
                  description='Get started with a professional portfolio or website with our Basic Site package. This option includes a ready-to-use site delivered as a zip file. Note that style and content modifications are not included and will require additional charges.'
                  price={799}
                  benefits={['Receive a fully functional website as a zip file', 'Ideal for those who prefer to handle their own customization', 'Cost-effective solution for a basic online presence']}
                />
              </div>
            </div>
            <div className='flex items-center md:justify-start justify-center'>
              {/* Standard Site Card */}
              <div className='border-stone-800/30 bg-stone-900/20 border rounded-3xl w-full max-w-lg md:p-8 p-6'>
                <CardContent
                  title='Standard Sites'
                  description='Upgrade to the Standard Site package for a ready-to-use website and free content modifications. This option includes the site delivered as a zip file with content adjustments included. Style modifications are available at an additional cost.'
                  price={999}
                  benefits={['Includes a zip file with your website', 'Free content modifications to tailor the site to your needs', 'Cost-effective with optional style customization']}
                />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            {/* Premium Site Card */}
            <div className='border-stone-800/30 bg-indigo-800/20 border rounded-3xl w-full max-w-lg p-px'>
              <div className='flex items-center gap-1.5 text-indigo-500 md:px-8 px-6 md:py-2 py-1.5'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <p className='text-indigo-500 md:text-sm text-xs font-semibold'>Best pick for you!</p>
              </div>
              <div className='md:p-8 p-6 bg-stone-950 rounded-b-[23px] rounded-t-3xl'>
                <CardContent
                  title='Premium Sites'
                  description='Our Premium Site package offers a top-tier website with comprehensive customization. You’ll receive a zip file with your site and enjoy free modifications to both the site’s content and styles, ensuring a fully personalized online presence.'
                  price={1099}
                  benefits={['Complete website delivered as a zip file', 'Free modifications for both content and styles', 'Fully tailored to meet your specific requirements']}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </motion.section>
  );
}
