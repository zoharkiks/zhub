import Link from 'next/link'
import React from 'react'
import { images } from '../constants'

const Footer = () => {
  return (
    <div className='px-14 grid grid-cols-2 bg-darkGray full-bleed py-6  mt-10 rounded-t-xl '>

<div className="  text-base md:text-lg text-white flex flex-col justify-center ">
        <ul className=" space-y-4 flex flex-col md:flex-row md:space-y-0 md:space-x-4">
          <Link href="/">Home</Link>
          <a
            href="https://zoharwilliams.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            About Me
          </a>
        </ul>
      </div>

      <div className="flex justify-end ">
        <img className="h-14" src={images.logo.src} alt="logo" />
      </div>
    </div>
  )
}

export default Footer