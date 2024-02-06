import { createElement } from "react"

/**
 * createElement è una funzione che permette di creare un elemento React
 * createElement ha 3 parametri:
 * 1. Il tipo di elemento che si vuole creare
 * 2. Le proprietà dell'elemento
 * 3. Il contenuto dell'elemento
 */
const UnderTheHood = () =>
  createElement(`div`, { className: `ciao-mondo` }, [
    createElement(`h1`, null, `Benvenuti nel corso di React`),
    createElement(`p`, null, `La Libreria più usata sul frontend`),
  ])

/**
 * Regole di un Componente React
 * 1. Componenti React devono iniziare con una lettera maiuscola
 * 2. Componente deve sempre ritornare un solo elemento
 * 3. Componenti React devono essere in un file con estensione .tsx
 */
export const PrimoComponente = () => <UnderTheHood />
// export const PrimoComponente = () => (
//   <>
//     <div>
//       <h1>Benvenuti nel corso di React</h1>
//       <p>La Libreria più usata sul frontend</p>
//     </div>
//     <div>
//       <h1>Benvenuti nel corso di React</h1>
//       <p>La Libreria più usata sul frontend</p>
//     </div>
//   </>
//
// )
