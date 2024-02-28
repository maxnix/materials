import { useState } from "react"

const initialState = [`red`, `green`, `blue`, `yellow`, `purple`]
// const darkColors = [`black`, `gray`, `darkblue`, `darkgreen`]

export const ObjectState = () => {
  const [colors] = useState(initialState)

  return (
    <div className="max-w-5xl container flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold">Colori</h1>
      <div className="flex gap-4">
        <button type="button" className="btn-primary">
          Reset
        </button>
        <button
          type="button"
          className="btn-primary bg-gray-600 hover:bg-gray-900"
        >
          Add dark colors
        </button>
      </div>
      {colors.map((color) => (
        <Item
          key={color}
          titolo={color}
          onClick={() => console.log(`Cliccato ${color}`)}
        />
      ))}
    </div>
  )
}

// export const ObjectState = () => {
//   const [objColors, setObjColors] = useState({
//     colors: initialState,
//     darkColors: false,
//   })

//   const handleDarkColors = () => {

//   }

//   const removeColor = (index: number) => {

//   }

//   const resetColors = () => {

//   }

//   return (
//     <div className="max-w-5xl container flex flex-col items-center gap-6">
//       <h1 className="text-4xl font-bold">Colori</h1>
//       <div className="flex gap-4">
//         <button type="button" className="btn-primary" onClick={resetColors}>
//           Reset
//         </button>
//         <button
//           type="button"
//           className="btn-primary bg-gray-600 hover:bg-gray-900"
//           onClick={handleDarkColors}
//         >
//           Add dark colors
//         </button>
//       </div>
//       {objColors.colors.map((color, index) => (
//         <Item key={color} titolo={color} onClick={() => removeColor(index)} />
//       ))}
//     </div>
//   )
// }

type ItemProps = {
  titolo?: string
  onClick: () => void
}

const Item = ({ titolo, onClick }: ItemProps) => (
  <div className="card justify-between">
    <h2 className="text-3xl font-bold">{titolo}</h2>
    <button type="button" className="btn-disruptive" onClick={onClick}>
      ❌
    </button>
  </div>
)
