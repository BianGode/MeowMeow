import React, { useEffect } from 'react'
import { useState } from 'react'
import { auth, signOutFun } from "./firebase"
import { User, onAuthStateChanged } from 'firebase/auth'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function App() {
  const [user, setUser] = useState<User | null>(null)

  onAuthStateChanged(auth, (firebaseUser) => {
    setUser(firebaseUser)
  });

  // loader to navigate
  const navigate = useNavigate()

  const loader = async () => {
    const user = auth.currentUser;
    console.log('test');
    if (!user) {
      navigate("/cats")
    }
    return null;
  };

  return (
    <div>
      <h2>App</h2>
      <Link to="cats">Cats</Link>
      <Link to="createcat">Cats dashoard</Link>

      <Outlet/>
    </div>
  )
}
