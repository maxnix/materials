import { useState } from "react"

/**
 * A callback function with setState is essential when performing actions requiring the most recent state.
 * Since setState is asynchronous, without a callback function,
 * there is no guarantee that the state has been updated when you try to access it immediately after calling setState.
 * This can lead to unpredictable behavior, especially when dealing with server responses or chaining multiple state updates.
 */

export const Contatore = () => {
  const [count, setCount] = useState(0)

  //   const increment = () => {
  //     setCount(count + 1)
  //   }

  const decrement = () => {
    setCount(count - 1)
  }

  const delayIncrement = () => {
    setTimeout(() => {
      //   setCount(count + 1) // Non funziona
      setCount((prevCount) => prevCount + 1) // Funziona
    }, 1000)
  }

  return (
    <section className="container flex flex-col items-center">
      <div className="flex flex-col items-center gap-8 bg-zinc-800 border border-zinc-700 w-fit p-8 rounded-lg">
        <h1>Contatore</h1>
        <div className="px-4 py-2 bg-zinc-700 rounded-md">
          <p>{count}</p>
        </div>
        <div className="flex gap-4 items-center ">
          <button
            className="btn-primary"
            type="button"
            onClick={delayIncrement}
          >
            Incrementa
          </button>
          <button type="button" className="btn-disruptive" onClick={decrement}>
            Decrementa
          </button>
        </div>
      </div>
    </section>
  )
}
