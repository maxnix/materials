import { Fragment } from "react/jsx-runtime";

type PageManagerProps = {
  todosPerPage: number;
  todos: unknown[];
  paginate: (pageNumber: number) => void;
  handleTodosPerPage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const PageManager = ({
  todos,
  todosPerPage,
  handleTodosPerPage,
  paginate,
}: PageManagerProps) => {
  return (
    <Fragment>
      <div className="flex justify-center items-center space-x-4">
        <label htmlFor="todosPerPage">Mostra</label>
        <select
          name="todosPerPage"
          id="todosPerPage"
          value={todosPerPage}
          onChange={handleTodosPerPage}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
        <label htmlFor="todosPerPage">task su {todos.length}</label>
      </div>
      <div className="flex justify-center items-center space-x-4">
        {Array.from({
          length: Math.ceil(todos.length / todosPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className="btn-primary btn-small"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </Fragment>
  );
};
