import { FC, useEffect, useState } from "react"
import { jsonplacholderUrl, dataPlaceholder, type Data } from "./constants"

export const DataFetching = () => {
  const [posts, setPosts] = useState<Data[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPosts = async (testError?: true) => {
    try {
      if (testError) throw new Error(`Errore di test`)
      const res = await fetch(`${jsonplacholderUrl}/posts`)
      const data = (await res.json()) as Data[]
      setError(null)
      setPosts(data)
    } catch (err) {
      if (err instanceof Error) setError(err.message as string)
      setError(`Errore di rete`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  if (error) return <p>{error}</p>
  return (
    <div>
      <h1>Posts</h1>
      <div className="flex flex-col gap-4 mt-6">
        {loading
          ? dataPlaceholder.map(({ id }) => <ArticleSkeleton key={id} />)
          : posts.map((post) => <Article key={post.id} {...post} />)}
      </div>
    </div>
  )
}

const Article: FC<Data> = ({ title, body }) => (
  <article className="card flex flex-col gap-2 justify-start items-start max-w-[500px] w-full h-auto">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p>{body}</p>
  </article>
)

const ArticleSkeleton = () => (
  <article className="card flex flex-col gap-2 justify-start items-start max-w-[500px] w-full h-auto">
    <h2 className="text-xl font-semibold">Caricamento...</h2>
    <p>Caricamento...</p>
  </article>
)
