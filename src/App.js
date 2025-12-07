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
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onCLick={() => setTodo([...todos, todo])}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>Rect tutorial</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
