'use client'
import { motion } from 'framer-motion';
import useLenis from '../hooks/useLenis';

// Profession Links
const professionLinks = [
  {
    link: 'https://www.linkedin.com/in/frederick-moreno/',
    svg: [
      'M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z',
      'M7.2 8.809H4V19.5h3.2V8.809Z'
    ],
    text: 'Frederick Moreno',
    accent: 'hover:border-blue-500/50 hover:bg-blue-700/10 hover:text-blue-400'
  },
  {
    link: 'https://github.com/fwedwicc/',
    svg: 'M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z',
    text: 'fwedwicc',
    accent: 'hover:border-neutral-500/50 hover:bg-neutral-700/10 hover:text-neutral-400'
  },
  {
    link: 'https://dribbble.com/fwedwic/',
    svg: 'M12 2a10 10 0 1 0 10 10A10.009 10.009 0 0 0 12 2Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.093 20.093 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM10 3.707a8.82 8.82 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.755 45.755 0 0 0 10 3.707Zm-6.358 6.555a8.57 8.57 0 0 1 4.73-5.981 53.99 53.99 0 0 1 3.168 4.941 32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.641 31.641 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM12 20.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 15.113 13a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z',
    text: 'fwedwic',
    accent: 'hover:border-pink-500/50 hover:bg-pink-700/10 hover:text-pink-400'
  },
  {
    link: 'https://fwedwicc.github.io/FM-Portfolio/',
    svg: 'M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z',
    text: 'FM Portfolio',
    accent: 'hover:border-indigo-500/50 hover:bg-indigo-700/10 hover:text-indigo-400'
  },
]

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
        <div className='border'>

        </div>
        {/* Social, contacts and other description */}
        <div className='border space-y-4'>
          {/* Badge */}
          <span className='inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 md:text-xs text-[10px] border text-stone-300 border-stone-500/50 bg-stone-700/10'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
              <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
            </svg>
            Reach out to us
          </span>
          <h1>We'd love to <br /> hear from you!</h1>
          <p className='w-full '>Ullamco pariatur culpa adipisicing commodo minim velit deserunt in elit pariatur veniam elit fugiat incididunt.asdf asdf: <a href='mailto:moreno.frederick.capiral@gmail.com' className='text-stone-300 underline'>moreno.frederick.capiral@gmail.com</a></p>
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
            <ul>
              <li><a href='#'>Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
