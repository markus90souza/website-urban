'use client'

import type { FC } from 'react'
import { RiArrowRightUpFill } from 'react-icons/ri'
import { Link as ScrollLink } from 'react-scroll'
import { Logo } from './logo'

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
      <div className="container px-5 xl:px-0 mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <nav className='hidden gap-12 items-center xl:flex'>
            <ul className='flex gap-8 text-white'>
              {
                links.map((link, index) => (
                
                  <li key={index} className='after:content-["/"] after:mx-2 last:after:content-none after:text-app text-sm text-white tracking-[1.2px] uppercase font-medium font-sans'>
                    <ScrollLink
                      to={link.path}
                      spy
                      smooth
                      className='cursor-pointer'
                      activeClass='text-app'
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                ))
              }
            </ul>

            <button className='flex bg-white items-center justify-between w-[200px] min-w-[200px] h-[56px] py-[5px] pr-[10px] pl-[5px] group'>
              <div className="flex-1 font-sans font-bold text-sm text-center tracking-[1.2px] uppercase text-primary">
                Get a quote
              </div>

              <div className="w-11 h-11 bg-primary flex items-center justify-center">
                <RiArrowRightUpFill className='text-white text-xl group-hover:rotate-45 transition-all duration-200' /> 
              </div>
            </button>
          </nav>
          <div className="xl:hidden">mobile</div>
        </div>
      </div>
    </header>
  )
}

export { Header }
