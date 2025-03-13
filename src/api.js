import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const addTask = async (task) => {
  const response = await axios.post(`${API_URL}/tasks`, task);
  return response.data;
};

export const deleteTask = async (id) => {
  console.log(`Attempting to delete task with ID: ${id}`);

  if (!id || id.length !== 24) {
    console.error("Invalid Task ID format");
    return;
  }

  try {
    const response = await axios.delete(`${API_URL}/tasks/${id}`);
    console.log("Delete successful:", response.data);
  } catch (error) {
    console.error(
      "Error deleting task:",
      error.response?.data || error.message
    );
  }
};

export const toggleTaskCompletion = async (id) => {
  const response = await axios.put(`${API_URL}/tasks/${id}/toggle`); // Ensure this route exists in the backend
  return response.data;
};
