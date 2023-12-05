import { useState } from "react"

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  return (
    <div className="loginWrapper">
      <p>Username</p>
      <input type="text" id="" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <p>Password</p>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <h1>{username}</h1>
      <h1>{password}</h1>
    </div>
  )
}