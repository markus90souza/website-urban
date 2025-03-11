'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import { RiMenu2Fill, RiMenu3Fill, RiMenu5Fill } from 'react-icons/ri'
import { Logo } from './logo'
import { Socials } from './socials'
import { Link as ScrollLink } from 'react-scroll'
import { useState } from 'react'

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

const MenuMobile = () => {

  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen(!open)
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger onClick={handleMenu} className='text-white text-3xl flex items-center justify-center'>
        <RiMenu3Fill className="" />
      </SheetTrigger>

      <SheetContent className='bg-primary border-none text-white'>
        <div className="flex flex-col pt-16 pb-8  items-center justify-between h-full">

          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className='sr-only'>
              Menu mobile
            </SheetDescription>
          </SheetHeader>

          <ul className='w-full flex flex-col gap-10 items-center justify-center'>
            {
              links.map((link, index) => (
                <li key={index} className='font-sans font-medium text-white tracking-[1.2px] uppercase'>
                  <ScrollLink
                    to={link.path}
                    spy
                    smooth
                    duration={200}
                    className='cursor-pointer'
                    activeClass='text-app'
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))
            }
          </ul>

          <Socials containerStyle='text-white flex text-xl gap-6' />
        </div>
      </SheetContent>
     
    </Sheet>
  )
}

export { MenuMobile }
