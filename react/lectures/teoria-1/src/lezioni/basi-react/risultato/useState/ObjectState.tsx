import { useState } from "react"

const initialState = [`red`, `green`, `blue`, `yellow`, `purple`]
const darkColors = [`black`, `gray`, `darkblue`, `darkgreen`]

// export const ObjectState = () => {
//  const [colors, setColors] = useState(initialState)

// Mitigare errore di duplicazione di colori
// Riferimento alla lezione in cui usiamo if all'interno del setState

// Mutability degli array usati come state. Prima esempio inline (35)
//   const handleDarkColors = () => {
//      Prevents ID duplication
//     if (colors.some((color) => darkColors.includes(color))) return

//     setColors((prev) => [...prev, ...darkColors])
//     // setColors((prev) => prev.concat(darkColors)) // Alternativa
//   }

//   return (
//     <div className="max-w-5xl container flex flex-col items-center gap-6">
//       <h1 className="text-4xl font-bold">Colori</h1>
//       <div className="flex gap-4">
//         <button
//           type="button"
//           className="btn-primary"
//           onClick={() => setColors(initialState)}
//         >
//           Reset
//         </button>
//         <button
//           type="button"
//           className="btn-primary bg-gray-600 hover:bg-gray-900"
//           //   onClick={() => setColors([...colors, ...darkColors])}
//           onClick={handleDarkColors}
//         >
//           Add dark colors
//         </button>
//       </div>
//       {colors.map((color, index) => (
//         <Item
//           key={color}
//           titolo={color}
//           onClick={() => setColors(colors.filter((_, i) => i !== index))}
//         />
//       ))}
//     </div>
//   )
// }
export const ObjectState = () => {
  const [objColors, setObjColors] = useState({
    colors: initialState,
    darkColors: false,
    spread: `spread`,
  })

  // Oggetto con array (doppia mutabilità)
  const handleDarkColors = () => {
    if (!objColors.darkColors && objColors.spread)
      setObjColors((prev) => ({
        ...prev,
        colors: [...prev.colors, ...darkColors],
        darkColors: true,
      }))
  }

  const removeColor = (index: number) => {
    setObjColors((prev) => ({
      ...prev,
      colors: prev.colors.filter((_, i) => i !== index),
    }))
  }

  //   const resetColors = () => {
  //     setObjColors({
  //       colors: initialState,
  //     })
  //   }
  const resetColors = () => {
    setObjColors({
      ...objColors,
      colors: initialState,
      darkColors: false,
    })
  }

  console.log(objColors)

  return (
    <div className="max-w-5xl container flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold">Colori</h1>
      <div className="flex gap-4">
        <button type="button" className="btn-primary" onClick={resetColors}>
          Reset
        </button>
        <button
          type="button"
          className="btn-primary bg-gray-600 hover:bg-gray-900"
          onClick={handleDarkColors}
        >
          Add dark colors
        </button>
      </div>
      {objColors.colors.map((color, index) => (
        <Item key={color} titolo={color} onClick={() => removeColor(index)} />
      ))}
    </div>
  )
}

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
