// import style from "./JsxRules.module.css"

/*
    JSX & Rules 
    - JSX è una estensione della sintassi di JavaScript
    - JSX produce React "element"

    - Tag HTML deve essere chiuso
    - JSX attributi sono camelCase
    - JSX può essere usato con ES6
*/

const Titolo = () => <h1>Un titolo in Jsx</h1>
const Paragrafo = () => <p>Sono un paragrafo</p>

const TextContent = () => (
  <div className="flex flex-col">
    <Titolo />
    <Paragrafo />
  </div>
)

const Article = () => (
  <article
    style={{
      marginBottom: `1rem`,
    }}
    className={`none`}
  >
    <img src="https://picsum.photos/200" alt="random" />
    <TextContent />
  </article>
)

export const Tailwind = () => (
  <section>
    <Article />
    <Article />
  </section>
)
