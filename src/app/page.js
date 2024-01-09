"use client";
import Image from "next/image";
import Courses from "./component/Courses";
import Certification from "./component/Certifications";
import PinkCard from "./component/PinkCard";

export default function Home() {
  return (
    <main className=" min-h-screen mt-24  flex flex-col   ">
      <div className=" grid grid-flow-row xl:grid-flow-col grid-cols-1 xl:grid-cols-2 xl:px-36 px-10 pb-28  ">
        <div className="  text-left flex flex-col py-20 gap-6  ">
          <h1 className=" text-8xl font-semibold w-11/12">
            Lets Learn beyond the limits
          </h1>
          <h2 className=" font-medium lg:text-lg">
            Educational Programs that will help you start , grow and upskill.
            Book a demo class today !!
          </h2>
          <div className=" flex justify-start gap-16 ">
            <button className="  hover:scale-105 transition-all duration-150 ease-in-out w-[257px] font-semibold  bg-[#E1348B] lg: ring-white ring-2  py-[12px] ">
              START LEARNING
            </button>
            <button className="  hover:scale-105 transition-all duration-150 ease-in-out w-[257px] font-semibold  lg: ring-white ring-2   py-[12px] ">
              WATCH DEMO SESSIONS
            </button>
          </div>
        </div>
        <div className="   xl:h-[600px] h-60 xl:w-full w-[100vw] relative flex  ">
          <Image src="/img1.png" className="  object-contain  " fill />
        </div>
      </div>

      <Courses />

      <section className=" flex flex-col xl:px-14 justify-start items-center py-32">
        <div className=" self-start">
          <h1 className=" xl:text-[55px] text-center  inline-block  ">
            Why learning with{" "}
            <span className=" text-[--pnk]"> Neat Skills</span>
            <br /> gives you a one up
          </h1>
        </div>
        <div className=" lg:grid grid-cols-2 p-14 items-center gap-14 ">
          <div className=" relative xl:h-[600px]">
            <Image
              src="https://neatskills.online/componentsgraphics/common/homepage/why/why.svg"
              fill
            />
          </div>
          <div className=" flex flex-col gap-20 items-center px-14 ">
            <div className=" bg-gradient-to-r self-start from-[#E1348B] to-[#F3414E] w-4/6 rounded-2xl p-5 px-14 flex ">
              <h1 className=" text-center">
                Go beyond Pre-Recorded Courses with Neat Skills and clear your
                doubts.
              </h1>
            </div>
            <div className=" bg-gradient-to-r from-[#E1348B] to-[#F3414E] w-4/6 ml-20  rounded-2xl p-5 mr-10 px-14 flex">
              <h1 className=" text-center">
                Our Online classes allows teacher and student to set their own
                pace of learning and there is added flexibility in setting a
                schedule that fits everyone.
              </h1>
            </div>
            <div className=" bg-gradient-to-r self-start from-[#E1348B] to-[#F3414E] w-4/6  rounded-2xl p-5  px-14 flex">
              <h1 className=" text-center">
                Interactive problem-solving is more effective than watching
                lectures. Reinforce your learning with interactive quizzes.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* community */}
      <section className=" flex flex-col xl:px-14 py-20 relative  justify-start items-center">
      <Image className=" absolute left-0 top-1/2 -z-10" src="/VectorLeft.png" height={400} width={400}/>
      <Image className=" absolute right-0 top-0 -z-10" src="/VectorRight.png" height={400} width={400}/>
        <div className=" grid grid-cols-2 p-14 items-center gap-14 ">
          <div className="  relative h-full flex justify-center items-center ">
          <Image className=" absolute left-0 top-1/6 -z-10" src="/Rectangle.png" height={400} width={400}/>
            <div className=" relative w-2/3 h-3/4 "><Image
              src="/Frame1.png"
              fill
            />{" "}</div>
          </div>

          <div className=" flex flex-col gap-12 items-start px-14 ">
            <div>
              {" "}
              <h1 className=" text-3xl font-semibold">Join our Neat Skills Community </h1>
            </div>
            <div>
              {" "}
              <p>
                Learn any skill (coding , AI/ML , art , business, stock market ,
                marketing , video editing and much more) at just one nominal
                monthly subscription cequivalent to your sim card plan{" "}
              </p>
            </div>
            <div className=" flex flex-col w-4/5 self-center gap-8 ">
            <div className=" flex justify-between gap-5 items-start">
              <div className=" h-4 w-6  relative mt-1"><Image src="https://neatskills.online/_next/static/media/Bullet.0e97bc90.svg" fill /></div>
              <div className=" flex flex-col justify-start  ">
                <h1 className=" pt-0 mt-0 font-semibold">Easily accessible</h1>
                <p className=" text-sm font-normal text-[#FFFFFF]">Learn at the comfort of your home , with regular assessments and doubt sessions.</p>
              </div>
            </div>
            <div className=" flex justify-between gap-5 items-start">
              <div className=" h-4 w-4 relative mt-1"><Image src="https://neatskills.online/_next/static/media/Bullet.0e97bc90.svg" fill /></div>
              <div className=" flex flex-col justify-start  ">
                <h1 className=" pt-0 mt-0 font-semibold">More affordable cost</h1>
                <p className=" text-sm font-normal text-[#FFFFFF]"> Monthly subscription cost equivalent to your sim card plan </p>
              </div>
            </div>
            <div className=" flex justify-between gap-5 items-start">
              <div className=" h-4 w-6 relative mt-1"><Image src="https://neatskills.online/_next/static/media/Bullet.0e97bc90.svg" fill /></div>
              <div className=" flex flex-col justify-start"> 
                <h1 className=" pt-0 mt-0 font-semibold">Fun learning experience</h1>
                <p className=" text-sm font-normal text-[#FFFFFF]">Participate in competitions , earn badges and share on social media .</p>
              </div> 
            </div>

            </div>

            <div className=" flex self-center w-2/4">
            <button className=" rounded-sm  hover:scale-105 transition-all bg-black w-full  duration-150 ease-in-out  lg:text-sm  lg: ring-[--pnk] ring-1 px-4   py-[14px] " >Subscribe Now</button>
      
            </div>
            
          </div>
        </div>
      </section>

      {/* why us */}
      <section className=" flex flex-col xl:px-14 justify-start items-center py-32">
        <div className=" self-start">
          <h1 className=" xl:text-[30px] text-center  inline-block  ">
          A number of available learningactivities that will 
           <br/> <span className=" text-[--pnk]"> shock you</span>
          </h1>
        </div>
        <div className=" flex justify-center p-14 items-center gap-14 relative w-full px-24  ">
          
            <img src="https://neatskills.online/_next/image?url=%2Fcomponentsgraphics%2Fcommon%2Fhomepage%2Factivities%2Factivities.png&w=1080&q=75"></img>
          
          
        </div>
      </section>

      {/* end of why us */}

      {/* certification */}
 <Certification/>

      {/* end of ertification */}
  <PinkCard/>
    </main>
  );
}
