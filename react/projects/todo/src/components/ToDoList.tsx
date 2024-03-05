import { ToDoItem } from "../types";

type ToDoListProps = {
  currentTodos: ToDoItem[];
  updateToDo: (id: string) => void;
  removeTodo: (id: string) => void;
};

export const ToDoList = ({
  currentTodos,
  updateToDo,
  removeTodo,
}: ToDoListProps) => {
  return (
    <ul className="flex flex-col space-y-2 mt-4 w-full">
      {currentTodos.map((todo) => (
        <Item
          key={todo.id}
          {...todo}
          updateToDo={updateToDo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

type ToDoItemProps = ToDoItem &
  Pick<ToDoListProps, "updateToDo" | "removeTodo">;

const Item = ({ item, state, id, updateToDo, removeTodo }: ToDoItemProps) => {
  return (
    <li
      className={`flex justify-between items-center bg-neutral-800 p-2 rounded-md w-full border ${
        state === "done" ? "border-green-700" : "border-transparent"
      }`}
    >
      <p>{item}</p>
      <div className="flex items-center gap-4">
        <button
          className={state === "done" ? "btn-secondary" : "btn-primary"}
          onClick={() => updateToDo(id)}
        >
          {state === "done" ? "👎🏻" : "👍🏻"}
        </button>
        <button className="btn-danger" onClick={() => removeTodo(id)}>
          X
        </button>
      </div>
    </li>
  );
};
