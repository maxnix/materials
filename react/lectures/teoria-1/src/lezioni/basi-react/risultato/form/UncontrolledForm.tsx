/**
 * 1) Prevent the default behavior of the form
 * 2) Controlled input
 */

type Form = {
  id: string
  name: string
  email: string
}

const generateUUID = () => `_${Math.random().toString(36).substring(2, 9)}`

export const UncontrolledForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append(`id`, generateUUID())
    const data = Object.fromEntries(formData) as Form
    console.log(data)
    // Do something with the form
    form.reset()
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl">Form Example</h1>
        <div className="bg-stone-900 border border-neutral-700 rounded-md p-4 mt-4 min-w-[368px]">
          <form className="flex flex-col" onSubmit={handleSubmit}>
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
}
