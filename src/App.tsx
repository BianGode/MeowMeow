import React, { useEffect } from 'react';
import { useState } from 'react';
import { auth, signOutFun } from "./firebase";
import { User, onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter, Link, Outlet, Route, Router, Routes, useNavigate } from 'react-router-dom';
import Cats from './routes/Cats';
import CreateCat from './routes/CreateCat';
import Login from './routes/Login';
import Register from './routes/Register';
import Home from './routes/Home';

export default function App() {
  const [user, setUser] = useState<User | null>(null)

  onAuthStateChanged(auth, (firebaseUser) => {
    setUser(firebaseUser)
  });

  // loader to navigate
  // const navigate = useNavigate();

  // const loader = async () => {
  //   const user = auth.currentUser;
  //   console.log('test');
  //   if (!user) {
  //     navigate("/cats")
  //   }
  //   return null;
  // };

  return (
    <div>
      <h2>App</h2>
      <Link to="cats">Cats</Link>
      <Link to="createcat">Cats dashoard</Link>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="cats" element={<Cats />} />
        <Route path="createcat" element={<CreateCat />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
      <Outlet />
    </div>
  )
}
