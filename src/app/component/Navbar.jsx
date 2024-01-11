"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import {motion} from 'framer-motion'
import Image from "next/image"
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from 'react-responsive'
const Navbar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
const [hideOnMobile, setHideOnMobile] = useState(false);
useEffect(() => {
  setHideOnMobile(isMobile);
}, [isMobile]);
  

  const [sticky , setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setSticky(true);
      }
      else if (window.scrollY<100){
        setSticky(false);
      }
    };
     
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  
  return (
    <div>
      { hideOnMobile&&<motion.div className={ !sticky? " flex justify-between transition-all duration-300 px-2 items-center py-6 fixed bg-transparent  w-full top-0 mx-auto z-50 ":" flex justify-between px-2 items-center py-6 fixed bg-[#0D0E14]  w-full top-0 mx-auto z-50 shadow-lg drop-shadow-lg transition-all duration-300  "}   >
        <div>
        <Link  className=" " href={"/"} ><Image src="https://neatskills.online/componentsgraphics/common/navbar/navbar/neatskillslogosample.svg" width={150} height={150}></Image></Link>
        </div>
        <div className=" flex justify-end gap-5 items-center ">
        <Link href={"/login"} className=" hover:scale-105 transition-all duration-150 ease-in-out font-semibold rounded-lg bg-[#E1348B] text-sm ring-white ring-2  px-[12px] py-[8px] " >Get Started</Link>
        <button className=" bg-red-50/2 text-4xl"><GiHamburgerMenu/></button>
        </div>
    </motion.div>}
    { !hideOnMobile&&
   <motion.div className={ !sticky? " flex justify-between transition-all duration-300 px-16 items-center py-6 fixed bg-transparent  w-full top-0 mx-auto z-50 ":" flex justify-between px-16 items-center py-6 fixed bg-[#0D0E14]  w-full top-0 mx-auto z-50 shadow-lg drop-shadow-lg transition-all duration-300  "}   >
        <div>
        <Link href={"/"} ><Image src="https://neatskills.online/componentsgraphics/common/navbar/navbar/neatskillslogosample.svg" width={200} height={500}></Image></Link>
        </div>
        <div className= " flex justify-between gap-16  ">  
            <Link href={"/blog"} >COURSE</Link>
            <Link href={"/contact"} >ABOUT US</Link>
            <Link href={"/login"} >CONTACT</Link>
        </div>
        <div className=" flex justify-between gap-16 ">
        <Link href={"/login"} className=" hover:scale-105 transition-all duration-150 ease-in-out font-semibold rounded-lg bg-[#E1348B] lg:text-[20px] ring-white ring-2  px-[21px] py-[12px] " >SIGN UP</Link>
        <Link href={"/login"} className=" hover:scale-105 transition-all duration-150 ease-in-out  font-semibold rounded-lg lg:text-[20px] ring-white ring-2  px-[24px] py-[12px] " >LOGIN</Link>
       
        </div>
    </motion.div>} 
    
  
    
    </div>
  ) 
} 

export default Navbar;