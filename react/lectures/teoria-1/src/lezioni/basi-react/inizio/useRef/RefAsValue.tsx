export const RefAsValue = () => {
  const secondsPassed = 0
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h1 className="text-4xl">Ref as value</h1>
        <div className="bg-stone-900 p-4 rounded-md border border-neutral-700 flex flex-col space-y-4 min-w-[368px]">
          <h2 className="text-3xl">Time passed: {secondsPassed.toFixed(3)}</h2>
          <button className="btn-primary" type="button">
            Start
          </button>
          <button className="btn-disruptive" type="button">
            Stop
          </button>
        </div>
      </div>
    </div>
  )
}
