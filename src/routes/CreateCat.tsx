import { useState, KeyboardEvent } from "react"
import Color from "../components/Color"

export default function CreateCat() {

  const [name, setName] = useState('')
  const [birthDay, setBirthDay] = useState<string>("2000-12-12")
  const [singleColor, setSingleColor] = useState('')
  const [colorArr, setColorArr] = useState<string[]>([])
  const [eyeColor, setEyeColor] = useState('')
  const [type, setType] = useState('')
  // maybe siblings

  // list of all the breeds (iknow i should pull this data or put it in a seperate text file but.... fuck it)
  const catBreeds:string[] = ["Abyssinian", "Aegean", "American Bobtail", "American Curl", "American Shorthair", "American Wirehair", "Aphrodite Giant", "Arabian Mau", "Ashera", "Asian Longhair", "Asian Shorthair", "Australian Mist", "Aztec", "Balinese", "Balinese Modern", "Bambino", "Bengal", "Birman", "Bombay", "Bramble", "Brazilian Shorthair", "British Longhair", "British Shorthair", "Burmese", "Burmilla", "Chartreux", "Chausie", "Cornish Rex", "Cyprus", "Devon Rex", "Domestic Long Hair", "Domestic Shorthair", "Dragon Li", "Egyptian Mau", "Exotic", "Himalayan", "Javanese", "Korat", "LaPerm", "Lykoi", "Maine Coon", "Manx", "Minskin", "Norwegian Forest Cat", "Ocicat", "Oriental Longhair", "Oriental Shorthair", "Persian Modern", "Persian Traditional", "Ragamuffin", "Ragdoll", "Russian Blue", "Savannah", "Scottish Fold", "Selkirk Rex", "Siamese", "Siamese Modern", "Siberian", "Singapura", "Snowshoe", "Sphynx", "Tonkinese", "Turkish Angora", "Turkish Van"]


  // function to make colors add to the colors state array and later add to firebase
  const handleColors = (e: KeyboardEvent<HTMLInputElement>) => {
    let key: string = e.key;

    if (key == "Enter") {
      
      if (colorArr.length > 0) {
        const tempColors: string[] = [...colorArr]
        tempColors.push(singleColor)
        setColorArr(tempColors)
        setSingleColor('')
      } else {
        const tempColors: string[] = [];
        tempColors.push(singleColor)
        setColorArr(tempColors)
        setSingleColor('')
      }
    }
  }

  return (
    <div className="createCatPage">
      <h1>Create a Cat!</h1>
      <div className="createCatInputWrap">
        <p>Name</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <h3>{name}</h3>
        <p>BirthDay</p>
        <input type="date" value={birthDay} onChange={(e) => setBirthDay(e.target.value) } />
        <h3>{birthDay}</h3>
        <div className="colorsDiv">
          <p>Color(Can Enter multiple)</p>
          <input type="text" value={singleColor} onChange={(e) => setSingleColor(e.target.value)} onKeyDown={(e) => handleColors(e)} />
          {
            colorArr.length > 0 ?
            colorArr.map((clr, inx) => {
              return <Color color={clr} index={inx}/>
            })
            : <p>No Colors yet</p>
          }
        </div>
        <p>Eye color</p>
        <input type="text" value={eyeColor} onChange={(e) => setEyeColor(e.target.value)} />
        <h3>{eyeColor}</h3>
        <p>Type of cat </p>
        {/* maybe create a custom select component */}
        <select name="catBreeds">
        {
          catBreeds.map((breed,idx)=> {
            return <option key={idx} value={breed}>{breed}</option>
          })
        }
        </select>
      </div>
    </div>
  )
}