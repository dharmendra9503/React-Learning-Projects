import { useEffect, useState } from "react";
import { TodoForm, TodoItem } from "./components";
import { TodoProvider } from "./context";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, toggleComplete: !prevTodo.toggleComplete } : prevTodo));
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (data && data.length > 0) {
      setTodos(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="w-full min-h-screen bg-[#172842] py-8">
        <div className="w-full max-w-2xl mx-auto shadow-lg roundef-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              todos.map((todo) => {
                return <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              })
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
