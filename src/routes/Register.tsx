import { useState } from "react"
import { auth, register } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

export default function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  

  return (
    <div className="registerPage">
      <p>email</p>
      <input type="email" onChange={(e) => setEmail(e.target.value)}/>
      <p>password</p>
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => register(email, password)}>Sign Up</button>
    </div>
  )
}