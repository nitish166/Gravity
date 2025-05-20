import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import { useState, useEffect } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("https://dummyjson.com/todos?limit=5");
        const data = await res.json();
        const mapped = data.todos.map((t) => ({
          id: t.id,
          text: t.todo,
          completed: t.completed,
        }));
        setTodos(mapped);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          React To-Do App
        </h1>
        <AddTodo onAdd={addTodo} />
        <Filter currentFilter={filter} onChange={setFilter} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleComplete}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
