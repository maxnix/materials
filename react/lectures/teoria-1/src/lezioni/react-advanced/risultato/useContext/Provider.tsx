/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from "react"

type ContextProps = {
  title: string
  updateTitle: (title: string) => void
}

export const Context = createContext<ContextProps>({
  title: `Hello`,
  updateTitle: () => {},
})

export const PureArticleProvider = Context.Provider

export const ArticleProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [title, setTitle] = useState(`Hello`)
  const updateTitle = (string: string) => setTitle(string)

  return (
    <Context.Provider value={{ title, updateTitle }}>
      {children}
    </Context.Provider>
  )
}

export const useArticle = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error(`useArticle must be used within an ArticleProvider`)
  }
  return context
}
