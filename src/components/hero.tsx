import React from 'react'
import { Button } from './button'


export const Hero = () => {
  return (
    <section className={`h-screen bg-gradient-to-t from-[#FFC221] to-[#FFD76E]`}>
      <div className='absolute z-10 inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70' />
      <div className="container mx-auto flex items-center h-full">
        <div className="z-20 flex flex-col items-center mx-auto text-white max-w-[600px] text-center xl:text-left xl:mx-0 xl:items-start">
          <h1 className='mb-4'>
            <span className='text-app'>Building</span> robust lasting solutions
          </h1>

          <p className='mb-9'>
            We are a team of experienced developers who specialize in building robust and lasting solutions for our clients.
          </p>

          <div className="">
            <Button  title='See our work' />
          </div>
        </div>
      </div>
    </section>
  )
}
