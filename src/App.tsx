import React, { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';
import { auth, signOutFun } from "./firebase";
import { User, onAuthStateChanged } from 'firebase/auth';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './styles/global.css'
import './styles/header.css'
import Sidebar from './components/Sidebar';
import { UserContext } from './UserContext';

function App() {
  const [user, setUser] = useState<User | null>(null)

  const User = useContext(UserContext)

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


  // I want an updates or news page. Twitter like style

  return (<>
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
    </header>
    {/* make a second header for mobile first */}
    <header>
      <img src="./assets/burger-menu-svgrepo-com.svg" alt="hamburger" />
      <h3>Logo</h3>
    </header>
    <UserContext.Provider value={user?.email}>
        <Sidebar />
      </UserContext.Provider>
    <Outlet context={user?.email} />
  </>
  )
}

export default App