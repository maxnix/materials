import { Color, arrayOfObjects } from "./constants"

type ArticleProps = {
  children?: React.ReactNode
  bgColor?: Color
}

const Article = ({ bgColor = `blue`, children }: ArticleProps) => (
  <article
    style={{ marginBottom: `1rem`, backgroundColor: bgColor }}
    className="card"
  >
    <img
      src="https://picsum.photos/200"
      alt="random"
      className="rounded-sm h-full min-w-16 min-h-16"
    />
    {children}
  </article>
)

const TextContent = (props: { title: string; subtitle: string }) => (
  <div className="flex flex-col gap-2 w-full">
    <h2 className="text-2xl font-semibold">{props.title}</h2>
    <p className="text-xs text-gray-400">{props.subtitle}</p>
  </div>
)

// eslint-disable-next-line no-unused-vars
export const Events = (props: any) => {
  // const handleClick = () => {
  //   console.log(props)
  // }
  // const handleEventWithParams = (id: number, price: number) => {
  //   console.log(`eccomi`, id, price)
  // }

  // const handleEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log(event.currentTarget)
  // }

  const handleEventAndParams =
    (id: number, price: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log(`eccomi`, id, price, e.currentTarget.textContent)
    }

  return (
    <section className="flex flex-col place-items-center">
      <h1 className="text-5xl font-bold">Work with Array</h1>
      <div className="flex gap-4">
        <div className="flex flex-col mt-4 gap-4">
          {arrayOfObjects.map(({ color, title, subtitle, id, price }) => (
            <Article bgColor={color} key={id}>
              <TextContent title={title} subtitle={subtitle} />
              <button
                // onClick={handleClick}

                // Accedere a parametri del componente
                // onClick={() => {
                //   console.log(`eccomi`, id, price)
                // }}

                // Passare parametri al gestore dell'evento
                // onClick={() => handleEventWithParams(id, price)}
                // Deve essere una callback, altrimenti viene eseguita subito e non al click che ritorna undefined
                // onClick={handleEventWithParams(id, price)}
                // Gestiamo un evento
                // onClick={handleEvent}

                // Passare parametri al gestore dell'evento
                onClick={handleEventAndParams(id, price)}
                type="button"
                className="bg-white text-black p-1 rounded-md w-full"
              >
                {price.toFixed(2)}€
              </button>
            </Article>
          ))}
        </div>
      </div>
    </section>
  )
}
