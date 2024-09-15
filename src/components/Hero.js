import Link from 'next/link'
import Image from 'next/image';

export function Hero() {
  return (
    <section className='pt-36 space-y-6'>
      <div className='lg:px-24 md:px-16 flex justify-between items-end'>
        {/* Headings Container */}
        <div>
          <h1>Home</h1>
          <h1>Homee</h1>
          <h1>Homeee.</h1>
        </div>
        {/* CTAs Container */}
        <div className='flex items-center gap-4'>
          {/* Contact Button Link */}
          <Link href='/contact'>
            <button
              className="inline-flex items-center gap-2 bg-stone-800/50 hover:bg-stone-800/70 text-stone-200 py-2 px-4 rounded-md md:text-sm text-xs transition duration-300 ease-in-out active:scale-95"
            >
              Get in touch
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 md:size-5 size-4">
                <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
          {/* Collections Button Link */}
          <Link href='/collection'>
            <button
              className="inline-flex items-center gap-2 bg-stone-200 hover:bg-stone-300 text-stone-950 font-semibold py-2 px-4 rounded-md md:text-sm text-xs transition duration-300 ease-in-out active:scale-95"
            >
              View collections
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 md:size-5 size-4">
                <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      {/* Title, Description and Graphics Container */}
      <div className='relative border border-stone-800 rounded-2xl md:rounded-3xl md:p-12 p-6'>
        {/* <Image src={meshGradient} alt='profolios Logo' className='absolute object-cover w-full h-full -z-10 top-0 left-0 rounded-2xl  md:rounded-3xl' /> */}

        <p className="w-full max-w-xl">Whether you&apos;re looking to purchase a ready-made portfolio or want a custom-built website tailored to your needs, I&apos;ve got you covered. Fill out the form, and I&apos;ll get in touch to discuss your project and help you take the next step.</p>
      </div>
    </section>
  )
}