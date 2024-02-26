/**
 * 1) Prevent the default behavior of the form
 * 2) Controlled input
 */

import { useState } from "react"

const defualtValue = {
  name: ``,
  email: ``,
}

export const UncontrolledForm = () => {
  const [form, setForm] = useState(defualtValue)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Do something with the form
    setForm(defualtValue)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target)
    const { name: inputNameProps, value } = event.target
    setForm({ ...form, [inputNameProps]: value })
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
                value={form.name}
                onChange={handleChange}
                className="border border-neutral-700 rounded-md p-2"
              />
            </label>

            <label htmlFor="email" className="flex flex-col space-y-2">
              <span>Email</span>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
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
