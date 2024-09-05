'use client'
import { motion } from 'framer-motion';
import useLenis from '../hooks/useLenis';
import { professionLinks, socialLinks } from '../constants/data';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  useLenis()
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:p-12 p-6 md:px-36 md:pt-44 pt-36'
    >
      <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
        {/* Form */}
        <div className='order-2 md:order-1'>
          <ContactForm />
        </div>
        {/* Social, contacts and other description */}
        <div className='order-1 md:order-2 space-y-4'>
          {/* Badge */}
          <span className='inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 md:text-xs text-[10px] border text-stone-300 border-stone-500/50 bg-stone-700/10'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
              <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
            </svg>
            Reach out to me
          </span>
          <h1>Love to hear <br /> from you!</h1>
          <p className='w-full max-w-lg'>
            Whether you have questions or are ready to get started on your custom portfolio website, I'm here to assist! Share your ideas, and I'll personally get back to you. Feel free to reach out at: <a href='mailto:moreno.frederick.capiral@gmail.com' className='text-stone-300 underline'>moreno.frederick.capiral@gmail.com</a>
          </p>
          {/* Profession Links */}
          <div className='space-y-3'>
            <p>Professions:</p>
            <ul className='flex flex-wrap gap-2.5'>
              {professionLinks.map((item, index) => (
                <li className="inline-flex" key={index}>
                  <a href={item.link} target='_blank' rel='noopener noreferrer' className={`flex items-center gap-1.5 border text-stone-200 border-stone-800 px-2.5 py-1.5 rounded-full text-xs transition duration-300 ease-in-out ${item.accent}`}>
                    <svg className="md:size-5 size-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      {Array.isArray(item.svg) ? (
                        item.svg.map((d, i) => <path key={i} fillRule="evenodd" d={d} clipRule="evenodd" />)
                      ) : (
                        <path fillRule="evenodd" d={item.svg} clipRule="evenodd" />
                      )}
                    </svg>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Social Links */}
          <div className='space-y-3'>
            <p>Socials:</p>
            <ul className='flex flex-wrap gap-2.5'>
              {socialLinks.map((item, index) => (
                <li className='inline-flex' key={index}>
                  <a href={item.link} target='_blank' rel='noopener noreferrer' className='rounded-full hover:bg-stone-800/50 p-2 transition duration-300 ease-in-out group'>
                    <svg className={`shrink-0 md:size-5 size-4 transition duration-300 ease-in-out ${item.accent}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" fill-rule="evenodd" d={item.svg} clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
