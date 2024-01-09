"use client"
import React, { useState } from 'react'
import { course, courses } from '@/app/demoData/courseMenu'
import CourseCard from '@/app/component/CourseCard';

const Courses = () => {
    const [activeBtn, setActiveBtn] =useState(0);
  return (
    <main className=' bg-[#FFFFFF0C] flex flex-col pt-24 items-center xl:gap-28 lg:gap-12 pb-24'>
   <div className='  flex justify-between px-44 gap-28 items-center  '>
   <h1 className=' lg:text-3xl font-semibold text-center '>Explore our Courses</h1>
   <p className='lg:text-lg text-center font-normal w-10/12'>You don't need to have any prior knowledge to take our classes. You just need curiosity and the desire to learn.</p>
   <button className=" hover:scale-105 transition-all duration-150 ease-in-out hover:bg-[--pnk]  w-[257px] font-semibold  lg: ring-white ring-2 text-nowrap px-3    py-[12px] " >EXPLORE COURSES</button>
   </div>
   <div className=' flex justify-between xl:px-40 lg:px-20 gap-28 items-center     '>
    {
        course.map((item ,index)=><button onClick={()=>setActiveBtn(index)} className={ activeBtn==index?"lg:text-lg font-medium text-[--pnk] scale-105":"lg:text-lg font-normal" } key={index}>{item}</button>)
    }
   </div>
   <div className=' grid grid-cols-3   px-28 xl:gap-20 items-center lg:gap-14   '>
     { courses.map((item ,index)=><CourseCard name={item.name} descritpion={item.description} image={item.image} lessons={item.lesson} key={item.id} level={item.level} /> )}
   </div>
    </main>
  )
}

export default Courses