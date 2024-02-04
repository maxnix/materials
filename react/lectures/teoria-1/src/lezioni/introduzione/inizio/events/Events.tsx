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

export const Events = () => (
  <section className="flex flex-col place-items-center">
    <h1 className="text-5xl font-bold">Work with Array</h1>
    <div className="flex gap-4">
      <div className="flex flex-col mt-4 gap-4">
        {arrayOfObjects.map(({ color, title, subtitle, id, price }) => (
          <Article bgColor={color} key={id}>
            <TextContent title={title} subtitle={subtitle} />
            <button
              type="button"
              className="bg-white text-black p-1 rounded-md w-full"
            >
              {price.toFixed(2)}€
            </button>
          </Article>
        ))}
      </div>
    </div>
    ,
  </section>
)
