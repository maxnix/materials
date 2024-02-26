export const FormExample = () => (
  <div className="flex items-center justify-center">
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl">Form Example</h1>
      <div className="bg-stone-900 border border-neutral-700 rounded-md p-4 mt-4 min-w-[368px]">
        <form className="flex flex-col">
          <label htmlFor="name" className="flex flex-col space-y-2">
            <span>Name</span>
            <input
              id="name"
              name="name"
              type="text"
              className="border border-neutral-700 rounded-md p-2"
            />
          </label>

          <label htmlFor="email" className="flex flex-col space-y-2">
            <span>Email</span>
            <input
              id="email"
              name="email"
              type="email"
              className="border border-neutral-700 rounded-md p-2"
            />
          </label>
          <button
            type="submit"
            className="bg-primary-500 text-white rounded-md p-2 mt-8 btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
)
