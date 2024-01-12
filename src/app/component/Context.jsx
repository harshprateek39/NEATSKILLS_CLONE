
"use client"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {app} from '@/app/middleware/firebase';

import { GoogleAuthProvider,signInWithPopup ,signOut  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
export const Context= createContext(null);
const auth= getAuth(app)
export const ContextProvider=(props)=>{
    const [user,setUser] =useState(null);
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const signin= ( aut,prov)=>{
        console.log("sss",aut,prov);
        
        signInWithPopup(aut, prov)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
      }
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setUser(user);
        }
        else{
            setUser(null);
        }

    })
  },[])
return <Context.Provider value={{user ,auth,signin,provider ,signOut}}>
    {props.children}
</Context.Provider>
}