import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyB3mnZ6sfPprC_fqiCM-_5zAt7fFtJ9o-0",
    authDomain: "lsetf-olu-finalpro.firebaseapp.com",
    projectId: "lsetf-olu-finalpro",
    storageBucket: "lsetf-olu-finalpro.appspot.com",
    messagingSenderId: "430092040924",
    appId: "1:430092040924:web:aad2ba899d9e4451a59219"
  };
  
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
 

      // console.log(data.docs)