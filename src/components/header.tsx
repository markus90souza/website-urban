'use client'

import type { FC } from 'react'


import { Link as ScrollLink } from 'react-scroll'

const links = [
  {
    name: 'home',
    path: 'home'
  },
  {
    name: 'about',
    path: 'about'
  },
  {
    name: 'services',
    path: 'services'
  },
  {
    name: 'projects',
    path: 'projects'
  },
  {
    name: 'contact',
    path: 'contact'
  }
]

 const Header: FC = () => {
  return (
    <header className='bg-primary py-4 sticky top-0'>
      <nav className='container mx-auto'>
        <ul className='flex gap-12 text-white'>
          {
            links.map((link, index) => (
            
              <li key={index}>
                <ScrollLink
                  to={link.path}
                  spy
                  smooth
                  className='cursor-pointer hover:text-accent'
                  activeClass='text-accent '
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export { Header }
