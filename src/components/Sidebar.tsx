import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Sidebar(context) {

  // const email = useContext(UserContext)

  console.log(context);

  return (
    <div className="Sidebar">
      <Link to="cats">Cats</Link>
      {/* <Link to='createcat' state={{ email: email }}>Create a Cat</Link> */}
    </div>
  )
}