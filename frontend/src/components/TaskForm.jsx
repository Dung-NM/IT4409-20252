import React, { useState } from "react";
import "../styles/form.css";

export default function TaskForm({ onCreate }) {
  const initialState = {
    title: "",
    description: "",
    deadline: "",
    priority: "low",
  };

  const [form, setForm] = useState(initialState);

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

    onCreate?.(form);

    setForm(initialState);
  };

  return (
    <div className="task-form-wrapper">
      <div className="form-header">
        <h3>Create New Task</h3>
      </div>

      <form className="task-form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="title"
          placeholder="Task title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          className="input"
          type="text"
          name="description"
          placeholder="Task description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          className="input"
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
        />

        <select
          className="input"
          name="priority"
          value={form.priority}
          onChange={handleChange}
        >
          <option value="low">🟢 Low Priority</option>
          <option value="medium">🟠 Medium Priority</option>
          <option value="high">🔴 High Priority</option>
        </select>

        <button
          className="btn primary"
          type="submit"
        >
          + Add Task
        </button>
      </form>
    </div>
  );
}