import { useLocation, useOutletContext } from "react-router-dom"
import { auth, deleteCat, handleGetCats } from "../firebase"
import { useContext, useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import '../styles/cats.css'
import { UserContext } from "../UserContext";

interface propsCats {
  email: string,
}

export default function Cats(props: propsCats) {


  const [cats, setCats] = useState<any>([])

  const context = useContext(UserContext)
  const fun = context.fun
  const email = context.email

  if (document.querySelector('.Sidebar')?.classList.contains('on')) {
    fun()
  }

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

  // if sidebar is active after redirect then remove the on classes


  function dropDownCat(index: Number) {
    const catInfoSlide = document.getElementById("A" + index)
    catInfoSlide?.classList.toggle('on')

  }

  function deleteCatFully(e:string, n:string, index:number) {
    deleteCat(e, n)
    let tempCats = cats
    tempCats.splice(index, 1)
    console.log(tempCats);
    document.querySelector('.catWrapper')?.children[index].remove()
    setCats(tempCats)
  }


  // add image if not then get image with cat breed and color
  return (
    <div className="catPage">
      <h1>Cat dashboard</h1>
      {/* {cats.name} */}
      {/* {cats.colors} */}
      <div className="catWrapper">
      {
        cats.length > 0
          ? cats.map((cat, idx: number) => {
            return (
              <div className="singeCatWrap">
                <div className="singleCatHead">
                  <p onClick={() => dropDownCat(idx)}>Name = {cat.name}</p>
                  <p onClick={() => {
                    deleteCatFully(email, cat.name, idx)
                  }
                  }>X</p>
                </div>
                <div className="catInfoSlide" id={"A" + idx}>
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
    </div>
  )
}