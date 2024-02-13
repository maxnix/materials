import { useState } from "react"

export const HooksRules = () => <Titolo titoloIniziale={`Evviva`} />

type TitloProps = {
  titoloIniziale: string
}

const Titolo = ({ titoloIniziale }: TitloProps) => {
  const [titolo, setTitolo] = useState(titoloIniziale)

  const traduciTitolo = () => {
    setTitolo(`Ciao, mondo!`)
  }
  return (
    <div className="max-w-5xl container flex flex-col items-center">
      <h2 className="text-6xl font-bold mb-4">{titolo}</h2>
      <button
        type="button"
        className="bg-green-900 hover:bg-green-700 border-0 focus:outline-none"
        onClick={traduciTitolo}
      >
        Traduci
      </button>
    </div>
  )
}
