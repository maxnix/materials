/* eslint-disable react/function-component-definition */
import { useState } from "react"

/**
 * State in JavaScript:
 * - Registra il valore/stato di un elemento in un dato momento
 */
export function Example() {
  //   let titolo = `Hello, world!`

  //   function traduciTitolo() {
  //     titolo = `Ciao, mondo!`
  //     console.log(titolo)
  //   }
  //   Vedo che non cambia anche con estensione react dev tools
  //   console.log(titolo)

  // Decosruzione di array con due elementi
  //   const [titolo, setTitolo] = useState<number>(`Hello, world!`)
  const [titolo, setTitolo] = useState(`Hello, world!`)

  const traduciTitolo = () => {
    setTitolo(`Ciao, mondo!`)
  }
  return (
    <div className="max-w-5xl container flex flex-col items-center">
      <h2 className="text-6xl font-bold mb-4">{titolo}</h2>
      <button
        type="button"
        className="bg-green-900 hover:bg-green-700 border-0 focus:outline-none"
        // onClick={traduciTitolo}
        // onClick={() => setTitolo(`Ciao, mondo!`)}
        onClick={traduciTitolo}
      >
        Traduci
      </button>

      {/* <button type="button" className="btn-primary">
        Clicca
      </button> */}
    </div>
  )
}
