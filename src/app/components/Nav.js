'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className='bg-stone-900/90 z-40 border backdrop-blur-md border-stone-800/30 text-sm rounded-full md:py-2.5 py-2 md:px-5 px-3 fixed md:top-12 top-14 w-auto flex left-1/2 -translate-x-1/2'>
      <Link href='/' className={`${pathname === '/' ? 'text-white' : 'text-stone-400'} md:text-sm text-xs rounded-full md:py-2.5 py-2 md:px-5 px-3 transition duration-300 ease-in-out`} >
        Home
      </Link>
      <Link href='/collection' className={`${pathname === '/collection' ? 'text-white' : 'text-stone-400'} md:text-sm text-xs rounded-full md:py-2.5 py-2 md:px-5 px-3 transition duration-300 ease-in-out`} >
        Collection
      </Link>
      <Link href='/pricing' className={`${pathname === '/pricing' ? 'text-white' : 'text-stone-400'} md:text-sm text-xs rounded-full md:py-2.5 py-2 md:px-5 px-3 transition duration-300 ease-in-out`} >
        Pricing
      </Link>
      <Link href='/contact' className={`${pathname === '/contact' ? 'text-white' : 'text-stone-400'} md:text-sm text-xs rounded-full md:py-2.5 py-2 md:px-5 px-3 transition duration-300 ease-in-out`} >
        Contact
      </Link>
    </nav>
  )
}
