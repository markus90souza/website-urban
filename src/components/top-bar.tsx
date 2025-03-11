import { RiMailFill, RiPhoneFill} from 'react-icons/ri'
import { Socials } from './socials'

const TopBar = () => {
  return (
    <section className='py-4 xl:h-16 xl:py-0 bg-gradient-to-t from-[#FFC221] to-[#FFD76E] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="hidden items-center gap-8 lg:flex">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-primary text-white">
                <RiPhoneFill />
              </div>
              <span className='font-medium text-primary'>+91 9999999999</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-primary text-white">
                <RiMailFill />
              </div>
              <span className='font-medium text-primary'>seu@email.com</span>
            </div>
          </div>

          <Socials 
            containerStyle='flex items-center gap-8 mx-auto xl:mx-0'
            iconStyle='text-primary'
          />
        </div>
      </div>
    </section>
  )
}

export { TopBar }
