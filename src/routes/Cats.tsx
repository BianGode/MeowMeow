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
            
            setCats((oldCats: any) => [...oldCats, cat.data()])
            tempCatArr.push(dat)
          })
          // setCats(tempCatArr)
        })
      }
    })
  }, [])

  return (
    <div className="catPage">
      <h1>Cat dashboard</h1>
      {/* {cats.name} */}
      {/* {cats.colors} */}
      {
         cats.length !== 0 
        ? cats.map((cat) => {
          console.log(cat);
          return <p>{cat.name}</p>
        })
        : <p>no cats</p>
        }
    </div>
  )
}