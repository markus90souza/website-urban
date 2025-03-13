
import React, { type FC } from 'react'

type PreTitleProps = {
  title: string
  center?: boolean
}

const PreTitle: FC<PreTitleProps> = ({ title, center = false }) => {
  return (
    <div className={`flex items-center gap-3 mb-4 ${center && 'justify-center'}`}>
     <div className="w-2 h-2 bg-app" />
      <p className='font-sans text-primary tracking-[3.2px] uppercase'>{title}</p>
     <div className="w-2 h-2 bg-app" />
    </div>
  )
}

export { PreTitle }
