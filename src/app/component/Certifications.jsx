import React, { useState } from 'react'
import { course, courses } from '../demoData/courseMenu'
import CourseCard from './CourseCard';
import Image from 'next/image';
const Certification = () => {
    const [activeBtn, setActiveBtn] =useState(0);
  return (
    <main className=' bg-[#FFFFFF0C] grid grid-cols-2 pt-24 items-center xl:gap-28 lg:gap-12 pb-24 xl:px-12'>
   <div className=" flex flex-col gap-4 items-start ">
              <h1 className=" text-3xl font-semibold">Stand out with a <span className='text-[--pnk]'> skill certificate</span>   </h1>
              <p> Earn globally recognized  certification <br/> and improve your knowledge. </p>
            <div className=" flex  pt-8 px-20 relative">
          <Image className='absolute top-0 left-0' height={50} width={50} src='/vectorpoint.png'  />
            <button className=" rounded-sm  hover:scale-105 transition-all    duration-150 ease-in-out  lg:text-sm  lg: ring-[--pnk] ring-1 px-4   py-[14px] " >Explore Courses</button>
      
            </div>
            
          </div>
   <div>
    <img className=' xl:h-[400px]' src='https://neatskills.online/componentsgraphics/common/homepage/explorecourses/Certificate.svg'></img>
   </div>
    </main>
  )
}

export default Certification