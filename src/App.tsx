import React, { useEffect } from 'react'
import { useState } from 'react'
import { auth } from "./firebase"
import { User, onAuthStateChanged } from 'firebase/auth'
import firebase from 'firebase/compat/app'


export default function App() {
  const [user, setUser] = useState<User | null>(null)

  onAuthStateChanged(auth, (firebaseUser) => {
    setUser(firebaseUser)
  })
  return (
    <>
      {
        user !== null ?
          <h1>{user.email}</h1>
          : <h1>Not logged in</h1>
      }
    </>
  )
}
