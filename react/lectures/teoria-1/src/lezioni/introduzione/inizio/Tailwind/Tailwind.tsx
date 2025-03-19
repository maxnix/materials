// import style from "./JsxRules.module.css"

/*
    JSX & Rules 
    - JSX è una estensione della sintassi di JavaScript
    - JSX produce React "element"

    - Tag HTML deve essere chiuso
    - JSX attributi sono camelCase
    - JSX può essere usato con ES6
*/

const Titolo = () => (
  <h1 className='text-2xl font-semibold'>Un titolo in Jsx</h1>
);
const Paragrafo = () => (
  <p className='text-xs text-gray-400 self-end'>Sono un paragrafo</p>
);

const TextContent = () => (
  <div className='flex flex-col gap-3 w-full'>
    <Titolo />
    <Paragrafo />
  </div>
);

const Article = () => (
  <article
    style={{
      marginBottom: `1rem`,
    }}
    className={`card`}
  >
    <img
      src='https://picsum.photos/200'
      alt='random'
      className='rouded-sm h-full -min-w-16'
    />
    <TextContent />
  </article>
);

export const Tailwind = () => (
  <section className='flex flex-col place-items-center gap-5'>
    <h1 className='text-3xl font-bold'>Tailwind CSS</h1>
    <Article />
    <Article />
  </section>
);
