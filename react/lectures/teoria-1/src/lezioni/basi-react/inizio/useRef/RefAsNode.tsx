const RefAsNode = () => (
  <div className="flex flex-col justify-center">
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl">Ref as value</h1>
      <button className="btn-primary" type="button">
        Scroll
      </button>
    </div>
    <div className="h-96 w-full" />
    <div className="h-96" />
    <div className="h-96" />
    <div className="flex gap-12">
      <button className="btn-primary" type="button">
        Go to top
      </button>
      <input
        className="input-primary"
        type="text"
        placeholder="Type something"
      />
      <button className="btn-tab" type="button">
        Focus input
      </button>
    </div>
  </div>
)

export default RefAsNode
