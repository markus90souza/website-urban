import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
      <Image alt='' src={'/assets/logo.svg'} width={230} height={48} />
    </Link>
  )
}

export { Logo }
