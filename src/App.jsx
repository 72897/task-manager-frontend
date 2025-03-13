import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

export default function App() {
  const [refresh, setRefresh] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen flex items-center justify-center p-6 transition-colors`}
    >
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
        {/* Dark Mode */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-white">Task Manager</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? (
              <SunIcon className="w-6 h-6 text-yellow-400" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        <TaskForm onTaskAdded={() => setRefresh(!refresh)} />
        <TaskList onTaskDeleted={() => setRefresh(!refresh)} />
      </div>
    </div>
  );
}
