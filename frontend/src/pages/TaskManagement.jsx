import React, {
  useEffect,
  useState,
  useContext,
} from "react";

import Dashboard from "../components/DashBoard";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskModal from "../components/TaskModal";

import { taskApi } from "../api/taskApi";

import {
  SearchContext,
} from "../contexts/SearchContext";

export default function TaskManagement() {

  const { search } =
    useContext(SearchContext);

  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] =
    useState(null);

  // FETCH TASKS FROM API
  const fetchTasks = async () => {
    try {
      const res =
        await taskApi.getTasks(search);

      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [search]);

  // DRAG DROP UPDATE STATUS
  const updateStatus = async (
    id,
    newStatus
  ) => {
    try {
      const res =
        await taskApi.updateTaskStatus(
          id,
          newStatus
        );

      setTasks((prev) =>
        prev.map((task) =>
          task._id === id
            ? res.data
            : task
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  // OPEN EDIT MODAL
  const handleEdit = (task) => {
    setEditingTask(task);
  };

  // SAVE EDIT
  const handleSaveTask = async (
    updatedTask
  ) => {
    try {
      const res =
        await taskApi.updateTask(
          updatedTask._id,
          updatedTask
        );

      setTasks((prev) =>
        prev.map((task) =>
          task._id ===
          updatedTask._id
            ? res.data
            : task
        )
      );

      setEditingTask(null);
    } catch (error) {
      console.log(error);
    }
  };

  // CREATE TASK
  const handleCreateTask =
    async (newTask) => {
      try {
        const res =
          await taskApi.createTask(
            newTask
          );

        setTasks((prev) => [
          res.data,
          ...prev,
        ]);
      } catch (error) {
        console.log(error);
      }
    };

  // DELETE TASK
  const handleDelete = async (
    id
  ) => {
    const confirmed =
      window.confirm(
        "Are you sure you want to delete this task?"
      );

    if (!confirmed) return;

    try {
      await taskApi.deleteTask(id);

      setTasks((prev) =>
        prev.filter(
          (task) =>
            task._id !== id
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="task-page"
      style={{
        paddingLeft: "12px",
        paddingRight: "12px",
        paddingTop: "10px"
      }}
    >

      <div className="header">
        Task Dashboard
      </div>

      <Dashboard tasks={tasks} />

      <TaskForm
        onCreate={handleCreateTask}
      />

      <TaskList
        tasks={tasks}
        onUpdateStatus={updateStatus}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {editingTask && (
        <TaskModal
          task={editingTask}
          onClose={() =>
            setEditingTask(null)
          }
          onSave={handleSaveTask}
        />
      )}

    </div>
  );
}