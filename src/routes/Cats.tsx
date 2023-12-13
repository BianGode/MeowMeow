import { useLocation, useOutletContext } from "react-router-dom"
import { auth, handleGetCats } from "../firebase"
import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import '../styles/cats.css'

interface propsCats {
  email: string,
}

export default function Cats(props: propsCats) {


  const [cats, setCats] = useState<any>([])


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        handleGetCats(user?.email).then((res) => {
          let tempCatArr: any = []
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

  function dropDownCat(index: Number) {
    const catInfoSlide = document.getElementById("A" + index)
    catInfoSlide?.classList.toggle('on')
    
  }

  return (
    <div className="catPage">
      <h1>Cat dashboard</h1>
      {/* {cats.name} */}
      {/* {cats.colors} */}
      {
        cats.length !== 0
          ? cats.map((cat, idx:number) => {
            return (
              <div className="singeCatWrap">
                <p onClick={() => dropDownCat(idx)}>Name = {cat.name}</p>
                <div className="catInfoSlide" id={"A"+idx}>
                  <p>Birthday = {cat.birthDay}</p>
                  <p>Breed = {cat.breed}</p>
                  <p>Colors =</p>
                  <div className="colorDiv">
                  {
                    cat.colors.map((color: string) => {
                      return <p>{color}</p>
                    })
                  }
                  </div>
                  <p>Eyecolor = {cat.eyeColor}</p>
                </div>
            {/* tweets = meows */}
              </div>
            )
          })
          : <p>no cats</p>
      }
    </div>
  )
}