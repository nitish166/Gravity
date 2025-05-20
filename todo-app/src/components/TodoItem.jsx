function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-white p-2 mb-2 border rounded shadow-sm">
      <span
        onClick={() => onToggle(todo.id)}
        className={`flex-1 cursor-pointer ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
