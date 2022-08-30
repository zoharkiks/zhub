import React from 'react'
import { images } from '../constants'

const TopArticle = () => {
  return (
    <div className="w-full flex flex-col items-center rounded-2xl  bg-darkGray py-20 font-jakarta px-10 text-center space-y-8">
      <div className="flex w-max items-center justify-between space-x-3 rounded-full bg-white px-3 py-2">
        <img
          className="h-12 w-12 rounded-full  "
          src={images.profile.src}
          alt=""
        />
        <span className="text-gray font-medium">Zohar Williams</span>
      </div>
      <h2 className="text-2xl text-darkBlue font-bold  md:text-[2rem] lg:text-[2.25rem]">Lorem, ipsum dolor sit amet consectetur ?</h2>

      <p className="text-gray  lg:text-lg w-[75%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ab moleiis, veniam consequatur reiciendis.<span className="text-blue font-bold underline underline-offset-4 ">Read More.</span></p>
    </div>
  )
}

export default TopArticle