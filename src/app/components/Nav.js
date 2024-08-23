'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className='bg-neutral-900/50 border border-neutral-800/30 text-sm rounded-full gap-8 px-5 fixed top-10 w-auto flex left-1/2 -translate-x-1/2'>
      <Link href='/' className={`${pathname === '/' ? 'text-green-500' : ''} py-4 px-2 transition duration-300 ease-in-out`} >
        Home
      </Link>
      <Link href='/collection' className={`${pathname === '/collection' ? 'text-green-500' : ''} py-4 px-2 transition duration-300 ease-in-out`} >
        Collection
      </Link>
      <Link href='/pricing' className={`${pathname === '/pricing' ? 'text-green-500' : ''} py-4 px-2 transition duration-300 ease-in-out`} >
        Pricing
      </Link>
      <Link href='/guide' className={`${pathname === '/guide' ? 'text-green-500' : ''} py-4 px-2 transition duration-300 ease-in-out`} >
        Guide
      </Link>
      <Link href='/contact' className={`${pathname === '/contact' ? 'text-green-500' : ''} py-4 px-2 transition duration-300 ease-in-out`} >
        Contact
      </Link>
    </nav>
  )
}
