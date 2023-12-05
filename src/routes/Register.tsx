import { useState } from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

export default function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // function to register to firebase project
  const handleRegister = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
      const user = userCred.user;
    }).catch((err) => {
      const errCode = err.code;
      const errorMessages = err.message;
      console.log(err);
      
    })
  }

  return (
    <div className="registerWrap">
      <p>email</p>
      <input type="email" onChange={(e) => setEmail(e.target.value)}/>
      <p>password</p>
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => handleRegister()}>Sign Up</button>
    </div>
  )
}