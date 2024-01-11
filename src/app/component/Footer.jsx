import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className=' bg-black grid grid-flow-row lg:grid-flow-col grid-cols-2 gap:2 lg:grid-cols-4 py-6 px-14 min-h-80'>
       <div className='  justify-self-start flex w-full  '>
       
        <Link href={"/"} ><Image src="https://neatskills.online/componentsgraphics/common/navbar/navbar/neatskillslogosample.svg" width={200} height={500}></Image></Link>
        </div>
       <div className='  gap-4  flex flex-col justify-end'>
         <h1 className=' text-lg'>Company Information</h1>
         <div className=' flex flex-col gap-2'>
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Career</Link>
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Terms and condition</Link>
         </div>
       </div>
       <div className='  gap-4  flex flex-col justify-end'>
         <h1 className=' text-lg'>Our Courses</h1>
         <div className=' flex flex-col gap-2'>
          <Link href={"/"}>Design</Link>
          <Link href={"/"}>Coding</Link>
          <Link href={"/"}>Art</Link>
          <Link href={"/"}>AI/ML</Link>
         </div>
       </div>
       <div className='  gap-4  flex flex-col justify-end'>
         <h1 className=' text-lg'>Follow Us</h1>
         <div className=' flex justify-between gap-2'>
          <Link className=' ring-1 ring-white  rounded-full flex justify-center items-center p-2 ' href={"/"}> <img className=' aspect-square rounded-full' src="/v1.png"></img></Link>
          <Link className=' ring-1 ring-white  rounded-full flex justify-center items-center p-2 ' href={"/"}> <img className=' aspect-square rounded-full' src="/v2.png"></img></Link>
          <Link className=' ring-1 ring-white  rounded-full flex justify-center items-center p-2 ' href={"/"}> <img className=' aspect-square rounded-full' src="/v3.png"></img></Link>
          <Link className=' ring-1 ring-white  rounded-full flex justify-center items-center p-2 ' href={"/"}> <img className=' aspect-square rounded-full' src="/v4.png"></img></Link>
          <Link className=' ring-1 ring-white  rounded-full flex justify-center items-center p-2 ' href={"/"}> <img className=' aspect-square rounded-full' src="/v5.png"></img></Link>
        
         </div>
       </div>
    </div>
  )
}

export default Footer