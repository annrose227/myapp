import React from "react";

function TaskInput({ value, onChange, onAdd }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onAdd();
    }
  };

  return (
    <div className="input-section">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Enter a new task..."
        className="task-input"
      />
      <button onClick={onAdd} className="add-button">
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;
