import React, { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [draft, setDraft] = useState("");

  const today = new Date();
  const weekday = today.toLocaleDateString("en-US", { weekday: "long" });
  const date = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const addTask = () => {
    const text = draft.trim();
    if (!text) return;
    setTasks([...tasks, { id: Date.now(), text, status: false }]);
    setDraft("");
  };

  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>Task Tracker</h1>
          <p className="subtitle">Stay organized and get things done</p>
          <p className="date-info">Whoop, it's {weekday} 🌝 ☕</p>
          <p className="date-detail">{date}</p>
        </div>

        <TaskInput value={draft} onChange={setDraft} onAdd={addTask} />

        <TaskList
          tasks={tasks}
          onToggleStatus={toggleStatus}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
