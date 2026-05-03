import React, { useEffect, useState } from "react";
import "../styles/modal.css";

export default function TaskModal({
  task,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState({
    _id: "",
    title: "",
    description: "",
    deadline: "",
    priority: "low",
    status: "todo",
  });

  useEffect(() => {
    if (task) {
      setForm({
        _id: task._id,
        title: task.title || "",
        description: task.description || "",
        deadline: task.deadline || "",
        priority: task.priority || "low",
        status: task.status || "todo",
      });
    }
  }, [task]);

  if (!task) return null;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Task title is required");
      return;
    }

    onSave(form);
  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Edit Task</h2>

        <form
          className="modal-form"
          onSubmit={handleSubmit}
        >

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Task title"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Task description"
            rows="4"
          />

          <input
            type="date"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
          />

          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
          >
            <option value="low">
              Low Priority
            </option>

            <option value="medium">
              Medium Priority
            </option>

            <option value="high">
              High Priority
            </option>
          </select>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="todo">
              Todo
            </option>

            <option value="doing">
              Doing
            </option>

            <option value="done">
              Done
            </option>
          </select>

          <div className="modal-actions">

            <button
              type="submit"
              className="save-btn"
            >
              Save Changes
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}