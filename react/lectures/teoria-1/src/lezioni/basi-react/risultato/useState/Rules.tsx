import { useState } from "react"

/**
 * Regole degli Hooks:
 * - Chiamare gli Hooks solo al livello più alto
 * - Gli Hooks devono essere chiamati all'interno di un componente funzionale
 * - Gli Hooks non possono essere chiamati all'interno di cicli, condizioni o funzioni annidate
 */

// not allowed - Hooks can only be called inside the body of a function component
// const [titolo, setTitolo] = useState(`Hello, world!`)

export const HooksRules = () => {
  const [globalTitle, setGlobalTitle] = useState(`Top level title`)
  const onClick = () => {
    setGlobalTitle(`Changed title`)
  }
  return (
    <div className="flex flex-col gap-6">
      {/* <Titolo />
      // Fai vedere che gli state sono indipendenti
      <Titolo titoloIniziale="State indipendente" /> */}
      <Titolo titoloIniziale={globalTitle} onClick={onClick} />
      <Titolo titoloIniziale={globalTitle} onClick={onClick} />
    </div>
  )
}

type TitloProps = {
  titoloIniziale?: string
  onClick: () => void
}

const Titolo = ({ titoloIniziale, onClick }: TitloProps) => (
  // Not allowed
  // if (true) {
  //     const [titolo, setTitolo] = useState(`Hello, world!`)
  // }

  //   useState accetta anche una funzione come argomento
  //   const [titolo, setTitolo] = useState(() => {
  //     if (titoloIniziale) {
  //       return titoloIniziale
  //     }
  //     return `Hello, world!`
  //   })

  //   const traduciTitolo = () => {
  //     setTitolo(`Ciao, mondo!`)
  //   }
  <div className="max-w-5xl container flex flex-col items-center">
    <h2 className="text-3xl font-bold mb-4">{titoloIniziale}</h2>
    <button
      type="button"
      className="bg-green-900 hover:bg-green-700 border-0 focus:outline-none"
      onClick={onClick}
    >
      Traduci
    </button>
  </div>
)
