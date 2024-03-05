import { ToDoContainer } from "./components/ToDoContainer";

function App() {
  return (
    <main>
      <div className="flex flex-col items-center space-y-4">
        <h1>Todo App</h1>
        <p>Una serie di cose che altrimenti dimenticherei.</p>
      </div>
      <section className="flex justify-center mt-6">
        <ToDoContainer />
      </section>
    </main>
  );
}

export default App;
