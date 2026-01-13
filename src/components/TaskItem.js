import React from "react";

function TaskItem({ task, onToggleStatus, onDelete }) {
  const { id, text, status } = task;
  const statusLabel = status ? "✓ Completed" : "○ Pending";

  return (
    <div className={`task-item ${status ? "completed" : "pending"}`}>
      <div className="task-content">
        <div className="task-info">
          <span className="task-text">{text}</span>
          <span
            className={`task-status ${
              status ? "status-completed" : "status-pending"
            }`}
          >
            {statusLabel}
          </span>
        </div>
      </div>
      <div className="task-actions">
        <button
          onClick={() => onToggleStatus(id)}
          className={`status-button ${
            status ? "mark-pending" : "mark-completed"
          }`}
        >
          {status ? "Mark Pending" : "Mark Completed"}
        </button>
        <button
          onClick={() => onDelete(id)}
          className="delete-button"
          aria-label="Delete task"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
