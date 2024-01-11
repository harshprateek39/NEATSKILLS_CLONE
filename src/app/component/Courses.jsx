"use client"
import React, { useState } from 'react'
import { course, courses } from '@/app/demoData/courseMenu'
import CourseCard from '@/app/component/CourseCard';

const Courses = () => {
    const [activeBtn, setActiveBtn] =useState(0);
  return (
    <main className=' bg-[#FFFFFF0C] flex flex-col lg:pt-8 pt-14 items-center xl:gap-14 lg:gap-12 pb-24 '>
   <div className='  flex xl:flex-row  flex-col justify-between px-5 xl:px-44 xl:gap-28 gap-4 items-center  '>
   <h1 className=' text-2xl lg:text-3xl font-semibold text-center '>Explore our Courses</h1>
   <p className='lg:text-lg text-center font-normal w-10/12'>You don't need to have any prior knowledge to take our classes. You just need curiosity and the desire to learn.</p>
   <button className=" hover:scale-105 transition-all duration-150 ease-in-out hover:bg-[--pnk]  w-[257px] font-semibold  lg: ring-white ring-2 text-nowrap px-3    py-[12px] " >EXPLORE COURSES</button>
   </div>
   <div className='  overflow-x-scroll w-[100vw] py-8 '>
   <div className=' flex justify-between xl:px-40 lg:px-20 gap-28 items-center flex-nowrap'>
    {
        course.map((item ,index)=><button onClick={()=>setActiveBtn(index)} className={ activeBtn==index?"lg:text-lg flex-nowrap text-nowrap font-medium text-[--pnk] scale-105":"lg:text-lg text-nowrap font-normal" } key={index}>{item}</button>)
    }
   </div></div>
   <div className='  grid grid-rows-2 grid-flow-col gap-10 px-8 lg:px-20 xl:gap-20 items-center p-10 lg:gap-14 w-[100vw] overflow-scroll pt-2'>
     { courses.map((item ,index)=><CourseCard name={item.name} descritpion={item.description} image={item.image} lessons={item.lesson} key={item.id} level={item.level} /> )}
   </div>
    </main>
  )
}

export default Courses