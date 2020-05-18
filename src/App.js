import React, { useState, useReducer } from "react";
import "./App.css";
import { todoReducer, initialState } from "./reducers/todoReducer";
import TodoForm from "./components/TodoForm";

function App() {
  const [{ todos }, dispatch] = useReducer(todoReducer, initialState);

  const handleToggle = (idx) => {
    dispatch({ type: "TOGGLE-TODO", idx });
    console.log(idx);
  };

  return (
    <div className="App">
      <h1>Reducer Todo</h1>
      <TodoForm dispatch={dispatch} />
      {todos.map((t, idx) => (
        <div
          key={idx}
          onClick={() => handleToggle(idx)}
          style={{
            width: "50%",
            margin: "0 auto",
            border: "1px solid black",
            marginTop: "2%",
          }}
        >
          <h3 style={{ textDecoration: t.completed ? "line-through" : "" }}>
            {t.item}
          </h3>
          {t.tags.map((tag) => (
            <span
              style={{
                color: "red",
                border: "1px solid black",
                marginRight: "1%",
              }}
            >
              {tag}{" "}
            </span>
          ))}
          <p style={{ color: "gray", marginTop: "-10px" }}>
            {t.completed ? (
              <p style={{ textDecoration: "none" }}>{t.finishedAt}</p>
            ) : null}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
