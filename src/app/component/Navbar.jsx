"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react"
import {AnimatePresence, motion} from 'framer-motion'
import Image from "next/image"
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from 'react-responsive'
const Navbar = () => {
   const [active ,setActive]=useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
const [hideOnMobile, setHideOnMobile] = useState(true);
useEffect(() => {
  setHideOnMobile(isMobile);
  setActive(false);
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
       <AnimatePresence mode="wait">{active&&<motion.div onClick={()=>setActive(false)} key={active} initial={{ opacity:0}} exit={{ opacity:0}} animate={{ opacity:1}} transition={{ duration:0.5}} className= "  left-0 fixed top-0  w-[100vw] h-[100vh] bg-black/80 grid"></motion.div>}</AnimatePresence>
       <AnimatePresence mode="wait">{active&&<motion.div  key={active} initial={{ x:500}} exit={{ x:500}} animate={{ x:0}} transition={{ duration:0.5, delay:0.2}} className= " z-[51] right-0 fixed top-0    w-[60vw] h-[100vh] bg-black grid">
          <div className=" flex flex-col items-center gap-4">
            <div className=" flex w-full justify-end px-2 pt-4  ">
            <button onClick={()=>setActive(false)} className=" font-bold  text-3xl"><RxCross2/></button>
            </div>
            <div className=" flex flex-col gap-4">
            <Link href={"/blog"} >Why Neat Skills?</Link>
            <Link href={"/blog"} >Our Courses</Link>
            <Link href={"/blog"} >ABout Us</Link>
            <Link href={"/login"} >Login</Link>
            <Link href={"/login"} >Sign up</Link>
            <Link href={"/blog"} >Watch a demo session</Link>
            </div>
            <div className=" py-6 w-full flex items-center justify-center ">
            <Link href={"/login"} className="  hover:scale-105 transition-all duration-150 ease-in-out font-semibold rounded-lg bg-[#E1348B] text-sm ring-white ring-2  px-[20px] py-[10px]  " >Get Started</Link>
            </div>
          </div>
       </motion.div>}</AnimatePresence>
       
        <div>
        <Link  className=" " href={"/"} ><Image src="https://neatskills.online/componentsgraphics/common/navbar/navbar/neatskillslogosample.svg" width={150} height={150}></Image></Link>
        </div>
        <div className=" flex justify-end gap-5 items-center ">
        <Link href={"/login"} className=" hover:scale-105 transition-all duration-150 ease-in-out font-semibold rounded-lg bg-[#E1348B] text-sm ring-white ring-2  px-[12px] py-[8px] " >Get Started</Link>
        <button onClick={()=>setActive(true)} className=" bg-red-50/2 text-4xl"><GiHamburgerMenu/></button>
        </div>
    </motion.div>}
    { !hideOnMobile&&<motion.div className={ !sticky? " flex justify-between  transition-all duration-300 px-16 items-center py-6 fixed bg-transparent  w-full top-0 mx-auto z-50 ":" flex justify-between px-16 items-center py-6 fixed bg-[#0D0E14]  w-full top-0 mx-auto z-50 shadow-lg drop-shadow-lg transition-all duration-300  "}   >
         
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