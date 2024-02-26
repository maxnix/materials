import { useState, useRef } from "react"

/**
 * useRef
 * - useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
 * - The returned object will persist for the full lifetime of the component.
 * - useRef do not cause re-render when the value changes.
 * - do not use ref to hold state, use useState instead.
 */

type Time = null | number

export const RefAsValue = () => {
  const [startTime, setStartTime] = useState<Time>(null)
  const [now, setNow] = useState<Time>(null)
  const intervalRef = useRef<Time>(null)

  function handleStart() {
    setStartTime(Date.now())
    setNow(Date.now())

    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)
  }

  function handleStop() {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  let secondsPassed = 0
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h1 className="text-4xl">Ref as value</h1>
        <div className="bg-stone-900 p-4 rounded-md border border-neutral-700 flex flex-col space-y-4 min-w-[368px]">
          <h2 className="text-3xl">Time passed: {secondsPassed.toFixed(3)}</h2>
          <button className="btn-primary" type="button" onClick={handleStart}>
            Start
          </button>
          <button className="btn-disruptive" type="button" onClick={handleStop}>
            Stop
          </button>
        </div>
      </div>
    </div>
  )
}
