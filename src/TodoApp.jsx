import { useReducer, useState } from "react";
import styles from "./TodoApp.module.css";

const initial = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.playload];

    case "toggle":
      return state.map((todo) =>
        todo.id === action.playload
          ? { ...todo, complete: !todo.complete }
          : todo,
      );

    case "delete":
      return state.filter((todo) => todo.id !== action.playload);

    default:
      return state;
  }
};

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initial);

  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text: text,
        complete: false,
      };

      dispatch({ type: "add", playload: newTodo });

      setText("");
    }
  };
  return (
    <div className={styles.todoAppContainer}>
      <h2 className={styles.myTodoList}>My Todo List</h2>

      <div>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="enter a new todo"
        className={styles.InputTodo}
      />

      <button onClick={handleAdd} className={styles.todoBtn}>Add</button>

      </div>

      <ul className={styles.ulTodo}>
        {state.map((todo) => (
          <li key={todo.id} className={styles.liTodo}>
            <span 
            className={styles.spanTodo}
              style={{ textDecoration: todo.complete ? "line-throug" : "none" }}
              onClick={() => dispatch({ type: "toggle", playload: todo.id })}
            >
              {todo.text}
              
            </span>
            <button
            className={styles.btnDelete}
              onClick={() => dispatch({ type: "delete", playload: todo.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
