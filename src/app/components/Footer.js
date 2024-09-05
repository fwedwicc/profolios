import Link from 'next/link'

export function Footer() {

  return (
    <footer className='md:p-12 p-6 md:px-36 space-y-12'>
      <div className='flex lg:flex-row flex-col lg:justify-between justify-center lg:items-start items-center gap-8'>
        {/* Brand Logo, Title and Description */}
        <div className='flex items-start gap-5'>
          <div className='relative w-24 h-auto'>
            <img src='https://placehold.co/150x150' alt='' className='absolute object-cover rounded-lg' />
          </div>
          <div className='space-y-1.5'>
            <h3 className='leading-none'>profolios</h3>
            <p className='w-full max-w-xs'>Nulla dolor aliqua sunt culpa.In deserunt ad qui duis adipisicing fugiat irure. Duis officia voluptate incididunt culpa.</p>
          </div>
        </div>
        {/* Links */}
        <div className='flex gap-12'>
          {/* Site Links */}
          <ul className=''>
            <li className='md:text-sm text-xs text-stone-400 mb-2'>Links</li>
            {[
              { label: 'Home', link: '/' },
              { label: 'Home', link: '/' },
              { label: 'Home', link: '/' },
            ].map((link, index) => (
              <li key={index}>
                <Link href={link.link} className='md:text-sm text-xs'>{link.label}</Link>
              </li>
            ))}
          </ul>
          {/* Legal Links */}
          <ul className=''>
            <li className='md:text-sm text-xs text-stone-400 mb-2'>Legal</li>
            {[
              { label: 'Home', link: '/' },
              { label: 'Home', link: '/' },
              { label: 'Home', link: '/' },
            ].map((link, index) => (
              <li key={index}>
                <Link href={link.link} className='md:text-sm text-xs'>{link.label}</Link>
              </li>
            ))}
          </ul>
          {/* Social Links */}
          <ul className=''>
            <li className='md:text-sm text-xs text-stone-400 mb-2'>Socials</li>
            {[
              { label: 'Home', link: '/' },
              { label: 'Home', link: '/' },
              { label: 'Home', link: '/' },
            ].map((link, index) => (
              <li key={index}>
                <Link href={link.link} className='md:text-sm text-xs'>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Foot */}
      <div className='border-t border-stone-900 pt-6 flex md:flex-row flex-col md:justify-between justify-center items-center gap-1'>
        <span className='md:text-sm text-xs text-stone-400'>2024 profolios</span>
        <span className='md:text-sm text-xs text-stone-400'>Crafted by <span className='text-stone-200'>Frederick Moreno</span></span>
      </div>
    </footer>
  )
}
