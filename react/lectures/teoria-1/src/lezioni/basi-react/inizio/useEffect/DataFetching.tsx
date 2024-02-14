import { FC, useState } from "react"
import { dataPlaceholder, type Data } from "./constants"

export const DataFetching = () => {
  const [posts] = useState<Data[]>(dataPlaceholder)

  return (
    <div>
      <h1>Posts</h1>
      <div className="flex flex-col gap-4 mt-6">
        {posts.map((post) => (
          <Article key={post.id} {...post} />
        ))}
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
