import { useState } from "react";
import { addTask } from "../api";

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await addTask({ title });
    setTitle("");
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-grow bg-transparent outline-none p-2 text-white"
          placeholder="Enter a new task..."
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
