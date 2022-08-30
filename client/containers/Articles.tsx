import React from 'react'
import { ArticleCard } from '../components'

const Articles = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-y-28 justify-items-center mt-40  '>
      <ArticleCard/> 
      <ArticleCard/> 
      <ArticleCard/> 
    </div>
  )
}

export default Articles