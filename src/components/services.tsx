'use client'

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PiWallFill, PiPaintRollerFill, PiWrenchFill, PiUserGearFill  } from 'react-icons/pi'
import { cn } from "@/lib/utils"
import { PreTitle } from "./pre-title"
import Image from "next/image"
import { Button } from "./button"


const servicesData = [
  {
    icon: <PiWallFill />,
    title: 'Construction Service',
    name: 'construction',
    description: "orem ipsum dolor sit amet consectetur adipisicing elit Quisquam, voluptatum.",
    serviceList: [
      "Service 1",
      "Service 2",
      "Service 3",
      "Service 4",
      "Service 5",
      "Service 6",
      "Service 7",  
    ],
    trumbs: [
      {
        url: '/assets/img/services/thumb-1.jpg',
      },
      {
        url: '/assets/img/services/thumb-2.jpg',
      }
    ]
  },
  {
    icon: <PiPaintRollerFill />,
    title: 'Renovation Service',
    name: 'renovation',
    description: "orem ipsum dolor sit amet consectetur adipisicing elit Quisquam, voluptatum.",
    serviceList: [
      "Service 1",
      "Service 2",
      "Service 3",
      "Service 4",
      "Service 5",
      "Service 6",
      "Service 7",  
    ],
    trumbs: [
      {
        url: '/assets/img/services/thumb-3.jpg',
      },
      {
        url: '/assets/img/services/thumb-4.jpg',
      }
    ]
  },

  {
    icon: <PiWrenchFill />,
    title: 'Restauration Service',
    name: 'restauration',
    description: "orem ipsum dolor sit amet consectetur adipisicing elit Quisquam, voluptatum.",
    serviceList: [
      "Service 1",
      "Service 2",
      "Service 3",
      "Service 4",
      "Service 5",
      "Service 6",
      "Service 7",  
    ],
    trumbs: [
      {
        url: '/assets/img/services/thumb-5.jpg',
      },
      {
        url: '/assets/img/services/thumb-6.jpg',
      }
    ]
  },
  {
    icon: <PiUserGearFill />,
    title: 'Consultation Service',
    name: 'consultation',
    description: "orem ipsum dolor sit amet consectetur adipisicing elit Quisquam, voluptatum.",
    serviceList: [
      "Service 1",
      "Service 2",
      "Service 3",
      "Service 4",
      "Service 5",
      "Service 6",
      "Service 7",  
    ],
    trumbs: [
      {
        url: '/assets/img/services/thumb-1.jpg',
      },
      {
        url: '/assets/img/services/thumb-3.jpg',
      }
    ]
  },

]
export const Services = () => {

  const [activeTab, setActiveTab] = useState("construction")
  return (
    <section id='services' className="pt-16  xl:pt-32">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-[540px] mx-auto mb-20">
          <PreTitle title="Our Services" center />
          <h2 className="mb-4">
            Solutions we Provide
          </h2>
          <p className="mx-auto max-w-[480px] mb-11 text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores illo commodi harum nam hic quisquam doloribus beatae
            dolorem alias sequi,
          </p>
        </div>

        <Tabs 
          defaultValue="construction"
          onValueChange={(tab) => setActiveTab(tab)}
          className="w-full flex flex-col xl:flex-row gap-[30px]">
          <TabsList className="grid grid-cols-1 w-full h-full rounded-none gap-[30px] bg-transparent p-0 md:grid-cols-2 xl:grid-cols-1 xl:max-w-[345px]">
            {
              servicesData.map(service => (
                <TabsTrigger className="relative shadow-custom p-0 w-full h-[100px] rounded-none flex items-center" key={service.name} value={service.name}>
                  
                  <div className={cn('w-[100px] h-[100px] flex items-center justify-center absolute left-0', 
                    activeTab === service.name ? 'bg-primary text-white' : 'bg-app text-primary')}>
                    <div className="text-4xl">
                      {service.icon}
                    </div>
                  </div>
                  <span className="font-sans tracking-[.6px] text-base font-semibold uppercase ml-16 inline-block max-w-[100px]">

                    {service.name}
                  </span>
                </TabsTrigger>
              ))
            }
          </TabsList>

          <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">

            {
              servicesData.map(service => (
                <TabsContent key={service.name} value={service.name} className="m-0">
                  <div className="flex flex-col md:flex-row gap-[30px]">
                    <div className="flex gap-5 md:flex-col xl:gap-[30px]">
                      {
                        service.trumbs.map((thumb, index) => (

                          <div key={index} className="relative w-[140px] h-[140px] xl:w-[200px] xl:h-[200px]">

                            <Image src={thumb.url} alt="" fill />
                          </div>
                        ))
                      }
                    </div>
                    <div className="">
                      <div className="">
                        <h3 className="mb-6">{service.title}</h3>
                        <p className="mb-10 text-primary">{service.description}</p>

                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {
                            service.serviceList.map((service, index) => (
                              <li key={index} className="flex items-center gap-4">
                                <div className="w-6 h-6 bg-app" />
                                <span className="capitalize font-medium text-primary">{service}</span>
                              </li>
                            ))
                          }
                        </ul>

                        <Button title="Read More" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))
            }
          </div>

    </Tabs>
      </div>
    </section>
  )
}
