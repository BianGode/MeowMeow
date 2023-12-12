import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import { UserContext } from "../UserContext"

export default function Sidebar() {

  const email = useContext(UserContext)

  console.log(email);
  
  return (
    <div className="Sidebar">
      <Link to="cats">Cats</Link>
      <Link to='createcat'>Create a Cat</Link>
    </div>
  )
}