'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className='bg-neutral-700 flex'>
      <Link href='/' className={`${pathname === '/' ? 'active' : ''}`} >
        Home
      </Link>
      <Link href='/collection' className={`${pathname === '/collection' ? 'active' : ''}`} >
        Koleksyon
      </Link>
    </nav>
  )
}
