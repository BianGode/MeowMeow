import React, { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';
import { auth, signOutFun } from "./firebase";
import { User, onAuthStateChanged } from 'firebase/auth';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './styles/global.css'
import './styles/header.css'
import Sidebar from './components/Sidebar';

function App() {
  const [user, setUser] = useState<User | null>(null)

  let UserContext: any = '';
  onAuthStateChanged(auth, (firebaseUser) => {
    setUser(firebaseUser)
    UserContext = createContext(null)
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
    <header className='header'>
      {user !== null ?
        <>
          <Link to="cats">Cats</Link>
          <Link to='createcat' state={{ email: user.email }}>Create a Cat</Link>
        </>
        : <>
          <Link to="login">Login</Link>
          <Link to="register">register</Link>
        </>
      }
      <UserContext.provider value={user?.email}>
        <Sidebar />
      </UserContext.provider>
      <Outlet context={user?.email} />
    </header>
  )
}

export default App