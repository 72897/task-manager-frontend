import { useEffect, useState } from "react";
import { fetchTasks, deleteTask, toggleTaskCompletion } from "../api";
import { TrashIcon, CheckIcon } from "@heroicons/react/outline";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id)); //
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleToggleComplete = async (id) => {
    try {
      const updatedTask = await toggleTaskCompletion(id);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, completed: updatedTask.completed } : task
        )
      );
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2 text-white">Your Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">
          No tasks yet. Start adding some!
        </p>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task._id}
              className={`flex items-center justify-between p-3 bg-gray-200 dark:bg-gray-700 rounded-lg shadow transition ${
                task.completed ? "opacity-50" : ""
              }`}
            >
              <span
                className={`text-gray-900 dark:text-white cursor-pointer transition ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
                onClick={() => handleToggleComplete(task._id)}
              >
                {task.title}
              </span>

              <div className="flex items-center space-x-2">
                <button
                  className={`p-2 rounded-lg transition ${
                    task.completed
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600 text-white"
                  }`}
                  onClick={() => handleToggleComplete(task._id)}
                  disabled={task.completed}
                >
                  <CheckIcon className="w-5 h-5" />
                </button>

                <button
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition"
                  onClick={() => handleDelete(task._id)}
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
