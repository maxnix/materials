import { useEffect, useState } from "react";
import { ToDoItem } from "../types";
import { ToDoList } from "./ToDoList";
import { PageManager } from "./PageManager";
import { ToDoForm } from "./ToDoForm";

export const ToDoContainer = () => {
  const [todos, setTodos] = useState<ToDoItem[]>(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(3);
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const removeTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleTodosPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTodosPerPage(parseInt(e.target.value));
  };

  const updateToDo = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          state: todo.state === "todo" ? ("done" as const) : ("todo" as const),
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-neutral-900 p-4 rounded-r-md w-auto">
      <div className="flex flex-col justify-between items-center">
        <ToDoForm setTodos={setTodos} todos={todos} />
        {todos.length > 0 ? (
          <div className="flex flex-col items-center w-full space-y-4">
            <ToDoList
              currentTodos={currentTodos}
              updateToDo={updateToDo}
              removeTodo={removeTodo}
            />
            <PageManager
              todosPerPage={todosPerPage}
              todos={todos}
              paginate={paginate}
              handleTodosPerPage={handleTodosPerPage}
            />
          </div>
        ) : (
          <p className="text-neutral-300 mt-4">Aggiungi il tuo primo todo</p>
        )}
      </div>
    </div>
  );
};
