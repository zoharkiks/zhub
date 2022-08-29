import React from 'react'
import { Icon } from '@iconify/react';

const Button = ({text,extra,icon,onClick}:{text:string,extra:string,icon:string,onClick:any}) => {
  return (
    <div onClick={onClick} className={`${extra} cursor-pointer rounded-3xl px-4 py-3 flex items-center space-x-2 font-bold `} >

<Icon className='h-4 w-4' icon={`${icon}`} />

        <span>{text}</span>
    </div>
  )
}

export default Button