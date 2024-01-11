"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle form submission, such as sending data to a server.
    console.log('Form submitted:', formData);
  };
  const [index,setIndex]=useState(0);
    const bulb=[ 0,1,2];
     const fnc=()=>{{
      setTimeout(()=>{
        if(index==2){
          setIndex(0);}
          else
          {setIndex(index+1)}
        
      },500)
     }}
    useEffect(()=>{
    fnc();
    
    },[index])
  return (
    <div className=" min-h-[100vh]  lg:grid lg:grid-flow-col grid-flow-row  lg:grid-cols-2 pt-14 w-[100vw]">   
      <div className="    flex flex-col relative  items-center gap-4">
      <div><Image className=" py-10" src="https://neatskills.online/componentsgraphics/common/navbar/navbar/neatskillslogosample.svg" height={300} width={300} ></Image></div>
      <div className=" radi bg-radi relative flex items-center justify-center  w-4/5 ">
      <div class=" -z-10 absolute inset-0 rounded-[100%] filter blur-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-75 w-[50%] m-auto">
      </div>
       <Image className=" -z-10 w-7/12 absolute left-[10%]" src="/Rectangle.png" width={1000} height={1000}></Image>
      <Image className=" w-3/6" src="/Frame1.png" height={250} width={250} />
      </div>
        <div className=" py-2">
          <h1 className=" text-sm">Start leaning Right Away!</h1>
        </div>
        <div className=" h-2 w-1/3 grid grid-cols-3 gap-3">
        {bulb.map((item,ind)=><div key={ind}  id="1" className={ item!==index? " bg- bg-white/15 rounded-3xl":"bg- bg-white rounded-3xl"}></div>)}
          
         
          
        </div>
      </div> 
      <div className=" mt-4 px-5  lg:px-24">
        <div className=" bg-[#FFFFFF05] p-6 flex flex-col items-center rounded-3xl gap-8">
          <h1 className="md:text-3xl font-normal" >Get Started for Free</h1>
          <h1 className=" text-sm">Already have Account? <Link href={"/login"}   className=" text-[--pnk] "> Login</Link></h1>
          <button className=" flex items-center gap-8 px-5 py-2 rounded-md  ring-white   ring-1 justify-between"><Image className=" w-6 h-6 aspect-square" src="/Group.png" width={500} height={500}></Image>
          Continue with Google
          </button>
          <div className=" flex w-full gap-1 items-center">
            <div className=" w-full  bg-[#FFFFFF52] rounded-2xl h-[2px]"></div>
            or
            <div className=" w-full  bg-[#FFFFFF52] rounded-2xl h-[2px]"></div>
          </div>
          {/* form */}
      <form onSubmit={handleSubmit} className=" flex flex-col items-center gap-3">
      <div className=" flex flex-col">
        <label className="text-sm" htmlFor="email">Email</label>
        <div className=" bg-gradient-to-b from-[#FFFFFF1C] to-[#444242] gap-4 flex items-center p-2   shadow-inner rounded-lg ">
        <Image className=" w-4 h-4 aspect-square" src="/mal.png" width={500} height={500}></Image>
        <input className=" bg-transparent placeholder:text-xs "
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          required
        /></div>
      </div>
      <div className=" flex flex-col ">
      <label className="text-sm" htmlFor="email">Email</label>
        <div className="  bg-gradient-to-b from-[#FFFFFF1C] to-[#444242] gap-4 flex items-center p-2   shadow-inner rounded-lg ">
        <Image className=" w-4 h-4 aspect-square" src="/lock.png" width={500} height={500}></Image>
        <input className=" bg-transparent placeholder:text-xs "
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          required
        /></div>
      </div>
      <div className=" my-3  w-full">
        <button className=" bg-[--pnk] w-full  py-2 rounded-lg " type="submit">Submit</button>
      </div>
      <h1 className=" text-xs text-center"> By signing up, I agree to Neat Skill"s <br/> Terms of Service & Privacy Policy.</h1>
    </form>
        </div>
      </div>
    </div>
  )
}

export default Login