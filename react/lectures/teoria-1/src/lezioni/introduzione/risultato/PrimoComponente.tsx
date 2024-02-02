import { createElement } from "react"

/**
 * createElement è una funzione che permette di creare un elemento React
 * createElement ha 3 parametri:
 * 1. Il tipo di elemento che si vuole creare
 * 2. Le proprietà dell'elemento
 * 3. Il contenuto dell'elemento
 */
const UnderTheHood = () =>
  createElement(
    `div`,
    null,
    createElement(
      `h4`,
      { className: `evviva` },
      `La libreria più usata sul front-end`
    )
  )

/**
 * Regole di un Componente React
 * 1. Componenti React devono iniziare con una lettera maiuscola
 * 2. Componente deve sempre ritornare un solo elemento
 * 3. Componenti React devono essere in un file con estensione .tsx
 */
export const PrimoComponente = () => (
  <div>
    <h1>Benvenuti nel corso di React</h1>
    <UnderTheHood />
  </div>
)
