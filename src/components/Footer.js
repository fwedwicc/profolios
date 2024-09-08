import Link from 'next/link'
import Image from 'next/image';
import profoliosLogo from '../../public/profolios-logo.png'

export function Footer() {

  return (
    <footer className='md:p-12 p-6 lg:px-36 md:px-24 space-y-12'>
      <div className='flex lg:flex-row flex-col lg:justify-between justify-center lg:items-start items-center gap-8'>
        {/* Brand Logo, Title and Description */}
        <div className='flex items-start gap-5'>
          <div className='relative w-24 h-auto'>
            <Image src={profoliosLogo} alt='profolios Logo' className='absolute object-cover border border-stone-800 rounded-xl' />
          </div>
          <div className='space-y-1.5'>
            <h3 className='leading-none'>profolios</h3>
            <p className='w-full max-w-xs'>Profolios delivers professional, ready-made portfolios for careers and personal branding, designed to help you stand out.</p>
          </div>
        </div>
        {/* Links */}
        <div className='flex gap-14'>
          {/* Site Links */}
          <ul>
            <li className='md:text-sm text-xs text-stone-400 mb-2'>Links</li>
            {[
              { label: 'Home', link: '/' },
              { label: 'Collection', link: '/collection' },
              { label: 'Pricing', link: '/pricing' },
              { label: 'Contact', link: '/contact' },
            ].map((link, index) => (
              <li key={index}>
                <Link href={link.link} className='md:text-sm text-xs hover:text-white transition duration-300 ease-in-out'>{link.label}</Link>
              </li>
            ))}
          </ul>
          {/* Legal Links */}
          <ul>
            <li className='md:text-sm text-xs text-stone-400 mb-2'>Legal</li>
            {[
              { label: 'Terms and Conditions', link: '/' },
              { label: 'Privacy Policy', link: '/' },
            ].map((link, index) => (
              <li key={index}>
                <Link href={link.link} className='md:text-sm text-xs hover:text-white transition duration-300 ease-in-out'>{link.label}</Link>
              </li>
            ))}
          </ul>
          {/* Social Links */}
          <ul>
            <li className='md:text-sm text-xs text-stone-400 mb-2'>Socials</li>
            {[
              { label: 'Facebook', accent: 'hover:text-blue-500', link: 'https://web.facebook.com/fwedwic' },
              { label: 'Instagram', accent: 'hover:text-rose-500', link: 'https://www.instagram.com/freefinnn/' },
              { label: 'LinkedIn', accent: 'hover:text-blue-500', link: 'https://www.linkedin.com/in/frederick-moreno/' },
              { label: 'Github', accent: 'hover:text-stone-500', link: 'https://github.com/fwedwicc/' },
            ].map((link, index) => (
              <li key={index}>
                <a href={link.link} target='_blank' rel='noopener noreferrer' className={`${link.accent} md:text-sm text-xs transition duration-300 ease-in-out`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Foot */}
      <div className='border-t border-stone-900 pt-6 flex md:flex-row flex-col md:justify-between justify-center items-center gap-1'>
        <span className='md:text-sm text-xs text-stone-400'>© 2024 • profolios</span>
        <span className='md:text-sm text-xs text-stone-400'>Crafted by <a href='https://fwedwicc.github.io/FM-Portfolio/' target='_blank' rel='noopener noreferrer' className='text-stone-200 hover:text-indigo-500 transition duration-300 ease-in-out'>Frederick Moreno</a></span>
      </div>
    </footer>
  )
}
