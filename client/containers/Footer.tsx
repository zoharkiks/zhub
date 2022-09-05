import Link from 'next/link'
import React from 'react'
import { images } from '../constants'

const Footer = () => {
  return (
    <div className=' grid grid-cols-3 items-center  place-items-center bg-darkGray full-bleed py-4  mt-10 rounded-t-xl '>

<div className="  text-md md:text text-white flex flex-col  ">
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

      <div className="flex">
        <img className="h-10 md:h-14" src={images.logo.src} alt="logo" />
      </div>

      <span className='text-white text-md md:text-xs w-full'>©2022 All Rights Reserved</span>
    </div>
  )
}

export default Footer