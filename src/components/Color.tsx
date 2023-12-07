interface ColorProps {
  color: string;
  index: number;
}

const Color = ({color, index}: ColorProps) => {
  return (
    <div className="colorComponent">
      <p>{color}</p>
      {/* <p className="deleteColor" onClick={() => {}}>X</p> */}
    </div>
  )
}

export default Color