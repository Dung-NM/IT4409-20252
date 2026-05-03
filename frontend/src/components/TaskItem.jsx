import React from "react";
import "../styles/task.css";

export default function TaskItem({
  task,
  onEdit,
  onDelete,
}) {
  return (
    <div className="task">
      <div className="task-header">
        <h4>{task.title}</h4>
      </div>

      <p className="task-desc">
        {task.description}
      </p>

      <div className="task-date">
        📅 {new Date(task.deadline).toLocaleDateString()|| "No deadline"}
      </div>

      <div className="task-meta">
        <span
          className={`priority ${task.priority}`}
        >
          {task.priority}
        </span>
      </div>

      <div className="task-actions">
        <button
          className="edit-btn"
          onClick={() => onEdit?.(task)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete?.(task._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}