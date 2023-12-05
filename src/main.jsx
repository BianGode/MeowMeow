import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Login from "./routes/Login.tsx"
import Register from "./routes/Register.tsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "Login",
    element: <Login/>
  },
  {
    path: "Register",
    element: <Register/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
)
