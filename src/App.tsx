import React from 'react'
import { useState } from 'react'
import { auth } from "./firebase"


export default function App() {
  console.log(auth.currentUser)
  
  if (auth.currentUser) {
    console.log(auth.currentUser)
  }
  return (
    <>
      <h1>home</h1>
    </>
  )
}
