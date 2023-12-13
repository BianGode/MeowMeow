// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { redirect } from "react-router-dom";
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc } from "firebase/firestore";
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

// function to submit the cat to the database
async function handleCreateACat(userEmail:string, name:string, birthDay:string, colorArray:string[], eyeColor:string, breed:string) {
  
  console.log(userEmail);
  
    await setDoc(doc(db, "Cats", "users/" +userEmail + "/" + name), {
      name: name,
      birthDay: birthDay,
      colors:colorArray,
      eyeColor: eyeColor,
      breed: breed,
    }).then((res) => {
      // console.log(res);
      console.log('added succesfully');
    }).catch((err) => {
      console.error(err)
    })
}

// basic function to get all cats with email and push them to an temporary array to I can return them to Cats.tsx
// EDIT: I want to get all the Cats in the collection `your@email.me`
async function handleGetCats(userEmail:string) {
  
  const q = query(collection(db, "Cats/users/" + userEmail))

  const qSnap = await getDocs(q)
  let tempArr = []
  // qSnap.forEach((doc) => {
  //   tempArr.push(doc.data())
  //   console.log(doc.id, " ==> ", doc.data());
  // })
  return qSnap.docs
  // const docRef = doc(db, "Cats", "users/" +userEmail)
  // const docSnap = await getDoc(docRef)

}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// firestore db
const db = getFirestore(app)

export {auth, register, logIn, signOutFun, handleCreateACat, handleGetCats}

// manage your cat via a dashboard