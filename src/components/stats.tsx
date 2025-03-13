import { useRef } from 'react'
import { useInView  } from 'framer-motion'
import CountUp from "react-countup"

const statsData = [
  {
    endCountNum: 99,
    endCountText: "%",
    title: "Clients satisfied",
  },
  {
    endCountNum: 800,
    endCountText: "+",
    title: "Succeful projects",
  },
  {
    endCountNum: 32,
    endCountText: "K",
    title: "Happy Clients",
  },
  {
    endCountNum: 10,
    endCountText: "+",
    title: "Years of experience",
  },
]

export const Stats = () => {

  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.2 })


  return (
    <div ref={ref} className='mt-16 xl:mt-32 bg-primary py-16 w-full'>
      <div className="container mx-auto h-full">
      <div className="flex flex-col justify-between text-center h-full gap-12 xl:flex-row xl:text-left">
        {
          statsData.map((stat, index) => (
            <div key={index} className='w-full'>

              <div className="text-5xl font-semibold">
              {
                inView && (
                  <CountUp 
                    start={0}
                    end={stat.endCountNum}
                    delay={0.5}
                    duration={3}
                  />
                )
              }
              <span>{stat.endCountText}</span>
              </div>

              <p className='text-white'>{stat.title}</p>
            </div>
          ))
        }
      </div>
      
      </div>
    </div>
  )
}
