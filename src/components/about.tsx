import React from 'react'
import { PreTitle } from './pre-title'
import Image from 'next/image'
import { Button } from './button'

export const About = () => {
  return (
    <section className="pt-16 px-5 xl:pt-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-6 xl:flex-row xl:items-center">
          <div className="flex-1">
            <div className="max-w-[540px]">
             <PreTitle title="About us"/>
             <h2 className='mb-4 text-primary'>Focused On Excellence in every project</h2>
             <p className='mb-11 text-primary'>
              maiores sint est harum? Quas placeat, similique illo suscipit minus
              delectus, expedita quisquam consectetur odit aliquid recusandae
              sequi repellat praesentium?  
             </p>
             <div className="flex flex-col mb-10 w-max text-right">
              <Image 
                alt=''
                src={'./assets/img/about/signature.svg'}
                width={154}
                height={38}
              />
              <p className="text-primary">
                Ceo Company
              </p>
             </div>
             <Button title='Contact us' />
            </div>
          </div>
          <div className="flex-1 xl:flex xl:justify-center">
            <div className="xl:w-[444px] xl:h-[493px] relative">
              <Image
                alt=''
                src={"/assets/about.jpg"}
                width={444}
                height={492}
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
