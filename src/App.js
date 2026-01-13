// // import "./App.css";
// // import Header from "./components/Header";
// import { useState } from "react";
// import Employee from "./components/Employee";
// function App() {
//   const [count, setCount] = useState(0);
//   // const data = "Hi I am data from App.js";
//   const addCount = () => {
//     setCount(count + 1);
//     console.log(count);
//   };
//   let emp = [
//     { name: "ganesh", age: 21 },
//     { name: "sachin", age: 22 },
//     { name: "rahul", age: 23 },
//   ];
//   return (
//     <div>
//       {/* <Header data={data} /> */}
//       <button onClick={addCount}>Add</button>
//       {emp.map((obj, index) => (
//         <Employee key={index} {...obj} />
//       ))}
//     </div>
//   );
// }

/* import Counter from "./components/Counter";
import { useState } from "react";

// export default App;
function App() {
  const [state, setState] = useState(0);
  return (
    <div className="App">
      <h1 onClick={() => setState(!state)}>Show/Hide</h1>
      {state && <Counter />}
    </div>
  );
}

export default App;
 */

import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const today = new Date();
  const weekday = today.toLocaleDateString("en-US", { weekday: "long" });
  const date = today.toLocaleDateString("en-US", { 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  });

  const addTask = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: todo, status: false }]);
      setTodo("");
    }
  };

  const toggleStatus = (id) => {
    setTodos(
      todos.map((task) => {
        if (task.id === id) {
          return { ...task, status: !task.status };
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
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

        <div className="input-section">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyPress={handleKeyPress}
            type="text"
            placeholder="Enter a new task..."
            className="task-input"
          />
          <button onClick={addTask} className="add-button">
            Add Task
          </button>
        </div>

        <div className="tasks-section">
          {todos.length === 0 ? (
            <div className="empty-state">
              <p>No tasks yet. Add one to get started!</p>
            </div>
          ) : (
            <div className="tasks-list">
              {todos.map((task) => (
                <div key={task.id} className={`task-item ${task.status ? "completed" : "pending"}`}>
                  <div className="task-content">
                    <div className="task-info">
                      <span className="task-text">{task.text}</span>
                      <span className={`task-status ${task.status ? "status-completed" : "status-pending"}`}>
                        {task.status ? "✓ Completed" : "○ Pending"}
                      </span>
                    </div>
                  </div>
                  <div className="task-actions">
                    <button
                      onClick={() => toggleStatus(task.id)}
                      className={`status-button ${task.status ? "mark-pending" : "mark-completed"}`}
                    >
                      {task.status ? "Mark Pending" : "Mark Completed"}
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="delete-button"
                      aria-label="Delete task"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
