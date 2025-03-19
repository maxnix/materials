/*
  Il Props Object è un oggetto che contiene tutte le props passate ad un componente.
  - props è un oggetto.
  - Le props sono passate come argomento della funzione componente.
  - Le props sono accessibili tramite la notazione dot.
  - Le props sono immutabili.
*/

// array di colori disponibili 
const availableColors = [`red`, `green`, `blue`, `yellow`, `purple`];

type ArticleProps = {
  title: string; // di tipo stringa
  subtitle?: string; // di tipo stringa ma opzionale perché ho inserito "?"
  bgColor?: 1 | 2 | 3 | 4 | 5;
  style?: React.CSSProperties;
};

// dichiaro un tipo di props
const Article = (props: ArticleProps) => {
  console.log(props, props.title);
  let selectedColor = props.bgColor;
  if (selectedColor === undefined) {
    selectedColor = 3;
  }

  const bgColor = availableColors[selectedColor - 1];

  return (
    <article
      style={ // apro le parentesi perché sto passando a javascript
        {
        marginBottom: `1rem`,
        backgroundColor: bgColor,
        ...props.style, // leggo lo stile definito in props
      }
    } // esco da javascript
      className='card'
    >
      <img
        src='https://picsum.photos/200'
        alt='random'
        className='rounded-sm h-full min-w-16 min-h-16'
      />
      <div className='flex flex-col gap-2 w-full'>
        <h2 className='text-2xl font-semibold'>{props.title}</h2>
        <p className='text-xs text-gray-400 self-end'>{props.subtitle}</p>
      </div>
    </article>
  );
};

export const PropsObject = () => (
  <section className='flex flex-col place-items-center'>
    <h1 className='text-5xl font-bold'>Props Object</h1>
    <div className='flex mt-4 gap-4'>
      <Article
        title='Una Variabile'
        subtitle='Props Object Lesson'
        bgColor={5}
        style={{
          transform: `rotate(5deg)`,
          marginTop: `1rem`,
        }}
      />
      <Article
        title='Una Variabile'
        subtitle='Props Object Lesson'
        style={{
          transform: `rotate(-5deg)`,
          marginTop: `2rem`,
        }}
      />{" "}
    </div>
  </section>
);
