import React from "react"
import { data } from "./constant"

/**
 * Evitare Re Render
 * Memorizzare funzioni
 * Memorizzare valori
 * Attenzione a non over ottimizzare
 */
export const CallbackMemo = () => {
  const [list, setList] = React.useState(data)
  const [zanzarosi, setZanzarosi] = React.useState<CardProps[]>([])

  //   const handleZanzarosi = () => {
  //     setZanzarosi((prev) => prev + 1)
  //   }

  return (
    <div>
      <h2>Callback e Memo</h2>
      <section className="flex justify-between">
        <div className=" mt-4">
          <h3>Tutti</h3>
          {list.map((el) => (
            <Card key={el.id} {...el} />
          ))}
        </div>
        <div className="mt-4">
          <h3>Zanzarosi</h3>
          {zanzarosi.map((el) => (
            <Card key={el.id} {...el} />
          ))}
        </div>
      </section>
      <button
        className="btn-primary mt-4"
        type="button"
        onClick={() => {
          setList((prev) => {
            const randomIndex = Math.floor(Math.random() * prev.length)
            const randomValue = Math.floor(Math.random() * 100)
            return prev.map((el, i) =>
              i === randomIndex ? { ...el, age: randomValue } : el
            )
          })
        }}
      >
        Randomize
      </button>

      <div className="mt-4">
        <h3>Zanzarosi: {zanzarosi.length}</h3>
      </div>
    </div>
  )
}

type CardProps = (typeof data)[number]

const Card = React.memo(({ name, surname, age }: CardProps) => {
  console.log(`render`)
  return (
    <div className="card mt-4 justify-between">
      {name} {surname} {age}
      <button className="btn-disruptive" type="button">
        Zanzarosi
      </button>
    </div>
  )
})

export default CallbackMemo
