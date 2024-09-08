import Link from 'next/link'
import Image from 'next/image';
import meshGradient from '../../public/mesh-gradient-01.png'

export function GetInTouch() {
  return (
    <section className='relative md:px-12 md:pb-12 md:pt-5 px-6 pb-6 pt-1 border border-stone-800 rounded-2xl  md:rounded-3xl md:space-y-6 space-y-5'>
      <Image src={meshGradient} alt='profolios Logo' className='absolute object-cover w-full h-full -z-10 top-0 left-0 rounded-2xl  md:rounded-3xl' />
      <h2>Find Your Perfect Website <br className="md:block hidden" /> or Let’s Build It Together!</h2>
      <div className="space-y-4">
        <p className="w-full max-w-xl mb-6">Whether you’re looking to purchase a ready-made portfolio or want a custom-built website tailored to your needs, I’ve got you covered. Fill out the form, and I’ll get in touch to discuss your project and help you take the next step.</p>
        <Link href='/contact'>
          <button
            className="inline-flex items-center gap-2 bg-stone-200 hover:bg-stone-300 text-stone-950 font-semibold py-2 px-4 rounded-md md:text-sm text-xs transition duration-300 ease-in-out active:scale-95"
          >
            Get in touch
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 md:size-5 size-4">
              <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  )
}