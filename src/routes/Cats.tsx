import { useLocation, useOutletContext } from "react-router-dom"
import { auth, handleGetCats } from "../firebase"
import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";

interface propsCats {
  email: string,
}

export default function Cats(props: propsCats) {


  const email = useOutletContext()
  const [cats, setCats] = useState<any>([])


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        handleGetCats(user?.email).then((res) => {
          
          let tempCatArr:any = []
          res.forEach((cat) => {
            console.log(cat.data());
            let dat = [...cats, cat.data()]
            console.log(dat);
            
            setCats(dat)
            // tempCatArr.push(dat)
          })
          setCats(tempCatArr)
          console.log("CATS!!");
          console.log(cats);
          
        })
      }
    })
  }, [])

  // if (props.email) {
  //   handleGetCats(props.email).then((res) => {
  //     console.log(res);
  //   })
  // } else {
  //   let email = getAuth().currentUser.email
  //   handleGetCats().then((res) => {
  //     console.log(res);
  //   })
  // }

  return (
    <div className="catPage">
      <h1>Cat dashboard</h1>
      {/* {cats.name} */}
      {/* {cats.colors} */}
      {/* {
         cats.length !== 0 
        ? cats.map((cat) => {
          console.log(cat);
          return <p>{cat}</p>
        })
        : <p>no cats</p>
        } */}
    </div>
  )
}