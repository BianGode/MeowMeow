import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import { UserContext } from "../UserContext"
import '../styles/sidebar.css'

export default function Sidebar() {

  const email = useContext(UserContext)

  console.log(email);
  
  return (
    <div className="Sidebar">
      <div>
        {/* <img src="" alt="Logo"/> */}
        <h2>Logo</h2>
      </div>
      <div className="sideLinks">
      <Link to="cats">Cats</Link>
      <Link to='createcat'>Create a Cat</Link>
      </div>
    </div>
  )
}