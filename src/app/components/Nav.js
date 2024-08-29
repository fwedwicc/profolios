'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className='bg-stone-900/50 border backdrop-blur-md border-stone-800/30 text-sm rounded-full py-2 px-5 fixed top-10 w-auto flex left-1/2 -translate-x-1/2'>
      <Link href='/' className={`${pathname === '/' ? 'text-white' : 'text-stone-400'} rounded-full py-3 px-5 transition duration-300 ease-in-out`} >
        Home
      </Link>
      <Link href='/collection' className={`${pathname === '/collection' ? 'text-white' : 'text-stone-400'} rounded-full py-3 px-5 transition duration-300 ease-in-out`} >
        Collection
      </Link>
      <Link href='/pricing' className={`${pathname === '/pricing' ? 'text-white' : 'text-stone-400'} rounded-full py-3 px-5 transition duration-300 ease-in-out`} >
        Pricing
      </Link>
      <Link href='/guide' className={`${pathname === '/guide' ? 'text-white' : 'text-stone-400'} rounded-full py-3 px-5 transition duration-300 ease-in-out`} >
        Guide
      </Link>
      <Link href='/contact' className={`${pathname === '/contact' ? 'text-white' : 'text-stone-400'} rounded-full py-3 px-5 transition duration-300 ease-in-out`} >
        Contact
      </Link>
    </nav>
  )
}
