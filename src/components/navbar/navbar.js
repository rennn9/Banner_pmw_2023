'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className='navbar-container'>
      <Link className={`navbar-link ${pathname === '/' ? 'active' : 'default'}`} href="/">
      Home
      </Link>

      <p>|</p>

      <Link className={`navbar-link ${pathname === '/diary' ? 'active' : 'default'}`} href="/diary">
      Fetch
      </Link>
    </div>
  )
}

export default Navbar
