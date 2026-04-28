import React from "react";
import "../styles/dashboard.css";

export default function DashBoard({ tasks = [] }) {
  const total = tasks.length;

  const todo = tasks.filter(
    (t) => t.status === "todo"
  ).length;

  const doing = tasks.filter(
    (t) => t.status === "doing"
  ).length;

  const done = tasks.filter(
    (t) => t.status === "done"
  ).length;

  const overdue = tasks.filter(
    (t) =>
      t.deadline &&
      new Date(t.deadline) < new Date() &&
      t.status !== "done"
  ).length;

  const stats = [
    {
      title: "Total",
      value: total,
      icon: "📊",
      color: "blue",
    },
    {
      title: "Todo",
      value: todo,
      icon: "⏳",
      color: "orange",
    },
    {
      title: "Doing",
      value: doing,
      icon: "⚙️",
      color: "purple",
    },
    {
      title: "Done",
      value: done,
      icon: "✅",
      color: "green",
    },
    {
      title: "Overdue",
      value: overdue,
      icon: "🚨",
      color: "red",
    },
  ];

  return (
    <div className="dashboard">
      {stats.map((item) => (
        <div
          key={item.title}
          className={`dashboard-card ${item.color}`}
        >
          <div className="card-top">
            <span className="card-icon">
              {item.icon}
            </span>

            <span className="card-title">
              {item.title}
            </span>
          </div>

          <div className="card-value">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}