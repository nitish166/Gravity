function Filter({ currentFilter, onChange }) {
  const filters = ["all", "completed", "pending"];

  return (
    <div className="flex justify-center gap-2 mb-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-3 py-1 rounded border ${
            currentFilter === f
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Filter;
