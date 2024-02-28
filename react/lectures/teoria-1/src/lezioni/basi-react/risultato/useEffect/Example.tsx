import { useEffect, useState } from "react"

/**
 * useEffect
 * - Controllare i side effects
 * - Eseguire codice dopo che il componente è stato montato
 * - Eseguire codice dopo che il componente è stato aggiornato
 * - Eseguire codice dopo che il componente è stato smontato
 * - Togli StricMode
 */
export const Example = () => {
  const [title, setTitle] = useState<string>(`useEffect - Evviva`)
  //   useEffect(() => {
  //     console.log(`Ciao`)
  //   }, [])

  //   useEffect(() => {
  //     console.log(`Ciao sono il secondo useEffect`)
  //     document.title = title
  //   }, [title])

  useEffect(() => {
    console.log(`Ciao sono il terzo useEffect`)
    if (document.title !== `Clean up`) document.title = title

    return () => {
      console.log(`Ciao sono il cleanup del terzo useEffect`)
      if (document.title === `premuto er bottone`) document.title = `Clean up`
    }
  }, [title])
  return (
    <div className="container flex flex-col gap-3">
      <h1 className="text-2xl">useEffect: {title}</h1>
      <p>Controllare i side effects</p>
      <button
        type="button"
        className="btn-primary"
        onClick={() => setTitle(`premuto er bottone`)}
      >
        aggiorna
      </button>

      <button
        type="button"
        className="btn-primary"
        onClick={() => setTitle(`Reset`)}
      >
        pulisci
      </button>
    </div>
  )
}
