import { useEffect } from "react"

export const Example = () => {
  useEffect(() => {
    console.log(`Ciao`)
  }, [])
  return (
    <div className="container flex flex-col gap-3">
      <h1 className="text-2xl">useEffect</h1>
      <p>Controllare i side effects</p>
    </div>
  )
}
