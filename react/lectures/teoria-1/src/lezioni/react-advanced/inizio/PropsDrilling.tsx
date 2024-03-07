import React from "react"

type DrillingProps = {
  title: string
  updateTitle: (title: string) => void
}

export const PropsDrilling = () => {
  const [state, setState] = React.useState(`Hello`)
  const updateTitle = (title: string) => setState(title)

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Props Drilling</h1>
      <Article />
    </div>
  )
}

const Article = () => (
  <article>
    <Content />
  </article>
)

const Content = () => (
  <div className="w-full">
    <Body />
  </div>
)

const Body = (props: any) => (
  <div className="flex flex-col gap-6 justify-between items-center w-full">
    <p className="text-lg">{props?.title ?? `Evviva`}</p>
    <hr className=" w-full border-gray-700" />
    <footer>
      <button
        className="btn-primary"
        type="button"
        onClick={() => props?.updateTitle(`Ciao`)}
      >
        {`Click me!`}
      </button>
    </footer>
  </div>
)
