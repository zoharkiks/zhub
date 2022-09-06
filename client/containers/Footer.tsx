import Link from 'next/link'
import React from 'react'
import { images } from '../constants'

const Footer = () => {
  return (
    <div className=' flex items-center justify-around bg-darkGray full-bleed py-4  mt-10 rounded-t-xl '>


      <div className="flex">
        <img className="h-10 md:h-14" src={images.logo.src} alt="logo" />
      </div>

      <span className='text-white text-md md:text-xs '>©2022 All Rights Reserved</span>
    </div>
  )
}

export default Footer