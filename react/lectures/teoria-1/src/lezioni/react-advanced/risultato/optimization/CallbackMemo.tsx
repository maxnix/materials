import React, { useCallback } from "react"
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
  const handleZanzarosi = useCallback(
    (id: number) => {
      setZanzarosi((prev) =>
        prev.some((el) => el.id === id)
          ? prev
          : [...prev, list.find((el) => el.id === id)!]
      )
    },
    [list]
  )

  const trovaMaggiore = useCallback((array: CardProps[]) => {
    console.log(`trovo maggiore`)
    return array.reduce((total, item) => {
      if (item.age > total) {
        // eslint-disable-next-line no-param-reassign
        total = item.age
      }
      return total
    }, 0)
  }, [])

  //   const maggiore = trovaMaggiore(list)
  const maggiore = React.useMemo(
    () => trovaMaggiore(list),
    [list, trovaMaggiore]
  )

  return (
    <div>
      <h2>Callback e Memo</h2>
      <section className="flex justify-between">
        <div className=" mt-4">
          <h3>Tutti</h3>
          {list.map((el) => (
            <Card key={el.id} {...el} handleZanzarosi={handleZanzarosi} />
          ))}
        </div>
        <div className="mt-4">
          <h3>Zanzarosi</h3>
          {zanzarosi.map((el) => (
            <Card key={el.id} {...el} handleZanzarosi={handleZanzarosi} />
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
      <div className="mt-4">
        <h3>Maggiore: {maggiore}</h3>
      </div>
    </div>
  )
}

// const UnMemorizedCard = ({ name, surname, age }: any) => {
//   console.log(`render`)
//   return (
//     <div className="card mt-4">
//       {name} {surname} {age}
//     </div>
//   )
// }

type CardProps = (typeof data)[number]

type CardPropsWithHandle = CardProps & { handleZanzarosi: (id: number) => void }

const Card = React.memo(
  ({ name, surname, age, id, handleZanzarosi }: CardPropsWithHandle) => {
    console.log(`render`)
    return (
      <div className="card mt-4 justify-between">
        {name} {surname} {age}
        <button
          className="btn-disruptive"
          type="button"
          onClick={() => handleZanzarosi(id)}
        >
          Zanzaroso
        </button>
      </div>
    )
  }
)

export default CallbackMemo
