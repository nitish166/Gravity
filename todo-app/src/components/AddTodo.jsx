import { useState } from "react";

function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-l"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
