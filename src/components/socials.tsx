import Link from "next/link"
import type { FC } from "react"

import { RiTwitterXFill, RiFacebookFill,RiInstagramFill, RiYoutubeFill } from 'react-icons/ri'

const socials = [
  {
    name: 'twitter',
    path: 'https://twitter.com',
    icon: <RiTwitterXFill />
  },
  {
    name: 'facebook',
    path: 'https://facebook.com',
    icon:  <RiFacebookFill />
  },
  {
    name: 'instagram',
    path: 'https://instagram.com',
    icon:  <RiInstagramFill />
   },
  {
    name: 'youtube',
    path: 'https://youtube.com',
    icon: <RiYoutubeFill />
  }
]

type SocialProps = {
  iconStyle?: string
  containerStyle?: string
}
const Socials: FC<SocialProps> = ({ containerStyle, iconStyle}) => {
  return (
    <div className={`${containerStyle}`}>
      {
        socials.map((social, index) => (
          <Link key={index} href={social.path} target='_blank' rel='noopener noreferrer' className={`${iconStyle}`}>
            {social.icon}
          </Link>
        ))
      }
    </div>
  )
}

export { Socials }
