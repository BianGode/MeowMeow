import { useEffect, useState } from "react"
import { auth, logIn } from "../firebase";
import { redirect, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  

  return (
    <div className="loginPage">
      <p>Username</p>
      <input type="text" id="" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <p>Password</p>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => logIn(email, password)}>Register</button>
    </div>
  )
}