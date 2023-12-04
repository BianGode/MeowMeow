import React from 'react'
import { useState } from 'react'

function App() {

let [count, setCount] = useState(0);
function counter() {
  setCount(count + 1)
}

  return (
    <>
      <h1 onClick={counter}>{count}</h1>
    </>
  )
}

export default App
