import style from "./JsxRules.module.css";

/*
    JSX & Rules 
    - JSX è una estensione della sintassi di JavaScript
    - JSX produce React "element"

    - Tag HTML deve essere chiuso
    - JSX attributi sono camelCase
    - JSX può essere usato con ES6

    -- CSS in Jsx
    - className invece di class
    - style={{color: "red"}}
    - style={variabileCss}
*/
/* Crea il tuo componente JsxRules
    rfce
*/
const Titolo = () => <h1>JSX Rules</h1>;
const Paragrafo = () => <p>JSX è una estensione della sintassi di JavaScript</p>;

const TextContent = () => (
  <div>
    <Titolo />
    <Paragrafo />
  </div>
);

const Article = () => (
  <article className={style.cardClass}>
    <TextContent />
    <img src='https://picsum.photos/300' alt='bella immagine' />
  </article>
);

export const JsxRules = () => (
  <section >
    <Article />
    <Article />
  </section>
);
