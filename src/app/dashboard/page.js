"use client"
import React, { useContext, useEffect } from 'react'
 import { Context } from '@/app/component/Context'
import { useRouter } from 'next/navigation'

const Page = () => {
    
     const router = useRouter();
    const context=useContext(Context);
    useEffect(()=>{
        if(context.user===null){
             router.push("/login");
        }
        console.log(context);
    },[context])
  return (
    <div>
        <button onClick={ () =>context.signOut(context.auth)}  className=' bg-red-200/20'>sign out</button>
        <h1>welcome {context?.user?context.user.displayName:"STRANGER"}</h1>
    </div>
  )
}

export default Page;