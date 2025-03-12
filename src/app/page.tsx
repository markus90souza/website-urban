'use client'

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Stats } from "@/components/stats";
import { Testmonials } from "@/components/testmonials";
import { TopBar } from "@/components/top-bar";
import { Work } from "@/components/work";
import { useEffect, useState } from "react";

export default function Home() {

  const [headerActive, setHeaderActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  
  return (
    <div className="">
      <TopBar />

      <div className="relative z-10">
        <Header />
      </div>

      <div className={`fixed w-full duration-500 transition-transform top-0 left-0 z-50 ${headerActive ? 'translate-y-0' : '-translate-y-full'}`}>
        <Header />
      </div>

      <Hero />
      <About />
      <Stats />
      <Services />
      <Work />
      <Testmonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
