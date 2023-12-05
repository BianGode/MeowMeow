// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { redirect } from "react-router-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD06QCb3Ye2yTR7r62fQk8WDl0rkSp69Io",
  authDomain: "meowmeow-af606.firebaseapp.com",
  projectId: "meowmeow-af606",
  storageBucket: "meowmeow-af606.appspot.com",
  messagingSenderId: "454330947147",
  appId: "1:454330947147:web:1fe23ac8990bd655789fce"
};

// signIn and login function
// function to register to firebase project
const register = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password)
  .then((userCred) => {
    const user = userCred.user;
  }).catch((err) => {
    console.log(err.code);
  })
}

// function to login to firebase project
const logIn = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password)
  .then((userCred) => {
    console.log(userCred.user.email);
    
  }).catch((err) => {
    console.log(err)
  })
}

const signOutFun = async () => {
  await signOut(auth).then(() => {
    redirect('login');
  }).catch((err) => {

  })
} 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, register, logIn, signOutFun}

// manage your cat via a dashboard
// figure out how
