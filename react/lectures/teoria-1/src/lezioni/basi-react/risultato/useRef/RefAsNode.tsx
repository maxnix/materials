import React from "react"

const RefAsNode = () => {
  const refBottom = React.useRef<HTMLButtonElement>(null)
  const refTop = React.useRef<HTMLDivElement>(null)
  const refInput = React.useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    refBottom.current?.scrollIntoView({ behavior: `smooth` })
  }

  const scrollToTop = () => {
    refTop.current?.scrollIntoView({ behavior: `smooth` })
  }

  const handleFocus = () => {
    console.log(refInput.current, refInput.current?.value)
    refInput.current?.focus()
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center" ref={refTop}>
        <h1 className="text-4xl">Ref as value</h1>
        <button className="btn-primary" type="button" onClick={scrollToBottom}>
          Scroll
        </button>
      </div>
      <div className="h-96 w-full" />
      <div className="h-96" />
      <div className="h-96" />
      <div className="flex gap-12">
        <button
          className="btn-primary"
          type="button"
          ref={refBottom}
          onClick={scrollToTop}
        >
          Go to top
        </button>
        <input
          className="input-primary"
          type="text"
          placeholder="Type something"
          ref={refInput}
        />
        <button className="btn-tab" type="button" onClick={handleFocus}>
          Focus input
        </button>
      </div>
    </div>
  )
}

export default RefAsNode
