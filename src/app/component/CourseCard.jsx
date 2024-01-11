import Image from 'next/image'
import React from 'react'

const CourseCard = ({name,image,id,descritpion,level,lessons,img}) => {
  return ( 
    <div className=' rounded-2xl ring-2 ring-white flex px-4 py-4 md:px-6 md:py-6 flex-col xl:p-6 lg:p-2 lg:py-3 lg:w-[350px]  min-w-80  ' >
        <div className=' flex items-start justify-between    relative'>
        
        <Image className=' h-20 w-20' src={image} height={100} width={100}/>
        <div className=' flex  gap-3  mx-3 px-2'>
        <h2 className=' xl:text-sm text-xs text-nowrap font-light text-[--pnk]'>{lessons} Lessons</h2>
        <h2 className=' xl:text-sm text-xs font-light text-[--pnk]'>{level} </h2></div>
         </div>
        <div className=' flex flex-col gap-1'>
            <h1 className=' text-[#BEBEBFB8] font-medium text-sm'>COURSE</h1>
            <h1 className=' font-semibold text-sm lg:text-sm xl:text-lg'>{name}</h1>
            <p className='text-[#BEBEBFB8] text-sm xl:text-sm lg:text-xs' >{descritpion}</p>
        </div>
        <div className=' flex justify-end mx-2 my-2 '>
        <button className="  hover:scale-105 transition-all duration-150 ease-in-out  text-sm lg:text-sm  lg: ring-[--pnk] ring-1 px-4   py-[8px] " >Explore</button>
      
        </div>
        
    </div>
  )
}

export default CourseCard