import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p className="text-center text-gray-500">No tasks to show.</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
