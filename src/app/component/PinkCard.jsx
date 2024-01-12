import Image from 'next/image';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
const PinkCard = () => {
  return (
    <div className=' grid grid-cols-2 bg-[--pnk] xl:h-96 lg:h-80 md:h-64 sm:h-56 m-2 text-sm  h-52 p-4 sm:p-10   rounded-3xl xl:m-24 xl:gap-5'>
      <div className=' flex flex-col items-start xl:p-10 justify-center gap-4  lg:gap-10'>
         <h1 className=' lg:text-3xl text-sm '>The great aim of education is not knowledge, but action.</h1>
         <button className=" flex items-center gap-4  p-2 px-3   text-xs md:text-sm font-normal  bg-black hover:scale-105 transition-all duration-150 ease-in-out  xl:font-semibold  lg: ring-white ring-2   py-[12px] ">
              SIGN UP <span className=' text-xl'><IoIosArrowRoundForward /></span>
            </button>
      </div>
      <div className='  flex justify-center  items-center  '>
        <div className='  h-full aspect-square relative'>
      <Image src="/limits.png" fill ></Image>
        </div>
      </div>
    </div>
  )
}

export default PinkCard