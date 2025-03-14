import React from 'react'
import { PreTitle } from './pre-title'

import { RiArrowRightUpLine, RiCheckboxCircleFill  } from 'react-icons/ri'
import Image from 'next/image'
import Link from 'next/link'

const projectsData = [
  {
    img: '/assets/img/work/restoration.jpg',
    title: 'Restoration',
    description: "elit Quisquam, voluptatum.",
    url: '#',
  },
  {
    img: '/assets/img/work/construction.jpg',
    title: 'Construction',
    description: "elit Quisquam, voluptatum.",
    url: '#',
  },
  {
    img: '/assets/img/work/renovation.jpg',
    title: 'Renovation',
    description: "elit Quisquam, voluptatum.",
    url: '#',
  },
  {
    img: '/assets/img/work/consulting.jpg',
    title: 'Consultation',
    description: "elit Quisquam, voluptatum.",
    url: '#',
  } 
  
]
export const Work = () => {
  return (
    <section className='pt-16 px-5 xl:pt-32' id='projects'>
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mx-auto mb-20">
          <PreTitle title="Projects" center />
          <h2 className="mb-4 text-primary">
            Our Work
          </h2>
          <p className="mx-auto max-w-[480px] mb-11 text-primary">
            Lelit.
            Dolores illo commodi harum nam hic quisquam doloribus beatae
            dolorem alias sequi,
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {
          projectsData.map((project, index) => (
            <div key={index}  className="w-full flex flex-1 justify-center h-[492px] overflow-hidden relative group">
              <Image 
                src={project.img}
                alt={project.title}
                fill
                objectFit='cover'
                className='object-cover'
                quality={100}
              />
              <div className="w-[90%] h-[84px] bg-primary absolute bottom-4 flex items-center justify-between md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-500">
                <div className="px-2 py-2">
                  <h4 className='font-sans font-semibold text-white tracking-[1px] uppercase'>
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-1">
                    <RiCheckboxCircleFill  className='text-xl text-app'/>
                    <p className='text-sm'>{project.description}</p>
                  </div>
                </div>
                  <Link href={project.url} className='w-[44px] h-[44px] bg-app text-primary flex items-center justify-center text-2xl absolute right-3'>
                    <RiArrowRightUpLine />
                  </Link>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
