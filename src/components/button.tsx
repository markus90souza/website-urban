import React, { type FC, type HtmlHTMLAttributes } from 'react'
import { RiArrowRightUpFill } from 'react-icons/ri'

type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement> & {
  title: string
}
const Button: FC<ButtonProps> = ({ title, ...props }) => {
  return (
    <button {...props} className='flex items-center justify-between w-[210px] min-w-[200px] h-[54px] py-[5px] pr-[5px] pl-[10px] group bg-app'>
      <div className="flex-1 font-sans font-bold text-sm text-center tracking-[1.2px] uppercase text-primary">
        {title}
      </div>

      <div className="w-11 h-11 bg-primary flex items-center justify-center">
        <RiArrowRightUpFill className='text-white text-xl group-hover:rotate-45 transition-all duration-200' /> 
      </div>
    </button>
  )
}

export { Button }
