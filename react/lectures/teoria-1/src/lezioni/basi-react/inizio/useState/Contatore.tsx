import { useState } from "react"

export const Contatore = () => {
  const [count] = useState(0)

  return (
    <section className="container flex flex-col items-center">
      <div className="flex flex-col items-center gap-8 bg-zinc-800 border border-zinc-700 w-fit p-8 rounded-lg">
        <h1>Contatore</h1>
        <div className="px-4 py-2 bg-zinc-700 rounded-md">
          <p>{count}</p>
        </div>
      </div>
    </section>
  )
}
