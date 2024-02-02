// const TextContent = () => (
//   <div className="flex flex-col gap-2 w-full">
//     <h2 className="text-2xl font-semibold">Props Obj</h2>
//     <p className="text-xs text-gray-400 self-end">styled by Tailwind</p>
//   </div>
// )

/*
  Il Props Object è un oggetto che contiene tutte le props passate ad un componente.
  - props è un oggetto.
  - Le props sono passate come argomento della funzione componente.
  - Le props sono accessibili tramite la notazione dot.
  - Le props sono immutabili.
*/

type Props = {
  title: string
  subtitle?: string
  bgColor?: 1 | 2 | 3 | 4 | 5
  style?: React.CSSProperties
}

const availableColors = [`red`, `green`, `blue`, `yellow`, `purple`]

const Article = (props: Props) => {
  console.log(props)
  let selectedColor = props.bgColor
  if (selectedColor === undefined) {
    selectedColor = 3
  }
  const bgColor = availableColors[selectedColor - 1]
  return (
    <article
      style={{ marginBottom: `1rem`, backgroundColor: bgColor, ...props.style }}
      className="card"
    >
      <img
        src="https://picsum.photos/200"
        alt="random"
        className="rounded-sm h-full min-w-16 min-h-16"
      />
      <div className="flex flex-col gap-2 w-full">
        <h2 className="text-2xl font-semibold">{props.title}</h2>
        <p className="text-xs text-gray-400 self-end">{props.subtitle}</p>
      </div>
    </article>
  )
}

export const PropsObject = () => (
  <section className="flex flex-col place-items-center">
    <h1 className="text-5xl font-bold">Props Object</h1>
    <div className="flex mt-4 gap-4">
      <Article
        title="Una Variabile"
        subtitle="Props Object Lesson"
        bgColor={5}
        style={{
          transform: `rotate(5deg)`,
          marginTop: `5rem`,
        }}
      />
    </div>
  </section>
)
