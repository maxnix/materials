import React, { Dispatch } from "react";
import { v4 as uuid } from "uuid";
import { ToDoItem } from "../types";
import { valideForm } from "../utils/validationSchema";

type ToDoFormProps = {
  todos: ToDoItem[];
  setTodos: Dispatch<React.SetStateAction<ToDoItem[]>>;
};

export const ToDoForm = ({ setTodos, todos }: ToDoFormProps) => {
  const [error, setError] = React.useState<string | null>(null);
  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    const { success, ...rest } = valideForm(formValues);
    if (!success && rest?.error) {
      setError(rest?.error?.join(", "));
      return;
    }
    formData.append("id", uuid());
    const todo = {
      id: formData.get("id") as string,
      item: formData.get("todo") as string,
      state: "todo" as const,
    };
    setTodos([...todos, todo]);
    form.reset();
  };
  return (
    <>
      <form
        onSubmit={formHandler}
        className="flex space-x-4 min-w-[576px] w-full mx-auto"
      >
        <label htmlFor="todo" className="w-full">
          <input
            type="text"
            name="todo"
            disabled={!!error}
            className={
              error
                ? "w-full p-2 rounded-md border border-red-400 placeholder:text-neutral-700 transition duration-300 ease-in-out"
                : "w-full p-2 rounded-md border border-transparent focus:border-primary-400 focus:ring-2 focus:ring-primary-400 focus:outline-none transition duration-300 ease-in-out"
            }
            placeholder="Cosa devi fare?"
          />
          <span className="sr-only">Cosa devi fare?</span>
        </label>

        <button
          type="submit"
          disabled={!!error}
          className={error ? "btn-disabled" : "btn-primary"}
        >
          Aggiungi
        </button>
      </form>
      {error && (
        <aside className="fixed bottom-4 right-4">
          <div className="p-4 bg-red-400 rounded-md shadow-md flex gap-4 items-center">
            <span>⚠️ {error}</span>
            <button
              onClick={() => setError(null)}
              className="bg-white text-black hover:bg-slate-200 "
            >
              Chiudi
            </button>
          </div>
        </aside>
      )}
    </>
  );
};
