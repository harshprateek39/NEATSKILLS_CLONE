import Image from 'next/image'
import React from 'react'

const CourseCard = ({name,image,id,descritpion,level,lessons,img}) => {
  return (
    <div className=' rounded-2xl ring-2 ring-white flex flex-col xl:p-6 lg:p-2 lg:py-3  ' >
        <div className=' flex justify-between items-start'>
        <Image src={image} height={100} width={100}/>
        <div className=' flex justify-end gap-3'>
        <h2 className=' text-sm text-nowrap font-light text-[--pnk]'>{lessons} Lessons</h2>
        <h2 className=' text-sm font-light text-[--pnk]'>{level} </h2></div>
         </div>
        <div className=' flex flex-col'>
            <h1 className=' text-[#BEBEBFB8] font-medium text-sm'>COURSE</h1>
            <h1 className=' font-semibold lg:text-sm xl:text-lg'>{name}</h1>
            <p className='text-[#BEBEBFB8] xl:text-sm lg:text-xs' >{descritpion}</p>
        </div>
        <div className=' flex justify-end'>
        <button className="  hover:scale-105 transition-all duration-150 ease-in-out  lg:text-sm  lg: ring-[--pnk] ring-1 px-4   py-[8px] " >Explore</button>
      
        </div>
        
    </div>
  )
}

export default CourseCard