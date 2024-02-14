import { useState } from "react"

type Operator = "or" | "and" | "nullish" | null

interface OperatorProps {
  operator?: Operator
}

export const Operators = () => (
  <div className="flex flex-col gap-8 container">
    <OperatorValue operator="or" />
    <OperatorWithComponent />
  </div>
)

const OperatorValue = ({ operator }: OperatorProps) => {
  const [state, setOperator] = useState<Operator>(operator ?? `nullish`)

  if (!operator) {
    return <h2 className="text-3xl text-red-500">No operator selected</h2>
  }
  return (
    <div className="flex flex-col gap-6">
      <h1>Operators</h1>
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl">Binary</h2>
        <ul className="flex">
          <li>
            <button
              type="button"
              onClick={() => setOperator(`or`)}
              className={`btn ${state === `or` ? `btn-primary` : `btn-tab hover:bg-green-950`}`}
            >
              Or
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setOperator(`and`)}
              className={`btn ${state === `and` ? `btn-primary` : `btn-tab hover:bg-green-950`}`}
            >
              And
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setOperator(`nullish`)}
              className={`btn ${state === `nullish` ? `btn-primary` : `btn-tab hover:bg-green-950`}`}
            >
              Nullish
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setOperator(null)}
              className={`btn ${state === null ? `btn-primary` : `btn-tab hover:bg-green-950`}`}
            >
              Null
            </button>
          </li>
        </ul>
      </div>

      <h2>Operators Values</h2>
      <div className="flex flex-col gap-3">
        <ul>
          <li className="p-2 bg-zinc-800 border-b border-zinc-700">
            {/* OR: {state === `or` || `Fallback`} */}
            OR: {state || `Fallback`}
          </li>
          <li className="p-2 bg-zinc-800 border-b border-zinc-700">
            AND: {state === `and` && `Show this`}
          </li>
          <li className="p-2 bg-zinc-800 border-b border-zinc-700">
            Nullish: {state ?? `È null`}
          </li>
          <li className="p-2 bg-zinc-800 border-b border-zinc-700">
            TERNARY: {state ? `TRUE` : `FALSE`}
          </li>
        </ul>
      </div>
    </div>
  )
}

const Componente = () => <div>Mostra</div>

const OperatorWithComponent = () => {
  const [show, setShow] = useState<boolean | null>(false)
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl">Show Hide Components</h2>
      <div className="flex flex-col gap-3">
        <ul className="flex">
          <li>
            <button
              type="button"
              onClick={() => setShow(true)}
              className={`btn ${show ? `btn-primary` : `btn-tab hover:bg-green-950`}`}
            >
              True
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setShow(false)}
              className={`btn ${show ? `btn-tab hover:bg-green-950` : `btn-primary`}`}
            >
              False
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setShow(null)}
              className={`btn ${show === null ? `btn-primary` : `btn-tab hover:bg-green-950`}`}
            >
              Null
            </button>
          </li>
        </ul>
        <ul>
          {show || (
            <li className="p-2 bg-zinc-800 border-b border-zinc-700">
              OR: <Componente />
            </li>
          )}
          {show && (
            <li className="p-2 bg-zinc-800 border-b border-zinc-700">
              AND: <Componente />
            </li>
          )}
          {show ?? (
            <li className="p-2 bg-zinc-800 border-b border-zinc-700">
              NULLISH: <Componente />
            </li>
          )}
          {show ? (
            <li className="p-2 bg-zinc-800 border-b border-zinc-700">
              TERNARY - TRUE <Componente />
            </li>
          ) : (
            <li className="p-2 bg-zinc-800 border-b border-zinc-700">
              TERNARY - FALSE
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
