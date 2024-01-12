import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCroC1Aeox-NfopMWA2uSV10HgDAtFUl9g",
    authDomain: "neatskill-f2a3a.firebaseapp.com",
    projectId: "neatskill-f2a3a",
    storageBucket: "neatskill-f2a3a.appspot.com",
    messagingSenderId: "257724497082",
    appId: "1:257724497082:web:02703b8f1ecb192bad9683",
    measurementId: "G-PSJ3YJFRZV",
    databaseURL:"https://neatskill-f2a3a-default-rtdb.firebaseio.com"

  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
 