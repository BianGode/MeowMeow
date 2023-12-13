import React, { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';
import { auth, signOutFun } from "./firebase";
import { User, onAuthStateChanged } from 'firebase/auth';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './styles/global.css'
import './styles/header.css'
import Sidebar from './components/Sidebar';
import { UserContext } from './UserContext';
// import images and svg
import Hamburger from './assets/hamburger.svg';
import Cat from './assets/cat.png';

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

  function handleMenu() {
    const sideBarTarget = document.querySelector('.Sidebar')
    const backdrop = document.querySelector('.backdrop')

    sideBarTarget?.classList.toggle('on')
    backdrop?.classList.toggle('on')
  }

  // I want an updates or news page. Twitter like style
  return (
  <>
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
    <header className='mobHeader'>
      <img src={Hamburger} onClick={() => handleMenu()} alt="hamburger" />
      <h3>Logo</h3>
      <img src={Cat} alt="Profile" />
    </header>
    <UserContext.Provider value={user?.email}>
      <Sidebar />
    </UserContext.Provider>
    <Outlet context={user?.email} />
    <div className='backdrop'></div>
  </>
  )
}

export default App