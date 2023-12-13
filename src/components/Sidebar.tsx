import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import { UserContext } from "../UserContext"
import '../styles/sidebar.css'
import Logo from '../assets/logo.png'

export default function Sidebar() {

  const context = useContext(UserContext)
  const fun = context.fun
  const email = context.email
  console.log(email);

  return (
    <div className="Sidebar">
      <div className="sidebarTopWrap">
        <img src={Logo} className='logo' alt="Logo" />
        <h3 onClick={() => fun()}>X</h3>
      </div>
      <div className="sideLinks">
        <Link to="cats">Cats</Link>
        <Link to='createcat'>Create a Cat</Link>
      </div>
    </div>
  )
}