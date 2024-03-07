import React from "react"

type DrillingProps = {
  title: string
  updateTitle: (title: string) => void
}

export const ArticleWithContext = () => {
  const [state, setState] = React.useState(`Hello`)
  const updateTitle = (title: string) => setState(title)

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Props Drilling</h1>
      <Article
        className="card h-auto mt-4"
        title={state}
        updateTitle={updateTitle}
      />
    </div>
  )
}

type ArticleProps = DrillingProps & React.HTMLAttributes<HTMLDivElement>

const Article = ({ title, updateTitle, ...rest }: ArticleProps) => (
  <article {...rest}>
    <Content title={title} updateTitle={updateTitle} />
  </article>
)

const Content = (props: DrillingProps) => (
  <div className="w-full">
    <Body {...props} />
  </div>
)

const Body = (props: DrillingProps) => (
  <div className="flex flex-col gap-6 justify-between items-center w-full">
    <p className="text-lg">{props.title}</p>
    <hr className=" w-full border-gray-700" />
    <Footer updateTitle={props.updateTitle} btnText="Inferno" />
  </div>
)

type FooterProps = Pick<DrillingProps, "updateTitle"> & {
  btnText?: string
}

const Footer = (props: FooterProps) => (
  <footer>
    <button
      className="btn-primary"
      type="button"
      onClick={() => props.updateTitle(`Ciao`)}
    >
      {props.btnText || `Click me!`}
    </button>
  </footer>
)
