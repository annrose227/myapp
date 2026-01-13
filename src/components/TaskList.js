import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleStatus, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="tasks-section">
        <div className="empty-state">
          <p>No tasks yet. Add one to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="tasks-section">
      <div className="tasks-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleStatus={onToggleStatus}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
