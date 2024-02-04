import {
  Color,
  // complexArray,
  arrayOfObjects,
  availableColors,
} from "./constants"

/**
 * Array
 * React renders an array of elements
 * Array of objects
 * From other files
 */

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
    <p className="text-xs text-gray-400 self-end">{props.subtitle}</p>
  </div>
)

// const articleArray = [<Article  />, <Article  />]

export const WorkWithArray = () => (
  <section className="flex flex-col place-items-center">
    {/* Array di nodi */}
    {[
      <h1 className="text-5xl font-bold">Work with Array</h1>,
      // Seconda elmento dell'array
      <div className="flex gap-4">
        <div className="flex flex-col mt-4 gap-4">
          {/* {articleArray} */}
          {availableColors.map((color) => (
            <Article bgColor={color}>
              <TextContent
                title="Una Variabile"
                subtitle="Props Object Lesson"
              />
            </Article>
          ))}
        </div>
        <div className="flex flex-col mt-4 gap-4">
          {arrayOfObjects.map(({ color, title, subtitle }) => (
            <Article bgColor={color}>
              <TextContent title={title} subtitle={subtitle} />
            </Article>
          ))}
        </div>
      </div>,
    ]}
  </section>
)
