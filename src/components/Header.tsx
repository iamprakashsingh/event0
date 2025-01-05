import Link from 'next/link'
import React from 'react'
import Logo from './logo'

export default function Header() {
  return (
    <header className='flex items-center justify-between border-b border-white/10 h-14 px-9'>
        <Logo/>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events/all">All Events</Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}
