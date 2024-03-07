import React, { useState } from "react"
import { ArticleProvider, PureArticleProvider, useArticle } from "./Provider"

export const ArticleWithContext = () => (
  <div className="flex flex-col items-center">
    <h1 className="text-2xl font-bold">Props Drilling</h1>
    <ArticleProvider>
      <Article className="card h-auto mt-4" />
    </ArticleProvider>
    <ArticleWithProvider className="card h-auto mt-4" />
  </div>
)

type ArticleProps = React.HTMLAttributes<HTMLDivElement>

const Article = ({ ...rest }: ArticleProps) => (
  <article {...rest}>
    <Content />
  </article>
)

const ArticleWithProvider = (props: ArticleProps) => {
  const [title, setTitle] = useState(`Evviva!`)
  const updateTitle = (string: string) => setTitle(string)

  return (
    <PureArticleProvider value={{ title, updateTitle }}>
      <article {...props}>
        <Content />
      </article>
    </PureArticleProvider>
  )
}

const Content = () => (
  <div className="w-full">
    <Body />
  </div>
)

const Body = () => {
  const { title } = useArticle() || {}
  return (
    <div className="flex flex-col gap-6 justify-between items-center w-full">
      <p className="text-lg">{title}</p>
      <hr className=" w-full border-gray-700" />
      <Footer btnText="Inferno" />
    </div>
  )
}

type FooterProps = {
  btnText?: string
}

const Footer = (props: FooterProps) => {
  const { updateTitle } = useArticle() || {}
  return (
    <footer>
      <button
        className="btn-primary"
        type="button"
        onClick={() => updateTitle(`Ciao`)}
      >
        {props.btnText || `Click me!`}
      </button>
    </footer>
  )
}
