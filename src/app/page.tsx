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

export default function Home() {
  return (
    <div className="">
      <TopBar />
      <Header />
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
