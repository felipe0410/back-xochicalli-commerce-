import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyC-LZQ_-f43LxYyWheEjD9Vf2tMngkAisU",
    authDomain: "verifik-b217c.firebaseapp.com",
    projectId: "verifik-b217c",
    storageBucket: "verifik-b217c.appspot.com",
    messagingSenderId: "169324462723",
    appId: "1:169324462723:web:cf85aeaed679d701c3d1b6",
    measurementId: "G-WY5Y3QP916"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// {
//     "hosting": {
//       "site": "back-xochicalli-commerce",
  
//       "public": "public",
//       ...
//     }
//   }
// firebase deploy --only hosting:back-xochicalli-commerce